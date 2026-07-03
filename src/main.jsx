/* ══════════════════════════════════════════════════════════════════════════════
   ARCHIVO: main.jsx
   DESCRIPCIÓN: Punto de entrada de la aplicación React — monta el componente
   raíz App dentro del elemento #root del DOM
   ══════════════════════════════════════════════════════════════════════════════ */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* ══ SECCIÓN: IMPORTACIÓN DE ESTILOS GLOBALES ══ */
import "./index.css";

/* ══ SECCIÓN: IMPORTACIÓN DEL COMPONENTE PRINCIPAL ══ */
import App from "./App";

/* ══ SECCIÓN: MONTAJE DE LA APLICACIÓN ══ */
/* Obtiene el elemento raíz del DOM y renderiza la aplicación dentro de StrictMode */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
