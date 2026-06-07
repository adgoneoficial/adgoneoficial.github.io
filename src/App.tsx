import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import StarBackground from './components/StarBackground';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Header />

      {/* Fondo de Neuronas Fijo con efecto Mate Profundo */}
      <div className="fixed inset-0 z-[-1] bg-white/10 backdrop-blur-xl">
        <StarBackground />
      </div>

      <main className='relative flex items-center justify-center w-full min-h-screen pt-24'>
        <div className='flex flex-col items-center justify-center text-center z-10'>
          {/* Logo oficial con interacción circular - Sección 1 */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="p-12 md:p-20 transition-all duration-700 rounded-full group-hover:bg-black/5 transform group-hover:scale-110 flex items-center justify-center">
              <img
                src="/assets/logos/logo.png"
                alt="Canibalización Tecnológica"
                className="w-64 md:w-80 lg:w-[28rem] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>

      <main className='relative flex items-center justify-center w-full min-h-screen'>
        <div className='flex flex-col items-center justify-center text-center z-10'>
          {/* Logo oficial con interacción circular - Sección 2 (Copia) */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="p-12 md:p-20 transition-all duration-700 rounded-full group-hover:bg-black/5 transform group-hover:scale-110 flex items-center justify-center">
              <img
                src="/assets/logos/logo.png"
                alt="Canibalización Tecnológica"
                className="w-64 md:w-80 lg:w-[28rem] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;