import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Users, ArrowRight } from "lucide-react";
import styles from "@/styles/about/CTASection.module.css";
import "@/styles/avix.css";

const CTASection = () => {
  return (
    <section className={`${styles.ctaSection} avix-hero-bg`}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaBadge}>
          <Star className="w-4 h-4 mr-2 text-yellow-300" />
          Ready to Get Started?
        </div>
        
        <h2 className={`${styles.ctaTitle} avix-text-shadow`}>
          Start Your Financial
          <span className="block text-yellow-300">Journey Today</span>
        </h2>
        
        <p className={styles.ctaSubtitle}>
          Join thousands of satisfied customers who trust AVIX for their financial needs. 
          Experience the difference of working with true financial partners.
        </p>
        
        <div className={styles.ctaButtons}>
          <Button 
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
            size="lg" 
            asChild
          >
            <Link to="/contact" className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Get In Touch
            </Link>
          </Button>
          
          <Button 
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 avix-shadow-elegant" 
            size="lg" 
            asChild
          >
            <Link to="/services" className="flex items-center">
              Explore Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={`${styles.decorativeElement1} avix-animate-float`}></div>
      <div className={`${styles.decorativeElement2} avix-animate-float`} style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CTASection;