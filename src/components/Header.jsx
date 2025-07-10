// src/components/Header.jsx
import React from 'react';
import { useTheme } from '../ThemeContext';
import { useTrainingTime } from '../contexts/TrainingTimeContext'; // Importa el hook

function Header() {
  const { currentTheme } = useTheme();
  const { totalTrainingTime, formatTime } = useTrainingTime(); // Usa el hook

  return (
    <header className="app-header" style={{ backgroundColor: currentTheme.colors.backgroundSecondary }}>
      <div className="app-title" style={{ color: currentTheme.colors.accentPrimary }}>
        Dynamic Reader
      </div>
      <div className="user-time-block" style={{
        backgroundColor: currentTheme.colors.accentPrimary,
        color: currentTheme.colors.backgroundPrimary,
        borderColor: currentTheme.colors.border,
      }}>
        <span className="user-info">Usuario: Ramón Campayo</span>
        <span className="timer-display" style={{
          backgroundColor: currentTheme.colors.timerBackground,
          color: currentTheme.colors.timerText,
        }}>
          {formatTime(totalTrainingTime)} {/* Muestra el tiempo total */}
        </span>
      </div>
    </header>
  );
}

export default Header;
