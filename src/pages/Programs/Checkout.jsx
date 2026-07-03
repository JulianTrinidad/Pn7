/* ══════════════════════════════════════════════════════════════
   COMPONENTE: Checkout (Página de Pago)
   Muestra resumen de orden, selector de moneda, métodos de
   pago y botón para confirmar la compra con simulación.
   Ruta: /programas/checkout
   ══════════════════════════════════════════════════════════════ */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  ArrowLeft,
  CreditCard,
  Wallet,
  Shield,
} from 'lucide-react';
import './Checkout.css';

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

/* ══ SECCIÓN: CONSTANTES ══ */
// 🔧 MODIFICABLE: Tipo de cambio simulado (1 USD = X ARS)
const EXCHANGE_RATE = 1000;

/* ══ SECCIÓN: FUNCIÓN DE FORMATEO DE PRECIO ══ */
function formatPrice(amount, currency) {
  if (currency === 'ARS') {
    return `$${amount.toLocaleString('es-AR')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}

/* ══ SECCIÓN: COMPONENTE PRINCIPAL ══ */
export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener datos del paso anterior (formulario de inscripción)
  const { plan, currency: initialCurrency, formData } = location.state || {};

  // Si no hay datos, redirigir
  if (!plan || !formData) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <p style={{ textAlign: 'center', marginTop: '4rem' }}>
            Datos de inscripción no encontrados.{' '}
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

  /* ══ SECCIÓN: ESTADO LOCAL ══ */
  const [currency, setCurrency] = useState(initialCurrency || 'ARS');
  const [paymentMethod, setPaymentMethod] = useState('mercadopago');
  const [isProcessing, setIsProcessing] = useState(false);

  // Calcular precios según la moneda seleccionada
  const price = currency === 'ARS' ? plan.priceARS : plan.priceUSD;
  const total = price; // Sin descuentos por ahora

  /* ══ SECCIÓN: HANDLER DE PAGO (SIMULADO) ══ */
  const handlePay = async () => {
    setIsProcessing(true);

    // 🔧 INTEGRACIÓN: Reemplazar simulación con llamada a API de pago real
    // Ejemplo para MercadoPago:
    //   const response = await fetch('/api/create-preference', {
    //     method: 'POST',
    //     body: JSON.stringify({ planId: plan.id, currency, formData }),
    //   });
    //   const { preferenceUrl } = await response.json();
    //   window.location.href = preferenceUrl;
    //
    // Ejemplo para Stripe:
    //   const response = await fetch('/api/create-checkout-session', {
    //     method: 'POST',
    //     body: JSON.stringify({ planId: plan.id, currency, formData }),
    //   });
    //   const { sessionUrl } = await response.json();
    //   window.location.href = sessionUrl;

    // Simulación de procesamiento de pago (2 segundos)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);

    // Navegar a la página de confirmación con todos los datos
    navigate('/programas/confirmacion', {
      state: {
        plan,
        currency,
        formData,
        paymentMethod,
        total,
      },
    });
  };

  /* ══ SECCIÓN: HANDLER DE VOLVER ══ */
  const handleBack = () => {
    navigate('/programas/inscripcion', {
      state: { plan, currency: initialCurrency },
    });
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* ══ Barra de Progreso: Paso 3 activo ══ */}
        <ProgressBar currentStep={3} />

        {/* ══ Botón Volver ══ */}
        <button className="checkout-back-btn" onClick={handleBack}>
          <ArrowLeft size={16} />
          Volver
        </button>

        {/* ══ Layout Principal: 2 columnas ══ */}
        <div className="checkout-layout">
          {/* ══ SECCIÓN: RESUMEN DE LA ORDEN ══ */}
          <div className="order-summary">
            <h3 className="order-summary__title">Resumen de tu orden</h3>

            <div className="order-summary__row">
              <span className="order-summary__label">Plan</span>
              <span className="order-summary__value">{plan.name}</span>
            </div>

            <div className="order-summary__row">
              <span className="order-summary__label">Nombre</span>
              <span className="order-summary__value">
                {formData.fullName}
              </span>
            </div>

            <div className="order-summary__row">
              <span className="order-summary__label">Email</span>
              <span className="order-summary__value">{formData.email}</span>
            </div>

            <hr className="order-summary__divider" />

            <div className="order-summary__row">
              <span className="order-summary__label">Subtotal</span>
              <span className="order-summary__value">
                {formatPrice(price, currency)} {currency}
              </span>
            </div>

            <div className="order-summary__row">
              <span className="order-summary__label">Descuento</span>
              <span className="order-summary__value" style={{ color: '#10b981' }}>
                {/* 🔧 DATO MODIFICABLE: Descuento aplicado */}
                —
              </span>
            </div>

            <hr className="order-summary__divider" />

            <div className="order-summary__total-row">
              <span className="order-summary__total-label">Total</span>
              <span className="order-summary__total-value">
                {formatPrice(total, currency)} {currency}
              </span>
            </div>
          </div>

          {/* ══ SECCIÓN: COLUMNA DE PAGO ══ */}
          <div className="payment-section">
            <h3 className="payment-section__title">Método de pago</h3>

            {/* ══ Selector de Moneda ══ */}
            <div className="checkout-currency">
              <div className="checkout-currency__toggle">
                <button
                  className={`checkout-currency__btn ${
                    currency === 'ARS' ? 'checkout-currency__btn--active' : ''
                  }`}
                  onClick={() => setCurrency('ARS')}
                >
                  🇦🇷 Pesos (ARS)
                </button>
                <button
                  className={`checkout-currency__btn ${
                    currency === 'USD' ? 'checkout-currency__btn--active' : ''
                  }`}
                  onClick={() => setCurrency('USD')}
                >
                  🇺🇸 Dólares (USD)
                </button>
              </div>
              <p className="checkout-currency__rate">
                {/* 🔧 DATO MODIFICABLE */}
                Tipo de cambio: 1 USD = ${EXCHANGE_RATE.toLocaleString('es-AR')}{' '}
                ARS
              </p>
            </div>

            {/* ══ Métodos de Pago ══ */}
            <div className="payment-methods">
              {/* Opción 1: MercadoPago (Pesos) */}
              <div
                className={`payment-method ${
                  paymentMethod === 'mercadopago'
                    ? 'payment-method--selected'
                    : ''
                }`}
                onClick={() => setPaymentMethod('mercadopago')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === 'Enter' && setPaymentMethod('mercadopago')
                }
                aria-label="Pagar con MercadoPago en Pesos"
              >
                <div className="payment-method__radio">
                  <div className="payment-method__radio-dot" />
                </div>
                <div className="payment-method__info">
                  <span className="payment-method__name">
                    <Wallet size={18} />
                    Pagar en Pesos (ARS)
                  </span>
                  <span className="payment-method__desc">
                    {/* 🔧 DATO MODIFICABLE */}
                    MercadoPago — Tarjeta, transferencia o efectivo
                  </span>
                </div>
              </div>

              {/* Opción 2: Stripe (Dólares) */}
              <div
                className={`payment-method ${
                  paymentMethod === 'stripe' ? 'payment-method--selected' : ''
                }`}
                onClick={() => setPaymentMethod('stripe')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === 'Enter' && setPaymentMethod('stripe')
                }
                aria-label="Pagar con Stripe en Dólares"
              >
                <div className="payment-method__radio">
                  <div className="payment-method__radio-dot" />
                </div>
                <div className="payment-method__info">
                  <span className="payment-method__name">
                    <CreditCard size={18} />
                    Pagar en Dólares (USD)
                  </span>
                  <span className="payment-method__desc">
                    {/* 🔧 DATO MODIFICABLE */}
                    Stripe — Visa, Mastercard, American Express
                  </span>
                </div>
              </div>
            </div>

            {/* ══ Botón Principal de Pago ══ */}
            <button
              className="checkout-pay-btn"
              onClick={handlePay}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="checkout-spinner" />
                  Procesando...
                </>
              ) : (
                <>
                  Confirmar Pago — {formatPrice(total, currency)} {currency}
                </>
              )}
            </button>

            {/* ══ Nota de Seguridad ══ */}
            <div className="checkout-security">
              <Shield className="checkout-security__icon" />
              {/* 🔧 DATO MODIFICABLE */}
              <span>Pago 100% seguro y encriptado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
