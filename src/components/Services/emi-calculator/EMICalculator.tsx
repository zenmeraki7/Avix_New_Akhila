import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calculator, Download, Share2 } from 'lucide-react';
import styles from '../../../styles/services/emi-calculator/EMICalculator.module.css';
import '../../../styles/avix.css';
import { Link } from 'react-router-dom';

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
    <div className={styles.calculatorContainer}>
      <div className={styles.calculatorHeader}>
        <h1 className={styles.calculatorTitle}>EMI Calculator</h1>
        <p className={styles.calculatorDescription}>
          Calculate your Equated Monthly Installment (EMI) for loans with our easy-to-use calculator.
        </p>
      </div>

      <div className={styles.calculatorGrid}>
        {/* Calculator Form */}
        <Card className={`${styles.formCard} avix-gradient-card avix-shadow-card`}>
          <CardHeader className={styles.formHeader}>
            <CardTitle className={styles.formTitle}>
              <Calculator className={`${styles.formIcon} avix-accent`} />
              Loan Details
            </CardTitle>
            <CardDescription>
              Adjust the sliders to calculate your EMI
            </CardDescription>
          </CardHeader>
          <CardContent className={styles.formContent}>
            {/* Loan Amount */}
            <div className={styles.inputGroup}>
              <div className={styles.inputHeader}>
                <Label className={styles.inputLabel}>Loan Amount</Label>
                <span className={`${styles.inputValue} avix-accent`}>
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
              <div className={styles.inputRange}>
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className={styles.inputGroup}>
              <div className={styles.inputHeader}>
                <Label className={styles.inputLabel}>Interest Rate (per annum)</Label>
                <span className={`${styles.inputValue} avix-accent`}>
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
              <div className={styles.inputRange}>
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div className={styles.inputGroup}>
              <div className={styles.inputHeader}>
                <Label className={styles.inputLabel}>Loan Tenure</Label>
                <span className={`${styles.inputValue} avix-accent`}>
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
              <div className={styles.inputRange}>
                <span>6 months</span>
                <span>30 years</span>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <Button variant="secondary" size="sm" className={styles.actionButton}>
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" size="sm" className={styles.actionButton}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className={`${styles.resultsCard} avix-gradient-primary avix-shadow-hero`}>
          <CardHeader className={styles.resultsHeader}>
            <CardTitle className={styles.resultsTitle}>EMI Breakdown</CardTitle>
            <CardDescription className={styles.resultsDescription}>
              Your monthly payment details
            </CardDescription>
          </CardHeader>
          <CardContent className={styles.resultsContent}>
            <div className={styles.emiDisplay}>
              <div className={styles.emiAmount}>{formatCurrency(emi)}</div>
              <div className={styles.emiLabel}>Monthly EMI</div>
            </div>

            <div className={styles.summaryGrid}>
              <div className={styles.summaryItem}>
                <div className={styles.summaryAmount}>{formatCurrency(totalInterest)}</div>
                <div className={styles.summaryLabel}>Total Interest</div>
              </div>
              <div className={styles.summaryItem}>
                <div className={styles.summaryAmount}>{formatCurrency(totalAmount)}</div>
                <div className={styles.summaryLabel}>Total Amount</div>
              </div>
            </div>

            <div className={styles.breakdownList}>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownLabel}>Principal Amount:</span>
                <span className={styles.breakdownValue}>{formatCurrency(loanAmount[0])}</span>
              </div>
              <div className={styles.breakdownItem}>
                <span className={styles.breakdownLabel}>Interest Amount:</span>
                <span className={styles.breakdownValue}>{formatCurrency(totalInterest)}</span>
              </div>
              <div className={styles.breakdownTotal}>
                <span className={styles.breakdownTotalLabel}>Total Payable:</span>
                <span className={styles.breakdownTotalValue}>{formatCurrency(totalAmount)}</span>
              </div>
            </div>

            <Link to='/contact'>
            <Button variant="secondary" className={styles.applyButton}>
              Apply for This Loan
            </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EMICalculator;