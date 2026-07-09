/* ══════════════════════════════════════════════════════════════
   COMPONENTE: PricingCard
   Tarjeta reutilizable de plan/precio. Recibe el objeto plan,
   la moneda seleccionada y una función onSelect.
   Usa los estilos definidos en Programs.css.
   ══════════════════════════════════════════════════════════════ */

import { Check } from 'lucide-react';

/* ══ SECCIÓN: MAPEO DE SUFIJOS DE PERÍODO ══ */
// 🔧 MODIFICABLE: Sufijo de período por defecto
const periodSuffixMap = {
  'rutina-personalizada': '/mes',
  'coaching-online-1a1': '/mes',
  'vip-coaching-hibrido': '/mes',
};

/* ══ SECCIÓN: FUNCIÓN PARA FORMATEAR PRECIO ══ */
function formatPrice(amount, currency) {
  if (currency === 'ARS') {
    // Formato argentino: $35.000
    return `$${amount.toLocaleString('es-AR')}`;
  }
  // Formato dólar: $35
  return `$${amount.toLocaleString('en-US')}`;
}

/* ══ SECCIÓN: COMPONENTE PRINCIPAL ══ */
export default function PricingCard({ plan, currency, onSelect, onOpenDetail }) {
  // Determinar el precio según la moneda seleccionada
  const price = currency === 'ARS' ? plan.priceARS : plan.priceUSD;

  // Obtener el sufijo de período para este plan
  const period = periodSuffixMap[plan.id] || '/mes'; // 🔧 MODIFICABLE: período por defecto

  // Clases CSS condicionales para tarjeta popular
  const cardClasses = [
    'pricing-card',
    plan.popular ? 'pricing-card--popular' : '',
  ].join(' ').trim();

  // Clases CSS para el botón de compra
  const btnClasses = [
    'pricing-card__btn',
    plan.popular ? 'pricing-card__btn--filled' : 'pricing-card__btn--outlined',
  ].join(' ').trim();

  return (
    <div className={cardClasses}>
      {/* ══ Badge "Más Popular" (solo si aplica) ══ */}
      {plan.popular && (
        <span className="pricing-card__badge">Más Popular</span>
      )}

      {/* ══ Nombre del Plan ══ */}
      <h3 className="pricing-card__name">{plan.name}</h3>

      {/* ══ Descripción del Plan ══ */}
      <p className="pricing-card__description">{plan.description}</p>

      {/* ══ Bloque de Precio ══ */}
      <div className="pricing-card__price-block">
        <span className="pricing-card__price">
          {formatPrice(price, currency)}
          <span className="pricing-card__price-currency"> {currency}</span>
        </span>
        <span className="pricing-card__price-period">{period}</span>
      </div>

      {/* ══ Lista de Características ══ */}
      <ul className="pricing-card__features">
        {plan.features.map((feature, index) => (
          <li key={index} className="pricing-card__feature">
            <Check className="pricing-card__feature-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* ══ Botones de Acción ══ */}
      <div style={{ display: 'flex', gap: '0.75rem', width: '100%', marginTop: 'auto', paddingTop: '1rem' }}>
        {onOpenDetail && (
          <button
            className="pricing-card__btn pricing-card__btn--outlined"
            onClick={() => onOpenDetail(plan)}
            aria-label={`Ver detalles de ${plan.name}`}
            style={{ flex: 1, padding: '0.8rem 0.5rem', fontSize: '0.9rem' }}
          >
            Ver Detalles
          </button>
        )}
        <button
          className={btnClasses}
          onClick={() => onSelect(plan)}
          aria-label={`Elegir plan ${plan.name}`}
          style={{ flex: 1.2, padding: '0.8rem 0.5rem', fontSize: '0.9rem' }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
