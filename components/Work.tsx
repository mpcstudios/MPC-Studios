import { unstable_cache } from "next/cache";
import client from "@/tina/__generated__/databaseClient";
import WorkClient, { type WorkProject } from "./Work.client";

const getFeaturedProjects = unstable_cache(
  async (): Promise<WorkProject[]> => {
    const res = await client.queries.projectConnection({
      filter: { featured: { eq: true } },
      first: 6,
    });
    const edges = res.data.projectConnection.edges ?? [];
    return edges
      .map((e) => e?.node)
      .filter((n): n is NonNullable<typeof n> => !!n)
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      .map((n) => ({
        slug: n._sys.filename,
        client: n.client,
        title: n.title,
        bg: n.bg ?? "#0E0E0E",
        coverImage: n.coverImage ?? undefined,
        industry: n.industry ?? undefined,
        description: n.description ?? undefined,
        stat: (() => {
          for (const s of n.stats ?? []) {
            if (s && s.value && s.label) {
              return { value: s.value, label: s.label };
            }
          }
          return undefined;
        })(),
      }));
  },
  ["home-featured-projects-v3"],
  { revalidate: 3600, tags: ["project"] },
);

export default async function Work() {
  const projects = await getFeaturedProjects();
  return <WorkClient projects={projects} />;
}
