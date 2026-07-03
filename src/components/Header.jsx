/* ══════════════════════════════════════════════════════════════════════════════
   COMPONENTE: Header — Barra de navegación principal del sitio
   Incluye: logo, enlaces de navegación por scroll (#sección), botón CTA, menú móvil y ThemeSwitcher
   ══════════════════════════════════════════════════════════════════════════════ */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Dumbbell } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import "./Header.css";

/* ══ SECCIÓN: DATOS DE NAVEGACIÓN POR SECCIÓN ══ */
/* 🔧 DATO MODIFICABLE: enlaces de navegación */
const NAV_LINKS = [
  { id: "inicio", hash: "#inicio", label: "Inicio" },
  { id: "sobre-mi", hash: "#sobre-mi", label: "Sobre mí" },
  { id: "programas", hash: "#programas", label: "Programas" },
  { id: "contacto", hash: "#contacto", label: "Contacto" },
];

/* 🔧 DATO MODIFICABLE: nombre del entrenador o marca */
const GYM_NAME = "ALEX FIT PRO";

function Header() {
  /* ══ SECCIÓN: ESTADO DEL COMPONENTE ══ */
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("inicio");
  const location = useLocation();
  const navigate = useNavigate();

  /* ══ SECCIÓN: EFECTO DE SCROLL — Cambia opacidad progresiva y detecta sección activa ══ */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 30);

      // Cálculo gradual de progreso de scroll (de 0.0 a 1.0 en los primeros 180px)
      const progress = Math.min(1, Math.max(0, currentScroll / 180));
      setScrollProgress(progress);

      /* Detectar qué sección está visible si estamos en la ruta principal */
      if (location.pathname === "/") {
        const scrollPosition = currentScroll + 150;
        for (const link of NAV_LINKS) {
          const element = document.getElementById(link.id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(link.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  /* ══ SECCIÓN: HANDLER PARA CLIC EN ENLACE DE NAVEGACIÓN ══ */
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveSection(link.id);

    if (location.pathname === "/") {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", link.hash);
      } else if (link.id === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }
    } else {
      /* Si estamos en otra página (ej. checkout), volver al home con el hash */
      navigate(`/${link.hash}`);
    }
  };

  /* ══ SECCIÓN: CERRAR MENÚ MÓVIL AL NAVEGAR ══ */
  const closeMenu = () => setMenuOpen(false);

  /* ══ SECCIÓN: BLOQUEAR SCROLL CUANDO EL MENÚ ESTÁ ABIERTO ══ */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ══ SECCIÓN: RENDERIZADO ══ */
  return (
    <header
      className={`header ${scrolled ? "header--scrolled" : ""}`}
      style={{ "--scroll-progress": scrollProgress }}
    >
      <div className="header__container">
        {/* ══ SECCIÓN: LOGO ══ */}
        <a
          href="#inicio"
          className="header__logo"
          onClick={(e) => handleNavClick(e, NAV_LINKS[0])}
        >
          <Dumbbell className="header__logo-icon" size={28} />
          {/* 🔧 DATO MODIFICABLE: nombre del gym */}
          <span className="header__logo-text">{GYM_NAME}</span>
        </a>

        {/* ══ SECCIÓN: NAVEGACIÓN PRINCIPAL (ESCRITORIO) ══ */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === "/"
                  ? activeSection === link.id
                  : false;
              return (
                <li key={link.id} className="header__nav-item">
                  <a
                    href={link.hash}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`header__nav-link ${isActive ? "header__nav-link--active" : ""
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ══ SECCIÓN: THEME SWITCHER (ESCRITORIO) ══ */}
          <ThemeSwitcher />
        </nav>

        {/* ══ SECCIÓN: BOTÓN CTA (ESCRITORIO) ══ */}
        <a
          href="#programas"
          onClick={(e) => handleNavClick(e, NAV_LINKS[2])}
          className="header__cta"
        >
          Empezar Hoy
        </a>

        {/* ══ SECCIÓN: BOTÓN HAMBURGUESA (MÓVIL) ══ */}
        <button
          className="header__hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ══ SECCIÓN: MENÚ MÓVIL OVERLAY ══ */}
      <div
        className={`header__mobile-overlay ${menuOpen ? "header__mobile-overlay--open" : ""}`}
      >
        <nav className="header__mobile-nav">
          <ul className="header__mobile-list">
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === "/"
                  ? activeSection === link.id
                  : false;
              return (
                <li key={link.id} className="header__mobile-item">
                  <a
                    href={link.hash}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`header__mobile-link ${isActive ? "header__mobile-link--active" : ""
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ══ SECCIÓN: THEME SWITCHER (MÓVIL) ══ */}
          <div className="header__mobile-theme">
            <ThemeSwitcher />
          </div>

          {/* ══ SECCIÓN: BOTÓN CTA (MÓVIL) ══ */}
          <a
            href="#programas"
            className="header__cta header__cta--mobile"
            onClick={(e) => handleNavClick(e, NAV_LINKS[2])}
          >
            Empezar Hoy
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
