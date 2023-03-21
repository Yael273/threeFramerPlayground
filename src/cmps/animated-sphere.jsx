import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export function AnimatedSphere({color, scale, distort, speed}) {
    // const loader = new GLTFLoader();
    return (
        <mesh>
            <Sphere visible args={[1, 100, 200]} scale={scale}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={speed}
                    roughness={5}
                />
                {/* <meshNormalMaterial attach="material" /> */}
            </Sphere>
        </mesh>

    )
}