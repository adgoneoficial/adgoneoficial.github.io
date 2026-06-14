import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ParZombiesPage() {
  const [showCurtain, setShowCurtain] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    setShowCurtain(true);
  };

  const onCurtainEnd = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="parzombies-page">
      <section className="redirect-page-section alma-reveal">
        <div className="redirect-page-card">
          <div className="alma-description-container">
            <h1>Par' Zombiez</h1>
            <p className="alma-description">
              Contenido próximamente.
            </p>
          </div>

          <button
            className="redirect-page-back-button"
            onClick={handleBack}
          >
            Volver al inicio
          </button>
        </div>
      </section>

      {showCurtain && (
        <div className="curtain" onAnimationEnd={onCurtainEnd} />
      )}
    </div>
  );
}
