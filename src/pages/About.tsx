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
  ArrowRight,
  Sparkles,
  Star,
  Building,
  Clock
} from 'lucide-react';

const About = () => {
  // AVIX Styling
  const avixStyles = `
    .avix-gradient-primary {
      background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
    }
    
    .avix-gradient-secondary {
      background: linear-gradient(145deg, rgba(28, 0, 77, 0.05) 0%, rgba(58, 0, 135, 0.08) 50%, rgba(138, 28, 157, 0.05) 100%);
    }
    
    .avix-gradient-card {
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%);
      border: 1px solid rgba(138, 28, 157, 0.1);
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
    
    .avix-shadow-elegant {
      box-shadow: 0 10px 40px rgba(138, 28, 157, 0.15);
    }
    
    .avix-shadow-soft {
      box-shadow: 0 4px 20px rgba(138, 28, 157, 0.08);
    }
    
    .avix-glow {
      box-shadow: 0 0 30px rgba(138, 28, 157, 0.3);
    }
    
    .avix-animate-float {
      animation: avix-float 6s ease-in-out infinite;
    }
    
    .avix-animate-pulse-soft {
      animation: avix-pulse-soft 3s ease-in-out infinite;
    }
    
    @keyframes avix-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes avix-pulse-soft {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
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
  `;

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our customers' financial well-being above everything else",
      color: "text-red-500"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete transparency in all our processes and dealings",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging technology to provide seamless financial services",
      color: "text-green-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering excellence in every interaction",
      color: "text-purple-500"
    }
  ];

  const milestones = [
    { year: "2017", event: "AVIX Financial Services founded", icon: Building },
    { year: "2019", event: "Expanded to insurance services", icon: Shield },
    { year: "2022", event: "Introduced investment advisory", icon: TrendingUp },
    { year: "2024", event: "Crossed ₹100 Cr in loan disbursals, Serving 10,000+ satisfied customers", icon: Award },
    { year: "2025", event: "Launched digital platform", icon: Sparkles }
  ];

  const achievements = [
    { number: "8+", label: "Years of Excellence", icon: Clock },
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "₹100Cr+", label: "Loans Disbursed", icon: TrendingUp },
    { number: "99%", label: "Customer Satisfaction", icon: Star }
  ];

  return (
    <>
      <style>{avixStyles}</style>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="py-24 avix-hero-bg text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                About AVIX Financial Solutions
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 avix-text-shadow leading-tight">
                Empowering Your
                <span className="block text-yellow-300">Financial Dreams</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                Since 2017, we've been your trusted partner in achieving financial success and security 
                through innovative, transparent, and customer-centric solutions.
              </p>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center avix-animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-yellow-300" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">{achievement.number}</div>
                    <div className="text-white/80 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold avix-text-gradient mb-6">Our Foundation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on strong principles and driven by a clear vision for the future
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="avix-gradient-card border-0 avix-shadow-elegant group hover:avix-shadow-soft transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-10">
                  <div className="w-16 h-16 avix-gradient-primary rounded-2xl flex items-center justify-center mb-8 group-hover:avix-glow transition-all duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To democratize financial services by providing accessible, transparent, 
                    and innovative solutions that empower individuals and businesses to 
                    achieve their financial goals with confidence and ease.
                  </p>
                </CardContent>
              </Card>

              <Card className="avix-gradient-card border-0 avix-shadow-elegant group hover:avix-shadow-soft transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-10">
                  <div className="w-16 h-16 avix-gradient-primary rounded-2xl flex items-center justify-center mb-8 group-hover:avix-glow transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
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
        <section className="py-24 avix-gradient-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold avix-text-gradient mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The fundamental principles that guide everything we do and shape our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="avix-gradient-card border-0 avix-shadow-soft text-center group hover:avix-shadow-elegant transition-all duration-500 transform hover:-translate-y-3 avix-animate-pulse-soft" style={{ animationDelay: `${index * 0.3}s` }}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold avix-text-gradient mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key milestones that shaped our growth and strengthened our commitment to excellence
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 avix-gradient-primary transform md:-translate-x-0.5 rounded-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <Card className="avix-gradient-card border-0 avix-shadow-soft group hover:avix-shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 avix-gradient-primary rounded-xl flex items-center justify-center">
                              <milestone.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-3xl font-bold avix-accent">{milestone.year}</div>
                          </div>
                          <p className="text-gray-700 font-medium text-lg leading-relaxed">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="relative flex-shrink-0 w-8 h-8 avix-gradient-primary rounded-full shadow-lg z-10 ml-4 md:ml-0 avix-animate-pulse-soft"></div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 avix-gradient-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold avix-text-gradient mb-6">Why Choose AVIX?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for thousands of satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "8+ years of proven expertise in financial services",
                "Transparent processes with no hidden charges",
                "Quick approvals and minimal documentation",
                "Competitive interest rates and flexible terms",
                "Comprehensive range of financial products",
                "24/7 customer support and assistance",
                "Digital-first approach for convenient service",
                "Regulatory compliant and secure operations"
              ].map((reason, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl avix-shadow-soft hover:avix-shadow-elegant transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 avix-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 avix-hero-bg text-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-300" />
              Ready to Get Started?
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 avix-text-shadow">
              Start Your Financial
              <span className="block text-yellow-300">Journey Today</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust AVIX for their financial needs. 
              Experience the difference of working with true financial partners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105" 
                size="lg" 
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              
              <Button 
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 avix-shadow-elegant" 
                size="lg" 
                asChild
              >
                <Link to="/services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl avix-animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl avix-animate-float" style={{ animationDelay: '2s' }}></div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;