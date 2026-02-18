// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: FiTarget,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern challenges',
    },
    {
      icon: FiShield,
      title: 'Reliability',
      description: 'Dependable services you can trust',
    },
    {
      icon: FiUsers,
      title: 'Partnership',
      description: 'Long-term relationships with our clients',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth',
      description: 'Solutions that scale with your business',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-[var(--color-primary-light)] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-secondary) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider mb-4"
            >
              About Us
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Empowering Digital{' '}
              <span className="gradient-text">Transformation</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--color-text-secondary)] text-lg mb-6 leading-relaxed"
            >
              Algoritma Descoberta is an IT services company established in May 2025.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[var(--color-text-muted)] mb-6 leading-relaxed"
            >
              We specialize in delivering modern technology solutions tailored to meet
              business needs across industries. Our mission is to empower organizations
              through high-quality software development, robust quality assurance, and
              intelligent AI-driven solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[var(--color-text-muted)] mb-8 leading-relaxed"
            >
              We focus on innovation, reliability, and long-term partnerships — helping
              our clients navigate digital transformation with confidence.
            </motion.p>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              href="#contact"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 sm:p-8 glass-effect rounded-2xl group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              alt="Team collaboration"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-white text-lg sm:text-xl font-medium">
                Building the future, one solution at a time
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;