/* eslint-disable @typescript-eslint/no-explicit-any */
// src/utils/performance.ts

// ✅ Fixed route prefetching utility with proper typing
export const prefetchRoute = (routePath: string): void => {
  if (process.env.NODE_ENV !== 'production') return;

  const prefetch = (): void => {
    import(routePath).catch(() => {
      // Silently fail if prefetch fails
    });
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(prefetch);
  } else {
    setTimeout(prefetch, 2000);
  }
};

// ✅ Critical routes to prefetch
export const CRITICAL_ROUTES: string[] = [
  './pages/About',
  './pages/Services',
  './pages/Contact',
  './pages/Loans'
];

// ✅ Fixed performance monitoring utility
export const logPerformanceMetrics = (): void => {
  if (process.env.NODE_ENV !== 'development') return;

  setTimeout(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (!navigation) return;

    const metrics = {
      'DNS Lookup': Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
      'TCP Connection': Math.round(navigation.connectEnd - navigation.connectStart),
      'Server Response': Math.round(navigation.responseStart - navigation.requestStart),
      'DOM Content Loaded': Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      'Load Complete': Math.round(navigation.loadEventEnd - navigation.fetchStart),
      'First Byte (TTFB)': Math.round(navigation.responseStart - navigation.fetchStart)
    };

    console.table(metrics);
  }, 1000);
};

// ✅ Fixed image observer utility
export const createImageObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void
): IntersectionObserver | null => {
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
  }
  return null;
};

// ✅ Fixed debounce utility with proper TypeScript types
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// ✅ Fixed throttle utility
 
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};