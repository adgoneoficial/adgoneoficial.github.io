import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AlmaLatinoPage() {
  const [showCurtain, setShowCurtain] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    setShowCurtain(true);
  };

  const onCurtainEnd = () => {
    navigate('/');
  };

  useEffect(() => {
    // Restaurar scroll si vuelve a esta página
    const savedScroll = localStorage.getItem('almScroll');
    if (savedScroll) {
      const scrollPos = parseInt(savedScroll, 10);
      window.scrollTo({ top: scrollPos, behavior: 'auto' });
      localStorage.removeItem('almScroll');
    }
  }, []);

  return (
    <div className="alma-latino-page">
      {/* Fondo oscuro con logo */}
      <section className="redirect-page-section alma-reveal">
        <div className="redirect-page-card">
          {/* Imagen destacada */}
          <img
            src="/assets/images/almadelatinoshd.png"
            alt="Alma de Latino HD"
            className="redirect-page-image"
          />

          {/* Descripción */}
          <div className="alma-description-container">
            <h1>Alma de Latino HD</h1>

            <p className="alma-description">
              A.D.G One es un artista que comenzó su carrera musical con una pasión
              inquebrantable por el hip-hop latino. Desde sus primeros días en la escena,
              se ha caracterizado por su flow único y sus líricas profundas que cuentan
              historias de la vida real. Su dedicación a perfeccionar su arte lo ha llevado
              a convertirse en una figura respetada dentro de la comunidad musical.
            </p>

            <p className="alma-description">
              Lo que distingue a A.D.G One de otros artistas es su búsqueda constante de
              originalidad. Cada canción es una mezcla cuidadosa de ritmo, poesía y mensajes
              significativos. Su trabajo refleja su compromiso de crear música que no solo
              entretiene, sino que también inspira y hace pensar a su audiencia.
            </p>
          </div>

          {/* Botón volver */}
          <button
            className="redirect-page-back-button"
            onClick={handleBack}
          >
            Volver al inicio
          </button>
        </div>
      </section>

      {/* Nueva sección de Discografía - debajo */}
      <section className="redirect-page-section">
        <div className="redirect-page-card alma-reveal alma-reveal-delayed">
          <h2>Discografía</h2>
          <div className="discografia-placeholder">
            <p className="discografia-note">
              Aquí puedes añadir información sobre discografía, álbumes, singles y colaboraciones.
            </p>
          </div>
        </div>
      </section>

      {showCurtain && (
        <div className="curtain" onAnimationEnd={onCurtainEnd} />
      )}
    </div>
  );
}
