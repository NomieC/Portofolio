import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

// SVG Saturn placeholder with white glow effect
const SaturnPlaceholder = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
      style={{
        filter: "drop-shadow(0 0 40px rgba(255,255,255,0.4)) drop-shadow(0 0 80px rgba(255,255,255,0.2))",
        marginRight: "-20%",
        marginTop: "5%"
      }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          {/* Planet gradient */}
          <radialGradient id="planetGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </radialGradient>
          {/* Ring gradient */}
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="20%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="80%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          {/* Subtle atmosphere glow */}
          <radialGradient id="atmosphere" cx="50%" cy="50%">
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
            <stop offset="85%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* Atmosphere glow */}
        <circle cx="100" cy="100" r="55" fill="url(#atmosphere)" />

        {/* Ring behind planet */}
        <ellipse 
          cx="100" cy="105" rx="80" ry="18" 
          fill="none" 
          stroke="url(#ringGrad)" 
          strokeWidth="3"
          filter="url(#glow)"
          opacity="0.6"
          clipPath="url(#topHalf)"
        />

        {/* Planet body */}
        <circle 
          cx="100" cy="100" r="38" 
          fill="url(#planetGrad)" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="1"
          filter="url(#glow)"
        />
        
        {/* Surface lines */}
        <path d="M 68 90 Q 100 85 132 90" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <path d="M 65 100 Q 100 95 135 100" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
        <path d="M 68 110 Q 100 105 132 110" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

        {/* Ring in front of planet */}
        <ellipse 
          cx="100" cy="105" rx="80" ry="18" 
          fill="none" 
          stroke="url(#ringGrad)" 
          strokeWidth="2.5"
          filter="url(#glow)"
          opacity="0.5"
          strokeDasharray="0 126 126 0"
        />

        {/* Inner ring detail */}
        <ellipse 
          cx="100" cy="105" rx="65" ry="14" 
          fill="none" 
          stroke="rgba(255,255,255,0.15)" 
          strokeWidth="1"
          filter="url(#glow)"
        />
      </motion.svg>

      {/* Pulsing glow behind */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 60px 20px rgba(255,255,255,0.05)",
            "0 0 100px 40px rgba(255,255,255,0.1)",
            "0 0 60px 20px rgba(255,255,255,0.05)",
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </div>
);

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
  
  const scaleFactor = isMobile ? 1.5 : isTablet ? 1.0 : 0.9;
  const position = isMobile ? [0, -1.5, 0] : isTablet ? [2.5, -0.3, 0] : [3, -0.3, 0];
  const fov = isMobile ? 14 : isTablet ? 12 : 10;

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      {/* SVG Saturn placeholder — visible while 3D model loads */}
      <Suspense fallback={<SaturnPlaceholder />}>
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
      </Suspense>
    </div>
  );
};

export default PlanetCanvas;