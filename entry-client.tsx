import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Prerendered pages ship a filled #root → hydrate.
// The 404.html fallback ships an empty #root → client-render.
if (rootElement.childElementCount > 0) {
  hydrateRoot(rootElement, tree);
} else {
  createRoot(rootElement).render(tree);
}
