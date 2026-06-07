import { useEffect, useRef, useState } from 'react';

interface InstagramEmbedProps {
    url: string;
}

const InstagramEmbed = ({ url }: InstagramEmbedProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const loadInstagramEmbed = () => {
            try {
                if ((window as any).instgrm) {
                    (window as any).instgrm.Embeds.process();
                    setIsLoaded(true);
                }
            } catch (error) {
                console.warn('Instagram embed error:', error);
                setHasError(true);
            }
        };

        // Verificar si el script ya existe
        if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
            loadInstagramEmbed();
        } else {
            // Cargar el script de Instagram
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            script.defer = true;

            script.onload = () => {
                loadInstagramEmbed();
            };

            script.onerror = () => {
                console.error('Failed to load Instagram embed script');
            };

            document.body.appendChild(script);
        }

        // Limpiar después del desmontar
        return () => {
            // No eliminamos el script porque podría ser usado por otros embebidos
        };
    }, []);

    // Reintentar procesar si el componente está visible
    useEffect(() => {
        if (!isLoaded && containerRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && (window as any).instgrm) {
                        try {
                            (window as any).instgrm.Embeds.process();
                            setIsLoaded(true);
                        } catch (error) {
                            console.warn('Instagram embed processing error:', error);
                        }
                    }
                });
            });

            observer.observe(containerRef.current);
            return () => observer.disconnect();
        }
    }, [isLoaded]);

    if (hasError) {
        return (
            <div className="instagram-embed-container" style={{ width: '100%', minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: '#ccc', textAlign: 'center', padding: '1rem' }}>
                    No se pudo cargar el contenido de Instagram.
                </div>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className="instagram-embed-container"
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '300px'
            }}
        >
            <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px auto',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: 'calc(100% - 2px)',
                }}
            >
                <div style={{ padding: '16px' }}>
                    <a
                        href={url}
                        style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                            display: 'block',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cargando publicación de Instagram...
                    </a>
                </div>
            </blockquote>
        </div>
    );
};

export default InstagramEmbed;
