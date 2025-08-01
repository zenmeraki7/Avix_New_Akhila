import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Phone,
  Mail,
  Users,
  Calculator,
  Award,
  Zap,
  Percent,
  Shield,
  Sparkles,
} from "lucide-react";
import { useMemo } from "react";
import styles from "../../styles/services/WhyChooseAVIXSection.module.css";
import "../../styles/avix.css";

const WhyChooseAVIXSection = () => {
  const benefits = useMemo(
    () => [
      { text: "Expert financial advisors with 8+ years industry experience", icon: Award },
      { text: "Quick processing and approval times (24-48 hours)", icon: Zap },
      { text: "Competitive rates and completely transparent pricing", icon: Percent },
      { text: "End-to-end service support throughout the process", icon: Users },
      { text: "Digital convenience combined with personalized offline assistance", icon: Sparkles },
      { text: "Full regulatory compliance and advanced data security", icon: Shield }
    ],
    []
  );

  return (
    <section className={`${styles.whyChooseSection} avix-gradient-secondary`}>
      <div className={styles.whyChooseContainer}>
        <div className={styles.whyChooseGrid}>
          <div className={styles.whyChooseContent}>
            <h2 className={`${styles.whyChooseTitle} avix-text-gradient`}>
              Why Choose AVIX Financial Solutions?
            </h2>
            <p className={styles.whyChooseDescription}>
              Experience the difference of working with certified financial professionals 
              who prioritize your success and financial well-being.
            </p>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={`${styles.benefitItem} avix-shadow-soft hover:avix-shadow-elegant avix-animate-pulse-soft`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`${styles.benefitIcon} avix-gradient-primary`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={styles.benefitText}>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className={`${styles.contactCard} avix-gradient-primary avix-shadow-elegant avix-animate-float`}>
            <CardHeader className={styles.contactHeader}>
              <div className={styles.contactHeaderTop}>
                <div className={styles.contactIcon}>
                  <Phone className="w-8 h-8 text-yellow-300" />
                </div>
                <div>
                  <CardTitle className={styles.contactTitle}>Ready to Get Started?</CardTitle>
                  <CardDescription className={styles.contactDescription}>
                    Connect with our financial experts today
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className={styles.contactContent}>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Phone className="w-6 h-6 text-yellow-300" />
                  <span>+91 99468 41656</span>
                </div>
                <div className={styles.contactItem}>
                  <Mail className="w-6 h-6 text-yellow-300" />
                  <span>official@avixfinancialsolutions.com</span>
                </div>
              </div>
              <div className={styles.contactButtons}>
                <Button 
                  className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white p-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
                  size="lg" 
                  asChild
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </Link>
                </Button>
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 p-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
                  size="lg" 
                  asChild
                >
                  <Link to="/calculator" className="flex items-center justify-center">
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate EMI
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAVIXSection;