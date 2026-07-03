/* ══════════════════════════════════════════════════════════════════════════════
   ARCHIVO: App.jsx
   DESCRIPCIÓN: Componente principal de la aplicación con enrutamiento y layout
   RUTAS: / (Home con scroll por secciones), /programas/inscripcion,
          /programas/checkout, /programas/confirmacion
   ══════════════════════════════════════════════════════════════════════════════ */

import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";

/* ══ SECCIÓN: IMPORTACIÓN DE COMPONENTES DE LAYOUT ══ */
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

/* ══ SECCIÓN: IMPORTACIÓN DE PÁGINAS REALES ══ */
import Home from "./pages/Home/Home";
import EnrollForm from "./pages/Programs/EnrollForm";
import Checkout from "./pages/Programs/Checkout";
import OrderSuccess from "./pages/Programs/OrderSuccess";

/* ══ SECCIÓN: COMPONENTE LAYOUT PRINCIPAL ══ */
/**
 * Layout — Estructura base de todas las páginas.
 * Contiene Header, contenido dinámico (Outlet), Footer y botón de WhatsApp.
 */
function Layout() {
  return (
    <div className="app-layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ══ SECCIÓN: CONFIGURACIÓN DEL ROUTER ══ */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      /* Flujo de conversión (Inscripción y Pagos) */
      {
        path: "programas/inscripcion",
        element: <EnrollForm />,
      },
      {
        path: "programas/checkout",
        element: <Checkout />,
      },
      {
        path: "programas/confirmacion",
        element: <OrderSuccess />,
      },
      /* Redirecciones de compatibilidad para enlaces directos a secciones */
      {
        path: "programas",
        element: <Navigate to="/#programas" replace />,
      },
      {
        path: "sobre-mi",
        element: <Navigate to="/#sobre-mi" replace />,
      },
      {
        path: "contacto",
        element: <Navigate to="/#contacto" replace />,
      },
    ],
  },
]);

/* ══ SECCIÓN: COMPONENTE APP PRINCIPAL ══ */
export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
