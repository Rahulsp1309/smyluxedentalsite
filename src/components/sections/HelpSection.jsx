import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const HelpCard = ({ title, image, color, delay, onClick }) => {
    const isTeal = color === 'teal';
    const mainColor = isTeal ? 'text-dental-teal' : 'text-dental-purple';
    const borderColor = isTeal ? 'border-dental-purple' : 'border-dental-teal';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="flex flex-col items-center group cursor-pointer"
            onClick={onClick}
        >
            <div className={`relative w-32 h-32 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {/* Dotted border ring - Rotating */}
                <div className={`absolute inset-0 rounded-full border-[3px] border-dotted ${borderColor} opacity-60 scale-110 group-hover:rotate-45 transition-transform duration-700`}></div>

                {/* Inner solid circle - White background for image */}
                <div className={`w-full h-full rounded-full bg-white flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden border-4 ${isTeal ? 'border-dental-teal/20' : 'border-dental-purple/20'}`}>
                    <img src={image} alt={title} className="w-20 h-20 object-contain" />
                </div>
            </div>

            <h3 className="text-xl font-inter font-medium text-brown-900 dark:text-cream-100 mb-3 text-center group-hover:text-gold-600 transition-colors">{title}</h3>

            {/* Animated Arrow Button */}
            <div className={`w-10 h-10 rounded-full border-2 ${borderColor} flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}>
                <ArrowRight className={`w-5 h-5 ${mainColor}`} />
            </div>
        </motion.div>
    );
};

const HelpSection = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        {
            title: "I'm In Pain",
            image: "/images/icons/pain.png",
            color: 'teal',
            description: "Dental pain can be overwhelming. Whether it's a severe toothache, sensitivity, or an infection, our emergency team is ready to provide immediate relief and treat the root cause effectively."
        },
        {
            title: "I Have Missing Teeth",
            image: "/images/icons/missing.png",
            color: 'purple',
            description: "Missing teeth can affect your smile and chewing ability. We offer advanced restorative solutions like Dental Implants, Bridges, and Dentures to restore your confidence and oral function."
        },
        {
            title: "I Want Better Smile",
            image: "/images/icons/smile.png",
            color: 'teal',
            description: "Unlock your best smile with our cosmetic treatments. From Porcelain Veneers and Teeth Whitening to full Smile Makeovers, we design a smile that perfectly suits your face and personality."
        },
        {
            title: "I Want To Be Cavity Free",
            image: "/images/icons/cavity.png",
            color: 'purple',
            description: "Prevention is better than cure. Our comprehensive exams, professional cleanings, and fluoride treatments are designed to keep your teeth healthy, strong, and cavity-free for life."
        },
    ];

    return (
        <section className="py-20 bg-cream-100 dark:bg-neutral-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-600 dark:text-gold-400 font-medium uppercase tracking-widest mb-2"
                    >
                        Smyluxe Dental
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-brown-900 dark:text-cream-100"
                    >
                        HELP US TO HELP YOU!
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        className="h-1 w-24 bg-gold-400 mx-auto mt-6 rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                    {cards.map((card, index) => (
                        <HelpCard
                            key={index}
                            {...card}
                            delay={index * 0.1}
                            onClick={() => setSelectedCard(card)}
                        />
                    ))}
                </div>
            </div>

            {/* Content Modal */}
            <AnimatePresence>
                {selectedCard && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-2xl max-w-md w-full border border-gold-400/20 z-10"
                        >
                            <button
                                onClick={() => setSelectedCard(null)}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 dark:bg-neutral-800 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <div className={`w-28 h-28 rounded-full flex items-center justify-center mb-6 bg-white overflow-hidden shadow-xl border-4 ${selectedCard.color === 'teal' ? 'border-dental-teal/20' : 'border-dental-purple/20'}`}>
                                    <img src={selectedCard.image} alt={selectedCard.title} className="w-24 h-24 object-contain" />
                                </div>
                                <h3 className="text-2xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-4">{selectedCard.title}</h3>
                                <p className="text-brown-600 dark:text-cream-200 mb-8 leading-relaxed font-inter">
                                    {selectedCard.description}
                                </p>
                                <a
                                    href="#contact"
                                    onClick={() => setSelectedCard(null)}
                                    className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-bold shadow-lg hover:shadow-gold-500/30 hover:scale-105 transition-all duration-300"
                                >
                                    Book Consultation
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HelpSection;
