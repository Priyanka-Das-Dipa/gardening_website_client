/* eslint-disable prettier/prettier */
import AboutBanner from "@/src/components/pages/about/AboutBanner";
import AboutCards from "@/src/components/pages/about/AboutCards";
import Mission from "@/src/components/pages/about/Mission";

export default function AboutPage() {
  return (
    <div className="space-y-20 bg-red-50/40">
      <AboutBanner />
      <AboutCards />
      <Mission />
    </div>
  );
}
