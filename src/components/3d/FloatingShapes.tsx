'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  type: 'torus' | 'cube' | 'sphere' | 'octahedron';
  color: string;
  size?: number;
}

const FloatingShape = ({ position, type, color, size = 1 }: FloatingShapeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'torus':
        return <torusGeometry args={[size, 0.3, 16, 100]} />;
      case 'cube':
        return <boxGeometry args={[size, size, size]} />;
      case 'sphere':
        return <sphereGeometry args={[size, 32, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size]} />;
      default:
        return <boxGeometry args={[size, size, size]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default FloatingShape;
