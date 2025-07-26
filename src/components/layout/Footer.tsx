import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    'Personal Loans',
    'Business Loans',
    'Credit Cards',
    'Loan Against Property',
    'Health Insurance',
    'Life Insurance',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'EMI Calculator', href: '/calculator' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-bold">AVIX </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for all financial solutions. We provide comprehensive 
              financial services including loans, insurance, investments, and tax advisory.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 99468 41656</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>avixfinancialsolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>5th floor, Chowalloor Tower, West Fort, Civil Lanes Road, Thrissur - 680004</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 AVIX Financial Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;