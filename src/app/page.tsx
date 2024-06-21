import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import OurFeatures from "@/components/OurFeatures";
import Required from "@/components/Required";

export default function Home() {
  return (
    <div className="text-2xl center"> 
      <HeroSection/>
      <OurFeatures/>
      <AboutUs/>
      <Required/>
      <ContactForm/>
    </div>
  );
}
