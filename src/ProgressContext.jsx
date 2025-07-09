// src/ProgressContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [testResults, setTestResults] = useState([]);

  // Cargar resultados desde localStorage al inicio
  useEffect(() => {
    const storedResults = localStorage.getItem('testResults');
    if (storedResults) {
      setTestResults(JSON.parse(storedResults));
    }
  }, []);

  // Guardar resultados en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('testResults', JSON.stringify(testResults));
  }, [testResults]);

  // Función para añadir un resultado de test
  const addTestResult = useCallback((result) => {
    setTestResults((prevResults) => {
      // Evitar duplicados para el test 'Inicial'
      if (result.name === 'Inicial' && prevResults.some(r => r.name === 'Inicial')) {
        return prevResults; // No añadir si ya existe un test 'Inicial'
      }
      return [...prevResults, result];
    });
  }, []);

  // Función para verificar si el test inicial ya fue tomado
  const hasInitialTestBeenTaken = useCallback(() => {
    return testResults.some(result => result.name === 'Inicial');
  }, [testResults]); // Depende de testResults

  // Función para limpiar todos los resultados (solo para desarrollo/pruebas)
  const clearTestResults = useCallback(() => {
    setTestResults([]);
    localStorage.removeItem('testResults'); // También limpiar del localStorage
  }, []);

  return (
    <ProgressContext.Provider value={{ testResults, addTestResult, hasInitialTestBeenTaken, clearTestResults }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
