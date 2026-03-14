import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import emailjs from '@emailjs/browser';

const InputField = ({ label, type = "text", placeholder, name, required }) => (
    <div className="mb-4">
        <label className="block text-brown-900 dark:text-cream-100 font-inter font-medium mb-2">{label}</label>
        <input
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-lg bg-cream-50 dark:bg-brown-900/50 border border-gold-200 dark:border-brown-700 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all font-inter text-brown-800 dark:text-cream-100"
        />
    </div>
);

const Contact = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_USER_ID;

        if (!serviceId || !templateId || !publicKey) {
            setStatus('error');
            setErrorMessage('Email service not configured. Please add EmailJS credentials to .env');
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, formRef.current, { publicKey })
            .then(
                () => {
                    setStatus('success');
                    formRef.current?.reset();
                },
                (error) => {
                    setStatus('error');
                    setErrorMessage(error.text || 'Failed to send. Please try again.');
                }
            );
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-50/50 dark:bg-brown-900/20 -skew-x-12 transform translate-x-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-gold-600 font-medium uppercase tracking-widest text-sm mb-2 block">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brown-900 dark:text-cream-100 mb-6">
                            Book Your Appointment
                        </h2>
                        <p className="text-brown-800/70 dark:text-cream-200/70 font-inter mb-10 max-w-md">
                            Ready to transform your smile? Fill out the form below and our team will get back to you immediately to confirm your visit.
                        </p>

                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="bg-white dark:bg-brown-900 p-8 rounded-2xl shadow-xl border border-gold-100 dark:border-brown-800"
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <InputField label="Full Name" name="name" placeholder="Rahul Sharma" required />
                                <InputField label="Phone Number" type="tel" name="phone" placeholder="+91 98765 43210" required />
                            </div>
                            <InputField label="Email Address" type="email" name="email" placeholder="rahul.sharma@example.com" required />
                            <div className="mb-4">
                                <label className="block text-brown-900 dark:text-cream-100 font-inter font-medium mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    name="preferred_date"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-cream-50 dark:bg-brown-900/50 border border-gold-200 dark:border-brown-700 focus:border-gold-500 outline-none text-brown-800 dark:text-cream-100"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-brown-900 dark:text-cream-100 font-inter font-medium mb-2">Message (Optional)</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    placeholder="Tell us about your dental needs..."
                                    className="w-full px-4 py-3 rounded-lg bg-cream-50 dark:bg-brown-900/50 border border-gold-200 dark:border-brown-700 focus:border-gold-500 outline-none transition-all font-inter text-brown-800 dark:text-cream-100"
                                ></textarea>
                            </div>

                            {status === 'success' && (
                                <div className="mb-4 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 flex items-center gap-2 font-inter">
                                    <CheckCircle size={20} className="shrink-0" />
                                    <span>Request sent! We&apos;ll get back to you soon.</span>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mb-4 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 flex items-start gap-2 font-inter">
                                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-gold-500 hover:bg-gold-600 text-white text-lg py-6 font-playfair shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={22} className="animate-spin mr-2" />
                                        Sending...
                                    </>
                                ) : (
                                    'Submit Request'
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center gap-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Our Location</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    Shop No. 203,2nd Floor, Neo 95 Ravet,<br />Pune, Pimpri-Chinchwad, Maharashtra 412101
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Phone Number</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    +91 92702 21037
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <Mail className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Email Address</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    smyluxestudios@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gold-100 dark:bg-brown-800 rounded-full flex items-center justify-center shrink-0">
                                <Clock className="text-gold-600 dark:text-gold-400" size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-playfair font-bold text-brown-900 dark:text-gold-100 mb-1">Working Hours</h4>
                                <p className="text-brown-800/70 dark:text-cream-200/70 font-inter">
                                    Mon - Sat: 10:00 AM - 9:00 PM<br />Sun: By Appointment
                                </p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-cream-100 rounded-2xl mt-8 overflow-hidden shadow-inner border border-gold-100">
                            <iframe
                                src="https://maps.google.com/maps?q=Neo+95+Ravet,+Pune&hl=en&z=17&amp;output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-90 hover:opacity-100 transition-all duration-500 rounded-2xl"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
