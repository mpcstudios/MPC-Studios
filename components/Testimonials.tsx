import { unstable_cache } from "next/cache";
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

const getFeaturedTestimonials = unstable_cache(
  async (): Promise<TestimonialItem[]> => {
    const res = await client.queries.testimonialConnection({
      filter: { featured: { eq: true } },
    });
    const edges = res.data.testimonialConnection.edges ?? [];
    return edges
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
  },
  ["home-featured-testimonials-v1"],
  { revalidate: 3600, tags: ["testimonial"] },
);

export default async function Testimonials() {
  const testimonials = await getFeaturedTestimonials();
  return <TestimonialsClient testimonials={testimonials} />;
}
