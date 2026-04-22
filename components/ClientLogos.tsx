import client from "@/tina/__generated__/databaseClient";
import ClientLogosUI, { type LogoItem } from "./ClientLogos.client";

export default async function ClientLogos() {
  const res = await client.queries.clientConnection({
    filter: { featured: { eq: true } },
    first: 200,
  });

  const logos: LogoItem[] = (res.data.clientConnection.edges ?? [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => !!n && !!n.logo)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .map((n) => ({ src: n.logo as string, alt: n.name }));

  return <ClientLogosUI logos={logos} />;
}
