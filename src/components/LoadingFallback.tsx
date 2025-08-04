// src/components/LoadingFallback.tsx
import { memo } from 'react';

// ✅ Memoized loading component for better performance
const LoadingFallback = memo(() => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="text-center space-y-6 p-8">
        {/* Main Loading Animation */}
        <div className="relative mx-auto w-16 h-16">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-slate-200 rounded-full"></div>
          {/* Inner spinning ring */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          {/* Pulsing center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-800">
            Loading...
          </h2>
          <p className="text-sm text-slate-600 max-w-xs mx-auto">
            Please wait while we prepare your content
          </p>
        </div>

        {/* Progress Dots Animation */}
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
});

LoadingFallback.displayName = 'LoadingFallback';

export default LoadingFallback;