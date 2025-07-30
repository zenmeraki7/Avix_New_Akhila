import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import poonawalla from "../assets/poonwalla.jpeg";
import smfg from "../assets/smfg.jpeg";
import southIndian from "../assets/southIndian.jpeg";
import ServiceCard from "@/components/ServiceCard";
import shriram from "../assets/shriram.jpeg";
import TATA from "../assets/TATA.jpeg";
import Birla from "../assets/Birla.jpeg";
import Axis from "../assets/Axis.jpeg";
import Axisfinance from "../assets/AxisFinance.jpeg";
import Bajaj from "../assets/bajaj.jpeg";
import chola from "../assets/chola.jpeg";
import finnable from "../assets/finnable.jpeg";
import HDFC from "../assets/HDFC.jpeg";
import IDBI from "../assets/IDBI.jpeg";
import IDFC from "../assets/IDFC.jpeg";
import inCred from "../assets/inCred.jpeg";
import IndusInd from "../assets/IndusInd.jpeg";
import kotak from "../assets/kotak.jpeg";
import LTFinance from "../assets/LTFinance.jpeg";
import muthoot from "../assets/muthoot.jpeg";
import piramal from "../assets/piramal.jpeg";
import yesBank from "../assets/yesBank.jpeg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  Star,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import heroImage from "@/assets/hero-financial.jpg";
import servicesImage from "@/assets/services-overview.jpg";
import bg from "@/assets/bg.png";
import CountUp from "react-countup";

const Home = () => {
  const services = [
    {
      title: " Loans",
      description: "Quick and hassle-free loans for all your needs",
      features: [
        "Personal Loans ,",
        "Business Loans",
        "Car Loans",
        "Loan Takeover",
      ],
      icon: CreditCard,
      link: "/loans",
    },

    {
      title: "Investments",
      description: "Grow your wealth with our expert investment advisory",
      features: ["Mutual Funds", "SIP Planning", "Portfolio Management"],
      icon: TrendingUp,
      link: "/BusinessLoan",
    },
    {
      title: "Insurance",
      description: "Comprehensive insurance coverage for peace of mind",
      features: ["Health Insurance", "Life Insurance", "Term Plans"],
      icon: Shield,
      link: "/investment",
    },
    {
      title: "Credit Cards",
      description:
        "Discover, compare, and apply for the best credit cards tailored to your lifestyle and needs.",
      features: [
        "Top Credit Card Offers",
        "Personalized Recommendations",
        "Financial Education & Tips",
      ],
      icon: HomeIcon,
      link: "/insurence",
    },
  ];

  const stats = [
    { number: 10000, suffix: "+", label: "Happy Customers" },
    { number: 100, suffix: "Cr+", prefix: "₹", label: "Loans Disbursed" },
    { number: 8, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Customer Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Nishad Mohammed",
      role: "Business Owner",
      content:
        "AVIX helped me get a business loan quickly. Their process is transparent and customer service is excellent.",
      rating: 5,
    },
    {
      name: "Navya Venkatesh",
      role: "Software Engineer",
      content:
        "Got my home loan approved in just 3 days! Amazing service and competitive rates.",
      rating: 5,
    },
    {
      name: "Kurian",
      role: "Doctor",
      content:
        "Their investment advisory helped me plan my finances better. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <>
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
              From loans to investments, insurance to tax planning - we provide
              comprehensive financial solutions tailored to your needs.
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
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                      enableScrollSpy
                      scrollSpyDelay={100}
                    />
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Financial Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive financial solutions designed to help you achieve
                your goals
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
                    "Comprehensive insurance and investment options",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 md:justify-start justify-center"
                    >
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-lg  text-primary-foreground/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="accent" size="lg" className="mt-10" asChild>
                  <Link to="/">Learn More About Us</Link>
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We collaborate with leading financial institutions to provide
                you the best services
              </p>
            </div>

            <Marquee
              gradient={false}
              speed={45}
              pauseOnHover={true}
              className="py-5"
            >
              <div className="flex gap-6">
                {/* Each logo wrapped in a highlight card box */}
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={poonawalla}
                    alt="Poonawalla"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={smfg} alt="SMFG" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={southIndian}
                    alt="South Indian Bank"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={shriram}
                    alt="Shriram"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={TATA} alt="TATA" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={Birla}
                    alt="Birla"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={Axis} alt="Axis" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={Axisfinance}
                    alt="Axis Finance"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={Bajaj}
                    alt="Bajaj"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={chola}
                    alt="Chola"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={finnable}
                    alt="Finnable"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={HDFC} alt="HDFC" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={IDBI} alt="IDBI" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={IDFC} alt="IDFC" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={inCred}
                    alt="InCred"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={IndusInd}
                    alt="IndusInd"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={kotak}
                    alt="Kotak"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={LTFinance}
                    alt="L&T Finance"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={muthoot}
                    alt="Muthoot"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={piramal}
                    alt="Piramal"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={yesBank}
                    alt="Piramal"
                    className="h-12 object-contain"
                  />
                </div>

                {/* Repeated logos  */}
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={poonawalla}
                    alt="Poonawalla"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={smfg} alt="SMFG" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={southIndian}
                    alt="South Indian Bank"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={shriram}
                    alt="Shriram"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={TATA} alt="TATA" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={Birla}
                    alt="Birla"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={Axis} alt="Axis" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={Axisfinance}
                    alt="Axis Finance"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={Bajaj}
                    alt="Bajaj"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={chola}
                    alt="Chola"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={finnable}
                    alt="Finnable"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={HDFC} alt="HDFC" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={IDBI} alt="IDBI" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img src={IDFC} alt="IDFC" className="h-12 object-contain" />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={inCred}
                    alt="InCred"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={IndusInd}
                    alt="IndusInd"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={kotak}
                    alt="Kotak"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={LTFinance}
                    alt="L&T Finance"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={muthoot}
                    alt="Muthoot"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={piramal}
                    alt="Piramal"
                    className="h-12 object-contain"
                  />
                </div>
                <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4">
                  <img
                    src={yesBank}
                    alt="Piramal"
                    className="h-12 object-contain"
                  />
                </div>
              </div>
            </Marquee>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 min-h-[600px] bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Real experiences from satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-background border-0 shadow-card"
                >
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-secondary fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Achieve Your Financial Goals?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get started today with a consultation and personalized financial
              planning
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
    </>
  );
};

export default Home;
