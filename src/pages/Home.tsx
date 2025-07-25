import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceCard from '@/components/ServiceCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  CreditCard, 
  Home as HomeIcon, 
  TrendingUp, 
  Shield, 
  Calculator, 
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-financial.jpg';
import servicesImage from '@/assets/services-overview.jpg';

const Home = () => {
  const services = [
    {
      title: "Personal Loans",
      description: "Quick and hassle-free personal loans for all your needs",
      features: ["Up to ₹25 Lakhs", "Minimal Documentation", "Quick Approval"],
      icon: CreditCard
    },
    {
      title: "Home Loans",
      description: "Make your dream home a reality with our competitive rates",
      features: ["Low Interest Rates", "Flexible Tenure", "Easy EMI Options"],
      icon: HomeIcon
    },
    {
      title: "Investments",
      description: "Grow your wealth with our expert investment advisory",
      features: ["Mutual Funds", "SIP Planning", "Portfolio Management"],
      icon: TrendingUp
    },
    {
      title: "Insurance",
      description: "Comprehensive insurance coverage for peace of mind",
      features: ["Life Insurance", "Health Insurance", "Term Plans"],
      icon: Shield
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "₹1000Cr+", label: "Loans Disbursed" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "AVIX helped me get a business loan quickly. Their process is transparent and customer service is excellent.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Got my home loan approved in just 3 days! Amazing service and competitive rates.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Doctor",
      content: "Their investment advisory helped me plan my finances better. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Where Financial Clarity Begins
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            From loans to investments, insurance to tax planning - we provide comprehensive 
            financial solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/calculator">
                <Calculator className="w-5 h-5 mr-2" />
                EMI Calculator
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Financial Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Choose AVIX Financial?
              </h3>
              <div className="space-y-4">
                {[
                  "Expert financial advisors with 15+ years experience",
                  "Quick loan approvals in 24-48 hours",
                  "Competitive interest rates and flexible terms",
                  "Paperless processes and digital convenience",
                  "Comprehensive insurance and investment options"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="lg" className="mt-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={servicesImage} 
                alt="Financial Services Overview" 
                className="rounded-lg shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-0 shadow-card">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Achieve Your Financial Goals?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get started today with a free consultation and personalized financial planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/calculator">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate EMI
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;