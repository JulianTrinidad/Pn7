/* ══════════════════════════════════════════════════════════════════════════════
   COMPONENTE: Footer — Pie de página del sitio
   Incluye: info del gym, enlaces rápidos (con scroll suave), contacto, redes sociales y copyright
   ══════════════════════════════════════════════════════════════════════════════ */
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronUp,
} from "lucide-react";
import "./Footer.css";

/* ══ ICONOS SVG DE REDES SOCIALES ══ */
function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6z" />
    </svg>
  );
}

/* ══ SECCIÓN: DATOS DE NAVEGACIÓN ══ */
/* 🔧 DATO MODIFICABLE: enlaces rápidos del footer */
const QUICK_LINKS = [
  { hash: "#inicio", label: "Inicio" },
  { hash: "#programas", label: "Programas" },
  { hash: "#sobre-mi", label: "Sobre mí" },
  { hash: "#contacto", label: "Contacto" },
];

/* 🔧 DATO MODIFICABLE: dirección de sesiones o modalidad */
const GYM_ADDRESS = "Coaching 100% Online & Presencial en CABA, Argentina";
/* 🔧 DATO MODIFICABLE: teléfono del entrenador */
const GYM_PHONE = "+54 11 2345-6789";
/* 🔧 DATO MODIFICABLE: email del entrenador */
const GYM_EMAIL = "alex@coachfitness.com";
/* 🔧 DATO MODIFICABLE: horario de atención */
const GYM_HOURS = "Soporte WhatsApp 24/7 | Consultas Lun-Sáb";

/* ══ SECCIÓN: REDES SOCIALES ══ */
/* 🔧 DATO MODIFICABLE: URLs de redes sociales del coach */
const SOCIAL_LINKS = [
  { icon: FacebookIcon, label: "Facebook", url: "https://facebook.com/alexfitpro" },
  { icon: InstagramIcon, label: "Instagram", url: "https://instagram.com/alexfitpro" },
  { icon: TwitterIcon, label: "Twitter", url: "https://twitter.com/alexfitpro" },
  { icon: YoutubeIcon, label: "YouTube", url: "https://youtube.com/@alexfitpro" },
];

/* 🔧 DATO MODIFICABLE: nombre de la marca o entrenador */
const GYM_NAME = "ALEX FIT PRO";

/* 🔧 DATO MODIFICABLE: descripción del coach */
const GYM_DESCRIPTION =
  "Entrenador Personal Certificado. Transformo cuerpos y hábitos a través del coaching 1 a 1, rutinas científicamente estructuradas y seguimiento diario por WhatsApp para resultados sostenibles.";

function Footer() {
  /* ══ SECCIÓN: FUNCIÓN VOLVER ARRIBA ══ */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ══ SECCIÓN: RENDERIZADO ══ */
  return (
    <footer className="footer">
      {/* ══ SECCIÓN: BOTÓN VOLVER ARRIBA ══ */}
      <button
        className="footer__back-to-top"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ChevronUp size={20} />
      </button>

      <div className="footer__container">
        {/* ══ COLUMNA 1: Marca y Descripción ══ */}
        <div className="footer__column footer__column--brand">
          <a href="#inicio" className="footer__logo">
            <Dumbbell className="footer__logo-icon" size={26} />
            {/* 🔧 DATO MODIFICABLE: nombre del gym */}
            <span className="footer__logo-text">{GYM_NAME}</span>
          </a>
          {/* 🔧 DATO MODIFICABLE: descripción del gym */}
          <p className="footer__description">{GYM_DESCRIPTION}</p>
        </div>

        {/* ══ COLUMNA 2: Enlaces Rápidos ══ */}
        <div className="footer__column">
          <h3 className="footer__heading">Enlaces Rápidos</h3>
          <ul className="footer__link-list">
            {QUICK_LINKS.map((link) => (
              <li key={link.hash}>
                <a href={link.hash} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ══ COLUMNA 3: Información de Contacto ══ */}
        <div className="footer__column">
          <h3 className="footer__heading">Contacto</h3>
          <ul className="footer__contact-list">
            {/* 🔧 DATO MODIFICABLE: dirección */}
            <li className="footer__contact-item">
              <MapPin size={16} className="footer__contact-icon" />
              <span>{GYM_ADDRESS}</span>
            </li>
            {/* 🔧 DATO MODIFICABLE: teléfono */}
            <li className="footer__contact-item">
              <Phone size={16} className="footer__contact-icon" />
              <a href={`tel:${GYM_PHONE.replace(/\s/g, "")}`} className="footer__link">
                {GYM_PHONE}
              </a>
            </li>
            {/* 🔧 DATO MODIFICABLE: email */}
            <li className="footer__contact-item">
              <Mail size={16} className="footer__contact-icon" />
              <a href={`mailto:${GYM_EMAIL}`} className="footer__link">
                {GYM_EMAIL}
              </a>
            </li>
            {/* 🔧 DATO MODIFICABLE: horario */}
            <li className="footer__contact-item">
              <Clock size={16} className="footer__contact-icon" />
              <span>{GYM_HOURS}</span>
            </li>
          </ul>
        </div>

        {/* ══ COLUMNA 4: Redes Sociales ══ */}
        <div className="footer__column">
          <h3 className="footer__heading">Redes Sociales</h3>
          <div className="footer__social-grid">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="footer__social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Síguenos en ${social.label}`}
              >
                {/* 🔧 DATO MODIFICABLE: URLs de redes sociales (arriba) */}
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SECCIÓN: BARRA INFERIOR — Copyright + Legal ══ */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          {/* 🔧 DATO MODIFICABLE: nombre del gym */}
          © {new Date().getFullYear()} {GYM_NAME}. Todos los derechos reservados.
        </p>
        <div className="footer__legal">
          <a href="#terminos" className="footer__legal-link">
            Términos y Condiciones
          </a>
          <span className="footer__legal-divider">|</span>
          <a href="#privacidad" className="footer__legal-link">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
