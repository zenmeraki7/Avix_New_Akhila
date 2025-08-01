import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  CreditCard,
  Home,
  Briefcase,
  Shield,
  Heart,
  TrendingUp,
  FileText,
  Receipt,
  Building,
  Wallet,
  Target,
  CheckCircle,
} from "lucide-react";
import { useMemo } from "react";
import styles from "../../styles/services/ServiceCategories.module.css";
import "../../styles/avix.css";

const ServiceCategories = () => {
  const serviceCategories = useMemo(
    () => [
      {
        title: "Lending Solutions",
        icon: CreditCard,
        description: "Comprehensive loan products tailored for all your financial aspirations",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
        services: [
          {
            name: "Personal Loans",
            description: "Quick personal loans up to ₹2 crores with competitive rates",
            highlights: ["Fast approval in 24-48 hours", "Minimal documentation required", "Flexible tenure up to 5 years"],
            rate: "Starting from 9.99%*",
            icon: Wallet
          },
          {
            name: "Business Loans",
            description: "Fuel your business growth up to ₹5 Crores",
            highlights: ["Unsecured Business Loans", "Working capital solutions", "Equipment financing"],
            rate: "Starting from 9.99%*",
            icon: Briefcase
          },
          {
            name: "Home Loans",
            description: "Make your dream home reality up to ₹5 Crores",
            highlights: ["Competitive interest rates", "Tenure up to 30 years", "Balance transfer facility"],
            rate: "Starting from 8.75%*",
            icon: Home
          },
          {
            name: "Loan Against Property",
            description: "Unlock property value up to 80% of market price",
            highlights: ["Multiple property types accepted", "Flexible tenure options", "Quick processing & approval"],
            rate: "Starting from 9.25%*",
            icon: Building
          }
        ]
      },
      {
        title: "Insurance Protection",
        icon: Shield,
        description: "Comprehensive coverage to protect what matters most to you",
        color: "text-green-500",
        bgColor: "bg-green-50",
        services: [
          {
            name: "Health Insurance",
            description: "Complete family health coverage with extensive benefits",
            highlights: ["Cashless treatment network", "Family floater options", "Critical illness cover"],
            rate: "Starting from ₹999/year",
            icon: Heart
          },
          {
            name: "Life Insurance",
            description: "Secure your family's financial future with comprehensive plans",
            highlights: ["Term life plans", "ULIP investments", "Pension solutions"],
            rate: "Starting from ₹500/month",
            icon: Shield
          }
        ]
      },
      {
        title: "Investment & Wealth",
        icon: TrendingUp,
        description: "Build and grow your wealth with expert guidance and strategies",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
        services: [
          {
            name: "Mutual Funds",
            description: "Systematic investment planning starting from just ₹500",
            highlights: ["Diverse fund options", "Goal-based investing", "Expert fund selection"],
            rate: "SIP from ₹500/month",
            icon: TrendingUp
          },
          {
            name: "Investment Advisory",
            description: "Professional portfolio management and financial planning",
            highlights: ["Personalized strategy", "Risk assessment", "Regular portfolio reviews"],
            rate: "Consultation available",
            icon: Target
          }
        ]
      },
      {
        title: "Business Services",
        icon: Building,
        description: "Complete business support and compliance solutions",
        color: "text-orange-500",
        bgColor: "bg-orange-50",
        services: [
          {
            name: "GST Registration & Compliance",
            description: "Hassle-free GST services and ongoing compliance support",
            highlights: ["Quick registration process", "Monthly return filing", "Ongoing compliance support"],
            rate: "Starting from ₹2,999",
            icon: FileText
          },
          {
            name: "Tax Filing Services",
            description: "Professional tax preparation and planning services",
            highlights: ["Income tax returns", "ITR filing assistance", "Tax planning & refund processing"],
            rate: "Starting from ₹999",
            icon: Receipt
          }
        ]
      }
    ],
    []
  );

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.categoriesContainer}>
        <div className={styles.categoriesWrapper}>
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.categorySection}>
              {/* Category Header */}
              <div className={`${styles.categoryHeader} avix-animate-slide-up`} style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <div className={styles.categoryTitleWrapper}>
                  <div className={`${styles.categoryIcon} avix-icon-bg avix-shadow-elegant group-hover:avix-glow`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className={`${styles.categoryTitle} avix-text-gradient`}>{category.title}</h2>
                </div>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className={styles.servicesGrid}>
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className={`${styles.serviceCard} avix-gradient-card avix-shadow-soft hover:avix-shadow-elegant service-card group`}>
                    <CardContent className={styles.serviceContent}>
                      <div className={styles.serviceTop}>
                        <div className={`${styles.serviceIcon} avix-gradient-primary group-hover:avix-glow`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={styles.serviceDetails}>
                          <div className={styles.serviceHeader}>
                            <h3 className={styles.serviceName}>{service.name}</h3>
                            <div className={`${styles.serviceRate} highlight-badge`}>
                              <span className={`${styles.serviceRateText} avix-accent`}>{service.rate}</span>
                            </div>
                          </div>
                          <p className={styles.serviceDescription}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className={styles.serviceHighlights}>
                        {service.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className={styles.serviceHighlight}>
                            <CheckCircle className="w-5 h-5 avix-accent flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;