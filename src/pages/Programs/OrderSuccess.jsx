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
// 🔧 MODIFICABLE: Nombres legibles de métodos de pago
const paymentMethodNames = {
  mercadopago: 'MercadoPago',
  stripe: 'Stripe (Tarjeta)',
};

/* ══ SECCIÓN: COMPONENTE PRINCIPAL ══ */
export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

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

  // 🔧 INTEGRACIÓN: Aquí se dispara el envío real de email transaccional
  // Ejemplo:
  //   useEffect(() => {
  //     fetch('/api/send-confirmation-email', {
  //       method: 'POST',
  //       body: JSON.stringify({ orderNumber, email: formData.email, plan }),
  //     });
  //   }, []);

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
          {/* 🔧 DATO MODIFICABLE */}
          ¡Bienvenido a PowerGym!
        </h1>
        <p className="success-subheading">
          {/* 🔧 DATO MODIFICABLE */}
          Tu inscripción ha sido procesada exitosamente
        </p>

        {/* ══ SECCIÓN: DETALLES DE LA ORDEN ══ */}
        {hasData && (
          <div className="order-details">
            <h3 className="order-details__title">Detalles de tu orden</h3>
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
            {/* 🔧 DATO MODIFICABLE: Lista de próximos pasos */}
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">1</span>
              <span className="next-steps-list__text">
                Revisá tu email para la confirmación y factura
              </span>
            </li>
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">2</span>
              <span className="next-steps-list__text">
                Presentate en recepción con tu DNI
              </span>
            </li>
            <li className="next-steps-list__item">
              <span className="next-steps-list__number">3</span>
              <span className="next-steps-list__text">
                Tu acceso estará activo dentro de las próximas 24hs
              </span>
            </li>
          </ol>
        </div>

        {/* ══ SECCIÓN: AVISO DE EMAIL ══ */}
        <div className="email-notice">
          <span className="email-notice__icon">📧</span>
          <span className="email-notice__text">
            Enviamos un email de confirmación a{' '}
            <span className="email-notice__email">
              {/* 🔧 DATO MODIFICABLE: Se muestra el email real o un placeholder */}
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
