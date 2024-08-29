import React, { useRef } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import img from '../assets/img.png';
import { useFrame } from '@react-three/fiber';

const Scene = () => {
  const tex = useTexture(img);
  const cyl = useRef();

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1.4, 0.3]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
        {/* Emissive material to enhance bloom effect */}
        <meshStandardMaterial
          map={tex}
          emissive={new THREE.Color(1, 1, 1)} // Add emissive property
          emissiveIntensity={1.5}             // Adjust emissive intensity
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Scene;
