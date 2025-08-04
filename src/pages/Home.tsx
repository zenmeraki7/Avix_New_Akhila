import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Home/HeroSection";

import StatsSection from "@/components/Home/StatsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import WhyChooseUsSection from "@/components/Home/WhyChooseUsSection";
import TrustedPartnersSection from "@/components/Home/TrustedPartnersSection";
import InsurancePartnersSection from "@/components/Home/InsurancePartnersSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import CTASection from "@/components/Home/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TrustedPartnersSection />
      <InsurancePartnersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}

