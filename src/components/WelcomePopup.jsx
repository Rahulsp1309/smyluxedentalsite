import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile } from 'lucide-react';

export default function WelcomePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the popup after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white dark:bg-neutral-900 border-[3px] border-gold-400 rounded-2xl shadow-2xl shadow-gold-900/10 max-w-[360px] w-full p-10 text-center relative overflow-hidden"
                    >
                        {/* Soft background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-6 shadow-md text-white">
                                <Smile size={32} strokeWidth={2.5} />
                            </div>

                            <h2 className="text-[28px] font-playfair font-bold text-gold-600 mb-4 leading-[1.15]">
                                Welcome to<br />Smyluxe<br />Studios!
                            </h2>

                            <p className="text-brown-800 dark:text-cream-200 font-inter text-[15px] font-medium mb-8">
                                Your flawless smile journey starts now.
                            </p>

                            <button
                                onClick={handleClose}
                                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-inter font-medium py-3 px-8 rounded-full shadow-lg shadow-gold-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start Exploring
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
