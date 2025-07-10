// src/components/Entrenamiento/EL/EL3.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../../ThemeContext';
import ProgressBar from '../../common/ProgressBar'; // Importa la barra de progreso

const EL3 = ({ level, isRunning, setIsRunning }) => {
  const { currentTheme } = useTheme();
  const [phrase, setPhrase] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const phraseIndexRef = useRef(0);

  const longText = `
    Para Sherlock Holmes, ella es siempre "la" mujer. Rara vez le oí mencionar su nombre. A sus ojos, ella eclipsa y domina a todo su sexo. No es que sintiera por Irene Adler algo parecido al amor. Todas las emociones, y el amor en particular, eran aborrecibles para su mente fría y precisa. Él era, creo, la máquina de razonar y observar más perfecta que el mundo haya visto. Pero como amante, se habría puesto en una posición falsa. Nunca habló de las pasiones más suaves, excepto con un sarcasmo y un desprecio que eran ajenos a su naturaleza. La mujer era para él un mero objeto de estudio. Sus cualidades eran admirables desde el punto de vista del observador. Pero el observador, con su mente fría y equilibrada, se habría encogido ante tales intrusiones en su delicado y finamente ajustado temperamento.
    Y, sin embargo, había una mujer, la difunta Irene Adler, de dudosa y cuestionable memoria, cuya fotografía guardaba entre sus papeles más preciados. No era una mujer hermosa en el sentido convencional, pero su rostro, una vez visto, no se olvidaba. Tenía una fuerza de carácter que se reflejaba en sus ojos. Era una mujer que había vivido una vida de aventuras, y su espíritu indomable se había forjado en el crisol de la experiencia.
    Era la noche del 20 de marzo de 1888. Yo había regresado de un viaje a un paciente, y me había sentado a la mesa para cenar. Holmes, como de costumbre, estaba absorto en sus pensamientos. Su rostro, pálido y demacrado, estaba iluminado por la luz de la lámpara. Sus ojos, profundos y penetrantes, estaban fijos en el fuego.
    De repente, se levantó y se acercó a la ventana. Miró hacia la calle, donde la niebla se arremolinaba y los faroles brillaban débilmente. Luego, se volvió hacia mí con una expresión de profunda concentración.
    "Watson", dijo, "creo que tengo un nuevo caso."
    "¿Un caso?", pregunté, sorprendido. "Pero si acabas de regresar."
    "Sí, un caso muy interesante", respondió. "Un caso que requiere toda mi atención."
    Se sentó de nuevo, y me miró con una sonrisa enigmática. "Watson", dijo, "creo que este caso te interesará. Es un caso de amor y traición, de intriga y engaño."
    "¿De qué se trata?", pregunté, impaciente.
    "Se trata de una mujer", respondió. "Una mujer que ha desafiado a la ley y ha escapado de la justicia."
    "¿Y quién es ella?", pregunté.
    "Es Irene Adler", respondió. "La mujer que una vez fue la única persona que logró burlar a Sherlock Holmes."
  `;

  const getCoherentPhrases = (text) => {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    const result = [];
    sentences.forEach(sentence => {
      const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);
      let i = 0;
      while (i < words.length) {
        if (words.length - i >= 3) {
          result.push(words.slice(i, i + 3).join(' '));
          i += 3;
        } else {
          result.push(words.slice(i).join(' '));
          i = words.length;
        }
      }
    });
    return result;
  };

  const phrasesByLevel = {
    1: getCoherentPhrases(longText),
    2: getCoherentPhrases(longText),
    3: getCoherentPhrases(longText),
  };

  // TIEMPOS AJUSTADOS PARA MEJOR LEGIBILIDAD
  const displayTimes = {
    1: 1000, // Nivel 1: 1 segundo
    2: 750,  // Nivel 2: 0.75 segundos
    3: 500,  // Nivel 3: 0.5 segundos
  };

  const currentDisplayTime = displayTimes[level] || displayTimes[1];
  const currentPhrases = phrasesByLevel[level] || phrasesByLevel[1];
  const exerciseDuration = 60 * 1000; // 1 minuto

  useEffect(() => {
    if (isRunning) {
      const startDisplay = () => {
        if (phraseIndexRef.current < currentPhrases.length) {
          setPhrase(currentPhrases[phraseIndexRef.current]);
          setIsVisible(true);
          phraseIndexRef.current++;
          setTimeout(() => setIsVisible(false), currentDisplayTime);
        } else {
          setIsRunning(false);
          setPhrase('¡Fin del ejercicio!');
          setIsVisible(true);
        }
      };

      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(startDisplay, currentDisplayTime + 300); // Intervalo más corto
      startDisplay();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPhrase('');
      setIsVisible(false);
      phraseIndexRef.current = 0;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, currentDisplayTime, currentPhrases, setIsRunning]);

  const handleExerciseComplete = () => {
    setIsRunning(false);
    alert('¡Tiempo terminado para EL3!');
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
        Leer la frase:
      </p>
      <div style={{
        fontSize: '2em',
        fontWeight: 'bold',
        color: currentTheme.colors.textPrimary,
        minHeight: '1.5em',
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${currentDisplayTime / 2}ms ease-in-out`,
        textAlign: 'center',
        width: '80%',
        lineHeight: '1.4em',
      }}>
        <span>{phrase}</span>
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

export default EL3;
