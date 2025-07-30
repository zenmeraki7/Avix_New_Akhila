import React, { FC, memo, useMemo } from "react";
import {
  TrendingUp,
  PieChart,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Star,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface InvestmentService {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  returns: string;
  minAmount: string;
  features: string[];
}

interface Stat {
  value: string;
  label: string;
}

const InvestmentCard: FC<{ service: InvestmentService; index: number }> = memo(
  ({ service, index }) => (
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
          {service.returns}
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
          Min Investment:{" "}
          <span className="font-semibold text-foreground">
            {service.minAmount}
          </span>
        </div>
        <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group">
          Start Investing
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  )
);
InvestmentCard.displayName = "InvestmentCard";

const StatCard: FC<{ stat: Stat; index: number }> = memo(({ stat, index }) => (
  <div
    className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow"
    style={{
      animationDelay: `${index * 100}ms`,
      animation: "fadeIn 0.8s ease-out forwards",
    }}
  >
    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
    <div className="text-muted-foreground">{stat.label}</div>
  </div>
));
StatCard.displayName = "StatCard";

const Investment: FC = () => {
  const services: InvestmentService[] = useMemo(
    () => [
      {
        id: "sip-investment",
        title: "SIP Investment",
        icon: TrendingUp,
        description:
          "Start your systematic investment plan with as little as ₹500 per month and build wealth over time through disciplined investing.",
        returns: "Upto 15% CAGR",
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
        returns: "Upto 18% CAGR",
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

  const stats: Stat[] = useMemo(
    () => [
      { value: "50,000+", label: "Happy Investors" },
      { value: "₹500 Cr+", label: "Assets Under Management" },
      { value: "15.2%", label: "Average Returns" },
      { value: "10+", label: "Years Experience" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      <Header/>
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-primary text-primary-foreground py-20 text-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-white text-primary text-sm font-medium mb-6 rounded-full shadow-sm">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Trusted by 50,000+ Investors
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-yellow-300">Investment Services</span>
          </h1>

          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your financial future with our comprehensive investment
            services. From SIPs to expert portfolio guidance — we've got you
            covered.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.map((service, idx) => (
              <InvestmentCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let our experts guide you to the best investment path. No fees, no
            pressure — just great advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Start SIP Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Keyframes */}
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

      <Footer/>
    </div>
  );
};

export default Investment;
