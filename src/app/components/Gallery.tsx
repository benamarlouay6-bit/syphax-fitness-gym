import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';
import img1 from '../../imports/Capture_d__cran_2026-05-29_193328.png';
import img2 from '../../imports/Capture_d__cran_2026-05-29_193320.png';
import img3 from '../../imports/Capture_d__cran_2026-05-29_193303.png';
import img4 from '../../imports/Capture_d__cran_2026-05-29_193248.png';
import img5 from '../../imports/Capture_d__cran_2026-05-29_193237.png';
import img6 from '../../imports/Capture_d__cran_2026-05-29_193227.png';
import img7 from '../../imports/Capture_d__cran_2026-05-29_193207.png';
import img8 from '../../imports/Capture_d__cran_2026-05-29_193156.png';
import img9 from '../../imports/Capture_d__cran_2026-05-29_193141.png';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { src: img1, alt: 'Entraînement Syphax Gym 1' },
    { src: img2, alt: 'Entraînement Syphax Gym 2' },
    { src: img3, alt: 'Entraînement Syphax Gym 3' },
    { src: img4, alt: 'Entraînement Syphax Gym 4' },
    { src: img5, alt: 'Entraînement Syphax Gym 5' },
    { src: img6, alt: 'Entraînement Syphax Gym 6' },
    { src: img7, alt: 'Entraînement Syphax Gym 7' },
    { src: img8, alt: 'Entraînement Syphax Gym 8' },
    { src: img9, alt: 'Entraînement Syphax Gym 9' },
  ];

  return (
    <section id="gallery" ref={ref} className="relative py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden">
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
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest">Galerie</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Vivez La
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5B8] bg-clip-text text-transparent">
              Transformation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Découvrez notre installation de classe mondiale où les champions s'entraînent
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Masonry columnsCount={3} gutter="20px" className="hidden lg:block">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto transition-all duration-700 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {/* Hover Border Glow */}
                <div
                  className={`absolute inset-0 border-2 border-[#D4AF37] rounded-xl transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            ))}
          </Masonry>

          {/* Tablet View */}
          <Masonry columnsCount={2} gutter="16px" className="hidden md:block lg:hidden">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </Masonry>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="relative overflow-hidden rounded-xl"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
