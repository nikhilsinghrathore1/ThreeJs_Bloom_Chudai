import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three"

const Landing = () => {

               const tex = useTexture("../assets/img.png")
               tex.needsUpdate = true;

  return (
    <div className='w-full h-full '>
              <Canvas>
      <mesh>
        <cylinderGeometry args={[1,1,1,30,30 ,true]} />
               <OrbitControls/>
               <ambientLight/>
        <meshStandardMaterial map={tex} side={THREE.DoubleSide}/>
      </mesh>
    </Canvas>  
    </div>
  )
}

export default Landing