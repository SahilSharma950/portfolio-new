'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '25+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Happy Clients', value: '20+' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-gray-900" ref={ref}>
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
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">
              Passionate MERN Stack Developer
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;m a full-stack developer with a strong passion for building modern, 
              scalable, and user-friendly web applications. With expertise in the MERN 
              stack (MongoDB, Express.js, React, and Node.js), I create end-to-end 
              solutions that deliver exceptional user experiences.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in web development started over 2 years ago, and since then, 
              I&apos;ve worked on diverse projects ranging from e-commerce platforms to 
              real-time applications. I&apos;m constantly learning and exploring new 
              technologies to stay at the forefront of web development.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I&apos;m not coding, you can find me exploring open-source projects, 
              writing technical blogs, or contributing to the developer community.
            </p>
          </motion.div>

          {/* Right side - Stats */}
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

        {/* Skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
            What I Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'Building responsive and interactive UIs with React, Next.js, and modern CSS frameworks',
                icon: '🎨',
              },
              {
                title: 'Backend Development',
                description: 'Creating robust APIs and server-side logic with Node.js, Express.js, and MongoDB',
                icon: '⚙️',
              },
              {
                title: 'Full Stack Solutions',
                description: 'Delivering complete web applications with seamless frontend-backend integration',
                icon: '🚀',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="glass-effect p-8 rounded-xl hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
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
