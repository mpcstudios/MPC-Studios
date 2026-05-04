import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import client from "@/tina/__generated__/databaseClient";
import CategoryPageClient, {
  type BlogCardItem,
} from "./CategoryPageClient";
import { slugToLabel, CATEGORIES } from "../../categories";

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

/**
 * Fetches all published posts for a single category label. Keyed per-label
 * so each category page has an independent cache — editing one post doesn't
 * invalidate the entire network.
 */
const fetchCategoryCards = unstable_cache(
  async (categoryLabel: string): Promise<BlogCardItem[]> => {
    const res = (await client.request({
      user: undefined,
      query: `
        query ResourcesCategoryLean($cat: String!) {
          blogConnection(first: 500, filter: { category: { eq: $cat } }) {
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
      variables: { cat: categoryLabel },
    })) as unknown as LeanConnectionResponse;

    return (res.data.blogConnection.edges ?? [])
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
  },
  ["resources-category-cards-v1"],
  { revalidate: 3600, tags: ["blog"] },
);

export async function generateStaticParams() {
  // Pre-build every known category at build time; unknown labels (stray
  // data) still work via runtime render.
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;

  const label = slugToLabel(slug);
  if (!label) notFound();

  const pageParam = Number(sp.page ?? "1");
  const currentPage =
    Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;

  const all = await fetchCategoryCards(label);

  if (all.length === 0) notFound();

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const posts = all.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));

  return (
    <CategoryPageClient
      label={label}
      slug={slug}
      posts={posts}
      totalCount={all.length}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
