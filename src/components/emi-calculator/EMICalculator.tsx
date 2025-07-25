import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calculator, Download, Share2 } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState([500000]);
  const [interestRate, setInterestRate] = useState([12]);
  const [tenure, setTenure] = useState([60]);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const calculateEMI = () => {
    const principal = loanAmount[0];
    const rate = interestRate[0] / 12 / 100;
    const months = tenure[0];

    if (rate === 0) {
      const calculatedEMI = principal / months;
      setEmi(calculatedEMI);
      setTotalInterest(0);
      setTotalAmount(principal);
    } else {
      const calculatedEMI = (principal * rate * Math.pow(1 + rate, months)) / 
                           (Math.pow(1 + rate, months) - 1);
      const total = calculatedEMI * months;
      const interest = total - principal;

      setEmi(calculatedEMI);
      setTotalInterest(interest);
      setTotalAmount(total);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">EMI Calculator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculate your Equated Monthly Installment (EMI) for loans with our easy-to-use calculator.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-accent" />
              Loan Details
            </CardTitle>
            <CardDescription>
              Adjust the sliders to calculate your EMI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Loan Amount */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Loan Amount</Label>
                <span className="text-lg font-semibold text-accent">
                  {formatCurrency(loanAmount[0])}
                </span>
              </div>
              <Slider
                value={loanAmount}
                onValueChange={setLoanAmount}
                max={10000000}
                min={100000}
                step={50000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Interest Rate (per annum)</Label>
                <span className="text-lg font-semibold text-accent">
                  {interestRate[0]}%
                </span>
              </div>
              <Slider
                value={interestRate}
                onValueChange={setInterestRate}
                max={30}
                min={1}
                step={0.1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Loan Tenure</Label>
                <span className="text-lg font-semibold text-accent">
                  {tenure[0]} months ({Math.round(tenure[0] / 12)} years)
                </span>
              </div>
              <Slider
                value={tenure}
                onValueChange={setTenure}
                max={360}
                min={6}
                step={6}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>6 months</span>
                <span>30 years</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="secondary" size="sm" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-hero">
          <CardHeader>
            <CardTitle>EMI Breakdown</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Your monthly payment details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-6 border-b border-primary-foreground/20">
              <div className="text-4xl font-bold mb-2">{formatCurrency(emi)}</div>
              <div className="text-primary-foreground/80">Monthly EMI</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                <div className="text-2xl font-semibold mb-1">{formatCurrency(totalInterest)}</div>
                <div className="text-sm text-primary-foreground/80">Total Interest</div>
              </div>
              <div className="text-center p-4 bg-primary-foreground/10 rounded-lg">
                <div className="text-2xl font-semibold mb-1">{formatCurrency(totalAmount)}</div>
                <div className="text-sm text-primary-foreground/80">Total Amount</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Principal Amount:</span>
                <span className="font-semibold">{formatCurrency(loanAmount[0])}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-foreground/80">Interest Amount:</span>
                <span className="font-semibold">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between border-t border-primary-foreground/20 pt-3">
                <span className="text-primary-foreground/80">Total Payable:</span>
                <span className="font-bold text-lg">{formatCurrency(totalAmount)}</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full">
              Apply for This Loan
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EMICalculator;