import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Landing = () => {
  return (
    <div className='w-full h-full '>
              <Canvas>
      <mesh>
        <boxGeometry />
               <OrbitControls/>
        <meshBasicMaterial />\
      </mesh>
    </Canvas>  
    </div>
  )
}

export default Landing