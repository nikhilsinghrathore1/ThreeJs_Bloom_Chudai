import React from 'react'
import { Canvas } from '@react-three/fiber';

const Landing = () => {
  return (
    <div>
              <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />\
      </mesh>
    </Canvas>  
    </div>
  )
}

export default Landing