import React from "react";
import { motion } from "framer-motion";
import { universeTech } from "../constants";
import { styles } from "../styles";

const Orbit = ({ radius, speed, children }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute border border-white/10 rounded-full flex items-center justify-center"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {children}
    </motion.div>
  );
};

const TechNode = ({ tech, radius }) => {
  // Calculate initial position based on angle
  const angleRad = (tech.angle * Math.PI) / 180;
  const x = radius * Math.cos(angleRad);
  const y = radius * Math.sin(angleRad);

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center group"
      style={{
        left: `calc(50% + ${x}px - 2rem)`,
        top: `calc(50% + ${y}px - 2rem)`,
      }}
      // Counter-rotate the icon so it stays upright
      animate={{ rotate: -360 }}
      transition={{
        duration: tech.orbit === 1 ? 20 : tech.orbit === 2 ? 30 : 40,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:bg-purple-500/30 transition-colors" />
        
        <motion.div 
          whileHover={{ scale: 1.2, zIndex: 50 }}
          className="w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center p-2 relative overflow-hidden"
        >
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </motion.div>
      </div>
      
      <span className="mt-1 text-[10px] md:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-0.5 rounded">
        {tech.name}
      </span>
    </motion.div>
  );
};

const TechUniverse = () => {
  return (
    <section className={`${styles.padding} relative z-0 h-[800px] overflow-hidden font-sans`} id="tech">
      <div className="flex flex-col items-center justify-center h-full relative">
        
        {/* Section Header */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20">
          <p className={`${styles.sectionSubText} font-sans tracking-[0.2em]`}>Mastering the Technical Singularity</p>
          <h2 className={`${styles.sectionHeadText} font-display mt-2`}>Core Competencies</h2>
        </div>

        {/* Central Core */}
        <div className="relative z-10 flex items-center justify-center">
          {/* Animated Glows */}
          <motion.div
            animate={{ 
                scale: [1, 1.4, 1],
                rotate: 360 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-40 h-40 bg-gradient-to-r from-purple-600 via-orange-500 to-red-600 rounded-full blur-[50px] opacity-60 mix-blend-screen"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-32 h-32 bg-white/20 rounded-full blur-2xl border border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          />
          
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-black/80 backdrop-blur-3xl border border-white/30 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_60px_rgba(255,255,255,0.2)]">
            <span className="text-white font-bold text-sm md:text-lg font-display tracking-wider">Core Expertise</span>
          </div>
        </div>

        {/* Orbits */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Orbit 1 */}
          <Orbit radius={140} speed={20}>
             {universeTech.filter(t => t.orbit === 1).map((tech, i) => (
               <TechNode key={i} tech={tech} radius={140} />
             ))}
          </Orbit>

          {/* Orbit 2 */}
          <Orbit radius={240} speed={30}>
             {universeTech.filter(t => t.orbit === 2).map((tech, i) => (
               <TechNode key={i} tech={tech} radius={240} />
             ))}
          </Orbit>

          {/* Orbit 3 */}
          <Orbit radius={340} speed={40}>
             {universeTech.filter(t => t.orbit === 3).map((tech, i) => (
               <TechNode key={i} tech={tech} radius={340} />
             ))}
          </Orbit>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

export default TechUniverse;
