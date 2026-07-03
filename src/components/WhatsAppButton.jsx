/* ══════════════════════════════════════════════════════════════════════════════
   COMPONENTE: WhatsAppButton — Botón flotante de contacto por WhatsApp
   Posición fija en la esquina inferior derecha con animación de pulso
   ══════════════════════════════════════════════════════════════════════════════ */
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

/* 🔧 DATO MODIFICABLE: número de WhatsApp (formato internacional sin +) */
const WHATSAPP_NUMBER = "5491112345678";

/* 🔧 DATO MODIFICABLE: mensaje predeterminado (opcional) */
const WHATSAPP_MESSAGE = "¡Hola! Me interesa obtener más información sobre los programas de entrenamiento.";

function WhatsAppButton() {
  /* ══ SECCIÓN: CONSTRUIR URL DE WHATSAPP ══ */
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  /* ══ SECCIÓN: RENDERIZADO ══ */
  return (
    <a
      href={whatsappUrl}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      {/* ══ SECCIÓN: ANILLO DE PULSO ══ */}
      <span className="whatsapp-btn__pulse" aria-hidden="true" />
      <span className="whatsapp-btn__pulse whatsapp-btn__pulse--delayed" aria-hidden="true" />

      {/* ══ SECCIÓN: ICONO ══ */}
      <MessageCircle className="whatsapp-btn__icon" size={28} />
    </a>
  );
}

export default WhatsAppButton;
