import { useNavigate } from 'react-router-dom';
import InstagramEmbed from './InstagramEmbed';
import { useState, type MouseEvent } from 'react';

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
                <h2 className="about-title">Lado B</h2>

                <div className="collage-grid">
                    {/* Imágenes */}
                    <div className="collage-item collage-images">
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
                    <div className="collage-item collage-videos">
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
                    <div className="collage-item collage-historia">
                        <div className="collage-header">Historia</div>
                        <div className="historia-placeholder">
                            <img src="/assets/images/angeltv.png" alt="Angel TV" className="historia-fullpage-img" />
                        </div>
                    </div>
                </div>
                {/* Botón grande fullpage al final: acción de redirección a Alma de Latino HD */}
                <div className="fullpage-redirect">
                    <a
                        href="/almadelatinohd"
                        className={`fullpage-redirect-link${redirecting ? ' clicked' : ''}`}
                        onClick={handleRedirect}
                        aria-busy={redirecting}
                    >
                        {redirecting && <div className="click-overlay" />}
                        {redirecting && <div className="click-portal" aria-hidden="true" />}
                        <div className="fullpage-redirect-button-content">
                            {redirecting && <span className="redirecting-text">Cargando Alma...</span>}
                            <img src="/assets/images/almadelatinoshd.png" alt="Alma de Latino HD" className="fullpage-redirect-logo" />
                            <p>Haz clic para entrar al contenido especial.</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
