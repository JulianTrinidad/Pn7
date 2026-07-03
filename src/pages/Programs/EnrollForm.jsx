/* ══════════════════════════════════════════════════════════════
   COMPONENTE: EnrollForm (Formulario de Inscripción)
   Recolecta datos del usuario antes del checkout.
   Incluye barra de progreso, resumen del plan seleccionado,
   validación de campos y navegación al siguiente paso.
   Ruta: /programas/inscripcion
   ══════════════════════════════════════════════════════════════ */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import './EnrollForm.css';

/* ══ SECCIÓN: OPCIONES DE OBJETIVO DE ENTRENAMIENTO ══ */
// 🔧 MODIFICABLE: Opciones del selector de objetivo para coaching
const trainingGoals = [
  'Pérdida de grasa / Definición',
  'Ganancia muscular / Hipertrofia',
  'Recomposición corporal',
  'Rendimiento y Fuerza',
  'Entrenamiento en Casa / Salud general',
];

/* ══ SECCIÓN: ESTADO INICIAL DEL FORMULARIO ══ */
const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  birthDate: '',
  documentId: '',
  emergencyContact: '',
  trainingGoal: '',
  medicalConditions: '',
  acceptTerms: false,
};

/* ══ SECCIÓN: COMPONENTE DE BARRA DE PROGRESO ══ */
function ProgressBar({ currentStep }) {
  // 🔧 MODIFICABLE: Etiquetas de los pasos del flujo
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
          {/* Conector entre pasos */}
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

  // Obtener datos del plan seleccionado desde el state de navegación
  const { plan, currency } = location.state || {};

  // Si no hay plan seleccionado, redirigir a la página de programas
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

  /* ══ SECCIÓN: ESTADO DEL FORMULARIO ══ */
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  // Precio según moneda seleccionada
  const price = currency === 'ARS' ? plan.priceARS : plan.priceUSD;

  /* ══ SECCIÓN: HANDLER DE CAMBIO EN CAMPOS ══ */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Limpiar error del campo al modificarlo
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  /* ══ SECCIÓN: VALIDACIÓN DEL FORMULARIO ══ */
  const validate = () => {
    const newErrors = {};

    // Nombre completo requerido
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es obligatorio';
    }

    // Email requerido y formato válido
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresá un email válido';
    }

    // Teléfono requerido
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    }

    // DNI/Documento requerido
    if (!formData.documentId.trim()) {
      newErrors.documentId = 'El DNI/Documento es obligatorio';
    }

    // Aceptar términos requerido
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debés aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ══ SECCIÓN: HANDLER DE ENVÍO ══ */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Navegar al checkout pasando todos los datos
    navigate('/programas/checkout', {
      state: {
        plan,
        currency,
        formData,
      },
    });
  };

  /* ══ SECCIÓN: HANDLER DE VOLVER ══ */
  const handleBack = () => {
    navigate('/programas');
  };

  return (
    <div className="enroll-page">
      <div className="enroll-container">
        {/* ══ Barra de Progreso: Paso 2 activo ══ */}
        <ProgressBar currentStep={2} />

        {/* ══ Resumen del Plan Seleccionado ══ */}
        <div className="plan-summary">
          <div className="plan-summary__info">
            <span className="plan-summary__label">Plan seleccionado</span>
            <span className="plan-summary__name">{plan.name}</span>
          </div>
          <span className="plan-summary__price">
            {formatPrice(price, currency)}
          </span>
        </div>

        {/* ══ Formulario de Datos Personales ══ */}
        <form className="enroll-form" onSubmit={handleSubmit} noValidate>
          <h2 className="enroll-form__title">Datos Personales</h2>
          <p className="enroll-form__subtitle">
            {/* 🔧 DATO MODIFICABLE */}
            Completá tus datos para continuar con la inscripción
          </p>

          <div className="enroll-form__grid">
            {/* ══ Campo: Nombre Completo ══ */}
            <div className="enroll-form__field">
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
                Email <span className="enroll-form__required">*</span>
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

            {/* ══ Campo: Teléfono ══ */}
            <div className="enroll-form__field">
              <label className="enroll-form__label" htmlFor="phone">
                Teléfono <span className="enroll-form__required">*</span>
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
                placeholder="Ej: +54 11 1234-5678"
              />
              {errors.phone && (
                <span className="enroll-form__error">
                  <AlertCircle size={14} />
                  {errors.phone}
                </span>
              )}
            </div>

            {/* ══ Campo: Fecha de Nacimiento ══ */}
            <div className="enroll-form__field">
              <label className="enroll-form__label" htmlFor="birthDate">
                Fecha de nacimiento
              </label>
              <input
                id="birthDate"
                name="birthDate"
                type="date"
                className="enroll-form__input"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>

            {/* ══ Campo: DNI / Documento ══ */}
            <div className="enroll-form__field">
              <label className="enroll-form__label" htmlFor="documentId">
                DNI / Documento <span className="enroll-form__required">*</span>
              </label>
              <input
                id="documentId"
                name="documentId"
                type="text"
                className={`enroll-form__input ${
                  errors.documentId ? 'enroll-form__input--error' : ''
                }`}
                value={formData.documentId}
                onChange={handleChange}
                placeholder="Ej: 12345678"
              />
              {errors.documentId && (
                <span className="enroll-form__error">
                  <AlertCircle size={14} />
                  {errors.documentId}
                </span>
              )}
            </div>

            {/* ══ Campo: Contacto de Emergencia ══ */}
            <div className="enroll-form__field">
              <label className="enroll-form__label" htmlFor="emergencyContact">
                Contacto de emergencia
              </label>
              <input
                id="emergencyContact"
                name="emergencyContact"
                type="text"
                className="enroll-form__input"
                value={formData.emergencyContact}
                onChange={handleChange}
                placeholder="Nombre y teléfono"
              />
            </div>

            {/* ══ Campo: Objetivo de Entrenamiento ══ */}
            <div className="enroll-form__field enroll-form__field--full">
              <label className="enroll-form__label" htmlFor="trainingGoal">
                Objetivo de entrenamiento
              </label>
              <select
                id="trainingGoal"
                name="trainingGoal"
                className="enroll-form__select"
                value={formData.trainingGoal}
                onChange={handleChange}
              >
                <option value="">Seleccioná un objetivo</option>
                {trainingGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </div>

            {/* ══ Campo: Condiciones Médicas ══ */}
            <div className="enroll-form__field enroll-form__field--full">
              <label className="enroll-form__label" htmlFor="medicalConditions">
                Condiciones médicas{' '}
                <span
                  style={{
                    fontWeight: 400,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  (opcional)
                </span>
              </label>
              <textarea
                id="medicalConditions"
                name="medicalConditions"
                className="enroll-form__textarea"
                value={formData.medicalConditions}
                onChange={handleChange}
                placeholder="Indicá cualquier condición médica, lesión o alergia relevante"
                rows={3}
              />
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
                {/* 🔧 DATO MODIFICABLE */}
                Acepto los{' '}
                <a href="/terminos" target="_blank" rel="noopener noreferrer">
                  términos y condiciones
                </a>{' '}
                y la{' '}
                <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                  política de privacidad
                </a>
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
