import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

// Planet component accepts a scaleFactor prop
const Planet = ({ scaleFactor = 1 }) => {
  const planet = useGLTF("/lava_planet/scene.gltf");
  const ref = useRef();

  // Auto-rotate the model on each frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Rotate around Y-axis
    }
  });

  // Disable frustum culling for all meshes in the scene
  planet.scene.traverse((child) => {
    if (child.isMesh) {
      child.frustumCulled = false;
    }
  });

  return (
    <>
      {/* Independent lights */}
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={2100} position={[-10, 0, -8]} distance={500} />

      {/* Rotating planet */}
      <mesh ref={ref}>
        {/* Use the passed scaleFactor */}
        <primitive object={planet.scene} scale={scaleFactor} position={[0, 0, 0]} />
      </mesh>
    </>
  );
};

const PlanetCanvas = () => {
  // Use react-responsive to detect if the screen width is less than 768px
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  
  // Set the scale factor depending on screen size.
  // For example, on mobile use 0.5 (or any value that suits your design), otherwise 1.
  const scaleFactor = isMobile ? 1.2 : 1;

  return (
    <Canvas
      className="planet-canvas"
      frameLoop="demand"
      shadows
      camera={{ position: [10, 0, 10], fov: 10, near: 0.01, far: 5000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Planet scaleFactor={scaleFactor} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PlanetCanvas;