import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
console.log('Root element found:', rootElement);

if (!rootElement) {
  console.error('Failed to find root element');
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);
console.log('React root created');

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
