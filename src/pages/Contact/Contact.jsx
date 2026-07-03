/* ══════════════════════════════════════════════════════════════
   COMPONENTE: Página de Contacto y Evaluación (Contact)
   Enfoque: Entrenador Personal (Personal Trainer)
   Incluye Hero Banner, Tarjetas de Info, Formulario de Asesoría y Mapa.
   Todos los textos están en español con datos dummy
   marcados como 🔧 MODIFICABLE.
   ══════════════════════════════════════════════════════════════ */

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import "./Contact.css";

/* ══ SUB-COMPONENTE: HERO BANNER ══ */
function ContactHero() {
  return (
    <section className="contact-hero">
      {/* Imagen de fondo del hero */}
      <div className="contact-hero__background">
        <img
          src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=1200" /* 🔧 MODIFICABLE: URL imagen de fondo */
          alt="Contacto con el Personal Trainer" /* 🔧 MODIFICABLE */
          loading="eager"
        />
      </div>

      {/* Overlay oscuro */}
      <div className="contact-hero__overlay" />

      {/* Contenido */}
      <div className="contact-hero__content">
        <span className="contact-hero__tag">Empieza Tu Cambio</span>
        {/* 🔧 MODIFICABLE: Título del hero */}
        <h1 className="contact-hero__title">
          <span>Hablemos 1 a 1</span>
        </h1>
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: TARJETAS DE INFORMACIÓN ══ */
function InfoCards() {
  /* 🔧 MODIFICABLE: Array de tarjetas de información de contacto del coach */
  const infoItems = [
    {
      id: 1,
      icon: <MapPin size={28} />,
      title: "Modalidad de Entrenamiento", // 🔧 MODIFICABLE
      content: (
        <>
          {/* 🔧 MODIFICABLE: Modalidad */}
          <p><strong>100% Online Internacional</strong></p>
          <p>Sesiones Presenciales en CABA</p>
          <p>Buenos Aires, Argentina</p>
        </>
      ),
    },
    {
      id: 2,
      icon: <Phone size={28} />,
      title: "Contacto Directo", // 🔧 MODIFICABLE
      content: (
        <>
          {/* 🔧 MODIFICABLE: Contacto del Coach */}
          <p>
            <strong>WhatsApp Coach:</strong> +54 11 2345-6789
          </p>
          <p>
            <strong>Asesoría:</strong> +54 11 4567-8901
          </p>
          <p>
            <strong>Email:</strong> alex@coachfitness.com
          </p>
        </>
      ),
    },
    {
      id: 3,
      icon: <Clock size={28} />,
      title: "Disponibilidad", // 🔧 MODIFICABLE
      content: (
        <>
          {/* 🔧 MODIFICABLE: Horarios */}
          <p>
            <strong>Soporte Alumnos:</strong> 24/7 vía WhatsApp
          </p>
          <p>
            <strong>Llamadas 1 a 1:</strong> Lun - Sáb (con turno)
          </p>
          <p>
            <strong>Presencial:</strong> Cupos mensuales limitados
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="contact-info">
      <div className="contact-info__container">
        <div className="contact-info__grid">
          {infoItems.map((item) => (
            <div key={item.id} className="info-card">
              <div className="info-card__icon">{item.icon}</div>
              <h3 className="info-card__title">{item.title}</h3>
              <div className="info-card__text">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ SUB-COMPONENTE: FORMULARIO DE ASESORÍA Y MAPA ══ */
function ContactFormAndMap() {
  /* ── Estado del formulario ── */
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* ── Validación de campos ── */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresá un email válido.";
    }

    if (!formData.asunto) {
      newErrors.asunto = "Seleccioná el programa o consulta.";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Contame brevemente tu objetivo actual.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ── Manejo de cambios en los campos ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    /* Limpia el error del campo cuando el usuario empieza a escribir */
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  /* ── Manejo del envío del formulario ── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    /* Simulación de envío (reemplazar con lógica real de backend) */
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    /* Reinicia el formulario después de 4 segundos */
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    }, 4000);
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-section__container">
        {/* ── Columna izquierda: Formulario ── */}
        <div className="contact-form-wrapper">
          {/* 🔧 MODIFICABLE: Título y subtítulo del formulario */}
          <h2 className="contact-form-wrapper__title">
            Agenda tu Evaluación Inicial
          </h2>
          <p className="contact-form-wrapper__subtitle">
            Completá tus datos y contame tu objetivo. Analizo tu caso y me pongo en contacto con vos por WhatsApp o email en menos de 24 horas.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Campo: Nombre */}
            <div className="form-group">
              <label className="form-group__label" htmlFor="nombre">
                Nombre y Apellido <span className="required">*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                className={`form-group__input ${
                  errors.nombre ? "form-group__input--error" : ""
                }`}
                placeholder="Ej: Nicolás García"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && (
                <span className="form-group__error">{errors.nombre}</span>
              )}
            </div>

            {/* Campo: Email */}
            <div className="form-group">
              <label className="form-group__label" htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-group__input ${
                  errors.email ? "form-group__input--error" : ""
                }`}
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="form-group__error">{errors.email}</span>
              )}
            </div>

            {/* Campo: Asunto (selector) */}
            <div className="form-group">
              <label className="form-group__label" htmlFor="asunto">
                ¿Qué programa te interesa? <span className="required">*</span>
              </label>
              <select
                id="asunto"
                name="asunto"
                className={`form-group__select ${
                  errors.asunto ? "form-group__select--error" : ""
                }`}
                value={formData.asunto}
                onChange={handleChange}
              >
                {/* 🔧 MODIFICABLE: Opciones del selector */}
                <option value="">Seleccioná una opción</option>
                <option value="coaching-online">Coaching Online 1 a 1</option>
                <option value="rutina-personalizada">Rutina Personalizada</option>
                <option value="vip-presencial">VIP Coaching Presencial</option>
                <option value="asesoria">Duda / Consulta general</option>
              </select>
              {errors.asunto && (
                <span className="form-group__error">{errors.asunto}</span>
              )}
            </div>

            {/* Campo: Mensaje */}
            <div className="form-group">
              <label className="form-group__label" htmlFor="mensaje">
                Tu Objetivo Actual <span className="required">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                className={`form-group__textarea ${
                  errors.mensaje ? "form-group__textarea--error" : ""
                }`}
                placeholder="Contame si entrenás en gym o casa, tu nivel actual y qué meta te gustaría alcanzar en los próximos 3 meses..."
                value={formData.mensaje}
                onChange={handleChange}
              />
              {errors.mensaje && (
                <span className="form-group__error">{errors.mensaje}</span>
              )}
            </div>

            {/* Botón de envío con estado de carga */}
            <button
              type="submit"
              className="contact-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="contact-form__spinner" />
                  Analizando...
                </>
              ) : (
                <>
                  Solicitar Evaluación Gratis
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Mensaje de éxito */}
            {isSuccess && (
              <div className="contact-form__success">
                <CheckCircle size={20} />
                <span className="contact-form__success-text">
                  ¡Solicitud enviada con éxito! El Coach Alex te contactará en breve.
                </span>
              </div>
            )}
          </form>
        </div>

        {/* ── Columna derecha: Mapa y Zona de Entrenamiento ── */}
        <div className="contact-map-wrapper">
          {/* 🔧 MODIFICABLE: Título y subtítulo del mapa */}
          <h2 className="contact-map-wrapper__title">Sede Presencial en CABA</h2>
          <p className="contact-map-wrapper__subtitle">
            Si elegís la modalidad VIP Híbrida o Presencial, realizamos los entrenamientos 1 a 1 y evaluaciones de composición corporal en centros asociados en Buenos Aires.
          </p>

          {/* 🔧 MODIFICABLE: URL del iframe de Google Maps */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889529!2d-58.38375922342737!3d-34.60373887295426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb6cd392a1%3A0x7ddb4a6e9d0e3c3e!2sObelisco!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de sesiones presenciales en Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ COMPONENTE PRINCIPAL: CONTACT ══ */
export default function Contact() {
  return (
    <div className="contact-section">
      <ContactHero />
      <InfoCards />
      <ContactFormAndMap />
    </div>
  );
}
