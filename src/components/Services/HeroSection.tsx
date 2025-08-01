import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  Users,
  DollarSign,
  Clock,
  Star
} from "lucide-react";
import { useMemo } from "react";
import styles from "@/styles/services/HeroSection.module.css";
import "@/styles/avix.css";

const HeroSection = () => {
  const quickStats = useMemo(
    () => [
      { number: "10K+", label: "Happy Customers", icon: Users },
      { number: "₹100Cr+", label: "Loans Disbursed", icon: DollarSign },
      { number: "24-48hrs", label: "Quick Approval", icon: Clock },
      { number: "99%", label: "Satisfaction Rate", icon: Star },
    ],
    []
  );

  return (
    <section className={`${styles.heroSection} avix-hero-bg`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBadge}>
          <Sparkles className="w-4 h-4 mr-2" />
          Complete Financial Solutions
        </div>
        
        <h1 className={`${styles.heroTitle} avix-text-shadow`}>
          Our Financial
          <span className="block text-yellow-300">Services</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          Comprehensive financial solutions designed to meet all your personal and business needs. 
          From loans to investments, we provide expert guidance every step of the way.
        </p>

        <div className={styles.heroButtons}>
          <Button 
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
            size="lg" 
            asChild
          >
            <Link to="/calculator" className="flex items-center">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate EMI
            </Link>
          </Button>
          
          <Button 
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 avix-shadow-elegant" 
            size="lg" 
            asChild
          >
            <Link to="/contact" className="flex items-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        <div className={styles.quickStats}>
          {quickStats.map((stat, index) => (
            <div key={index} className={`${styles.statItem} avix-animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={styles.statIcon}>
                <stat.icon className="w-8 h-8 text-yellow-300" />
              </div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={`${styles.decorativeElement1} avix-animate-float`}></div>
      <div className={`${styles.decorativeElement2} avix-animate-float`} style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;