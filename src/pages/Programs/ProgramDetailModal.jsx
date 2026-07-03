/* ══════════════════════════════════════════════════════════════
   COMPONENTE: ProgramDetailModal
   Modal con información detallada de un programa de entrenamiento.
   Muestra duración, sesiones, nivel, objetivos y roadmap.
   ══════════════════════════════════════════════════════════════ */

import { X, Clock, Calendar, BarChart3, Target, Check } from 'lucide-react';
import './ProgramDetailModal.css';

/* ══ SECCIÓN: FUNCIÓN DE FORMATEO DE PRECIO ══ */
function formatPrice(amount, currency) {
  if (currency === 'ARS') {
    return `$${amount.toLocaleString('es-AR')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}

/* ══ SECCIÓN: COMPONENTE PRINCIPAL ══ */
export default function ProgramDetailModal({ plan, currency, onClose, onBuy }) {
  if (!plan) return null;

  const price = currency === 'ARS' ? plan.priceARS : plan.priceUSD;
  const details = plan.details || {};

  /* Cerrar al hacer clic en el overlay */
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="pdm-overlay" onClick={handleOverlayClick}>
      <div className="pdm-container">
        {/* ══ Botón Cerrar ══ */}
        <button className="pdm-close" onClick={onClose} aria-label="Cerrar detalle">
          <X size={24} />
        </button>

        {/* ══ Encabezado ══ */}
        <div className="pdm-header">
          {plan.popular && <span className="pdm-badge">⭐ Más Popular</span>}
          <h2 className="pdm-title">{plan.name}</h2>
          <p className="pdm-description">{plan.description}</p>
          <div className="pdm-price">
            <span className="pdm-price__amount">{formatPrice(price, currency)}</span>
            <span className="pdm-price__currency"> {currency}</span>
            <span className="pdm-price__period"> /mes</span>
          </div>
        </div>

        {/* ══ Stats Rápidos ══ */}
        {details.duration && (
          <div className="pdm-stats">
            <div className="pdm-stat">
              <Clock className="pdm-stat__icon" size={20} />
              <span className="pdm-stat__value">{details.duration}</span>
              <span className="pdm-stat__label">Duración</span>
            </div>
            <div className="pdm-stat">
              <Calendar className="pdm-stat__icon" size={20} />
              <span className="pdm-stat__value">{details.sessionsPerWeek} sesiones</span>
              <span className="pdm-stat__label">Por semana</span>
            </div>
            <div className="pdm-stat">
              <BarChart3 className="pdm-stat__icon" size={20} />
              <span className="pdm-stat__value">{details.level}</span>
              <span className="pdm-stat__label">Nivel</span>
            </div>
          </div>
        )}

        {/* ══ Qué incluye ══ */}
        <div className="pdm-features">
          <h3 className="pdm-section-title">Qué incluye</h3>
          <ul className="pdm-features__list">
            {plan.features.map((feature, i) => (
              <li key={i} className="pdm-features__item">
                <Check className="pdm-features__icon" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ══ Objetivos ══ */}
        {details.objectives && details.objectives.length > 0 && (
          <div className="pdm-objectives">
            <h3 className="pdm-section-title">
              <Target size={18} />
              Objetivos del programa
            </h3>
            <ul className="pdm-objectives__list">
              {details.objectives.map((obj, i) => (
                <li key={i} className="pdm-objectives__item">{obj}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ══ Roadmap ══ */}
        {details.roadmap && details.roadmap.length > 0 && (
          <div className="pdm-roadmap">
            <h3 className="pdm-section-title">Ruta del programa</h3>
            <div className="pdm-roadmap__timeline">
              {details.roadmap.map((phase, i) => (
                <div key={i} className="pdm-roadmap__phase">
                  <div className="pdm-roadmap__dot" />
                  <div className="pdm-roadmap__content">
                    <span className="pdm-roadmap__week">{phase.week}</span>
                    <span className="pdm-roadmap__focus">{phase.focus}</span>
                    <p className="pdm-roadmap__desc">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ Botón CTA ══ */}
        <div className="pdm-cta">
          <button className="pdm-cta__btn" onClick={() => onBuy(plan)}>
            Comprar Este Plan — {formatPrice(price, currency)} {currency}
          </button>
        </div>
      </div>
    </div>
  );
}
