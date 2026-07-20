import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const orbs = [
  { position: [3, 2, -2] as [number, number, number], color: '#6366f1', size: 0.15 },
  { position: [-2.5, -1.5, 1] as [number, number, number], color: '#f59e0b', size: 0.12 },
  { position: [1.5, -2.5, -1] as [number, number, number], color: '#8b5cf6', size: 0.1 },
  { position: [-3, 1, 2] as [number, number, number], color: '#6366f1', size: 0.08 },
];

export const FloatingOrbs = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      child.position.y += Math.sin(t * 0.5 + i) * 0.002;
    });
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.size, 16, 16]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
};
