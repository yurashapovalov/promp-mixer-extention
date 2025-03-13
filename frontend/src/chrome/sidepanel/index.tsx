import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from '@context/AuthContext';
import { PromptProvider } from '@context/PromptContext';
import SidePanel from './components/side-panel/side-panel';

// Get the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Create a root
createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <PromptProvider>
        <SidePanel />
      </PromptProvider>
    </AuthProvider>
  </StrictMode>
);
