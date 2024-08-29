import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { flattenJSON } from 'three/src/animation/AnimationUtils';

const Landing = () => {
  return (
    <div className='w-full h-full '>
              <Canvas>
      <mesh>
        <cylinderGeometry args={[1,1,1,30,30 ,false]} />
               <OrbitControls/>
               <ambientLight/>
        <meshStandardMaterial side={THREE.doubleSide}/>
      </mesh>
    </Canvas>  
    </div>
  )
}

export default Landing