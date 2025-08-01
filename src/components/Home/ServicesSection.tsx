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
  CreditCard,
  TrendingUp,
  Shield,
  Factory,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Clock,
} from "lucide-react";
import { memo, useMemo } from "react";
import styles from "../../styles/home/ServicesSection.module.css";
import "../../styles/avix.css";

// Memoized Modern Service Card Component with AVIX Theme
const ModernServiceCard = memo(
  ({ service, index }: { service: any; index: number }) => {
    const isPopular = service.popular;

    return (
      <Card
        className={`group ${
          styles.serviceCard
        } avix-gradient-card avix-shadow-card hover:avix-shadow-hero ${
          isPopular ? "ring-2 ring-purple-200/50" : ""
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {/* Popular Badge */}
        {isPopular && (
          <div className={`${styles.popularBadge} avix-popular-badge`}>
            <Zap className="w-3 h-3 mr-1" />
            Most Popular
          </div>
        )}

        <CardHeader className={styles.serviceHeader}>
          <div className={styles.serviceHeaderTop}>
            <div className={`${styles.serviceIcon} avix-icon-bg`}>
              <service.icon className="w-8 h-8 text-white" />
              {service.fastTrack && (
                <div className={styles.fastTrackBadge}>
                  <Clock className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className={`${styles.serviceBadge} avix-accent`}>
              {service.badge}
            </div>
          </div>

          <CardTitle className={styles.serviceTitle}>{service.title}</CardTitle>
          <CardDescription className={styles.serviceDescription}>
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className={styles.serviceFeatures}>
            {service.features
              .slice(0, 4)
              .map((feature: string, idx: number) => (
                <div key={idx} className={styles.serviceFeature}>
                  <CheckCircle className="w-4 h-4 avix-accent mr-3 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
          </div>

          <div className={styles.serviceFooter}>
            <div className={styles.serviceRate}>
              Starting from: <span>{service.startingRate}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
                          className="group bg-[#8A1C9D] text-white border-[#8A1C9D] hover:bg-white hover:text-[#8A1C9D] transition-colors duration-200"

            >
              <Link to={service.link}>
                Explore
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
);

const ServicesSection = () => {
  const services = useMemo(
    () => [
      {
        title: "Loans",
        description:
          "Apply online for fast, hassle‑free personal, business, car, and loan‑takeover financing. Enjoy competitive interest rates, flexible repayment tenures, and instant approval with minimal documentation to meet all your funding needs.",
        features: [
          "Fast personal loans with minimal paperwork",
          "Unsecured Business loans for working capital and growth",
          "Car loans up to 100% financing at attractive rates",
          "Seamless loan takeover for lower EMIs and better terms",
          "24-hour approval process",
          "Flexible EMI options",
        ],
        icon: CreditCard,
        link: "/loans",
        badge: "From 8.5%",
        startingRate: "₹10K",
        popular: true,
        fastTrack: true,
      },
      {
        title: "Investment Advisory",
        description:
          "Discover and invest in top mutual funds, systematic investment plans (SIPs), and personalized portfolios with our expert investment advisory services. Maximize returns, balance risk, and unlock tax benefits today.",
        features: [
          "Access 2,000+ direct mutual fund schemes",
          "Tailored SIP plans for disciplined wealth creation",
          "Professional portfolio management & periodic rebalancing",
          "Tax‑saving ELSS funds & retirement planning solutions",
          "Risk assessment and goal planning",
          "Regular performance tracking",
        ],
        icon: TrendingUp,
        link: "/investment",
        badge: "Up to 15% CAGR",
        startingRate: "₹500/month",
      },
      {
        title: "Insurance Solutions",
        description:
          "Compare and buy the best insurance plans in India—health, life, motor, home and travel— with comprehensive coverage, cashless claims, and expert advisory to protect you and your loved ones.",
        features: [
          "Comprehensive health insurance with cashless hospitalization network",
          "Life insurance policies offering tax benefits under Section 80C",
          "Motor insurance for cars and bikes with zero‑depreciation cover",
          "Travel insurance for domestic & international trips with COVID‑19 protection",
          "Home and property insurance coverage",
          "24/7 claims assistance support",
        ],
        icon: Shield,
        link: "/insurence",
        badge: "Up to ₹1 Cr",
        startingRate: "₹999/year",
        popular: true,
      },
      {
        title: "MSME Business Loans",
        description:
          "Compare and apply online for the best MSME business loans in India. Get competitive interest rates, flexible repayment tenures, and fast approvals with minimal documentation to fuel your business growth.",
        features: [
          "Lowest interest rates on MSME loans",
          "Flexible repayment schedules up to 7 years",
          "Quick online approval with minimal paperwork",
          "Customized working capital and term loan options",
          "Dedicated support for small and medium enterprises",
          "Government scheme benefits (CGTMSE)",
        ],
        icon: Factory,
        link: "/MSMELoans",
        badge: "From 8.0%",
        startingRate: "₹5 Lakh",
        fastTrack: true,
      },
    ],
    []
  );

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <div className={styles.servicesBadge}>
            <Target className="w-4 h-4 mr-2" />
            Comprehensive Financial Solutions
          </div>
          <h2 className={styles.servicesTitle}>
            Our <span className="avix-accent">Financial Services</span>
          </h2>
          <p className={styles.servicesSubtitle}>
            Comprehensive financial solutions designed to help you achieve your
            goals with expert guidance and competitive rates
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ModernServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className={styles.viewAllButton}>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group bg-[#8A1C9D] text-white border-[#8A1C9D] hover:bg-white hover:text-[#8A1C9D] transition-colors duration-200"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
