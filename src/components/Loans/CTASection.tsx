import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import styles from "../../styles/loans/CTASection.module.css";
import "../../styles/avix.css";

const CTASection = () => {
  return (
    <div className={`${styles.ctaSection} avix-gradient-primary`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to Get Started?
        </h2>
        <p className={styles.ctaSubtitle}>
          Take the first step towards your financial goals. Our experts are
          here to help you choose the right loan.
        </p>
        <div className={styles.ctaButtons}>
          <Button asChild className={styles.ctaPrimaryButton}>
            <Link to="/calculator">
              Calculate EMI
            </Link>
          </Button>
          <Button asChild variant="outline" className={styles.ctaSecondaryButton}>
            <Link to="/contact">
              Talk to Expert
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;