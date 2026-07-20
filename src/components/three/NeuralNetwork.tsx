import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuralNetworkProps {
  mouseX?: number;
  mouseY?: number;
}

export const NeuralNetwork = ({ mouseX = 0, mouseY = 0 }: NeuralNetworkProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { nodes, connections } = useMemo(() => {
    const nodeCount = 40;
    const nodePositions: THREE.Vector3[] = [];
    const connectionPairs: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.5 + Math.random() * 1.5;
      nodePositions.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      );
    }

    for (let i = 0; i < nodeCount; i++) {
      const connectionsPerNode = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < connectionsPerNode; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (target !== i) {
          connectionPairs.push(i, target);
        }
      }
    }

    return { nodes: nodePositions, connections: connectionPairs };
  }, []);

  const lineGeometry = useMemo(() => {
    const positions = new Float32Array(connections.length * 3);
    connections.forEach((nodeIndex, i) => {
      const pos = nodes[nodeIndex];
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodes, connections]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.05 + mouseX * 0.3;
    groupRef.current.rotation.x = mouseY * 0.2;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04 + Math.random() * 0.02, 8, 8]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#6366f1' : '#8b5cf6'}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
};
