'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillCard3D from './3d/SkillCard3D';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      name: 'React.js',
      icon: 'RX',
      level: 95,
      description: 'Building responsive web applications, reusable components, dashboards, and interactive frontend flows.',
    },
    {
      name: 'Node.js',
      icon: 'ND',
      level: 93,
      description: 'Developing backend services, real-time features, integrations, and production-ready application logic.',
    },
    {
      name: 'Express.js',
      icon: 'EX',
      level: 92,
      description: 'Creating REST APIs, middleware, authentication flows, role-based access, and mobile-ready endpoints.',
    },
    {
      name: 'MongoDB',
      icon: 'MDB',
      level: 90,
      description: 'Designing schemas, queries, and data models for scalable MERN stack applications.',
    },
    {
      name: 'Next.js',
      icon: 'NX',
      level: 87,
      description: 'Building modern React applications with file-based routing, optimized rendering, and production deployment.',
    },
    {
      name: 'TypeScript',
      icon: 'TS',
      level: 88,
      description: 'Writing safer application code with typed components, APIs, models, and reusable interfaces.',
    },
    {
      name: 'PostgreSQL',
      icon: 'PG',
      level: 82,
      description: 'Working with relational data, structured queries, and backend features that need strong consistency.',
    },
    {
      name: 'WebSockets',
      icon: 'RT',
      level: 86,
      description: 'Implementing real-time product features for live updates, active sessions, and instant interactions.',
    },
    {
      name: 'Cloud Deployments',
      icon: 'AWS',
      level: 84,
      description: 'Deploying applications with AWS EC2, S3, Vercel, Nginx, Docker, and CI/CD workflows.',
    },
  ];

  const tools = [
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'REST APIs',
    'BullMQ',
    'Redis',
    'AWS',
    'Azure',
    'Docker',
    'Nginx',
    'CI/CD Pipelines',
    'Vercel',
    'S3',
    'Azure Blob Storage',
    'Redux Toolkit',
    'Redux Saga',
    'Git',
    'Stripe',
    'Razorpay',
    'In-App Purchases',
    'OpenAI',
    'Google Gemini',
    'Postman',
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], scale: [1.3, 1, 1.3] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The stack I use to build web apps, backend APIs, dashboards, payments, and production deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard3D
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              description={skill.description}
              delay={0.1 * index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="glass-effect px-6 py-3 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 border border-gray-700"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
