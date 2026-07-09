/* ══════════════════════════════════════════════════════════════
   COMPONENTE: OrderSuccess (Confirmación de Orden Exitosa)
   Muestra animación de éxito, detalles de la orden,
   próximos pasos y acciones finales.
   Ruta: /programas/confirmacion
   ══════════════════════════════════════════════════════════════ */

import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router';
import { CheckCircle, Home, LayoutDashboard } from 'lucide-react';
import './OrderSuccess.css';

/* ══ SECCIÓN: COMPONENTE DE BARRA DE PROGRESO (COMPLETO) ══ */
function ProgressBar() {
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

/* ══ SECCIÓN: COMPONENTE PRINCIPAL ══ */
export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const { plan, currency, formData, paymentMethod, total } =
    location.state || {};

  const hasData = plan && formData;
  const orderNumber = generateOrderNumber();

  const today = new Date().toLocaleDateString('es-AR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

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
          Tu inscripción a <strong>{hasData ? plan.name : 'Coaching'}</strong> fue procesada correctamente. ¡Bienvenido al equipo!
        </p>

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
                Revisá tu bandeja de entrada de correo ({hasData ? formData.email : 'tu email'}) con el resguardo de pago
              </span>
            </li>
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">2</span>
              <span className="next-steps-list__text">
                El entrenador te contactará por WhatsApp ({hasData ? formData.phone : 'tu teléfono'}) dentro de las próximas 24hs
              </span>
            </li>
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">3</span>
              <span className="next-steps-list__text">
                ¡Preparate para arrancar tu transformación!
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
    </div>
  );
}
