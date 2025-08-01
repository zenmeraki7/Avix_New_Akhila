import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "@/styles/investment/CTASection.module.css";
import "@/styles/avix.css";

const CTASection = () => {
  return (
    <section className={`${styles.ctaSection} avix-gradient-primary`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to Start Your Investment Journey?
        </h2>
        <p className={styles.ctaSubtitle}>
          Let our experts guide you to the best investment path. No fees for consultation, 
          no pressure — just great advice.
        </p>
        <div className={styles.ctaButtons}>
          <Button className="avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
            <Link to="/contact">
              <DollarSign className="w-5 h-5 mr-2" />
              Start SIP Today
            </Link>
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30" size="lg" asChild>
            <Link to="/contact">
              Book Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;