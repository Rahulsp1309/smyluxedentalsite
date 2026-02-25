import React from 'react';
import { motion } from 'framer-motion';

const DoctorCard = ({ name, role, subRole, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-3xl bg-white dark:bg-brown-900 shadow-xl border-4 border-white dark:border-brown-800"
    >
        <div className="aspect-[3/3.5] overflow-hidden relative">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover grayscale-0 transition-all duration-500 transform group-hover:scale-105"
            />
        </div>
        <div className="p-6 text-center bg-white dark:bg-brown-900">
            <h3 className="text-2xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-2 text-gold-600 dark:text-gold-400">{name}</h3>
            <p className="text-brown-600 dark:text-cream-200 font-bold font-inter text-sm mb-1 uppercase tracking-wider">{role}</p>
            {subRole && <p className="text-brown-500 dark:text-cream-300 font-medium font-inter text-sm uppercase tracking-wide">{subRole}</p>}
        </div>
    </motion.div>
);

const Doctors = () => {
    const doctors = [
        {
            name: "Dr. Ketan Patil",
            role: "BDS, MUHS",
            subRole: "General Dentist",
            image: "/images/doctors/dr-ketan.jpg?v=2"
        },
        {
            name: "Dr. Chhaya Patil",
            role: "MDS, MUHS",
            subRole: "Implant Surgeon",
            image: "/images/doctors/dr-chhaya.jpg?v=2"
        }
    ];

    return (
        <section id="doctors" className="py-24 bg-[#FFFBF0] dark:bg-neutral-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-gold-500 mb-6"
                    >
                        Our Expert Team
                    </motion.h2>
                </div>
                <div className="flex flex-wrap justify-center gap-16">
                    {doctors.map((doc, index) => (
                        <div key={index} className="w-full md:w-1/3 max-w-sm">
                            <DoctorCard {...doc} delay={index * 0.1} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
