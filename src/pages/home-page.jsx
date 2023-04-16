import { OrbitControls, PerspectiveCamera, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { AnimatedSphere } from "../cmps/animated-sphere";
import { Signup } from "./signup";
import { motion } from "framer-motion"
import { Box } from "../cmps/box";
import { Test } from "../cmps/test";
import { AnotherTest } from "../cmps/another-test";

export function HomePage() {

  const [start, setStart] = useState(false)

  return <section className="home-page">

    {/* ANIMATION */}
    {/* <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -50, right: 50 }}
      style={{ position: 'relative', zIndex: 5 }}
    >
      <h1 style={{ position: 'relative', zIndex: 5 }}>Quiska</h1>
    </motion.div> */}
    
    {/* <Canvas style={{ height: 90 + 'vh', width: 50 + 'vw', position: 'absolute', zIndex: 1 }}>
      <ambientLight intensity={0.5}/>
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas> */}

    {/* <Canvas style={{ height: 90 + 'vh', width: 50 + 'vw', position: 'absolute', zIndex: 1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <TransformControls />
      <Test />
    </Canvas> */}

    {/* <Canvas style={{ height: 90 + 'vh', width: 50 + 'vw', position: 'absolute', zIndex: 1 }}>
      <PerspectiveCamera position={[20, 10, 10]}>
        {(texture) => (
          <mesh>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial map={texture} >
            <meshStandardMaterial color={'pink'} />
            <OrbitControls enableZoom={false} />
            <TransformControls />
          </mesh>
        )}
      </PerspectiveCamera>
    </Canvas> */}

    {/* <Canvas style={{ height: 90 + 'vh', width: 50 + 'vw', position: 'absolute', zIndex: 1 }}>
      <AnotherTest />
    </Canvas>

    <Canvas style={{ height: 30 + 'vh', width: 20 + 'vw', position: 'absolute', zIndex: 1, top: 30, left: 0 }}>
      <AnotherTest />
    </Canvas>

    <Canvas style={{ height: 20 + 'vh', width: 10 + 'vw', position: 'absolute', zIndex: 1, top: 550, left: 50 }}>
      <AnotherTest />
    </Canvas>

    <Canvas style={{ height: 30 + 'vh', width: 20 + 'vw', position: 'absolute', zIndex: 1, top: 450, right: 150 }}>
      <AnotherTest />
    </Canvas> */}

    {!start && <h1 style={{ position: 'relative', zIndex: 5 }}>Quiska</h1>}
    <Canvas className="canvas" style={{ height: 90 + 'vh', width: 50 + 'vw', position: 'absolute', zIndex: 1 }}>
      <AnimatedSphere color={"#34a1d5"} scale={2} distort={0.5} speed={1.5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
    </Canvas>

    <Canvas className="canvas" style={{ height: 90 + 'vh', width: 60 + 'vw', position: 'absolute', zIndex: 0 }}>
      <AnimatedSphere color={"#3fc7a7"} scale={2.1} distort={0.6} speed={1.2} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
    </Canvas>

    {/* BOX */}
    {/* <Canvas className="canvas" style={{ height: 90 + 'vh', width: 60 + 'vw', position: 'absolute', zIndex: 0 }}>
      <Suspense fallback={null}>
      <Box />
      </Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />

    </Canvas> */}

    {start && <Signup />}
    {!start && <button onClick={() => { setStart(!start) }} className='start-btn'>Start</button>}
  </section>
}