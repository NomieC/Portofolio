import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

const Drinks = () => {
  const drinks = useGLTF("/assets/drink/scene.gltf");
  const ref = useRef(); // Reference to the model

  // Auto-rotate the model on each frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;  // Rotate around Y-axis
    }
  });

  drinks.scene.traverse((child) => {
    if (child.isMesh) {
      child.frustumCulled = false;  // Disable culling
    }
  });

  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={0.1} groundColor="black" />
      <pointLight intensity={1} position={[0, 1, 0]} distance={500} />
      <pointLight intensity={1} position={[2, -1, 1]} distance={500} color={'#F29F58'} />

      <primitive object={drinks.scene} scale={15} position={[0, 0, 0]} />
    </mesh>
  );
};

const DrinksCanvas = () => {
  return (
    <Canvas
      className="drinks-canvas"
      frameLoop="demand"
      shadows
      camera={{ position: [0, 0, 10], fov: 10, near: 0.01, far: 5000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Drinks />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default DrinksCanvas;