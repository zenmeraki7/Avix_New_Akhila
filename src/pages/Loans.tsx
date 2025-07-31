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
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  rate: string;
  amount: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = memo(({ service, index }) => (
  <div
    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
    style={{
      animationDelay: `${index * 100}ms`,
      animation: "fadeInUp 0.6s ease-out forwards",
    }}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors duration-300">
        <service.icon className="w-8 h-8 text-blue-600" />
      </div>
      <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
        {service.rate}
      </div>
    </div>

    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
      {service.title}
    </h3>

    <p className="text-muted-foreground mb-6 leading-relaxed">
      {service.description}
    </p>

    <div className="space-y-3 mb-8">
      {service.features.map((feature, idx) => (
        <div key={idx} className="flex items-center text-sm text-foreground">
          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="text-sm text-muted-foreground">
        Amount:{" "}
        <span className="font-semibold text-foreground">{service.amount}</span>
      </div>
      <Link to="/Contact">
        <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group">
          Apply Now
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </Link>
    </div>
  </div>
));

const Loans: FC = () => {
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-300">Loan Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions tailored to meet your diverse
              needs. From personal loans to investment financing, we've got you
              covered.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-primary-foreground/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                <span>Quick Approval</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                <span>Competitive Rates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                <span>Flexible Terms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Take the first step towards your financial goals. Our experts are
            here to help you choose the right loan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Calculate EMI
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Talk to Expert
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Loans;
