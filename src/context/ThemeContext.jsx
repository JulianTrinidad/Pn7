/* ══════════════════════════════════════════════════════════════════════════════
   ARCHIVO: ThemeContext.jsx
   DESCRIPCIÓN: Contexto de React para gestión del tema visual
   TEMA FIJO: "energy"
   ══════════════════════════════════════════════════════════════════════════════ */

import { createContext, useContext, useEffect } from "react";

const THEME = "energy";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", THEME);
  }, []);

  const contextValue = {
    theme: THEME,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }

  return context;
}
