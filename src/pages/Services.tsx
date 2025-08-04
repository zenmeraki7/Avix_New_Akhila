import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Services/HeroSection";
import ServiceCategories from "@/components/Services/ServiceCategories";
import WhyChooseAVIXSection from "@/components/Services/WhyChooseAVIXSection";
import EMICalculatorSection from "@/components/Services/EMICalculatorSection";
import FinalCTASection from "@/components/Services/FinalCTASection";


const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServiceCategories />
        <WhyChooseAVIXSection />
        <EMICalculatorSection />
        <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Services;
