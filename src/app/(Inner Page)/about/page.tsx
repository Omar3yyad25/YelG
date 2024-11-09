import React from "react";
import { Metadata } from "next";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import AboutSection from "@/components/about/AboutSection";
import SpeakerSlider from "@/components/slider/SpeakerSlider";
import CtaSection from "@/components/cta/CtaSection";
import InnerLayout from "@/components/layout/InnerLayout";
import TeamSection2 from "@/components/team/TeamSection2";
import AboutSection5 from "@/components/about/AboutSection5";

export const metadata: Metadata = {
  title: "YelG - About",
};
export default function Home() {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="About" currentPage="About Us" />
        <AboutSection5 />
        <TeamSection2 />
        <CtaSection />
      </InnerLayout>
    </main>
  );
}
