import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiMonitor,
  FiSmartphone,
  FiCheckCircle,
  FiSettings,
  FiCpu,
  FiRefreshCw,
  FiMessageCircle,
} from 'react-icons/fi';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: FiMessageCircle,
      title: 'IT Consulting & Technology Solutions',
      description:
        'Strategic technology guidance to help you make informed decisions and optimize your IT infrastructure.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiMonitor,
      title: 'Website Development',
      description:
        'Custom, responsive, and high-performance websites that represent your brand and drive results.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Application Development',
      description:
        'Native and cross-platform mobile apps designed for exceptional user experience and performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiCheckCircle,
      title: 'QA Manual Testing',
      description:
        'Thorough manual testing to ensure your software meets the highest quality standards.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: FiSettings,
      title: 'QA Automation Services',
      description:
        'Automated testing frameworks that accelerate delivery while maintaining quality.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: FiCpu,
      title: 'AI-Powered Solutions',
      description:
        'Intelligent solutions leveraging artificial intelligence to automate and optimize your processes.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070',
      color: 'from-indigo-500 to-violet-500',
    },
    {
      icon: FiRefreshCw,
      title: 'Digital Transformation Services',
      description:
        'End-to-end digital transformation to modernize your business and stay competitive.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-[var(--color-primary)] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--color-accent-purple)]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[var(--color-secondary)] text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our Core <span className="gradient-text">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--color-text-secondary)] text-lg"
          >
            Comprehensive technology solutions designed to drive your business forward
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-[var(--color-primary-light)] rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-light)] via-transparent to-transparent" />
                
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-secondary)]/50 transition-colors pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;