/* ══════════════════════════════════════════════════════════════
   ARCHIVO DE DATOS: Testimonios de Alumnos (Personal Trainer)
   Ahora incluye imágenes diferenciadas para cada uno de los 3 temas:
   - energy (Estilo Atlético / Hardcore)
   - premium (Estilo Lujo / Ejecutivo)
   - neon (Estilo High-Tech / Cyberpunk)
   Todos los valores están marcados como 🔧 MODIFICABLE.
   ══════════════════════════════════════════════════════════════ */

const testimonials = [
  {
    id: 1, // 🔧 MODIFICABLE
    name: "Martín Gómez", // 🔧 MODIFICABLE
    role: "Alumno de Coaching Online (Bajó 12 kg)", // 🔧 MODIFICABLE
    text: "Empezar a entrenar con Alex fue la mejor decisión. Bajé 12 kg de grasa en 4 meses y gané muchísima fuerza sin sufrir con dietas extremas ni pasar hambre. Su seguimiento por WhatsApp es la clave.", // 🔧 MODIFICABLE
    rating: 5, // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", // Fallback
    images: {
      energy: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", // Atlético
      premium: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200", // Ejecutivo
      neon: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200", // Tech / Cyber
    },
  },
  {
    id: 2, // 🔧 MODIFICABLE
    name: "Sofía Martínez", // 🔧 MODIFICABLE
    role: "Alumna VIP 1 a 1 (Ganó 4 kg de músculo)", // 🔧 MODIFICABLE
    text: "El seguimiento personalizado es increíble. Le mando videos haciendo sentadillas y me corrige la postura al instante. Me dio una seguridad y confianza enorme para levantar peso que antes no tenía.", // 🔧 MODIFICABLE
    rating: 5, // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200", // Fallback
    images: {
      energy: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      premium: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
      neon: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
    },
  },
  {
    id: 3, // 🔧 MODIFICABLE
    name: "Nicolás Fernández", // 🔧 MODIFICABLE
    role: "Alumno Rutina Personalizada", // 🔧 MODIFICABLE
    text: "Llevaba años estancado intentando armarme rutinas solo por internet. Con el plan estructurado de Alex rompí mis récords en banca y peso muerto en solo 8 semanas. ¡100% recomendado!", // 🔧 MODIFICABLE
    rating: 5, // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200", // Fallback
    images: {
      energy: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
      premium: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      neon: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200",
    },
  },
  {
    id: 4, // 🔧 MODIFICABLE
    name: "Camila Peralta", // 🔧 MODIFICABLE
    role: "Alumna Online (Entrenamiento en Casa)", // 🔧 MODIFICABLE
    text: "Trabajo 10 horas al día y pensé que nunca tendría tiempo. Alex me diseñó rutinas ultra eficientes de 45 minutos con mancuernas para entrenar en casa y los cambios físicos son espectaculares.", // 🔧 MODIFICABLE
    rating: 5, // 🔧 MODIFICABLE
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200", // Fallback
    images: {
      energy: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      premium: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
      neon: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200",
    },
  },
];

export default testimonials;
