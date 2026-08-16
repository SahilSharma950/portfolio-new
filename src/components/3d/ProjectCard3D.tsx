'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export interface ProjectLink {
  label: string;
  url: string;
  type?: 'website' | 'sales' | 'admin' | 'android' | 'ios' | 'github' | 'demo';
}

export interface ProjectCardProps {
  title: string;
  description?: string;
  highlights?: string[];
  image: string;
  techStack: string[];
  links?: ProjectLink[];
  liveUrl?: string;
  githubUrl?: string;
  delay: number;
}

const renderLinkIcon = (type?: string) => {
  switch (type) {
    case 'website':
    case 'demo':
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );
    case 'sales':
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
    case 'admin':
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case 'android':
      return (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.856 8.167 12 8.167c-1.856 0-3.5902.244-5.1373.783L4.8404 5.447a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
        </svg>
      );
    case 'ios':
      return (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.34-.56.65-1.06 1.7-0.93 2.72 1.01.08 2.04-.46 2.65-1.21z" />
        </svg>
      );
    case 'github':
      return (
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.698.684.847-.235 1.745-.365 2.698-.365s1.851.13 2.698.365c1.69-1.006 2.698-.684 2.698-.684.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    default:
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      );
  }
};

const getLinkStyle = (type?: string) => {
  switch (type) {
    case 'website':
    case 'demo':
      return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500 hover:text-white';
    case 'sales':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-600 hover:text-white';
    case 'admin':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500 hover:text-white';
    case 'android':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-600 hover:text-white';
    case 'ios':
      return 'bg-sky-500/20 text-sky-200 border-sky-500/40 hover:bg-sky-600 hover:text-white';
    case 'github':
      return 'bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 hover:text-white';
    default:
      return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500 hover:text-white';
  }
};

const ProjectCard3D = ({
  title,
  description,
  highlights,
  image,
  techStack,
  links,
  liveUrl,
  githubUrl,
  delay,
}: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  // Compile combined link list
  const combinedLinks: ProjectLink[] = links ? [...links] : [];
  if (liveUrl && !combinedLinks.some((l) => l.url === liveUrl)) {
    combinedLinks.push({ label: 'Live Demo', url: liveUrl, type: 'website' });
  }
  if (githubUrl && !combinedLinks.some((l) => l.url === githubUrl)) {
    combinedLinks.push({ label: 'GitHub', url: githubUrl, type: 'github' });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      className="relative perspective-container h-full flex flex-col"
    >
      <motion.div
        className="relative glass-effect rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
        animate={{
          rotateX: isHovered ? (mousePosition.y - 180) / 14 : 0,
          rotateY: isHovered ? (mousePosition.x - 180) / 14 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Project Header Banner */}
        <div className="relative h-44 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-blue-900/30 overflow-hidden flex items-center justify-center border-b border-gray-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.15),transparent_70%)]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-5xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
              {image}
            </span>
          </div>

          {/* Quick Hover Overlay */}
          {combinedLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-wrap items-center justify-center gap-2 p-4 transition-opacity z-20"
            >
              {combinedLinks.map((link) => (
                <a
                  key={`hover-${link.label}-${link.url}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 shadow-md ${getLinkStyle(
                    link.type
                  )}`}
                >
                  {renderLinkIcon(link.type)}
                  <span>{link.label}</span>
                </a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-100 mb-3 tracking-wide flex items-center justify-between">
              <span>{title}</span>
            </h3>

            {/* Highlights List or Description */}
            {highlights && highlights.length > 0 ? (
              <ul className="space-y-2.5 mb-5 text-gray-300 text-sm">
                {highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : description ? (
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{description}</p>
            ) : null}
          </div>

          <div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 rounded-md text-xs font-medium border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Direct Platform Links Row */}
            {combinedLinks.length > 0 && (
              <div className="pt-4 border-t border-gray-800/80">
                <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2.5">
                  Platform Links
                </div>
                <div className="flex flex-wrap gap-2">
                  {combinedLinks.map((link) => (
                    <a
                      key={`direct-${link.label}-${link.url}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${getLinkStyle(
                        link.type
                      )}`}
                    >
                      {renderLinkIcon(link.type)}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Glow effect */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.12), transparent 50%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard3D;

