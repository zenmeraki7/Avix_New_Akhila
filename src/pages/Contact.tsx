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
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9876543210", "+91 9876543211"],
      description: "Available Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["info@avixfinancial.com", "support@avixfinancial.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["AVIX Financial Services", "Mumbai, Maharashtra 400001"],
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9 AM - 7 PM", "Sunday: Closed"],
      description: "Emergency support available"
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
    "Free consultation and financial advice",
    "Quick response within 24 hours",
    "Personalized solutions for your needs",
    "Transparent processes with no hidden fees",
    "Expert guidance from certified professionals",
    "End-to-end support throughout the process"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to start your financial journey? Get in touch with our experts for 
            personalized advice and solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  Get Free Consultation
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our experts will contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address (optional)"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you achieve your financial goals. Choose the best way to reach us.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-background border shadow-card hover:shadow-hero transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground mb-1">{detail}</p>
                          ))}
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Contact AVIX?</h2>
            <p className="text-xl text-muted-foreground">
              Benefits of choosing our consultation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How quickly can I get loan approval?",
                answer: "Most loans are approved within 24-48 hours after document verification. Some cases may take up to 7 working days."
              },
              {
                question: "What documents do I need for a loan?",
                answer: "Basic documents include ID proof, address proof, income proof, and bank statements. Specific requirements vary by loan type."
              },
              {
                question: "Is there any processing fee?",
                answer: "Processing fees vary by loan type and amount. We maintain complete transparency about all charges upfront."
              },
              {
                question: "Can I prepay my loan?",
                answer: "Yes, most of our loan products allow prepayment with minimal or no prepayment charges after a certain period."
              },
              {
                question: "Do you provide insurance services?",
                answer: "Yes, we offer comprehensive health and life insurance plans from leading insurance companies."
              },
              {
                question: "How do I track my application status?",
                answer: "You can track your application status by calling our customer service or through our online portal."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            For urgent queries or emergencies, call our helpline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 text-xl font-semibold">
              <Phone className="w-6 h-6" />
              <span>+91 9876543210</span>
            </div>
            <div className="hidden sm:block text-primary-foreground/60">|</div>
            <div className="flex items-center gap-3 text-xl font-semibold">
              <Calendar className="w-6 h-6" />
              <span>24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;