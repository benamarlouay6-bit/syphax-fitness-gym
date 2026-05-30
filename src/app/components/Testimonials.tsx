import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Amira Belhadj',
      role: 'Passionnée de Fitness',
      image: '👩‍🦱',
      rating: 5,
      text: 'Syphax Gym a transformé ma vie. Les entraîneurs sont exceptionnels, les équipements sont de classe mondiale, et l\'atmosphère est incroyablement motivante. J\'ai obtenu des résultats que je n\'aurais jamais cru possibles.',
    },
    {
      name: 'Mohamed Zouari',
      role: 'Athlète Professionnel',
      image: '🧑',
      rating: 5,
      text: 'En tant qu\'athlète professionnel, j\'exige l\'excellence. Syphax Gym offre tout à tous les niveaux - des installations de pointe au coaching expert. C\'est ici que les champions sont formés.',
    },
    {
      name: 'Sarah Khelifi',
      role: 'Compétitrice Bodybuilding',
      image: '👩',
      rating: 5,
      text: 'Les programmes d\'entraînement personnalisés et les conseils nutritionnels m\'ont aidée à atteindre mes objectifs de compétition. La communauté ici est soutenante et inspirante. J\'adore cette salle!',
    },
    {
      name: 'Khalil Messaoudi',
      role: 'Professionnel',
      image: '👨‍💼',
      rating: 5,
      text: 'Mélange parfait de luxe et de performance. L\'accès 24/7 correspond à mon emploi du temps chargé, et les résultats parlent d\'eux-mêmes. Chaque dinar en vaut la peine - c\'est le fitness premium à son meilleur.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Témoignages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Histoires De
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] bg-clip-text text-transparent">
              Réussite
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Découvrez les témoignages de nos membres qui ont transformé leur vie au Syphax Gym
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Testimonial Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={120} className="text-[#D4AF37]" />
              </div>

              <div className="relative">
                {/* Rating */}
                <motion.div
                  key={`rating-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-1 mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </motion.div>

                {/* Text */}
                <motion.p
                  key={`text-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed italic"
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-full flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-[#D4AF37] text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent rounded-3xl pointer-events-none" />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <ChevronLeft size={20} className="text-white" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-[#D4AF37]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <ChevronRight size={20} className="text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
