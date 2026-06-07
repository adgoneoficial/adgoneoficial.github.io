import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaYoutube, FaTiktok, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StarBackground from './StarBackground';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar menú al cambiar de ruta
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <motion.header
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
            }}
            className={`fixed z-50 flex flex-col transition-all duration-700 shadow-2xl overflow-hidden
                    ${isMenuOpen
                    ? 'top-4 left-1/2 -translate-x-1/2 w-[98%] h-[92vh] px-8 py-6 rounded-[3rem]'
                    : isScrolled
                        ? 'top-4 left-1/2 -translate-x-1/2 w-[70%] h-16 px-6 py-0 rounded-full'
                        : 'top-6 left-1/2 -translate-x-1/2 w-[98%] h-24 px-12 py-0 rounded-[2.5rem]'
                } 
                    ${isMenuOpen ? 'bg-white/40 backdrop-blur-3xl' : 'bg-white/20 backdrop-blur-2xl'}
                `}
        >
            {/* Top Bar Row (Siempre visible) */}
            <div className={`flex items-center justify-between w-full shrink-0 transition-all duration-500 ${!isMenuOpen && (isScrolled ? 'h-16' : 'h-24')}`}>
                {/* Izquierda: 3 punticos */}
                <motion.div
                    className="flex items-center gap-2 cursor-pointer h-10 w-20 z-10"
                    initial="initial"
                    whileHover="hover"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    animate={isMenuOpen ? { scale: 1.1 } : { scale: 1 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className={`w-3 h-3 bg-neutral-800 rounded-full shadow-sm ${isMenuOpen ? 'bg-red-600' : ''}`}
                            variants={{
                                initial: { x: 0, opacity: 1, scale: 1 },
                                hover: {
                                    x: i === 0 ? 20 : i === 2 ? -20 : 0,
                                    opacity: 0,
                                    scale: 0.2,
                                    transition: {
                                        duration: 0.5,
                                        ease: "backIn"
                                    }
                                }
                            }}
                        />
                    ))}
                </motion.div>

                {/* Derecha: Search / Info */}
                <div className={`flex flex-col items-center group cursor-pointer transition-all duration-500 z-10 ${(isScrolled && !isMenuOpen) ? 'scale-90 gap-0' : 'gap-1'}`}>
                    <div className="p-2 transition-colors duration-300 rounded-full group-hover:bg-black/5">
                        <FaSearch className={`${(isScrolled && !isMenuOpen) ? 'text-xl' : 'text-2xl'} text-neutral-800 transition-all duration-500`} />
                    </div>
                    {(!isScrolled || isMenuOpen) && (
                        <motion.span
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-bold tracking-wider text-neutral-800 uppercase"
                        >
                            Canibal Tech
                        </motion.span>
                    )}
                </div>
            </div>

            {/* Menu Content Area (Solo visible cuando se abre la barra) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                        className="w-full flex-1 overflow-y-auto mt-8 no-scrollbar pb-12 relative"
                    >
                        {/* El fondo de agujero negro dentro de la barra expandida */}
                        <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
                            <StarBackground />
                        </div>

                        <div className="flex flex-col items-center w-full relative z-10">
                            <h2
                                className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter text-neutral-900 uppercase text-center leading-[0.85] mb-8"
                                style={{
                                    fontFamily: "'Permanent Marker', cursive",
                                    textShadow: '6px 6px 0px rgba(0,0,0,0.1)',
                                    transform: 'rotate(-1.5deg)'
                                }}
                            >
                                CANIBALIZACIÓN <br /> TECNOLÓGICA
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                    className="inline-block translate-y-2 ml-4"
                                >
                                    _
                                </motion.span>
                            </h2>

                            <div className="w-24 h-1 bg-neutral-900 mx-auto mt-2 opacity-10 mb-8" />

                            {/* Social Buttons */}
                            <div className="flex justify-center items-center gap-10 mb-12">
                                <a href="https://www.youtube.com/@Canibalizaci%C3%B3nTecnol%C3%B3gica" target="_blank" rel="noopener noreferrer" className="text-neutral-800 hover:scale-125 transition-transform">
                                    <FaYoutube size={36} />
                                </a>
                                <a href="https://www.tiktok.com/@canibalismo_tecnologico" target="_blank" rel="noopener noreferrer" className="text-neutral-800 hover:scale-125 transition-transform">
                                    <FaTiktok size={32} />
                                </a>
                                <a href="https://x.com/CanibalTech" target="_blank" rel="noopener noreferrer" className="text-neutral-800 hover:scale-125 transition-transform">
                                    <FaTwitter size={32} />
                                </a>
                                <a href="https://github.com/adgoneoficial" target="_blank" rel="noopener noreferrer" className="text-neutral-800 hover:scale-125 transition-transform">
                                    <FaGithub size={36} />
                                </a>
                            </div>

                            {/* Profiles */}
                            <div className="flex flex-col md:flex-row justify-center items-center gap-14 mb-16">
                                <div className="flex flex-col items-center gap-4">
                                    <Link to="/jcastanodev" onClick={() => setIsMenuOpen(false)} className="hover:scale-110 transition-transform duration-300">
                                        <img src="/assets/images/jcastanodev.png" alt="Jcastanodev" className="h-28 object-contain" />
                                    </Link>
                                    <span className="px-5 py-2 text-sm font-black text-white bg-neutral-900 rounded-xl uppercase tracking-widest">JCASTANODEV</span>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <Link to="/camiluds" onClick={() => setIsMenuOpen(false)} className="hover:scale-110 transition-transform duration-300">
                                        <img src="/assets/images/camiluds logo.png" alt="Camiluds" className="h-28 object-contain" />
                                    </Link>
                                    <span className="px-5 py-2 text-sm font-black text-white bg-neutral-900 rounded-xl uppercase tracking-widest">CAMILUDS</span>
                                </div>
                            </div>

                            {/* Navigation Grid inside the bar */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl px-4">
                                {[
                                    { id: '01', title: 'Proyectos', desc: 'Explora nuestras últimas integraciones y desarrollos.' },
                                    { id: '02', title: 'Sobre Nosotros', desc: 'Conoce el equipo detrás de la canibalización.' },
                                    { id: '03', title: 'Blog Tech', desc: 'Artículos sobre IA, programación y gadgets.' },
                                    { id: '04', title: 'Contacto', desc: '¿Tienes una idea? Hablemos y hagámosla realidad.' }
                                ].map((item) => (
                                    <div key={item.id} className="p-6 border border-black/5 rounded-3xl hover:bg-black/5 transition-colors cursor-pointer group">
                                        <span className="text-black/30 font-mono text-xs uppercase mb-1 block">{item.id} //</span>
                                        <h3 className="text-2xl font-black text-neutral-900 uppercase tracking-tighter">{item.title}</h3>
                                        <p className="text-black/50 mt-1 font-mono text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
