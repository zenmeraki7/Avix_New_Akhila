import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator, Phone, Zap, ArrowRight, CreditCard, TrendingUp, Home, ChevronRight } from "lucide-react";
import avixlogo from "../../public/assets/AvixLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ];

  // Breadcrumb mapping for better performance
  const breadcrumbMap = useMemo(() => ({
    '/': { name: 'Home', icon: Home },
    '/about': { name: 'About Us', parent: '/' },
    '/services': { name: 'Services', parent: '/' },
    '/loans': { name: 'Loans', parent: '/services' },
    '/investment': { name: 'Investment Advisory', parent: '/services' },
    '/insurence': { name: 'Insurance Solutions', parent: '/services' },
    '/MSMELoans': { name: 'MSME Business Loans', parent: '/services' },
    '/calculator': { name: 'EMI Calculator', parent: '/services' },
    '/contact': { name: 'Contact Us', parent: '/' },
  }), []);

  // Generate breadcrumbs efficiently
  const breadcrumbs = useMemo(() => {
    const path = location.pathname;
    if (path === '/') return [];
    
    const crumbs = [];
    let currentPath = path;
    
    while (currentPath && currentPath !== '/') {
      const breadcrumb = breadcrumbMap[currentPath];
      if (breadcrumb) {
        crumbs.unshift({ 
          name: breadcrumb.name, 
          href: currentPath,
          icon: breadcrumb.icon 
        });
        currentPath = breadcrumb.parent;
      } else {
        break;
      }
    }
    
    // Always add Home as first crumb (except on home page)
    if (crumbs.length > 0) {
      crumbs.unshift({ 
        name: 'Home', 
        href: '/',
        icon: Home 
      });
    }
    
    return crumbs;
  }, [location.pathname, breadcrumbMap]);

  const isActive = (href) => location.pathname === href;

  // AVIX gradient styles
  const avixStyles = `
    .avix-gradient-announcement {
      background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
    }
    
    .avix-gradient-primary {
      background: linear-gradient(135deg, #1C004D 0%, #3A0087 50%, #8A1C9D 100%);
    }
    
    .avix-accent {
      color: #8A1C9D;
    }
    
    .avix-pulse {
      animation: avix-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    
    @keyframes avix-pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .8;
      }
    }
    
    .avix-slide-in {
      animation: avix-slide-in 0.5s ease-out;
    }
    
    @keyframes avix-scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-scroll {
      animation: avix-scroll 30s linear infinite;
    }
    
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{avixStyles}</style>
      
      {/* Scrolling Announcement Bar */}
      {showAnnouncement && (
        <div className="avix-gradient-announcement text-white py-3 px-4 relative overflow-hidden avix-slide-in">
          <div className="relative">
            {/* Scrolling Content Container */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-scroll">
                <span className="inline-flex items-center space-x-8 text-sm md:text-base font-medium">
                  <span className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-300 avix-pulse" />
                    <span>🎉 Limited Time Offer: Personal Loans starting from</span>
                    <span className="font-bold text-yellow-300">9.99%*</span>
                    <span>| Quick Approval in 24 Hours</span>
                  </span>
                  
                  <span className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-white/90" />
                    <span>💰 Business Loans from</span>
                    <span className="font-bold text-yellow-300">9.99%*</span>
                    <span>| Instant Digital Processing</span>
                  </span>
                  
                  <span className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-white/90" />
                    <span>🏠 Home Loans with Zero Processing Fee</span>
                    <span>| Up to ₹5 Crore</span>
                  </span>
                  
                  <span className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-white/90" />
                    <span>📱 Free EMI Calculator</span>
                    <span>| Plan Your Finances</span>
                  </span>
                </span>
                
                {/* Duplicate content for seamless loop */}
                <span className="inline-flex items-center space-x-8 text-sm md:text-base font-medium ml-8">
                  <span className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-300 avix-pulse" />
                    <span>🎉 Limited Time Offer: Personal Loans starting from</span>
                    <span className="font-bold text-yellow-300">9.99%*</span>
                    <span>| Quick Approval in 24 Hours</span>
                  </span>
                  
                  <span className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-white/90" />
                    <span>💰 Business Loans from</span>
                    <span className="font-bold text-yellow-300">9.99%*</span>
                    <span>| Commplete Digital Processing</span>
                  </span>
                  
                  <span className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-white/90" />
                    <span>🏠 Home Loans with Low Processing Fee</span>
                    <span>| Up to ₹5 Crore</span>
                  </span>
                  
                  <span className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-white/90" />
                    <span>📱 Free EMI Calculator</span>
                    <span>| Plan Your Finances</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-1/2 -translate-y-1/2 right-2 text-white/70 hover:text-white hover:bg-white/10 p-1 z-10"
            onClick={() => setShowAnnouncement(false)}
          >
            <X className="w-4 h-4" />
          </Button>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full"></div>
            <div className="absolute -left-8 -bottom-4 w-32 h-32 bg-white/3 rounded-full"></div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 z-10 relative">
              <div className="relative">
                {/* Background Design with Logo */}
                <div className="relative w-12 h-12 avix-gradient-primary rounded-xl flex items-center justify-center shadow-lg p-1">
                  {/* Original Logo */}
                  <img 
                    src={avixlogo} 
                    alt="AVIX Financial Services Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground leading-tight">
                  AVIX
                </span>
                <span className="text-xs text-muted-foreground -mt-1 hidden sm:block">
                  Financial Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-[#8A1C9D] ${
                    isActive(item.href)
                      ? "text-[#8A1C9D] border-b-2 border-[#8A1C9D] pb-1"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Enhanced Contact Button with AVIX Gradient */}
              <Button 
                className="avix-gradient-primary text-white hover:opacity-90 transition-opacity duration-200" 
                size="sm" 
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Contact Us</span>
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
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
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
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-[#8A1C9D] ${
                      isActive(item.href)
                        ? "text-[#8A1C9D] bg-muted"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Button */}
                <div className="px-3 pt-2">
                  <Button 
                    className="avix-gradient-primary text-white w-full hover:opacity-90" 
                    size="sm" 
                    asChild
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>Get Quote</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;