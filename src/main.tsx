import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/index.css';
import ThemeProvider from '@/providers/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' defaultColor='orange' storageKey='vite-ui-theme'>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
