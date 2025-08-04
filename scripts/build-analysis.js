// scripts/build-analysis.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getGzipSize(filePath) {
  // Estimate gzip size (actual gzip is about 70% of this estimation)
  const size = fs.statSync(filePath).size;
  return Math.round(size * 0.3); // Rough gzip estimation
}

function analyzeBuild() {
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('❌ No dist folder found. Run "npm run build" first.');
    process.exit(1);
  }

  console.log('\n🚀 AVIX Finance - Build Analysis Report');
  console.log('=' .repeat(60));

  const analysis = {
    js: [],
    css: [],
    images: [],
    fonts: [],
    other: []
  };

  let totalSize = 0;

  function scanAssets(dir, category = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanAssets(filePath, file);
      } else {
        const size = stat.size;
        const gzipSize = getGzipSize(filePath);
        totalSize += size;
        
        const fileInfo = {
          name: file,
          path: path.relative(distPath, filePath),
          size: size,
          gzipSize: gzipSize,
          category: category
        };

        if (file.endsWith('.js')) {
          analysis.js.push(fileInfo);
        } else if (file.endsWith('.css')) {
          analysis.css.push(fileInfo);
        } else if (/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i.test(file)) {
          analysis.images.push(fileInfo);
        } else if (/\.(woff|woff2|ttf|eot)$/i.test(file)) {
          analysis.fonts.push(fileInfo);
        } else {
          analysis.other.push(fileInfo);
        }
      }
    });
  }

  scanAssets(distPath);

  // Sort by size (largest first)
  Object.keys(analysis).forEach(key => {
    analysis[key].sort((a, b) => b.size - a.size);
  });

  // Display JavaScript Analysis
  console.log('\n📦 JavaScript Bundles:');
  console.log('-' .repeat(60));
  
  let totalJSSize = 0;
  let totalJSGzip = 0;
  
  analysis.js.forEach(file => {
    totalJSSize += file.size;
    totalJSGzip += file.gzipSize;
    
    const sizeKB = (file.size / 1024).toFixed(1);
    const gzipKB = (file.gzipSize / 1024).toFixed(1);
    
    // Color coding based on size
    let status = '🟢';
    if (file.size > 200000) status = '🔴'; // > 200KB
    else if (file.size > 100000) status = '🟡'; // > 100KB
    
    // Identify chunk purpose
    let purpose = '';
    if (file.name.includes('react-vendor')) purpose = '(React Core)';
    else if (file.name.includes('router')) purpose = '(React Router)';
    else if (file.name.includes('query-vendor')) purpose = '(TanStack Query)';
    else if (file.name.includes('radix')) purpose = '(Radix UI)';
    else if (file.name.includes('icons')) purpose = '(Lucide Icons)';
    else if (file.name.includes('vendor')) purpose = '(Third Party)';
    else if (file.name.includes('index')) purpose = '(Main App)';
    
    console.log(`  ${status} ${file.name} ${purpose}`);
    console.log(`     📦 ${sizeKB} KB | 🗜️ ${gzipKB} KB (gzip)`);
  });
  
  console.log(`\n📊 Total JS: ${formatBytes(totalJSSize)} | ${formatBytes(totalJSGzip)} (gzip)`);

  // Display CSS Analysis
  if (analysis.css.length > 0) {
    console.log('\n🎨 CSS Files:');
    console.log('-' .repeat(60));
    
    let totalCSSSize = 0;
    let totalCSSGzip = 0;
    
    analysis.css.forEach(file => {
      totalCSSSize += file.size;
      totalCSSGzip += file.gzipSize;
      
      const sizeKB = (file.size / 1024).toFixed(1);
      const gzipKB = (file.gzipSize / 1024).toFixed(1);
      
      console.log(`  📄 ${file.name}`);
      console.log(`     📦 ${sizeKB} KB | 🗜️ ${gzipKB} KB (gzip)`);
    });
    
    console.log(`\n📊 Total CSS: ${formatBytes(totalCSSSize)} | ${formatBytes(totalCSSGzip)} (gzip)`);
  }

  // Display Image Analysis
  if (analysis.images.length > 0) {
    console.log('\n🖼️ Images:');
    console.log('-' .repeat(60));
    
    let totalImageSize = 0;
    const largeImages = [];
    
    analysis.images.forEach(file => {
      totalImageSize += file.size;
      if (file.size > 50000) largeImages.push(file); // > 50KB
    });
    
    console.log(`📊 Total Images: ${formatBytes(totalImageSize)} (${analysis.images.length} files)`);
    
    if (largeImages.length > 0) {
      console.log('\n⚠️ Large Images (>50KB):');
      largeImages.forEach(file => {
        const sizeKB = (file.size / 1024).toFixed(1);
        console.log(`  🖼️ ${file.name} - ${sizeKB} KB`);
      });
    }
  }

  // Performance Recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('-' .repeat(60));
  
  // Check bundle sizes
  const mainBundle = analysis.js.find(f => f.name.includes('index'));
  const reactVendor = analysis.js.find(f => f.name.includes('react-vendor'));
  
  if (mainBundle && mainBundle.size > 50000) {
    console.log('⚠️ Main bundle is large. Consider more lazy loading.');
  } else if (mainBundle) {
    console.log('✅ Main bundle size is optimal.');
  }
  
  if (reactVendor && reactVendor.size > 200000) {
    console.log('⚠️ React vendor bundle is large. This is normal but monitor for growth.');
  } else if (reactVendor) {
    console.log('✅ React vendor bundle size is good.');
  }
  
  // Check for too many chunks
  if (analysis.js.length > 15) {
    console.log('⚠️ Many JS chunks detected. Consider consolidating smaller ones.');
  } else {
    console.log('✅ Good chunk distribution.');
  }
  
  // Overall assessment
  const totalGzipSize = totalJSGzip + (analysis.css.reduce((sum, f) => sum + f.gzipSize, 0));
  
  console.log('\n🎯 Overall Assessment:');
  console.log('-' .repeat(60));
  console.log(`📦 Total Bundle Size: ${formatBytes(totalSize)}`);
  console.log(`🗜️ Total Gzipped: ${formatBytes(totalGzipSize)}`);
  
  if (totalGzipSize < 200000) {
    console.log('🎉 Excellent! Your bundle is very well optimized.');
  } else if (totalGzipSize < 350000) {
    console.log('✅ Good bundle size. Room for minor improvements.');
  } else {
    console.log('⚠️ Bundle could be optimized further.');
  }
  
  // Improvement suggestions
  console.log('\n🚀 Next Steps:');
  console.log('-' .repeat(60));
  console.log('1. Implement the lazy loading App component');
  console.log('2. Add hover preloading for instant navigation');
  console.log('3. Optimize large images with responsive variants');
  console.log('4. Monitor bundle size changes with each deploy');
  
  console.log('\n✨ Analysis complete! Happy optimizing! 🚀\n');
}

// Add to package.json scripts:
// "analyze:build": "npm run build && node scripts/build-analysis.js"

if (import.meta.url === `file://${process.argv[1]}`) {
  analyzeBuild();
}

export { analyzeBuild };