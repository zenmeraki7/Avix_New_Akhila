import { Calculator } from "lucide-react";
import EMICalculator from "@/components/Services/emi-calculator/EMICalculator";
import styles from "../../styles/services/EMICalculatorSection.module.css";
import "../../styles/avix.css";

const EMICalculatorSection = () => {
  return (
    <section className={styles.emiSection}>
      <div className={styles.emiContainer}>
        <div className={styles.emiHeader}>
          <div className={styles.emiTitleWrapper}>
            <div className={`${styles.emiIcon} avix-icon-bg avix-shadow-elegant`}>
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h2 className={`${styles.emiTitle} avix-text-gradient`}>EMI Calculator</h2>
          </div>
          <p className={styles.emiDescription}>
            Get instant EMI calculations for your loan requirements and plan your finances better
          </p>
        </div>
        <div className={`${styles.emiCalculatorWrapper} avix-shadow-elegant`}>
          <EMICalculator />
        </div>
      </div>
    </section>
  );
};

export default EMICalculatorSection;