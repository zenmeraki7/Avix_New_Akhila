import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our customers' financial well-being above everything else"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete transparency in all our processes and dealings"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging technology to provide seamless financial services"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering excellence in every interaction"
    }
  ];

  const milestones = [
    { year: "2009", event: "AVIX Financial Services founded" },
    { year: "2012", event: "Crossed ₹100 Cr in loan disbursals" },
    { year: "2015", event: "Launched digital platform" },
    { year: "2018", event: "Expanded to insurance services" },
    { year: "2020", event: "Introduced investment advisory" },
    { year: "2024", event: "Serving 50,000+ satisfied customers" }
  ];

  const team = [
    {
      name: "Rajesh Agarwal",
      role: "Founder & CEO",
      experience: "20+ years in financial services"
    },
    {
      name: "Priya Menon", 
      role: "Head of Operations",
      experience: "15+ years in banking"
    },
    {
      name: "Amit Kumar",
      role: "Chief Technology Officer",
      experience: "12+ years in fintech"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About AVIX Financial Solutions</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Empowering financial dreams since 2009. We are your trusted partner 
              in achieving financial success and security.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">8+</div>
                <div className="text-primary-foreground/80">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                <div className="text-primary-foreground/80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">₹100Cr+</div>
                <div className="text-primary-foreground/80">Loans Disbursed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize financial services by providing accessible, transparent, 
                  and innovative solutions that empower individuals and businesses to 
                  achieve their financial goals with confidence and ease.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted financial services partner, 
                  known for our customer-centric approach, technological innovation, 
                  and commitment to financial inclusion across all segments of society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that shaped our growth
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent transform md:-translate-x-0.5"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="bg-gradient-card border-0 shadow-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                        <p className="text-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative flex-shrink-0 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-lg z-10 ml-4 md:ml-0"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals leading our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-background border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose AVIX?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "15+ years of proven expertise in financial services",
              "Transparent processes with no hidden charges",
              "Quick approvals and minimal documentation",
              "Competitive interest rates and flexible terms",
              "Comprehensive range of financial products",
              "24/7 customer support and assistance",
              "Digital-first approach for convenient service",
              "Regulatory compliant and secure operations"
            ].map((reason, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of satisfied customers who trust AVIX for their financial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;