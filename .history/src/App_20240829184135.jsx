import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
          <Canvas>  
            <mesh>
              <boxGeometry/>

                <meshBasicMaterial/>
          
            </mesh>

          </Canvas>     
  )
}

export default App
