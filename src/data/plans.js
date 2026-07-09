/* ══════════════════════════════════════════════════════════════
   ARCHIVO DE DATOS: Planes de Entrenamiento
   3 Planes principales de coaching 1 a 1.
   Todos los valores están marcados como 🔧 MODIFICABLE
   para facilitar la personalización del contenido.
   ══════════════════════════════════════════════════════════════ */

// 🔧 MODIFICABLE: Los 3 planes principales
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
