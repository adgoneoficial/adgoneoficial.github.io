import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Stage 1: Show "c a n i t y" (automatic via initial animation)

        // Stage 2: Change to full text after 1.8s
        const timer1 = setTimeout(() => {
            setShowFullText(true);
        }, 1800);

        // Stage 3: Start curtain exit after 4s
        const timer2 = setTimeout(() => {
            setIsExiting(true);
        }, 4000);

        // Stage 4: Remove component after curtain animation
        const timer3 = setTimeout(() => {
            onComplete();
        }, 5200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    const curtainVariants: Variants = {
        initialLeft: { x: 0 },
        initialRight: { x: 0 },
        exitLeft: {
            x: '-100%',
            transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
        },
        exitRight: {
            x: '100%',
            transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
        }
    };

    const textVariants: Variants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                {!isExiting && (
                    <motion.div
                        key={showFullText ? "full" : "short"}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={textVariants}
                        className="z-[110] text-center px-4"
                    >
                        <h1
                            className="text-white font-bold text-3xl md:text-5xl uppercase tracking-[0.2em] md:tracking-[0.4em]"
                            style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                        >
                            {showFullText ? (
                                <span className="inline-block">
                                    <span className="text-red-600">Canibalización</span>
                                    <br className="md:hidden" />
                                    <span className="text-gray-400 md:ml-4 text-[0.85em]">Tecnológica</span>
                                </span>
                            ) : (
                                "c a n i t y"
                            )}
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '80%' }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mt-4 mx-auto"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Curtains */}
            <motion.div
                variants={curtainVariants}
                initial="initialLeft"
                animate={isExiting ? "exitLeft" : "initialLeft"}
                className="absolute top-0 left-0 w-1/2 h-full bg-black z-[105] border-r border-white/10"
            />
            <motion.div
                variants={curtainVariants}
                initial="initialRight"
                animate={isExiting ? "exitRight" : "initialRight"}
                className="absolute top-0 right-0 w-1/2 h-full bg-black z-[105] border-l border-white/10"
            />
        </div>
    );
};

export default LoadingScreen;
