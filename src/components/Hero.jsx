// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { FiCode, FiSmartphone, FiCpu } from 'react-icons/fi';

const Hero = () => {
  const floatingIcons = [
    { Icon: FiCode, delay: 0, x: '10%', y: '20%' },
    { Icon: FiSmartphone, delay: 0.2, x: '85%', y: '15%' },
    { Icon: FiCpu, delay: 0.4, x: '75%', y: '70%' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
        >
          {/* Add your video source here */}
          <source src="https://www.pexels.com/download/video/7687926/" type="video/mp4" />
        </video>
        {/* Fallback Image if video doesn't load */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')`,
          }}
        /> */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/90 via-[var(--color-primary)]/80 to-[var(--color-primary)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-purple)]/20 rounded-full blur-3xl"
        />

        {/* Floating Icons */}
        {/* {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -20, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, delay },
              y: { duration: 4, repeat: Infinity, delay },
              scale: { duration: 0.5, delay },
            }}
            className="absolute hidden lg:block"
            style={{ left: x, top: y }}
          >
            <div className="p-4 glass-effect rounded-2xl">
              <Icon className="w-8 h-8 text-[var(--color-secondary)]" />
            </div>
          </motion.div>
        ))} */}

        {/* Grid Pattern */}
        {/* <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(var(--color-secondary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        /> */}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
          >
            <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Established May 2025
            </span>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Algoritma</span>
            <span className="gradient-text">Descoberta</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4"
          >
            Smart IT Solutions. Real Business Impact.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8"
          >
            Algoritma Descoberta delivers modern, scalable, and reliable technology
            solutions tailored to help businesses grow and transform digitally.
          </motion.p>

          {/* Secondary Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-xl mx-auto mb-10"
          >
            From web and mobile development to QA automation and AI-driven services,
            we empower organizations with innovative and future-ready solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              className="btn-secondary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiPlay className="mr-2" />
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
          >
            {[
              { value: '7+', label: 'Services' },
              { value: '100%', label: 'Commitment' },
              { value: '2025', label: 'Est.' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;