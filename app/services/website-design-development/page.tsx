import type { Metadata } from "next";
import {
  ServicePageShell,
  ServiceHero,
  ServiceIntro,
  ServiceDeliverables,
  ServiceCapabilities,
  ServiceProcess,
  ServiceIndustries,
  ServiceNext,
} from "@/components/service-page";
import { websiteDesignDevelopment as data } from "@/content/services/website-design-development";

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
      <ServiceIndustries items={data.industries} />
      <ServiceNext {...data.next} />
    </ServicePageShell>
  );
}
