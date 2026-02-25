import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ name, role, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-white dark:bg-brown-900 p-8 rounded-[2rem] relative shadow-lg text-center flex flex-col items-center border-t-[6px] border-gold-400"
    >
        <div className="text-gold-400 mb-2">
            <Star size={24} fill="currentColor" />
        </div>
        <div className="text-gold-400 mb-6 text-2xl font-serif">
            "
        </div>

        <p className="text-brown-800/80 dark:text-cream-200/80 italic font-inter text-[0.95rem] leading-7 mb-8 px-2">
            {text}
        </p>

        <div className="mt-auto">
            <h4 className="font-bold text-gold-500 dark:text-gold-400 font-inter text-lg">{name}, {role}</h4>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const reviews = [
        {
            name: "Priya Sharma",
            role: "Entrepreneur",
            text: "My smile has never looked better! The attention to detail and personalized care at Smyluxe Dental Studio is absolutely unmatched. A truly transformative experience."
        },
        {
            name: "Rohit Verma",
            role: "Architect",
            text: "The perfect blend of luxury and professionalism. The studio is so tranquil, I felt completely at ease, like royalty. The results exceeded all my expectations."
        },
        {
            name: "Anjali Kapoor",
            role: "Designer",
            text: "The results blew me away! From the warm welcome to the meticulous aftercare, it was a world-class experience. I confidently recommend Smyluxe to everyone!"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-[#FFFBF0] dark:bg-neutral-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold-500 mb-6">
                        Client Impressions
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <TestimonialCard key={index} {...review} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
