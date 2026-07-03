/* ══════════════════════════════════════════════════════════════
   COMPONENTE: Página Sobre Tu Coach (About)
   Enfoque: Entrenador Personal (Personal Trainer)
   Incluye Hero Banner, Historia del Coach, Pilares y Galería.
   Todas las fotografías cambian dinámicamente según el tema
   activo (energy, premium o neon).
   Todos los textos están en español con datos dummy marcados
   como 🔧 MODIFICABLE.
   ══════════════════════════════════════════════════════════════ */

import { useState } from "react";
import { Award, Sparkles, Target, Shield, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import team from "../../data/team";
import { useTheme } from "../../context/ThemeContext";
import "./About.css";

/* ══ SUB-COMPONENTE: HERO BANNER ══ */
function AboutHero() {
  const { theme } = useTheme();

  // 🔧 MODIFICABLE: Imágenes de fondo para el hero de Sobre Mí diferenciadas por tema
  const heroImages = {
    energy: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1200", // Atlético
    premium: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200", // Estudio Privado Ejecutivo
    neon: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200", // High-Tech Performance Lab
  };

  return (
    <section className="about-hero">
      {/* Imagen de fondo del hero */}
      <div className="about-hero__background">
        <img
          src={heroImages[theme] || heroImages.energy} /* 🔧 MODIFICABLE */
          alt="Personal Trainer en sesión" /* 🔧 MODIFICABLE */
          loading="eager"
        />
      </div>

      {/* Overlay oscuro */}
      <div className="about-hero__overlay" />

      {/* Contenido */}
      <div className="about-hero__content">
        <span className="about-hero__tag">Metodología 1 a 1</span>
        {/* 🔧 MODIFICABLE: Título del hero */}
        <h1 className="about-hero__title">
          Sobre Tu <span>Coach</span>
        </h1>
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN HISTORIA DEL COACH ══ */
function HistorySection() {
  const { theme } = useTheme();

  // 🔧 MODIFICABLE: Retratos del entrenador en acción deportiva diferenciados para cada tema
  const coachImages = {
    energy: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600", // Entrenador en gimnasio
    premium: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600", // Entrenador guiando sesión en gimnasio limpio
    neon: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600", // Bio-monitoring coaching lab
  };

  return (
    <section className="history">
      <div className="history__container">
        {/* Imagen del entrenador */}
        <div className="history__image-wrapper">
          <img
            src={coachImages[theme] || coachImages.energy} /* 🔧 MODIFICABLE */
            alt="Alex, Entrenador Personal" /* 🔧 MODIFICABLE */
            className="history__image"
            loading="lazy"
          />
          {/* Badge flotante con experiencia */}
          <div className="history__badge">
            <Award className="history__badge-icon" />
            <div>
              <strong>8+ Años</strong>
              <span>Transformando Vidas</span>
            </div>
          </div>
        </div>

        {/* Texto biográfico */}
        <div className="history__content">
          <span className="section-tag">Mi Filosofía</span>
          {/* 🔧 MODIFICABLE: Título de la historia */}
          <h2 className="section-title">No adivines más. Entrená con estrategia.</h2>

          {/* 🔧 MODIFICABLE: Párrafos biográficos */}
          <p className="history__text">
            Hace 8 años me di cuenta de que el 90% de las personas que van al
            gimnasio no ven resultados reales. Pasan meses saltando de rutina
            en rutina, comiendo poco o sin dirección, terminando frustrados o lesionados.
          </p>

          <p className="history__text">
            Por eso desarrollé mi sistema de coaching 1 a 1. No soy solo alguien
            que te cuenta repeticiones; soy tu estratega personal. Analizo tu
            biomecánica, adapto tu nutrición a tu estilo de vida real y te
            acompaño día a día para asegurar que cada semana progreses.
          </p>

          {/* Cifra de impacto final */}
          <div className="history__highlight">
            <Sparkles className="history__highlight-icon" />
            <p>
              &ldquo;El cuerpo ideal no se logra con sufrimiento extremo, sino con constancia y un plan diseñado específicamente para tu anatomía.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN PILARES DE METODOLOGÍA ══ */
function TeamSection() {
  const { theme } = useTheme();
  const [pilarIdx, setPilarIdx] = useState(0);

  const currentPilar = team[pilarIdx];

  return (
    <section className="team">
      <div className="team__container">
        {/* Encabezado de sección */}
        <div className="team__header">
          <span className="section-tag">Sistema de Coaching</span>
          {/* 🔧 MODIFICABLE: Título y subtítulo */}
          <h2 className="section-title">Pilares de Mi Metodología</h2>
          <p className="section-subtitle">
            {theme === "neon"
              ? "Explorá individualmente los 3 pilares clave de nuestro sistema científico desplazándote con las flechas."
              : "Un sistema científico e integral estructurado en 3 pilares clave para asegurar tu éxito desde el día 1."}
          </p>
        </div>

        {theme === "neon" ? (
          <div className="neon-pilar-carousel">
            <div className="neon-carousel-controls">
              <button
                className="neon-carousel-arrow"
                onClick={() => setPilarIdx((prev) => (prev > 0 ? prev - 1 : team.length - 1))}
                aria-label="Pilar anterior"
              >
                <ChevronLeft size={32} />
              </button>
              <span className="neon-carousel-counter">
                Pilar {pilarIdx + 1} de {team.length}
              </span>
              <button
                className="neon-carousel-arrow"
                onClick={() => setPilarIdx((prev) => (prev < team.length - 1 ? prev + 1 : 0))}
                aria-label="Pilar siguiente"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <article key={currentPilar.id} className="team-card team-card--neon-horizontal">
              <div className="team-card__horizontal-grid">
                {/* Imagen con overlay de especialidades */}
                <div className="team-card__image-wrapper">
                  <img
                    src={currentPilar.images?.[theme] || currentPilar.image}
                    alt={currentPilar.name}
                    className="team-card__image"
                    loading="eager"
                  />
                  <div className="team-card__overlay">
                    <div className="team-card__specialties">
                      {currentPilar.specialties.map((specialty, index) => (
                        <span key={index} className="team-card__specialty-tag">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Información del pilar */}
                <div className="team-card__body">
                  <span className="team-card__role-tag">{currentPilar.role}</span>
                  <h3 className="team-card__name">{currentPilar.name}</h3>
                  <p className="team-card__bio">{currentPilar.bio}</p>

                  <ul className="team-card__certifications">
                    {currentPilar.certifications.map((cert, index) => (
                      <li key={index} className="team-card__cert-item">
                        <CheckCircle size={18} />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        ) : (
          /* Grilla de tarjetas de pilares normal en 3 columnas */
          <div className="team__grid">
            {team.map((member) => (
              <article key={member.id} className="team-card">
                {/* Imagen con overlay de especialidades */}
                <div className="team-card__image-wrapper">
                  <img
                    src={member.images?.[theme] || member.image}
                    alt={member.name}
                    className="team-card__image"
                    loading="lazy"
                  />
                  {/* Overlay al hacer hover mostrando especialidades */}
                  <div className="team-card__overlay">
                    <div className="team-card__specialties">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="team-card__specialty-tag"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Información del pilar */}
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>

                  {/* Lista de certificaciones / puntos clave */}
                  <ul className="team-card__certifications">
                    {member.certifications.map((cert, index) => (
                      <li key={index} className="team-card__cert-item">
                        <CheckCircle size={14} />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: SECCIÓN GALERÍA EN ACCIÓN ══ */
function GallerySection() {
  const { theme } = useTheme();

  /* 🔧 MODIFICABLE: Arreglos de imágenes de galería diferenciadas por tema (100% Fitness y Hábitos Saludables) */
  const galleryMap = {
    energy: [
      { id: 1, src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800", alt: "Sesión pesas en gimnasio", label: "Fuerza 1 a 1" },
      { id: 2, src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800", alt: "Levantamiento con barra", label: "Potencia Muscular" },
      { id: 3, src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800", alt: "Entrenamiento intenso", label: "Resistencia Cardiovascular" },
      { id: 4, src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800", alt: "Sentadillas en gimnasio", label: "Hipertrofia Piernas" },
      { id: 5, src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800", alt: "Calistenia dominadas", label: "Control Corporal" },
      { id: 6, src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800", alt: "Cardio en cinta de correr", label: "Rendimiento Aeróbico" },
    ],
    premium: [
      { id: 1, src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800", alt: "Estiramiento guiado en estudio VIP", label: "Pilates & Movilidad" },
      { id: 2, src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800", alt: "Bowl nutritivo con palta y salmón", label: "Nutrición Ejecutiva" },
      { id: 3, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", alt: "Yoga y postura corporal en esterilla", label: "Higiene Postural VIP" },
      { id: 4, src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800", alt: "Running al aire libre saludable", label: "Cardio al Aire Libre" },
      { id: 5, src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800", alt: "Entrenador guiando en máquina funcional", label: "Coaching Funcional" },
      { id: 6, src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800", alt: "Ensalada verde nutritiva pre-entreno", label: "Hábitos Saludables" },
    ],
    neon: [
      { id: 1, src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800", alt: "Entrenamiento intenso con sogas battle ropes", label: "Battle Ropes Intenso" },
      { id: 2, src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800", alt: "Entrenamiento de hombros con mancuernas", label: "Fuerza Estructural" },
      { id: 3, src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800", alt: "Alimentación proteica deportiva", label: "Combustible Deportivo" },
      { id: 4, src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800", alt: "Análisis biomecánico en video y postura", label: "Biomecánica Asistida" },
      { id: 5, src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800", alt: "Supervisión de press de banca con pesas", label: "Control de Carga Máxima" },
      { id: 6, src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800", alt: "Entrenamiento con pesas rusas guiado", label: "Metabólico High-Tech" },
    ],
  };

  const galleryImages = galleryMap[theme] || galleryMap.energy;

  return (
    <section className="gallery">
      <div className="gallery__container">
        {/* Encabezado de sección */}
        <div className="gallery__header">
          <span className="section-tag">Coaching en Acción</span>
          {/* 🔧 MODIFICABLE: Título y subtítulo */}
          <h2 className="section-title">Sesiones y Modalidades</h2>
          <p className="section-subtitle">
            Un vistazo a cómo trabajamos día a día para llevar tu rendimiento físico y mental al siguiente nivel.
          </p>
        </div>

        {/* Grilla de imágenes con hover zoom */}
        <div className="gallery__grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery__item">
              <img
                src={image.src}
                alt={image.alt}
                className="gallery__image"
                loading="lazy"
              />
              <div className="gallery__item-overlay">
                <span className="gallery__item-label">{image.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ COMPONENTE PRINCIPAL: ABOUT ══ */
export default function About() {
  return (
    <div className="about-section">
      <div className="deck-card-wrapper" id="wrapper-about-hero">
        <section className="deck-card" id="about-hero">
          <AboutHero />
        </section>
      </div>
      <div className="deck-card-wrapper" id="wrapper-about-history">
        <section className="deck-card" id="about-history">
          <HistorySection />
        </section>
      </div>
      <div className="deck-card-wrapper" id="wrapper-about-team">
        <section className="deck-card" id="about-team">
          <TeamSection />
        </section>
      </div>
      <div className="deck-card-wrapper" id="wrapper-about-gallery">
        <section className="deck-card" id="about-gallery">
          <GallerySection />
        </section>
      </div>
    </div>
  );
}
