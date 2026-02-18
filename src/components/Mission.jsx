// src/components/Mission.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget } from 'react-icons/fi';

const Mission = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="mission"
      ref={ref}
      className="section-padding bg-[var(--color-primary-light)] relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
          alt="Mission background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary-light)]/95 to-[var(--color-primary-light)]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Our Mission"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:right-6 glass-effect p-6 rounded-2xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center">
                  <FiTarget className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Our Focus</p>
                  <p className="text-[var(--color-text-muted)] text-sm">Innovation & Excellence</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider mb-4"
            >
              Mission Statement
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Our <span className="gradient-text">Mission</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
            >
              To deliver innovative, reliable, and scalable technology solutions that
              empower businesses to achieve operational excellence and sustainable
              growth through digital transformation.
            </motion.p>

            {/* Mission Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {['Innovation First', 'Reliable Solutions', 'Scalable Growth', 'Digital Excellence'].map(
                (point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                    <span className="text-[var(--color-text-secondary)]">{point}</span>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;