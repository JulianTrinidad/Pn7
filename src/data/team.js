/* ══════════════════════════════════════════════════════════════
   ARCHIVO DE DATOS: Pilares de Metodología / Especialidades del Coach
   Ahora incluye imágenes diferenciadas para cada uno de los 3 temas:
   - energy (Estilo Atlético / Hardcore)
   - premium (Estilo Lujo / Boutique)
   - neon (Estilo High-Tech / Laboratorio Biomecánico)
   Todos los valores están marcados como 🔧 MODIFICABLE.
   ══════════════════════════════════════════════════════════════ */

const team = [
  {
    id: 1, // 🔧 MODIFICABLE
    name: "Composición Corporal & Hipertrofia", // 🔧 MODIFICABLE
    role: "Pilar 1: Ciencia de la Fuerza", // 🔧 MODIFICABLE
    bio: "Diseñamos tu programación con un enfoque científico y estructurado. Seleccionamos los ejercicios exactos, las series y el volumen de entrenamiento ideal para estimular la ganancia de masa muscular sin perder horas en el gimnasio.", // 🔧 MODIFICABLE
    certifications: [
      "Sobrecarga progresiva programada",
      "Optimización de volumen y frecuencia",
      "Técnica biomecánica precisa",
    ],
    specialties: [
      "Hipertrofia",
      "Fuerza",
      "Estética Corporal",
      "Definición",
    ],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400", // Fallback
    images: {
      energy: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400", // Hardcore lifting
      premium: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400", // Boutique studio training
      neon: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400", // Cyber / Neon lit gym
    },
  },
  {
    id: 2, // 🔧 MODIFICABLE
    name: "Nutrición Flexible & Metabolismo", // 🔧 MODIFICABLE
    role: "Pilar 2: Alimentación Inteligente", // 🔧 MODIFICABLE
    bio: "Olvídate del hambre y las dietas restrictivas imposibles de mantener. Aprendé a combinar tus macronutrientes para perder grasa de forma sostenible disfrutando de tus comidas favoritas y potenciar tu energía diaria.", // 🔧 MODIFICABLE
    certifications: [
      "Cálculo de macros adaptado a vos",
      "Estrategias sin prohibiciones extremas",
      "Educación nutricional sostenible",
    ],
    specialties: [
      "Pérdida de grasa",
      "Recomposición",
      "Energía",
      "Hábitos",
    ],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400", // Fallback
    images: {
      energy: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400", // Athletic fuel
      premium: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400", // Gourmet clean eating
      neon: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400", // Biohacking nutrition
    },
  },
  {
    id: 3, // 🔧 MODIFICABLE
    name: "Biomecánica & Corrección de Técnica", // 🔧 MODIFICABLE
    role: "Pilar 3: Seguridad & Rendimiento", // 🔧 MODIFICABLE
    bio: "El seguimiento por video te garantiza ejecutar cada movimiento perfecto. Evaluamos tu postura, rango de movimiento y mecánica articular para prevenir lesiones, eliminar molestias y asegurar que cada repetición cuente.", // 🔧 MODIFICABLE
    certifications: [
      "Análisis en video por WhatsApp",
      "Prevención y readaptación de lesiones",
      "Mejora de movilidad articular",
    ],
    specialties: [
      "Biomecánica",
      "Movilidad",
      "Postura",
      "Rendimiento",
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400", // Fallback
    images: {
      energy: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400", // Heavy squat analysis
      premium: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400", // Pilates/Personal training posture
      neon: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400", // Tech motion tracking
    },
  },
];

export default team;
