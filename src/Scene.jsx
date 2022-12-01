import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

import MODEL from "./assets/models/TorusPurple.glb";
import "./assets/scene.css";

const Scene = () => {

    const Model = () => {
        const obj = useGLTF(MODEL);
        console.log(obj);
        obj.nodes.Plane.visible = false;

        return (
            <primitive object={obj.scene} />
        )
    }

    return (
        <>
            <Suspense>
                <Canvas camera={{fov: 75, position: [0, 0, 1]}}>
                    <ambientLight intensity={1.25} />
                    <mesh scale={5} position={[0, -1, 0]}>
                        <Model />
                    </mesh>
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
            </Suspense>
        </>
    )
}

export default Scene;