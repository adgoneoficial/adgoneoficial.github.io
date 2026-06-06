import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const leftRef = useRef<HTMLImageElement | null>(null);
  const rightRef = useRef<HTMLImageElement | null>(null);
  const centerRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (e.clientX - w / 2) / (w / 2);
      const y = (e.clientY - h / 2) / (h / 2);
      if (leftRef.current) leftRef.current.style.transform = `translate3d(${x * 6}px,${y * -6}px,0) rotate(${x * 3}deg)`;
      if (rightRef.current) rightRef.current.style.transform = `translate3d(${x * -6}px,${y * -6}px,0) rotate(${x * -3}deg)`;
      if (centerRef.current) centerRef.current.style.transform = `translate3d(${x * 4}px,${y * -4}px,0)`;
    }
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', () => {
      if (leftRef.current) leftRef.current.style.transform = '';
      if (rightRef.current) rightRef.current.style.transform = '';
      if (centerRef.current) centerRef.current.style.transform = '';
    });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key="par-entrance"
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#000' }}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
              <div style={{ position: 'relative' }}>
                <motion.img
                  ref={leftRef}
                  src="/assets/images/angelzombiehd.png"
                  alt="Angel"
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.06)', boxShadow: '0 10px 30px rgba(0,0,0,.7)' }}
                />
              </div>
              <motion.img
                ref={centerRef}
                src="/assets/images/parzombieshd.png"
                alt="Par ZombiesHD"
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: 320, height: 'auto', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,.8))' }}
              />
              <div style={{ position: 'relative' }}>
                <motion.img
                  ref={rightRef}
                  src="/assets/images/jhonaszombiehd.jpg"
                  alt="Jhonas"
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.06)', boxShadow: '0 10px 30px rgba(0,0,0,.7)' }}
                />
              </div>
            </div>
            <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', color: '#fff', fontSize: 28, letterSpacing: 2, padding: '12px 20px', borderRadius: 8, textTransform: 'uppercase' }}>par zombieshd</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;