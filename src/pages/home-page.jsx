import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedSphere } from "../cmps/animated-sphere";
import { AnimatedSphere1 } from "../cmps/bg-animated-sphere";
import { Signup } from "./signup";

export function HomePage() {

  const [start, setStart] = useState(false)

  return <section className="home-page">
    {/* <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -50, right: 50 }}
      style={{ position: 'relative', zIndex: 5 }}
    >
      <h1 style={{ position: 'relative', zIndex: 5 }}>Quiska</h1>
    </motion.div> */}
    {/* <Signup /> */}
  {  !start &&  <h1 style={{ position: 'relative', zIndex: 5 }}>Quiska</h1>}
    <Canvas className="canvas" style={{ height: 90 + 'vh', width: 50 + 'vw', position: 'absolute', zIndex: 1 }}>
      <AnimatedSphere />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
    </Canvas>

    <Canvas className="canvas" style={{ height: 90 + 'vh', width: 60 + 'vw', position: 'absolute', zIndex: 0 }}>
      <AnimatedSphere1 />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
    </Canvas>

    {/* <Canvas className="canvas" style={{ height: 90 + 'vh', width: 60 + 'vw', position: 'absolute', zIndex: 0 }}>
      <Suspense fallback={null}>
      <Box />
      </Suspense>
      <AnimatedSphere1 />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />

    </Canvas> */}

    {/* <Canvas className="canvas" style={{ height: 90 + 'vh', width: 90 + 'vw', position: 'absolute', zIndex: 0, top: 50, right: 500 + 'px' }}>
      <AnimatedSphere2 />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
    </Canvas> */}
    {start && <Signup />}
    {!start && <button onClick={() => { setStart(!start) }} className='start-btn'>Start</button>}
  </section>
}