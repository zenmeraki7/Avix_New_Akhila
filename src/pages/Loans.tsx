import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/Loans/HeroSection";
import ServiceGrid from "@/components/Loans/ServiceGrid";
import CTASection from "@/components/Loans/CTASection";

const Loans = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ServiceGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Loans;