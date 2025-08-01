import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Stat } from "@/types/insurance";
import styles from "../../styles/insurance/StatsSection.module.css";
import "./../styles/avix.css";

const StatsSection = () => {
  const stats: Stat[] = useMemo(
    () => [
      { value: "15,000+", label: "Policies Sold" },
      { value: "98%", label: "Claim Success Rate" },
      { value: "50+", label: "Insurance Partners" },
      { value: "24 Hrs", label: "Claim Processing" },
    ],
    []
  );

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <Card
              key={i}
              className={`${styles.statCard} avix-gradient-card`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <CardContent className={styles.statContent}>
                <div className={`${styles.statValue} avix-accent`}>
                  {stat.value}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;