import { Suspense, lazy } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Lazy-loaded components
const HeroSection = lazy(() => import("@/components/About/HeroSection"));
const FoundationSection = lazy(() => import("@/components/About/FoundationSection"));
const ValuesSection = lazy(() => import("@/components/About/ValuesSection"));
const JourneySection = lazy(() => import("@/components/About/JourneySection"));
const WhyChooseUsSection = lazy(() => import("@/components/About/WhyChooseUsSection"));
const CTASection = lazy(() => import("@/components/About/CTASection"));

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <FoundationSection />
        <ValuesSection />
        <JourneySection />
        <WhyChooseUsSection />
        <CTASection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default About;
