import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BoxGeometry, Mesh } from 'three'

function App() {
  const [count, setCount] = useState(0)

  return (
          <canvas>  
            <Mesh>
              <boxGeometry/>
                <meshBasicMaterial/>
          
            </Mesh>

          </canvas>     
  )
}

export default App
