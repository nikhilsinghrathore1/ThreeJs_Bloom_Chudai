import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const Landing = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        {/* Controls for navigating around */}
        <OrbitControls />
        
        {/* Lighting setup */}
        <ambientLight intensity={1.5} />

        {/* Your scene components */}
        <Scene />

        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            intensity={11.5}  // Adjusted intensity to a more reasonable value
            luminanceThreshold={0.9}
            luminanceSmoothing={0.025}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Landing;
