import React, { useEffect } from "react";
import "../Styles/Background.scss";

export const Background = () => {
  useEffect(() => {
    let curX = 0,
      curY = 0;
    let tgX = 0,
      tgY = 0;

    const interBubble = document.querySelector(".interactive");

    if (!interBubble) {
      console.error(".interactive element not found!");
      return;
    }

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;

      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradient-container">
        <div className="bg1"></div>
        <div className="bg2"></div>
        <div className="bg3"></div>
        <div className="bg4"></div>
        <div className="bg5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
};

export default Background;
