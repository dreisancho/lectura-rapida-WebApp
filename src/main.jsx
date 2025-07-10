// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css'; // Ruta corregida
import { ThemeProvider } from './ThemeContext';
import { ProgressProvider } from './ProgressContext';
import { TrainingTimeProvider } from './contexts/TrainingTimeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ProgressProvider>
        <TrainingTimeProvider>
          <App />
        </TrainingTimeProvider>
      </ProgressProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
