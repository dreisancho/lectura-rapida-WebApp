// src/components/common/ProgressBar.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../ThemeContext';

const ProgressBar = ({ duration, isRunning, onComplete }) => {
  const { currentTheme } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = Math.min((elapsedTime / duration) * 100, 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          clearInterval(interval);
          if (onComplete) {
            onComplete();
          }
        }
      }, 100); // Actualiza la barra cada 100ms para un efecto suave

      return () => clearInterval(interval);
    } else {
      setProgress(0); // Resetea la barra cuando no está corriendo
    }
  }, [isRunning, duration, onComplete]);

  return (
    <div style={{
      width: '80%',
      backgroundColor: currentTheme.colors.border,
      borderRadius: '10px',
      overflow: 'hidden',
      margin: '20px 0',
      height: '20px',
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        backgroundColor: currentTheme.colors.accentPrimary,
        transition: 'width 0.1s linear',
        borderRadius: '10px',
      }}>
      </div>
    </div>
  );
};

export default ProgressBar;
