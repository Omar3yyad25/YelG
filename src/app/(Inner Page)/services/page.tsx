import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import ServiceSection5 from "@/components/service/ServiceSection5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YelG - Services",
};
export default function Home() {
  return (
    <main className="rv-14-body service-inner-page">
      <InnerLayout>
        <BreadcrumbSection title="Services" />
        <ServiceSection5 />
        <CtaSection />
      </InnerLayout>
    </main>
  );
}
