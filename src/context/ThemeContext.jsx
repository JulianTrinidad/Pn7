/* ══════════════════════════════════════════════════════════════════════════════
   ARCHIVO: ThemeContext.jsx
   DESCRIPCIÓN: Contexto de React para gestión de temas visuales
   TEMAS DISPONIBLES: "energy" | "premium" | "neon"
   ══════════════════════════════════════════════════════════════════════════════ */

import { createContext, useContext, useState, useEffect } from "react";

/* ══ SECCIÓN: CONFIGURACIÓN DE TEMAS ══ */

/* 🔧 DATO MODIFICABLE: Temas disponibles en la aplicación */
const THEMES = ["energy", "premium", "neon"];

/* 🔧 DATO MODIFICABLE: Tema por defecto si no hay uno guardado */
const DEFAULT_THEME = "energy";

/* 🔧 DATO MODIFICABLE: Clave de localStorage para persistencia */
const STORAGE_KEY = "powergym-theme";

/* ══ SECCIÓN: CREACIÓN DEL CONTEXTO ══ */
const ThemeContext = createContext(undefined);

/* ══ SECCIÓN: COMPONENTE PROVIDER ══ */
/**
 * ThemeProvider — Envuelve la aplicación para proveer el tema actual
 * y funciones para cambiarlo. Persiste la selección en localStorage.
 */
export function ThemeProvider({ children }) {
  /* ── Inicialización del estado con tema guardado o por defecto ── */
  const [theme, setThemeState] = useState(() => {
    try {
      const savedTheme = localStorage.getItem(STORAGE_KEY);
      /* Validar que el tema guardado sea uno de los disponibles */
      if (savedTheme && THEMES.includes(savedTheme)) {
        return savedTheme;
      }
    } catch (error) {
      /* Si localStorage no está disponible, usar tema por defecto */
      console.warn("No se pudo acceder a localStorage:", error);
    }
    return DEFAULT_THEME;
  });

  /* ── Efecto: Aplicar el tema al documento HTML y guardar en localStorage ── */
  useEffect(() => {
    /* Establecer el atributo data-theme en el elemento raíz del documento */
    document.documentElement.setAttribute("data-theme", theme);

    /* Persistir la selección del tema en localStorage */
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      console.warn("No se pudo guardar el tema en localStorage:", error);
    }
  }, [theme]);

  /* ── Función para cambiar el tema con validación ── */
  const setTheme = (newTheme) => {
    if (THEMES.includes(newTheme)) {
      setThemeState(newTheme);
    } else {
      console.warn(
        `Tema "${newTheme}" no es válido. Temas disponibles: ${THEMES.join(", ")}`
      );
    }
  };

  /* ── Función para ciclar al siguiente tema ── */
  const cycleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setThemeState(THEMES[nextIndex]);
  };

  /* ── Valor del contexto expuesto a los consumidores ── */
  const contextValue = {
    theme,
    setTheme,
    cycleTheme,
    themes: THEMES,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

/* ══ SECCIÓN: HOOK PERSONALIZADO ══ */
/**
 * useTheme — Hook para acceder al contexto del tema desde cualquier componente.
 * Debe usarse dentro de un ThemeProvider.
 *
 * Retorna: { theme, setTheme, cycleTheme, themes }
 */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }

  return context;
}
