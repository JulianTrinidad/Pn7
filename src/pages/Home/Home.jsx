/* ══════════════════════════════════════════════════════════════
   COMPONENTE: Página Principal (Home) con Scroll por Secciones
   Enfoque: Entrenador Personal (Personal Trainer)
   Incluye Inicio, Sobre Mí, Programas y Contacto.
   Todos los textos están en español con datos dummy
   marcados como 🔧 MODIFICABLE.
   ══════════════════════════════════════════════════════════════ */

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  ArrowRight,
  Dumbbell,
  Users,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Target,
  MessageCircle,
} from "lucide-react";
import testimonials from "../../data/testimonials";
import About from "../About/About";
import Programs from "../Programs/Programs";
import Contact from "../Contact/Contact";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";

/* ══ SUB-COMPONENTE: HERO SECTION ══ */
function HeroSection({ neonUnlocked, onUnlock }) {
  const { theme } = useTheme();

  return (
    <section className="hero">
      {/* Imagen principal de fondo del Hero */}
      <div className="hero__background">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600" /* 🔧 MODIFICABLE */
          alt="Entrenamiento Personal en Acción" /* 🔧 MODIFICABLE */
          loading="eager"
        />
      </div>

      {/* Overlay con degradado para legibilidad */}
      <div className="hero__overlay" />

      <div className="hero__content">
        {/* Etiqueta / Badge superior */}
        <div className="hero__tag">
          <span>Entrenamiento Personalizado 1 a 1</span>
        </div>

        {/* 🔧 MODIFICABLE: Título principal */}
        <h1 className="hero__title">
          Transformá Tu Cuerpo Con <span>Estrategia Real</span>
        </h1>

        {/* 🔧 MODIFICABLE: Subtítulo descriptivo */}
        <p className="hero__subtitle">
          Olvidate de las rutinas genéricas que no dan resultados. Planificación científica,
          seguimiento diario biomecánico y nutrición flexible diseñada para tu estilo de vida.
        </p>

        {/* Botones de acción */}
        <div className="hero__actions">
          <Link to="/programas" className="hero__cta">
            Ver Programas
            <ArrowRight size={20} />
          </Link>
          <Link to="/contacto" className="btn btn-secondary btn-lg" style={{ padding: "1rem 2.2rem", borderRadius: "50px", fontWeight: 700 }}>
            Agendar Consulta Gratis
          </Link>
        </div>
      </div>

      {/* ══ Barra de estadísticas en la parte inferior ══ */}
      <div className="hero__stats">
        {/* 🔧 MODIFICABLE: Cada estadística (número y etiqueta) */}
        <div className="hero__stat-item">
          <span className="hero__stat-number">500+</span>
          <span className="hero__stat-label">Alumnos Transformados</span>
        </div>
        <div className="hero__stat-item">
          <span className="hero__stat-number">100%</span>
          <span className="hero__stat-label">Planes Personalizados</span>
        </div>
        <div className="hero__stat-item">
          <span className="hero__stat-number">8+</span>
          <span className="hero__stat-label">Años de Experiencia</span>
        </div>
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN DE BENEFICIOS ══ */
function BenefitsSection() {
  const { theme } = useTheme();
  const [benefitIdx, setBenefitIdx] = useState(0);

  /* 🔧 MODIFICABLE: Array de beneficios del coaching 1 a 1 */
  const benefits = [
    {
      id: 1,
      icon: <Target size={32} />,
      title: "Rutinas 100% a Tu Medida", // 🔧 MODIFICABLE
      description:
        "Diseñadas estratégicamente para tu nivel de experiencia, anatomía y tiempo disponible, ya sea que entrenes en un gimnasio comercial o desde tu casa.", // 🔧 MODIFICABLE
    },
    {
      id: 2,
      icon: <Sparkles size={32} />,
      title: "Nutrición Flexible y Sostenible", // 🔧 MODIFICABLE
      description:
        "Olvídate de pasar hambre con dietas extremas. Aprenderás a nutrir tu cuerpo combinando tus comidas favoritas mientras optimizás tu pérdida de grasa y ganancia muscular.", // 🔧 MODIFICABLE
    },
    {
      id: 3,
      icon: <MessageCircle size={32} />,
      title: "Seguimiento Diario por WhatsApp", // 🔧 MODIFICABLE
      description:
        "Revisión técnica en video, corrección de postura al instante, ajustes de carga y motivación constante conmigo en tu bolsillo para no estancarte jamás.", // 🔧 MODIFICABLE
    },
  ];

  const currentBenefit = benefits[benefitIdx];

  return (
    <section className="benefits">
      <div className="benefits__container">
        {/* Encabezado de sección */}
        <div className="benefits__header">
          <span className="section-tag">Metodología 1 a 1</span>
          <h2 className="section-title">¿Por qué entrenar con un Personal Trainer?</h2>
          <p className="section-subtitle">
            {theme === "neon"
              ? "Navegá entre nuestros 3 pilares metodológicos usando las flechas de desplazamiento horizontal."
              : "El 90% de las personas abandonan el gimnasio al entrenar solas por falta de guía y estancamiento. Con mi sistema tendrás dirección clara y resultados garantizados."}
          </p>
        </div>

        {theme === "neon" ? (
          <div className="neon-pilar-carousel">
            <div className="neon-carousel-controls">
              <button
                className="neon-carousel-arrow"
                onClick={() => setBenefitIdx((prev) => (prev > 0 ? prev - 1 : benefits.length - 1))}
                aria-label="Beneficio anterior"
              >
                <ChevronLeft size={32} />
              </button>
              <span className="neon-carousel-counter">
                Pilar {benefitIdx + 1} de {benefits.length}
              </span>
              <button
                className="neon-carousel-arrow"
                onClick={() => setBenefitIdx((prev) => (prev < benefits.length - 1 ? prev + 1 : 0))}
                aria-label="Beneficio siguiente"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <article key={currentBenefit.id} className="benefit-card benefit-card--neon-single">
              <div className="benefit-card__icon">{currentBenefit.icon}</div>
              <h3 className="benefit-card__title">{currentBenefit.title}</h3>
              <p className="benefit-card__desc">{currentBenefit.description}</p>
            </article>
          </div>
        ) : (
          /* Grilla de tarjetas de beneficios */
          <div className="benefits__grid">
            {benefits.map((benefit) => (
              <article key={benefit.id} className="benefit-card">
                <div className="benefit-card__icon">{benefit.icon}</div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__desc">{benefit.description}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN DE TESTIMONIOS ══ */
function TestimonialsSection() {
  const { theme } = useTheme();

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        {/* Encabezado de sección */}
        <div className="testimonials__header">
          <span className="section-tag">Casos de Éxito</span>
          {/* 🔧 MODIFICABLE: Título y subtítulo */}
          <h2 className="section-title">Lo que dicen mis alumnos</h2>
          <p className="section-subtitle">
            Historias reales de personas ordinarias logrando transformaciones extraordinarias con nuestro acompañamiento 1 a 1.
          </p>
        </div>

        {/* Grilla de tarjetas de testimonio */}
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              {/* Estrellas de valoración */}
              <div className="testimonial-card__stars">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="testimonial-card__star"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="testimonial-card__text">"{item.text}"</p>

              {/* Autor del testimonio */}
              <div className="testimonial-card__author">
                <img
                  src={item.images?.[theme] || item.image}
                  alt={item.name}
                  className="testimonial-card__avatar"
                  loading="lazy"
                />
                <div className="testimonial-card__info">
                  <h4 className="testimonial-card__name">{item.name}</h4>
                  <span className="testimonial-card__role">{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enlace a la sección Sobre Mí */}
        <div className="testimonials__footer">
          <a href="#sobre-mi" className="testimonials__link">
            Conocé más sobre mi filosofía y trayectoria
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══ COMPONENTE PRINCIPAL: HOME (UNA SOLA PÁGINA CON SCROLL) ══ */
export default function Home() {
  const location = useLocation();

  /* Efecto para scrollear automáticamente cuando cambia el hash (#inicio, #sobre-mi, etc.) */
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="one-page-scroll">
      {/* ══ CARTA 1: INICIO (HERO) ══ */}
      <div className="deck-card-wrapper" id="wrapper-inicio">
        <section id="inicio" className="deck-card">
          <HeroSection />
        </section>
      </div>

      {/* ══ CARTA 2: BENEFICIOS ══ */}
      <div className="deck-card-wrapper" id="wrapper-beneficios">
        <section id="beneficios" className="deck-card">
          <BenefitsSection />
        </section>
      </div>

      {/* ══ CARTAS 3, 4, 5, 6: SOBRE MÍ (Contiene sus propios wrappers de cartas divididas) ══ */}
      <div id="sobre-mi" className="about-wrapper">
        <About />
      </div>

      {/* ══ CARTA 7: PROGRAMAS ══ */}
      <div className="deck-card-wrapper" id="wrapper-programas">
        <section id="programas" className="deck-card">
          <Programs />
        </section>
      </div>

      {/* ══ CARTA 8: COMENTARIOS / TESTIMONIOS ══ */}
      <div className="deck-card-wrapper" id="wrapper-testimonios">
        <div className="deck-card testimonials-card">
          <TestimonialsSection />
        </div>
      </div>

      {/* ══ CARTA 9: CONTACTO ══ */}
      <div className="deck-card-wrapper" id="wrapper-contacto">
        <section id="contacto" className="deck-card">
          <Contact />
        </section>
      </div>
    </main>
  );
}
