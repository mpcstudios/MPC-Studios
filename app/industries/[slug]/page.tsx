import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import client from "@/tina/__generated__/databaseClient";
import IndustryPage from "@/components/industry/IndustryPage";
import {
  INDUSTRIES,
  getIndustryBySlug,
  type IndustryConfig,
} from "@/content/industries/industries";
import type {
  WorkListItem,
  TestimonialListItem,
} from "@/app/work/WorkPageClient";

export const revalidate = 3600;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

function initialsFrom(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter((c) => /[A-Za-z]/.test(c ?? ""))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const getIndustryData = unstable_cache(
  async (
    industry: IndustryConfig,
  ): Promise<{
    projects: WorkListItem[];
    testimonials: TestimonialListItem[];
  }> => {
    const [projectRes, testimonialRes] = await Promise.all([
      client.queries.projectConnection({ first: 100 }),
      client.queries.testimonialConnection({
        filter: { featured: { eq: true } },
      }),
    ]);

    const projects: WorkListItem[] = (
      projectRes.data.projectConnection.edges ?? []
    )
      .map((e) => e?.node)
      .filter((n): n is NonNullable<typeof n> => !!n)
      .filter((n) => n.industry === industry.label)
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
      .filter((n) => {
        // Only include testimonials whose linked project matches the industry.
        const project = (
          n.project as { industry?: string | null } | null | undefined
        ) ?? null;
        return project?.industry === industry.label;
      })
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      .map((n) => ({
        quote: n.quote,
        name: n.name,
        role: n.role ?? n.company ?? "",
        initials: initialsFrom(n.name),
      }));

    return { projects, testimonials };
  },
  ["industry-page-data-v1"],
  { revalidate: 3600, tags: ["project", "testimonial"] },
);

export default async function IndustryRoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const { projects, testimonials } = await getIndustryData(industry);

  return (
    <IndustryPage
      industry={industry}
      projects={projects}
      testimonials={testimonials}
    />
  );
}
