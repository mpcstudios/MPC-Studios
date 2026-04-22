import client from "@/tina/__generated__/client";
import ResourcesPageClient, {
  type BlogCardItem,
} from "./ResourcesPageClient";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ResourcesPage() {
  const res = await client.queries.blogConnection({
    filter: { status: { eq: "published" } },
    first: 100,
  });

  const all: BlogCardItem[] = (res.data.blogConnection.edges ?? [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n)
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    })
    .map((n) => ({
      slug: n._sys.filename,
      title: n.title,
      category: n.category ?? "Article",
      date: n.date ? formatDate(n.date) : "",
      read: n.readTime ?? "",
      bg: n.bg ?? "#0E0E0E",
    }));

  const [featured, ...rest] = all;

  return (
    <ResourcesPageClient posts={rest} featured={featured ?? null} />
  );
}
