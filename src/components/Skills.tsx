'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillCard3D from './3d/SkillCard3D';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      name: 'MongoDB',
      icon: '🍃',
      level: 90,
      description: 'Experienced in designing database schemas, aggregation pipelines, and optimizing queries for performance.',
    },
    {
      name: 'Express.js',
      icon: '⚡',
      level: 92,
      description: 'Building RESTful APIs, middleware, and server-side applications with robust error handling.',
    },
    {
      name: 'React',
      icon: '⚛️',
      level: 95,
      description: 'Creating dynamic UIs with hooks, context API, state management, and modern React patterns.',
    },
    {
      name: 'Node.js',
      icon: '🟢',
      level: 93,
      description: 'Developing scalable backend services, real-time applications, and microservices architecture.',
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      level: 88,
      description: 'Working with relational databases, complex queries, joins, and database optimization techniques.',
    },
    {
      name: 'JavaScript',
      icon: '📜',
      level: 95,
      description: 'Deep understanding of ES6+, async/await, closures, and modern JavaScript features.',
    },
    {
      name: 'TypeScript',
      icon: '🔷',
      level: 88,
      description: 'Writing type-safe code with interfaces, generics, and advanced TypeScript patterns.',
    },
    {
      name: 'Next.js',
      icon: '▲',
      level: 87,
      description: 'Building SSR/SSG applications, API routes, and optimizing performance with Next.js features.',
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      level: 90,
      description: 'Creating responsive, modern UIs with utility-first CSS and custom design systems.',
    },
    {
      name: 'Git',
      icon: '📦',
      level: 92,
      description: 'Version control, branching strategies, collaborative workflows, and CI/CD integration.',
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden" ref={ref}>
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          scale: [1.3, 1, 1.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
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

        {/* Additional tools */}
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
            {[
              'Redux',
              'GraphQL',
              'REST APIs',
              'JWT',
              'Socket.io',
              'Mongoose',
              'Prisma',
              'AWS',
              'Docker',
              'Figma',
              'VS Code',
            ].map((tool, index) => (
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
