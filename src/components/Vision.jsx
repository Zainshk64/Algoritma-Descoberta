// src/components/Vision.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiEye, FiGlobe, FiAward, FiZap } from 'react-icons/fi';

const Vision = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const visionPoints = [
    {
      icon: FiGlobe,
      title: 'Global Reach',
      description: 'Expanding our impact across international markets',
    },
    {
      icon: FiAward,
      title: 'Quality Excellence',
      description: 'Recognized for outstanding service delivery',
    },
    {
      icon: FiZap,
      title: 'Innovation Leader',
      description: 'Pioneering new technological solutions',
    },
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-[var(--color-primary)] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[var(--color-secondary)]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider mb-4"
            >
              Vision Statement
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Our <span className="gradient-text">Vision</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10"
            >
              To become a trusted global IT solutions partner, recognized for
              innovation, quality, and the ability to transform ideas into
              impactful digital realities.
            </motion.p>

            {/* Vision Points */}
            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                  alt="Our Vision"
                  className="w-full h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/20 to-[var(--color-accent-purple)]/20" />
              </div>

              {/* Floating Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-6 -left-6 lg:left-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center shadow-2xl">
                  <FiEye className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 lg:right-6 glass-effect p-6 rounded-2xl"
              >
                <p className="text-3xl font-bold gradient-text mb-1">2025</p>
                <p className="text-[var(--color-text-muted)] text-sm">
                  Building the Future
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;