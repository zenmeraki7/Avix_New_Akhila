import { FC, memo, useMemo } from "react";
import { TrendingUp, PieChart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InvestmentService, InvestmentCardProps } from "@/types/investment";
import styles from "@/styles/investment/ServiceSection.module.css";
import "@/styles/avix.css";

const InvestmentCard: FC<InvestmentCardProps> = memo(({ service, index }) => (
  <Card
    className={`${styles.investmentCard} avix-gradient-card avix-shadow-card hover:avix-shadow-hero`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <CardHeader className={styles.cardHeader}>
      <div className={styles.cardHeaderTop}>
        <div className={`${styles.cardIcon} avix-icon-bg`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div className={`${styles.returnsBadge} avix-success-bg`}>
          {service.returns}
        </div>
      </div>
      <CardTitle className={styles.cardTitle}>{service.title}</CardTitle>
      <CardDescription className={styles.cardDescription}>
        {service.description}
      </CardDescription>
    </CardHeader>
    <CardContent className={styles.cardContent}>
      <div className={styles.featuresList}>
        {service.features.map((feature, idx) => (
          <div key={idx} className={styles.feature}>
            <CheckCircle className="w-4 h-4 avix-accent flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.minInvestment}>
          Min Investment: <span>{service.minAmount}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="group bg-[#8A1C9D] text-white border-[#8A1C9D] hover:bg-white hover:text-[#8A1C9D] transition-colors duration-200"
        >
          Start Investing
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </CardContent>
  </Card>
));

InvestmentCard.displayName = "InvestmentCard";

const ServiceSection = () => {
  const services: InvestmentService[] = useMemo(
    () => [
      {
        id: "sip-investment",
        title: "SIP Investment",
        icon: TrendingUp,
        description:
          "Start your systematic investment plan with as little as ₹500 per month and build wealth over time through disciplined investing.",
        returns: "Up to 15% CAGR",
        minAmount: "₹500/month",
        features: [
          "Start with just ₹500/month",
          "Auto-debit facility available",
          "Tax-saving options (ELSS)",
          "Flexible increase/decrease",
          "Long-term wealth creation",
        ],
      },
      {
        id: "portfolio-selection",
        title: "Portfolio Management",
        icon: PieChart,
        description:
          "Expertly curated investment portfolios tailored to your risk appetite and financial goals for optimal returns.",
        returns: "Up to 18% CAGR",
        minAmount: "₹1 Lakh",
        features: [
          "Professionally managed portfolios",
          "Risk-based asset allocation",
          "Regular rebalancing",
          "Diversified investments",
          "Quarterly performance reviews",
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
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className={styles.serviceTitle}>Our Investment Solutions</h2>
          </div>
          <p className={styles.serviceSubtitle}>
            Choose from our expertly designed investment options to grow your
            wealth
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service, idx) => (
            <InvestmentCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
