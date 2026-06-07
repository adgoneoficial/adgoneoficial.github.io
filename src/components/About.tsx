import InstagramEmbed from './InstagramEmbed';

const instagramUrls = [
    'https://www.instagram.com/p/DT57CJYEXJG/',
    'https://www.instagram.com/p/DRxqBW5jwb8/',
    'https://www.instagram.com/p/DPxb97ODAMK/',
    'https://www.instagram.com/p/DOcxY7_jcSx/',
    'https://www.instagram.com/p/DOMQKJVj1w1/',
    'https://www.instagram.com/reel/DN1XhqS3kT5/',
];

const youtubeUrls = [
    'https://youtu.be/3ZeN9Fia2v8',
    'https://youtu.be/RWiWoAuTB6k',
];

const getYoutubeEmbedUrl = (url: string) => {
    const idMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
    return idMatch ? `https://www.youtube.com/embed/${idMatch[1]}?rel=0` : '';
};

const About = () => {
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
                </div>
            </div>
        </section>
    );
};

export default About;
