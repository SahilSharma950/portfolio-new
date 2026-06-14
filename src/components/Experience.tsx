'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const roles = [
    {
      company: 'Auspicious Soft Pvt Ltd',
      location: 'Mohali, Punjab',
      title: 'MERN Stack Developer',
      period: 'Feb 2025 - Present',
      highlights: [
        'Built and maintained React.js applications with Node.js, Express.js, and MongoDB APIs.',
        'Developed backend APIs shared by web and native mobile applications.',
        'Implemented authentication, role-based access control, and real-time WebSocket features.',
        'Delivered Stripe and In-App Purchase subscription flows with admin management tools.',
        'Deployed production applications using AWS EC2, S3, and Vercel.',
      ],
    },
    {
      company: 'Whizamet Services Pvt Ltd',
      location: 'Mohali, Punjab',
      title: 'MERN Stack Developer',
      period: 'Jan 2024 - Jan 2025',
      highlights: [
        'Developed frontend and backend features across multiple MERN stack projects.',
        'Built REST APIs, authentication systems, and MongoDB schemas.',
        'Improved performance, fixed production bugs, and contributed to admin panels.',
        'Created internal tools that helped teams manage users, tasks, and application data.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production work across APIs, dashboards, payments, real-time systems, and cloud deployments.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent"></div>

          {roles.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-10 pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}
            >
              <div
                className={`absolute top-7 left-1 md:left-auto w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.65)] ${
                  index % 2 === 0 ? 'md:-right-[3.25rem]' : 'md:-left-[3.25rem]'
                }`}
              ></div>

              <div className="glass-effect rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-semibold text-cyan-300">{role.period}</span>
                  <h3 className="text-2xl font-bold text-gray-100">{role.title}</h3>
                  <p className="text-gray-400">{role.company} - {role.location}</p>
                </div>

                <ul className="space-y-3 text-gray-300">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
