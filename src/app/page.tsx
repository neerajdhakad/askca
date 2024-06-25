import AboutUs from "@/components/AboutUs";
import Effortless from "@/components/Effortless";
import HeroSection from "@/components/HeroSection";
import OurFeatures from "@/components/OurFeatures";
import Required from "@/components/Required";

export default function Home() {
  return (
    <div className="text-2xl center bg-[#101010]"> 
      <HeroSection/>
      <Effortless/>
      <OurFeatures/>
      <AboutUs/>
      <Required/>
    </div>
  );
}
