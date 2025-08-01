import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import bg from "../../public/assets/bg.png";
import styles from "@/styles/home/HeroSection.module.css";
import "@/styles/avix.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className={`${styles.heroOverlay} avix-gradient-primary`} />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Where Financial Clarity Begins
        </h1>
        <p className={styles.heroSubtitle}>
          From loans to investments, insurance to tax planning - we provide
          comprehensive financial solutions tailored to your needs.
        </p>
        <div className={styles.heroButtons}>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30" size="lg" asChild>
            <Link to="/services">
              Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button className="avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
            <Link to="/calculator">
              <Calculator className="w-5 h-5 mr-2" />
              EMI Calculator
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;