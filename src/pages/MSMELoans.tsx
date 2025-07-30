import React, { FC, memo, useMemo } from "react";
import {
  Factory,
  TrendingUp,
  CreditCard,
  Settings,
  FileText,
  Package,
  Shield,
  Banknote,
  Award,
  Building,
  Home,
  Building2,
  Receipt,
  Landmark,
  Wheat,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
} from "lucide-react";

// ----- Types -----
export interface Service {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  rate: string;
  amount: string;
  popular?: boolean;
  features: string[];
}

export interface Category {
  title: string;
  description: string;
  services: Service[];
}

export interface Stat {
  value: string;
  label: string;
  icon: FC<{ className?: string }>;
}

// ----- Components -----

const MSMEServiceCard: FC<{ service: Service; index: number }> = memo(
  ({ service, index }) => {
    const isPopular = service.popular;

    return (
      <div
        className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
          isPopular
            ? "border-orange-200 ring-2 ring-orange-300/50"
            : "border-gray-100 hover:border-orange-200"
        }`}
        style={{
          animationDelay: `${index * 120}ms`,
          animation: "fadeInUp 0.7s ease-out forwards",
        }}
      >
        {isPopular && (
          <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#8A1C9D] to-[#3A0087] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            Most Popular
          </div>
        )}

        <div className="flex items-center justify-between mb-5">
          <div
            className={`p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
              isPopular
                ? "bg-gradient-to-br from-[#8A1C9D] to-[#3A0087] group-hover:from-[#9B2FAF] group-hover:to-[#4A009F]"
                : "bg-gradient-to-br from-[#1C004D] to-[#3A0087] group-hover:from-[#33006F] group-hover:to-[#5C00BE]"
            }`}
          >
            <service.icon
              className={`w-7 h-7 ${isPopular ? "text-white" : "text-white"}`}
            />
          </div>
          <div
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              isPopular
                ? "text-[#8A1C9D] bg-[#F3E5F5]"
                : "text-[#1C004D] bg-[#EDE7F6]"
            }`}
          >
            {service.rate}
          </div>
        </div>

        <h3
          className={`text-xl font-bold mb-3 transition-colors duration-300 ${
            isPopular
              ? "text-[#1C004D] group-hover:text-[#8A1C9D]"
              : "text-[#1C004D] group-hover:text-[#3A0087]"
          }`}
        >
          {service.title}
        </h3>

        <p className="text-gray-600 mb-5 text-sm leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            Amount:{" "}
            <span className="font-semibold text-gray-900">
              {service.amount}
            </span>
          </div>
          <button
            className={`flex items-center font-semibold transition-colors duration-200 group/btn text-sm ${
              isPopular
                ? "text-[#8A1C9D] hover:text-[#7F1E90]"
                : "text-[#1C004D] hover:text-[#3A0087]"
            }`}
          >
            Apply Now
            <ArrowRight className="w-3 h-3 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    );
  }
);
MSMEServiceCard.displayName = "MSMEServiceCard";

const CategorySection: FC<{ category: Category }> = memo(({ category }) => (
  <section className="mb-16">
    <header className="text-center mb-12">
      <h2 className="text-3xl font-bold text-[#1C004D] mb-3">
        {category.title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {category.services.map((service, idx) => (
        <MSMEServiceCard key={service.id} service={service} index={idx} />
      ))}
    </div>
  </section>
));
CategorySection.displayName = "CategorySection";

const MSMELoans: FC = () => {
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
      // ...other categories
    ],
    []
  );

  const stats: Stat[] = useMemo(
    () => [
      { value: "25,000+", label: "MSMEs Funded", icon: Factory },
      { value: "₹2,500 Cr+", label: "Loans Disbursed", icon: TrendingUp },
      { value: "48 Hours", label: "Quick Approval", icon: Clock },
      { value: "15+", label: "Years Experience", icon: Award },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1C004D] via-[#3A0087] to-[#8A1C9D]">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1C004D] via-[#3A0087] to-[#8A1C9D]">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30 text-green-100">
            <Factory className="w-4 h-4 mr-2 text-[#8A1C9D]" />
            MSME Banking Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#8A1C9D]">MSME</span> Business Loans
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive financing solutions for Micro, Small & Medium
            Enterprises. From working capital to project loans, we fuel your
            business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <CheckCircle className="w-4 h-4 text-[#8A1C9D] mr-2" />
              <span>RBI Approved</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <CheckCircle className="w-4 h-4 text-[#8A1C9D] mr-2" />
              <span>Quick Processing</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <CheckCircle className="w-4 h-4 text-[#8A1C9D] mr-2" />
              <span>Competitive Rates</span>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                style={{
                  animationDelay: `${i * 200}ms`,
                  animation: "fadeIn 0.8s ease-out forwards",
                }}
              >
                <stat.icon className="w-8 h-8 text-[#8A1C9D] mx-auto mb-2" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {serviceCategories.map((category, idx) => (
          <CategorySection key={idx} category={category} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#1C004D] to-[#3A0087] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8">
            Get expert guidance and competitive rates for all your MSME
            financing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1C004D] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg flex items-center justify-center">
              <Users className="w-5 h-5 mr-2 text-[#8A1C9D]" />
              Talk to Expert
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1C004D] transition-colors duration-200 flex items-center justify-center">
              <Target className="w-5 h-5 mr-2 text-[#8A1C9D]" />
              Calculate EMI
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MSMELoans;
