import { useNavigate } from 'react-router-dom';
import InstagramEmbed from './InstagramEmbed';
import { useState, type MouseEvent } from 'react';

const igImages = Array.from({ length: 35 }, (_, i) => `/assets/images/ig/${i + 1}.png`);

const instagramUrls = [
    'https://www.instagram.com/p/C5t2o0lJm10/',
    'https://www.instagram.com/p/BgrWV6vDYyw/',
    'https://www.instagram.com/p/DPxb97ODAMK/',
    'https://www.instagram.com/p/DOcxY7_jcSx/',
    'https://www.instagram.com/p/DN3dkWV4qxg/',
    'https://www.instagram.com/reel/DN1XhqS3kT5/',
];

const youtubeUrls = [
    'https://youtu.be/3ZeN9Fia2v8',
    'https://youtu.be/RWiWoAuTB6k',
    'https://youtu.be/02V8wBtwtu0',
    'https://youtu.be/1fAwASLouhY',
];

const getYoutubeEmbedUrl = (url: string) => {
    const idMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
    return idMatch ? `https://www.youtube.com/embed/${idMatch[1]}?rel=0` : '';
};

const About = () => {
    const navigate = useNavigate();
    const [redirecting, setRedirecting] = useState(false);
    const [redirectingCielo, setRedirectingCielo] = useState(false);
    const [redirectingZed, setRedirectingZed] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [zombieClicking, setZombieClicking] = useState(false);

    const handleZombieButtonClick = () => {
        setZombieClicking(true);
        setTimeout(() => {
            setZombieClicking(false);
            setShowVideoModal(true);
        }, 600);
    };

    const handleCieloRedirect = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (redirectingCielo) return;
        setRedirectingCielo(true);
        setTimeout(() => {
            navigate('/cielo');
        }, 700);
    };

    const handleZedRedirect = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (redirectingZed) return;
        setRedirectingZed(true);
        setTimeout(() => {
            navigate('/mivida');
        }, 700);
    };

    const handleRedirect = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (redirecting) return;
        setRedirecting(true);
        try {
            const fullpageRedirect = (e.currentTarget as HTMLElement).closest('.fullpage-redirect') as HTMLElement;
            if (fullpageRedirect) {
                const rect = fullpageRedirect.getBoundingClientRect();
                const top = Math.round(window.scrollY + rect.top - 100);
                localStorage.setItem('almScroll', String(top));
            }
            const content = {
                title: 'A.D.G One.',
                paragraph:
                    'Angel David guerra, nace en Bogotá, Colombia; en el 1996. se embarcó en un viaje de descubrimiento artístico desde muy joven y creció escuchando a una gran variedad de músicos y de géneros que han sido de gran influencia en la creación de su sonido propio.'
            };
            localStorage.setItem('almContent', JSON.stringify(content));
        } catch (err) {
            console.warn(err);
        }
        setTimeout(() => {
            navigate('/almadelatinohd');
        }, 700);
    };

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="lado-b-wrapper">
                    <div className="lado-b-cinta-bg" aria-hidden="true">
                        <div className="lado-b-cinta-margin">
                            <div className="lado-b-cinta-overlays">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="lado-b-cinta-overlay-unit">
                                        {Array.from({ length: 12 }).map((_, j) => (
                                            <img
                                                key={j}
                                                src="/assets/images/parzombieshd.png"
                                                alt=""
                                                className="lado-b-cinta-unit-img"
                                                style={{ animationDelay: Math.floor(j / 3) % 2 === 0 ? '0s' : '-0.275s' }}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lado-b-cinta-strip">
                            <div className="cinta-ig-scroll">
                                {[...igImages, ...igImages].map((src, idx) => (
                                    <div key={idx} className="cinta-ig-frame">
                                        <img src={src} alt="" className="cinta-ig-img" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lado-b-cinta-margin">
                            <div className="lado-b-cinta-overlays">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i + 20} className="lado-b-cinta-overlay-unit">
                                        {Array.from({ length: 12 }).map((_, j) => (
                                            <img
                                                key={j}
                                                src="/assets/images/parzombieshd.png"
                                                alt=""
                                                className="lado-b-cinta-unit-img"
                                                style={{ animationDelay: Math.floor(j / 3) % 2 === 0 ? '0s' : '-0.275s' }}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="zombie-below-cinta">
                    <button className="corner-zombie" onClick={handleZombieButtonClick}>
                        <img src="/assets/images/angelzombiehd.png" alt="Angel Zombie" className={zombieClicking ? 'zombie-clicking' : ''} />
                    </button>
                    <h2 className="about-title">Lado B</h2>
                    <button className="corner-zombie" onClick={handleZombieButtonClick}>
                        <img src="/assets/images/jhonas.png" alt="Jhonas Zombie" className={zombieClicking ? 'zombie-clicking' : ''} />
                    </button>
                </div>

                {showVideoModal && (
                    <div className="video-modal-overlay" onClick={() => setShowVideoModal(false)}>
                        <div className="video-modal-card" onClick={e => e.stopPropagation()}>
                            <button className="video-modal-close" onClick={() => setShowVideoModal(false)}>✕</button>
                            <video
                                src="/assets/images/vsalesita.mp4"
                                controls
                                autoPlay
                                className="video-modal-player"
                            />
                        </div>
                    </div>
                )}

                <div className="cielo-redirect">
                    <a
                        href="/cielo"
                        className={`cielo-redirect-link${redirectingCielo ? ' clicked' : ''}`}
                        onClick={handleCieloRedirect}
                        aria-busy={redirectingCielo}
                    >
                        {redirectingCielo && <div className="click-overlay" />}
                        {redirectingCielo && <div className="click-portal" aria-hidden="true" />}
                        <img src="/assets/images/cielo1.png" alt="Cielo" className="cielo-redirect-img" />
                        {redirectingCielo && <span className="redirecting-text">Cargando...</span>}
                        <p className="cielo-redirect-label">Haz clic para explorar</p>
                    </a>
                </div>

                <div className="fullpage-redirect zed-fullpage" style={{ background: '#0a0a0a', borderColor: 'rgba(255,255,255,0.1)' }}>
                    {redirectingZed && <div className="click-overlay" />}
                    {redirectingZed && <div className="click-portal" aria-hidden="true" />}
                    <div className="fullpage-redirect-button-content">
                        {redirectingZed && <span className="redirecting-text">Cargando...</span>}
                        <a
                            href="/mivida"
                            className={`fullpage-redirect-link${redirectingZed ? ' clicked' : ''}`}
                            onClick={handleZedRedirect}
                            aria-busy={redirectingZed}
                        >
                            <img src="/assets/images/caratula 1.png" alt="El Olimpo" className="fullpage-redirect-logo" />
                        </a>
                        <p>Haz clic para entrar al contenido especial.</p>
                    </div>
                </div>

                <div className="collage-grid">
                    {/* Imágenes */}
                    <div id="gallery" className="collage-item collage-images">
                        <div className="collage-header">Galería</div>
                        <div className="images-placeholder">
                            {instagramUrls.map((url) => (
                                <div key={url} className="image-slot instagram-slot">
                                    <InstagramEmbed url={url} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Videos */}
                    <div id="videos" className="collage-item collage-videos">
                        <div className="collage-header">Videos</div>
                        <div className="videos-placeholder">
                            {youtubeUrls.map((url) => {
                                const embedSrc = getYoutubeEmbedUrl(url);
                                return (
                                    <div key={url} className="video-slot video-embed-slot">
                                        <iframe
                                            src={embedSrc}
                                            title="YouTube video"
                                            frameBorder="0"
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Historia (nuevo apartado) */}
                    <div id="historia" className="collage-item collage-historia">
                        <div className="collage-header">Historia</div>
                        <div className="historia-placeholder">
                            <img src="/assets/images/angeltv.png" alt="Angel TV" className="historia-fullpage-img" />
                        </div>
                    </div>
                </div>
                {/* Botón grande fullpage al final: acción de redirección a Alma de Latino HD */}
                <div id="almadelatinohd" className="fullpage-redirect">
                    {redirecting && <div className="click-overlay" />}
                    {redirecting && <div className="click-portal" aria-hidden="true" />}
                    <div className="fullpage-redirect-button-content">
                        <a
                            href="/almadelatinohd"
                            className={`fullpage-redirect-link${redirecting ? ' clicked' : ''}`}
                            onClick={handleRedirect}
                            aria-busy={redirecting}
                        >
                            <img src="/assets/images/almadelatinoshd.png" alt="Alma de Latino HD" className="fullpage-redirect-logo" />
                        </a>
                        <p>Haz clic para entrar al contenido especial.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
