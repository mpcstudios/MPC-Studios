import client from "@/tina/__generated__/databaseClient";
import WorkClient, { type WorkProject } from "./Work.client";

export default async function Work() {
  const res = await client.queries.projectConnection({
    filter: { featured: { eq: true } },
    first: 6,
  });
  const edges = res.data.projectConnection.edges ?? [];
  const projects: WorkProject[] = edges
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .map((n) => ({
      slug: n._sys.filename,
      client: n.client,
      title: n.title,
      bg: n.bg ?? "#0E0E0E",
    }));

  return <WorkClient projects={projects} />;
}
