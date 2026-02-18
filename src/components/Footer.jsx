// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear()-1;

  return (
    <footer className="bg-[var(--color-primary-dark)] relative">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-semibold text-white">
                Algoritma <span className="gradient-text">Descoberta</span>
              </span>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-md mb-6">
              Smart IT Solutions. Real Business Impact. Delivering modern, scalable,
              and reliable technology solutions tailored to help businesses grow
              and transform digitally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Mission', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[var(--color-text-muted)] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:algoritmadescoberta@gmail.com"
                  className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-white transition-colors"
                >
                  <FiMail className="w-5 h-5 text-[var(--color-secondary)]" />
                  <span className="text-sm">algoritmadescoberta@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+351911830157"
                  className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-white transition-colors"
                >
                  <FiPhone className="w-5 h-5 text-[var(--color-secondary)]" />
                  <span className="text-sm">+92 3204823939</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[var(--color-text-muted)] text-sm text-center sm:text-left">
              © {currentYear} Algoritma Descoberta. All Rights Reserved.
            </p>
            <p className="text-[var(--color-text-muted)] text-sm">
              Registered in May 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent-purple)] rounded-xl flex items-center justify-center shadow-lg z-50"
      >
        <FiArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;