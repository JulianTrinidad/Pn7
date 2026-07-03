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
  },
];

export default plans;
