import { FC, memo, useMemo } from "react";
import {
  CreditCard,
  TrendingUp,
  Settings,
  Banknote,
  Building,
  CheckCircle,
  Zap,
} from "lucide-react";
import {
  Service,
  Category,
  MSMEServiceCardProps,
  CategorySectionProps,
} from "@/types/msme";
import styles from "../../styles/msme/ServiceGrid.module.css";
import { Link } from "react-router-dom";

const MSMEServiceCard: FC<MSMEServiceCardProps> = memo(({ service, index }) => {
  const isPopular = service.popular;

  return (
    <div
      className={`${styles.serviceCard} ${
        isPopular ? styles.serviceCardPopular : ""
      }`}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {isPopular && (
        <div className={styles.popularBadge}>
          <Zap className="w-3 h-3 mr-1" />
          Most Popular
        </div>
      )}

      <div className={styles.serviceHeader}>
        <div
          className={`${styles.serviceIcon} ${
            isPopular ? styles.serviceIconPopular : ""
          }`}
        >
          <service.icon className="w-7 h-7 text-white" />
        </div>
        <div className={styles.serviceRate}>{service.rate}</div>
      </div>

      <h3 className={styles.serviceTitle}>{service.title}</h3>

      <p className={styles.serviceDescription}>{service.description}</p>

      <div className={styles.serviceFeatures}>
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className={styles.serviceFeature}>
            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className={styles.serviceFooter}>
        <div className={styles.serviceAmount}>
          Amount: <span>{service.amount}</span>
        </div>
        <Link to={'/contact'}>
          <button className={styles.serviceButton}>
            Apply Now
            <TrendingUp className={styles.serviceButtonIcon} />
          </button>
        </Link>
      </div>
    </div>
  );
});

MSMEServiceCard.displayName = "MSMEServiceCard";

const CategorySection: FC<CategorySectionProps> = memo(({ category }) => (
  <section className={styles.categorySection}>
    <header className={styles.categoryHeader}>
      <h2 className={styles.categoryTitle}>{category.title}</h2>
      <p className={styles.categoryDescription}>{category.description}</p>
    </header>
    <div className={styles.serviceGrid}>
      {category.services.map((service, idx) => (
        <MSMEServiceCard key={service.id} service={service} index={idx} />
      ))}
    </div>
  </section>
));

CategorySection.displayName = "CategorySection";

const ServiceGrid: FC = () => {
  const serviceCategories: Category[] = useMemo(
    () => [
      {
        title: "Working Capital Solutions",
        description:
          "Flexible financing options to meet your day-to-day business operational needs",
        services: [
          {
            id: "working-capital-od",
            title: "Working Capital OD",
            icon: CreditCard,
            description:
              "Overdraft facility to manage cash flow fluctuations with instant access to funds.",
            rate: "From 8.5%",
            amount: "₹5L - ₹10Cr",
            popular: true,
            features: [
              "Instant fund access",
              "Interest on utilized amount",
              "No collateral required",
              "Flexible repayment",
            ],
          },
          {
            id: "working-capital-cc",
            title: "Working Capital CC",
            icon: TrendingUp,
            description:
              "Cash Credit facility for continuous working capital requirements with revolving credit.",
            rate: "From 9.0%",
            amount: "₹10L - ₹25Cr",
            features: [
              "Revolving credit facility",
              "Stock & debtors as security",
              "Drawing power based on stock",
              "Easy renewal process",
            ],
          },
          {
            id: "working-capital-term",
            title: "WC Term Loan",
            icon: Banknote,
            description:
              "Term loans specifically designed for permanent working capital requirements.",
            rate: "From 8.75%",
            amount: "₹5L - ₹15Cr",
            features: [
              "Fixed monthly EMIs",
              "Longer repayment tenure",
              "Competitive interest rates",
              "Quick processing",
            ],
          },
        ],
      },
      {
        title: "Equipment & Project Financing",
        description:
          "Fund your business expansion with specialized equipment and project loans",
        services: [
          {
            id: "machinery-loan",
            title: "Machinery Loan",
            icon: Settings,
            description:
              "Finance new machinery and equipment to expand or upgrade your business operations.",
            rate: "From 9.25%",
            amount: "₹5L - ₹50Cr",
            popular: true,
            features: [
              "Up to 90% machinery financing",
              "New & used equipment",
              "Quick approvals",
              "Flexible tenure up to 7 years",
            ],
          },
          {
            id: "project-loan",
            title: "Project Loan",
            icon: Building,
            description:
              "Comprehensive financing for new projects, expansion, or modernization.",
            rate: "From 8.9%",
            amount: "₹25L - ₹100Cr",
            features: [
              "Complete project financing",
              "Phased disbursement",
              "Moratorium period available",
              "Expert project evaluation",
            ],
          },
        ],
      },
    ],
    []
  );

  return (
    <div className={styles.servicesSection}>
      {serviceCategories.map((category, idx) => (
        <CategorySection key={idx} category={category} />
      ))}
    </div>
  );
};

export default ServiceGrid;
