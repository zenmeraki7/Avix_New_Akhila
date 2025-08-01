import { Link } from "react-router-dom";
import { Phone, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "@/styles/insurance/CTASection.module.css";
import "@/styles/avix.css";

const CTASection = () => {
  return (
    <section className={`${styles.ctaSection} avix-gradient-primary`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Get Protected Today
        </h2>
        <p className={styles.ctaSubtitle}>
          Don't wait to secure your future. Get the perfect insurance
          coverage now with expert guidance.
        </p>
        <div className={styles.ctaButtons}>
          <Button
            className="avix-button-secondary hover:avix-button-secondary"
            size="lg"
            asChild
          >
            <Link to="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Call Expert Now
            </Link>
          </Button>
          <Button
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            size="lg"
            asChild
          >
            <Link to="/contact">
              <Calculator className="w-5 h-5 mr-2" />
              Get Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;