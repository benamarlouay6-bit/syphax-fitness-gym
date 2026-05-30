import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Accueil', id: 'hero' },
    { name: 'À Propos', id: 'about' },
    { name: 'Programmes', id: 'programs' },
    { name: 'Entraîneurs', id: 'trainers' },
    { name: 'Abonnements', id: 'membership' },
    { name: 'Galerie', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-white">SYPHAX</span>
            <span className="text-[#D4AF37] ml-2">GYM</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black px-6 py-2.5 rounded-full font-medium text-sm uppercase tracking-wide hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
          >
            Rejoignez-nous
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl"
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-white/70 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider py-2"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wide mt-4"
          >
            Rejoignez-nous
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
