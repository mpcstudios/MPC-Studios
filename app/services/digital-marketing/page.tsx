import type { Metadata } from "next";
import {
  ServicePageShell,
  ServiceHero,
  ServiceHeroAnalytics,
  ServiceIntro,
  ServiceDeliverables,
  ServiceCapabilities,
  ServiceProcess,
  ServiceIndustries,
  ServiceNext,
} from "@/components/service-page";
import { digitalMarketing as data } from "@/content/services/digital-marketing";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return (
    <ServicePageShell>
      <ServiceHero {...data.hero} visual={<ServiceHeroAnalytics />} />
      <ServiceIntro paragraphs={data.intro} />
      <ServiceDeliverables items={data.deliverables} />
      <ServiceCapabilities items={data.capabilities} />
      <ServiceProcess steps={data.process} />
      <ServiceIndustries items={data.industries} />
      <ServiceNext {...data.next} />
    </ServicePageShell>
  );
}
