'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay: number;
}

const ProjectCard3D = ({
  title,
  description,
  image,
  techStack,
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
      className="relative perspective-container"
    >
      <motion.div
        className="relative glass-effect rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
        animate={{
          rotateX: isHovered ? (mousePosition.y - 150) / 10 : 0,
          rotateY: isHovered ? (mousePosition.x - 150) / 10 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">{image}</div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-4"
          >
            <div className="flex gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm hover:bg-cyan-600 transition-colors"
                >
                  Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-200 mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.15), transparent 50%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard3D;
