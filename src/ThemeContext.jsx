// src/ThemeContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes, defaultThemeName } from './themes'; // Importa los temas y el nombre del tema por defecto

// 1. Crea el Contexto
export const ThemeContext = createContext();

// 2. Crea el Proveedor del Contexto
export const ThemeProvider = ({ children }) => {
  // Intenta cargar el tema guardado en localStorage, si no, usa el por defecto
  const [currentThemeName, setCurrentThemeName] = useState(() => {
    const savedThemeName = localStorage.getItem('appTheme');
    return savedThemeName && themes[savedThemeName] ? savedThemeName : defaultThemeName;
  });

  const currentTheme = themes[currentThemeName];

  // Guarda el tema seleccionado en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('appTheme', currentThemeName);
  }, [currentThemeName]);

  // Función para cambiar el tema
  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentThemeName(themeName);
    } else {
      console.warn(`El tema "${themeName}" no existe.`);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, allThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Crea un Hook personalizado para usar el Contexto fácilmente
export const useTheme = () => {
  return useContext(ThemeContext);
};
