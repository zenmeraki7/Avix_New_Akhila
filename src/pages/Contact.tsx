import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  Users,
  CheckCircle,
  Sparkles,
  Star,
  HeadphonesIcon,
  Shield,
  Zap,
  Award
} from 'lucide-react';

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
  
  .avix-primary-hover {
    background: linear-gradient(135deg, #2D0A5E 0%, #4B1098 50%, #9B2CAE 100%);
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
  
  @keyframes avix-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes avix-pulse-soft {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  .avix-form-focus:focus {
    border-color: #8A1C9D;
    box-shadow: 0 0 0 3px rgba(138, 28, 157, 0.1);
  }
`;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully! 🎉",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 99468 41656"],
      description: "Available Mon-Sat, 9 AM - 7 PM",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["official@avixfinancialsolutions.com"],
      description: "We'll respond within 24 hours",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["5th floor, Chowalloor Tower", "West Fort, Civil Lanes Road", "Thrissur - 680004"],
      description: "By appointment only",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9 AM - 7 PM", "Sunday: Closed"],
      description: "Customer support available",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  const services = [
    "Personal Loan",
    "Business Loan", 
    "Home Loan",
    "Loan Against Property",
    "Health Insurance",
    "Life Insurance",
    "Mutual Funds",
    "Investment Advisory",
    "GST Registration",
    "Tax Filing",
    "General Inquiry"
  ];

  const benefits = [
    { text: "Free consultation and financial advice", icon: Users },
    { text: "Quick response within 24 hours", icon: Zap },
    { text: "Personalized solutions for your needs", icon: Star },
    { text: "Transparent processes with no hidden fees", icon: Shield },
    { text: "Expert guidance from certified professionals", icon: Award },
    { text: "End-to-end support throughout the process", icon: HeadphonesIcon }
  ];

  const faqs = [
    {
      question: "How quickly can I get loan approval?",
      answer: "Most loans are approved within 24-48 hours after document verification. Personal loans can be approved even faster, while business loans may take 3-7 working days depending on the complexity."
    },
    {
      question: "What documents do I need for a loan?",
      answer: "Basic documents include ID proof (Aadhaar/PAN), address proof, income proof (salary slips/ITR), and 6-month bank statements. Additional documents may be required based on loan type and amount."
    },
    {
      question: "Is there any processing fee?",
      answer: "Processing fees vary by loan type and amount, typically ranging from 0.5% to 2% of the loan amount. We maintain complete transparency about all charges upfront with no hidden costs."
    },
    {
      question: "Can I prepay my loan without penalties?",
      answer: "Yes, most of our loan products allow prepayment after 6-12 months with minimal or no prepayment charges. Terms vary by lender and loan product."
    },
    {
      question: "Do you provide insurance and investment services?",
      answer: "Yes, we offer comprehensive health, life, and motor insurance plans from leading companies. We also provide mutual fund investments and financial planning services."
    },
    {
      question: "How do I track my application status?",
      answer: "You can track your application status by calling our customer service at +91 99468 41656 or visiting our office. We provide regular updates via SMS and calls."
    }
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch With Us
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 avix-text-shadow leading-tight">
              Contact Our
              <span className="block text-yellow-300">Financial Experts</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-4xl mx-auto">
              Ready to start your financial journey? Get personalized advice and solutions 
              tailored to your unique needs from our certified financial advisors.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: Phone, label: "24-Hour Response", value: "Guaranteed" },
                { icon: Users, label: "Expert Advisors", value: "Certified" },
                { icon: Shield, label: "Secure Process", value: "100%" },
                { icon: Star, label: "Client Satisfaction", value: "99%" }
              ].map((stat, index) => (
                <div key={index} className="text-center avix-animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-yellow-300" />
                  </div>
                  <div className="text-lg font-bold text-yellow-300 mb-1">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl avix-animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl avix-animate-float" style={{ animationDelay: '2s' }}></div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl font-bold avix-text-gradient mb-4">Get Free Consultation</h2>
                  <p className="text-xl text-gray-600">
                    Fill out the form below and our experts will contact you within 24 hours with personalized solutions.
                  </p>
                </div>

                <Card className="avix-gradient-card border-0 avix-shadow-elegant">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            required
                            className="avix-form-focus border-2 p-3 text-lg"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            required
                            className="avix-form-focus border-2 p-3 text-lg"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address (optional)"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="avix-form-focus border-2 p-3 text-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-gray-700 font-medium">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                          <SelectTrigger className="avix-form-focus border-2 p-3 text-lg">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>{service}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements or any specific questions..."
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={4}
                          className="avix-form-focus border-2 p-3 text-lg"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full avix-gradient-primary hover:avix-primary-hover text-white border-0 p-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 avix-shadow-elegant" 
                        size="lg"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Submit & Get Free Consultation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold avix-text-gradient mb-6">Get In Touch</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Multiple ways to connect with our financial experts. Choose what works best for you.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="avix-gradient-card border-0 avix-shadow-soft hover:avix-shadow-elegant transition-all duration-500 transform hover:-translate-y-2 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 avix-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:avix-glow transition-all duration-300">
                            <info.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-700 font-medium mb-1 text-lg">{detail}</p>
                            ))}
                            <p className="text-gray-500 mt-2">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Google Map */}
                <Card className="avix-gradient-card border-0 avix-shadow-elegant overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.695582756733!2d76.21031567570314!3d10.523976660075893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1c5%3A0x4bc7dbae8d9c6f51!2sChowallur%20Towers%2C%20West%20Fort%2C%20Thrissur%2C%20Kerala%20680004!5e0!3m2!1sen!2sin!4v1722854951234!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AVIX Financial Solutions - Chowallur Towers"
                      className="rounded-xl"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="py-24 avix-gradient-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold avix-text-gradient mb-6">Why Contact AVIX?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with certified financial professionals who put your success first
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl avix-shadow-soft hover:avix-shadow-elegant transition-all duration-300 transform hover:scale-105 avix-animate-pulse-soft" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-12 h-12 avix-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold avix-text-gradient mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our services and processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="avix-gradient-card border-0 avix-shadow-soft hover:avix-shadow-elegant transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-24 avix-hero-bg text-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <HeadphonesIcon className="w-4 h-4 mr-2" />
              Emergency Support
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 avix-text-shadow">
              Need Immediate
              <span className="block text-yellow-300">Assistance?</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
              For urgent queries, loan emergencies, or time-sensitive financial needs, 
              our dedicated helpline is here to assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <div className="flex items-center gap-4 text-2xl font-bold bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                <Phone className="w-8 h-8 text-yellow-300" />
                <span>+91 99468 41656</span>
              </div>
              <div className="hidden sm:block text-white/60 text-2xl">|</div>
              <div className="flex items-center gap-4 text-2xl font-bold bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4">
                <Clock className="w-8 h-8 text-yellow-300" />
                <span>24/7 Support</span>
              </div>
            </div>

            <p className="text-lg text-white/80">
              Available for loan applications, insurance claims, and financial emergencies
            </p>
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

export default Contact;