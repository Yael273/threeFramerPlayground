import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export function AnimatedSphere() {
    // const loader = new GLTFLoader();
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