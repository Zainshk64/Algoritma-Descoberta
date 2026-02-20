// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import {
  FiCode,
  FiSmartphone,
  FiCpu,
  FiCheckCircle,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import Hero from "../components/Hero";

const Home = () => {
  const services = [
    {
      icon: FiCode,
      title: "Web Development",
      desc: "Custom websites & web apps",
    },
    {
      icon: FiSmartphone,
      title: "Mobile Apps",
      desc: "iOS & Android solutions",
    },
    { icon: FiCpu, title: "AI Solutions", desc: "Intelligent automation" },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "99%", label: "Success Rate" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Quick Services Section */}
      <section className="py-20 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business
              forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 glass-effect rounded-2xl text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)]">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link to="/services">
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
                <HiArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--color-text-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  alt="Team collaboration"
                  className="w-full h-80 lg:h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass-effect rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center">
                    <FiAward className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Excellence</p>
                    <p className="text-[var(--color-text-muted)] text-sm">
                      Award Winning
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
                Innovation Meets{" "}
                <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                We focus on innovation, reliability, and long-term partnerships
                — helping our clients navigate digital transformation with
                confidence.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with 10+ years of experience",
                  "Cutting-edge technology solutions",
                  "Dedicated support & maintenance",
                  "Transparent communication",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FiCheckCircle className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="text-[var(--color-text-secondary)]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about">
                <motion.button
                  className="btn-primary mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                  <HiArrowRight className="ml-2" />
                </motion.button>
              </Link>
            </motion.div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
