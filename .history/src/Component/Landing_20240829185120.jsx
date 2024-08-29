import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Landing = () => {
  return (
    <div className='w-full h-full '>
              <Canvas>
      <mesh>
        <cylinderGeometry args={[1,1,1,10,10 ,true]} />
               <OrbitControls/>
               <ambientLight/>
        <meshStandardMaterial />
      </mesh>
    </Canvas>  
    </div>
  )
}

export default Landing