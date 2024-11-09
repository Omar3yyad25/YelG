import AuthSection from "@/components/authentication/AuthSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/components/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YelG - Register",
};
export default function Home() {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Register" />
        <AuthSection />
      </InnerLayout>
    </main>
  );
}
