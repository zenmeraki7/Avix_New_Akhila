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
  Sparkles,
  Star,
  Clock,
  Users,
  Award,
  Mail,
  Zap,
  Target,
  DollarSign
} from "lucide-react";

// Enhanced AVIX Brand Styles
const avixStyles = `
  .avix-gradient-primary {
    background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
  }
  
  .avix-gradient-secondary {
    background: linear-gradient(145deg, rgba(28, 0, 77, 0.05) 0%, rgba(58, 0, 135, 0.08) 50%, rgba(138, 28, 157, 0.05) 100%);
  }
  
  .avix-gradient-card {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
    border: 1px solid rgba(138, 28, 157, 0.15);
    backdrop-filter: blur(10px);
  }
  
  .avix-accent {
    color: #8A1C9D;
  }
  
  .avix-text-gradient {
    background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .avix-icon-bg {
    background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
  }
  
  .avix-shadow-elegant {
    box-shadow: 0 10px 40px rgba(138, 28, 157, 0.15);
  }
  
  .avix-shadow-soft {
    box-shadow: 0 4px 20px rgba(138, 28, 157, 0.08);
  }
  
  .avix-glow {
    box-shadow: 0 0 30px rgba(138, 28, 157, 0.3);
  }
  
  .avix-hero-bg {
    background: linear-gradient(135deg, #1C004D 0%, #3A0087 30%, #8A1C9D 70%, #B83FBD 100%);
    position: relative;
    overflow: hidden;
  }
  
  .avix-hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
  }
  
  .avix-text-shadow {
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
  
  .avix-animate-float {
    animation: avix-float 6s ease-in-out infinite;
  }
  
  .avix-animate-pulse-soft {
    animation: avix-pulse-soft 3s ease-in-out infinite;
  }
  
  .avix-animate-slide-up {
    animation: avix-slide-up 0.8s ease-out forwards;
  }
  
  @keyframes avix-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes avix-pulse-soft {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  @keyframes avix-slide-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .service-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .service-card:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  .category-section {
    margin-bottom: 4rem;
  }
  
  .highlight-badge {
    background: linear-gradient(135deg, rgba(138, 28, 157, 0.1) 0%, rgba(138, 28, 157, 0.05) 100%);
    border: 1px solid rgba(138, 28, 157, 0.2);
  }
`;

const Services = () => {
  const serviceCategories = [
    {
      title: "Lending Solutions",
      icon: CreditCard,
      description: "Comprehensive loan products tailored for all your financial aspirations",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      services: [
        {
          name: "Personal Loans",
          description: "Quick personal loans up to ₹2 crores with competitive rates",
          highlights: ["Fast approval in 24-48 hours", "Minimal documentation required", "Flexible tenure up to 5 years"],
          rate: "Starting from 9.99%*",
          icon: Wallet
        },
        {
          name: "Business Loans",
          description: "Fuel your business growth up to ₹5 Crores",
          highlights: ["Unsecured Business Loans", "Working capital solutions", "Equipment financing"],
          rate: "Starting from 9.99%*",
          icon: Briefcase
        },
        {
          name: "Home Loans",
          description: "Make your dream home reality up to ₹5 Crores",
          highlights: ["Competitive interest rates", "Tenure up to 30 years", "Balance transfer facility"],
          rate: "Starting from 8.75%*",
          icon: Home
        },
        {
          name: "Loan Against Property",
          description: "Unlock property value up to 80% of market price",
          highlights: ["Multiple property types accepted", "Flexible tenure options", "Quick processing & approval"],
          rate: "Starting from 9.25%*",
          icon: Building
        }
      ]
    },
    {
      title: "Insurance Protection",
      icon: Shield,
      description: "Comprehensive coverage to protect what matters most to you",
      color: "text-green-500",
      bgColor: "bg-green-50",
      services: [
        {
          name: "Health Insurance",
          description: "Complete family health coverage with extensive benefits",
          highlights: ["Cashless treatment network", "Family floater options", "Critical illness cover"],
          rate: "Starting from ₹999/year",
          icon: Heart
        },
        {
          name: "Life Insurance",
          description: "Secure your family's financial future with comprehensive plans",
          highlights: ["Term life plans", "ULIP investments", "Pension solutions"],
          rate: "Starting from ₹500/month",
          icon: Shield
        }
      ]
    },
    {
      title: "Investment & Wealth",
      icon: TrendingUp,
      description: "Build and grow your wealth with expert guidance and strategies",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      services: [
        {
          name: "Mutual Funds",
          description: "Systematic investment planning starting from just ₹500",
          highlights: ["Diverse fund options", "Goal-based investing", "Expert fund selection"],
          rate: "SIP from ₹500/month",
          icon: TrendingUp
        },
        {
          name: "Investment Advisory",
          description: "Professional portfolio management and financial planning",
          highlights: ["Personalized strategy", "Risk assessment", "Regular portfolio reviews"],
          rate: "Consultation available",
          icon: Target
        }
      ]
    },
    {
      title: "Business Services",
      icon: Building,
      description: "Complete business support and compliance solutions",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      services: [
        {
          name: "GST Registration & Compliance",
          description: "Hassle-free GST services and ongoing compliance support",
          highlights: ["Quick registration process", "Monthly return filing", "Ongoing compliance support"],
          rate: "Starting from ₹2,999",
          icon: FileText
        },
        {
          name: "Tax Filing Services",
          description: "Professional tax preparation and planning services",
          highlights: ["Income tax returns", "ITR filing assistance", "Tax planning & refund processing"],
          rate: "Starting from ₹999",
          icon: Receipt
        }
      ]
    }
  ];

  const benefits = [
    { text: "Expert financial advisors with 8+ years industry experience", icon: Award },
    { text: "Quick processing and approval times (24-48 hours)", icon: Zap },
    { text: "Competitive rates and completely transparent pricing", icon: Percent },
    { text: "End-to-end service support throughout the process", icon: Users },
    { text: "Digital convenience combined with personalized offline assistance", icon: Sparkles },
    { text: "Full regulatory compliance and advanced data security", icon: Shield }
  ];

  const quickStats = [
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "₹100Cr+", label: "Loans Disbursed", icon: DollarSign },
    { number: "24-48hrs", label: "Quick Approval", icon: Clock },
    { number: "99%", label: "Satisfaction Rate", icon: Star }
  ];

  return (
    <>
      <style>{avixStyles}</style>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="py-24 avix-hero-bg text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Complete Financial Solutions
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 avix-text-shadow leading-tight">
              Our Financial
              <span className="block text-yellow-300">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Comprehensive financial solutions designed to meet all your personal and business needs. 
              From loans to investments, we provide expert guidance every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
                size="lg" 
                asChild
              >
                <Link to="/calculator" className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate EMI
                </Link>
              </Button>
              
              <Button 
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 avix-shadow-elegant" 
                size="lg" 
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="text-center avix-animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl avix-animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl avix-animate-float" style={{ animationDelay: '2s' }}></div>
        </section>

        {/* Services Categories */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="category-section">
                  {/* Category Header */}
                  <div className="text-center mb-16 avix-animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                    <div className="flex items-center justify-center gap-6 mb-6">
                      <div className="w-20 h-20 avix-icon-bg rounded-2xl flex items-center justify-center avix-shadow-elegant group-hover:avix-glow transition-all duration-300">
                        <category.icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-5xl font-bold avix-text-gradient">{category.title}</h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="avix-gradient-card border-0 avix-shadow-soft hover:avix-shadow-elegant service-card group">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-6 mb-6">
                            <div className="w-16 h-16 avix-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:avix-glow transition-all duration-300">
                              <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                                <div className="highlight-badge px-3 py-1 rounded-full">
                                  <span className="text-sm font-semibold avix-accent">{service.rate}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {service.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            {service.highlights.map((highlight, highlightIndex) => (
                              <div key={highlightIndex} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 avix-accent flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose AVIX */}
        <section className="py-24 avix-gradient-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold avix-text-gradient mb-8 leading-tight">
                  Why Choose AVIX Financial Solutions?
                </h2>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Experience the difference of working with certified financial professionals 
                  who prioritize your success and financial well-being.
                </p>
                <div className="grid gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl avix-shadow-soft hover:avix-shadow-elegant transition-all duration-300 transform hover:scale-105 avix-animate-pulse-soft" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="w-12 h-12 avix-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg leading-relaxed">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="avix-gradient-primary text-white border-0 avix-shadow-elegant avix-animate-float">
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Phone className="w-8 h-8 text-yellow-300" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold">Ready to Get Started?</CardTitle>
                      <CardDescription className="text-white/80 text-lg mt-2">
                        Connect with our financial experts today
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Phone className="w-6 h-6 text-yellow-300" />
                      <span className="text-lg font-semibold">+91 99468 41656</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Mail className="w-6 h-6 text-yellow-300" />
                      <span className="text-lg font-semibold">official@avixfinancialsolutions.com</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white p-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
                      size="lg" 
                      asChild
                    >
                      <Link to="/contact" className="flex items-center justify-center">
                        <Users className="w-5 h-5 mr-2" />
                        Get Free Consultation
                      </Link>
                    </Button>
                    <Button 
                      className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 p-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
                      size="lg" 
                      asChild
                    >
                      <Link to="/calculator" className="flex items-center justify-center">
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
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-20 h-20 avix-icon-bg rounded-2xl flex items-center justify-center avix-shadow-elegant">
                  <Calculator className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-5xl font-bold avix-text-gradient">EMI Calculator</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get instant EMI calculations for your loan requirements and plan your finances better
              </p>
            </div>
            <div className="avix-shadow-elegant rounded-3xl overflow-hidden">
              <EMICalculator />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 avix-hero-bg text-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Personalized Solutions
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 avix-text-shadow">
              Need a Custom
              <span className="block text-yellow-300">Financial Solution?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Our certified experts can create a personalized financial plan tailored specifically 
              to your unique goals and circumstances.
            </p>
            
            <Button 
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-105 avix-shadow-elegant" 
              size="lg" 
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Contact Our Experts
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl avix-animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl avix-animate-float" style={{ animationDelay: '3s' }}></div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;