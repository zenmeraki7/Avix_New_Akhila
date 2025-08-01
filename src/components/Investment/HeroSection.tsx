import { FC, memo, useMemo } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Stat, StatCardProps } from "@/types/investment";
import styles from "@/styles/investment/HeroSection.module.css";
import "@/styles/avix.css";

const StatCard: FC<StatCardProps> = memo(({ stat, index }) => (
  <Card 
    className={styles.statCard}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <CardContent className={styles.statContent}>
      <div className={styles.statValue}>{stat.value}</div>
      <div className={styles.statLabel}>{stat.label}</div>
    </CardContent>
  </Card>
));

StatCard.displayName = "StatCard";

const HeroSection = () => {
  const stats: Stat[] = useMemo(
    () => [
      { value: "50,000+", label: "Happy Investors" },
      { value: "₹500 Cr+", label: "Assets Under Management" },
      { value: "15.2%", label: "Average Returns" },
      { value: "10+", label: "Years Experience" },
    ],
    []
  );

  return (
    <section className={`${styles.heroSection} avix-gradient-primary`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBadge}>
          <Star className="w-4 h-4 mr-2 text-yellow-400" />
          Trusted by 50,000+ Investors
        </div>

        <h1 className={styles.heroTitle}>
          Investment <span className="text-yellow-300">Services</span>
        </h1>

        <p className={styles.heroSubtitle}>
          Transform your financial future with our comprehensive investment services. 
          From SIPs to expert portfolio guidance — we've got you covered.
        </p>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;