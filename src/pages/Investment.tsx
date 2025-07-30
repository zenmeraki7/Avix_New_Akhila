import React, { FC, memo, useMemo } from "react";
import {
  TrendingUp,
  PieChart,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Star,
  Phone,
  Calculator,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// AVIX Brand Colors
const avixStyles = `
  .avix-gradient-primary {
    background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
  }
  
  .avix-gradient-card {
    background: linear-gradient(145deg, rgba(28, 0, 77, 0.02) 0%, rgba(58, 0, 135, 0.04) 50%, rgba(138, 28, 157, 0.02) 100%);
    border: 1px solid rgba(138, 28, 157, 0.1);
  }
  
  .avix-accent {
    color: #8A1C9D;
  }
  
  .avix-icon-bg {
    background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
  }
  
  .avix-shadow-card {
    box-shadow: 0 4px 20px rgba(138, 28, 157, 0.08);
  }
  
  .avix-shadow-hero {
    box-shadow: 0 8px 32px rgba(138, 28, 157, 0.25);
  }
  
  .avix-button-secondary {
    background: rgba(255, 255, 255, 0.9);
    color: #1C004D;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .avix-button-secondary:hover {
    background: rgba(255, 255, 255, 1);
    color: #1C004D;
  }
  
  .avix-accent-bg {
    background: rgba(138, 28, 157, 0.1);
    color: #8A1C9D;
  }
  
  .avix-success-bg {
    background: rgba(34, 197, 94, 0.1);
    color: rgb(34, 197, 94);
  }
  
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
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;

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
    <Card 
      className="avix-gradient-card avix-shadow-card hover:avix-shadow-hero transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 avix-icon-bg rounded-xl flex items-center justify-center">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-sm font-semibold avix-success-bg px-3 py-1 rounded-full">
            {service.returns}
          </div>
        </div>
        <CardTitle className="text-2xl">{service.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-foreground/80">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm">
              <CheckCircle className="w-4 h-4 avix-accent mr-3 flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Min Investment:{" "}
            <span className="font-semibold text-foreground">
              {service.minAmount}
            </span>
          </div>
          <Button variant="outline" size="sm" className="avix-accent border-current hover:bg-current hover:text-white">
            Start Investing
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
);
InvestmentCard.displayName = "InvestmentCard";

const StatCard: FC<{ stat: Stat; index: number }> = memo(({ stat, index }) => (
  <Card 
    className="text-center avix-gradient-card border-0 animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <CardContent className="p-6">
      <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
      <div className="text-muted-foreground">{stat.label}</div>
    </CardContent>
  </Card>
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
        returns: "Up to 15% CAGR",
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
        returns: "Up to 18% CAGR",
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

  const benefits = [
    "Expert investment advisors with proven track record",
    "Low minimum investment amounts starting from ₹500",
    "Diversified portfolio options across asset classes",
    "Tax-efficient investment strategies",
    "Regular portfolio monitoring and rebalancing",
    "Transparent fee structure with no hidden charges"
  ];

  return (
    <>
      <style>{avixStyles}</style>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 avix-gradient-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 rounded-full border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Trusted by 50,000+ Investors
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Investment <span className="text-yellow-300">Services</span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your financial future with our comprehensive investment services. 
              From SIPs to expert portfolio guidance — we've got you covered.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <Card 
                  key={i}
                  className="text-center bg-white/10 backdrop-blur-sm border-white/20 animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/80">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 avix-icon-bg rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">Our Investment Solutions</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our expertly designed investment options to grow your wealth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, idx) => (
                <InvestmentCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose AVIX Investments */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  Why Choose AVIX for Investments?
                </h2>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 avix-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="avix-gradient-primary text-white border-0 avix-shadow-hero">
                <CardHeader>
                  <CardTitle className="text-3xl">Ready to Start Investing?</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Get personalized investment advice from our experts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6" />
                      <span className="text-lg font-medium">+91 99468 41656</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-6 h-6 text-center text-lg">📧</span>
                      <span className="text-lg">avixfinancialsolutions@gmail.com</span>
                    </div>
                  </div>
                  <div className="pt-4 space-y-3">
                    <Button className="w-full avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
                      <Link to="/contact">Get Free Consultation</Link>
                    </Button>
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30" size="lg" asChild>
                      <Link to="/calculator">
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate Returns
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 avix-gradient-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our experts guide you to the best investment path. No fees for consultation, 
              no pressure — just great advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
                <Link to="/contact">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Start SIP Today
                </Link>
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30" size="lg" asChild>
                <Link to="/contact">
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Investment;