import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';

function NeuralOrbit() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, lineGeometry } = useMemo(() => {
    const nodeCount = 70;
    const nodePositions: THREE.Vector3[] = [];
    const pointPositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i += 1) {
      const theta = i * 0.74;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const radius = 1.7 + (i % 9) * 0.06;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
      const z = radius * Math.cos(phi);
      nodePositions.push(new THREE.Vector3(x, y, z));
      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;
    }

    const linePositions: number[] = [];
    nodePositions.forEach((node, index) => {
      for (let target = index + 1; target < nodePositions.length; target += 1) {
        if (node.distanceTo(nodePositions[target]) < 0.72 && (index + target) % 3 === 0) {
          linePositions.push(node.x, node.y, node.z);
          linePositions.push(nodePositions[target].x, nodePositions[target].y, nodePositions[target].z);
        }
      }
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    return { positions: pointPositions, lineGeometry: geometry };
  }, []);

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.08 + pointer.x * 0.16;
      groupRef.current.rotation.x = -0.18 + pointer.y * 0.08;
    }
    if (pointsRef.current) {
      const material = pointsRef.current.material;
      if (material instanceof THREE.PointsMaterial) {
        material.opacity = 0.58 + Math.sin(elapsed * 1.4) * 0.08;
      }
    }
  });

  return (
    <group ref={groupRef} position={[1.18, -0.08, 0]} rotation={[0, 0.25, -0.08]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7dd3fc" size={0.035} transparent opacity={0.62} sizeAttenuation />
      </points>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.2} />
      </lineSegments>
      <mesh rotation={[1.15, 0.1, -0.15]}>
        <torusGeometry args={[2.2, 0.006, 8, 160]} />
        <meshBasicMaterial color="#f6c453" transparent opacity={0.34} />
      </mesh>
      <mesh rotation={[0.55, 0.7, 0.2]}>
        <torusGeometry args={[2.55, 0.004, 8, 180]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function StarPlane() {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const stars = new Float32Array(450 * 3);
    for (let i = 0; i < 450; i += 1) {
      stars[i * 3] = (Math.random() - 0.5) * 12;
      stars[i * 3 + 1] = (Math.random() - 0.5) * 7;
      stars[i * 3 + 2] = -Math.random() * 6 - 1;
    }
    return stars;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z = clock.getElapsedTime() * 0.006;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#dbeafe" size={0.01} transparent opacity={0.42} sizeAttenuation />
    </points>
  );
}

export function HeroCanvas() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className="hero-canvas fallback" aria-hidden="true" />;
  }

  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 48 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <StarPlane />
          <NeuralOrbit />
        </Suspense>
      </Canvas>
    </div>
  );
}
