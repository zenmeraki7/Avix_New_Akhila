import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/ServiceCard';
import EMICalculator from '@/components/emi-calculator/EMICalculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
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
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const loanServices = [
    {
      title: "Personal Loans",
      description: "Quick personal loans for your immediate financial needs",
      features: ["Loan amount up to ₹25 Lakhs", "Tenure up to 5 years", "Quick approval in 24 hours", "Minimal documentation"],
      icon: CreditCard
    },
    {
      title: "Business Loans", 
      description: "Fuel your business growth with our flexible business loans",
      features: ["Up to ₹50 Lakhs funding", "Flexible repayment terms", "Working capital solutions", "Equipment financing"],
      icon: Briefcase
    },
    {
      title: "Home Loans",
      description: "Make your dream home a reality with competitive home loans",
      features: ["Up to ₹5 Crores loan amount", "Tenure up to 30 years", "Attractive interest rates", "Balance transfer facility"],
      icon: Home
    },
    {
      title: "Loan Against Property",
      description: "Unlock the value of your property for financial needs",
      features: ["Up to 70% of property value", "Flexible tenure options", "Competitive interest rates", "Multiple property types accepted"],
      icon: FileText
    }
  ];

  const insuranceServices = [
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family", 
      features: ["Cashless treatment", "Pre & post hospitalization", "Family floater options", "Critical illness cover"],
      icon: Heart
    },
    {
      title: "Life Insurance",
      description: "Secure your family's financial future with life insurance",
      features: ["Term life insurance", "Whole life policies", "ULIP plans", "Pension plans"],
      icon: Shield
    }
  ];

  const investmentServices = [
    {
      title: "Mutual Funds",
      description: "Build wealth through systematic investment planning",
      features: ["SIP starting from ₹500", "Diverse fund options", "Expert fund selection", "Goal-based investing"],
      icon: TrendingUp
    },
    {
      title: "Investment Advisory",
      description: "Professional guidance for your investment portfolio",
      features: ["Personalized investment strategy", "Risk assessment", "Portfolio rebalancing", "Regular reviews"],
      icon: Receipt
    }
  ];

  const additionalServices = [
    {
      title: "GST Registration",
      description: "Hassle-free GST registration and compliance services",
      features: ["Quick registration process", "GST return filing", "Compliance support", "Documentation assistance"],
      icon: FileText
    },
    {
      title: "Tax Filing",
      description: "Professional tax preparation and filing services",
      features: ["Income tax returns", "ITR filing", "Tax planning", "Refund processing"],
      icon: Receipt
    }
  ];

  const benefits = [
    "Expert financial advisors with industry experience",
    "Quick processing and approval times",
    "Competitive rates and transparent pricing",
    "End-to-end service support",
    "Digital convenience with offline assistance",
    "Regulatory compliance and data security"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Financial Services</h1>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet all your personal and business needs. 
            From loans to investments, we've got you covered.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/calculator">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate EMI
            </Link>
          </Button>
        </div>
      </section>

      {/* Loan Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Loan Services</h2>
            <p className="text-xl text-muted-foreground">
              Flexible loan solutions for every financial need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Insurance Services</h2>
            <p className="text-xl text-muted-foreground">
              Protect what matters most with comprehensive insurance coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {insuranceServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Investment Services</h2>
            <p className="text-xl text-muted-foreground">
              Grow your wealth with expert investment guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {investmentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Complete business support and compliance services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple 4-step process to get your financial solution
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application online or visit our office" },
              { step: "2", title: "Verify", description: "Our team verifies your documents and eligibility" },
              { step: "3", title: "Approve", description: "Get quick approval based on your profile" },
              { step: "4", title: "Disburse", description: "Receive funds directly to your account" }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-hero">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Connect with our financial experts today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                   <div className="flex items-center gap-3">
                     <Phone className="w-5 h-5" />
                     <span>+91 99468 41656</span>
                   </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-center">📧</span>
                    <span>avixfinancialsolutions@gmail.com</span>
                  </div>
                </div>
                <div className="pt-4 space-y-3">
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">Get Consultation</Link>
                  </Button>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/calculator">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate EMI
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Calculate Your EMI</h2>
            <p className="text-xl text-muted-foreground">
              Get instant EMI calculations for your loan requirements
            </p>
          </div>
          <EMICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Financial Solution?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Our experts can create a personalized financial plan just for you
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">
              Contact Our Experts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;