import React from "react";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

import MODEL from "./assets/models/ToppingBowl.glb";
import "./assets/scene.css";

const Scene = () => {
    
    const Model = () => {

        //IMPORTANT VARIABLE
        const obj = useGLTF(MODEL);
        console.log(obj);
        // obj.nodes.Plane.visible = false;

        return (
            <>
                <mesh scale={5} position={[0, 0, 0]}>
                    <primitive object={obj.scene} />
                </mesh>
            </>
        )
    }

    return (
        <>
            <Suspense>
                <Canvas frameloop="demand">
                    <OrthographicCamera />
                    <ambientLight intensity={1.25} />
                    <Model />
                    <Environment preset="sunset" />
                    <OrbitControls />
                </Canvas>
            </Suspense>
        </>
    )
}

export default Scene;