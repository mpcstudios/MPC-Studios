import client from "@/tina/__generated__/client";
import WorkPageClient, {
  type TestimonialListItem,
  type WorkListItem,
} from "./WorkPageClient";

function initialsFrom(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter((c) => /[A-Za-z]/.test(c ?? ""))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default async function WorkPage() {
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

  return <WorkPageClient projects={projects} testimonials={testimonials} />;
}
