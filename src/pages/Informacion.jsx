// src/pages/Informacion.jsx
import React from 'react';
import { useTheme } from '../ThemeContext'; // Para usar colores del tema si es necesario

function Informacion() {
  const { currentTheme } = useTheme(); // Obtiene el tema actual

  // Estilos para los títulos de sección dentro del contenido
  const sectionTitleStyle = {
    color: currentTheme.colors.accentPrimary, // Usa el color de acento primario para los títulos
    marginTop: '40px',
    marginBottom: '15px',
    borderBottom: `1px solid ${currentTheme.colors.textSecondary}`, // Un borde sutil
    paddingBottom: '5px',
  };

  const subSectionTitleStyle = {
    color: currentTheme.colors.textPrimary, // Usa el color de texto primario para subtítulos
    marginTop: '25px',
    marginBottom: '10px',
    fontSize: '1.15em',
  };

  return (
    <div className="page-content">
      <h2>Información General sobre Lectura Rápida</h2>
      <p>
        Bienvenido a Dynamic Reader, tu aplicación para aprender y mejorar la lectura rápida.
        Aquí encontrarás información clave sobre el método de Ramón Campayo y lo que puedes lograr.
      </p>

      {/* Algo de teoría */}
      <h3 style={sectionTitleStyle}>Algo de Teoría</h3>
      <p>
        Para comprender la lectura rápida, es fundamental familiarizarse con algunas siglas y conceptos clave:
      </p>
      <ul>
        <li><strong>V (Velocidad final de lectura):</strong> Velocidad media de lectura de un texto, sin considerar la retención.</li>
        <li><strong>Vp (Velocidad de procesamiento mental):</strong> Velocidad a la que la mente procesa la información manteniendo la comprensión.</li>
        <li><strong>Vm (Velocidad de memorización):</strong> La verdadera eficacia de la lectura rápida, basada en la cantidad de información que se memoriza.</li>
        <li>Estas velocidades se miden en palabras por minuto (ppm).</li>
        <li>El objetivo es lograr una <strong>Vm</strong> alta, lo que indica una lectura provechosa y eficaz.</li>
      </ul>

      {/* ¿Por qué leer rápido? */}
      <h3 style={sectionTitleStyle}>¿Por qué Leer Rápido?</h3>
      <p>
        La lectura rápida ofrece múltiples ventajas que van más allá del simple ahorro de tiempo:
      </p>
      <ul>
        <li><strong>Ahorro de Tiempo:</strong> Permite leer la misma cantidad de información en mucho menos tiempo, liberando horas para otras actividades.</li>
        <li><strong>Incremento de la Velocidad de Procesamiento Mental:</strong> Entrena tu mente para ser más ágil y potente, procesando información a una velocidad superior.</li>
        <li><strong>Mejora de la Comprensión:</strong> Un lector rápido capta la idea general más rápidamente, facilitando una comprensión más profunda y global del texto.</li>
        <li><strong>Mayor Concentración:</strong> Al procesar la información más rápido, la mente se mantiene más activa y concentrada, reduciendo la distracción y el aburrimiento.</li>
        <li><strong>Superación Personal y Autoestima:</strong> Los resultados obtenidos al mejorar la velocidad de lectura y comprensión aumentan la motivación y la confianza en uno mismo.</li>
      </ul>

      {/* Fundamentos de la lectura rápida */}
      <h3 style={sectionTitleStyle}>Fundamentos de la Lectura Rápida</h3>
      <p>
        La lectura rápida eficaz se basa en la "lectura fotográfica", una técnica que imita el funcionamiento del ojo como una cámara.
      </p>
      <h4 style={subSectionTitleStyle}>El Ojo como Cámara Fotográfica:</h4>
      <ul>
        <li>Cuando una cámara se mueve, la foto sale borrosa. De igual forma, si los ojos se mueven continuamente al leer, la información no se capta nítidamente.</li>
        <li>La lectura tradicional (de izquierda a derecha, sílaba a sílaba) implica un movimiento constante del ojo, lo que limita la velocidad y la comprensión.</li>
        <li>La lectura fotográfica busca "fijar" la vista en grupos de palabras para captarlas de una sola vez, como una "foto visual".</li>
        <li>Esto permite una mayor agilidad mental y un procesamiento más eficiente de la información.</li>
      </ul>
      <h4 style={subSectionTitleStyle}>Mitos Comunes:</h4>
      <ul>
        <li>La lectura fotográfica no es "leer a 60.000 palabras por minuto" sin comprender; es una técnica real y comprensiva.</li>
        <li>No se trata de "fotografiar" una página completa, sino de optimizar la forma en que el ojo y el cerebro procesan la información.</li>
      </ul>

      {/* La lectura rápida en cifras */}
      <h3 style={sectionTitleStyle}>La Lectura Rápida en Cifras</h3>
      <p>
        Aunque la mente subconsciente puede procesar información a velocidades altísimas (equivalente a 60.000 palabras/minuto en imágenes), la lectura consciente tiene límites.
      </p>
      <ul>
        <li>La velocidad máxima teórica de lectura comprensiva se estima en unas <strong>10.000 palabras por minuto</strong>, donde la mente "vería" imágenes en blanco y negro.</li>
        <li>Un lector medio sin entrenamiento lee entre 150-250 ppm.</li>
        <li>Con entrenamiento, se pueden alcanzar velocidades de <strong>350-500 ppm</strong> para un lector rápido, y hasta <strong>650-800 ppm</strong> para un lector muy rápido.</li>
        <li>El objetivo supremo del curso es alcanzar <strong>1.000 ppm</strong>, un límite humano para un lector excepcionalmente rápido y concentrado.</li>
      </ul>

      {/* Tipos de lectura */}
      <h3 style={sectionTitleStyle}>Tipos de Lectura</h3>
      <p>
        Según el propósito, podemos identificar varios tipos de lectura:
      </p>
      <ul>
        <li><strong>Lectura Fotográfica:</strong> Técnica natural basada en la captura visual de grupos de palabras.</li>
        <li><strong>Lectura Rápida:</strong> Aplicación veloz de la técnica fotográfica sin pérdida de comprensión.</li>
        <li><strong>Lectura de Ocio:</strong> Por placer, sin interés en memorizar.</li>
        <li><strong>Lectura Informativa:</strong> Para entender la idea general de un texto.</li>
        <li><strong>Lectura de Aprendizaje:</strong> Para comprender y memorizar todos los datos.</li>
        <li><strong>Lectura de Repaso:</strong> Para consolidar y recordar información ya retenida.</li>
        <li><strong>Lectura en Forma de Zeta:</strong> La lectura tradicional de izquierda a derecha, considerada ineficiente para la lectura rápida.</li>
      </ul>

      {/* Unas sencillas prácticas / Primeros ejercicios */}
      <h3 style={sectionTitleStyle}>Unas Sencillas Prácticas y Primeros Ejercicios</h3>
      <p>
        El método de lectura rápida se basa en ejercicios prácticos para entrenar el ojo y la mente.
      </p>
      <h4 style={subSectionTitleStyle}>Conceptos Clave de los Ejercicios:</h4>
      <ul>
        <li><strong>Visión Periférica:</strong> Abrir el campo de visión para captar varias palabras a la vez.</li>
        <li><strong>Fotos Visuales:</strong> Realizar paradas breves y estáticas con los ojos para "fotografiar" grupos de palabras.</li>
        <li><strong>Eliminar el Balbuceo y la Subvocalización:</strong> Evitar pronunciar mentalmente las palabras al leer para aumentar la velocidad.</li>
        <li><strong>No Releer:</strong> Confiar en la capacidad de la mente para procesar la información sin necesidad de volver atrás.</li>
      </ul>
      <p>
        Los ejercicios iniciales te ayudarán a acostumbrar tus ojos a estas nuevas formas de lectura, comenzando con números y palabras en columnas, y progresando hacia la lectura de renglones completos con menos "fotos" visuales.
      </p>
      <p>
        ¡Prepárate para entrenar tu mente y transformar tu forma de leer!
      </p>
    </div>
  );
}

export default Informacion;
