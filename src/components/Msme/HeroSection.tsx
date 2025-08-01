import { useMemo } from "react";
import {
  Factory,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";
import { Stat } from "@/types/msme";
import styles from "../../styles/msme/HeroSection.module.css";
import "../../styles/avix.css";

const HeroSection = () => {
  const stats: Stat[] = useMemo(
    () => [
      { value: "25,000+", label: "MSMEs Funded", icon: Factory },
      { value: "₹2,500 Cr+", label: "Loans Disbursed", icon: TrendingUp },
      { value: "48 Hours", label: "Quick Approval", icon: Clock },
      { value: "15+", label: "Years Experience", icon: Award },
    ],
    []
  );

  const features = ["RBI Approved", "Quick Processing", "Competitive Rates"];

  return (
    <div className={`${styles.heroSection} avix-gradient-primary`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBadge}>
          <Factory className="w-4 h-4 mr-2 text-yellow-300" />
          MSME Banking Solutions
        </div>
        <h1 className={styles.heroTitle}>
          <span className="text-yellow-300">MSME</span> Business Loans
        </h1>
        <p className={styles.heroSubtitle}>
          Comprehensive financing solutions for Micro, Small & Medium
          Enterprises.
        </p>
        <div className={styles.heroFeatures}>
          {features.map((label, idx) => (
            <div key={idx} className={styles.heroFeature}>
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={styles.statCard}
              style={{
                animationDelay: `${i * 200}ms`,
              }}
            >
              <stat.icon className={styles.statIcon} />
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;