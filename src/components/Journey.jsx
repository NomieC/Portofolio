import React from "react";
import { motion } from "framer-motion";
import { journey } from "../constants";
import { styles } from "../styles";

const PulsingRing = ({ color, delay = 0, size = "w-20 h-20" }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0.5 }}
    animate={{
      scale: [1, 1.8, 2.5],
      opacity: [0.8, 0.4, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut",
    }}
    className={`absolute rounded-full border-2 ${size} pointer-events-none`}
    style={{ 
      borderColor: color,
      boxShadow: `0 0 15px ${color}, inset 0 0 10px ${color}`,
      filter: "blur(1px)"
    }}
  />
);

const horizonVariant = {
  hidden: { 
    opacity: 0, 
    scale: 0.5, 
    y: 100,
    rotateX: -20
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 1.2
    }
  }
};

const JourneyItem = ({ item, index }) => {
  return (
    <motion.div 
      variants={horizonVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex items-center justify-center w-full mb-20 relative`}
    >
      {/* Connector Line */}
      {index !== journey.length - 1 && (
        <div className="absolute top-20 bottom-[-80px] w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50" />
      )}

      {/* Main Content Container */}
      <div className={`flex flex-col md:flex-row items-center w-full max-w-4xl px-4 font-sans`}>
        
        {/* Left Side (Date/Title for even items) */}
        <div className={`flex-1 text-right pr-12 hidden md:block ${index % 2 === 0 ? "opacity-100" : "opacity-0"}`}>
          <h3 className="text-white text-3xl font-bold font-display tracking-tight">{item.title}</h3>
          <p className="text-secondary text-sm font-semibold mt-1">{item.date}</p>
        </div>

        {/* Center Sphere */}
        <div className="relative flex items-center justify-center z-10 mx-4 md:mx-0">
          <PulsingRing color={item.color} delay={0} size="w-24 h-24" />
          <PulsingRing color={item.color} delay={1} size="w-24 h-24" />
          <PulsingRing color={item.color} delay={2} size="w-24 h-24" />
          
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
          >
            {/* Inner Neon Glow */}
            <div 
              className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
              style={{ 
                backgroundColor: item.color,
                boxShadow: `inset 0 0 20px ${item.color}`
              }}
            />
            <span className="material-symbols-outlined text-white text-4xl z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              {item.icon}
            </span>
          </motion.div>
        </div>

        {/* Right Side (Date/Title for odd items, or all items on mobile) */}
        <div className={`flex-1 pl-12 ${index % 2 !== 0 ? "opacity-100" : "md:opacity-0"}`}>
          <h3 className="text-white text-3xl font-bold font-display tracking-tight">{item.title}</h3>
          <p className="text-secondary text-sm font-semibold mt-1">{item.date}</p>
          <div className="mt-4 block md:hidden">
             {item.points.map((point, i) => (
                <p key={i} className="text-white/70 text-sm leading-relaxed">
                  • {point}
                </p>
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Journey = () => {
  return (
    <section className={`${styles.padding} relative z-0`} id="journey">
      <div className="flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <p className={`${styles.sectionSubText} font-sans tracking-[0.2em]`}>A Timeline of My Growth</p>
          <h2 className={`${styles.sectionHeadText} font-display mt-2`}>Chronicle: A Journey Through the Stars.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col w-full">
          {journey.map((item, index) => (
            <JourneyItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
