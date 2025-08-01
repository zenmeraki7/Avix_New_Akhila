import { Shield, CheckCircle } from "lucide-react";
import styles from "../../styles/insurance/HeroSection.module.css";
import "../../styles/avix.css";

const HeroSection = () => {
  const features = ["IRDA Certified", "50+ Insurers", "Get Consultation"];

  return (
    <section className={`${styles.heroSection} avix-gradient-primary`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBadge}>
          <Shield className="w-4 h-4 mr-2 text-yellow-300" />
          Comprehensive Insurance Solutions
        </div>

        <h1 className={styles.heroTitle}>
          Insurance <span className="text-yellow-300">Services</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Protect what matters most with expert guidance and comprehensive
          coverage solutions.
        </p>

        <div className={styles.heroFeatures}>
          {features.map((item, i) => (
            <div key={i} className={styles.heroFeature}>
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;