"use client";
import Spline from '@splinetool/react-spline';
import AnimatedHeaderSection from "@/Components/AnimatedHeaderSection";
import gsap from "gsap";
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const ParticleGroup = useRef(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  function onLoad(spline) {
    const obj = spline.findObjectByName('ParticleGroup');
    if (obj) {
      ParticleGroup.current = obj;
      setSceneLoaded(true);
    }
  }

  useEffect(() => {
    if (!sceneLoaded || !ParticleGroup.current) return;

    const width = window.innerWidth;

    let targetX, targetY, targetScale;

    if (width < 600) {
      // Small Mobile
      targetX = -270;
      targetY = -40;
      targetScale = 0.3;
    } else if (width < 768) {
      // Mobile / Tablet
      targetX = -200;
      targetY = -15;
      targetScale = 0.8;
    } else {
      // Desktop
      targetX = -100;
      targetY = -15;
      targetScale = 0.9;
    }

    // Animate with GSAP timeline for sync
    const tl = gsap.timeline({ defaults: { duration: 2, ease: "power3.out" } });

    tl.fromTo(
      ParticleGroup.current.position,
      { x: 200, y: 0 },
      { x: targetX, y: targetY }
    ).fromTo(
      ParticleGroup.current.scale,
      { x: 0.5, y: 0.5, z: 0.5 },
      { x: targetScale, y: targetScale, z: targetScale },
      "<" // run at same time as position
    );

  }, [sceneLoaded]);

  return (
    <section id="hero" className="flex flex-col justify-end min-h-screen  overflow-hidden  relative">
      <AnimatedHeaderSection
        subTitle={'Where Design meets Development & 3D'}
        title={'Neeraj Choudhary'}
        text={`Helping startups and brands stand out with UX-driven design,\n immersive 3D visuals, and conversion-focused web experiences`}
        textColor={'text-black'}
        borderColor={true}
      />

      <div className="hidden md:absolute h-dvh w-500 md:flex justify-center items-center mx-auto -z-1 md:z-1">
        <Spline 
          scene="https://prod.spline.design/7KW4b1OreXkzqasO/scene.splinecode" 
          onLoad={onLoad}
        />
      </div>

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
    </section>
  );
}

export default Hero;
