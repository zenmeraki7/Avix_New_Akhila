import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Investment/HeroSection";
import ServiceSection from "@/components/Investment/ServiceSection";
import WhyInvestSection from "@/components/Investment/WhyInvestSection";
import CTASection from "@/components/Investment/CTASection";

const Investment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceSection />
      <WhyInvestSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Investment;