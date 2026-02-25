import { motion } from "framer-motion";
import { Check, Clock, Shield, Award } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: Award,
            title: "Expert Team",
            description: "Our dentists are highly qualified with years of experience in specialized dental care."
        },
        {
            icon: Shield,
            title: "Modern Technology",
            description: "We use state-of-the-art equipment to ensure precise diagnoses and comfortable treatments."
        },
        {
            icon: Clock,
            title: "Convenient Hours",
            description: "Flexible scheduling including evenings and weekends to fit your busy lifestyle."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gold-100 dark:border-brown-800">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                                    alt="Modern Dental Clinic Interior"
                                    className="w-full h-auto"
                                />
                            </div>


                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-brown-900 dark:text-cream-100 mb-6">
                            Experience the <span className="text-gold-500">BrightSmile</span> Difference
                        </h2>
                        <p className="text-lg text-brown-800/80 dark:text-cream-200/80 mb-8 font-inter">
                            We prioritize your comfort and dental health above all else. Our clinic is designed to provide a relaxing atmosphere where you can feel at ease.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-100 dark:bg-gold-500/20 flex items-center justify-center text-gold-600 dark:text-gold-400">
                                        <feature.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-brown-900 dark:text-gold-100 mb-2 font-playfair">{feature.title}</h3>
                                        <p className="text-brown-600 dark:text-cream-100 font-inter">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
