import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import Scene from './Scene';
import { Bloom } from '@react-three/postprocessing';


const Landing = () => {

  return (
    <div className='w-full h-full '>
              <Canvas>
              <OrbitControls/>
               <ambientLight/>
               <Scene/>

               
               <Bloom
    intensity={1.0}

    luminanceThreshold={0.9}
    luminanceSmoothing={0.025} 
  />
     
    </Canvas>  
    </div>
  )
}

export default Landing