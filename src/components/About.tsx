'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Production Roles', value: '2' },
    { label: 'Major Projects', value: '5' },
    { label: 'Core Technologies', value: '20+' },
  ];

  const services = [
    {
      title: 'Web Apps',
      description: 'Responsive React.js and Next.js interfaces with TypeScript, Tailwind CSS, Redux Toolkit, and clean state flows.',
      icon: 'UI',
    },
    {
      title: 'Backend APIs',
      description: 'REST APIs, auth flows, MongoDB schemas, Redis queues, WebSockets, and integrations used by web and mobile apps.',
      icon: 'API',
    },
    {
      title: 'Product Delivery',
      description: 'Admin panels, subscriptions, payments, cloud deployments, and feature-complete systems with end-to-end ownership.',
      icon: 'E2E',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">
              MERN Stack Developer with End-to-End Ownership
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;m a MERN Stack Developer with 2+ years of experience building scalable web
              and backend systems for web and mobile applications. My work spans React.js,
              Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and production APIs.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;ve delivered authentication, role-based access control, payment
              integrations, subscriptions, admin panels, WebSocket features, and cloud
              deployments across real client and product work.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I care about clean architecture, reliable APIs, and owning features from
              backend design through frontend delivery and deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-effect p-6 rounded-xl text-center hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <h4 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
            What I Build
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="glass-effect p-8 rounded-xl hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-200 mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
