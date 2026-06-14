import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CieloPage() {
  const [showCurtain, setShowCurtain] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    setShowCurtain(true);
  };

  const onCurtainEnd = () => {
    navigate('/');
  };

  useEffect(() => {
    const savedScroll = localStorage.getItem('cieloScroll');
    if (savedScroll) {
      const scrollPos = parseInt(savedScroll, 10);
      window.scrollTo({ top: scrollPos, behavior: 'auto' });
      localStorage.removeItem('cieloScroll');
    }
  }, []);

  return (
    <div className="cielo-page">
      <section className="redirect-page-section alma-reveal">
        <div className="redirect-page-card">
          <img
            src="/assets/images/cielo1.png"
            alt="Cielo"
            className="redirect-page-image"
          />

          <div className="alma-description-container">
            <h1>Cielo</h1>

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
