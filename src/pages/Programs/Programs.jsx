/* ══════════════════════════════════════════════════════════════
   COMPONENTE: Programs (Página principal de Programas)
   Enfoque: Entrenador Personal (Planes de Coaching 1 a 1)
   Catálogo con 3 planes principales.
   Ruta: /programas (#programas en scroll)
   ══════════════════════════════════════════════════════════════ */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import PricingCard from './PricingCard';
import ProgramDetailModal from './ProgramDetailModal';
import { CORE_PLANS } from '../../data/plans';
import './Programs.css';

export default function Programs() {
  /* ══ SECCIÓN: ESTADO LOCAL ══ */
  const [currency, setCurrency] = useState('ARS');
  const [selectedDetailPlan, setSelectedDetailPlan] = useState(null);
  const navigate = useNavigate();

  /* ══ SECCIÓN: HANDLER DE SELECCIÓN DE PLAN ══ */
  const handleSelectPlan = (plan) => {
    navigate('/programas/inscripcion', {
      state: {
        plan,
        currency,
      },
    });
  };

  return (
    <div className="programs-page">
      {/* ══ SECCIÓN: HERO BANNER ══ */}
      <section className="programs-hero">
        <h1 className="programs-hero__title">
          PROGRAMAS ESENCIALES 1 A 1
        </h1>
        <p className="programs-hero__subtitle">
          Seleccioná uno de nuestros 3 planes principales de entrenamiento guiado
        </p>
      </section>

      {/* ══ SECCIÓN: CONTROLES SUPERIORES (MONEDA) ══ */}
      <div className="programs-controls">
        {/* Selector de moneda */}
        <div className="currency-selector">
          <button
            className={`currency-selector__btn ${
              currency === 'ARS' ? 'currency-selector__btn--active' : ''
            }`}
            onClick={() => setCurrency('ARS')}
            aria-label="Ver precios en Pesos Argentinos"
          >
            ARS $
          </button>
          <button
            className={`currency-selector__btn ${
              currency === 'USD' ? 'currency-selector__btn--active' : ''
            }`}
            onClick={() => setCurrency('USD')}
            aria-label="Ver precios en Dólares"
          >
            USD $
          </button>
        </div>
      </div>

      {/* ══ SECCIÓN: GRILLA DE PLANES ══ */}
      <div className="pricing-grid">
        {CORE_PLANS.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            currency={currency}
            onSelect={handleSelectPlan}
            onOpenDetail={setSelectedDetailPlan}
          />
        ))}
      </div>

      {/* ══ SECCIÓN: VENTANA MODAL DE DETALLE ══ */}
      {selectedDetailPlan && (
        <ProgramDetailModal
          plan={selectedDetailPlan}
          currency={currency}
          onClose={() => setSelectedDetailPlan(null)}
          onBuy={(p) => {
            setSelectedDetailPlan(null);
            handleSelectPlan(p);
          }}
        />
      )}
    </div>
  );
}
