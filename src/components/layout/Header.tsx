import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Calculator, Phone } from 'lucide-react';
import avixlogo from '../../assets/AvixLogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */} 
          <Link to="/" className="flex items-center space-x-2">
  <img src={avixlogo} alt="AVIX Logo" className="w-10 h-10" />
  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
    AVIX
  </span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xxl font-medium transition-colors duration-200 hover:text-accent ${
                  isActive(item.href)
                    ? 'text-accent border-b-2 border-accent pb-1'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="accent" size="sm" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                <span className='text-xxl font-medium '>Contact us</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-accent ${
                    isActive(item.href) ? 'text-accent bg-muted' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button variant="accent" size="sm" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4" />
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;