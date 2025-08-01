import { CheckCircle } from "lucide-react";
import { useMemo } from "react";
import styles from "@/styles/about/WhyChooseUsSection.module.css";
import "@/styles/avix.css";

const WhyChooseUsSection = () => {
  const reasons = useMemo(
    () => [
      "8+ years of proven expertise in financial services",
      "Transparent processes with no hidden charges",
      "Quick approvals and minimal documentation",
      "Competitive interest rates and flexible terms",
      "Comprehensive range of financial products",
      "24/7 customer support and assistance",
      "Digital-first approach for convenient service",
      "Regulatory compliant and secure operations"
    ],
    []
  );

  return (
    <section className={`${styles.whyChooseSection} avix-gradient-secondary`}>
      <div className={styles.whyChooseContainer}>
        <div className={styles.whyChooseHeader}>
          <h2 className={`${styles.whyChooseTitle} avix-text-gradient`}>Why Choose AVIX?</h2>
          <p className={styles.whyChooseSubtitle}>
            Discover what makes us the preferred choice for thousands of satisfied customers
          </p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={`${styles.reasonItem} avix-shadow-soft hover:avix-shadow-elegant`}>
              <div className={`${styles.reasonIcon} avix-gradient-primary`}>
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className={styles.reasonText}>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;