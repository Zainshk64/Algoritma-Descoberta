// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiMonitor,
  FiSmartphone,
  FiCheckCircle,
  FiSettings,
  FiCpu,
  FiRefreshCw,
  FiMessageCircle,
  FiArrowRight,
} from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      icon: FiMessageCircle,
      title: 'IT Consulting & Technology Solutions',
      description:
        'Strategic technology guidance to help you make informed decisions and optimize your IT infrastructure. We analyze your current systems and provide roadmaps for digital transformation.',
      features: ['Technology Assessment', 'Digital Strategy', 'IT Roadmap', 'Vendor Selection'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiMonitor,
      title: 'Website Development',
      description:
        'Custom, responsive, and high-performance websites that represent your brand and drive results. From landing pages to complex web applications, we build it all.',
      features: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast Performance'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Application Development',
      description:
        'Native and cross-platform mobile apps designed for exceptional user experience and performance. We build apps that users love and businesses rely on.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Maintenance'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiCheckCircle,
      title: 'QA Manual Testing',
      description:
        'Thorough manual testing to ensure your software meets the highest quality standards. Our expert testers identify bugs and issues before they reach your users.',
      features: ['Functional Testing', 'UI/UX Testing', 'Regression Testing', 'Bug Reporting'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: FiSettings,
      title: 'QA Automation Services',
      description:
        'Automated testing frameworks that accelerate delivery while maintaining quality. We implement robust automation strategies that save time and reduce costs.',
      features: ['Test Automation', 'CI/CD Integration', 'Performance Testing', 'Load Testing'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: FiCpu,
      title: 'AI-Powered Solutions',
      description:
        'Intelligent solutions leveraging artificial intelligence to automate and optimize your processes. From chatbots to predictive analytics, we bring AI to your business.',
      features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Chatbots'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: FiRefreshCw,
      title: 'Digital Transformation Services',
      description:
        'End-to-end digital transformation to modernize your business and stay competitive. We help organizations embrace new technologies and processes.',
      features: ['Process Automation', 'Cloud Migration', 'Legacy Modernization', 'Change Management'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'Understanding your business needs and goals' },
    { step: '02', title: 'Planning', desc: 'Creating a detailed project roadmap' },
    { step: '03', title: 'Development', desc: 'Building your solution with best practices' },
    { step: '04', title: 'Delivery', desc: 'Launching and supporting your product' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
            alt="Services"
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Comprehensive <span className="gradient-text">IT Solutions</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              From web and mobile development to QA automation and AI-driven services,
              we empower organizations with innovative and future-ready solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 lg:h-96 object-cover"
                    />
                  </div>
                  <div className={`absolute top-4 ${index % 2 === 1 ? 'right-4' : 'left-4'} w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <FiCheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm text-[var(--color-text-muted)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <motion.button
                      className="btn-secondary text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <FiArrowRight className="ml-2" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              How We <span className="gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 glass-effect rounded-2xl text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[var(--color-secondary)]/50" />
                )}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <Link to="/contact">
              <motion.button
                className="px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <HiArrowRight className="inline-block ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;