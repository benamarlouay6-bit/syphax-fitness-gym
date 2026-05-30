import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold tracking-tight mb-4 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-white">SYPHAX</span>
              <span className="text-[#D4AF37] ml-2">GYM</span>
            </motion.div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              La destination fitness premium de Tunisie. Où la discipline rencontre la transformation.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Instagram, Facebook, Mail].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
                >
                  <Icon size={16} className="text-white" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', id: 'hero' },
                { name: 'À Propos', id: 'about' },
                { name: 'Programmes', id: 'programs' },
                { name: 'Entraîneurs', id: 'trainers' },
                { name: 'Abonnements', id: 'membership' },
                { name: 'Galerie', id: 'gallery' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Nos Programmes
            </h4>
            <ul className="space-y-3">
              {['Musculation', 'Entraînement Fonctionnel', 'Cardio', 'Cross Training', 'Coaching Personnel', 'Nutrition'].map((program) => (
                <li key={program}>
                  <button
                    onClick={() => scrollToSection('programs')}
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {program}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  km7 Rte Gremda<br />
                  Sfax 3012, Tunisie
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="tel:50870110" className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors">
                  50 870 110
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@syphaxgym.tn" className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors">
                  info@syphaxgym.tn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-sm">
              © {currentYear} Syphax Gym. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <button className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300 text-sm">
                Politique de Confidentialité
              </button>
              <button className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300 text-sm">
                Conditions d'Utilisation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#D4AF37]/5 blur-[60px]" />
    </footer>
  );
}
