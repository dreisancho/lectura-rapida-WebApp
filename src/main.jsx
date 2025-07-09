// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { ThemeProvider } from './ThemeContext';
import { ProgressProvider } from './ProgressContext'; // Importa el ProgressProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ProgressProvider> {/* Envuelve la aplicación con ProgressProvider */}
        <App />
      </ProgressProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
