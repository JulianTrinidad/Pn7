/* ══════════════════════════════════════════════════════════════
   COMPONENTE: EvaluationFormModal
   Ventana modal que se abre post-compra para completar la ficha
   médica, física (peso, altura) y objetivos del usuario.
   Simula el envío de estos datos por correo directo al entrenador.
   ══════════════════════════════════════════════════════════════ */

import { useState } from 'react';
import { X, CheckCircle2, Activity, Send, AlertCircle } from 'lucide-react';
import './EvaluationFormModal.css';

// 🔧 MODIFICABLE: Correo de destino al que llegará la ficha médica del alumno
const TRAINER_EMAIL = "entrenador@powergym.com";

export default function EvaluationFormModal({ isOpen, onClose, planName = "Tu Plan", userEmail = "", userPhone = "", onSubmitted }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    medicalHistory: '',
    experience: 'principiante',
    trainingDays: '4',
    specificGoal: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    if (!formData.age || formData.age < 12 || formData.age > 99) {
      newErrors.age = "Ingresá una edad válida";
    }
    if (!formData.weight || formData.weight < 30 || formData.weight > 250) {
      newErrors.weight = "Ingresá un peso válido (en kg)";
    }
    if (!formData.height || formData.height < 100 || formData.height > 230) {
      newErrors.height = "Ingresá tu altura en cm (ej: 175)";
    }
    if (!formData.medicalHistory.trim()) {
      newErrors.medicalHistory = "Indicá si tenés alguna lesión, enfermedad o escribí 'Ninguna'";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // 🔧 DEMOSTRACIÓN DE RUTA DE CORREO SIN BASE DE DATOS:
    // Al utilizar servicios como FormSubmit.co o EmailJS, podés enviar este objeto JSON
    // directamente al correo del entrenador sin requerir servidor back-end ni base de datos:
    /*
    fetch(`https://formsubmit.co/ajax/${TRAINER_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        asunto: `📝 Nueva Ficha de Evaluación: ${userEmail} (${planName})`,
        emailAlumno: userEmail,
        telefonoAlumno: userPhone,
        planAdquirido: planName,
        edad: `${formData.age} años`,
        peso: `${formData.weight} kg`,
        altura: `${formData.height} cm`,
        antecedentesMedicos: formData.medicalHistory,
        experienciaPrevia: formData.experience,
        diasSemanales: `${formData.trainingDays} días`,
        objetivoEspecifico: formData.specificGoal
      })
    }).catch(err => console.error("Error enviando correo:", err));
    */

    // Simulación del tiempo de envío por red (1.5 segundos)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSubmitted) onSubmitted(formData);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !isSubmitting) onClose();
  };

  return (
    <div className="eval-modal-overlay" onClick={handleOverlayClick}>
      <div className="eval-modal-container">
        <button
          className="eval-modal-close"
          onClick={onClose}
          disabled={isSubmitting}
          aria-label="Cerrar modal"
        >
          <X size={22} />
        </button>

        {isSuccess ? (
          /* ══ PANTALLA DE ÉXITO POST-ENVÍO ══ */
          <div className="eval-modal-success">
            <div className="eval-modal-success__icon">
              <CheckCircle2 size={56} />
            </div>
            <h2 className="eval-modal-success__title">¡Ficha Enviada con Éxito!</h2>
            <p className="eval-modal-success__desc">
              Hemos enviado tu ficha completa de evaluación (altura: <strong>{formData.height} cm</strong>, peso: <strong>{formData.weight} kg</strong> y antecedentes) directamente a la bandeja de entrada del entrenador:
            </p>
            <div className="eval-modal-email-box">
              <span>📧 Correo del entrenador principal:</span>
              <strong>{TRAINER_EMAIL}</strong>
            </div>
            <p className="eval-modal-success__footer">
              Tu coach analizará tu perfil médico y físico para preparar la periodización y te contactará por WhatsApp en menos de 24 horas.
            </p>
            <button className="eval-modal-success__btn" onClick={onClose}>
              Aceptar y Continuar
            </button>
          </div>
        ) : (
          /* ══ FORMULARIO DE EVALUACIÓN ══ */
          <form className="eval-modal-form" onSubmit={handleSubmit} noValidate>
            <div className="eval-modal-header">
              <span className="eval-modal-badge">Ficha Médica y Deportiva</span>
              <h2 className="eval-modal-title">
                <Activity size={22} color="var(--color-primary)" />
                Cuestionario del Entrenador
              </h2>
              <p className="eval-modal-subtitle">
                Esta información llegará directamente al correo de tu entrenador (<strong>{TRAINER_EMAIL}</strong>) para personalizar el plan <strong>{planName}</strong>.
              </p>
            </div>

            <div className="eval-modal-grid">
              {/* Edad */}
              <div className="eval-modal-field">
                <label className="eval-modal-label" htmlFor="age">
                  Edad <span className="eval-modal-req">*</span>
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  className={`eval-modal-input ${errors.age ? 'eval-modal-input--error' : ''}`}
                  placeholder="Ej: 28"
                  value={formData.age}
                  onChange={handleChange}
                />
                {errors.age && <span className="eval-modal-error"><AlertCircle size={13} /> {errors.age}</span>}
              </div>

              {/* Peso */}
              <div className="eval-modal-field">
                <label className="eval-modal-label" htmlFor="weight">
                  Peso Actual (kg) <span className="eval-modal-req">*</span>
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  step="0.5"
                  className={`eval-modal-input ${errors.weight ? 'eval-modal-input--error' : ''}`}
                  placeholder="Ej: 75.5"
                  value={formData.weight}
                  onChange={handleChange}
                />
                {errors.weight && <span className="eval-modal-error"><AlertCircle size={13} /> {errors.weight}</span>}
              </div>

              {/* Altura */}
              <div className="eval-modal-field">
                <label className="eval-modal-label" htmlFor="height">
                  Altura (cm) <span className="eval-modal-req">*</span>
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  className={`eval-modal-input ${errors.height ? 'eval-modal-input--error' : ''}`}
                  placeholder="Ej: 178"
                  value={formData.height}
                  onChange={handleChange}
                />
                {errors.height && <span className="eval-modal-error"><AlertCircle size={13} /> {errors.height}</span>}
              </div>

              {/* Días por semana */}
              <div className="eval-modal-field">
                <label className="eval-modal-label" htmlFor="trainingDays">
                  Días para entrenar / semana
                </label>
                <select
                  id="trainingDays"
                  name="trainingDays"
                  className="eval-modal-select"
                  value={formData.trainingDays}
                  onChange={handleChange}
                >
                  <option value="3">3 días por semana</option>
                  <option value="4">4 días por semana</option>
                  <option value="5">5 días por semana</option>
                  <option value="6">6 días por semana</option>
                </select>
              </div>

              {/* Experiencia */}
              <div className="eval-modal-field eval-modal-field--full">
                <label className="eval-modal-label" htmlFor="experience">
                  Nivel de experiencia en entrenamiento
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="eval-modal-select"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="principiante">Principiante (menos de 6 meses o retomando)</option>
                  <option value="intermedio">Intermedio (de 6 meses a 2 años de constancia)</option>
                  <option value="avanzado">Avanzado (más de 2 años con buena técnica)</option>
                </select>
              </div>

              {/* Antecedentes médicos */}
              <div className="eval-modal-field eval-modal-field--full">
                <label className="eval-modal-label" htmlFor="medicalHistory">
                  Antecedentes médicos, lesiones, cirugías o dolores <span className="eval-modal-req">*</span>
                </label>
                <textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  rows="2"
                  className={`eval-modal-textarea ${errors.medicalHistory ? 'eval-modal-input--error' : ''}`}
                  placeholder="Ej: Operación de ligamentos en rodilla derecha hace 2 años, hipertensión leve... Si no tenés ninguno, escribí 'Ninguno'."
                  value={formData.medicalHistory}
                  onChange={handleChange}
                />
                {errors.medicalHistory && <span className="eval-modal-error"><AlertCircle size={13} /> {errors.medicalHistory}</span>}
              </div>

              {/* Objetivo Específico */}
              <div className="eval-modal-field eval-modal-field--full">
                <label className="eval-modal-label" htmlFor="specificGoal">
                  Objetivo principal o detalles adicionales (Opcional)
                </label>
                <textarea
                  id="specificGoal"
                  name="specificGoal"
                  rows="2"
                  className="eval-modal-textarea"
                  placeholder="Ej: Quiero perder 5 kg de grasa manteniendo músculo antes del verano y mejorar mi postura en sentadilla."
                  value={formData.specificGoal}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="eval-modal-actions">
              <button
                type="button"
                className="eval-modal-cancel"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="eval-modal-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="eval-modal-spinner" />
                    Enviando al correo del entrenador...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Ficha al Entrenador
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
