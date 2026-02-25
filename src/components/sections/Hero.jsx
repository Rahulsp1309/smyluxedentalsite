import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream-100 dark:bg-neutral-900">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-400/10 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cream-200/50 rounded-full blur-3xl opacity-50 dark:opacity-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold font-playfair leading-[1.1] mb-6 text-brown-900 dark:text-cream-100">
                            Your Journey to a <br />
                            <span className="text-gold-500 italic">
                                Flawless Smile
                            </span> <br />
                            Begins Here
                        </h1>

                        <p className="text-xl text-brown-800/80 dark:text-cream-200/80 mb-8 max-w-lg leading-relaxed font-inter">
                            Experience the pinnacle of modern dental artistry at Ravet's premier dental studio. We blend advanced technology with a personal, luxurious touch for your ultimate comfort and beauty. Serving Ravet, Pune and surrounding areas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a href="#contact">
                                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white text-lg px-8 font-playfair tracking-wide shadow-xl shadow-gold-500/20">
                                    Book Your Bespoke Consultation
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Image / Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[1px] border-gold-200 dark:border-brown-800">
                            <img
                                src="/images/hero-clinic.png"
                                alt="Smyluxe Dental Clinic"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-8 left-8 bg-cream-50/90 dark:bg-brown-900/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gold-100 dark:border-gold-900/30 flex items-center gap-4 max-w-xs"
                            >
                                <div className="bg-gold-100 p-2 rounded-full text-gold-600">
                                    <Star fill="currentColor" size={24} />
                                </div>
                                <div>
                                    <p className="font-bold font-playfair text-brown-900 dark:text-gold-100">State of the Art</p>
                                    <p className="text-xs text-brown-600 dark:text-cream-200/70">Premium Dental Care</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Ring */}
                        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-gold-300 rounded-full opacity-60 mix-blend-multiply" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
