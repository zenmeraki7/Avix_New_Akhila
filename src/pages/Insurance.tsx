import React, { FC, memo, useMemo } from 'react';
import {
  Heart,
  Shield,
  Car,
  Plane,
  Home,
  Building,
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
  AlertTriangle
} from 'lucide-react';

// ----- Interfaces -----
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

// ----- Components -----
const InsuranceServiceCard: FC<InsuranceServiceCardProps> = memo(({ service, index }) => {
  const isPremium = service.premium;

  return (
    <div
      className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${
        isPremium
          ? 'border-indigo-200 ring-2 ring-indigo-300/50 bg-gradient-to-br from-indigo-50/50 to-purple-50/50'
          : 'border-gray-100 hover:border-indigo-200'
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'slideInUp 0.8s ease-out forwards',
      }}
    >
      {isPremium && (
        <div className="absolute -top-3 left-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
          <Star className="w-3 h-3 mr-1" />
          Premium Service
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <div
          className={`relative p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
            isPremium
              ? 'bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200'
              : 'bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100'
          }`}
        >
          <service.icon className={`w-8 h-8 ${isPremium ? 'text-indigo-600' : 'text-blue-600'}`} />
          {service.urgent && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div
          className={`text-sm font-bold px-3 py-1 rounded-full ${
            isPremium ? 'text-indigo-700 bg-indigo-100' : 'text-blue-700 bg-blue-100'
          }`}
        >
          {service.coverage}
        </div>
      </div>

      <h3
        className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
          isPremium ? 'text-gray-900 group-hover:text-indigo-600' : 'text-gray-900 group-hover:text-blue-600'
        }`}
      >
        {service.title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

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
          {service.serviceType}:{' '}
          <span className="font-semibold text-gray-900">{service.pricing}</span>
        </div>
        <button
          className={`flex items-center font-semibold transition-colors duration-200 group/btn ${
            isPremium ? 'text-indigo-600 hover:text-indigo-700' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          Get Quote
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
});
InsuranceServiceCard.displayName = 'InsuranceServiceCard';

const FeatureHighlight: FC<FeatureHighlightProps> = memo(({ feature, index }) => (
  <div
    className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20"
    style={{
      animationDelay: `${index * 200}ms`,
      animation: 'fadeIn 0.8s ease-out forwards',
    }}
  >
    <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
      <feature.icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </div>
  </div>
));
FeatureHighlight.displayName = 'FeatureHighlight';

const Insurance: FC = () => {
  const services: Service[] = useMemo(
    () => [
      {
        id: 'health-insurance',
        title: 'Health Insurance Advisory',
        icon: Heart,
        description:
          'Comprehensive health insurance planning and advisory services to protect you and your family from medical emergencies.',
        coverage: 'Up to ₹1 Cr',
        serviceType: 'Advisory Fee',
        pricing: 'Free Consultation',
        premium: true,
        features: [
          'Family floater plans comparison',
          'Pre-existing disease coverage',
          'Cashless hospitalization network',
          'Annual health check-ups included',
          'Maternity & newborn coverage',
        ],
      },
      // …add the rest of your 10 services here…
    ],
    []
  );

  const keyFeatures: Feature[] = useMemo(
    () => [
      {
        icon: Clock,
        title: '24/7 Support',
        description: 'Round-the‑clock assistance for claims and queries',
      },
      {
        icon: Award,
        title: 'Expert Advisors',
        description: 'Certified insurance professionals with 10+ years experience',
      },
      {
        icon: Calculator,
        title: 'Free Quotes',
        description: 'Instant quotes from multiple insurers at no cost',
      },
      {
        icon: TrendingUp,
        title: 'Best Rates',
        description: 'Competitive premiums with maximum coverage benefits',
      },
    ],
    []
  );

  const stats: Stat[] = useMemo(
    () => [
      { value: '15,000+', label: 'Policies Sold' },
      { value: '98%', label: 'Claim Success Rate' },
      { value: '50+', label: 'Insurance Partners' },
      { value: '24 Hrs', label: 'Claim Processing' },
    ],
    []
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Animated background pulses */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-indigo-100">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
            <Shield className="w-4 h-4 mr-2 text-yellow-300" />
            Comprehensive Insurance Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white mb-6 leading-tight">
            Insurance <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Protect what matters most with our comprehensive insurance advisory services. From health to business
            insurance, we provide expert guidance and support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['IRDA Certified', '50+ Insurers', 'Free Consultation'].map((tag, i) => (
              <div
                key={i}
                className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 text-indigo-100"
              >
                <CheckCircle className="w-4 h-4 text-yellow-300 mr-2" />
                <span>{tag}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                style={{ animationDelay: `${i * 200}ms`, animation: 'fadeIn 0.8s ease-out forwards' }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Insurance Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our professional insurance advisory and support services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyFeatures.map((feat, i) => (
            <FeatureHighlight key={i} feature={feat} index={i} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Our Insurance Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive coverage solutions tailored to your personal and business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <InsuranceServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get Protected Today</h2>
          <p className="text-xl text-indigo-100 mb-10">
            Don’t wait for tomorrow to secure your future. Our insurance experts are ready to help you find the perfect coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Expert Now
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
              <Calculator className="w-5 h-5 mr-2" />
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default Insurance;
