import client from "@/tina/__generated__/databaseClient";
import TestimonialsClient, {
  type TestimonialItem,
} from "./Testimonials.client";

function initialsFrom(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter((c) => /[A-Za-z]/.test(c ?? ""))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default async function Testimonials() {
  const res = await client.queries.testimonialConnection({
    filter: { featured: { eq: true } },
  });
  const edges = res.data.testimonialConnection.edges ?? [];
  const testimonials: TestimonialItem[] = edges
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .map((n, i) => ({
      quote: n.quote,
      name: n.name,
      role: n.role ?? n.company ?? "",
      initials: initialsFrom(n.name),
      dark: i % 2 === 1,
    }));

  return <TestimonialsClient testimonials={testimonials} />;
}
