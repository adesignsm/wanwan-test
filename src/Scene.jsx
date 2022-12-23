import React from "react";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

import BOWL  from "./assets/models/ToppingBowl.glb";
import DONUT from "./assets/models/DonutVase.glb";
import TORUS from "./assets/models/TorusBlush.glb";

import "./assets/scene.css";

const Scene = () => {
    
    const Model = () => {

        //IMPORTANT VARIABLE
        const ToppingBowl = useGLTF(BOWL);
        const DonutVase = useGLTF(DONUT);
        const TorusBlush = useGLTF(TORUS);
        // console.log(obj);
        // obj.nodes.Plane.visible = false;


        return (
            <>
                <mesh scale={5} position={[0, -3, 0]}>
                    <primitive object={ToppingBowl.scene} />
                </mesh>
                
                <mesh rotation={[0, 30, 0]}scale={220} position={[-5, -1, -2]}>
                    <primitive object={DonutVase.scene} />
                </mesh>

                <mesh scale={5} position={[-4, -1.5, 5]}>
                    <primitive object={TorusBlush.scene} />
                </mesh>
            </>
        )
    }

    return (
        <>
            <Suspense>
                <Canvas camera={{position: [-5, 2, 15], fov:60}}>
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