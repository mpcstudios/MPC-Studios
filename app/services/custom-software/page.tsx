import type { Metadata } from "next";
import {
  ServicePageShell,
  ServiceHero,
  ServiceHeroPhone,
  ServiceIntro,
  ServiceDeliverables,
  ServiceProcess,
  ServiceIndustries,
  ServiceNext,
} from "@/components/service-page";
import { customSoftware as data } from "@/content/services/custom-software";

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return (
    <ServicePageShell>
      <ServiceHero {...data.hero} visual={<ServiceHeroPhone />} />
      <ServiceIntro paragraphs={data.intro} />
      <ServiceDeliverables items={data.deliverables} />
      <ServiceProcess steps={data.process} />
      <ServiceIndustries items={data.industries} />
      <ServiceNext {...data.next} />
    </ServicePageShell>
  );
}
