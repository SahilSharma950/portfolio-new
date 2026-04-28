'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ProjectCard3D from './3d/ProjectCard3D';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.',
      image: '🛒',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Real-Time Chat App',
      description: 'Real-time messaging application with WebSocket, user authentication, and group chat features.',
      image: '💬',
      techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with drag-and-drop, real-time updates, and team features.',
      image: '📋',
      techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Prisma', 'Tailwind'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting.',
      image: '📊',
      techStack: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, comments, and SEO optimization.',
      image: '✍️',
      techStack: ['Next.js', 'MDX', 'MongoDB', 'Tailwind', 'Vercel'],
      category: 'fullstack',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'REST API Service',
      description: 'Scalable REST API with authentication, rate limiting, caching, and comprehensive documentation.',
      image: '🔌',
      techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      category: 'backend',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, 100, 0],
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 22,
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
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { name: 'All Projects', value: 'all' },
            { name: 'Full Stack', value: 'fullstack' },
            { name: 'Frontend', value: 'frontend' },
            { name: 'Backend', value: 'backend' },
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === btn.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'glass-effect text-gray-300 hover:text-cyan-400 border border-gray-700'
              }`}
            >
              {btn.name}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard3D
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 border border-cyan-500/30"
          >
            <span>View More on GitHub</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.698.684.847-.235 1.745-.365 2.698-.365s1.851.13 2.698.365c1.69-1.006 2.698-.684 2.698-.684.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
