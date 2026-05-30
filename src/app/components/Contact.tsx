import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const phoneNumber = '50870110';
  const location = 'Syphax GYM Fitness, km7 Rte Gremda, Sfax 3012';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/216${phoneNumber}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] rounded-3xl p-12 md:p-16 mb-20 overflow-hidden"
        >
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Commencez Votre Transformation Aujourd'hui
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Rejoignez la communauté d'élite des athlètes et des réalisateurs. Votre parcours commence maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="bg-black text-white px-8 py-4 rounded-full font-medium text-base uppercase tracking-wide hover:bg-black/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Appelez Maintenant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-medium text-base uppercase tracking-wide hover:bg-[#20BA5A] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Contactez-Nous</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Restons
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] bg-clip-text text-transparent">
              En Contact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Vous avez des questions? Prêt à commencer votre parcours? Nous sommes là pour vous aider.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Emplacement</div>
                  <div className="text-white/80">Syphax GYM Fitness</div>
                  <div className="text-white/60">km7 Rte Gremda</div>
                  <div className="text-white/60">Sfax 3012, Tunisie</div>
                </div>
              </div>

              <motion.button
                onClick={handleCall}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-start gap-4 p-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-[#D4AF37]/50 hover:bg-white/[0.15] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#D4AF37]" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-white font-medium mb-1">Téléphone</div>
                  <div className="text-[#D4AF37] text-lg font-bold">{phoneNumber}</div>
                  <div className="text-white/60 text-sm">Cliquez pour appeler</div>
                </div>
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-start gap-4 p-4 bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/20 rounded-2xl hover:border-[#25D366]/50 hover:bg-[#25D366]/[0.15] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-[#25D366]" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-white font-medium mb-1">WhatsApp</div>
                  <div className="text-[#25D366] text-lg font-bold">+216 {phoneNumber}</div>
                  <div className="text-white/60 text-sm">Messagerie instantanée</div>
                </div>
              </motion.button>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <div className="text-white/80">info@syphaxgym.tn</div>
                  <div className="text-white/60">contact@syphaxgym.tn</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <div className="text-white font-medium mb-4">Suivez-Nous</div>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Facebook, label: 'Facebook' }
                ].map(({ Icon, label }, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="relative h-64 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.9!2d10.7!3d34.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ1JzAwLjAiTiAxMMKwNDInMDAuMCJF!5e0!3m2!1sen!2stn!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Votre Nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 h-12 px-4 rounded-xl transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Adresse Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 h-12 px-4 rounded-xl transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numéro de Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 h-12 px-4 rounded-xl transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Votre Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 px-4 py-3 rounded-xl resize-none transition-all duration-300"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] text-black py-4 rounded-full font-medium text-base uppercase tracking-wide hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Envoyer le Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
