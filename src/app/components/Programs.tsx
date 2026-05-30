import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Dumbbell, Zap, Heart, Target, User, Apple } from 'lucide-react';

export function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const programs = [
    {
      icon: Dumbbell,
      title: 'Musculation',
      description: 'Développez votre masse musculaire avec des programmes de surcharge progressive scientifiquement conçus.',
      features: ['Entraînement Hypertrophie', 'Sculpture Musculaire', 'Gains de Force'],
    },
    {
      icon: Zap,
      title: 'Entraînement Fonctionnel',
      description: 'Améliorez vos mouvements du quotidien pour une meilleure performance athlétique.',
      features: ['Stabilité du Core', 'Travail de Mobilité', 'Qualité du Mouvement'],
    },
    {
      icon: Heart,
      title: 'Cardio',
      description: 'Élevez votre endurance cardiovasculaire avec nos programmes cardio haute performance.',
      features: ['Sessions HIIT', 'Développement Endurance', 'Brûlage de Graisse'],
    },
    {
      icon: Target,
      title: 'Cross Training',
      description: 'Entraînements variés combinant force, cardio et mouvements gymnastiques.',
      features: ['Conditionnement Complet', 'Performance Athlétique', 'Entraînement Métabolique'],
    },
    {
      icon: User,
      title: 'Coaching Personnel',
      description: 'Entraînement d\'élite individuel adapté à vos objectifs et besoins spécifiques.',
      features: ['Programmes Sur Mesure', 'Attention Individuelle', 'Atteinte des Objectifs'],
    },
    {
      icon: Apple,
      title: 'Coaching Nutritionnel',
      description: 'Optimisez vos résultats avec des stratégies nutritionnelles personnalisées.',
      features: ['Planification Repas', 'Suivi Macros', 'Équilibre de Vie'],
    },
  ];

  return (
    <section id="programs" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Nos Programmes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Entraînez-vous Comme
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] bg-clip-text text-transparent">
              Un Athlète D'Élite
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Choisissez parmi notre gamme complète de programmes premium conçus par des coachs experts
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-500"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <program.icon className="text-[#D4AF37]" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
