// utils/preloader.ts
import { ComponentType, LazyExoticComponent } from 'react';

// Define route loader type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RouteLoader = () => Promise<{ default: ComponentType<any> }>;

// Route loaders map - single source of truth
const routeLoaders: Record<string, RouteLoader> = {
  '/': () => import('../pages/Home'),
  '/about': () => import('../pages/About'),
  '/services': () => import('../pages/Services'),
  '/calculator': () => import('../pages/Calculator'),
  '/contact': () => import('../pages/Contact'),
  '/loans': () => import('../pages/Loans'),
  '/investment': () => import('../pages/Investment'),
  '/insurance': () => import('../pages/Insurance'),
  '/msmeloans': () => import('../pages/MSMELoans'),
};

// Cache to prevent duplicate preloads
const preloadCache = new Set<string>();

// Just-in-time preloader - fires on hover/touch
export const preloadRoute = (path: string): void => {
  // Normalize path (remove trailing slashes, handle redirects)
  const normalizedPath = path === '/' ? '/' : path.toLowerCase().replace(/\/$/, '');
  
  // Handle redirects to canonical URLs
  const canonicalPath = getCanonicalPath(normalizedPath);
  
  if (!preloadCache.has(canonicalPath) && routeLoaders[canonicalPath]) {
    routeLoaders[canonicalPath]()
      .then(() => {
        if (process.env.NODE_ENV === 'development') {
          console.log(`✅ Preloaded: ${canonicalPath}`);
        }
      })
      .catch((error: Error) => {
        console.warn(`❌ Failed to preload ${canonicalPath}:`, error);
      });
    
    preloadCache.add(canonicalPath);
  }
};

// Map legacy/duplicate routes to canonical ones
const getCanonicalPath = (path: string): string => {
  const redirects: Record<string, string> = {
    '/businessloan': '/msmeloans',
    '/msmeloans': '/msmeloans', // already canonical
    '/insurance': '/insurance', // already canonical
  };
  
  return redirects[path] || path;
};

// Network connection type
interface NetworkInformation extends EventTarget {
  effectiveType: '2g' | '3g' | '4g' | 'slow-2g';
  downlink: number;
  rtt: number;
}

// Extend Navigator interface
declare global {
  interface Navigator {
    connection?: NetworkInformation;
  }
}

// Preload critical routes after initial page load
export const preloadCriticalRoutes = (): void => {
  // Check connection speed to avoid preloading on slow networks
  if (navigator.connection) {
    const connection = navigator.connection;
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      return; // Skip preloading on slow connections
    }
  }

  // Delay initial preloading to not interfere with page load
  setTimeout(() => {
    // Preload most likely visited pages based on user behavior analytics
    const criticalRoutes = ['/about', '/services', '/calculator'];
    criticalRoutes.forEach((route, index) => {
      // Stagger the requests to avoid overwhelming the network
      setTimeout(() => preloadRoute(route), index * 300 + Math.random() * 200);
    });
  }, 2000);
};

// Get all available routes (useful for sitemap generation)
export const getAvailableRoutes = (): string[] => {
  return Object.keys(routeLoaders);
};

// Check if a route exists
export const routeExists = (path: string): boolean => {
  const canonicalPath = getCanonicalPath(path.toLowerCase());
  return canonicalPath in routeLoaders;
};

// Preload specific route group (for progressive enhancement)
export const preloadRouteGroup = (group: 'services' | 'financial' | 'tools'): void => {
  const routeGroups = {
    services: ['/services', '/loans', '/investment', '/insurance'],
    financial: ['/loans', '/msmeloans', '/investment'],
    tools: ['/calculator']
  };

  const routes = routeGroups[group] || [];
  routes.forEach((route, index) => {
    setTimeout(() => preloadRoute(route), index * 100);
  });
};