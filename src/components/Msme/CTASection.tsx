import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Target } from "lucide-react";
import styles from "@/styles/msme/CTASection.module.css";
import "@/styles/avix.css";

const CTASection = () => {
  return (
    <div className={`${styles.ctaSection} avix-gradient-primary`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to Grow Your Business?
        </h2>
        <p className={styles.ctaSubtitle}>
          Get expert guidance and competitive rates for all your MSME
          financing needs.
        </p>
        <div className={styles.ctaButtons}>
          <Button asChild className={styles.ctaPrimaryButton}>
            <Link to="/contact">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Talk to Expert
            </Link>
          </Button>
          <Button asChild variant="outline" className={styles.ctaSecondaryButton}>
            <Link to="/calculator">
              <Target className="w-5 h-5 mr-2 text-yellow-300" />
              Calculate EMI
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;