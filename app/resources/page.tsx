import { unstable_cache } from "next/cache";
import client from "@/tina/__generated__/databaseClient";
import ResourcesPageClient, {
  type BlogCardItem,
} from "./ResourcesPageClient";

// Rebuild the cards list at most once an hour; individual saves in the Tina
// admin can invalidate via the "blog" tag.
export const revalidate = 3600;

const POSTS_PER_PAGE = 12;

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
      }));

    return rows;
  },
  ["resources-blog-cards-v1"],
  { revalidate: 3600, tags: ["blog"] },
);

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const pageParam = Number(sp.page ?? "1");
  const currentPage =
    Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;

  const all = await fetchAllCards();

  // Page 1: featured = posts[0], grid = posts[1..12]   (12 grid cards)
  // Page 2+: no featured,        grid = posts[13 + (N-2)*12 .. 13 + (N-1)*12]
  const gridStart =
    currentPage === 1 ? 1 : 1 + POSTS_PER_PAGE + (currentPage - 2) * POSTS_PER_PAGE;
  const gridEnd = gridStart + POSTS_PER_PAGE;

  const featured = currentPage === 1 && all.length > 0 ? all[0] : null;
  const posts = all.slice(gridStart, gridEnd);

  const totalGrid = Math.max(0, all.length - 1); // everything except featured
  const totalPages = Math.max(
    1,
    1 + Math.ceil(Math.max(0, totalGrid - POSTS_PER_PAGE) / POSTS_PER_PAGE),
  );

  return (
    <ResourcesPageClient
      posts={posts}
      featured={featured}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
