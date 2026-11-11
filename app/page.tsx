import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/layout/sections/hero";
import { BeforeAfterSection } from "@/components/layout/sections/before-after";
import { PricingSection } from "@/components/layout/sections/pricing";
import { BranchesMapSection } from "@/components/layout/sections/branches-map";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata = {
  title: "عيادات لوميير بجدة | وجهتكِ الأولى للجمال الطبيعي والجلدية",
  description:
    "نخبة من استشاريات التجميل والجلدية لتقديم أحدث جلسات النضارة، الفيلر، وليزر كانديلا بأعلى معايير الأمان الطبي بجدة.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#141619] text-white">
      <Navbar />
      <HeroSection />
      <BeforeAfterSection />
      <PricingSection />
      <BranchesMapSection />
      <FooterSection />
    </main>
  );
}
