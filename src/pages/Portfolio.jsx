// src/pages/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'web', 'mobile', 'ai', 'enterprise'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured e-commerce solution with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'mobile',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070',
      tech: ['React Native', 'Firebase', 'HealthKit'],
      link: '#',
    },
    {
      id: 3,
      title: 'AI Customer Support',
      category: 'ai',
      description: 'Intelligent chatbot system that handles 80% of customer inquiries automatically.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006',
      tech: ['Python', 'TensorFlow', 'NLP', 'AWS'],
      link: '#',
    },
    {
      id: 4,
      title: 'Enterprise CRM System',
      category: 'enterprise',
      description: 'Custom CRM solution for managing sales, customers, and business analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      tech: ['Vue.js', 'Laravel', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Property listing and management platform with virtual tours and booking system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073',
      tech: ['Next.js', 'Prisma', 'Mapbox'],
      link: '#',
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'On-demand food delivery app with real-time tracking and payment processing.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981',
      tech: ['Flutter', 'Node.js', 'Google Maps'],
      link: '#',
    },
    {
      id: 7,
      title: 'Predictive Analytics Dashboard',
      category: 'ai',
      description: 'Business intelligence platform with ML-powered forecasting and insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      tech: ['Python', 'Scikit-learn', 'D3.js'],
      link: '#',
    },
    {
      id: 8,
      title: 'HR Management System',
      category: 'enterprise',
      description: 'Comprehensive HR solution for employee management, payroll, and performance tracking.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      tech: ['Angular', 'Spring Boot', 'MySQL'],
      link: '#',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const testimonials = [
    {
      quote: "Algoritma Descoberta transformed our digital presence completely. Their team delivered beyond our expectations.",
      author: "Maria Garcia",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
    },
    {
      quote: "The mobile app they built for us increased our customer engagement by 200%. Highly recommended!",
      author: "João Santos",
      role: "Founder, FitLife",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    },
    {
      quote: "Professional, innovative, and always on time. They're our go-to partner for all tech projects.",
      author: "Ana Costa",
      role: "CTO, DataFlow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
            alt="Portfolio"
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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Projects That <span className="gradient-text">Inspire</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Explore our diverse portfolio of successful projects across various industries
              and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent-purple)] text-white'
                    : 'bg-[var(--color-primary)] text-[var(--color-text-secondary)] hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="group bg-[var(--color-primary)] rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-60" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[var(--color-secondary)]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={project.link} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                        <FiExternalLink className="w-5 h-5 text-[var(--color-primary)]" />
                      </a>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                        <FiEye className="w-5 h-5 text-[var(--color-primary)]" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs text-[var(--color-secondary)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs bg-[var(--color-primary-light)] text-[var(--color-text-secondary)] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              What Clients <span className="gradient-text">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 glass-effect rounded-2xl"
              >
                <p className="text-[var(--color-text-secondary)] italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{testimonial.role}</p>
                  </div>
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
              Want to See Your Project Here?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's create something amazing together. Start your project with us today.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <HiArrowRight className="inline-block ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;