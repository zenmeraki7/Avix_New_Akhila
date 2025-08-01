import { FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Star,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Service, InsuranceServiceCardProps } from "@/types/insurance";
import styles from "@/styles/insurance/ServiceSection.module.css";
import "@/styles/avix.css";

const InsuranceServiceCard: FC<InsuranceServiceCardProps> = memo(
  ({ service, index }) => {
    const isPremium = service.premium;

    return (
      <Card
        className={`${
          styles.serviceCard
        } avix-gradient-card avix-shadow-card hover:avix-shadow-hero ${
          isPremium ? styles.serviceCardPremium : ""
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <CardHeader className={styles.serviceCardHeader}>
          {isPremium && (
            <div className={`${styles.premiumBadge} avix-premium-badge`}>
              <Star className="w-3 h-3 mr-1" />
              Premium Service
            </div>
          )}

          <div className={styles.serviceCardHeaderTop}>
            <div className={`${styles.serviceCardIcon} avix-icon-bg`}>
              <service.icon className="w-8 h-8 text-white" />
              {service.urgent && (
                <div className={styles.urgentBadge}>
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className={`${styles.coverageBadge} avix-success-bg`}>
              {service.coverage}
            </div>
          </div>

          <CardTitle className={styles.serviceCardTitle}>
            {service.title}
          </CardTitle>
          <CardDescription className={styles.serviceCardDescription}>
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className={styles.serviceFeatures}>
            {service.features.map((feature, idx) => (
              <div key={idx} className={styles.serviceFeature}>
                <CheckCircle className="w-4 h-4 avix-accent flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className={styles.serviceFooter}>
            <div className={styles.servicePricing}>
              {service.serviceType}: <span>{service.pricing}</span>
            </div>
            <Link to="/contact">
              <Button
                variant="outline"
                size="sm"
                className="group bg-[#8A1C9D] text-white border-[#8A1C9D] hover:bg-white hover:text-[#8A1C9D] transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }
);

InsuranceServiceCard.displayName = "InsuranceServiceCard";

const ServiceSection = () => {
  const services: Service[] = useMemo(
    () => [
      {
        id: "health-insurance",
        title: "Health Insurance Advisory",
        icon: Heart,
        description:
          "Comprehensive health coverage for you and your family with expert guidance on the best policies.",
        coverage: "Up to ₹1 Cr",
        serviceType: "Advisory Fee",
        pricing: "Get Consultation",
        premium: true,
        features: [
          "Pre-existing disease coverage",
          "Cashless hospitalization network",
          "Annual health check-ups included",
          "Maternity & newborn coverage",
          "Critical illness protection",
        ],
      },
      {
        id: "life-insurance",
        title: "Life Insurance Planning",
        icon: Shield,
        description:
          "Secure your family's financial future with comprehensive life insurance solutions.",
        coverage: "Up to ₹5 Cr",
        serviceType: "Premium",
        pricing: "₹500/month",
        features: [
          "Term life insurance plans",
          "Whole life policies available",
          "ULIP investment options",
          "Pension and retirement planning",
          "Tax-saving benefits under 80C",
        ],
      },
    ],
    []
  );

  return (
    <section className={styles.serviceSection}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceHeader}>
          <div className={styles.serviceHeaderTop}>
            <div className={`${styles.serviceIcon} avix-icon-bg`}>
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className={styles.serviceTitle}>Our Insurance Solutions</h2>
          </div>
          <p className={styles.serviceSubtitle}>
            Tailored coverage solutions for every personal and business need.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((svc, i) => (
            <InsuranceServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
