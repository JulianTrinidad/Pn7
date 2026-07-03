/* ══════════════════════════════════════════════════════════════
   COMPONENTE: OrderSuccess (Confirmación de Orden Exitosa)
   Muestra animación de éxito, detalles de la orden,
   próximos pasos y acciones finales.
   Ruta: /programas/confirmacion
   ══════════════════════════════════════════════════════════════ */

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router';
import { CheckCircle, Home, LayoutDashboard, Activity } from 'lucide-react';
import EvaluationFormModal from './EvaluationFormModal';
import './OrderSuccess.css';

/* ══ SECCIÓN: COMPONENTE DE BARRA DE PROGRESO (COMPLETO) ══ */
function ProgressBar() {
  // Todos los pasos completados
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
          <div className="progress-step progress-step--completed">
            <span className="progress-step__number">✓</span>
            <span className="progress-step__label">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <span className="progress-step__connector progress-step__connector--completed" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ══ SECCIÓN: GENERADOR DE NÚMERO DE ORDEN ══ */
function generateOrderNumber() {
  // Genera un número de orden con formato: PG-XXXXXX
  const random = Math.floor(100000 + Math.random() * 900000);
  return `PG-${random}`; // 🔧 MODIFICABLE: Prefijo del número de orden
}

/* ══ SECCIÓN: FUNCIÓN DE FORMATEO DE PRECIO ══ */
function formatPrice(amount, currency) {
  if (currency === 'ARS') {
    return `$${amount.toLocaleString('es-AR')} ARS`;
  }
  return `$${amount.toLocaleString('en-US')} USD`;
}

/* ══ SECCIÓN: MAPEO DE MÉTODOS DE PAGO ══ */
const paymentMethodNames = {
  mercadopago: 'MercadoPago (Pesos ARS)',
  paypal: 'PayPal (Dólares USD)',
  stripe: 'Stripe (Tarjeta)',
};

// 🔧 MODIFICABLE: URL de tu Formulario de Google Forms / Drive para evaluación inicial
const GOOGLE_FORM_URL = "https://docs.google.com/forms/";

/* ══ SECCIÓN: COMPONENTE PRINCIPAL ══ */
export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  // Estado del modal de evaluación
  const [isEvalModalOpen, setIsEvalModalOpen] = useState(false);
  const [evalCompletedData, setEvalCompletedData] = useState(null);
  const [redirectSeconds, setRedirectSeconds] = useState(8);

  // Obtener datos del paso anterior (checkout)
  const { plan, currency, formData, paymentMethod, total } =
    location.state || {};

  // Si no hay datos, mostrar estado genérico de éxito
  const hasData = plan && formData;

  // Número de orden generado
  const orderNumber = generateOrderNumber();

  // Fecha de hoy formateada
  const today = new Date().toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Temporizador para redirigir a inicio automáticamente después de completar la evaluación
  useEffect(() => {
    let timer;
    if (evalCompletedData && redirectSeconds > 0) {
      timer = setTimeout(() => {
        setRedirectSeconds((prev) => prev - 1);
      }, 1000);
    } else if (evalCompletedData && redirectSeconds === 0) {
      navigate('/');
    }
    return () => clearTimeout(timer);
  }, [evalCompletedData, redirectSeconds, navigate]);

  return (
    <div className="success-page">
      <div className="success-container">
        {/* ══ Barra de Progreso: Todos los pasos completados ══ */}
        <ProgressBar />

        {/* ══ SECCIÓN: ANIMACIÓN DE ÉXITO ══ */}
        <div className="success-checkmark">
          <CheckCircle className="success-checkmark__icon" />
        </div>

        <h1 className="success-heading">
          ¡Pago Confirmado y Exitoso!
        </h1>
        <p className="success-subheading">
          Tu inscripción a <strong>{hasData ? plan.name : 'Coaching'}</strong> está lista. Ahora completá tu ficha médica y deportiva.
        </p>

        {/* ══ SECCIÓN ESPECIAL: FORMULARIO DE EVALUACIÓN EN MODAL ══ */}
        <div className="drive-form-card" style={{
          background: 'var(--color-bg-card)',
          border: '2px solid var(--color-primary)',
          borderRadius: 'var(--border-radius)',
          padding: '1.75rem',
          margin: '2rem 0',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
        }}>
          {evalCompletedData ? (
            /* Confirmación de ficha enviada y cuenta regresiva al Inicio */
            <div>
              <span style={{
                display: 'inline-block',
                background: '#10b981',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                ✓ Ficha Recibida por el Entrenador
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                color: 'var(--color-text)',
                marginBottom: '0.5rem'
              }}>
                ¡Todo Listo! Ficha Médica y Física Completa
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '1.25rem'
              }}>
                Hemos registrado tu altura (<strong>{evalCompletedData.height} cm</strong>), peso (<strong>{evalCompletedData.weight} kg</strong>) y antecedentes. El entrenador principal te escribirá por WhatsApp a la brevedad.
              </p>

              {/* Banner de cuenta regresiva */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid #10b981',
                borderRadius: 'var(--border-radius)',
                padding: '1rem',
                margin: '1.25rem 0',
                color: '#10b981',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                ⏳ Serás redirigido automáticamente al Inicio en <strong>{redirectSeconds}</strong> segundos...
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigate('/')}
                  style={{
                    background: 'var(--color-primary)',
                    border: 'none',
                    color: 'var(--color-bg)',
                    padding: '0.7rem 1.5rem',
                    borderRadius: 'var(--border-radius)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Ir al Inicio Ahora ↗
                </button>
                <button
                  onClick={() => setIsEvalModalOpen(true)}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    padding: '0.7rem 1.5rem',
                    borderRadius: 'var(--border-radius)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Ver / Editar mi Ficha
                </button>
              </div>
            </div>
          ) : (
            /* Botón para abrir modal de evaluación */
            <div>
              <span style={{
                display: 'inline-block',
                background: 'var(--color-primary)',
                color: 'var(--color-bg)',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                Paso Obligatorio Post-Compra
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                color: 'var(--color-text)',
                marginBottom: '0.75rem'
              }}>
                📝 Cuestionario Inicial del Entrenador
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Para diseñar tu rutina y dieta personalizada, necesitamos conocer tu altura, peso actual, antecedentes de lesiones o enfermedades y tus objetivos específicos.
              </p>
              <button
                type="button"
                onClick={() => setIsEvalModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  background: 'var(--color-primary)',
                  color: 'var(--color-bg)',
                  border: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  padding: '1rem 2.25rem',
                  borderRadius: 'var(--border-radius)',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Activity size={20} />
                Completar Ficha Médica y Deportiva Aquí
              </button>
            </div>
          )}
        </div>

        {/* ══ SECCIÓN: DETALLES DE LA ORDEN ══ */}
        {hasData && (
          <div className="order-details">
            <h3 className="order-details__title">Detalles del recibo</h3>
            <div className="order-details__grid">
              <div className="order-details__item">
                <span className="order-details__label">Nº de Orden</span>
                <span className="order-details__value">{orderNumber}</span>
              </div>
              <div className="order-details__item">
                <span className="order-details__label">Plan</span>
                <span className="order-details__value">{plan.name}</span>
              </div>
              <div className="order-details__item">
                <span className="order-details__label">Monto Pagado</span>
                <span className="order-details__value">
                  {formatPrice(total, currency)}
                </span>
              </div>
              <div className="order-details__item">
                <span className="order-details__label">Método de Pago</span>
                <span className="order-details__value">
                  {paymentMethodNames[paymentMethod] || paymentMethod}
                </span>
              </div>
              <div className="order-details__item">
                <span className="order-details__label">Fecha</span>
                <span className="order-details__value">{today}</span>
              </div>
              <div className="order-details__item">
                <span className="order-details__label">Titular</span>
                <span className="order-details__value">
                  {formData.fullName}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ══ SECCIÓN: PRÓXIMOS PASOS ══ */}
        <div className="next-steps-card">
          <h3 className="next-steps-card__title">¿Qué sigue ahora?</h3>
          <ol className="next-steps-list">
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">1</span>
              <span className="next-steps-list__text">
                Completá el cuestionario de evaluación en el botón superior
              </span>
            </li>
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">2</span>
              <span className="next-steps-list__text">
                Revisá tu bandeja de entrada de correo ({hasData ? formData.email : 'tu email'}) con el resguardo de pago
              </span>
            </li>
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">3</span>
              <span className="next-steps-list__text">
                El entrenador te contactará por WhatsApp ({hasData ? formData.phone : 'tu teléfono'}) dentro de las próximas 24hs
              </span>
            </li>
          </ol>
        </div>

        {/* ══ SECCIÓN: AVISO DE EMAIL ══ */}
        <div className="email-notice">
          <span className="email-notice__icon">📧</span>
          <span className="email-notice__text">
            Hemos enviado el comprobante a{' '}
            <span className="email-notice__email">
              {hasData ? formData.email : 'tu_email@ejemplo.com'}
            </span>
          </span>
        </div>

        {/* ══ SECCIÓN: BOTONES DE ACCIÓN ══ */}
        <div className="success-actions">
          <Link to="/" className="success-btn success-btn--secondary">
            <Home size={18} />
            Volver al Inicio
          </Link>
          <Link to="/programas" className="success-btn success-btn--primary">
            <LayoutDashboard size={18} />
            Ver Mis Programas
          </Link>
        </div>
      </div>

      {/* ══ MODAL DE EVALUACIÓN INICIAL ══ */}
      <EvaluationFormModal
        isOpen={isEvalModalOpen}
        onClose={() => setIsEvalModalOpen(false)}
        planName={hasData ? plan.name : "Coaching Online"}
        userEmail={hasData ? formData.email : "tu_email@ejemplo.com"}
        userPhone={hasData ? formData.phone : ""}
        onSubmitted={(data) => {
          setEvalCompletedData(data);
        }}
      />
    </div>
  );
}
