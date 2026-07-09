/* ══════════════════════════════════════════════════════════════
   COMPONENTE: Página Principal (Home)
   Estructura: Hero → Programas → Footer
   ══════════════════════════════════════════════════════════════ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ArrowRight, X, Clock, Calendar, BarChart3, Target, Check, Award } from "lucide-react";
import { PROGRAMS } from "../../data/plans";
import headerImg from "../../assets/header.jpeg";
import coachingImg from "../../assets/1.1.jpeg";
import sobremiImg from "../../assets/sobremi.jpeg";

import "./Home.css";

/* ══ FUNCIÓN: FORMATEAR PRECIO ══ */
function formatPrice(amount, currency) {
  if (currency === "ARS") {
    return `$${amount.toLocaleString("es-AR")}`;
  }
  return `$${amount.toLocaleString("en-US")}`;
}

/* ══ SUB-COMPONENTE: HERO SECTION ══ */
function HeroSection() {
  return (
    <section className="hero">
      {/* Imagen principal de fondo del Hero */}
      <div className="hero__background">
        <img
          src={headerImg} /* 🔧 MODIFICABLE */
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
          PROGRESA EN TU ENTRENAMIENTO CON <span>ESTRATEGIA REAL</span>
        </h1>

        {/* 🔧 MODIFICABLE: Subtítulo descriptivo */}
        <p className="hero__subtitle">
          Dejá de entrenar sin rumbo. Seguí un plan estructurado y alcanzá tus objetivos.
        </p>

        {/* Botones de acción */}
        <div className="hero__actions">
          <a href="#programas" className="hero__cta">
            Ver Programas
            <ArrowRight size={20} />
          </a>
          <a href="#coaching-1-1" className="btn btn-secondary btn-lg" style={{ padding: "1rem 2.2rem", borderRadius: "50px", fontWeight: 700 }}>
            COACHING 1:1
          </a>
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

/* ══ SUB-COMPONENTE: CARD DE PROGRAMA ══ */
function ProgramCard({ program, onClick }) {
  return (
    <article className="program-card" onClick={() => onClick(program)}>
      {/* Imagen de fondo */}
      <div className="program-card__image-wrapper">
        <img
          src={program.image}
          alt={program.name}
          className="program-card__image"
          loading="lazy"
        />
      </div>

      {/* Overlay oscuro para legibilidad */}
      <div className="program-card__overlay" />

      {/* Badge popular */}
      {program.popular && (
        <span className="program-card__badge">⭐ Popular</span>
      )}

      {/* Contenido de texto sobre la imagen */}
      <div className="program-card__content">
        <h3 className="program-card__title">{program.name}</h3>
        <span className="program-card__duration">{program.duration}</span>
        <p className="program-card__desc">{program.shortDesc}</p>

        {/* Precios */}
        <div className="program-card__prices">
          <span className="program-card__price">
            ${program.priceARS.toLocaleString("es-AR")} ARS
          </span>
          <span className="program-card__price-divider">|</span>
          <span className="program-card__price">
            ${program.priceUSD} USD
          </span>
        </div>
      </div>
    </article>
  );
}

/* ══ SUB-COMPONENTE: MODAL DE DETALLE DE PROGRAMA ══ */
function ProgramModal({ program, onClose }) {
  if (!program) return null;

  const details = program.details || {};

  /* Cerrar al hacer clic en el overlay */
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  /* Prevenir scroll del body cuando el modal está abierto */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="program-modal__overlay" onClick={handleOverlayClick}>
      <div className="program-modal__container">
        {/* Botón Cerrar */}
        <button className="program-modal__close" onClick={onClose} aria-label="Cerrar detalle">
          <X size={24} />
        </button>

        {/* Header del modal con imagen */}
        <div className="program-modal__hero">
          <img src={program.image} alt={program.name} className="program-modal__hero-img" />
          <div className="program-modal__hero-overlay" />
          <div className="program-modal__hero-content">
            {program.popular && <span className="program-modal__badge">⭐ Más Popular</span>}
            <h2 className="program-modal__title">{program.name}</h2>
            <span className="program-modal__duration">{program.duration}</span>
          </div>
        </div>

        {/* Precios */}
        <div className="program-modal__prices">
          <div className="program-modal__price-item">
            <span className="program-modal__price-amount">${program.priceARS.toLocaleString("es-AR")}</span>
            <span className="program-modal__price-currency">ARS</span>
          </div>
          <div className="program-modal__price-divider" />
          <div className="program-modal__price-item">
            <span className="program-modal__price-amount">${program.priceUSD}</span>
            <span className="program-modal__price-currency">USD</span>
          </div>
        </div>

        {/* Descripción completa */}
        <div className="program-modal__section">
          <p className="program-modal__full-desc">{details.fullDescription}</p>
        </div>

        {/* Stats Rápidos */}
        <div className="program-modal__stats">
          <div className="program-modal__stat">
            <Clock className="program-modal__stat-icon" size={20} />
            <span className="program-modal__stat-value">{program.duration}</span>
            <span className="program-modal__stat-label">Duración</span>
          </div>
          <div className="program-modal__stat">
            <Calendar className="program-modal__stat-icon" size={20} />
            <span className="program-modal__stat-value">{details.sessionsPerWeek} sesiones</span>
            <span className="program-modal__stat-label">Por semana</span>
          </div>
          <div className="program-modal__stat">
            <BarChart3 className="program-modal__stat-icon" size={20} />
            <span className="program-modal__stat-value">{details.level}</span>
            <span className="program-modal__stat-label">Nivel</span>
          </div>
        </div>

        {/* Qué incluye */}
        <div className="program-modal__section">
          <h3 className="program-modal__section-title">Qué incluye</h3>
          <ul className="program-modal__features">
            {program.features.map((feature, i) => (
              <li key={i} className="program-modal__feature">
                <Check className="program-modal__feature-icon" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Objetivos */}
        {details.objectives && details.objectives.length > 0 && (
          <div className="program-modal__section">
            <h3 className="program-modal__section-title">
              <Target size={18} />
              Objetivos del programa
            </h3>
            <ul className="program-modal__objectives">
              {details.objectives.map((obj, i) => (
                <li key={i} className="program-modal__objective">{obj}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Roadmap */}
        {details.roadmap && details.roadmap.length > 0 && (
          <div className="program-modal__section">
            <h3 className="program-modal__section-title">Ruta del programa</h3>
            <div className="program-modal__roadmap">
              {details.roadmap.map((phase, i) => (
                <div key={i} className="program-modal__phase">
                  <div className="program-modal__phase-dot" />
                  <div className="program-modal__phase-content">
                    <span className="program-modal__phase-week">{phase.week}</span>
                    <span className="program-modal__phase-focus">{phase.focus}</span>
                    <p className="program-modal__phase-desc">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="program-modal__cta">
          <a
            href="https://wa.me/5491123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="program-modal__cta-btn"
          >
            Consultar por este programa
          </a>
        </div>
      </div>
    </div>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN DE PROGRAMAS ══ */
function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section className="programs-section">
      <div className="programs-section__container">
        {/* Encabezado */}
        <div className="programs-section__header">
          <span className="section-tag">Nuestros Planes</span>
          <h2 className="section-title programs-section__title">PROGRAMAS DE ENTRENAMIENTO</h2>
          <p className="section-subtitle">
            Elegí el programa que mejor se adapte a tus objetivos. Hacé click en cualquiera para ver todos los detalles.
          </p>
        </div>

        {/* Grilla de 6 cards */}
        <div className="programs-section__grid">
          {PROGRAMS.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={setSelectedProgram}
            />
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )}
    </section>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN COACHING 1:1 ══ */
function CoachingSection() {
  return (
    <section className="coaching-section">
      <div className="coaching-section__container">
        {/* Columna Izquierda: Contenido */}
        <div className="coaching-section__content">
          <span className="section-tag">Modalidad Exclusiva</span>
          <h2 className="section-title coaching-section__title">COACHING 1:1</h2>
          
          <p className="coaching-section__text">
            en esta modalidad de entrenamiento vas a poder acceder a una rutina 100% personalizada y adaptada a vos. Entrenamiento, nutrición, seguimiento constante
          </p>

          <ul className="coaching-section__features">
            <li className="coaching-section__feature-item">
              <Check className="coaching-section__feature-icon" size={20} />
              <div>
                <strong>Rutina 100% Personalizada:</strong> Planificación diseñada a medida según tu anatomía, nivel actual y lugar de entrenamiento.
              </div>
            </li>
            <li className="coaching-section__feature-item">
              <Check className="coaching-section__feature-icon" size={20} />
              <div>
                <strong>Guía de Nutrición Adaptada:</strong> Estrategia de alimentación con cálculo y ajuste periódico para optimizar tu rendimiento.
              </div>
            </li>
            <li className="coaching-section__feature-item">
              <Check className="coaching-section__feature-icon" size={20} />
              <div>
                <strong>Seguimiento Constante por WhatsApp:</strong> Contacto directo para despejar dudas, mantener la motivación y ajustar cargas.
              </div>
            </li>
            <li className="coaching-section__feature-item">
              <Check className="coaching-section__feature-icon" size={20} />
              <div>
                <strong>Revisión de Técnica en Video:</strong> Análisis biomecánico de tu ejecución para prevenir lesiones y maximizar resultados.
              </div>
            </li>
          </ul>

          <div className="coaching-section__actions">
            <a
              href="https://wa.me/5491123456789?text=Hola%20Santi,%20quiero%20empezar%20con%20el%20Coaching%201:1"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta"
            >
              Solicitar Coaching 1:1
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Columna Derecha: Imagen 1.1 */}
        <div className="coaching-section__image-wrapper">
          <img
            src={coachingImg}
            alt="Coaching 1:1 Personalizado con Santi Ferrer"
            className="coaching-section__image"
            loading="lazy"
          />
          <div className="coaching-section__badge">
            <Check size={20} className="coaching-section__badge-icon" />
            <div>
              <strong>100% Adaptado</strong>
              <span>A Tu Estilo de Vida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN SOBRE MÍ ══ */
function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section__container">
        {/* Columna Izquierda: Imagen */}
        <div className="about-section__image-wrapper">
          <img
            src={sobremiImg}
            alt="Santi Ferrer - Entrenador y Atleta Híbrido"
            className="about-section__image"
            loading="lazy"
          />
          <div className="about-section__badge">
            <Award size={22} className="about-section__badge-icon" />
            <div>
              <strong>Santi Ferrer</strong>
              <span>Entrenador & Atleta Híbrido</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido y Biografía */}
        <div className="about-section__content">
          <span className="section-tag">Conocé a Tu Coach</span>
          <h2 className="section-title about-section__title">SOBRE MÍ</h2>
          
          <div className="about-section__bio">
            <p className="about-section__lead">
              Soy Santi Ferrer, Entrenador, atleta y creador de contenido.
            </p>
            <p>
              El deporte me acompaña desde chico, empece a entrenar y nuncá paré. Estudié actividad física y deporte, soy competidor de kick boxing y atleta híbrido.
            </p>
            <p>
              Como entrenador me especializo en desarrollo de fuerza, rendimiento deportivo y deportes de combate. Mi enfoque combina evidencia científica con experiencia práctica para ayudar a atletas y personas activas a alcanzar su máximo potencial.
            </p>
            <p className="about-section__quote">
              sé lo que es entrenar sin un método y no ver resultados, por eso mi objetivo es ayudarte a entrenar con propósito, con una base solida y un progreso que realmente puedas ver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ COMPONENTE PRINCIPAL: HOME ══ */
export default function Home() {
  const location = useLocation();

  /* Efecto para scrollear automáticamente cuando cambia el hash (#inicio, #programas, #coaching-1-1, #sobre-mi) */
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

      {/* ══ CARTA 2: PROGRAMAS DE ENTRENAMIENTO ══ */}
      <div className="deck-card-wrapper" id="wrapper-programas">
        <section id="programas" className="deck-card">
          <ProgramsSection />
        </section>
      </div>

      {/* ══ CARTA 3: COACHING 1:1 ══ */}
      <div className="deck-card-wrapper" id="wrapper-coaching">
        <section id="coaching-1-1" className="deck-card">
          <CoachingSection />
        </section>
      </div>

      {/* ══ CARTA 4: SOBRE MÍ ══ */}
      <div className="deck-card-wrapper" id="wrapper-sobremi">
        <section id="sobre-mi" className="deck-card">
          <AboutSection />
        </section>
      </div>
    </main>
  );
}
