/* ══════════════════════════════════════════════════════════════
   ARCHIVO DE DATOS: Planes de Entrenamiento por Categorías
   5 Categorías especializadas: Fuerza, Running, Híbrido, Deportivo, Pérdida de Grasa.
   Todos los valores están marcados como 🔧 MODIFICABLE
   para facilitar la personalización del contenido.
   ══════════════════════════════════════════════════════════════ */

// 🔧 MODIFICABLE: Lista de categorías disponibles
export const CATEGORIES = [
  { id: "todos", label: "Todos los Planes" },
  { id: "fuerza", label: "Fuerza & Hipertrofia" },
  { id: "running", label: "Running & Resistencia" },
  { id: "hibrido", label: "Híbrido & Funcional" },
  { id: "deportivo", label: "Rendimiento Deportivo" },
  { id: "perdida-grasa", label: "Pérdida de Grasa" },
];

// 🔧 MODIFICABLE: Los 3 planes originales que había al principio (exclusivos para el tema Energy)
export const CORE_PLANS = [
  {
    id: "rutina-personalizada",
    category: "fuerza",
    name: "Rutina Personalizada",
    description: "Planificación mensual adaptada (Gym o Casa) con videos explicativos en app y soporte por email.",
    priceARS: 25000,
    priceUSD: 35,
    popular: false,
    features: [
      "Rutina mensual adaptada a tu objetivo",
      "Videos demostrativos de cada ejercicio",
      "Actualización cada 30 días",
      "Soporte por email para dudas",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "4 semanas",
      sessionsPerWeek: 4,
      level: "Todos los niveles",
      objectives: [
        "Aprender técnica correcta de ejercicios básicos",
        "Establecer rutina de entrenamiento sostenible",
        "Mejorar composición corporal general",
        "Ganar confianza en el gimnasio",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Evaluación y adaptación", description: "Evaluación de tu nivel actual, movilidad y objetivos. Rutina de adaptación con ejercicios fundamentales." },
        { week: "Semana 2-3", focus: "Construcción de base", description: "Progresión en cargas e intensidad. Incorporación de ejercicios compuestos y trabajo accesorio." },
        { week: "Semana 4", focus: "Intensificación y evaluación", description: "Aumento de volumen e intensidad. Re-evaluación de marcas y ajuste del plan para el siguiente mes." },
      ],
    },
  },
  {
    id: "coaching-online-1a1",
    category: "fuerza",
    name: "Coaching Online 1 a 1",
    description: "Planificación progresiva, guía nutricional flexible adaptada a macros y acompañamiento diario por WhatsApp.",
    priceARS: 45000,
    priceUSD: 65,
    popular: true,
    features: [
      "Plan de entrenamiento 100% personalizado",
      "Guía nutricional y ajuste de macros",
      "Chequeo de técnica en video semanal",
      "Contacto directo 24/7 por WhatsApp",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "4 semanas (renovable)",
      sessionsPerWeek: 5,
      level: "Intermedio-Avanzado",
      objectives: [
        "Maximizar ganancia muscular con periodización científica",
        "Optimizar nutrición con cálculo de macros personalizado",
        "Corregir patrones de movimiento con análisis en video",
        "Lograr resultados visibles en el primer mes",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Diagnóstico completo", description: "Evaluación corporal, análisis de dieta actual, test de fuerza y establecimiento de línea base." },
        { week: "Semana 2-3", focus: "Ejecución y ajuste", description: "Implementación del plan personalizado. Ajuste semanal de macros según respuesta. Chequeos de técnica en video." },
        { week: "Semana 4", focus: "Progresión y resultados", description: "Evaluación de progreso, fotos comparativas, ajuste de cargas y planificación del siguiente ciclo." },
      ],
    },
  },
  {
    id: "vip-coaching-hibrido",
    category: "deportivo",
    name: "VIP Coaching Híbrido",
    description: "Todo el acompañamiento online + 4 sesiones presenciales al mes (o videollamadas en vivo) y evaluación biomecánica.",
    priceARS: 85000,
    priceUSD: 125,
    popular: false,
    features: [
      "Todo lo incluido en Coaching Online",
      "4 sesiones presenciales al mes en CABA",
      "Evaluación corporal y biomecánica",
      "Prioridad absoluta en consultas",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "4 semanas (renovable)",
      sessionsPerWeek: 5,
      level: "Avanzado",
      objectives: [
        "Alcanzar rendimiento deportivo de élite",
        "Evaluación biomecánica presencial con tecnología",
        "Nutrición de precisión para competición o transformación",
        "Acompañamiento presencial + online combinado",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Evaluación presencial", description: "Sesión presencial de evaluación biomecánica completa. Tests de fuerza, movilidad y composición corporal con tecnología." },
        { week: "Semana 2-3", focus: "Entrenamiento híbrido intensivo", description: "2 sesiones presenciales + 3 online por semana. Correcciones en tiempo real y ajuste nutricional semanal." },
        { week: "Semana 4", focus: "Evaluación y reprogramación", description: "Sesión presencial de re-evaluación. Análisis de progreso con métricas objetivas y planificación del siguiente mes." },
      ],
    },
  },
];

// 🔧 MODIFICABLE: Array completo de planes categorizados (para temas Premium y Neón)
const plans = [
  /* ══ CATEGORÍA 1: FUERZA & HIPERTROFIA ══ */
  {
    id: "hipertrofia-estetica", // 🔧 MODIFICABLE
    category: "fuerza",
    name: "Hipertrofia Estética 1 a 1", // 🔧 MODIFICABLE
    description: "Enfoque científico para aumentar masa muscular y simetría con sobrecarga progresiva.", // 🔧 MODIFICABLE
    priceARS: 45000,
    priceUSD: 65,
    popular: true, // ⭐ Plan destacado de la categoría
    features: [
      "Rutina personalizada de hipertrofia",
      "Selección biomecánica de ejercicios",
      "Análisis en video semanal de técnica",
      "Acompañamiento 24/7 por WhatsApp",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "8 semanas",
      sessionsPerWeek: 5,
      level: "Intermedio",
      objectives: [
        "Aumentar masa muscular con enfoque en simetría",
        "Dominar la conexión mente-músculo",
        "Aplicar sobrecarga progresiva de forma inteligente",
        "Mejorar proporciones estéticas (hombros, espalda, piernas)",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Base de hipertrofia", description: "Volumen moderado con ejercicios multiarticulares. Establecimiento de cargas de referencia." },
        { week: "Semana 3-4", focus: "Volumen progresivo", description: "Incremento del volumen total. Incorporación de técnicas de intensidad: drop sets y series mecánicas." },
        { week: "Semana 5-6", focus: "Especialización muscular", description: "Énfasis en grupos musculares rezagados. Mayor aislamiento y trabajo de detalle." },
        { week: "Semana 7-8", focus: "Peak y deload", description: "Semana de máxima intensidad seguida de deload activo. Evaluación fotográfica y de medidas." },
      ],
    },
  },
  {
    id: "powerbuilding-avanzado", // 🔧 MODIFICABLE
    category: "fuerza",
    name: "Powerbuilding Avanzado", // 🔧 MODIFICABLE
    description: "Fuerza máxima en ejercicios básicos (sentadilla, banca, peso muerto) más volumen estético.", // 🔧 MODIFICABLE
    priceARS: 55000,
    priceUSD: 80,
    popular: false,
    features: [
      "Periodización de fuerza y potencia",
      "Programación por RPE / RIR en app",
      "Soporte prioritario y videollamada quincenal",
      "Planificación nutricional para ganancia limpia",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "12 semanas",
      sessionsPerWeek: 5,
      level: "Avanzado",
      objectives: [
        "Aumentar fuerza máxima en sentadilla, banca y peso muerto",
        "Combinar volumen estético con fuerza bruta",
        "Dominar programación por RPE/RIR",
        "Lograr PRs (récords personales) en los 3 básicos",
      ],
      roadmap: [
        { week: "Semana 1-3", focus: "Acumulación de volumen", description: "Alto volumen con intensidad moderada (RPE 6-7). Construcción de base de trabajo." },
        { week: "Semana 4-6", focus: "Intensificación", description: "Reducción de volumen, aumento de intensidad (RPE 7-8). Trabajo de fuerza en rangos de 3-5 reps." },
        { week: "Semana 7-9", focus: "Realización de fuerza", description: "Picos de intensidad (RPE 8-9). Preparación para tests de máximos. Trabajo accesorio reducido." },
        { week: "Semana 10-12", focus: "Testing y transición", description: "Semanas de test de 1RM. Deload. Análisis de resultados y planificación del siguiente mesociclo." },
      ],
    },
  },
  {
    id: "fuerza-autogestionada", // 🔧 MODIFICABLE
    category: "fuerza",
    name: "Rutina Fuerza Autogestionada", // 🔧 MODIFICABLE
    description: "Plan mensual estructurado para quienes entrenan por su cuenta y buscan dirección clara.", // 🔧 MODIFICABLE
    priceARS: 25000,
    priceUSD: 35,
    popular: false,
    features: [
      "Rutina mensual de musculación",
      "Videos demostrativos de cada ejercicio",
      "Actualización de rutina cada 30 días",
      "Soporte por email para dudas",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "4 semanas",
      sessionsPerWeek: 4,
      level: "Principiante-Intermedio",
      objectives: [
        "Aprender a entrenar de forma autónoma",
        "Construir una base sólida de fuerza general",
        "Entender la progresión de cargas",
        "Crear el hábito de entrenamiento constante",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Aprendizaje técnico", description: "Videos explicativos de cada ejercicio. Cargas ligeras enfocadas en técnica perfecta." },
        { week: "Semana 2-3", focus: "Progresión lineal", description: "Aumento gradual de cargas sesión a sesión. Registro en app de cada entrenamiento." },
        { week: "Semana 4", focus: "Evaluación y rotación", description: "Test de marcas. Se arma la rutina del mes siguiente con ejercicios nuevos." },
      ],
    },
  },

  /* ══ CATEGORÍA 2: RUNNING & RESISTENCIA ══ */
  {
    id: "coaching-running-10k", // 🔧 MODIFICABLE
    category: "running",
    name: "Coaching 10K & Medio Maratón", // 🔧 MODIFICABLE
    description: "Planificación de pasadas, fondos y fuerza específica para corredores sin lesiones.", // 🔧 MODIFICABLE
    priceARS: 40000,
    priceUSD: 60,
    popular: true, // ⭐ Plan destacado de la categoría
    features: [
      "Plan semanal de carreras por ritmos y zonas",
      "2 sesiones de fuerza preventiva para runners",
      "Ajuste según tus tiempos de competición",
      "Seguimiento por Strava y WhatsApp directo",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "8 semanas",
      sessionsPerWeek: 5,
      level: "Intermedio",
      objectives: [
        "Mejorar tiempo en 10K o preparar medio maratón",
        "Desarrollar resistencia aeróbica sin lesiones",
        "Incorporar fuerza preventiva para corredores",
        "Aprender a correr por zonas de frecuencia cardíaca",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Base aeróbica", description: "Carreras suaves en zona 2. Fortalecimiento de tren inferior y core. Evaluación de técnica de carrera." },
        { week: "Semana 3-4", focus: "Trabajo de ritmos", description: "Introducción de intervalos y fartlek. Pasadas a ritmo objetivo de carrera." },
        { week: "Semana 5-6", focus: "Fondos largos", description: "Aumento progresivo de distancia en salida larga semanal. Trabajo de umbral anaeróbico." },
        { week: "Semana 7-8", focus: "Afinamiento y carrera", description: "Reducción de volumen pre-competencia. Simulacro de carrera. Estrategia de ritmo para el día D." },
      ],
    },
  },
  {
    id: "acondicionamiento-cardio", // 🔧 MODIFICABLE
    category: "running",
    name: "Acondicionamiento & VO2 Max", // 🔧 MODIFICABLE
    description: "Optimiza tu capacidad aeróbica y resistencia general con intervalos e impacto controlado.", // 🔧 MODIFICABLE
    priceARS: 30000,
    priceUSD: 45,
    popular: false,
    features: [
      "Sesiones de intervalos metabólicos (HIIT/LISS)",
      "Adaptable a cinta, bici o aire libre",
      "Monitoreo de frecuencia cardíaca",
      "Soporte y dudas por WhatsApp",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "6 semanas",
      sessionsPerWeek: 4,
      level: "Todos los niveles",
      objectives: [
        "Mejorar capacidad aeróbica (VO2 máx)",
        "Quemar grasa manteniendo masa muscular",
        "Aumentar resistencia general para vida diaria",
        "Aprender a usar zonas de frecuencia cardíaca",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Adaptación cardiovascular", description: "Sesiones de baja intensidad (LISS). Monitoreo de FC en reposo y ejercicio. Establecimiento de zonas." },
        { week: "Semana 3-4", focus: "Intervalos progresivos", description: "Introducción de HIIT con ratio trabajo/descanso controlado. Combinación con sesiones LISS." },
        { week: "Semana 5-6", focus: "Optimización metabólica", description: "Intervalos de alta intensidad avanzados. Test de VO2 estimado. Evaluación de mejora en marcas." },
      ],
    },
  },

  /* ══ CATEGORÍA 3: HÍBRIDO & FUNCIONAL ══ */
  {
    id: "atleta-hibrido-360", // 🔧 MODIFICABLE
    category: "hibrido",
    name: "Atleta Híbrido 360°", // 🔧 MODIFICABLE
    description: "El balance perfecto: levantamiento de pesas, calistenia y acondicionamiento metabólico.", // 🔧 MODIFICABLE
    priceARS: 50000,
    priceUSD: 75,
    popular: true, // ⭐ Plan destacado de la categoría
    features: [
      "Rutina híbrida de fuerza + cardio funcional",
      "Desarrollo de agilidad, potencia y resistencia",
      "Guía nutricional para alto rendimiento",
      "Revisión de técnica y contacto 24/7",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "8 semanas",
      sessionsPerWeek: 5,
      level: "Intermedio-Avanzado",
      objectives: [
        "Desarrollar fuerza, potencia y resistencia simultáneamente",
        "Dominar tanto ejercicios con barra como calistenia",
        "Mejorar composición corporal de forma integral",
        "Aumentar capacidad de trabajo general (GPP)",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Evaluación y base híbrida", description: "Tests de fuerza, calistenia y cardio. Establecimiento de línea base en las 3 áreas." },
        { week: "Semana 3-4", focus: "Desarrollo de fuerza", description: "Énfasis en levantamientos pesados + skill work de calistenia. Metcons cortos." },
        { week: "Semana 5-6", focus: "Potencia y acondicionamiento", description: "Trabajo explosivo, pliometría y WODs de intensidad. Mantenimiento de fuerza." },
        { week: "Semana 7-8", focus: "Integración y testing", description: "Sesiones que combinan las 3 modalidades. Re-test comparativo con semana 1." },
      ],
    },
  },
  {
    id: "funcional-movilidad-casa", // 🔧 MODIFICABLE
    category: "hibrido",
    name: "Funcional & Movilidad en Casa", // 🔧 MODIFICABLE
    description: "Entrenamientos dinámicos de 45 minutos con mínimo equipamiento para quemar grasa y ganar agilidad.", // 🔧 MODIFICABLE
    priceARS: 28000,
    priceUSD: 40,
    popular: false,
    features: [
      "Rutinas rápidas con mancuernas o peso corporal",
      "Enfoque en postura y flexibilidad articular",
      "Ideal para agendas laborales exigentes",
      "Acceso completo a la app móvil",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "4 semanas",
      sessionsPerWeek: 4,
      level: "Principiante",
      objectives: [
        "Entrenar efectivamente con equipamiento mínimo",
        "Mejorar postura y flexibilidad articular",
        "Quemar grasa con sesiones de 45 minutos",
        "Crear hábito de entrenamiento compatible con agenda laboral",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Adaptación con peso corporal", description: "Circuitos funcionales básicos. Énfasis en movilidad de cadera, hombros y columna." },
        { week: "Semana 2-3", focus: "Progresión con elementos", description: "Incorporación de mancuernas o bandas elásticas. Aumento de intensidad y complejidad de movimientos." },
        { week: "Semana 4", focus: "Desafío final", description: "Sesiones avanzadas con combinaciones complejas. Evaluación de progreso en movilidad y fuerza." },
      ],
    },
  },

  /* ══ CATEGORÍA 4: RENDIRIMIENTO DEPORTIVO ══ */
  {
    id: "prep-fisica-deportiva", // 🔧 MODIFICABLE
    category: "deportivo",
    name: "Preparación Física Deportiva", // 🔧 MODIFICABLE
    description: "Fútbol, Tenis, Pádel, Rugby: potencia explosiva, velocidad de reacción y prevención de lesiones.", // 🔧 MODIFICABLE
    priceARS: 48000,
    priceUSD: 70,
    popular: true, // ⭐ Plan destacado de la categoría
    features: [
      "Trabajo de agilidad, saltos y frenadas",
      "Fortalecimiento de tendones y articulaciones",
      "Adaptado al calendario de tus partidos",
      "Análisis en video de movimientos deportivos",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "8 semanas",
      sessionsPerWeek: 4,
      level: "Intermedio-Avanzado",
      objectives: [
        "Desarrollar potencia explosiva específica para tu deporte",
        "Prevenir lesiones con fortalecimiento articular",
        "Mejorar velocidad de reacción y agilidad",
        "Optimizar rendimiento en competencia",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Evaluación deportiva", description: "Tests específicos del deporte. Análisis de movimientos en video. Identificación de puntos débiles." },
        { week: "Semana 3-4", focus: "Fuerza base deportiva", description: "Trabajo de fuerza orientado al deporte. Fortalecimiento de tendones y articulaciones críticas." },
        { week: "Semana 5-6", focus: "Potencia y velocidad", description: "Ejercicios explosivos, pliometría y agilidad. Simulación de situaciones de juego." },
        { week: "Semana 7-8", focus: "Integración competitiva", description: "Sesiones que replican demandas del deporte. Tapering pre-competencia. Re-evaluación de marcas." },
      ],
    },
  },
  {
    id: "vip-rendimiento-biomecanico", // 🔧 MODIFICABLE
    category: "deportivo",
    name: "VIP Rendimiento + Testeo", // 🔧 MODIFICABLE
    description: "Sesiones presenciales en CABA o videollamada en vivo con evaluación biomecánica avanzada.", // 🔧 MODIFICABLE
    priceARS: 85000,
    priceUSD: 125,
    popular: false,
    features: [
      "Todo lo incluido en Preparación Deportiva",
      "4 sesiones presenciales o en vivo por mes",
      "Evaluación con tecnología de salto y velocidad",
      "Contacto prioritario 365 días del año",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "4 semanas (renovable)",
      sessionsPerWeek: 5,
      level: "Avanzado",
      objectives: [
        "Evaluación biomecánica con tecnología avanzada",
        "Corrección de asimetrías y patrones de movimiento",
        "Programación de élite con sesiones presenciales",
        "Rendimiento máximo para competición o alto nivel",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Evaluación tecnológica", description: "Sesión presencial con tests de salto, velocidad y fuerza. Análisis biomecánico con video en cámara lenta." },
        { week: "Semana 2-3", focus: "Corrección y potenciación", description: "Sesiones presenciales + online enfocadas en corregir déficits encontrados. Trabajo específico de rendimiento." },
        { week: "Semana 4", focus: "Re-evaluación y progreso", description: "Nueva batería de tests. Comparativa con semana 1. Informe de rendimiento y planificación del siguiente ciclo." },
      ],
    },
  },

  /* ══ CATEGORÍA 5: PÉRDIDA DE GRASA & RECOMPOSICIÓN ══ */
  {
    id: "transformacion-metabolica-90", // 🔧 MODIFICABLE
    category: "perdida-grasa",
    name: "Transformación Metabólica 90 Días", // 🔧 MODIFICABLE
    description: "Quema grasa corporal manteniendo toda tu masa muscular con nutrición flexible sin pasar hambre.", // 🔧 MODIFICABLE
    priceARS: 45000,
    priceUSD: 65,
    popular: true, // ⭐ Plan destacado de la categoría
    features: [
      "Cálculo y ajuste semanal de macronutrientes",
      "Rutina de musculación metabólica eficiente",
      "Chequeos semanales de medidas y progreso",
      "Soporte motivacional diario por WhatsApp",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "12 semanas",
      sessionsPerWeek: 5,
      level: "Intermedio",
      objectives: [
        "Reducir porcentaje de grasa corporal significativamente",
        "Mantener toda la masa muscular durante el déficit",
        "Aprender nutrición flexible sin pasar hambre",
        "Lograr una transformación visible y sostenible",
      ],
      roadmap: [
        { week: "Semana 1-3", focus: "Fase de adaptación metabólica", description: "Déficit calórico moderado. Establecimiento de macros base. Rutina de musculación para preservar músculo." },
        { week: "Semana 4-6", focus: "Aceleración de resultados", description: "Ajuste de macros según respuesta. Incorporación de cardio estratégico. Chequeo semanal de medidas." },
        { week: "Semana 7-9", focus: "Fase de empuje", description: "Intensificación del déficit controlado. Refeed days estratégicos. Máxima adherencia nutricional." },
        { week: "Semana 10-12", focus: "Definición final y transición", description: "Últimos ajustes para máxima definición. Reverse diet gradual. Fotos finales y plan de mantenimiento." },
      ],
    },
  },
  {
    id: "reto-definicion-express", // 🔧 MODIFICABLE
    category: "perdida-grasa",
    name: "Reto Definición 4 Semanas", // 🔧 MODIFICABLE
    description: "Plan intensivo de choque para eventos especiales, vacaciones o romper estancamientos largos.", // 🔧 MODIFICABLE
    priceARS: 35000,
    priceUSD: 50,
    popular: false,
    features: [
      "Estrategia de déficit calórico controlado",
      "Rutina quemagrasa + cardio optimizado",
      "Guía de suplementación inteligente",
      "Resolución de dudas en menos de 12 hs",
    ],
    // Detalles extendidos del plan
    details: {
      duration: "4 semanas",
      sessionsPerWeek: 5,
      level: "Intermedio-Avanzado",
      objectives: [
        "Máxima definición en tiempo récord",
        "Protocolo de choque para romper estancamientos",
        "Estrategia nutricional agresiva pero segura",
        "Resultados rápidos para eventos especiales",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Shock metabólico", description: "Déficit agresivo con alto volumen de entrenamiento. Eliminación de alimentos procesados. Hidratación óptima." },
        { week: "Semana 2", focus: "Intensidad máxima", description: "Sesiones de alta intensidad + cardio HIIT. Ajuste de macros según peso y medidas. Suplementación estratégica." },
        { week: "Semana 3", focus: "Refinamiento", description: "Mantenimiento de intensidad. Refeed day controlado. Ajustes finos en la dieta según respuesta del cuerpo." },
        { week: "Semana 4", focus: "Peak week", description: "Protocolos de carga y depleción. Manipulación de agua y sodio (si aplica). Resultado final y fotos." },
      ],
    },
  },
];

export default plans;
