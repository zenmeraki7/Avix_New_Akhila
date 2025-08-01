import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Services/HeroSection";
import ServiceCategories from "@/components/Services/ServiceCategories";

// Lazily load components
const WhyChooseAVIXSection = lazy(() => import('@/components/Services/WhyChooseAVIXSection'));
const EMICalculatorSection = lazy(() => import('@/components/Services/EMICalculatorSection'));
const FinalCTASection = lazy(() => import('@/components/Services/FinalCTASection'));

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServiceCategories />
      
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <WhyChooseAVIXSection />
        <EMICalculatorSection />
        <FinalCTASection />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Services;
