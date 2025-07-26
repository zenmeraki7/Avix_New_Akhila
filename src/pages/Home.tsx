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
import Marquee from 'react-fast-marquee';
import heroImage from '@/assets/hero-financial.jpg';
import servicesImage from '@/assets/services-overview.jpg';
import bg from '@/assets/bg.png';
import CountUp from 'react-countup';

const Home = () => {
  const services = [
    {
      title: " Loans",
      description: "Quick and hassle-free loans for all your needs",
      features: ["Personal Loans ,", "Business Loans", "Car Loans" ,"Loan Takeover"],
      icon: CreditCard
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
      features: ["Health Insurance", "Life Insurance",  "Term Plans"],
      icon: Shield
    },
    {
      title: "Credit Cards",
      description: "Discover, compare, and apply for the best credit cards tailored to your lifestyle and needs.",
      features: ["Top Credit Card Offers", "Personalized Recommendations", "Financial Education & Tips"],
      icon: HomeIcon
    },
  ];

const stats = [
  { number: 10000, suffix: '+', label: 'Happy Customers' },
  { number: 100, suffix: 'Cr+', prefix: '₹', label: 'Loans Disbursed' },
  { number: 8, suffix: '+', label: 'Years Experience' },
  { number: 100, suffix: '%', label: 'Customer Satisfaction' }
];

  const testimonials = [
    {
      name: "Nishad Mohammed",
      role: "Business Owner",
      content: "AVIX helped me get a business loan quickly. Their process is transparent and customer service is excellent.",
      rating: 5
    },
    {
      name: "Navya Venkatesh",
      role: "Software Engineer",
      content: "Got my home loan approved in just 3 days! Amazing service and competitive rates.",
      rating: 5
    },
    {
      name: "Kurian",
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
          style={{ backgroundImage: `url(${bg})` }}
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
                Our Services
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
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                <CountUp
                  end={stat.number}
                  duration={2}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                  enableScrollSpy
                  scrollSpyDelay={100}
                />
              </div>
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


        </div>
      </section>
{/* why choose us */}
      <section className="py-20 min-h-[600px] bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:text-left text-center">
              <h3 className="text-4xl font-bold  text-primary-foreground/90 mb-8">
                Why Choose AVIX ?
              </h3>
              <div className="space-y-5 text-xl">
                {[
                  "Expert financial advisors with 15+ years experience",
                  "Quick loan approvals in 24-48 hours",
                  "Competitive interest rates and flexible terms",
                  "Paperless processes and digital convenience",
                  "Comprehensive insurance and investment options"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 md:justify-start justify-center">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-lg  text-primary-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="lg" className="mt-10" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative flex justify-center">
              <img 
                src={servicesImage} 
                alt="Financial Services Overview" 
                className="rounded-lg shadow-hero w-full h-auto max-w-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* trusted partners */}

      <section className='py-20'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Trusted Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with leading financial institutions to provide you the best services
            </p>
          </div>
          <Marquee gradient={false} speed={45} pauseOnHover={true} className="py-5">
            <img src="https://logodix.com/logo/840255.png" alt="Partner 1" className="h-14 w-auto mx-12" />
            <img src="https://loansaath.com/img/clients/Axis%20Finance.png" alt="Partner 2" className="h-14 w-auto mx-12" />
            <img src="https://logos-download.com/wp-content/uploads/2016/10/icici_bank_logo_symbol.png" alt="Partner 3" className="h-14 w-auto mx-12" />
            <img src="http://logos-download.com/wp-content/uploads/2016/06/Yes_Bank_logo.png" alt="Partner 4" className="h-14 w-auto mx-12" />
            <img src="http://logos-download.com/wp-content/uploads/2016/06/Yes_Bank_logo.png" alt="Partner 4" className="h-14 w-auto mx-12" />
            <img src="http://logos-download.com/wp-content/uploads/2016/06/Yes_Bank_logo.png" alt="Partner 4" className="h-14 w-auto mx-12" />
            <img src="http://logos-download.com/wp-content/uploads/2016/06/Yes_Bank_logo.png" alt="Partner 4" className="h-14 w-auto mx-12" />
            {/* Repeat logos for seamless loop if needed */}
            <img src="" alt="Partner 1" className="h-14 w-auto mx-12" />
            <img src="/path/to/logo2.png" alt="Partner 2" className="h-14 w-auto mx-12" />
            <img src="/path/to/logo3.png" alt="Partner 3" className="h-14 w-auto mx-12" />
            <img src="/path/to/logo4.png" alt="Partner 4" className="h-14 w-auto mx-12" />
          </Marquee>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 min-h-[600px] bg-muted">
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
            Get started today with a consultation and personalized financial planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Consultation</Link>
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