import { CheckCircle } from "lucide-react";
import styles from "@/styles/loans/HeroSection.module.css";
import "@/styles/avix.css";

const HeroSection = () => {
  const features = [
    "Quick Approval",
    "Competitive Rates", 
    "Flexible Terms"
  ];

  return (
    <div className={`${styles.heroSection} avix-gradient-primary`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Our <span className="text-yellow-300">Loan Services</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Comprehensive financial solutions tailored to meet your diverse
            needs. From personal loans to investment financing, we've got you
            covered.
          </p>
          <div className={styles.heroFeatures}>
            {features.map((feature, index) => (
              <div key={index} className={styles.heroFeature}>
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;