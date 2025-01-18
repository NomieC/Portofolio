import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

const Planet = () => {
    const planet = useGLTF("/lava_planet/scene.gltf");
    const ref = useRef(); // Reference to the mesh that should rotate
  
    // Auto-rotate the model on each frame
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.01; // Rotate around Y-axis
      }
    });
  
    planet.scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = false; // Disable culling
      }
    });
  
    return (
      <>
        {/* Independent lights */}
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={2100} position={[-10, 0, -8]} distance={500} />
  
        {/* Rotating planet */}
        <mesh ref={ref}>
          <primitive object={planet.scene} scale={1} position={[0, 0, 0]} />
        </mesh>
      </>
    );
  };

const PlanetCanvas = () => {
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
        <Planet />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PlanetCanvas;
