import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

// Planet 3D model component
const PlanetModel = ({ scaleFactor = 1, position = [0, 0, 0] }) => {
  const planet = useGLTF("/lava_planet/scene.gltf");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  planet.scene.traverse((child) => {
    if (child.isMesh) {
      child.frustumCulled = false;
    }
  });

  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={2100} position={[-10, 0, -8]} distance={500} />
      <mesh ref={ref}>
        <primitive object={planet.scene} scale={scaleFactor} position={position} />
      </mesh>
    </>
  );
};

const PlanetCanvas = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 769px) and (max-width: 1024px)" });
  
  // Mobile: planet centered, shifted down to cover bottom 1/3
  // Tablet: planet to the right, slightly lower
  // Desktop: planet to the right side, like the original layout
  const scaleFactor = isMobile ? 1.5 : isTablet ? 1.0 : 0.9;
  const position = isMobile ? [0, -1.5, 0] : isTablet ? [2.5, -0.3, 0] : [3, -0.3, 0];
  const fov = isMobile ? 14 : isTablet ? 12 : 10;

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas
        frameLoop="always"
        dpr={[1, 2]}
        shadows={false}
        camera={{ position: [10, 0, 10], fov, near: 0.1, far: 2000 }}
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          antialias: true,
          alpha: true
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
          />
          <PlanetModel scaleFactor={scaleFactor} position={position} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PlanetCanvas;