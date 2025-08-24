"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseMove= ()=> {
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center", // optional
    });
  }, []);

  return (
    <div ref={iconRef} className="w-16 h-16 bg-red-500 " />
  );
}


export default MouseMove