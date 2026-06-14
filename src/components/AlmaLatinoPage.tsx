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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="alma-latino-page">
      {/* Fondo oscuro con logo */}
      <section className="redirect-page-section alma-reveal">
        <div className="redirect-page-card">
          {/* Descripción */}
          <div className="alma-description-container">
            <h1>A.D.G One.</h1>

            <p className="alma-description">
              Angel David guerra, nace en Bogotá, Colombia; en el 1996. se embarcó en un viaje de descubrimiento artístico desde muy joven y creció escuchando a una gran variedad de músicos y de géneros que han sido de gran influencia en la creación de su sonido propio.
            </p>

            <p className="alma-description">
              Sus comienzos en el movimiento, datan desde el 2010, como breakdancer " SALTIN BREAKING " ( 2010 ) y adjuntando sus primeras rimas, colaborando en agrupaciones tales como " B.A.B CLAN " ( 2011 ) para que luego de años más tarde, formar lo que se conoce como " ALMA DE LATINO. " Junto con Danas & ches one. Co-Fundador del sello discográfico CLASSIC 90`S junto con Jona`rt ( 2018 ) pertenece a la agrupación " Alchemyst Clan ".
            </p>

            <p className="alma-description">
              A.D.G One. busca ofrecer algo diferente y único a sus seguidores y por eso interpreta música de su propia inspiración.
            </p>
          </div>

        </div>
      </section>

      {/* Nueva sección de Discografía - debajo */}
      <section className="redirect-page-section">
        <div className="redirect-page-card alma-reveal alma-reveal-delayed">
          <h2>Discografía</h2>
          <div className="discografia-placeholder">
            <p className="discografia-note"><strong>PYRAMID SECRET.</strong></p>
            <p className="discografia-note">" Breaking Soul " &nbsp; Microphone In ON - 2014 &nbsp; F.t Amok y Dj Joker.</p>
            <p className="discografia-note">" Padre Nuestro " &nbsp; Odanimuli - 2015 &nbsp; F.t Amok y Dj Joker.</p>
            <p className="discografia-note">" Pena " &nbsp; Odanimuli - 2015 &nbsp; F.t Angelica Tellez y Amok.</p>
            <p className="discografia-note"><strong>DGM STUDIOS.</strong></p>
          </div>
        </div>
      </section>

      <section className="redirect-page-section">
        <div className="redirect-page-card alma-reveal alma-reveal-delayed">
          <h2>CLASSIC 90`S.</h2>
          <div className="discografia-placeholder">
            <p className="discografia-note">" BAM ZU " &nbsp; Par' Zombiez - 2017 &nbsp; F.t Jona`rt.</p>
            <p className="discografia-note">" TU Y YO " &nbsp; Par` Zombiez - 2018 &nbsp; F.t Kalipso y Jona`rt.</p>
            <p className="discografia-note">" Párrafo Suelto " &nbsp; Par` Zombiez - 2018 &nbsp; F.t Jona`rt.</p>
            <p className="discografia-note">" EL MOMENTO DE ENCONTRARNOS " &nbsp; Par` Zombiez - 2018 &nbsp; F.t Jona`rt.</p>
            <p className="discografia-note">" CALMA " &nbsp; Par` Zombiez - 2018 &nbsp; F.t Kalipso y Jona`rt.</p>
            <p className="discografia-note">" BASURETOS " &nbsp; Par` Zombiez - 2019 &nbsp; F.t el Karma, SJ, Cuervo, Alias Cortes, Super mc y Jona'rt.</p>
          </div>
        </div>
      </section>

      <section className="redirect-page-section" style={{ minHeight: 'auto', paddingBottom: '0' }}>
        <div className="redirect-page-card alma-reveal alma-reveal-delayed">
          <h2>" Polvo Cósmico "</h2>
          <p className="discografia-note" style={{ marginBottom: '1rem', opacity: 0.7 }}>(2017 - 2019)</p>
          <div className="discografia-placeholder">
            <p className="discografia-note">
              En colaboración con Mini Port que sirvió igualmente como Beat Maker Principal en esta obra maestra, donde artistas tales como REC DAN, JONA`RT "ARTILLEROS CREW", EL BLAS, ALIAS CORTES "FARO PROD", AMARAGORAS "ACOMULADORES CREW", KALIPSO "ARTILLEROS CREW", GRAFFY PRODUCCE y EL ARAGAN PROD "720 RECORDS".
            </p>
          </div>

        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 0 4rem', marginTop: '5cm' }}>
        <button
          className="redirect-page-back-button"
          onClick={handleBack}
        >
          Volver al inicio
        </button>
      </div>

      {showCurtain && (
        <div className="curtain" onAnimationEnd={onCurtainEnd} />
      )}
    </div>
  );
}
