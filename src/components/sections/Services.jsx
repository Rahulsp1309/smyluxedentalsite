import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '../ui/button';

const ServiceCard = ({ service, onClick }) => (
    <motion.div
        layoutId={`service-${service.id}`}
        className="group relative overflow-hidden rounded-2xl bg-cream-50 dark:bg-brown-900 border border-gold-100 dark:border-brown-800 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 cursor-pointer"
        onClick={() => onClick(service)}
    >
        <div className="aspect-[4/3] overflow-hidden">
            <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/90 via-brown-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
        <div className="p-6 relative">
            <h3 className="text-2xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-2 group-hover:text-gold-600 transition-colors">{service.title}</h3>
            <p className="text-brown-800/70 dark:text-cream-200/70 font-inter line-clamp-2 mb-4">{service.shortDesc}</p>
            <div className="flex items-center text-gold-600 font-medium font-inter text-sm group-hover:translate-x-2 transition-transform">
                View Details <ArrowRight className="w-4 h-4 ml-1" />
            </div>
        </div>
    </motion.div>
);

const ServiceModal = ({ service, onClose }) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 px-4">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
            layoutId={`service-${service.id}`}
            className="bg-white dark:bg-brown-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative z-10"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-20"
            >
                <X size={20} />
            </button>

            <div className="relative h-64 md:h-80">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900 to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">{service.title}</h2>
                </div>
            </div>

            <div className="p-8">
                <p className="text-brown-800/80 dark:text-cream-200/80 font-inter leading-relaxed text-lg mb-8">
                    {service.fullDesc}
                </p>

                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-4">Treatment Benefits</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-brown-700 dark:text-cream-200/70 font-inter">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-3" />
                            {benefit}
                        </li>
                    ))}
                </ul>

                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white text-lg py-6 font-playfair shadow-lg" onClick={onClose}>
                    Book Consultation
                </Button>
            </div>
        </motion.div>
    </div>
);

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Hollywood Whitening",
            shortDesc: "Achieve a dazzling, camera-ready smile with our advanced whitening systems.",
            fullDesc: "Our Hollywood Whitening treatment is a premium cosmetic procedure designed to lift deep stains and brighten your smile by multiple shades. Using the latest light-activated technology combined with medical-grade whitening agents, we ensure safety and spectacular results in just one session.",
            image: "/images/services/whitening.png",
            benefits: ["Instant Results", "Enamel Safe", "Long-lasting Brightness", "Custom Shade Selection"]
        },
        {
            id: 2,
            title: "Porcelain Veneers",
            shortDesc: "Transform imperfect teeth into perfection with custom-crafted veneers.",
            fullDesc: "Porcelain veneers are thin, custom-made shells designed to cover the front surface of teeth to improve your appearance. They are bonded to the front of the teeth changing their color, shape, size, or length. Ideal for teeth that are discolored, worn down, chipped, or broken.",
            image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop",
            benefits: ["Natural Appearance", "Stain Resistant", "Durable Material", "Minimal Tooth Reduction"]
        },
        {
            id: 3,
            title: "General Dentistry",
            shortDesc: "Comprehensive care for maintaining optimal oral health for the whole family.",
            fullDesc: "General dentistry covers a wide range of procedures fundamental to protecting and maintaining good oral health. From routine scaling and polishing to fillings and root canal treatments, our expert team ensures your teeth and gums stay healthy year-round.",
            image: "/images/services/general-dentistry.png",
            benefits: ["Preventative Care", "Early Detection", "Comprehensive Exams", "Gum Health Maintenance"]
        },
        {
            id: 4,
            title: "Orthodontics",
            shortDesc: "Straighten your teeth with modern solutions like Invisalign and fast braces.",
            fullDesc: "Our orthodontic treatments correct teeth and jaws that are positioned improperly. Crooked teeth and teeth that do not fit together correctly are harder to keep clean and at risk of being lost early. We offer both traditional braces and clear aligners like Invisalign.",
            image: "/images/services/orthodontics.png",
            benefits: ["Improved Bite", "Easier Cleaning", "Aesthetic Alignment", "Correction of Jaw Pain"]
        },
        {
            id: 5,
            title: "Dental Implants",
            shortDesc: "The premier solution for missing teeth, offering permanence and stability.",
            fullDesc: "Dental implants provide a strong foundation for fixed (permanent) or removable replacement teeth that are made to match your natural teeth. They are the closest you can get to healthy, natural teeth, allowing you to eat, speak, smile, and laugh with confidence.",
            image: "/images/services/implants.png",
            benefits: ["Permanent Solution", "Bone Preservation", "Natural Function", "No Impact on Adjacent Teeth"]
        },
        {
            id: 6,
            title: "Gum Care",
            shortDesc: "Specialized treatments to ensure the foundation of your smile stays healthy.",
            fullDesc: "Periodontal (gum) health is vital for whole-body wellness. Our gum care treatments range from deep cleaning (scaling and root planing) to laser treatments for gum disease, ensuring your gums remain pink, firm, and healthy supports for your teeth.",
            image: "/images/services/gum-care.png",
            benefits: ["Prevents Tooth Loss", "Reduces Sensitivity", "Eliminates Bad Breath", "Systemic Health Benefits"]
        }
    ];

    return (
        <section id="services" className="py-24 bg-cream-100 dark:bg-neutral-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-brown-900 dark:text-cream-100 mb-6"
                    >
                        Our Premium Services
                    </motion.h2>
                    <div className="h-1 w-24 bg-gold-400 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onClick={setSelectedService}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <ServiceModal
                        service={selectedService}
                        onClose={() => setSelectedService(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
