import { unstable_cache } from "next/cache";
import client from "@/tina/__generated__/databaseClient";
import ClientLogosUI, { type LogoItem } from "./ClientLogos.client";

const getFeaturedLogos = unstable_cache(
  async (): Promise<LogoItem[]> => {
    const res = await client.queries.clientConnection({
      filter: { featured: { eq: true } },
      first: 200,
    });
    return (res.data.clientConnection.edges ?? [])
      .map((e) => e?.node)
      .filter((n): n is NonNullable<typeof n> => !!n && !!n.logo)
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      .map((n) => ({ src: n.logo as string, alt: n.name }));
  },
  ["home-featured-logos-v1"],
  { revalidate: 3600, tags: ["client"] },
);

export default async function ClientLogos() {
  const logos = await getFeaturedLogos();
  return <ClientLogosUI logos={logos} />;
}
