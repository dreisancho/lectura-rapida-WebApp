// src/components/Entrenamiento/EL/EL2.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../../ThemeContext';
import ProgressBar from '../../common/ProgressBar'; // Importa la barra de progreso

const EL2 = ({ level, isRunning, setIsRunning }) => {
  const { currentTheme } = useTheme();
  const [syllable, setSyllable] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);

  const commonTwoLetterSyllables = [
    "la", "el", "un", "de", "en", "es", "se", "no", "lo", "me",
    "te", "si", "mi", "su", "ha", "he", "di", "da", "va", "ve",
    "ir", "al", "le", "lo", "tu", "yo", "ya", "ni", "re", "do",
  ];

  const displayTimes = { 1: 500, 2: 300, 3: 150 };
  const currentDisplayTime = displayTimes[level] || displayTimes[1];
  const exerciseDuration = 60 * 1000; // 1 minuto

  useEffect(() => {
    if (isRunning) {
      const startDisplay = () => {
        const randomSyllable = commonTwoLetterSyllables[Math.floor(Math.random() * commonTwoLetterSyllables.length)];
        setSyllable(randomSyllable);
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), currentDisplayTime);
      };

      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(startDisplay, currentDisplayTime + 350);
      startDisplay();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setSyllable('');
      setIsVisible(false);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, currentDisplayTime]);

  const handleExerciseComplete = () => {
    setIsRunning(false);
    alert('¡Tiempo terminado para EL2!');
  };

  const letters = syllable.split('');

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
        Leer la sílaba formada:
      </p>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        width: '10cm',
        alignItems: 'center',
        minHeight: '1.5em',
      }}>
        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: currentTheme.colors.accentPrimary,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}></div>
        
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
          <span>{letters[0] || ''}</span>
          <span>{letters[1] || ''}</span>
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

export default EL2;
