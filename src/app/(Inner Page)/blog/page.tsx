import AllBlogSection from "@/components/blog/AllBlogSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YelG - Blog Page",
};
export default function Home() {
  return (
    <main className="rv-14-home">
      <InnerLayout>
        <BreadcrumbSection title="News And Blog" currentPage="Blog" />
        <AllBlogSection />
      </InnerLayout>
    </main>
  );
}