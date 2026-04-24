import type { Metadata } from "next";
import {
  ServicePageShell,
  ServiceHero,
  ServiceIntro,
  ServiceDeliverables,
  ServiceCapabilities,
  ServiceProcess,
  ServiceNext,
} from "@/components/service-page";
import { contentCreation as data } from "@/content/services/content-creation";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return (
    <ServicePageShell>
      <ServiceHero {...data.hero} />
      <ServiceIntro paragraphs={data.intro} />
      <ServiceDeliverables items={data.deliverables} />
      <ServiceCapabilities items={data.capabilities} />
      <ServiceProcess steps={data.process} />
      <ServiceNext {...data.next} />
    </ServicePageShell>
  );
}
