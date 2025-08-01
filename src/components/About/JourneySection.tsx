import { Card, CardContent } from "@/components/ui/card";
import { Building, Shield, TrendingUp, Award, Sparkles } from "lucide-react";
import { useMemo } from "react";
import styles from "@/styles/about/JourneySection.module.css";
import "@/styles/avix.css";

const JourneySection = () => {
  const milestones = useMemo(
    () => [
      { year: "2017", event: "AVIX Financial Services founded", icon: Building },
      { year: "2019", event: "Expanded to insurance services", icon: Shield },
      { year: "2022", event: "Introduced investment advisory", icon: TrendingUp },
      { year: "2024", event: "Crossed ₹100 Cr in loan disbursals, Serving 10,000+ satisfied customers", icon: Award },
      { year: "2025", event: "Launched digital platform", icon: Sparkles }
    ],
    []
  );

  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyContainer}>
        <div className={styles.journeyHeader}>
          <h2 className={`${styles.journeyTitle} avix-text-gradient`}>Our Journey</h2>
          <p className={styles.journeySubtitle}>
            Key milestones that shaped our growth and strengthened our commitment to excellence
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={`${styles.timelineLine} avix-gradient-primary`}></div>
          
          <div className={styles.timelineList}>
            {milestones.map((milestone, index) => (
              <div key={index} className={index % 2 === 0 ? styles.timelineItem : styles.timelineItemReverse}>
                <div className={index % 2 === 0 ? styles.milestoneContentRight : styles.milestoneContentLeft}>
                  <Card className={`${styles.milestoneCard} avix-gradient-card avix-shadow-soft hover:avix-shadow-elegant group`}>
                    <CardContent className={styles.milestoneCardContent}>
                      <div className={styles.milestoneTop}>
                        <div className={`${styles.milestoneIcon} avix-gradient-primary`}>
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`${styles.milestoneYear} avix-accent`}>{milestone.year}</div>
                      </div>
                      <p className={styles.milestoneEvent}>{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`${styles.timelineCircle} avix-gradient-primary avix-animate-pulse-soft`}></div>
                
                <div className={styles.timelineCircleHidden}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;