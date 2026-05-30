import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Instagram, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import trainer1 from '../../imports/Capture_d__cran_2026-05-29_193141.png';
import trainer2 from '../../imports/Capture_d__cran_2026-05-29_193303.png';
import trainer3 from '../../imports/Capture_d__cran_2026-05-29_193328.png';

export function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const trainers = [
    {
      image: trainer1,
      name: 'Ahmed Mansouri',
      specialty: 'Force & Conditionnement',
      bio: 'Champion de bodybuilding d\'élite avec plus de 8 ans d\'expérience dans la transformation physique.',
      certifications: ['Certifié ISSA', 'Spécialiste Nutrition'],
    },
    {
      image: trainer2,
      name: 'Karim Benali',
      specialty: 'Entraînement Fonctionnel',
      bio: 'Ancien athlète national spécialisé dans le mouvement fonctionnel et l\'optimisation des performances.',
      certifications: ['CrossFit Level 2', 'Coach Mouvement'],
    },
    {
      image: trainer3,
      name: 'Youssef Trabelsi',
      specialty: 'Coaching Personnel',
      bio: 'Coach personnel dévoué, concentré sur les programmes individualisés et les changements durables.',
      certifications: ['Certifié ACE', 'Coach Bien-être'],
    },
  ];

  return (
    <section id="trainers" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Coachs D'Élite</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Rencontrez Vos
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] bg-clip-text text-transparent">
              Entraîneurs Experts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Nos coachs certifiés apportent des décennies d'expérience combinée pour guider votre transformation
          </motion.p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Social */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <Instagram size={18} className="text-white" />
                  </motion.button>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/50 rounded-full px-4 py-1.5 flex items-center gap-2">
                    <Award size={16} className="text-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-xs uppercase tracking-wider">Coach Pro</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {trainer.name}
                  </h3>
                  
                  <div className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">
                    {trainer.specialty}
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/60"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}