import { useMemo } from "react";
import CountUp from "react-countup";
import styles from "@/styles/home/StatsSection.module.css";
import "@/styles/avix.css";

const StatsSection = () => {
  const stats = useMemo(
    () => [
      { number: 10000, suffix: "+", label: "Happy Customers" },
      { number: 100, suffix: "Cr+", prefix: "₹", label: "Loans Disbursed" },
      { number: 8, suffix: "+", label: "Years Experience" },
      { number: 100, suffix: "%", label: "Customer Satisfaction" },
    ],
    []
  );

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={`${styles.statNumber} avix-accent`}>
                <CountUp
                  end={stat.number}
                  duration={2}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                  enableScrollSpy
                  scrollSpyDelay={100}
                />
              </div>
              <div className={styles.statLabel}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;