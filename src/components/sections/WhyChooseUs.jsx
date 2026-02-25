import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, ShieldCheck, Clock, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brown-900/50 p-8 rounded-2xl shadow-lg border border-gold-200 dark:border-brown-800 hover:shadow-xl hover:border-gold-400 transition-all duration-300 group"
        >
            <div className="w-14 h-14 bg-cream-100 dark:bg-brown-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-100 dark:group-hover:bg-gold-900/20 transition-colors">
                <Icon className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-3">{title}</h3>
            <p className="text-brown-800/70 dark:text-cream-200/70 font-inter leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
};

const WhyChooseUs = () => {
    const features = [
        {
            icon: Award,
            title: "State-of-the-Art Technology",
            description: "We utilize the latest dental advancements to ensure precise, comfortable, and effective treatments for every patient."
        },
        {
            icon: Users,
            title: "Expert Dental Team",
            description: "Our highly trained specialists bring years of experience and a passion for excellence to your dental care."
        },
        {
            icon: Heart,
            title: "Personalized Care",
            description: "We believe in treating the person, not just the tooth. Your treatment plan is tailored specifically to your unique needs."
        },
        {
            icon: ShieldCheck,
            title: "Sterilization Protocols",
            description: "Safety is our priority. We adhere to the strictest sterilization standards to ensure a hygienic environment."
        },
        {
            icon: Clock,
            title: "Convenient Appointments",
            description: "We respect your time. Flexible scheduling and efficient procedures mean you get back to your life sooner."
        },
        {
            icon: Sparkles,
            title: "Premium Experience",
            description: "From our relaxing ambiance to our comfort amenities, we redefine what a dental visit feels like."
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent opacity-30"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gold-500 font-medium uppercase tracking-widest text-sm mb-2 block"
                    >
                        Why Choose Smyluxe
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-brown-900 dark:text-cream-100 mb-6"
                    >
                        Excellence in Every Detail
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-brown-800/70 dark:text-cream-200/70 max-w-2xl mx-auto font-inter"
                    >
                        We go beyond standard dentistry to provide a holistic, luxurious experience that prioritizes your health and happiness.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
