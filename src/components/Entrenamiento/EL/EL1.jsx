// src/components/Entrenamiento/EL/EL1.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../../ThemeContext';
import ProgressBar from '../../common/ProgressBar'; // Importa la barra de progreso

const EL1 = ({ level, isRunning, setIsRunning }) => {
  const { currentTheme } = useTheme();
  const [numbers, setNumbers] = useState(['', '']);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);

  const displayTimes = { 1: 500, 2: 300, 3: 150 };
  const currentDisplayTime = displayTimes[level] || displayTimes[1];
  const exerciseDuration = 60 * 1000; // 1 minuto

  useEffect(() => {
    if (isRunning) {
      const startDisplay = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setNumbers([num1, num2]);
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), currentDisplayTime);
      };

      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(startDisplay, currentDisplayTime + 350);
      startDisplay();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setNumbers(['', '']);
      setIsVisible(false);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, currentDisplayTime]);

  const handleExerciseComplete = () => {
    setIsRunning(false);
    alert('¡Tiempo terminado para EL1!');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }}>
      <p style={{ color: currentTheme.colors.textPrimary, fontSize: '1.2em', marginBottom: '20px' }}>
        Leer el número formado:
      </p>
      <div style={{
        position: 'relative', // Contenedor relativo para el círculo
        display: 'flex',
        justifyContent: 'space-between',
        width: '10cm',
        alignItems: 'center',
        minHeight: '1.5em',
      }}>
        {/* Círculo central fijo - AHORA ESTÁ FUERA DEL DIV QUE PARPADEA */}
        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: currentTheme.colors.accentPrimary,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}></div>
        
        {/* Contenedor para los números que parpadean */}
        <div style={{
          fontSize: '2em',
          fontWeight: 'bold',
          color: currentTheme.colors.textPrimary,
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${currentDisplayTime / 2}ms ease-in-out`,
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <span>{numbers[0]}</span>
          <span>{numbers[1]}</span>
        </div>
      </div>
      {isRunning && (
        <ProgressBar
          duration={exerciseDuration}
          isRunning={isRunning}
          onComplete={handleExerciseComplete}
        />
      )}
    </div>
  );
};

export default EL1;
