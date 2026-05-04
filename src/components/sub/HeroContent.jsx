"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion";
import Planet from "./Planet.jsx";
import "../../styles/downloadcv.css";

const CV = "/FidelBrianDava_CV.pdf";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-col justify-center px-5 md:px-20 mt-20 md:mt-40 "
    >
      <div className="h-full w-full flex flex-col md:flex-row justify-between items-center mt-20 md:mt-0">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-5 text-center md:text-start max-w-full md:max-w-[50%] z-10">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-row flex-wrap gap-x-4 mt-6 text-5xl md:text-8xl font-black font-display"
          >
            <div className="flex">
              {"Fidel".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                    filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                  className="text-black"
                  style={{ WebkitTextStrokeWidth: "2px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex">
              {"Brian".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                    filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: (i + 5) * 1,
                  }}
                  className="text-black"
                  style={{ WebkitTextStrokeWidth: "2px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex">
              {"Dava".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                    filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: (i + 10) * 2.15,
                  }}
                  className="text-black"
                  style={{ WebkitTextStrokeWidth: "2px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.6)}
            className="flex flex-row flex-wrap gap-x-3 text-2xl md:text-5xl font-bold font-display"
          >
            <div className="flex">
              {"Fullstack".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                    filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="text-black"
                  style={{ WebkitTextStrokeWidth: "1.5px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex">
              {"Developer".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                    filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: (i + 9) * 0.1,
                  }}
                  className="text-black"
                  style={{ WebkitTextStrokeWidth: "1.5px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <div className="flex mx-2">
              <motion.span
                animate={{
                  WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                  filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 12, // Longer delay for the slash
                }}
                className="text-black"
                style={{ WebkitTextStrokeWidth: "1.5px" }}
              >
                /
              </motion.span>
            </div>

            <div className="flex">
              {"AI".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                    filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay:  18.1, // Delay after slash
                  }}
                  className="text-black"
                  style={{ WebkitTextStrokeWidth: "1.5px" }}
                >
                  {letter}
                </motion.span>
              ))}
              <span className="w-3"></span>
              {"Engineer".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    WebkitTextStrokeColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"],
                    filter: ["drop-shadow(0 0 0px rgba(255,255,255,0))", "drop-shadow(0 0 10px rgba(255,255,255,0.8))", "drop-shadow(0 0 0px rgba(255,255,255,0))"]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: (i + 20) * 2,
                  }}
                  className="text-black"
                  style={{ WebkitTextStrokeWidth: "1.5px" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base md:text-lg text-gray-400 my-3"
          >
            Computer Science student with hands-on experience developing
            scalable web applications using Laravel, React, and PostgreSQL.
            Delivered responsive websites for organizations and internal tools
            that improved workflow efficiency by up to 40%. Strong interest in
            cybersecurity and financial technology.
          </motion.p>
          <motion.div
            variants={slideInFromLeft(0.9)}
            className="button mx-auto md:mx-0 "
          >
            <a href={CV} download="FidelBrianDava_CV.pdf">
              <button className="btn">
                <strong className="strong">Download CV</strong>
                <div className="containerstars">
                  <div className="stars"></div>
                </div>
                <div className="glow">
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right: Planet */}
        <motion.div
          variants={slideInFromRight(1)}
          className="w-full md:w-[90%] h-full md:h-[90%]  md:mt-0 z-[2]"
        >
          <Planet />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
