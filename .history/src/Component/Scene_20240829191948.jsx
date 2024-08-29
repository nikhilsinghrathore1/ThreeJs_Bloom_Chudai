import React from 'react'
import * as THREE from "three"

const Scene = () => {
  return (
     <mesh>
        <cylinderGeometry args={[1,1,1,30,30 ,true]} />
               <OrbitControls/>
               <ambientLight/>
        <meshStandardMaterial map={tex} side={THREE.DoubleSide}/>
      </mesh>
  )
}

export default Scene