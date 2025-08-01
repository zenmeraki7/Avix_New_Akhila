import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EMICalculator from '@/components/Services/emi-calculator/EMICalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calculator as CalcIcon, PiggyBank, Home, Briefcase, Phone } from 'lucide-react';

const Calculator = () => {
  const calculatorTypes = [
    {
      title: "Personal Loan EMI",
      description: "Calculate EMI for personal loans",
      icon: PiggyBank,
      rate: "10.5% - 24%"
    },
    {
      title: "Home Loan EMI", 
      description: "Calculate EMI for home loans",
      icon: Home,
      rate: "8.5% - 12%"
    },
    {
      title: "Business Loan EMI",
      description: "Calculate EMI for business loans", 
      icon: Briefcase,
      rate: "12% - 18%"
    }
  ];

  const tips = [
    "Lower loan amount reduces monthly EMI burden",
    "Longer tenure reduces EMI but increases total interest",
    "Higher down payment reduces loan amount and EMI",
    "Compare rates from multiple lenders before deciding",
    "Consider prepayment options to reduce interest burden",
    "Factor in processing fees and other charges"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <CalcIcon className="w-16 h-16 text-secondary mr-4" />
            <h1 className="text-5xl font-bold">EMI Calculator</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Plan your finances better with our easy-to-use EMI calculator. 
            Get instant calculations for all types of loans.
          </p>
        </div>
      </section>

      {/* Calculator Types */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Loan Type</h2>
            <p className="text-muted-foreground">Different loan types have different interest rate ranges</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {calculatorTypes.map((type, index) => (
              <Card key={index} className="bg-background border-0 shadow-card hover:shadow-hero transition-all duration-300">
                <CardHeader className="text-center">
                  <type.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-lg font-semibold text-accent mb-4">
                    Interest Rate: {type.rate}
                  </div>
                  <Button variant="outline" className="w-full">
                    Use Calculator
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EMICalculator />
        </div>
      </section>

      {/* Tips & Information */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">EMI Calculation Tips</h3>
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-hero">
              <CardHeader>
                <CardTitle className="text-2xl">Need Help With Your Calculation?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Our financial experts can help you understand your EMI calculations and find the best loan options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3 text-sm">
                  <p>📞 Call us at: +91 9876543210</p>
                  <p>📧 Email: avixfinancialsolutions@gmail.com</p>
                  <p>🕒 Mon-Sat: 9 AM - 7 PM</p>
                </div>
                
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Expert Consultation
                    </Link>
                  </Button>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/services">
                      View All Loan Options
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How EMI is Calculated */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Understanding EMI Calculation</h2>
            <p className="text-xl text-muted-foreground">Learn how your monthly installment is calculated</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">EMI Formula</h3>
                  <div className="bg-muted p-6 rounded-lg">
                    <code className="text-lg text-foreground">
                      EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
                    </code>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">P</div>
                    <div className="font-semibold text-foreground mb-2">Principal Amount</div>
                    <div className="text-sm text-muted-foreground">The loan amount you borrow</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">R</div>
                    <div className="font-semibold text-foreground mb-2">Monthly Interest Rate</div>
                    <div className="text-sm text-muted-foreground">Annual rate divided by 12 months</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">N</div>
                    <div className="font-semibold text-foreground mb-2">Number of Months</div>
                    <div className="text-sm text-muted-foreground">Total loan tenure in months</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">Example Calculation:</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Loan Amount: ₹5,00,000 | Interest Rate: 12% per annum | Tenure: 5 years (60 months)</p>
                    <p>Monthly Interest Rate (R) = 12% ÷ 12 = 1% = 0.01</p>
                    <p>EMI = [5,00,000 x 0.01 x (1.01)^60] / [(1.01)^60 - 1] = ₹11,122</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;