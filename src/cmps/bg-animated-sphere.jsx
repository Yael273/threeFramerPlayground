import { MeshDistortMaterial, Sphere } from "@react-three/drei";

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