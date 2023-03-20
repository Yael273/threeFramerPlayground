import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { AnimationClip, AnimationMixer, TextureLoader } from 'three';
// import texture from "../textures/map.jpg";
import './assets/styles/main.scss';
import { AppHeader } from './cmps/app-header';

function App() {

  return (
    <div className="App">
      <AppHeader />
      <header className="Home-page">
        <h1 style={{ position: 'relative', zIndex: 5 }}>Quiska</h1>
        <Canvas className="canvas" style={{ height: 90 + 'vh', width: 50 + 'vw', position: 'absolute', zIndex: 1 }}>
          {/* <Suspense fallback={null}> */}
          {/* <Box /> */}
          {/* </Suspense> */}
          <AnimatedSphere />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <Canvas className="canvas" style={{ height: 90 + 'vh', width: 60 + 'vw', position: 'absolute', zIndex: 0 }}>
          {/* <Suspense fallback={null}> */}
          {/* <Box /> */}
          {/* </Suspense> */}
          <AnimatedSphere1 />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <OrbitControls enableZoom={false} />

        </Canvas>

        {/* <Canvas className="canvas" style={{ height: 90 + 'vh', width: 90 + 'vw', position: 'absolute', zIndex: 0, top: 50, right: 500 + 'px' }}>
          <AnimatedSphere2 />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <OrbitControls enableZoom={false} />
        </Canvas> */}

        <button className='start-btn'>Start</button>
      </header>
    </div>
  );
}

export default App;

export function AnimatedSphere() {
  return (
    <mesh>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#34a1d5"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={5}
        />
        {/* <meshNormalMaterial attach="material" /> */}
      </Sphere>

    </mesh>

  )
}
export function AnimatedSphere1() {
  return (
    <mesh>
      <Sphere visible args={[1, 100, 200]} scale={2.1}>
        <MeshDistortMaterial
          color="#3fc7a7"
          attach="material"
          distort={0.6}
          speed={1.2}
          roughness={5}
        />
        {/* <meshNormalMaterial attach="material" /> */}
      </Sphere>

    </mesh>

  )
}
export function AnimatedSphere2() {
  return (
    <mesh>
      <Sphere visible args={[1, 100, 200]} scale={1}>
        <MeshDistortMaterial
          color="#e969aa"
          attach="material"
          distort={0.6}
          speed={1.2}
          roughness={5}
        />
        {/* <meshNormalMaterial attach="material" /> */}
      </Sphere>

    </mesh>

  )
}

export function Box() {
  // const colorMap = useLoader(TextureLoader, texture)
  // const colorMap = useLoader(TextureLoader)

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* <meshLambertMaterial
        attach="material"
        color='pink'
      // map={colorMap} 
      /> */}
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

