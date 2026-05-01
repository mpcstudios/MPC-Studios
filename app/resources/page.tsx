import { unstable_cache } from "next/cache";
import client from "@/tina/__generated__/databaseClient";
import ResourcesPageClient, {
  type BlogCardItem,
  type CategoryRow,
} from "./ResourcesPageClient";
import { CATEGORIES, labelToSlug } from "./categories";

// Rebuild the cards list at most once an hour; individual saves in the Tina
// admin can invalidate via the "blog" tag.
export const revalidate = 3600;

const POSTS_PER_ROW = 3;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Lean GraphQL query — skips the heavy `body` rich-text field entirely so the
 * resources index doesn't haul ~86 MDX bodies over the wire (in cloud mode,
 * each adds Upstash round-trip latency).
 */
type LeanBlogNode = {
  _sys: { filename: string };
  title: string;
  category?: string | null;
  date?: string | null;
  readTime?: string | null;
  bg?: string | null;
  status?: string | null;
  coverImage?: string | null;
};

type LeanConnectionResponse = {
  data: {
    blogConnection: {
      edges: Array<{ node: LeanBlogNode | null } | null> | null;
    };
  };
};

const fetchAllCards = unstable_cache(
  async (): Promise<BlogCardItem[]> => {
    const res = (await client.request({
      // `user` is optional at runtime but required in the generated TS sig
      user: undefined,
      query: `
        query ResourcesIndexLean {
          blogConnection(first: 500) {
            edges {
              node {
                ... on Document { _sys { filename } }
                ... on Blog {
                  title
                  category
                  date
                  readTime
                  bg
                  status
                  coverImage
                }
              }
            }
          }
        }
      `,
      variables: {},
    })) as unknown as LeanConnectionResponse;

    const rows = (res.data.blogConnection.edges ?? [])
      .map((e) => e?.node)
      .filter((n): n is LeanBlogNode => !!n)
      .filter((n) => n.status !== "draft")
      .sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : 0;
        const db = b.date ? new Date(b.date).getTime() : 0;
        return db - da;
      })
      .map<BlogCardItem>((n) => ({
        slug: n._sys.filename,
        title: n.title,
        category: n.category ?? "Article",
        date: n.date ? formatDate(n.date) : "",
        read: n.readTime ?? "",
        bg: n.bg ?? "#0E0E0E",
        coverImage: n.coverImage ?? null,
      }));

    return rows;
  },
  ["resources-blog-cards-v3"],
  { revalidate: 3600, tags: ["blog"] },
);

export default async function ResourcesPage() {
  const all = await fetchAllCards();

  // Bucket posts by category label; posts are already sorted newest-first
  // from fetchAllCards, so slicing the first N gives the most-recent N.
  const buckets = new Map<string, BlogCardItem[]>();
  for (const post of all) {
    const list = buckets.get(post.category) ?? [];
    list.push(post);
    buckets.set(post.category, list);
  }

  // Build rows in the schema's canonical category order. Skip any category
  // with zero published posts so we don't render empty rows.
  const knownRows: CategoryRow[] = CATEGORIES
    .map<CategoryRow | null>(({ label, slug }) => {
      const list = buckets.get(label) ?? [];
      if (list.length === 0) return null;
      return {
        label,
        slug,
        posts: list.slice(0, POSTS_PER_ROW),
        totalCount: list.length,
      };
    })
    .filter((r): r is CategoryRow => r !== null);

  // Capture any legacy / unexpected category labels that exist in content
  // but aren't in the schema enum. Shown at the end so nothing is orphaned.
  const knownLabels = new Set(CATEGORIES.map((c) => c.label));
  const strayRows: CategoryRow[] = Array.from(buckets.entries())
    .filter(([label]) => !knownLabels.has(label))
    .map(([label, list]) => ({
      label,
      slug: labelToSlug(label),
      posts: list.slice(0, POSTS_PER_ROW),
      totalCount: list.length,
    }));

  const rows: CategoryRow[] = [...knownRows, ...strayRows];

  // Featured rail — pull the most recent post from each of these categories
  // in this order. Skip any category with no posts; fall back to the latest
  // overall posts to keep the rail full if a category is empty.
  const FEATURED_CATEGORY_ORDER = [
    "Digital Marketing",
    "Web Design",
    "AI & Automation",
    "Branding",
    "Content",
  ];

  const seenSlugs = new Set<string>();
  const featuredOrdered: BlogCardItem[] = [];
  for (const label of FEATURED_CATEGORY_ORDER) {
    const first = (buckets.get(label) ?? [])[0];
    if (first && !seenSlugs.has(first.slug)) {
      featuredOrdered.push(first);
      seenSlugs.add(first.slug);
    }
  }
  // Backfill from the global newest-first list if any slot is empty.
  for (const post of all) {
    if (featuredOrdered.length >= 5) break;
    if (!seenSlugs.has(post.slug)) {
      featuredOrdered.push(post);
      seenSlugs.add(post.slug);
    }
  }

  const featured = featuredOrdered[0] ?? null;
  const featuredStack = featuredOrdered.slice(1, 5);

  return (
    <ResourcesPageClient
      rows={rows}
      featured={featured}
      featuredStack={featuredStack}
    />
  );
}
