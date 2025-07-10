// src/pages/Entrenamiento.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import EL1 from '../components/Entrenamiento/EL/EL1';
import EL2 from '../components/Entrenamiento/EL/EL2';
import EL3 from '../components/Entrenamiento/EL/EL3';
import { useTrainingTime } from '../contexts/TrainingTimeContext'; // Importa el hook

function Entrenamiento() {
  const { currentTheme } = useTheme();
  const { startAccumulatingTime, stopAccumulatingTime } = useTrainingTime(); // Usa el hook

  const trainingStages = {
    'Etapa 1': {
      categories: {
        'Calentamiento': [
          { id: 'WarmUp1', name: 'Movimiento Ocular Básico' },
        ],
        'EL': [
          { id: 'EL1', name: 'EL1: Números' },
          { id: 'EL2', name: 'EL2: Sílabas' },
          { id: 'EL3', name: 'EL3: Frases de Novela' },
        ],
        'EO': [], 'EPM': [], 'EVM': [], 'EMD': []
      },
      levels: [1, 2, 3],
      nextTest: 'Test 1',
    },
  };

  const [currentStage, setCurrentStage] = useState('Etapa 1'); 
  const [selectedCategory, setSelectedCategory] = useState('EL'); 
  const [selectedExercise, setSelectedExercise] = useState('EL1'); 
  const [selectedLevel, setSelectedLevel] = useState(1); 
  const [isExerciseRunning, setIsExerciseRunning] = useState(false); 

  const availableCategories = trainingStages[currentStage].categories;
  const availableExercises = availableCategories[selectedCategory] || [];
  const availableLevels = trainingStages[currentStage].levels;

  useEffect(() => {
    if (availableExercises.length > 0 && !availableExercises.some(ex => ex.id === selectedExercise)) {
      setSelectedExercise(availableExercises[0].id);
    } else if (availableExercises.length === 0) {
      setSelectedExercise('');
    }
    if (!availableLevels.includes(selectedLevel)) {
      setSelectedLevel(availableLevels[0]);
    }
  }, [selectedCategory, currentStage, availableExercises, availableLevels, selectedExercise, selectedLevel]);

  // Efecto para iniciar/detener la acumulación de tiempo
  useEffect(() => {
    if (isExerciseRunning) {
      startAccumulatingTime();
    } else {
      stopAccumulatingTime();
    }
    // Limpiar al desmontar
    return () => {
      stopAccumulatingTime();
    };
  }, [isExerciseRunning, startAccumulatingTime, stopAccumulatingTime]);


  const handleStartStop = () => {
    setIsExerciseRunning(!isExerciseRunning);
  };

  const renderExerciseComponent = () => {
    if (!selectedExercise) {
      return <p>Selecciona una categoría y un ejercicio para comenzar.</p>;
    }

    switch (selectedExercise) {
      case 'EL1':
        return <EL1 level={selectedLevel} isRunning={isExerciseRunning} setIsRunning={setIsExerciseRunning} />;
      case 'EL2':
        return <EL2 level={selectedLevel} isRunning={isExerciseRunning} setIsRunning={setIsExerciseRunning} />;
      case 'EL3':
        return <EL3 level={selectedLevel} isRunning={isExerciseRunning} setIsRunning={setIsExerciseRunning} />;
      default:
        return (
          <div>
            <h4>Ejecutando: {selectedExercise} (Nivel {selectedLevel})</h4>
            <p>Contenido del ejercicio {selectedExercise}...</p>
          </div>
        );
    }
  };

  return (
    <div className="page-content">
      <h2>Entrenamiento de Lectura Rápida</h2>

      <div className="training-categories">
        {Object.keys(availableCategories).map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
            }}
            style={{
              backgroundColor: selectedCategory === category ? currentTheme.colors.accentPrimary : currentTheme.colors.backgroundSecondary,
              color: selectedCategory === category ? currentTheme.colors.backgroundPrimary : currentTheme.colors.textPrimary,
              borderColor: currentTheme.colors.border,
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="exercise-controls" style={{ marginTop: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <label htmlFor="exercise-select" style={{ color: currentTheme.colors.textPrimary }}>Ejercicio:</label>
        <select
          id="exercise-select"
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: `1px solid ${currentTheme.colors.border}`,
            backgroundColor: currentTheme.colors.backgroundSecondary,
            color: currentTheme.colors.textPrimary,
          }}
        >
          {availableExercises.length > 0 ? (
            availableExercises.map(ex => (
              <option key={ex.id} value={ex.id}>{ex.name}</option>
            ))
          ) : (
            <option value="">No hay ejercicios disponibles</option>
          )}
        </select>

        <label htmlFor="level-select" style={{ color: currentTheme.colors.textPrimary }}>Nivel:</label>
        <select
          id="level-select"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(parseInt(e.target.value))}
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: `1px solid ${currentTheme.colors.border}`,
            backgroundColor: currentTheme.colors.backgroundSecondary,
            color: currentTheme.colors.textPrimary,
          }}
        >
          {availableLevels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>

        <button
          className="save-button" 
          onClick={handleStartStop}
          style={{
            backgroundColor: currentTheme.colors.accentPrimary,
            color: currentTheme.colors.backgroundPrimary,
            border: `1px solid ${currentTheme.colors.accentPrimary}`,
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          {isExerciseRunning ? 'Detener' : 'Comenzar'}
        </button>
      </div>

      <div className="exercise-area" style={{
        marginTop: '30px',
        padding: '20px',
        border: `1px solid ${currentTheme.colors.border}`,
        borderRadius: '8px',
        backgroundColor: currentTheme.colors.backgroundSecondary,
        color: currentTheme.colors.textPrimary,
        minHeight: '300px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        {renderExerciseComponent()}
      </div>
    </div>
  );
}

export default Entrenamiento;
