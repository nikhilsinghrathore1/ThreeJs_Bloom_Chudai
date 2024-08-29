import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { boxGeometry, Mesh } from 'three'
import { Canvas } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  return (
          <Canvas>  
            <Mesh>
              <boxGeometry/>

                <meshBasicMaterial/>
          
            </Mesh>

          </Canvas>     
  )
}

export default App
