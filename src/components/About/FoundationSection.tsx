import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import styles from "@/styles/about/FoundationSection.module.css";
import "@/styles/avix.css";

const FoundationSection = () => {
  const foundations = useMemo(
    () => [
      {
        icon: Target,
        title: "Our Mission",
        description: "To democratize financial services by providing accessible, transparent, and innovative solutions that empower individuals and businesses to achieve their financial goals with confidence and ease."
      },
      {
        icon: TrendingUp,
        title: "Our Vision",
        description: "To become India's most trusted financial services partner, known for our customer-centric approach, technological innovation, and commitment to financial inclusion across all segments of society."
      }
    ],
    []
  );

  return (
    <section className={styles.foundationSection}>
      <div className={styles.foundationContainer}>
        <div className={styles.foundationHeader}>
          <h2 className={`${styles.foundationTitle} avix-text-gradient`}>Our Foundation</h2>
          <p className={styles.foundationSubtitle}>
            Built on strong principles and driven by a clear vision for the future
          </p>
        </div>
        
        <div className={styles.foundationGrid}>
          {foundations.map((foundation, index) => (
            <Card key={index} className={`${styles.foundationCard} avix-gradient-card avix-shadow-elegant hover:avix-shadow-soft group`}>
              <CardContent className={styles.foundationContent}>
                <div className={`${styles.foundationIcon} avix-gradient-primary group-hover:avix-glow`}>
                  <foundation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={styles.foundationCardTitle}>{foundation.title}</h3>
                <p className={styles.foundationDescription}>
                  {foundation.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;