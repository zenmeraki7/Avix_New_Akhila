import { Suspense, lazy } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Home/HeroSection"; 

const StatsSection = lazy(() => import("@/components/Home/StatsSection"));
const ServicesSection = lazy(() => import("@/components/Home/ServicesSection"));
const WhyChooseUsSection = lazy(() => import("@/components/Home/WhyChooseUsSection"));
const TrustedPartnersSection = lazy(() => import("@/components/Home/TrustedPartnersSection"));
const InsurancePartnersSection = lazy(() => import("@/components/Home/InsurancePartnersSection"));
const TestimonialsSection = lazy(() => import("@/components/Home/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/Home/CTASection"));

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div>Loading…</div>}>
        <StatsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TrustedPartnersSection />
        <InsurancePartnersSection />
        <TestimonialsSection />
        <CTASection />
      </Suspense>
      <Footer />
    </>
  );
}
