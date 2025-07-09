// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Progreso from './pages/Progreso';
import Tests from './pages/Tests';
import Entrenamiento from './pages/Entrenamiento';
import Configuracion from './pages/Configuracion';
import Informacion from './pages/Informacion';
import Header from './components/Header';
import { useTheme } from './ThemeContext';
import './styles/App.css'; // Asegúrate de que solo este CSS se importe aquí

function App() {
  const { currentTheme } = useTheme();

  // Aplica las variables CSS al elemento <html> del documento
  useEffect(() => {
    const root = document.documentElement; // Accede al elemento <html>
    for (const key in currentTheme.colors) {
      // Convierte camelCase a kebab-case para las propiedades CSS
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, currentTheme.colors[key]);
    }
  }, [currentTheme]); // Re-ejecuta cuando el tema actual cambie

  return (
    <Router>
      {/* Eliminamos el style={appStyles} de aquí, ya que las variables se aplican globalmente */}
      <div className="app-container"> 
        <Header />

        {/* Barra de Navegación */}
        <nav className="app-nav">
          <NavLink to="/informacion">Información</NavLink>
          <NavLink to="/progreso">Progreso</NavLink>
          <NavLink to="/tests">Tests</NavLink>
          <NavLink to="/entrenamiento">Entrenamiento</NavLink>
          <NavLink to="/configuracion">Configuración</NavLink>
        </nav>

        {/* Área de Contenido Principal */}
        <main className="app-main-content">
          <Routes>
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/progreso" element={<Progreso />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/entrenamiento" element={<Entrenamiento />} />
            <Route path="/configuracion" element={<Configuracion />} />
            {/* Redirige a /informacion por defecto */}
            <Route path="/" element={<Informacion />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Componente auxiliar para los enlaces de navegación con clase activa
function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={isActive ? 'nav-link active' : 'nav-link'}>
      {children}
    </Link>
  );
}

export default App;
