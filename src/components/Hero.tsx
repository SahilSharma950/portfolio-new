'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { HeroCanvas } from './3d/HeroScene';

// Generate particles outside component to avoid React purity warnings
const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100 - 50,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 10,
    left: Math.random() * 100,
  }));
};

const PARTICLES = generateParticles(20);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas mousePosition={mousePosition} />
      </div>

      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -1000],
              x: particle.x,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'linear',
            }}
            style={{
              left: `${particle.left}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl text-cyan-400 mb-4 font-medium">
            Hello, I&apos;m
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
        >
          Sahil Sharma
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-300 mb-8">
            <span className="typing-text">MERN Stack Developer</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Building modern, scalable web applications with MongoDB, Express.js, React, and Node.js
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 212, 255, 0.3)',
                '0 0 40px rgba(0, 212, 255, 0.6)',
                '0 0 20px rgba(0, 212, 255, 0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 glass-effect rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-cyan-500/30"
            whileHover={{ scale: 1.05, y: -5, borderColor: 'rgba(0, 212, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              borderColor: ['rgba(0, 212, 255, 0.5)', 'rgba(0, 212, 255, 1)', 'rgba(0, 212, 255, 0.5)'],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 rounded-full flex justify-center"
          >
            <motion.div 
              animate={{
                y: [0, 12, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
