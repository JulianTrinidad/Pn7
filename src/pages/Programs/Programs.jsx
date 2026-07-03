/* ══════════════════════════════════════════════════════════════
   COMPONENTE: Programs (Página principal de Programas)
   Enfoque: Entrenador Personal (Planes de Coaching 1 a 1)
   Catálogo con 5 categorías especializadas, pestañas interactivas,
   selector de moneda y grilla dinámica.
   Ruta: /programas (#programas en scroll)
   ══════════════════════════════════════════════════════════════ */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PricingCard from './PricingCard';
import plans, { CATEGORIES, CORE_PLANS } from '../../data/plans';
import { useTheme } from '../../context/ThemeContext';
import './Programs.css';

export default function Programs() {
  /* ══ SECCIÓN: ACCESO AL CONTEXTO DE TEMA ══ */
  const { theme } = useTheme();
  const isEnergy = theme === 'energy';
  const isNeon = theme === 'neon';

  /* ══ SECCIÓN: ESTADO LOCAL ══ */
  const [currency, setCurrency] = useState('ARS');
  const [activeCategory, setActiveCategory] = useState('todos');
  const [neonIndex, setNeonIndex] = useState(0);
  const navigate = useNavigate();

  /* ══ SECCIÓN: FILTRADO Y ORDEN DE PLANES ══ */
  // Si es el tema Energy, mostramos solo los 3 planes originales del principio
  // Si es Neón, mostramos todos ordenados por precio de menor a mayor
  const displayedPlans = isEnergy
    ? CORE_PLANS
    : activeCategory === 'todos'
    ? plans
    : plans.filter(plan => plan.category === activeCategory);

  const neonSortedPlans = [...plans].sort((a, b) => a.priceARS - b.priceARS);

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
          {isEnergy ? "PROGRAMAS ESENCIALES 1 A 1" : isNeon ? "CATÁLOGO DE PROGRAMAS CYBERFIT" : "PLANES Y PROGRAMAS DE COACHING"}
        </h1>
        <p className="programs-hero__subtitle">
          {isEnergy
            ? "Seleccioná uno de nuestros 3 planes principales de entrenamiento guiado"
            : isNeon
            ? `Contamos con ${neonSortedPlans.length} programas especializados ordenados de menor a mayor inversión`
            : "Explorá nuestras 5 especialidades fitness y elegí el plan ideal para tu transformación"}
        </p>
      </section>

      {/* ══ SECCIÓN: CONTROLES SUPERIORES (CATEGORÍAS Y MONEDA) ══ */}
      <div className="programs-controls">
        {/* Pestañas de categorías (Ocultas en Neón y Energy) */}
        {!isEnergy && !isNeon && (
          <div className="category-tabs" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`category-tabs__btn ${
                  activeCategory === cat.id ? 'category-tabs__btn--active' : ''
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* En Neón mostramos indicador de cantidad */}
        {isNeon && (
          <div className="neon-programs-info">
            <span className="section-tag">TOTAL: {neonSortedPlans.length} PROGRAMAS</span>
          </div>
        )}

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

      {/* ══ SECCIÓN: CARRUSEL HORIZONTAL PARA NEÓN VS GRILLA TRADICIONAL ══ */}
      {isNeon ? (
        <div className="neon-carousel-wrapper">
          <div className="neon-carousel-controls">
            <button
              className="neon-carousel-arrow"
              onClick={() => setNeonIndex(prev => (prev > 0 ? prev - 1 : neonSortedPlans.length - 1))}
              aria-label="Anterior programa"
            >
              <ChevronLeft size={32} />
            </button>
            <span className="neon-carousel-counter">
              Plan {neonIndex + 1} de {neonSortedPlans.length}
            </span>
            <button
              className="neon-carousel-arrow"
              onClick={() => setNeonIndex(prev => (prev < neonSortedPlans.length - 1 ? prev + 1 : 0))}
              aria-label="Siguiente programa"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="neon-carousel-slide">
            <PricingCard
              plan={neonSortedPlans[neonIndex]}
              currency={currency}
              onSelect={handleSelectPlan}
              isHorizontal={true}
            />
          </div>
        </div>
      ) : (
        <div className="pricing-grid">
          {displayedPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              currency={currency}
              onSelect={handleSelectPlan}
              isHorizontal={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
