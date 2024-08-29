import React from 'react'
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three"

const Scene = () => {
               
               const tex = useTexture("../assets/img.png")
               tex.needsUpdate = true;

  return (
     <mesh>
        <cylinderGeometry args={[1,1,1,30,30 ,true]} />

        <meshStandardMaterial map={tex} side={THREE.DoubleSide}/>
      </mesh>
  )
}

export default Scene