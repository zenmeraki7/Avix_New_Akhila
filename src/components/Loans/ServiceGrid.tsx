import React, { FC, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Car,
  Home,
  TrendingUp,
  RefreshCw,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Service, ServiceCardProps } from "@/types/loans";
import styles from "@/styles/loans/ServiceGrid.module.css";

const ServiceCard: FC<ServiceCardProps> = memo(({ service, index }) => (
  <div
    className={styles.serviceCard}
    style={{
      animationDelay: `${index * 100}ms`,
    }}
  >
    <div className={styles.serviceHeader}>
      <div className={styles.serviceIcon}>
        <service.icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className={styles.serviceRate}>
        {service.rate}
      </div>
    </div>

    <h3 className={styles.serviceTitle}>
      {service.title}
    </h3>

    <p className={styles.serviceDescription}>
      {service.description}
    </p>

    <div className={styles.serviceFeatures}>
      {service.features.map((feature, idx) => (
        <div key={idx} className={styles.serviceFeature}>
          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <div className={styles.serviceFooter}>
      <div className={styles.serviceAmount}>
        Amount:{" "}
        <span>{service.amount}</span>
      </div>
      <Link to="/Contact" className={styles.serviceButton}>
        Apply Now
        <ArrowRight className={styles.serviceButtonIcon} />
      </Link>
    </div>
  </div>
));

const ServiceGrid: FC = () => {
  const services: Service[] = useMemo(
    () => [
      {
        id: "personal-loan",
        title: "Personal Loans",
        icon: Users,
        description:
          "Quick and hassle-free personal loans for all your immediate financial needs with minimal documentation.",
        rate: "From 10.5% APR",
        amount: "₹50K - ₹2Cr",
        features: [
          "Fastest Approval",
          "No collateral required",
          "Flexible repayment terms",
          "Minimal documentation",
        ],
      },
      {
        id: "vehicle-loan",
        title: "Vehicle Loans",
        icon: Car,
        description:
          "Drive your dream car or bike today with our competitive vehicle financing options.",
        rate: "From 8.5% APR",
        amount: "₹1L - ₹50L",
        features: [
          "Up to 100% financing",
          "New & used vehicles",
          "Quick processing",
          "Flexible tenure up to 7 years",
        ],
      },
      {
        id: "loan-against-property",
        title: "Loan Against Property",
        icon: Home,
        description:
          "Unlock the value of your property with our secured loan options at attractive interest rates.",
        rate: "From 9.0% APR",
        amount: "₹5L - ₹5Cr",
        features: [
          "Higher loan amounts",
          "Lower interest rates",
          "Longer repayment tenure",
          "Retain property ownership",
        ],
      },
      {
        id: "debt-consolidation",
        title: "Debt Consolidation",
        icon: TrendingUp,
        description:
          "Simplify your finances by consolidating multiple debts into one easy monthly payment.",
        rate: "From 11.0% APR",
        amount: "₹2L - ₹1Cr",
        features: [
          "Combine multiple debts",
          "Single monthly payment",
          "Potentially lower rates",
          "Improve credit score",
        ],
      },
      {
        id: "balance-transfer",
        title: "Balance Transfer",
        icon: RefreshCw,
        description:
          "Transfer your existing loan to us and enjoy lower interest rates with better terms.",
        rate: "From 9.5% APR",
        amount: "Existing loan amount",
        features: [
          "Lower interest rates",
          "Reduced EMIs",
          "Better loan terms",
          "Quick transfer process",
        ],
      },
      {
        id: "credit-card",
        title: "Credit Cards",
        icon: CreditCard,
        description:
          "Premium credit cards with exclusive benefits, rewards, and lifestyle privileges.",
        rate: "0% Joining Fee*",
        amount: "₹50K - ₹25L limit",
        features: [
          "Lifetime free cards available",
          "Reward points & cashback",
          "Airport lounge access",
          "EMI conversion facility",
        ],
      },
      {
        id: "loan-against-securities",
        title: "Loan Against Securities",
        icon: Shield,
        description:
          "Get instant liquidity against your investment portfolio without selling your securities.",
        rate: "From 9.25% APR",
        amount: "Up to 80% of portfolio",
        features: [
          "No security sale required",
          "Continue earning dividends",
          "Instant loan approval",
          "Flexible repayment",
        ],
      },
    ],
    []
  );

  return (
    <div className={styles.serviceSection}>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;