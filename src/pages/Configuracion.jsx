// src/pages/Configuracion.jsx
import React from 'react';
import { useTheme } from '../ThemeContext'; // Importa el hook useTheme

function Configuracion() {
  const { currentTheme, setTheme, allThemes } = useTheme(); // Obtiene el tema actual, la función para cambiarlo y todos los temas

  const handleThemeChange = (themeName) => {
    setTheme(themeName); // Llama a la función del contexto para cambiar el tema
  };

  return (
    <div className="page-content">
      <h2>Configuración</h2>

      <div className="config-section">
        <h3>Selección de Tema</h3>
        <div className="theme-selector">
          {Object.keys(allThemes).map((themeName) => (
            <button
              key={themeName}
              className={`theme-button ${currentTheme.name === themeName ? 'active' : ''}`}
              onClick={() => handleThemeChange(themeName)}
              // Opcional: Estilos en línea para previsualizar el color principal del tema
              style={{
                backgroundColor: allThemes[themeName].colors.backgroundSecondary,
                color: allThemes[themeName].colors.textPrimary,
                border: `2px solid ${allThemes[themeName].colors.accentPrimary}`
              }}
            >
              {themeName}
            </button>
          ))}
        </div>
      </div>

      {/* Sección de Teclas de Ejercicio (Placeholder) */}
      <div className="config-section">
        <h3>Teclas de Ejercicio</h3>
        <p>Aquí se configurarán las teclas para los ejercicios (ej. Tecla OK: Z, Tecla Incorrecto: X).</p>
        {/* Implementación futura */}
      </div>

      {/* Sección de Guías de Lectura (Placeholder) */}
      <div className="config-section">
        <h3>Guías de Lectura</h3>
        <p>Aquí se configurarán las guías visuales (colores, tamaño, etc.).</p>
        {/* Implementación futura */}
      </div>

      {/* Sección de Color de Fondo (Placeholder) */}
      <div className="config-section">
        <h3>Color de Fondo</h3>
        <p>Aquí se configurará el color de fondo del área de ejercicio.</p>
        {/* Implementación futura */}
      </div>

      <button className="save-button">Guardar Cambios</button>
    </div>
  );
}

export default Configuracion;
