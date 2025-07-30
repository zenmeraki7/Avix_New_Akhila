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
  Factory,
  Banknote,
  Target,
  Zap,
  Clock,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import heroImage from "@/assets/hero-financial.jpg";
import servicesImage from "@/assets/services-overview.jpg";
import bg from "@/assets/bg.png";
import CountUp from "react-countup";
import { memo, useMemo } from "react";

// Memoized Modern Service Card Component
const ModernServiceCard = memo(({ service, index }) => {
  const isPopular = service.popular;

  return (
    <div
      className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border overflow-hidden ${
        isPopular
          ? "border-accent/30 ring-2 ring-accent/20"
          : "border-gray-100 hover:border-accent/30"
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: "slideInUp 0.8s ease-out forwards",
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-2 left-4 bg-gradient-to-r from-accent to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center z-10 ">
          <Zap className="w-3 h-3 mr-1 " />
          Most Popular
        </div>
      )}

      {/* Background Gradient */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isPopular
            ? "bg-gradient-to-br from-accent/5 to-orange-50"
            : "bg-gradient-to-br from-primary/5 to-blue-50"
        }`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div
            className={`relative p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
              isPopular
                ? "bg-gradient-to-br from-accent/10 to-orange-100 group-hover:from-accent/20 group-hover:to-orange-200"
                : "bg-gradient-to-br from-primary/10 to-blue-100 group-hover:from-primary/20 group-hover:to-blue-200"
            }`}
          >
            <service.icon
              className={`w-8 h-8 ${
                isPopular ? "text-accent" : "text-primary"
              }`}
            />
            {service.fastTrack && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              isPopular
                ? "text-accent bg-accent/10"
                : "text-primary bg-primary/10"
            }`}
          >
            {service.badge}
          </div>
        </div>

        <h3
          className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isPopular
              ? "text-gray-900 group-hover:text-accent"
              : "text-gray-900 group-hover:text-primary"
          }`}
        >
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {service.description}
        </p>

        <div className="space-y-3 mb-8">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-sm text-gray-500 italic">
              +{service.features.length - 3} more benefits
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            Starting from:{" "}
            <span className="font-semibold text-gray-900">
              {service.startingRate}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={`group/btn font-semibold transition-all duration-200 ${
              isPopular
                ? "text-accent hover:text-accent hover:bg-accent/10"
                : "text-primary hover:text-primary hover:bg-primary/10"
            }`}
          >
            <Link to={service.link}>
              Explore
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
});

const Home = () => {
  // Enhanced services data with modern properties
  const services = useMemo(
    () => [
      {
        title: "Quick Loans",
        description:
          "Apply online for fast, hassle‑free personal, business, car, and loan‑takeover financing. Enjoy competitive interest rates, flexible repayment tenures, and instant approval with minimal documentation to meet all your funding needs.",
        features: [
          "Instant personal loans with minimal paperwork",
          "Business loans for working capital and growth",
          "Car loans up to 100% financing at attractive rates",
          "Seamless loan takeover for lower EMIs and better terms",
          "24-hour approval process",
          "Flexible EMI options",
        ],
        icon: CreditCard,
        link: "/loans",
        badge: "From 8.5%",
        startingRate: "₹10K",
        popular: true,
        fastTrack: true,
      },
      {
        title: "Investment Advisory",
        description:
          "Discover and invest in top mutual funds, systematic investment plans (SIPs), and personalized portfolios with our expert investment advisory services. Maximize returns, balance risk, and unlock tax benefits today.",
        features: [
          "Access 2,000+ direct mutual fund schemes",
          "Tailored SIP plans for disciplined wealth creation",
          "Professional portfolio management & periodic rebalancing",
          "Tax‑saving ELSS funds & retirement planning solutions",
          "Risk assessment and goal planning",
          "Regular performance tracking",
        ],
        icon: TrendingUp,
        link: "/Investment",
        badge: "Upto 15% CAGR",
        startingRate: "₹500/month",
      },
      {
        title: "Insurance Solutions",
        description:
          "Compare and buy the best insurance plans in India—health, life, motor, home and travel— with comprehensive coverage, cashless claims, and expert advisory to protect you and your loved ones.",
        features: [
          "Comprehensive health insurance with cashless hospitalization network",
          "Life insurance policies offering tax benefits under Section 80C",
          "Motor insurance for cars and bikes with zero‑depreciation cover",
          "Travel insurance for domestic & international trips with COVID‑19 protection",
          "Home and property insurance coverage",
          "24/7 claims assistance support",
        ],
        icon: Shield,
        link: "/Insurance",
        badge: "Upto ₹1 Cr",
        startingRate: "₹999/year",
        popular: true,
      },
      {
        title: "MSME Business Loans",
        description:
          "Compare and apply online for the best MSME business loans in India. Get competitive interest rates, flexible repayment tenures, and fast approvals with minimal documentation to fuel your business growth.",
        features: [
          "Lowest interest rates on MSME loans",
          "Flexible repayment schedules up to 7 years",
          "Quick online approval with minimal paperwork",
          "Customized working capital and term loan options",
          "Dedicated support for small and medium enterprises",
          "Government scheme benefits (CGTMSE)",
        ],
        icon: Factory,
        link: "/MSMELoans",
        badge: "From 8.0%",
        startingRate: "₹5 Lakh",
        fastTrack: true,
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { number: 10000, suffix: "+", label: "Happy Customers" },
      { number: 100, suffix: "Cr+", prefix: "₹", label: "Loans Disbursed" },
      { number: 8, suffix: "+", label: "Years Experience" },
      { number: 100, suffix: "%", label: "Customer Satisfaction" },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Nishad Mohammed",
        role: "Business Owner",
        content:
          "AVIX helped me get a business loan quickly. Their process is transparent and customer service is excellent.",
        rating: 5,
      },
      {
        name: "Aiswarya S R",
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
    ],
    []
  );

  // Service section with enhanced design
  const ServicesSection = memo(() => (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            Comprehensive Financial Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Financial Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial solutions designed to help you achieve your
            goals with expert guidance and competitive rates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ModernServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  ));

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundPosition: "center 20%", // shifts image lower
            }}
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

        {/* Enhanced Services Section */}
        <ServicesSection />

        {/* Why Choose Us Section */}
        <section className="py-20 min-h-[600px] bg-gradient-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="md:text-left text-center">
                <h3 className="text-4xl font-bold text-primary-foreground/90 mb-8">
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
                      <span className="text-lg text-primary-foreground/90">
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

        {/* Trusted Partners Section */}
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
                {/* Partner logos with improved styling */}
                {[
                  { src: poonawalla, alt: "Poonawalla" },
                  { src: smfg, alt: "SMFG" },
                  { src: southIndian, alt: "South Indian Bank" },
                  { src: shriram, alt: "Shriram" },
                  { src: TATA, alt: "TATA" },
                  { src: Birla, alt: "Birla" },
                  { src: Axis, alt: "Axis" },
                  { src: Axisfinance, alt: "Axis Finance" },
                  { src: Bajaj, alt: "Bajaj" },
                  { src: chola, alt: "Chola" },
                  { src: finnable, alt: "Finnable" },
                  { src: HDFC, alt: "HDFC" },
                  { src: IDBI, alt: "IDBI" },
                  { src: IDFC, alt: "IDFC" },
                  { src: inCred, alt: "InCred" },
                  { src: IndusInd, alt: "IndusInd" },
                  { src: kotak, alt: "Kotak" },
                  { src: LTFinance, alt: "L&T Finance" },
                  { src: muthoot, alt: "Muthoot" },
                  { src: piramal, alt: "Piramal" },
                  { src: yesBank, alt: "Yes Bank" },
                ]
                  .concat([
                    // Duplicate for seamless scroll
                    { src: poonawalla, alt: "Poonawalla" },
                    { src: smfg, alt: "SMFG" },
                    { src: southIndian, alt: "South Indian Bank" },
                    { src: shriram, alt: "Shriram" },
                    { src: TATA, alt: "TATA" },
                    { src: Birla, alt: "Birla" },
                    { src: Axis, alt: "Axis" },
                    { src: Axisfinance, alt: "Axis Finance" },
                    { src: Bajaj, alt: "Bajaj" },
                    { src: chola, alt: "Chola" },
                    { src: finnable, alt: "Finnable" },
                    { src: HDFC, alt: "HDFC" },
                    { src: IDBI, alt: "IDBI" },
                    { src: IDFC, alt: "IDFC" },
                    { src: inCred, alt: "InCred" },
                    { src: IndusInd, alt: "IndusInd" },
                    { src: kotak, alt: "Kotak" },
                    { src: LTFinance, alt: "L&T Finance" },
                    { src: muthoot, alt: "Muthoot" },
                    { src: piramal, alt: "Piramal" },
                    { src: yesBank, alt: "Yes Bank" },
                  ])
                  .map((partner, index) => (
                    <div
                      key={index}
                      className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4 mx-3"
                    >
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="h-12 object-contain"
                      />
                    </div>
                  ))}
              </div>
            </Marquee>
          </div>
        </section>

        {/* insurence partners */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Insurence Partners
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
                {/* Partner logos with improved styling */}
                {[
                  { src: poonawalla, alt: "Poonawalla" },
                  { src: smfg, alt: "SMFG" },
                  { src: southIndian, alt: "South Indian Bank" },
                  { src: shriram, alt: "Shriram" },
                  { src: TATA, alt: "TATA" },
                  { src: Birla, alt: "Birla" },
                  { src: Axis, alt: "Axis" },
                  { src: Axisfinance, alt: "Axis Finance" },
                  { src: Bajaj, alt: "Bajaj" },
                  { src: chola, alt: "Chola" },
                  { src: finnable, alt: "Finnable" },
                  { src: HDFC, alt: "HDFC" },
                  { src: IDBI, alt: "IDBI" },
                  { src: IDFC, alt: "IDFC" },
                  { src: inCred, alt: "InCred" },
                  { src: IndusInd, alt: "IndusInd" },
                  { src: kotak, alt: "Kotak" },
                  { src: LTFinance, alt: "L&T Finance" },
                  { src: muthoot, alt: "Muthoot" },
                  { src: piramal, alt: "Piramal" },
                  { src: yesBank, alt: "Yes Bank" },
                ]
                  .concat([
                    // Duplicate for seamless scroll
                    { src: poonawalla, alt: "Poonawalla" },
                    { src: smfg, alt: "SMFG" },
                    { src: southIndian, alt: "South Indian Bank" },
                    { src: shriram, alt: "Shriram" },
                    { src: TATA, alt: "TATA" },
                    { src: Birla, alt: "Birla" },
                    { src: Axis, alt: "Axis" },
                    { src: Axisfinance, alt: "Axis Finance" },
                    { src: Bajaj, alt: "Bajaj" },
                    { src: chola, alt: "Chola" },
                    { src: finnable, alt: "Finnable" },
                    { src: HDFC, alt: "HDFC" },
                    { src: IDBI, alt: "IDBI" },
                    { src: IDFC, alt: "IDFC" },
                    { src: inCred, alt: "InCred" },
                    { src: IndusInd, alt: "IndusInd" },
                    { src: kotak, alt: "Kotak" },
                    { src: LTFinance, alt: "L&T Finance" },
                    { src: muthoot, alt: "Muthoot" },
                    { src: piramal, alt: "Piramal" },
                    { src: yesBank, alt: "Yes Bank" },
                  ])
                  .map((partner, index) => (
                    <div
                      key={index}
                      className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out p-4 mx-3"
                    >
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="h-12 object-contain"
                      />
                    </div>
                  ))}
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
