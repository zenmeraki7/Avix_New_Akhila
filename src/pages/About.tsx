import { Suspense, lazy } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import FoundationSection from "@/components/About/FoundationSection";
import ValuesSection from "@/components/About/ValuesSection";
import JourneySection from "@/components/About/JourneySection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import CTASection from "@/components/Home/CTASection";



const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        <HeroSection />
        <FoundationSection />
        <ValuesSection />
        <JourneySection />
        <WhyChooseUsSection />
        <CTASection/>
    
      <Footer />
    </div>
  );
};

export default About;
