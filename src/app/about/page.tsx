/* eslint-disable prettier/prettier */
import AboutBanner from "@/src/components/pages/about/AboutBanner";
import Mission from "@/src/components/pages/about/Mission";


export default function AboutPage() {
  return (
    <div className="space-y-20">
      <AboutBanner/>
      <Mission/>
    </div>
  );
}
