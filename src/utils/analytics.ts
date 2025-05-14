// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize dataLayer array if it doesn't exist
window.dataLayer = window.dataLayer || [];

// Initialize gtag function
function gtag(...args: any[]) {
  window.dataLayer.push(args);
}

// Track page views
export const pageview = (url: string) => {
  window.gtag('config', 'G-WGDEHDPND3', {
    page_path: url,
  });
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}; 