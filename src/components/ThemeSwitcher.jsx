/* ══════════════════════════════════════════════════════════════════════════════
   COMPONENTE: ThemeSwitcher — Selector visual de temas de color
   Muestra 3 botones circulares con colores de previsualización del tema
   ══════════════════════════════════════════════════════════════════════════════ */
import { useTheme } from "../context/ThemeContext";
import { Zap, Crown, Sparkles } from "lucide-react";
import "./ThemeSwitcher.css";

/* ══ SECCIÓN: CONFIGURACIÓN DE TEMAS VISUALES ══ */
const THEME_OPTIONS = [
  {
    key: "energy",
    label: "Energía",
    dotColor: "#e63946",
    Icon: Zap,
  },
  {
    key: "premium",
    label: "Premium",
    dotColor: "#ffc857",
    Icon: Crown,
  },
  {
    key: "neon",
    label: "Neón",
    dotColor: "#00ff88",
    Icon: Sparkles,
  },
];

function ThemeSwitcher() {
  /* ══ SECCIÓN: ACCESO AL CONTEXTO DE TEMAS ══ */
  const { theme, setTheme } = useTheme();

  /* ══ SECCIÓN: RENDERIZADO ══ */
  return (
    <div className="theme-switcher" role="radiogroup" aria-label="Selector de tema">
      {THEME_OPTIONS.map((option) => {
        const isActive = theme === option.key;
        const IconComponent = option.Icon;

        return (
          <button
            key={option.key}
            className={`theme-switcher__btn ${isActive ? "theme-switcher__btn--active" : ""}`}
            onClick={() => setTheme(option.key)}
            role="radio"
            aria-checked={isActive}
            aria-label={`Tema ${option.label}`}
            title={option.label}
          >
            {/* ══ SECCIÓN: DOT DE COLOR DE PREVISUALIZACIÓN ══ */}
            <span
              className="theme-switcher__dot"
              style={{ backgroundColor: option.dotColor }}
            />

            {/* ══ SECCIÓN: ICONO DECORATIVO (visible en activo) ══ */}
            <IconComponent
              size={10}
              className="theme-switcher__icon"
              style={{ color: option.dotColor }}
            />

            {/* ══ SECCIÓN: TOOLTIP CON NOMBRE DEL TEMA ══ */}
            <span className="theme-switcher__tooltip">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ThemeSwitcher;
