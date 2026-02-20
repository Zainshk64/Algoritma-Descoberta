// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTarget, FiEye, FiUsers, FiAward, FiTrendingUp, FiShield, FiHeart, FiZap } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const About = () => {
  const values = [
    { icon: FiZap, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge solutions' },
    { icon: FiShield, title: 'Reliability', desc: 'Dependable services you can always count on' },
    { icon: FiUsers, title: 'Partnership', desc: 'Building long-term relationships with clients' },
    { icon: FiTrendingUp, title: 'Growth', desc: 'Solutions that scale with your business' },
  ];

  const team = [
    {
      name: 'Carlos Silva',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
    },
    {
      name: 'Ana Santos',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
    },
    {
      name: 'Miguel Costa',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    },
    {
      name: 'Sofia Martins',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
    },
  ];

  const milestones = [
    { year: '2025', event: 'Company Founded', desc: 'Algoritma Descoberta established in May 2025' },
    { year: '2025', event: 'First Major Project', desc: 'Delivered enterprise solution for leading company' },
    { year: '2025', event: 'Team Expansion', desc: 'Grew to 15+ talented professionals' },
    { year: '2025', event: 'AI Division Launch', desc: 'Introduced AI-powered solutions' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary)]/95 to-[var(--color-primary)]" /> */}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Empowering Digital <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Algoritma Descoberta is an IT services company established in May 2025.
              We specialize in delivering modern technology solutions tailored to meet
              business needs across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
                Building the Future of <span className="gradient-text">Technology</span>
              </h2>
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Our mission is to empower organizations through high-quality software
                  development, robust quality assurance, and intelligent AI-driven solutions.
                </p>
                <p>
                  We focus on innovation, reliability, and long-term partnerships — helping
                  our clients navigate digital transformation with confidence.
                </p>
                <p>
                  From web and mobile development to QA automation and AI-driven services,
                  we empower organizations with innovative and future-ready solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  alt="Our Team"
                  className="w-full h-80 lg:h-[400px] object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 p-6 glass-effect rounded-2xl"
              >
                <p className="text-3xl font-bold gradient-text">2025</p>
                <p className="text-[var(--color-text-muted)] text-sm">Founded</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 lg:p-10 glass-effect rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center mb-6">
                <FiTarget className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                To deliver innovative, reliable, and scalable technology solutions that
                empower businesses to achieve operational excellence and sustainable
                growth through digital transformation.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 lg:p-10 glass-effect rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent-purple)] to-[var(--color-secondary)] flex items-center justify-center mb-6">
                <FiEye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                To become a trusted global IT solutions partner, recognized for
                innovation, quality, and the ability to transform ideas into
                impactful digital realities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              What Drives <span className="gradient-text">Us</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-[var(--color-primary)] rounded-2xl text-center group"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent" />
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-[var(--color-text-muted)]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              Key <span className="gradient-text">Milestones</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center text-white font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-[var(--color-secondary)]/30 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-white mb-1">{milestone.event}</h3>
                  <p className="text-[var(--color-text-muted)]">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent-purple)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's build something amazing together. Get in touch with our team today.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <HiArrowRight className="inline-block ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;