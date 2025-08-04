// vite.config.ts
import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => ({
  server: {
    host: '::',
    port: 8080,
    hmr: {
      overlay: false, // Disable error overlay for better performance in dev
    },
  },
  
  plugins: [
    // Use SWC for fast development and builds
    react({
      // Remove the emotion import source since you're not using it
      // jsxImportSource: '@emotion/react', // ❌ This was causing the error
    }),
    
    // Only run the visualizer in "analyze" mode: `npm run build -- --mode analyze`
    mode === 'analyze' && visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap', // Better visualization
    }),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  build: {
    // Disable sourcemaps in production for smaller files
    sourcemap: mode === 'development',
    
    // Warn if chunks are larger than 400kb
    chunkSizeWarningLimit: 400,
    
    // Use terser for minification in production for the smallest bundle size
    minify: mode === 'production' ? 'terser' : 'esbuild',
    
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    } : undefined,
    
    // Target modern browsers for better performance and smaller code
    target: ['es2020', 'chrome80', 'firefox78', 'safari14'],
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    cssMinify: true,
    
    rollupOptions: {
      output: {
        // Organize assets into subdirectories
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop() ?? '';
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name ?? '')) {
            return `assets/images/[name]-[hash].${extType}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name ?? '')) {
            return `assets/fonts/[name]-[hash].${extType}`;
          }
          if (/\.css$/i.test(assetInfo.name ?? '')) {
            return `assets/css/[name]-[hash].${extType}`;
          }
          return `assets/[name]-[hash].${extType}`;
        },
        
        // Enhanced granular chunking for optimal caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // React core (highest priority for caching)
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'react-vendor';
            }
            
            // Router (separate from React for better caching)
            if (id.includes('react-router')) {
              return 'router';
            }
            
            // Data fetching
            if (id.includes('@tanstack/react-query')) {
              return 'query-vendor';
            }
            
            // Form handling
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'form-vendor';
            }
            
            // Icons (can be large)
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            
            // Styling utilities
            if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) {
              return 'class-utils';
            }
            
            // Radix UI - Split by functionality for better caching
            if (id.includes('@radix-ui')) {
              // Overlay components (dialogs, popovers, tooltips)
              if (id.includes('dialog') || id.includes('popover') || id.includes('tooltip') || 
                  id.includes('hover-card') || id.includes('alert-dialog')) {
                return 'radix-overlays';
              }
              
              // Menu components (dropdowns, selects)
              if (id.includes('dropdown') || id.includes('select') || id.includes('menubar')) {
                return 'radix-menus';
              }
              
              // Form components (slider, switch, checkbox)
              if (id.includes('slider') || id.includes('switch') || id.includes('checkbox') || 
                  id.includes('radio-group') || id.includes('toggle')) {
                return 'radix-forms';
              }
              
              // Toast notifications
              if (id.includes('toast')) {
                return 'radix-toast';
              }
              
              // Remaining Radix components
              return 'radix-other';
            }
            
            // Animation libraries
            if (id.includes('react-countup') || id.includes('react-fast-marquee')) {
              return 'animations';
            }
            
            // Toast notifications (sonner)
            if (id.includes('sonner')) {
              return 'notifications';
            }
            
            // Group other large vendors
            return 'vendor-misc';
          }
          
          // Keep application code in main bundle (should be small with lazy loading)
          return undefined;
        },
        
        // Prevent chunks that are too small (merge them)
        experimentalMinChunkSize: 1000,
      },
    },
    
    // Enable reporting
    reportCompressedSize: true,
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    exclude: [
      '@vite/client', 
      '@vite/env',
    ],
    
    // Force re-optimization if needed
    force: false,
  },
  
  // CSS optimization
  css: {
    devSourcemap: mode === 'development',
  },
  
  // Performance monitoring
  define: {
    __DEV__: mode === 'development',
    __PROD__: mode === 'production',
  },
}));