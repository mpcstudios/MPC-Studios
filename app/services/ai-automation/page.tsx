import type { Metadata } from "next";
import {
  ServicePageShell,
  ServiceHero,
  ServiceHeroChat,
  ServiceIntro,
  ServiceDeliverables,
  ServiceCapabilities,
  ServiceProcess,
  ServiceNext,
} from "@/components/service-page";
import { aiAutomation as data } from "@/content/services/ai-automation";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return (
    <ServicePageShell>
      <ServiceHero {...data.hero} visual={<ServiceHeroChat />} />
      <ServiceIntro paragraphs={data.intro} />
      <ServiceDeliverables items={data.deliverables} />
      <ServiceCapabilities items={data.capabilities} />
      <ServiceProcess steps={data.process} />
      <ServiceNext {...data.next} />
    </ServicePageShell>
  );
}
