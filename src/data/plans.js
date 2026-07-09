/* ══════════════════════════════════════════════════════════════
   ARCHIVO DE DATOS: Programas de Entrenamiento
   6 Programas con imagen, precios en ARS y USD, y detalles.
   Todos los valores están marcados como 🔧 MODIFICABLE.
   ══════════════════════════════════════════════════════════════ */

import cuadro1Img from "../assets/cuadro1.jpeg";
import cuadro2Img from "../assets/cuadro2.png";

// 🔧 MODIFICABLE: Los 6 programas de entrenamiento
export const PROGRAMS = [
  {
    id: "strength-hypertrophy",
    name: "Strength & Hypertrophy Program", // 🔧 MODIFICABLE
    duration: "8 Weeks", // 🔧 MODIFICABLE
    shortDesc: "Enfocado en el desarrollo de fuerza y aumento de masa muscular.", // 🔧 MODIFICABLE
    image: cuadro1Img, // 🔧 MODIFICABLE
    priceARS: 45000, // 🔧 MODIFICABLE
    priceUSD: 55, // 🔧 MODIFICABLE
    popular: true,
    features: [
      "Rutina de fuerza periodizada",
      "Progresión de cargas semanal",
      "Videos de técnica de cada ejercicio",
      "Guía de nutrición para volumen",
      "Soporte por WhatsApp",
    ],
    details: {
      fullDescription: "Programa de 8 semanas diseñado para maximizar tu fuerza y desarrollo muscular a través de periodización científica. Incluye rutinas de empuje, tirón y piernas con progresión de cargas, técnicas de intensidad avanzadas y una guía nutricional enfocada en superávit calórico controlado para ganar masa magra sin acumular grasa innecesaria.",
      sessionsPerWeek: 5,
      level: "Intermedio - Avanzado",
      objectives: [
        "Aumentar fuerza máxima en movimientos compuestos",
        "Hipertrofia muscular con periodización ondulante",
        "Mejorar conexión mente-músculo",
        "Optimizar recuperación entre sesiones",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Fase de Adaptación", description: "Evaluación de 1RM, técnica de ejercicios base y acondicionamiento general." },
        { week: "Semana 3-5", focus: "Fase de Acumulación", description: "Aumento progresivo de volumen e intensidad. Trabajo de hipertrofia con series de 8-12 reps." },
        { week: "Semana 6-7", focus: "Fase de Intensificación", description: "Reducción de volumen, aumento de cargas. Series de 3-6 reps para fuerza máxima." },
        { week: "Semana 8", focus: "Deload y Re-evaluación", description: "Semana de descarga activa y testeo de nuevas marcas personales." },
      ],
    },
  },
  {
    id: "fat-loss-conditioning",
    name: "Fat Loss & Conditioning", // 🔧 MODIFICABLE
    duration: "6 Weeks", // 🔧 MODIFICABLE
    shortDesc: "Quema grasa de forma efectiva combinando fuerza y cardio estratégico.", // 🔧 MODIFICABLE
    image: cuadro2Img, // 🔧 MODIFICABLE
    priceARS: 40000, // 🔧 MODIFICABLE
    priceUSD: 50, // 🔧 MODIFICABLE
    popular: false,
    features: [
      "Circuitos de alta intensidad (HIIT)",
      "Plan nutricional en déficit controlado",
      "Cardio estratégico programado",
      "Seguimiento semanal de medidas",
      "Ajuste de macros cada 2 semanas",
    ],
    details: {
      fullDescription: "Programa de 6 semanas enfocado en pérdida de grasa corporal manteniendo la mayor cantidad de masa muscular posible. Combina entrenamiento de fuerza con circuitos metabólicos y cardio estratégico. Incluye plan nutricional personalizado en déficit calórico controlado con ajuste de macros cada 2 semanas según tu progreso.",
      sessionsPerWeek: 5,
      level: "Todos los niveles",
      objectives: [
        "Reducir porcentaje de grasa corporal",
        "Mantener masa muscular durante el déficit",
        "Mejorar capacidad cardiovascular",
        "Crear hábitos alimentarios sostenibles",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Activación Metabólica", description: "Establecimiento de línea base, inicio de déficit moderado y adaptación a circuitos." },
        { week: "Semana 3-4", focus: "Intensificación", description: "Aumento de intensidad en circuitos, incorporación de HIIT y ajuste de macros." },
        { week: "Semana 5-6", focus: "Fase Final y Resultados", description: "Máxima intensidad, fotos comparativas y planificación de mantenimiento." },
      ],
    },
  },
  {
    id: "functional-training",
    name: "Functional Training", // 🔧 MODIFICABLE
    duration: "8 Weeks", // 🔧 MODIFICABLE
    shortDesc: "Mejorá tu movilidad, estabilidad y rendimiento en movimientos reales.", // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800", // 🔧 MODIFICABLE
    priceARS: 42000, // 🔧 MODIFICABLE
    priceUSD: 52, // 🔧 MODIFICABLE
    popular: false,
    features: [
      "Ejercicios multiarticulares funcionales",
      "Trabajo de core y estabilidad",
      "Rutinas de movilidad y flexibilidad",
      "Prevención de lesiones",
      "Adaptable a gym o casa",
    ],
    details: {
      fullDescription: "Programa de 8 semanas centrado en mejorar tu capacidad funcional para la vida diaria y el deporte. Trabaja patrones de movimiento fundamentales como empuje, tirón, sentadilla, bisagra y carga con énfasis en estabilidad, movilidad y control corporal. Ideal para quienes buscan moverse mejor y sin dolor.",
      sessionsPerWeek: 4,
      level: "Todos los niveles",
      objectives: [
        "Mejorar patrones de movimiento fundamentales",
        "Aumentar movilidad articular y flexibilidad",
        "Fortalecer core y estabilizadores",
        "Prevenir lesiones deportivas y cotidianas",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Evaluación y Movilidad", description: "Screening de movimiento, trabajo correctivo y establecimiento de bases." },
        { week: "Semana 3-5", focus: "Construcción Funcional", description: "Progresión en ejercicios compuestos funcionales con carga progresiva." },
        { week: "Semana 6-8", focus: "Integración y Rendimiento", description: "Circuitos funcionales complejos, trabajo de potencia y re-evaluación." },
      ],
    },
  },
  {
    id: "bodyweight-home",
    name: "Bodyweight Home Program", // 🔧 MODIFICABLE
    duration: "6 Weeks", // 🔧 MODIFICABLE
    shortDesc: "Entrená desde tu casa sin equipamiento, con resultados reales.", // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800", // 🔧 MODIFICABLE
    priceARS: 30000, // 🔧 MODIFICABLE
    priceUSD: 38, // 🔧 MODIFICABLE
    popular: false,
    features: [
      "Sin equipamiento necesario",
      "Rutinas de 30-45 minutos",
      "Videos explicativos de cada ejercicio",
      "Progresiones para todos los niveles",
      "Plan nutricional incluido",
    ],
    details: {
      fullDescription: "Programa de 6 semanas diseñado para entrenar desde casa sin necesidad de equipamiento. Utiliza progresiones de calistenia y peso corporal para desarrollar fuerza, resistencia y definición muscular. Cada sesión dura entre 30 y 45 minutos, ideal para quienes tienen poco tiempo o no pueden ir al gimnasio.",
      sessionsPerWeek: 4,
      level: "Principiante - Intermedio",
      objectives: [
        "Desarrollar fuerza con peso corporal",
        "Mejorar resistencia muscular y cardiovascular",
        "Aprender progresiones de calistenia",
        "Crear el hábito de entrenar en casa",
      ],
      roadmap: [
        { week: "Semana 1-2", focus: "Fundamentos", description: "Ejercicios básicos de calistenia, trabajo de core y movilidad." },
        { week: "Semana 3-4", focus: "Progresión", description: "Variantes más desafiantes, aumento de volumen y circuitos." },
        { week: "Semana 5-6", focus: "Avanzado", description: "Ejercicios complejos, supersets y evaluación de progreso." },
      ],
    },
  },
  {
    id: "sport-performance",
    name: "Sport Performance", // 🔧 MODIFICABLE
    duration: "10 Weeks", // 🔧 MODIFICABLE
    shortDesc: "Programa deportivo para llevar tu rendimiento atlético al siguiente nivel.", // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800", // 🔧 MODIFICABLE
    priceARS: 55000, // 🔧 MODIFICABLE
    priceUSD: 68, // 🔧 MODIFICABLE
    popular: false,
    features: [
      "Periodización deportiva específica",
      "Trabajo de potencia y velocidad",
      "Prevención de lesiones deportivas",
      "Planificación de competencia",
      "Nutrición para rendimiento",
    ],
    details: {
      fullDescription: "Programa de 10 semanas orientado a atletas y deportistas que buscan mejorar su rendimiento específico. Incluye trabajo de fuerza máxima, potencia, velocidad, agilidad y resistencia deportiva con periodización adaptada a tu calendario competitivo. Nutrición enfocada en performance y recuperación óptima.",
      sessionsPerWeek: 5,
      level: "Intermedio - Avanzado",
      objectives: [
        "Aumentar potencia y explosividad",
        "Mejorar velocidad y agilidad",
        "Optimizar recuperación entre entrenamientos",
        "Periodizar según calendario deportivo",
      ],
      roadmap: [
        { week: "Semana 1-3", focus: "Base de Fuerza", description: "Construcción de fuerza máxima y acondicionamiento general." },
        { week: "Semana 4-6", focus: "Potencia y Velocidad", description: "Trabajo pliométrico, sprints y ejercicios de potencia." },
        { week: "Semana 7-9", focus: "Integración Deportiva", description: "Ejercicios específicos del deporte, simulación de competencia." },
        { week: "Semana 10", focus: "Taper y Peak", description: "Reducción de volumen para llegar en pico de forma." },
      ],
    },
  },
  {
    id: "coaching-premium",
    name: "Coaching 1:1 Premium", // 🔧 MODIFICABLE
    duration: "Mensual", // 🔧 MODIFICABLE
    shortDesc: "Acompañamiento total: entreno, nutrición y seguimiento diario personalizado.", // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800", // 🔧 MODIFICABLE
    priceARS: 85000, // 🔧 MODIFICABLE
    priceUSD: 105, // 🔧 MODIFICABLE
    popular: true,
    features: [
      "Plan de entrenamiento 100% personalizado",
      "Guía nutricional con ajuste de macros",
      "Seguimiento diario por WhatsApp",
      "Chequeo de técnica en video semanal",
      "Prioridad absoluta en consultas",
      "Evaluación corporal mensual",
    ],
    details: {
      fullDescription: "El plan más completo de coaching individualizado. Incluye planificación de entrenamiento 100% personalizada, guía nutricional con cálculo y ajuste de macros, seguimiento diario por WhatsApp con respuesta prioritaria, revisión de técnica en video semanal y evaluación corporal mensual. Es como tenerme en tu bolsillo 24/7.",
      sessionsPerWeek: 5,
      level: "Todos los niveles",
      objectives: [
        "Transformación física completa",
        "Optimizar nutrición con macros personalizados",
        "Corregir técnica con análisis en video",
        "Lograr resultados visibles mes a mes",
      ],
      roadmap: [
        { week: "Semana 1", focus: "Diagnóstico Completo", description: "Evaluación corporal, análisis de dieta, test de fuerza y establecimiento de línea base." },
        { week: "Semana 2-3", focus: "Ejecución y Ajuste", description: "Implementación del plan, ajuste semanal de macros y chequeos de técnica en video." },
        { week: "Semana 4", focus: "Progresión y Resultados", description: "Evaluación de progreso, fotos comparativas y planificación del siguiente ciclo." },
      ],
    },
  },
];
