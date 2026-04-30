import { unstable_cache } from "next/cache";
import client from "@/tina/__generated__/databaseClient";
import WorkPageClient, {
  type TestimonialListItem,
  type WorkListItem,
} from "./WorkPageClient";

export const revalidate = 3600;

function initialsFrom(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter((c) => /[A-Za-z]/.test(c ?? ""))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const getWorkPageData = unstable_cache(
  async (): Promise<{
    projects: WorkListItem[];
    testimonials: TestimonialListItem[];
  }> => {
    const [projectRes, testimonialRes] = await Promise.all([
      client.queries.projectConnection({ first: 100 }),
      client.queries.testimonialConnection({
        filter: { featured: { eq: true } },
      }),
    ]);

    const projects: WorkListItem[] = (projectRes.data.projectConnection.edges ?? [])
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

    const testimonials: TestimonialListItem[] = (
      testimonialRes.data.testimonialConnection.edges ?? []
    )
      .map((e) => e?.node)
      .filter((n): n is NonNullable<typeof n> => !!n)
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      .map((n) => ({
        quote: n.quote,
        name: n.name,
        role: n.role ?? n.company ?? "",
        initials: initialsFrom(n.name),
      }));

    return { projects, testimonials };
  },
  ["work-page-data-v3"],
  { revalidate: 3600, tags: ["project", "testimonial"] },
);

export default async function WorkPage() {
  const { projects, testimonials } = await getWorkPageData();
  return <WorkPageClient projects={projects} testimonials={testimonials} />;
}
