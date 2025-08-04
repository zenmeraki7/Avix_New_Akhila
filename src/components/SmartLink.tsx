// components/SmartLink.tsx
import React, { ReactNode, MouseEvent, TouchEvent, FocusEvent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { preloadRoute } from '../utils/preloader';

// Enhanced Link component props
interface SmartLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: ReactNode;
  className?: string;
  preload?: boolean;
}

// Enhanced Link component with intelligent preloading
export const SmartLink: React.FC<SmartLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  preload = true,
  ...props 
}) => {
  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>): void => {
    if (preload) {
      preloadRoute(to);
    }
    // Call original onMouseEnter if provided
    props.onMouseEnter?.(event);
  };

  const handleTouchStart = (event: TouchEvent<HTMLAnchorElement>): void => {
    if (preload) {
      preloadRoute(to);
    }
    // Call original onTouchStart if provided
    props.onTouchStart?.(event);
  };

  const handleFocus = (event: FocusEvent<HTMLAnchorElement>): void => {
    if (preload) {
      preloadRoute(to);
    }
    // Call original onFocus if provided
    props.onFocus?.(event);
  };

  return (
    <Link
      to={to}
      className={className}
      {...props}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onFocus={handleFocus}
    >
      {children}
    </Link>
  );
};

// Navigation component props
interface NavigationProps {
  className?: string;
}

// Navigation component
export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <nav className={`bg-white shadow-lg sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <SmartLink to="/" className="flex items-center">
            <img 
              src="/assets/AvixLogo-BGvs1vh4.webp" 
              alt="AVIX Finance" 
              className="h-8 w-auto"
              loading="eager"
            />
            <span className="ml-2 text-xl font-bold text-blue-600">
              AVIX Finance
            </span>
          </SmartLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <SmartLink 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About Us
            </SmartLink>
            
            <SmartLink 
              to="/services" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </SmartLink>
            
            <SmartLink 
              to="/loans" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Loans
            </SmartLink>
            
            <SmartLink 
              to="/investment" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Investment
            </SmartLink>
            
            <SmartLink 
              to="/insurance" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Insurance
            </SmartLink>
            
            <SmartLink 
              to="/calculator" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Calculator
            </SmartLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <SmartLink
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </SmartLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// CTA Button size and variant types
type CTASize = 'sm' | 'md' | 'lg';
type CTAVariant = 'primary' | 'secondary' | 'outline' | 'link';

interface SmartCTAButtonProps extends Omit<SmartLinkProps, 'children'> {
  children: ReactNode;
  size?: CTASize;
  variant?: CTAVariant;
}

// Enhanced CTA Button for landing pages
export const SmartCTAButton: React.FC<SmartCTAButtonProps> = ({ 
  to, 
  children, 
  size = 'md',
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const sizes: Record<CTASize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variants: Record<CTAVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
    outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white',
    link: 'text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline'
  };

  const baseClasses = variant === 'link' 
    ? 'transition-colors duration-200'
    : 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300';

  const combinedClassName = variant === 'link'
    ? `${variants[variant]} ${className}`
    : `${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`;

  return (
    <SmartLink
      to={to}
      className={combinedClassName}
      {...props}
    >
      {children}
    </SmartLink>
  );
};

// Quick Link Card props
interface QuickLinkCardProps {
  to: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
}

// Reusable Quick Link Card Component
export const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ 
  to, 
  title, 
  description, 
  icon,
  className = ''
}) => {
  return (
    <SmartCTAButton
      to={to}
      variant="secondary"
      className={`p-6 text-left h-full flex flex-col group hover:shadow-xl border-0 bg-white rounded-xl ${className}`}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 flex-grow">
        {description}
      </p>
      <div className="mt-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
        Learn More →
      </div>
    </SmartCTAButton>
  );
};