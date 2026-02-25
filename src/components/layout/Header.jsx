import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ThemeToggle } from '../theme-toggle';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-cream-100/90 backdrop-blur-md shadow-md py-3 dark:bg-brown-900/90'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white font-playfair font-bold text-xl shadow-lg group-hover:bg-gold-600 transition-colors">
                        S
                    </div>
                    <span className="text-2xl font-playfair font-bold text-brown-900 dark:text-gold-400">
                        Smyluxe<span className="text-gold-500">Dental</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-inter font-medium text-brown-800 dark:text-cream-100 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <div className="hidden lg:flex items-center gap-2 text-brown-800 dark:text-cream-200">
                        <Phone size={18} className="text-gold-500" />
                        <span className="font-semibold text-sm">+91 92702 21037</span>
                    </div>
                    <a href="#contact">
                        <Button className="bg-gold-500 hover:bg-gold-600 text-white font-playfair tracking-wide border-none">
                            Book Appointment
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-brown-900 dark:text-gold-400"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream-50 dark:bg-brown-900 border-t border-gold-200 dark:border-brown-800 absolute w-full shadow-lg"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-playfair font-medium text-lg text-brown-900 dark:text-cream-100 hover:text-gold-500"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px bg-gold-200/50 my-2"></div>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Book Appointment</Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
