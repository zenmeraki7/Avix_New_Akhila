import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, TrendingUp, Award } from "lucide-react";
import { useMemo } from "react";
import styles from "@/styles/about/ValuesSection.module.css";
import "@/styles/avix.css";

const ValuesSection = () => {
  const values = useMemo(
    () => [
      {
        icon: Heart,
        title: "Customer First",
        description: "We prioritize our customers' financial well-being above everything else",
        color: "text-red-500"
      },
      {
        icon: Shield,
        title: "Trust & Transparency",
        description: "Complete transparency in all our processes and dealings",
        color: "text-blue-500"
      },
      {
        icon: TrendingUp,
        title: "Innovation",
        description: "Leveraging technology to provide seamless financial services",
        color: "text-green-500"
      },
      {
        icon: Award,
        title: "Excellence",
        description: "Committed to delivering excellence in every interaction",
        color: "text-purple-500"
      }
    ],
    []
  );

  return (
    <section className={`${styles.valuesSection} avix-gradient-secondary`}>
      <div className={styles.valuesContainer}>
        <div className={styles.valuesHeader}>
          <h2 className={`${styles.valuesTitle} avix-text-gradient`}>Our Core Values</h2>
          <p className={styles.valuesSubtitle}>
            The fundamental principles that guide everything we do and shape our culture
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <Card key={index} className={`${styles.valueCard} avix-gradient-card avix-shadow-soft hover:avix-shadow-elegant group avix-animate-pulse-soft`} style={{ animationDelay: `${index * 0.3}s` }}>
              <CardContent className={styles.valueContent}>
                <div className={styles.valueIcon}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;