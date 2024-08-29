import React, { useRef } from 'react'
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three"
import img from "../assets/img.png"
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const Scene = () => {
               
               const tex = useTexture(img)
               const cyl  = useRef(null)
               tex.needsUpdate = true;
               useFrame((state, delta)=>{
                              cyl.current.rotation.y += delta
               })


  return (
               <group rotation={[0 , 1.4 , 0.3]}>

     <mesh ref={cyl} >
        <cylinderGeometry args={[1,1,1,30,30 ,true]} />

        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide}/>
      </mesh>
               </group>
  )
}

export default Scene