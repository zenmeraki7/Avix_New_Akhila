import React, { FC, memo, useMemo } from "react";
import {
  Heart,
  Shield,
  Users,
  FileCheck,
  PieChart,
  Search,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  Phone,
  Calculator,
  TrendingUp,
  Zap,
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Service {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  coverage: string;
  serviceType: string;
  pricing: string;
  premium?: boolean;
  urgent?: boolean;
  features: string[];
}

interface Feature {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface InsuranceServiceCardProps {
  service: Service;
  index: number;
}

interface FeatureHighlightProps {
  feature: Feature;
  index: number;
}

const InsuranceServiceCard: FC<InsuranceServiceCardProps> = memo(
  ({ service, index }) => {
    const isPremium = service.premium;

    return (
      <div
        className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${
          isPremium
            ? "border-blue-200 ring-2 ring-blue-300/50 bg-gradient-to-br from-blue-50/50 to-blue-100/50"
            : "border-gray-100 hover:border-blue-200"
        }`}
        style={{
          animationDelay: `${index * 150}ms`,
          animation: "slideInUp 0.8s ease-out forwards",
        }}
      >
       {isPremium && (
  <div className="mb-4 inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
    <Star className="w-3 h-3 mr-1" />
    Premium Service
  </div>
)}

        

        <div className="flex items-center justify-between mb-6">
          <div
            className={`relative p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
              isPremium
                ? "bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300"
                : "bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200"
            }`}
          >
            <service.icon
              className={`w-8 h-8 ${
                isPremium ? "text-blue-700" : "text-blue-600"
              }`}
            />
            {service.urgent && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              isPremium
                ? "text-blue-700 bg-blue-100"
                : "text-blue-700 bg-blue-100"
            }`}
          >
            {service.coverage}
          </div>
        </div>

        <h3
          className={`text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors`}
        >
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            {service.serviceType}:{" "}
            <span className="font-semibold text-gray-900">
              {service.pricing}
            </span>
          </div>
          <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group">
            Get Quote
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }
);
InsuranceServiceCard.displayName = "InsuranceServiceCard";

const FeatureHighlight: FC<FeatureHighlightProps> = memo(
  ({ feature, index }) => (
    <div
      className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20"
      style={{
        animationDelay: `${index * 200}ms`,
        animation: "fadeIn 0.8s ease-out forwards",
      }}
    >
      <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
        <feature.icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    </div>
  )
);
FeatureHighlight.displayName = "FeatureHighlight";

const Insurance: FC = () => {
  const services: Service[] = useMemo(
    () => [
      {
        id: "health-insurance",
        title: "Health Insurance Advisory",
        icon: Heart,
        description: "Protect you and your family from medical emergencies.",
        coverage: "Up to ₹1 Cr",
        serviceType: "Advisory Fee",
        pricing: "Free Consultation",
        premium: true,
        features: [
          "Pre-existing disease coverage",
          "Cashless hospitalization",
          "Annual health check-ups",
          "Maternity & newborn coverage",
        ],
      },
      // Add more services here...
    ],
    []
  );

  const keyFeatures: Feature[] = useMemo(
    () => [
      {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the‑clock assistance",
      },
      {
        icon: Award,
        title: "Expert Advisors",
        description: "10+ years of experience",
      },
      {
        icon: Calculator,
        title: "Free Quotes",
        description: "Instant quotes from insurers",
      },
      {
        icon: TrendingUp,
        title: "Best Rates",
        description: "Competitive premium & coverage",
      },
    ],
    []
  );

  const stats: Stat[] = useMemo(
    () => [
      { value: "15,000+", label: "Policies Sold" },
      { value: "98%", label: "Claim Success Rate" },
      { value: "50+", label: "Insurance Partners" },
      { value: "24 Hrs", label: "Claim Processing" },
    ],
    []
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <Header />

      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Shield className="w-4 h-4 mr-2 text-yellow-300" />
            Comprehensive Insurance Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insurance <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
            Protect what matters most with expert guidance and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-primary-foreground/80">
            {["IRDA Certified", "50+ Insurers", "Free Consultation"].map(
              (item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto py-12 px-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center p-6 bg-white/90 rounded-2xl border border-gray-100"
            style={{
              animationDelay: `${i * 200}ms`,
              animation: "fadeIn 0.8s ease-out forwards",
            }}
          >
            <div className="text-3xl font-bold text-blue-700 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Insurance Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our professional advisory and
            support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyFeatures.map((feat, i) => (
            <FeatureHighlight key={i} feature={feat} index={i} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
            Our Insurance Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored coverage solutions for every personal and business need.
          </p>
        </div>
       <div className="flex justify-center">
  <div className="">
    {services.map((svc, i) => (
      <InsuranceServiceCard key={svc.id} service={svc} index={i} />
    ))}
  </div>
</div>

      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Protected Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Don’t wait to secure your future. Get the perfect coverage now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Expert Now
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center">
              <Calculator className="w-5 h-5 mr-2" />
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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

      <Footer />
    </div>
  );
};

export default Insurance;
