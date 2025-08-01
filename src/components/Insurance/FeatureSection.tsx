import { FC, memo, useMemo } from "react";
import { Clock, Award, Calculator, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Feature, FeatureHighlightProps } from "@/types/insurance";
import styles from "../../styles/insurance/FeatureSection.module.css";
import "../../styles/avix.css";

const FeatureHighlight: FC<FeatureHighlightProps> = memo(
  ({ feature, index }) => (
    <Card
      className={`${styles.featureCard} avix-gradient-card`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <CardContent className={styles.featureCardContent}>
        <div className={`${styles.featureCardIcon} avix-icon-bg`}>
          <feature.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className={styles.featureCardTitle}>{feature.title}</h4>
          <p className={styles.featureCardDescription}>{feature.description}</p>
        </div>
      </CardContent>
    </Card>
  )
);

FeatureHighlight.displayName = "FeatureHighlight";

const FeatureSection = () => {
  const keyFeatures: Feature[] = useMemo(
    () => [
      {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the‑clock assistance for claims",
      },
      {
        icon: Award,
        title: "Expert Advisors",
        description: "10+ years of insurance experience",
      },
      {
        icon: Calculator,
        title: "Free Quotes",
        description: "Instant quotes from top insurers",
      },
      {
        icon: TrendingUp,
        title: "Best Rates",
        description: "Competitive premiums & coverage",
      },
    ],
    []
  );

  return (
    <section className={styles.featureSection}>
      <div className={styles.featureContainer}>
        <div className={styles.featureHeader}>
          <div className={styles.featureHeaderTop}>
            <div className={`${styles.featureIcon} avix-icon-bg`}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className={styles.featureTitle}>
              Why Choose Our Insurance Services?
            </h2>
          </div>
          <p className={styles.featureSubtitle}>
            Experience the difference with our professional advisory and
            comprehensive support.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {keyFeatures.map((feat, i) => (
            <FeatureHighlight key={i} feature={feat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;