import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Dumbbell, Zap, Info } from 'lucide-react';

export function Membership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Musculation',
      icon: Dumbbell,
      description: 'Accès complet à la salle de musculation avec équipements professionnels',
      durations: [
        { duration: '1 Mois', price: 50 },
        { duration: '2 Mois', price: 90 },
        { duration: '3 Mois', price: 130 },
      ],
      features: [
        'Accès zone musculation',
        'Équipements professionnels',
        'Vestiaires & douches',
        'Suivi personnalisé',
      ],
    },
    {
      name: 'Fitness + Musculation',
      icon: Zap,
      description: 'Programme complet combinant fitness et musculation pour des résultats optimaux',
      durations: [
        { duration: '1 Mois', price: 90 },
        { duration: '2 Mois', price: 150 },
        { duration: '3 Mois', price: 190 },
      ],
      features: [
        'Tout du pack Musculation',
        'Cours de fitness collectifs',
        'Entraînement cardio',
        'Programme nutrition',
        'Accès prioritaire',
      ],
      popular: true,
    },
  ];

  return (
    <section id="membership" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Nos Abonnements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Investissez Dans
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] bg-clip-text text-transparent">
              Votre Transformation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Choisissez la formule qui correspond à vos objectifs et commencez votre transformation aujourd'hui
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
              className="relative"
            >
              <div
                className={`relative rounded-3xl p-8 md:p-10 h-full flex flex-col bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border-2 ${
                  plan.popular
                    ? 'border-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.25)]'
                    : 'border-white/10'
                } transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(212,175,55,0.2)]`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold">
                    Le Plus Populaire
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10'
                    : 'bg-white/10'
                }`}>
                  <plan.icon className={plan.popular ? 'text-[#D4AF37]' : 'text-white'} size={32} />
                </div>

                {/* Plan Name */}
                <h3 className={`text-3xl font-bold mb-3 ${plan.popular ? 'text-[#D4AF37]' : 'text-white'}`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-8 leading-relaxed">{plan.description}</p>

                {/* Duration Options */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {plan.durations.map((option, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className={`relative rounded-xl p-4 text-center cursor-pointer transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 hover:border-[#D4AF37]/60'
                          : 'bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10'
                      }`}
                      onClick={scrollToContact}
                    >
                      <div className="text-xs text-white/60 mb-2 uppercase tracking-wide">{option.duration}</div>
                      <div className={`text-2xl font-bold ${plan.popular ? 'text-[#D4AF37]' : 'text-white'}`}>
                        {option.price}
                        <span className="text-sm ml-1">DT</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        plan.popular ? 'bg-[#D4AF37]' : 'bg-white/40'
                      }`} />
                      <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-full font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30'
                  }`}
                >
                  Rejoignez-nous Maintenant
                </motion.button>

                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
              <Info className="text-[#D4AF37]" size={20} />
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Note Importante</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-[#D4AF37] font-bold">+10 DT d'assurance obligatoire</span> à ajouter lors de votre inscription pour tous les abonnements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
