// src/contexts/TrainingTimeContext.jsx
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const TrainingTimeContext = createContext();

export const TrainingTimeProvider = ({ children }) => {
  const [totalTrainingTime, setTotalTrainingTime] = useState(() => {
    // Cargar el tiempo guardado de localStorage al inicio
    const savedTime = localStorage.getItem('totalTrainingTime');
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  const intervalRef = useRef(null); // Para el intervalo de acumulación de tiempo

  // Función para iniciar la acumulación de tiempo
  const startAccumulatingTime = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTotalTrainingTime(prevTime => prevTime + 1); // Sumar 1 segundo cada segundo
      }, 1000);
    }
  };

  // Función para detener la acumulación de tiempo
  const stopAccumulatingTime = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Guardar el tiempo en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('totalTrainingTime', totalTrainingTime.toString());
  }, [totalTrainingTime]);

  // Limpiar el intervalo al desmontar el componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <TrainingTimeContext.Provider value={{ totalTrainingTime, startAccumulatingTime, stopAccumulatingTime, formatTime }}>
      {children}
    </TrainingTimeContext.Provider>
  );
};

export const useTrainingTime = () => {
  return useContext(TrainingTimeContext);
};
