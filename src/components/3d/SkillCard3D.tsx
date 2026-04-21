'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  description: string;
  delay: number;
}

const SkillCard3D = ({ name, icon, level, description, delay }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="perspective-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-64 cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 glass-effect rounded-xl p-6 flex flex-col items-center justify-center border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold text-gray-200 mb-2">{name}</h3>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${level}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">{level}% proficiency</p>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 glass-effect rounded-xl p-6 flex flex-col items-center justify-center border border-purple-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-600/10"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">{name}</h3>
          <p className="text-gray-300 text-center leading-relaxed">{description}</p>
          <div className="mt-4 text-cyan-400 text-sm">Hover to flip back</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard3D;
