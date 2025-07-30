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
  
  .avix-premium-badge {
    background: linear-gradient(135deg, #8A1C9D 0%, #3A0087 100%);
    color: white;
  }
  
  .avix-success-bg {
    background: rgba(34, 197, 94, 0.1);
    color: rgb(34, 197, 94);
  }
  
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
  
  .animate-slide-in-up {
    animation: slideInUp 0.8s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;

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
      <Card
        className={`group avix-gradient-card avix-shadow-card hover:avix-shadow-hero transition-all duration-500 transform hover:-translate-y-3 animate-slide-in-up ${
          isPremium ? "ring-2 ring-purple-200/50" : ""
        }`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <CardHeader>
          {isPremium && (
            <div className="mb-4 inline-flex items-center avix-premium-badge px-3 py-1 rounded-full text-sm font-semibold w-fit">
              <Star className="w-3 h-3 mr-1" />
              Premium Service
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <div className="relative w-16 h-16 avix-icon-bg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-8 h-8 text-white" />
              {service.urgent && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div className="text-sm font-bold avix-success-bg px-3 py-1 rounded-full">
              {service.coverage}
            </div>
          </div>

          <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm">
                <CheckCircle className="w-4 h-4 avix-accent mr-3 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              {service.serviceType}:{" "}
              <span className="font-semibold text-foreground">
                {service.pricing}
              </span>
            </div>
            <Button variant="outline" size="sm" className="avix-accent border-current hover:bg-current hover:text-white">
              Get Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
);
InsuranceServiceCard.displayName = "InsuranceServiceCard";

const FeatureHighlight: FC<FeatureHighlightProps> = memo(
  ({ feature, index }) => (
    <Card 
      className="avix-gradient-card border-0 animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <CardContent className="flex items-center space-x-4 p-6">
        <div className="w-12 h-12 avix-icon-bg rounded-xl flex items-center justify-center flex-shrink-0">
          <feature.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{feature.title}</h4>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      </CardContent>
    </Card>
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
        description: "Comprehensive health coverage for you and your family with expert guidance on the best policies.",
        coverage: "Up to ₹1 Cr",
        serviceType: "Advisory Fee",
        pricing: "Free Consultation",
        premium: true,
        features: [
          "Pre-existing disease coverage",
          "Cashless hospitalization network",
          "Annual health check-ups included",
          "Maternity & newborn coverage",
          "Critical illness protection",
        ],
      },
      {
        id: "life-insurance",
        title: "Life Insurance Planning",
        icon: Shield,
        description: "Secure your family's financial future with comprehensive life insurance solutions.",
        coverage: "Up to ₹5 Cr",
        serviceType: "Premium",
        pricing: "₹500/month",
        features: [
          "Term life insurance plans",
          "Whole life policies available",
          "ULIP investment options",
          "Pension and retirement planning",
          "Tax-saving benefits under 80C",
        ],
      },
    ],
    []
  );

  const keyFeatures: Feature[] = useMemo(
    () => [
      {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the‑clock assistance for claims",
      },
      {
        icon: Award,
        title: "Expert Advisors",
        description: "10+ years of insurance experience",
      },
      {
        icon: Calculator,
        title: "Free Quotes",
        description: "Instant quotes from top insurers",
      },
      {
        icon: TrendingUp,
        title: "Best Rates",
        description: "Competitive premiums & coverage",
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

  const benefits = [
    "IRDA certified insurance advisors",
    "Free consultation and policy comparison",
    "Cashless claim processing support",
    "50+ insurance company partnerships",
    "End-to-end policy management",
    "Tax-saving insurance solutions"
  ];

  return (
    <>
      <style>{avixStyles}</style>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-20 avix-gradient-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Shield className="w-4 h-4 mr-2 text-yellow-300" />
              Comprehensive Insurance Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insurance <span className="text-yellow-300">Services</span>
            </h1>
            
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/90 mb-8">
              Protect what matters most with expert guidance and comprehensive coverage solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
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
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <Card 
                  key={i}
                  className="text-center avix-gradient-card border-0 animate-fade-in"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold avix-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 avix-icon-bg rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">Why Choose Our Insurance Services?</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the difference with our professional advisory and comprehensive support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feat, i) => (
                <FeatureHighlight key={i} feature={feat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 avix-icon-bg rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">Our Insurance Solutions</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored coverage solutions for every personal and business need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((svc, i) => (
                <InsuranceServiceCard key={svc.id} service={svc} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose AVIX Insurance */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  Why Choose AVIX for Insurance?
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
                  <CardTitle className="text-3xl">Ready to Get Protected?</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Get expert insurance advice and comprehensive coverage
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
                      <Link to="/contact">
                        <Calculator className="w-5 h-5 mr-2" />
                        Get Insurance Quote
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Protected Today
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Don't wait to secure your future. Get the perfect insurance coverage now with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Expert Now
                </Link>
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30" size="lg" asChild>
                <Link to="/contact">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Free Quote
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

export default Insurance;