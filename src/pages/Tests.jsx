// src/pages/Tests.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import { useProgress } from '../ProgressContext';
import { useNavigate } from 'react-router-dom';

// Contenido del test inicial
const testInitialText = `
Barbicane había conseguido una gran fortuna con el comercio de madera; nombrado director de la artillería durante la guerra, contribuyó poderosamente a los progresos de esa arma, y dio a las cosas experimentales un incomparable impulso.

Era un personaje de talla mediana que tenía, rara excepción en el Gun-Club, todos sus miembros intactos. Sus acentuados rasgos parecían trazados a escuadra y a tiralíneas, y si es cierto que para adivinar los instintos de un hombre hay que mirarlo de perfil, Barbicane, visto así, ofrecía los indicios más seguros de la energía, de la audacia y de la sangre fría. En este instante, permanecía inmóvil en su sillón, mudo, absorto, con la mirada hacia dentro, refugiado bajo su sombrero de copa. Sus colegas hablaban ruidosamente a su alrededor sin distraerle; se hacían preguntas unos a otros, se lanzaban al campo de las suposiciones, examinaban a su presidente y trataban, aunque en vano, de despejar la X de su imperturbable fisonomía.

Cuando sonaron las ocho en el reloj fulminante del salón, Barbicane, como movido por un resorte se irguió súbitamente; se hizo un silencio general y el orador, en un tono algo enfático, tomó la palabra en estos términos:

—Valientes colegas, desde hace ya mucho tiempo una paz infecunda ha venido a sumir a los miembros del Gun-Club en una lamentable ociosidad. Tras un periodo de algunos años tan lleno de incidentes, nos ha sido preciso abandonar nuestros trabajos y pararnos en seco en la ruta del progreso. No temo proclamarlo en voz alta: toda guerra que volviera a poner en nuestras manos las armas sería bienvenida…

—¡Sí, la guerra! —exclamó el impetuoso J.-T. Maston.

—Pero la guerra —dijo Barbicane—, la guerra es imposible en las circunstancias actuales, y transcurrirán muchos años todavía antes de que nuestros cañones retumben sobre un campo de batalla. Por tanto, hay que tomar una decisión y buscar en otro orden de ideas un alimento a la actividad que nos devora.

La asamblea presintió que su presidente iba a abordar el punto delicado. Y prestó más atención.

—Desde hace algunos meses, valientes colegas —prosiguió Barbicane—, me he preguntado si, dentro de los límites de nuestra especialidad, podríamos realizar alguna gran experiencia digna del siglo XIX, y si los progresos de la balística nos permitirían llevarla a buen término. Por eso, busqué, trabajé, calculé, y de mis estudios ha resultado la convicción de que debemos triunfar en una empresa que parecería impracticable en cualquier otro país. Este proyecto, largamente elaborado, va a ser el objeto de mi comunicación: es digno de ustedes, digno del pasado del Gun-Club y no podrá dejar de causar ruido en el mundo. Por tanto os ruego, mis valientes colegas, que me concedan toda su atención.

Un escalofrío recorrió la asamblea. Tras asegurar su sombrero sobre la cabeza con un gesto rápido. Barbicane continuó su discurso con voz tranquila.

—Mis valientes colegas, no hay ninguno de nosotros que no haya visto la Luna, o al menos que no haya oído hablar de ella. No les extrañe que venga a hablarles del astro de las noches. Quizá nos esté reservado ser los Colones de ese mundo desconocido. Compréndame, secúndenme con toda su fuerza, y yo les guiaré a su conquista, y su nombre se unirá a los nombres de los treinta y seis estados que forman este gran país de la Unión.

El vagón-proyectil

Este sería el vehículo destinado a transportar, a través del espacio, a los audaces aventureros. El proyectil debía ser llenado con una capa de agua destinada a soportar un disco de madera perfectamente estanco, que se deslizase sobre las paredes interiores del proyectil. Sobre esta auténtica balsa ocuparían su sitio los viajeros. La masa líquida estaba dividida por tabiques horizontales que el choque de la partida debía romper sucesivamente uno tras otro. Entonces, cada capa, de agua, escapando por tubos de desagüe hacia la parte superior del proyectil, conseguía de este modo hacer de resorte. Indudablemente, los viajeros experimentarían un retroceso violento tras la total salida de la masa líquida, pero el choque debía expulsar toda aquella agua en menos de un segundo, y el proyectil recuperaría enseguida su peso normal.

Esto es lo que había imaginado el presidente del Gun-Club, y de esa forma pensaba haber resuelto la grave cuestión del retroceso. Por lo demás, este trabajo, inteligentemente comprendido por los ingenieros fue maravillosamente ejecutado. Una vez producido el efecto, y expulsada fuera el agua, los viajeros podían librarse fácilmente de los tabiques rotos y desmontar el disco móvil que los soportaba en el momento de la partida.

En cuanto a las paredes superiores del proyectil, estaban revestidas de un espeso acolchado de cuero. Los tubos de salida disimulados sobre ese acolchado no permitían siquiera sospechar su existencia. Así pues, se habían tomado todas las precauciones imaginables para amortiguar el primer choque.

A fin de no superar el peso asignado, se había disminuido algo el espesor de las paredes y reforzado su parte inferior, que debía soportar toda la violencia de los gases.

Se penetraba por una estrecha abertura practicada en las paredes del cono que se cerraba herméticamente por medio de una placa de aluminio, retenida en el interior por potentes tornillos de presión. Por tanto, los viajeros podrían salir a voluntad de su prisión móvil, una vez que hubieran alcanzado el astro de las noches.

Pero no bastaba con ir, había que ver en ruta. Nada más fácil. En efecto, bajo el acolchado se encontraban cuatro ventanillas de cristal lenticular de gran espesor. Los viajeros podrían observar durante su trayecto, la Tierra que dejaban, la Luna a la que se acercaban, y los espacios constelados del cielo.

Recipientes sólidamente sujetos estaban destinados a contener el agua y los víveres necesarios para los viajeros; estos podían incluso hacer el fuego y la luz mediante gas almacenado en un recipiente especial bajo una presión de varias atmósferas. Bastaba con girar una tuerca, y durante seis horas aquel gas debía iluminar y calentar el confortable vehículo.

Como se ve, no faltaban en él las cosas esenciales para la vida e incluso el bienestar. Además, gracias a los instintos de Michel Ardan, lo agradable vino a unirse a lo útil en forma de objetos de arte; habría hecho de su proyectil un auténtico taller de artista, si hubiera tenido espacio suficiente. Por lo demás, se engañaría quien supusiera que tres personas iban a encontrarse estrechas en aquella torre de metal que permitía a sus huéspedes cierta libertad de movimiento. No hubieran estado más a sus anchas en el más confortable vagón de los Estados Unidos.

Una vez resuelta la cuestión de los víveres y de la iluminación, quedaba la cuestión del aire. Era evidente que el aire encerrado en el proyectil no bastaría durante cuatro días a la respiración de los viajeros. Barbicane y sus dos compañeros, y dos perros que contaba llevar, debían consumir oxígeno renovando el aire del proyectil. ¿Cómo? Por un procedimiento muy simple, indicado por Michel Ardan durante la discusión del mitin.

¿Qué pasa en el acto de la respiración? Un fenómeno muy simple. El hombre absorbe el oxígeno del aire, eminentemente idóneo para mantener la vida, y rechaza el ázoe intacto. El aire espirado ha perdido cerca del cincuenta por ciento de su oxigeno, y contiene entonces un volumen casi igual de ácido carbónico, producto definitivo de la combustión de los elementos de la sangre por el oxígeno inspirado. Por lo tanto, ocurre que en un medio cerrado, y tras cierto tiempo, todo el oxígeno del aire queda reemplazado por el ácido carbónico.

A partir de ese momento, el problema se reducía a lo siguiente: habiéndose conservado intacto el ázoe: 1.º, rehacer el oxígeno absorbido; 2.º, destruir el ácido carbónico espirado. Nada más fácil mediante clorato de potasa y la potasa cáustica.

Combinando estos dos medios, estaban seguros de devolver al aire viciado todas sus cualidades vivificantes. Es lo que los químicos habían experimentado con éxito. Pero, todo hay que decirlo, sea cual fuere su precisión científica, se ignoraba por completo cómo iban a soportarla los hombres.

Esa fue la observación hecha en la sesión en que se abordó este grave problema. Michel Ardan no quería poner en duda la posibilidad de vivir en medio de ese aire ficticio, y se ofreció para hacer una prueba antes de la partida. Pero el honor de intentarla fue enérgicamente exigido por J.-T. Maston.

—Dado que yo no parto —dijo el valiente artillero—, lo menos que puedo hacer es habitar el proyectil durante ocho días.

Habría sido difícil negárselo. Tuvieron que rendirse a sus deseos.

A su disposición se puso una cantidad suficiente de clorato de potasa y de potasa cáustica, con víveres para ocho días; luego, después de haber estrechado la mano de sus amigos, el 12 de noviembre, a las seis de la mañana, tras haber recomendado expresamente que nadie abriera su prisión antes del día veinte, a las seis de la tarde, se deslizó en el proyectil cuya placa de abertura fue herméticamente cerrada.

¿Qué pasó durante esos ocho días? Imposible dar cuenta de ello. El espesor de las paredes del proyectil impedía a cualquier ruido interior llegar fuera.

El 20 de noviembre, a las seis en punto, se retiró la placa de entrada. Sus amigos no dejaban de hallarse algo inquietos. Pero pronto se tranquilizaron al oír una jovial voz que lanzaba un hurra formidable.

Inmediatamente después el secretario del Gun-Club apareció en la cima del cono en una actitud triunfal. ¡Había engordado!
`;

const testInitialQuestions = [
  {
    id: 1,
    question: '¿Cómo había conseguido su fortuna Barbicane?',
    options: [
      'Como director de la artillería',
      'En el comercio de madera',
      'Gracias a sus ideas e invenciones',
      'Como presidente del Gun-Club',
    ],
    correctAnswer: 'En el comercio de madera',
  },
  {
    id: 2,
    question: 'Barbicane:',
    options: [
      'Era alto y delgado',
      'Era bajo y enérgico',
      'Nadie sabe ciertamente como era su imperturbable fisonomía',
      'Su talla era mediana',
    ],
    correctAnswer: 'Su talla era mediana',
  },
  {
    id: 3,
    question: 'Los miembros del Gun-Club eran amantes de:',
    options: [
      'Las peleas',
      'Las guerras',
      'El ruido',
      'La ciencia',
    ],
    correctAnswer: 'La ciencia',
  },
  {
    id: 4,
    question: 'El proyectil debía ser llenado con:',
    options: [
      'Madera perfecta de un estanco',
      'Discos de metal',
      'Personas',
      'Agua',
    ],
    correctAnswer: 'Agua',
  },
  {
    id: 5,
    question: '¿Qué revestimiento encontramos en las paredes superiores del proyectil?',
    options: [
      'Aluminio',
      'Cuero',
      'Agua',
      'Madera',
    ],
    correctAnswer: 'Cuero',
  },
  {
    id: 6,
    question: 'Para no superar el peso asignado del cohete:',
    options: [
      'Se emplearía mucha madera de calidad',
      'Se crearían capas de agua',
      'Se había disminuido el espesor de las paredes',
      'Se utilizaban gases especiales',
    ],
    correctAnswer: 'Se había disminuido el espesor de las paredes',
  },
  {
    id: 7,
    question: 'El cierre hermético de la puerta se conseguía con:',
    options: [
      'Un acolchado de cuero',
      'Una placa de aluminio',
      'Un disco de madera',
      'Un disco de acero',
    ],
    correctAnswer: 'Una placa de aluminio',
  },
  {
    id: 8,
    question: '¿Cuántas ventanillas tenía el cohete?',
    options: [
      'Ninguna',
      '2',
      '4',
      '6',
    ],
    correctAnswer: '4',
  },
  {
    id: 9,
    question: '¿Cómo se proporcionaría luz y calor durante el viaje?',
    options: [
      'Mediante un gas',
      'Gracias a recipientes especiales',
      'Con utensilios de metal',
      'Mediante una olla a presión',
    ],
    correctAnswer: 'Mediante un gas',
  },
  {
    id: 10,
    question: '¿Cuántas personas viajarían en el cohete?',
    options: [
      '2',
      '3',
      '4',
      '6',
    ],
    correctAnswer: '3',
  },
  {
    id: 11,
    question: '¿De cuánto espacio dispondrían en el cohete?',
    options: [
      'Poco, por lo que finalmente no podría ir Michel Ardan',
      'Suficiente para llevar además un taller de artista',
      '10 veces más espacio del necesario',
      'Permitía cierta libertad de movimientos',
    ],
    correctAnswer: 'Permitía cierta libertad de movimientos',
  },
  {
    id: 12,
    question: 'El viaje duraría:',
    options: [
      '2 días',
      '4 días',
      '6 días',
      '8 días',
    ],
    correctAnswer: '8 días',
  },
  {
    id: 13,
    question: 'Además de esas personas, viajarían también:',
    options: [
      '2 perros',
      '3 perros',
      '4 perros',
      'Nadie más',
    ],
    correctAnswer: '2 perros',
  },
  {
    id: 14,
    question: 'El aire expulsado en la respiración perdía:',
    options: [
      'La mitad de su oxígeno',
      'Potasa',
      'Ácido carbónico',
      'Azoe',
    ],
    correctAnswer: 'Ácido carbónico',
  },
  {
    id: 15,
    question: '¿Cómo iban a resolver el problema de la renovación del oxígeno?',
    options: [
      'Mediante ollas que contenían un gas especial a presión',
      'Mediante ollas de oxígeno a presión',
      'Con compuestos de potasa',
      'Con ázoe',
    ],
    correctAnswer: 'Con compuestos de potasa',
  },
  {
    id: 16,
    question: '¿Cómo habían respondido hasta la fecha las personas que habían respirado oxígeno renovado?',
    options: [
      'Muy bien, y además engordaban',
      'Bien, pero perdían peso y salían con rasgos afilados',
      'No se sabía porque no se había experimentado jamás',
      'Salían viciados, pero mantenían todos sus miembros intactos',
    ],
    correctAnswer: 'No se sabía porque no se había experimentado jamás',
  },
  {
    id: 17,
    question: '¿Con qué fin J.-T. Maston se introdujo durante 8 días en el proyectil?',
    options: [
      'Para experimentar si podrían mantenerse comiendo potasas durante el viaje',
      'Para ver si se podría resistir el viaje mediante potajes y pasas',
      'Para ver si podía aguantar respirando dentro tanto tiempo',
      'Para batir el record de aguantar la respiración, que era de 4 días',
    ],
    correctAnswer: 'Para ver si podía aguantar respirando dentro tanto tiempo',
  },
  {
    id: 18,
    question: '¿Hizo solo dicha prueba?',
    options: [
      'Si, completamente solo',
      'Sí, pero escuchaba voces joviales',
      'No, le acompañó Michel Ardan',
      'No. le acompañaron unos perros',
    ],
    correctAnswer: 'Si, completamente solo',
  },
  {
    id: 19,
    question: '¿Cómo se comunicó con el exterior durante esos días?',
    options: [
      'Era imposible hacerlo, pues no podía escucharse ningún ruido desde el exterior',
      'Mediante voces joviales',
      'Mediante "hurras" formidables',
      'Hablando en voz alta',
    ],
    correctAnswer: 'Era imposible hacerlo, pues no podía escucharse ningún ruido desde el exterior',
  },
  {
    id: 20,
    question: '¿Cuál fue su reacción al salir del proyectil?',
    options: [
      'Triunfal, pues había batido el record mundial',
      'Triunfal, pues había batido el record del Gun-Club',
      'Triunfal, pues había engordado',
      'Ninguna de las respuestas anteriores es correcta',
    ],
    correctAnswer: 'Triunfal, pues había engordado',
  },
];


function Tests() {
  const { currentTheme } = useTheme();
  const { addTestResult, hasInitialTestBeenTaken } = useProgress(); // Obtener hasInitialTestBeenTaken
  const navigate = useNavigate();

  const [testState, setTestState] = useState('initial'); // 'initial', 'reading', 'questions', 'results'
  const [startTime, setStartTime] = useState(null);
  const startTimeRef = useRef(null); // Usar ref para el tiempo de inicio
  const [readingSpeed, setReadingSpeed] = useState(0);
  const [memorizationSpeed, setMemorizationSpeed] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [adjustedCorrectCount, setAdjustedCorrectCount] = useState(0);
  const [vmPercentage, setVmPercentage] = useState(0);
  const [showError, setShowError] = useState(false); // Estado para mostrar mensaje de error

  useEffect(() => {
    // Si el test inicial ya fue tomado, ir a la página de progreso
    if (hasInitialTestBeenTaken()) {
      setTestState('completed'); // Nuevo estado para indicar que ya se completó
    }
  }, [hasInitialTestBeenTaken]);

  const handleStartReading = () => {
    setTestState('reading');
    setStartTime(Date.now());
    startTimeRef.current = Date.now(); // Guardar en la ref
  };

  const handleAnswerChange = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
    setShowError(false); // Ocultar error si el usuario empieza a responder
  };

  const handleShowResults = () => {
    // Validar que todas las preguntas estén respondidas
    const allQuestionsAnswered = testInitialQuestions.every(q => userAnswers.hasOwnProperty(q.id));
    if (!allQuestionsAnswered) {
      setShowError(true);
      return;
    }

    const endTime = Date.now();
    const timeTakenMs = endTime - startTimeRef.current;
    const timeTakenSeconds = timeTakenMs / 1000;

    // Calcular palabras por minuto (V)
    const wordsInText = testInitialText.split(/\s+/).filter(word => word.length > 0).length;
    const wordsPerMinute = (wordsInText / timeTakenSeconds) * 60;

    // Calcular Vm (Velocidad de Memorización)
    let correctAnswers = 0;
    testInitialQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctAnswers++;
      }
    });

    // Aplicar la regla de los 5 aciertos por azar (20 preguntas, 4 opciones = 25% de azar)
    const adjustedCorrectAnswers = Math.max(0, correctAnswers - 5);
    const totalAdjustedQuestions = 15; // 20 - 5
    const vmPercentageCalc = (adjustedCorrectAnswers / totalAdjustedQuestions) * 100;
    const vm = (wordsPerMinute * vmPercentageCalc) / 100;

    setReadingSpeed(wordsPerMinute.toFixed(2));
    setMemorizationSpeed(vm.toFixed(2));
    setCorrectCount(correctAnswers);
    setAdjustedCorrectCount(adjustedCorrectAnswers);
    setVmPercentage(vmPercentageCalc.toFixed(2));

    // Guardar el resultado del test en el contexto de progreso
    addTestResult({
      name: 'Inicial', // Nombre del test
      V: parseFloat(wordsPerMinute.toFixed(2)),
      Vm: parseFloat(vm.toFixed(2)),
      date: new Date().toISOString(), // Fecha y hora del test
    });

    setTestState('results');
  };

  // Esta función ya no se usará para repetir el test inicial
  // const handleRetakeTest = () => {
  //   setTestState('initial');
  //   setStartTime(null);
  //   startTimeRef.current = null;
  //   setReadingSpeed(0);
  //   setMemorizationSpeed(0);
  //   setCorrectCount(0);
  //   setUserAnswers({});
  //   setAdjustedCorrectCount(0);
  //   setVmPercentage(0);
  // };

  return (
    <div className="page-content">
      <h2>Tests de Lectura</h2>

      {testState === 'initial' && (
        <>
          <h3>Test del Test Inicial ({testInitialText.split(/\s+/).filter(word => word.length > 0).length} palabras)</h3>
          <p>
            Este test te ayudará a determinar tu velocidad de lectura inicial y tu capacidad de memorización.
            Lee el texto a continuación y, cuando termines, haz clic en "FIN". Luego, responde las preguntas.
          </p>
          <button onClick={handleStartReading} className="save-button">
            Comenzar Test
          </button>
        </>
      )}

      {testState === 'reading' && (
        <>
          <h3>Texto del Test Inicial ({testInitialText.split(/\s+/).filter(word => word.length > 0).length} palabras)</h3>
          <div className="test-text-area">
            {testInitialText.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button onClick={() => setTestState('questions')} className="save-button" style={{ marginTop: '20px' }}>
            FIN
          </button>
        </>
      )}

      {testState === 'questions' && (
        <>
          <h3>Preguntas de Comprensión</h3>
          <div className="questions-list">
            {testInitialQuestions.map((q) => (
              <div key={q.id} className="question-item">
                <p>{q.id}. {q.question}</p>
                <div className="options">
                  {q.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerChange(q.id, option)}
                      className={userAnswers[q.id] === option ? 'selected' : ''}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {showError && (
            <p style={{ color: 'red', marginTop: '10px' }}>Por favor, responde todas las preguntas antes de ver los resultados.</p>
          )}
          <button onClick={handleShowResults} className="save-button" style={{ marginTop: '20px' }}>
            Ver Resultados
          </button>
        </>
      )}

      {testState === 'results' && (
        <div className="test-results">
          <h3>Resultados del Test Inicial</h3>
          <p>Velocidad de Lectura (V): <strong>{readingSpeed} ppm</strong></p>
          <p>Velocidad de Memorización (Vm): <strong>{memorizationSpeed} ppm</strong></p>
          <p>Respuestas Correctas: <strong>{correctCount} / {testInitialQuestions.length}</strong></p>
          <p>Aciertos Ajustados (considerando azar): <strong>{adjustedCorrectCount} / 15</strong></p>
          <p>Porcentaje de Vm: <strong>{vmPercentage}%</strong></p>
          <button onClick={() => navigate('/progreso')} className="save-button" style={{ marginTop: '20px' }}>
            Ver Progreso
          </button>
        </div>
      )}

      {testState === 'completed' && (
        <div className="test-results">
          <h3>Test Inicial Completado</h3>
          <p>Ya has completado el test inicial. Puedes ver tus resultados en la sección de Progreso.</p>
          <button onClick={() => navigate('/progreso')} className="save-button" style={{ marginTop: '20px' }}>
            Ver Progreso
          </button>
        </div>
      )}
    </div>
  );
}

export default Tests;
