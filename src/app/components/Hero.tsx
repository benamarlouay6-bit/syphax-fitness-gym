import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../../imports/Capture_d__cran_2026-05-29_193156.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src={heroImage}
          alt="Syphax Gym Training"
          className="w-full h-full object-cover"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              <span className="text-[#D4AF37] text-sm uppercase tracking-widest">
                Expérience Fitness Premium
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              Forgez Votre
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5B8] to-[#D4AF37] bg-clip-text text-transparent">
                Meilleure Version
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl leading-relaxed"
            >
              Expérience fitness premium au cœur de la Tunisie.
              <br />
              Transformez votre corps, élevez votre esprit, libérez votre potentiel.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('membership')}
                className="group bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black px-8 py-4 rounded-full font-medium text-base uppercase tracking-wide hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Rejoignez-nous
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base uppercase tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="group-hover:scale-110 transition-transform" size={20} />
                Réservez une Séance Gratuite
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}