import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './utils/dev-chrome-api'; // Import temporary replacement for Chrome API
import '@styles/tokens.css';
import '@styles/typography.css'; // Import design tokens
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
