import { useRef, useState } from 'react';

const Home = () => {
    const [showPlayBtn, setShowPlayBtn] = useState(true);
    const [btnHiding, setBtnHiding] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayClick = () => {
        audioRef.current?.play().catch(() => { });
        setBtnHiding(true);
        setTimeout(() => {
            setShowPlayBtn(false);
            setTimeout(() => setIsStarted(true), 100);
        }, 700);
    };

    const handleSmoothScroll = (target: string) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="main-container">
            <audio ref={audioRef} src="/assets/beat.mp3" />

            {/* Botón Play CD */}
            {showPlayBtn && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 200,
                    cursor: 'pointer',
                    opacity: btnHiding ? 0 : 1,
                    transition: 'opacity 0.6s ease-in',
                    pointerEvents: btnHiding ? 'none' : 'auto',
                }} onClick={handlePlayClick}>
                    <div style={{
                        transform: btnHiding ? 'scale(0)' : 'scale(1)',
                        transition: 'transform 0.6s ease-in',
                    }}>
                        <img className="play-btn" src="/assets/images/play.png" alt="Play" />
                    </div>
                </div>
            )}

            <div className="navbar container bg-black/50">
                <div className="navbar__logo">A.D.G One Oficial</div>
                <div className="navbar__links">
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleSmoothScroll('#home'); }}>Portada</a>
                    <a href="#about" onClick={(e) => { e.preventDefault(); handleSmoothScroll('#about'); }}>Lado B</a>
                </div>
            </div>

            {/* Overlay de Scanlines Global */}
            <div className="crt-overlay" />

            {/* Fondo TV con Zoom Dinámico */}
            <div className={`tv-background ${isStarted ? 'animate' : ''}`}>
                <video
                    className="tv-video"
                    src="/assets/images/av.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <img className="tv-screen-overlay" src="/assets/images/tv-1.png" alt="" />
            </div>

            {/* El Escenario (Stage) con animación proporcional */}
            <div className={`stage ${isStarted ? 'animate' : ''}`}>
                <span className="stage__title">Par Zombies</span>
                <div className="stage__images">
                    <img className="stage__img" src="/assets/images/angelzombiehd.png" alt="Angel" />
                    <img className="stage__img stage__img--parzombies" src="/assets/images/parzombieshd.png" alt="Par Zombies" />
                    <img className="stage__img stage__img--jhonas" src="/assets/images/jhonaszombiehd.png" alt="Jhonas" />
                </div>
                <div className="stage__subtitle">
                    <div onClick={() => handleSmoothScroll('#about')} style={{ cursor: 'pointer' }}>Ver más</div>
                    <svg style={{ width: "100px", height: "100px", color: "white", fill: "white", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" onClick={() => handleSmoothScroll('#about')}>
                        <circle className="dot" cx="20" cy="20" r="2.8" />
                        <circle className="dot" cx="30" cy="30" r="2.8" />
                        <circle className="dot" cx="40" cy="40" r="2.8" />
                        <circle className="dot" cx="50" cy="50" r="2.8" />
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
