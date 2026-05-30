import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Award, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutImage from '../../imports/Capture_d__cran_2026-05-29_193227.png';

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Users, value: 500, suffix: '+', label: 'Membres' },
    { icon: Award, value: 10, suffix: '+', label: 'Coachs' },
    { icon: Clock, value: 24, suffix: '/7', label: 'Disponibilité' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={aboutImage}
                alt="Syphax Gym Training Floor"
                className="w-full h-[600px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-[#D4AF37]/20" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl border border-[#D4AF37]/30 rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-[#D4AF37] mb-1">DEPUIS</div>
                <div className="text-white text-xl">Destination Fitness</div>
                <div className="text-white/60 text-sm mt-1">Première de Tunisie</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-[#D4AF37] text-sm uppercase tracking-widest">À Propos</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Où Les Champions
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] bg-clip-text text-transparent">
                Sont Forgés
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-white/70 mb-6 leading-relaxed"
            >
              Syphax Gym représente le summum de l'excellence fitness en Tunisie. Notre installation ultramoderne combine des équipements de pointe avec un coaching de classe mondiale pour offrir une expérience d'entraînement inégalée.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-white/70 mb-12 leading-relaxed"
            >
              Nous croyons que le fitness est plus qu'une simple transformation physique - c'est un voyage de force mentale, de discipline et de découverte de soi. Chaque membre devient partie d'une communauté d'élite dédiée à l'excellence.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/30 hover:bg-white/10 transition-all duration-300"
                >
                  <stat.icon className="text-[#D4AF37] mb-3" size={28} />
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}