import { Canvas } from '@react-three/fiber';
import './App.css';

function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} /> {/* args defines the dimensions of the box */}
        <meshBasicMaterial color="orange" /> {/* color property to give the box some color */}
      </mesh>
    </Canvas>
  );
}

export default App;
