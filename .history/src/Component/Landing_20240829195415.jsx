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
               <Bloom
    intensity={1.0} // The bloom intensity.

    luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
  />
     
    </Canvas>  
    </div>
  )
}

export default Landing