import { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { NeuralNetwork } from './NeuralNetwork';
import { FloatingOrbs } from './FloatingOrbs';

export const HeroScene = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x: x * 0.15, y: y * 0.15 });
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      onPointerMove={handlePointerMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#6366f1" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#f59e0b" />
          <NeuralNetwork mouseX={mouse.x} mouseY={mouse.y} />
          <FloatingOrbs />
        </Suspense>
      </Canvas>
    </div>
  );
};
