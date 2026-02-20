// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'algoritmadescoberta@gmail.com',
      href: 'mailto:algoritmadescoberta@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+351 911 830 157',
      href: 'tel:+351911830157',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Portugal',
      href: null,
    },
    {
      icon: FiClock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      href: null,
    },
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take 3-6 months.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer both fixed-price and time-and-materials pricing models. The best option depends on your project requirements and flexibility needs.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer maintenance and support packages to ensure your solution continues to perform optimally after launch.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 z-0">
          <img
            src="https://tnu.edu.eg/Design/assets/media/contact.jpg"
            alt="Contact"
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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              We would love to hear from you. Feel free to reach out for inquiries,
              consultations, or project discussions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[var(--color-primary-light)]">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2  gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[var(--color-primary)] rounded-lg shadow-lg p-6 flex items-start gap-4"
              >


                <div className="text-[var(--color-white)] text-2xl">
                  <info.icon />
                </div>


                <div>
                    <h3 className="text-sm font-semibold text-[var(--color-secondary)]">
                        {info.label}
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                        {info.value}
                    </p>
                </div>





                </motion.div>
            ))}
          </div>
        </div>
      </section>
            
        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-[var(--color-primary-dark)]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
              {/* LEFT - Form */}
              <div>
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-10">
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 text-white">
                  <div className="grid text-white sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="+351 911 830 157"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                        placeholder="Website Development Quote"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-700 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all resize-y"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 
                      bg-[var(--color-primary)] text-white font-semibold rounded-lg
                      hover:bg-[var(--color-primary-dark)] transition-colors
                      disabled:opacity-60 disabled:cursor-not-allowed
                      shadow-lg shadow-[var(--color-primary)]/20
                    `}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : submitted ? (
                      <>Message Sent! ✓</>
                    ) : (
                      <>
                        Send Message <FiSend className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-600 font-medium text-center mt-4"
                    >
                      Thank you! We'll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </div>

              {/* RIGHT - FAQ + extra info */}
              <div className="space-y-10 text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FiMessageCircle className="text-[var(--color-primary-light)]" />
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-[var(--color-primary-light)] rounded-lg p-6">
                        <h4 className="font-semibold text-lg mb-3">
                          {faq.question}
                        </h4>
                        <p className="text-[var(--color-text-secondary)]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[var(--color-primary-light)]/40 rounded-xl p-8 border border-[var(--color-primary)]/10">
                  <h3 className="text-xl font-bold mb-4">Prefer another way?</h3>
                  <p className="text-[var(--color-text-secondary)] mb-6">
                    We're also available on WhatsApp and Telegram during business hours.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/351911830157"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/+351911830157"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-[#0088cc] text-white rounded-lg hover:bg-[#0077b3] transition-colors"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Optional subtle CTA at bottom */}
        <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white text-center">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your idea to life?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's talk about how we can help you achieve your goals.
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Back to Top 
            </a>
          </div>
        </section>
      </div>
    );
  };

  export default Contact;


