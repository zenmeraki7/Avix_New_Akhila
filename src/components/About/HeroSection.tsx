import { Sparkles, Clock, Users, TrendingUp, Star } from "lucide-react";
import { useMemo } from "react";
import styles from "@/styles/about/HeroSection.module.css";
import "@/styles/avix.css";

const HeroSection = () => {
  const achievements = useMemo(
    () => [
      { number: "8+", label: "Years of Excellence", icon: Clock },
      { number: "10K+", label: "Happy Customers", icon: Users },
      { number: "₹100Cr+", label: "Loans Disbursed", icon: TrendingUp },
      { number: "99%", label: "Customer Satisfaction", icon: Star }
    ],
    []
  );

  return (
    <section className={`${styles.heroSection} avix-hero-bg`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles className="w-4 h-4 mr-2" />
            About AVIX Financial Solutions
          </div>
          
          <h1 className={`${styles.heroTitle} avix-text-shadow`}>
            Empowering Your
            <span className="block text-yellow-300">Financial Dreams</span>
          </h1>
          
          <p className={styles.heroSubtitle}>
            Since 2017, we've been your trusted partner in achieving financial success and security 
            through innovative, transparent, and customer-centric solutions.
          </p>

          {/* Achievement Stats */}
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={`${styles.achievementItem} avix-animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={styles.achievementIcon}>
                  <achievement.icon className="w-8 h-8 text-yellow-300" />
                </div>
                <div className={styles.achievementNumber}>{achievement.number}</div>
                <div className={styles.achievementLabel}>{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={styles.decorativeElement1}></div>
      <div className={`${styles.decorativeElement2} avix-animate-float`} style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;