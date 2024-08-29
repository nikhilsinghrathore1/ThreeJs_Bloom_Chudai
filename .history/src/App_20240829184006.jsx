import { useState } from 'react'
import './App.css'
import { boxGeometry, Mesh } from 'three'
import { Canvas } from '@react-three/fiber'

function App() {

  return 
          <Canvas>  
            <mesh>
              <boxGeometry/>

                <meshBasicMaterial/>
          
            </mesh>

          </Canvas>     
  
}

export default App
