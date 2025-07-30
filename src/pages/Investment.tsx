import React, { FC, memo, useMemo } from 'react';
import {
  TrendingUp,
  PieChart,
  Users,
  Target,
  Briefcase,
  BarChart3,
  Calculator,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  DollarSign
} from 'lucide-react';

// ----- Types -----
export interface InvestmentService {
  id: string;
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  returns: string;
  minAmount: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}

// ----- Components -----

const InvestmentCard: FC<{ service: InvestmentService; index: number }> = memo(({ service, index }) => (
  <div
    className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100/50 hover:border-purple-300/50"
    style={{
      animationDelay: `${index * 150}ms`,
      animation: 'slideInUp 0.8s ease-out forwards',
    }}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="relative p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl group-hover:from-purple-100 group-hover:to-blue-100 transition-all duration-300 group-hover:scale-110">
        <service.icon className="w-8 h-8 text-purple-600" />
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <Zap className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        {service.returns}
      </div>
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
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

    <div className="flex items-center justify-between pt-4 border-t border-purple-100">
      <div className="text-sm text-gray-500">
        Min Investment: <span className="font-semibold text-gray-900">{service.minAmount}</span>
      </div>
      <button className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 group/btn">
        Start Investing
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200 text-purple-600" />
      </button>
    </div>
  </div>
));
InvestmentCard.displayName = 'InvestmentCard';

const StatCard: FC<{ stat: Stat; index: number }> = memo(({ stat, index }) => (
  <div
    className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
    style={{
      animationDelay: `${index * 200}ms`,
      animation: 'fadeIn 0.8s ease-out forwards',
    }}
  >
    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
    <div className="text-purple-100">{stat.label}</div>
  </div>
));
StatCard.displayName = 'StatCard';

const Investment: FC = () => {
  const services: InvestmentService[] = useMemo(
    () => [
      {
        id: 'sip-investment',
        title: 'SIP Investment',
        icon: TrendingUp,
        description:
          'Start your systematic investment plan with as little as ₹500 per month and build wealth over time through disciplined investing.',
        returns: 'Upto 15% CAGR',
        minAmount: '₹500/month',
        features: [
          'Start with just ₹500/month',
          'Auto-debit facility available',
          'Tax-saving options (ELSS)',
          'Flexible increase/decrease',
          'Long-term wealth creation',
        ],
      },
      {
        id: 'portfolio-selection',
        title: 'Portfolio Management',
        icon: PieChart,
        description:
          'Expertly curated investment portfolios tailored to your risk appetite and financial goals for optimal returns.',
        returns: 'Upto 18% CAGR',
        minAmount: '₹1 Lakh',
        features: [
          'Professionally managed portfolios',
          'Risk-based asset allocation',
          'Regular rebalancing',
          'Diversified investments',
          'Quarterly performance reviews',
        ],
      },
      // ...other services
    ],
    []
  );

  const stats: Stat[] = useMemo(
    () => [
      { value: '50,000+', label: 'Happy Investors' },
      { value: '₹500 Cr+', label: 'Assets Under Management' },
      { value: '15.2%', label: 'Average Returns' },
      { value: '10+', label: 'Years Experience' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium mb-6 border border-white/20">
          <Star className="w-4 h-4 mr-2 text-yellow-400" />
          Trusted by 50,000+ Investors
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 mb-6 leading-tight">
          Investment <span className="text-yellow-300">Solutions</span>
        </h1>

        <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
          Transform your financial future with our comprehensive investment services.
          From SIP to portfolio management, we provide expert guidance for every investor.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-purple-100 mb-12">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span>SEBI Registered</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span>Expert Advisory</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span>Zero Hidden Fees</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 mb-4">
            Our Investment Services
          </h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of investment solutions designed to meet every financial goal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <InvestmentCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm py-20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200 mb-6">
            Start Your Investment Journey
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Take control of your financial future. Our investment experts are ready to guide you towards your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Start SIP Today
            </button>
            <button className="border-2 border-purple-300 text-purple-200 px-10 py-4 rounded-2xl font-semibold hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 backdrop-blur-sm">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

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

export default Investment;
