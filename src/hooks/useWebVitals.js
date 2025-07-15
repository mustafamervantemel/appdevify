import { useEffect } from 'react';

export const useWebVitals = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals measurement
    const reportWebVitals = (metric) => {
      // Send to analytics service
      if (window.gtag) {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Console log for debugging
      console.log(`${metric.name}: ${metric.value}`);
    };

    // Import web-vitals library if available
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    }).catch(() => {
      // Fallback manual measurement
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            reportWebVitals({
              name: 'FCP',
              value: entry.firstContentfulPaint,
              id: 'manual-fcp'
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    });
  }, []);
};

export default useWebVitals;