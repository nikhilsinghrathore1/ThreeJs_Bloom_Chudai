import React from 'react'
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three"
import img from "../assets/img.png"

const Scene = () => {
               
               const tex = useTexture(img)
               const cyl  = useRef(null)
               tex.needsUpdate = true;


  return (
     <mesh rotation={[0 , 1.4 , 0.5]}>
        <cylinderGeometry args={[1,1,1,30,30 ,true]} />

        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide}/>
      </mesh>
  )
}

export default Scene