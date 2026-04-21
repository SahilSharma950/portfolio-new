'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import FloatingShape from './FloatingShapes';
import * as THREE from 'three';

// Generate particle positions outside component to avoid React purity warnings
const generateParticlePositions = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  return positions;
};

const PARTICLE_POSITIONS = generateParticlePositions(500);

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 500;

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={PARTICLE_POSITIONS}
          itemSize={3}
          args={[PARTICLE_POSITIONS, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00d4ff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

interface HeroSceneProps {
  mousePosition: { x: number; y: number };
}

const HeroScene = ({ mousePosition }: HeroSceneProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const targetX = (mousePosition.x / window.innerWidth - 0.5) * 2;
      const targetY = (mousePosition.y / window.innerHeight - 0.5) * 2;
      groupRef.current.rotation.y += delta * 0.1 + targetX * 0.01;
      groupRef.current.rotation.x += delta * 0.05 + targetY * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating geometric shapes */}
      <FloatingShape position={[-3, 2, -2]} type="torus" color="#00d4ff" size={1.2} />
      <FloatingShape position={[3, -1, -3]} type="cube" color="#7c3aed" size={0.8} />
      <FloatingShape position={[-2, -2, -1]} type="sphere" color="#00d4ff" size={0.6} />
      <FloatingShape position={[2, 2, -2]} type="octahedron" color="#7c3aed" size={0.9} />
      <FloatingShape position={[0, 0, -4]} type="torus" color="#00d4ff" size={1.5} />
      <FloatingShape position={[-4, 0, -3]} type="cube" color="#7c3aed" size={0.7} />
      <FloatingShape position={[4, 1, -2]} type="sphere" color="#00d4ff" size={0.5} />

      {/* Particle field */}
      <ParticleField />

      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

interface HeroCanvasProps {
  mousePosition: { x: number; y: number };
}

export const HeroCanvas = ({ mousePosition }: HeroCanvasProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
      <spotLight
        position={[0, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />

      {/* 3D Scene */}
      <HeroScene mousePosition={mousePosition} />

      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default HeroCanvas;
