import { useRef, useEffect } from "react";

import { useInView } from "@/hooks/useInView";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";

interface props {
  isVisible: boolean;
}

function LaptopModel({ isVisible }: props) {
  const gltf = useGLTF("/laptop.glb");
  const group = useRef<THREE.Group>(null);

  const { actions } = useAnimations(gltf.animations, group);

  useEffect(() => {
    if (!isVisible) return;

    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    });
  }, [isVisible]);

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <primitive
      ref={group}
      object={gltf.scene}
      scale={0.5}
      rotation={[0, Math.PI / 1, 0]}
      position={[0, 0, 10]}
    />
  );
}

export function Laptop() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.6,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out mt-28 h-[78%] hidden lg:block
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <Canvas
        camera={{ position: [70, 45, 20], fov: 50 }}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = 0.2;
        }}
      >
        <ambientLight intensity={0.1} />
        <LaptopModel isVisible={isVisible} />
        <Environment preset="studio" />
        <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
