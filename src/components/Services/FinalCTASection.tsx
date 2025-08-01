import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import styles from "@/styles/services/FinalCTASection.module.css";
import "@/styles/avix.css";

const FinalCTASection = () => {
  return (
    <section className={`${styles.ctaSection} avix-hero-bg`}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaBadge}>
          <Star className="w-4 h-4 mr-2 text-yellow-300" />
          Personalized Solutions
        </div>
        
        <h2 className={`${styles.ctaTitle} avix-text-shadow`}>
          Need a Custom
          <span className="block text-yellow-300">Financial Solution?</span>
        </h2>
        
        <p className={styles.ctaSubtitle}>
          Our certified experts can create a personalized financial plan tailored specifically 
          to your unique goals and circumstances.
        </p>
        
        <Button 
          className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 avix-shadow-elegant" 
          size="lg" 
          asChild
        >
          <Link to="/contact" className="flex items-center">
            Contact Our Experts
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className={`${styles.decorativeElement1} avix-animate-float`}></div>
      <div className={`${styles.decorativeElement2} avix-animate-float`} style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default FinalCTASection;