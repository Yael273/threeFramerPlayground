import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useState } from "react";

export function Test() {

    // const [active, setActive] = useState(false)
    const [hovered, setHover] = useState(false)

    return <mesh visible
        userData={{ hello: 'world' }}
        // position={[1, 1, 1]} 
        rotation={[Math.PI / 2, 0, 0]}
        // scale={active ? 1.1 : 1}
        // onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
    >
        {/* <sphereGeometry args={[1, 32]} /> */}
        <Sphere visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color={hovered ? 'orange' : '#3fc7a7'}
                attach="material"
                distort={0.5}
                speed={1.5}
            // roughness={0.5}
            />
            {/* <meshNormalMaterial
                // bumpScale={0.5}
                attach="material" /> */}
        </Sphere>
    </mesh>

}