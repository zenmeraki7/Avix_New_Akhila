import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EMICalculator from "@/components/emi-calculator/EMICalculator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Home,
  Briefcase,
  Shield,
  Heart,
  TrendingUp,
  FileText,
  Receipt,
  Calculator,
  Phone,
  CheckCircle,
  ArrowRight,
  Building,
  Percent,
  Wallet,
} from "lucide-react";

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
  
  .service-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 12px;
    transition: all 0.3s ease;
  }
  
  .service-item:hover {
    transform: translateY(-2px);
  }
`;

const Services = () => {
  const serviceCategories = [
    {
      title: "Lending Solutions",
      icon: CreditCard,
      description: "Comprehensive loan products for all your financial needs",
      services: [
        {
          name: "Personal Loans",
          description: "Quick personal loans up to ₹2 crores",
          highlights: ["Fast approval", "Minimal documentation", "Flexible tenure up to 5 years"]
        },
        {
          name: "Business Loans",
          description: "Fuel your business growth up to ₹5 Crores",
          highlights: ["Unsecured Business Loans","Working capital solutions", "Equipment financing", ]
        },
        {
          name: "Home Loans",
          description: "Make your dream home reality up to ₹5 Crores",
          highlights: ["Competitive interest rates", "Tenure up to 30 years", "Balance transfer facility"]
        },
        {
          name: "Loan Against Property",
          description: "Unlock property value up to 80% of market price",
          highlights: ["Multiple property types", "Flexible tenure", "Quick processing"]
        }
      ]
    },
    {
      title: "Insurance Protection",
      icon: Shield,
      description: "Comprehensive coverage to protect what matters most",
      services: [
        {
          name: "Health Insurance",
          description: "Complete family health coverage",
          highlights: ["Cashless treatment", "Family floater options", "Critical illness cover"]
        },
        {
          name: "Life Insurance",
          description: "Secure your family's financial future",
          highlights: ["Term life plans", "ULIP investments", "Pension solutions"]
        }
      ]
    },
    {
      title: "Investment & Wealth",
      icon: TrendingUp,
      description: "Build and grow your wealth with expert guidance",
      services: [
        {
          name: "Mutual Funds",
          description: "Systematic investment planning from ₹500",
          highlights: ["Diverse fund options", "Goal-based investing", "Expert fund selection"]
        },
        {
          name: "Investment Advisory",
          description: "Professional portfolio management",
          highlights: ["Personalized strategy", "Risk assessment", "Regular portfolio reviews"]
        }
      ]
    },
    {
      title: "Business Services",
      icon: Building,
      description: "Complete business support and compliance solutions",
      services: [
        {
          name: "GST Registration & Compliance",
          description: "Hassle-free GST services",
          highlights: ["Quick registration", "Return filing", "Ongoing compliance support"]
        },
        {
          name: "Tax Filing Services",
          description: "Professional tax preparation",
          highlights: ["Income tax returns", "ITR filing", "Tax planning & refund processing"]
        }
      ]
    }
  ];

  const benefits = [
    "Expert financial advisors with industry experience",
    "Quick processing and approval times",
    "Competitive rates and transparent pricing",
    "End-to-end service support",
    "Digital convenience with offline assistance",
    "Regulatory compliance and data security",
  ];

  return (
    <>
      <style>{avixStyles}</style>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-20 avix-gradient-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Financial Services</h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to meet all your personal
              and business needs. From loans to investments, we've got you covered.
            </p>
            <Button className="avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
              <Link to="/calculator">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate EMI
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-16 h-16 avix-icon-bg rounded-full flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-foreground">{category.title}</h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="avix-gradient-card avix-shadow-card hover:avix-shadow-hero transition-all duration-300">
                        <div className="service-item">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {service.name}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {service.description}
                            </p>
                            <div className="space-y-2">
                              {service.highlights.map((highlight, highlightIndex) => (
                                <div key={highlightIndex} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 avix-accent flex-shrink-0" />
                                  <span className="text-sm text-foreground">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose AVIX */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  Why Choose AVIX Financial Solutions?
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
                  <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Connect with our financial experts today
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
                        Calculate EMI
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* EMI Calculator */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 avix-icon-bg rounded-full flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-foreground">EMI Calculator</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Get instant EMI calculations for your loan requirements
              </p>
            </div>
            <EMICalculator />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 avix-gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Financial Solution?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Our experts can create a personalized financial plan just for you
            </p>
            <Button className="avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
              <Link to="/contact">
                Contact Our Experts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;