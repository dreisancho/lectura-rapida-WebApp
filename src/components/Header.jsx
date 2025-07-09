// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // Asegúrate de que la ruta sea correcta

function Header() {
  const [time, setTime] = useState(0); // Tiempo en segundos
  const [isRunning, setIsRunning] = useState(false); // Puedes controlar esto desde un estado global si es necesario
  const { currentTheme } = useTheme(); // Para aplicar estilos dinámicos

  // Efecto para el cronómetro
  useEffect(() => {
    let interval;
    // Por ahora, el cronómetro siempre corre. Podríamos añadir lógica para pausarlo/reiniciarlo.
    setIsRunning(true); // Inicia el cronómetro automáticamente para demostración

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Estilos dinámicos para el header y sus elementos
  const headerStyles = {
    backgroundColor: currentTheme.colors.accentSecondary,
    borderColor: currentTheme.colors.accentPrimary,
    color: currentTheme.colors.textPrimary,
  };

  const logoStyles = {
    color: currentTheme.colors.accentPrimary,
  };

  const userInfoStyles = {
    color: currentTheme.colors.textSecondary,
  };

  const timerStyles = {
    backgroundColor: currentTheme.colors.timerBackground,
    color: currentTheme.colors.timerText,
  };

  return (
    <header className="app-header" style={headerStyles}>
      <div className="logo" style={logoStyles}>Dynamic Reader</div>
      <div className="user-time-block"> {/* Nuevo bloque para usuario y tiempo */}
        <div className="user-info" style={userInfoStyles}>Usuario: Ramón Campayo</div>
        <div className="timer" style={timerStyles}>{formatTime(time)}</div>
      </div>
    </header>
  );
}

// Componente auxiliar para los enlaces de navegación con clase activa
// Lo mantenemos aquí o lo movemos a un archivo separado si se usa en más lugares
function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={isActive ? 'nav-link active' : 'nav-link'}>
      {children}
    </Link>
  );
}

export default Header;
