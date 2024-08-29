import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';


const Landing = () => {

               const tex = useTexture("../assets/img.png")
               tex.needsUpdate = true;

  return (
    <div className='w-full h-full '>
              <Canvas>
     
    </Canvas>  
    </div>
  )
}

export default Landing