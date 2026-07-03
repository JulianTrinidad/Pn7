/* ══════════════════════════════════════════════════════════════
   COMPONENTE: EnrollForm (Formulario de Inscripción Simplificado)
   Recolecta SOLO los datos necesarios para la compra.
   Muestra un resumen detallado del plan seleccionado (semanas, objetivos, ruta).
   Ruta: /programas/inscripcion
   ══════════════════════════════════════════════════════════════ */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, ArrowRight, AlertCircle, Clock, Calendar, BarChart3, Check } from 'lucide-react';
import './EnrollForm.css';

/* ══ SECCIÓN: ESTADO INICIAL DEL FORMULARIO ══ */
const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  acceptTerms: false,
};

/* ══ SECCIÓN: COMPONENTE DE BARRA DE PROGRESO ══ */
function ProgressBar({ currentStep }) {
  const steps = [
    { num: 1, label: 'Plan' },
    { num: 2, label: 'Datos' },
    { num: 3, label: 'Pago' },
    { num: 4, label: 'Confirmación' },
  ];

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div key={step.num} style={{ display: 'flex', alignItems: 'center' }}>
          <div
            className={`progress-step ${
              step.num < currentStep
                ? 'progress-step--completed'
                : step.num === currentStep
                ? 'progress-step--active'
                : ''
            }`}
          >
            <span className="progress-step__number">
              {step.num < currentStep ? '✓' : step.num}
            </span>
            <span className="progress-step__label">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <span
              className={`progress-step__connector ${
                step.num < currentStep
                  ? 'progress-step__connector--completed'
                  : ''
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ══ SECCIÓN: FUNCIÓN DE FORMATEO DE PRECIO ══ */
function formatPrice(amount, currency) {
  if (currency === 'ARS') {
    return `$${amount.toLocaleString('es-AR')} ARS`;
  }
  return `$${amount.toLocaleString('en-US')} USD`;
}

/* ══ SECCIÓN: COMPONENTE PRINCIPAL ══ */
export default function EnrollForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const { plan, currency } = location.state || {};

  if (!plan) {
    return (
      <div className="enroll-page">
        <div className="enroll-container">
          <p style={{ textAlign: 'center', marginTop: '4rem' }}>
            No se seleccionó ningún plan.{' '}
            <button
              onClick={() => navigate('/programas')}
              style={{
                color: 'var(--color-primary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
              }}
            >
              Volver a Programas
            </button>
          </p>
        </div>
      </div>
    );
  }

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const price = currency === 'ARS' ? plan.priceARS : plan.priceUSD;
  const details = plan.details || {};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresá un email válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono o WhatsApp es obligatorio';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debés aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    navigate('/programas/checkout', {
      state: {
        plan,
        currency,
        formData,
      },
    });
  };

  const handleBack = () => {
    navigate('/programas');
  };

  return (
    <div className="enroll-page">
      <div className="enroll-container">
        {/* ══ Barra de Progreso: Paso 2 activo ══ */}
        <ProgressBar currentStep={2} />

        {/* ══ Resumen Básico del Plan ══ */}
        <div className="plan-summary">
          <div className="plan-summary__info">
            <span className="plan-summary__label">Estás por adquirir:</span>
            <span className="plan-summary__name">{plan.name}</span>
          </div>
          <span className="plan-summary__price">
            {formatPrice(price, currency)}
          </span>
        </div>

        {/* ══ Detalle Completo del Programa Seleccionado ══ */}
        {details.duration && (
          <div className="plan-detail-summary">
            <h3 className="plan-detail-summary__title">Detalle de tu Programa</h3>
            
            <div className="plan-detail-summary__stats">
              <div className="plan-detail-summary__stat">
                <Clock size={18} color="var(--color-primary)" />
                <div>
                  <span className="plan-detail-summary__stat-value">{details.duration}</span>
                  <span className="plan-detail-summary__stat-label">Duración</span>
                </div>
              </div>
              <div className="plan-detail-summary__stat">
                <Calendar size={18} color="var(--color-primary)" />
                <div>
                  <span className="plan-detail-summary__stat-value">{details.sessionsPerWeek} sesiones</span>
                  <span className="plan-detail-summary__stat-label">Por semana</span>
                </div>
              </div>
              <div className="plan-detail-summary__stat">
                <BarChart3 size={18} color="var(--color-primary)" />
                <div>
                  <span className="plan-detail-summary__stat-value">{details.level}</span>
                  <span className="plan-detail-summary__stat-label">Nivel</span>
                </div>
              </div>
            </div>

            {details.objectives && details.objectives.length > 0 && (
              <div className="plan-detail-summary__objectives">
                <h4>Objetivos incluidos</h4>
                <ul>
                  {details.objectives.map((obj, i) => (
                    <li key={i}>
                      <Check size={14} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ══ Formulario de Datos Simplificado ══ */}
        <form className="enroll-form" onSubmit={handleSubmit} noValidate>
          <h2 className="enroll-form__title">Datos Rápidos de Compra</h2>
          <p className="enroll-form__subtitle">
            Ingresá tus datos de contacto para enviarte el acceso y el cuestionario inicial del entrenador post-compra.
          </p>

          <div className="enroll-form__grid">
            {/* ══ Campo: Nombre Completo ══ */}
            <div className="enroll-form__field enroll-form__field--full">
              <label className="enroll-form__label" htmlFor="fullName">
                Nombre completo <span className="enroll-form__required">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className={`enroll-form__input ${
                  errors.fullName ? 'enroll-form__input--error' : ''
                }`}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
              />
              {errors.fullName && (
                <span className="enroll-form__error">
                  <AlertCircle size={14} />
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* ══ Campo: Email ══ */}
            <div className="enroll-form__field">
              <label className="enroll-form__label" htmlFor="email">
                Email de contacto <span className="enroll-form__required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`enroll-form__input ${
                  errors.email ? 'enroll-form__input--error' : ''
                }`}
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <span className="enroll-form__error">
                  <AlertCircle size={14} />
                  {errors.email}
                </span>
              )}
            </div>

            {/* ══ Campo: Teléfono / WhatsApp ══ */}
            <div className="enroll-form__field">
              <label className="enroll-form__label" htmlFor="phone">
                WhatsApp / Teléfono <span className="enroll-form__required">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`enroll-form__input ${
                  errors.phone ? 'enroll-form__input--error' : ''
                }`}
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ej: +54 9 11 1234-5678"
              />
              {errors.phone && (
                <span className="enroll-form__error">
                  <AlertCircle size={14} />
                  {errors.phone}
                </span>
              )}
            </div>

            {/* ══ Checkbox: Términos y Condiciones ══ */}
            <div className="enroll-form__checkbox-group">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                className="enroll-form__checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <label
                className="enroll-form__checkbox-label"
                htmlFor="acceptTerms"
              >
                Acepto los términos de servicio y entiendo que recibiré el formulario de evaluación inicial en mi correo tras el pago.
              </label>
            </div>
            {errors.acceptTerms && (
              <span
                className="enroll-form__error"
                style={{ gridColumn: '1 / -1' }}
              >
                <AlertCircle size={14} />
                {errors.acceptTerms}
              </span>
            )}

            {/* ══ Botones de Navegación ══ */}
            <div className="enroll-form__actions">
              <button
                type="button"
                className="enroll-form__btn-back"
                onClick={handleBack}
              >
                <ArrowLeft size={18} />
                Volver
              </button>
              <button type="submit" className="enroll-form__btn-submit">
                Continuar al Pago
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
