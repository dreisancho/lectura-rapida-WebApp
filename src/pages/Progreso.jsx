// src/pages/Progreso.jsx
import React from 'react';
import { useProgress } from '../ProgressContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '../ThemeContext'; // Importa useTheme para acceder a los colores del tema

function Progreso() {
  const { testResults } = useProgress(); // Eliminamos clearTestResults

  const { currentTheme } = useTheme(); // Obtiene el tema actual

  // Colores para las barras del gráfico, usando los colores del tema
  const barColorV = currentTheme.colors.accentPrimary; // Color principal para V
  const barColorVm = currentTheme.colors.accentSecondary; // Color secundario para Vm

  // Formatear los datos para el gráfico
  const chartData = testResults.map((result, index) => ({
    name: result.name, // 'Inicial', 'Test 1', etc.
    V: result.V,
    Vm: result.Vm,
  }));

  return (
    <div className="page-content">
      <h2>Progreso de Lectura</h2>

      <h3>Resultados de Tests Realizados: {testResults.length}</h3>

      {testResults.length > 0 ? (
        <>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={currentTheme.colors.textSecondary} /> {/* Color de la cuadrícula */}
              <XAxis dataKey="name" stroke={currentTheme.colors.textPrimary} /> {/* Color del texto del eje X */}
              <YAxis stroke={currentTheme.colors.textPrimary} /> {/* Color del texto del eje Y */}
              <Tooltip
                contentStyle={{
                  backgroundColor: currentTheme.colors.backgroundPrimary, // Fondo del tooltip
                  borderColor: currentTheme.colors.border, // Borde del tooltip
                  color: currentTheme.colors.textPrimary, // Color del texto del tooltip
                }}
                itemStyle={{ color: currentTheme.colors.textPrimary }} // Color del texto de los items en el tooltip
              />
              <Legend wrapperStyle={{ color: currentTheme.colors.textPrimary }} /> {/* Color del texto de la leyenda */}
              <Bar dataKey="V" name="Velocidad de Lectura (ppm)" fill={barColorV} />
              <Bar dataKey="Vm" name="Velocidad de Memorización (ppm)" fill={barColorVm} />
            </BarChart>
          </ResponsiveContainer>

          {/* Eliminamos el botón "Limpiar Resultados" */}
          {/* <button onClick={clearTestResults} className="save-button" style={{ marginTop: '20px' }}>
            Limpiar Resultados
          </button> */}
        </>
      ) : (
        <p>No hay resultados de tests para mostrar. ¡Realiza un test para ver tu progreso!</p>
      )}
    </div>
  );
}

export default Progreso;
