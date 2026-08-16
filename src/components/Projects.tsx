'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ProjectCard3D, { ProjectLink } from './3d/ProjectCard3D';

type ProjectCategory = 'all' | 'fullstack' | 'backend' | 'automation';

type Project = {
  title: string;
  description?: string;
  highlights?: string[];
  image: string;
  techStack: string[];
  categories: Exclude<ProjectCategory, 'all'>[];
  links?: ProjectLink[];
  liveUrl?: string;
  githubUrl?: string;
};

const projectFilters: { name: string; value: ProjectCategory }[] = [
  { name: 'All Projects', value: 'all' },
  { name: 'Full Stack', value: 'fullstack' },
  { name: 'Backend', value: 'backend' },
  { name: 'AI & Automation', value: 'automation' },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      title: 'Disstrikt',
      image: 'DIST',
      techStack: ['Next.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Twilio', 'HubSpot'],
      categories: ['fullstack', 'backend', 'automation'],
      highlights: [
        'Built a subscription-based platform across 3 platforms (web, mobile, admin), implementing model onboarding, job/task management, role-based workflows, and recurring subscriptions using Stripe and in-app purchases (Android/iOS).',
        'Developed a sales automation panel handling 60–70 daily users, integrating HubSpot, Twilio, and Resend to automate lead ingestion, WhatsApp outreach, audition scheduling, reminders, and real-time conversion tracking through an analytics dashboard.',
      ],
      links: [
        {
          label: 'Website',
          url: 'https://disstrikt-portfolio.vercel.app/',
          type: 'website',
        },
        {
          label: 'Sales Panel',
          url: 'https://disstrikt-sales-staging-frontend.vercel.app/',
          type: 'sales',
        },
        {
          label: 'Play Store',
          url: 'https://play.google.com/store/apps/details?id=com.aus.disstrikt&pcampaignid=web_share',
          type: 'android',
        },
        {
          label: 'App Store',
          url: 'https://apps.apple.com/in/app/disstrikt/id6748515254',
          type: 'ios',
        },
      ],
    },
    {
      title: 'PlayProjectApp (Project Play)',
      image: 'PLAY',
      techStack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Twilio'],
      categories: ['fullstack', 'backend'],
      highlights: [
        'Developed a court booking platform for pickleball and padel sports across 3 cities (Patiala, Mohali, Chandigarh), serving 2–4 courts per location and building REST APIs for 3 platforms (mobile, web, admin) with Razorpay payment integration.',
        'Engineered a time-slot locking system preventing double bookings under concurrent requests, and implemented geo-based autologout as a venue attendance tracking system for field employees.',
      ],
      links: [
        {
          label: 'Website',
          url: 'https://www.projectplayapp.com/',
          type: 'website',
        },
        {
          label: 'Admin Panel',
          url: 'https://admin.projectplayapp.com/',
          type: 'admin',
        },
        {
          label: 'Play Store',
          url: 'https://play.google.com/store/apps/details?id=com.aus.org.badminton&pcampaignid=web_share',
          type: 'android',
        },
        {
          label: 'App Store',
          url: 'https://apps.apple.com/in/app/project-play/id6742873090',
          type: 'ios',
        },
      ],
    },
    {
      title: 'Sentinel',
      image: 'SNTL',
      techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Resend'],
      categories: ['fullstack', 'backend'],
      highlights: [
        'Developed an inspection management system with 5 role-based workflows, enabling end-to-end inspection lifecycle management, real-time status tracking, and centralized reporting.',
        'Designed scalable database models using PostgreSQL and Prisma, and executed large-scale data migration while maintaining data integrity and minimizing downtime.',
      ],
      links: [
        {
          label: 'Website',
          url: 'https://sentinel-aus.vercel.app/',
          type: 'website',
        },
      ],
    },
    {
      title: 'Roffle - Lottery Platform',
      image: 'ROFF',
      techStack: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Wallets'],
      categories: ['fullstack', 'backend'],
      highlights: [
        'Full-stack lottery platform with wallet-based coin participation, admin-controlled raffle creation, automated cancellation refunds, and transaction tracking.',
        'Engineered real-time reward points distribution, WebSocket live updates, admin dashboards, and comprehensive analytics.',
      ],
    },
    {
      title: 'HabibiRizz - AI Mobile App',
      image: 'RIZZ',
      techStack: ['Node.js', 'Express', 'MongoDB', 'OpenAI', 'Gemini'],
      categories: ['automation', 'backend'],
      highlights: [
        'Backend and admin panel for AI-powered pickup lines, chat replies, and screenshot responses with dynamic prompt management and style/dialect configuration.',
        'Integrated OpenAI and Gemini with dynamic model switching, fallback handling, and automated prompt testing tools.',
      ],
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(filter as Exclude<ProjectCategory, 'all'>));

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -100, 0], scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 100, 0], scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production systems, mobile apps, inspection workflows, subscription platforms, and sales automation platforms built with scalable architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectFilters.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                filter === btn.value
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                  : 'glass-effect text-gray-300 hover:text-cyan-400 border border-gray-700'
              }`}
            >
              {btn.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ProjectCard3D
              key={project.title}
              title={project.title}
              description={project.description}
              highlights={project.highlights}
              image={project.image}
              techStack={project.techStack}
              links={project.links}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              delay={0.1 * index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/SahilSharma950"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]"
          >
            <span>View More on GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.698.684.847-.235 1.745-.365 2.698-.365s1.851.13 2.698.365c1.69-1.006 2.698-.684 2.698-.684.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

