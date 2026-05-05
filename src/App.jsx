import React, { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Journey,
  TechUniverse
} from "./components";

const App = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Star Wars Crawl: Perspective Tilt and Movement
  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 45]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <BrowserRouter>
      <div className="h-full w-full bg-[#030014] overflow-x-hidden relative">
        {/* Background Layer */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <StarsCanvas />
        </div>

        <div className="flex flex-col h-full w-screen relative">
          {/* Spotlight Effect */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white opacity-5 blur-[120px] rounded-full pointer-events-none z-[30]" />
          
          <Hero />
          
          <motion.div 
            ref={containerRef}
            style={{ 
              perspective: "1200px",
              rotateX,
              z: translateZ,
              y,
              opacity,
              transformStyle: "preserve-3d"
            }}
            className="flex flex-col origin-bottom pointer-events-auto z-10"
          >
            <Journey />
            <TechUniverse />
            <Experience />
          </motion.div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
