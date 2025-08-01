import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "../../styles/insurance/WhyChooseSection.module.css";
import "../../styles/avix.css";

const WhyChooseSection = () => {
  const benefits = useMemo(
    () => [
      "IRDA certified insurance advisors",
      "Free consultation and policy comparison",
      "Cashless claim processing support",
      "50+ insurance company partnerships",
      "End-to-end policy management",
      "Tax-saving insurance solutions",
    ],
    []
  );

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.whyChooseContainer}>
        <div className={styles.whyChooseGrid}>
          <div className={styles.whyChooseContent}>
            <h2 className={styles.whyChooseTitle}>
              Why Choose AVIX for Insurance?
            </h2>
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <CheckCircle className={`${styles.benefitIcon} avix-accent`} />
                  <span className={styles.benefitText}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className={`${styles.contactCard} avix-gradient-primary avix-shadow-hero`}>
            <CardHeader className={styles.contactHeader}>
              <CardTitle className={styles.contactTitle}>
                Ready to Get Protected?
              </CardTitle>
              <CardDescription className={styles.contactDescription}>
                Get expert insurance advice and comprehensive coverage
              </CardDescription>
            </CardHeader>
            <CardContent className={styles.contactContent}>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Phone className="w-6 h-6" />
                  <span>+91 99468 41656</span>
                </div>
                <div className={styles.contactItem}>
                  <span className="w-6 h-6 text-center text-lg">📧</span>
                  <span>avixfinancialsolutions@gmail.com</span>
                </div>
              </div>
              <div className={styles.contactButtons}>
                <Button
                  className="w-full avix-button-secondary hover:avix-button-secondary"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">Get Consultation</Link>
                </Button>
                <Button
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">
                    <Calculator className="w-5 h-5 mr-2" />
                    Get Insurance Quote
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;