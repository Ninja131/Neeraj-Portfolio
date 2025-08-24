'use client'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  // Split text by newlines OR force into 1 line if no breaks
  const lines = text.split('\n').filter((line) => line.trim() !== '');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out',
        scrollTrigger: {
          trigger: containerRef.current,
          
        },
      });
    },containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, idx) => (
        <span
          key={idx}
          ref={(el) => (lineRefs.current[idx] = el)}
          className="block"
          
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
