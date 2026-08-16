'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '1cbd1af4-74a3-4208-b4a3-d21b4c441b5e';

    try {
      const formTarget = e.currentTarget;
      const botcheck = (formTarget.elements.namedItem('botcheck') as HTMLInputElement)?.checked;

      // If honeypot was triggered by a bot, stop immediately
      if (botcheck) {
        setIsSubmitting(false);
        return;
      }

      let success = false;
      let errorMsg = '';

      // 1. Direct FormData submission to Web3Forms
      try {
        const submitFormData = new FormData();
        submitFormData.append('access_key', accessKey);
        submitFormData.append('name', formData.name.trim());
        submitFormData.append('email', formData.email.trim());
        submitFormData.append(
          'subject',
          formData.subject.trim()
            ? `[Portfolio] ${formData.subject.trim()}`
            : `New message from ${formData.name.trim()}`
        );
        submitFormData.append('message', formData.message.trim());
        submitFormData.append('from_name', 'Sahil Sharma Portfolio');

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: submitFormData,
        });

        const result = await response.json();
        if (result.success) {
          success = true;
        } else {
          errorMsg = result.message;
        }
      } catch {
        // Continue to server-side route fallback
      }

      // 2. Server-side API Route fallback
      if (!success) {
        try {
          const apiResponse = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: formData.subject.trim(),
              message: formData.message.trim(),
            }),
          });

          const apiResult = await apiResponse.json();
          if (apiResult.success) {
            success = true;
          } else {
            errorMsg = apiResult.message || errorMsg;
          }
        } catch {
          // If both fail, will display error message below
        }
      }

      if (success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! Thank you for reaching out, I will get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message:
            errorMsg ||
            'Something went wrong while sending your message. Please reach out directly to sahilsharma32520@gmail.com.',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message:
          'Network error. Please check your connection or email directly to sahilsharma32520@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 7000);
    }
  };

  const contactDetails = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'sahilsharma32520@gmail.com',
      href: 'mailto:sahilsharma32520@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Mohali, Punjab',
      href: '#contact',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301.684.847-.235 1.745-.365 2.698-.365s1.851.13 2.698.365c2.293-1.006 3.301-.684 3.301-.684.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/SahilSharma950',
      href: 'https://github.com/SahilSharma950',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/sahil-sharma-229a76248',
      href: 'https://linkedin.com/in/sahil-sharma-229a76248',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -100, 0], scale: [1.3, 1, 1.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a MERN stack role, project, or backend problem to discuss? Reach out directly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-200 mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I&apos;m open to MERN stack opportunities, backend-heavy product work,
                admin dashboards, payment integrations, and web/mobile API systems.
              </p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-gray-200 group-hover:text-cyan-400 transition-colors break-words">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anti-spam Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell me about your role, product, or project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer relative z-20 select-none shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2 pointer-events-none">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <span className="pointer-events-none">Send Message</span>
                )}
              </motion.button>

              {submitStatus.type === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-300 text-center text-sm font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}

              {submitStatus.type === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center text-sm font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

