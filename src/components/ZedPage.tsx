import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ZedPage() {
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
        <div className="zed-page">
            <section className="redirect-page-section alma-reveal">
                <div className="redirect-page-card">
                    <div className="alma-description-container">
                        <h1>Zed está muerto.</h1>
                    </div>

                    <button
                        className="redirect-page-back-button"
                        style={{ marginTop: '2rem' }}
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
