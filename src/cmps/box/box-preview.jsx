import { Canvas } from "@react-three/fiber";
import { AnotherTest } from "../another-test";
import { Box } from "../box";

export function BoxPreview({ box }) {

    return <Canvas style={{ height: box.height, width: box.width, position: 'absolute', zIndex: 1, top: box.top, left: box.left }}>
        {/* <AnotherTest /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box color={box.color}/>
    </Canvas>
}