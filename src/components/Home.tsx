import { useEffect, useState } from 'react';

const Home = () => {
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        // Pequeño delay para asegurar que el navegador registre el estado inicial
        const timer = setTimeout(() => setIsStarted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSmoothScroll = (target: string) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="main-container">
            <div className="navbar container">
                <div className="navbar__logo">A.D.G One Oficial</div>
                <div className="navbar__links">
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleSmoothScroll('#home'); }}>Portada</a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); handleSmoothScroll('#about'); }}>Lado B</a>
                </div>
            </div>

            {/* Overlay de Scanlines Global */}
            <div className="crt-overlay" />

            {/* Fondo TV con Zoom Dinámico */}
            <div className={`tv-background ${isStarted ? 'animate' : ''}`} />

            {/* El Escenario (Stage) con animación proporcional */}
            <div className={`stage ${isStarted ? 'animate' : ''}`}>
                <span className="stage__title">Par Zombies</span>
                <img className="stage__img" src="/assets/images/angelzombiehd.png" alt="Angel" />
                <img className="stage__img stage__img--parzombies" src="/assets/images/parzombieshd.png" alt="Par Zombies" />
                <img className="stage__img stage__img--jhonas" src="/assets/images/jhonaszombiehd.png" alt="Jhonas" />
                <div className="stage__subtitle">
                    <div onClick={() => handleSmoothScroll('#about')} style={{ cursor: 'pointer' }}>Ver más</div>
                    <svg style={{ width: "100px", height: "100px", color: "white", fill: "white", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" onClick={() => handleSmoothScroll('#about')}>
                        <circle className="dot" cx="20" cy="20" r="2.8" />
                        <circle className="dot" cx="30" cy="30" r="2.8" />
                        <circle className="dot" cx="40" cy="40" r="2.8" />
                        <circle className="dot" cx="50" cy="50" r="2.8" />

                        {/* Lado derecho */}
                        <circle className="dot" cx="60" cy="40" r="2.8" />
                        <circle className="dot" cx="70" cy="30" r="2.8" />
                        <circle className="dot" cx="80" cy="20" r="2.8" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Home;
