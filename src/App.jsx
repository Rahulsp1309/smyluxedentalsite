import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Services from "./components/sections/Services";
import HelpSection from "./components/sections/HelpSection";
import Doctors from "./components/sections/Doctors";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
import WhatsAppButton from "./components/WhatsAppButton";
import WelcomePopup from "./components/WelcomePopup";

const Footer = () => (
  <footer className="bg-brown-900 text-cream-200 py-16 border-t border-gold-600/30">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-2xl font-playfair font-bold text-gold-500 mb-4">Smyluxe Studios</h3>
      <p className="font-inter mb-8 opacity-70">
        Shop No. 203, 2nd Floor, Neo 95 Ravet, Pune, Pimpri-Chinchwad, Maharashtra 412101
      </p>
      <div className="flex justify-center gap-6 mb-8 text-sm opacity-60 font-inter">
        <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
      </div>
      <p className="text-sm opacity-50 font-inter">© 2026 Smyluxe Studios. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-cream-100 dark:bg-neutral-900 font-inter overflow-hidden">
        <Header />
        <main>
          <Hero />
          <HelpSection />
          <Services />
          <Doctors />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <WelcomePopup />
      </div>
    </ThemeProvider>
  );
}

export default App;
