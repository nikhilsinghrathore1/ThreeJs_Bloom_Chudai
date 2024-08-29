import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import Scene from './Scene';


const Landing = () => {

  return (
    <div className='w-full h-full '>
              <Canvas>
              <OrbitControls/>
               <ambientLight/>
               <Scene/>
     
    </Canvas>  
    </div>
  )
}

export default Landing