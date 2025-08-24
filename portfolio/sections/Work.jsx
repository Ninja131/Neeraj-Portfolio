'use client'
import { Icon } from '@iconify/react';
import AnimatedHeaderSection from "@/Components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from 'next/image';

const Work = () => {
  const previewRef = useRef(null);
  const overlayRefs= useRef([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 786) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    gsap.killTweensOf(el);
    gsap.to(el,
    {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)", // expands full
      duration:0.15,
      ease:'power2.out'
    })



    gsap.killTweensOf(previewRef.current);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 786) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    gsap.killTweensOf(el);

    gsap.to(el,{
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", // shrink back
      duration:0.2,
      ease:'power2.in',
    })





    gsap.killTweensOf(previewRef.current);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    function handleMouseMove(e) {
      if (window.innerWidth < 786) return;
      const { clientX, clientY } = e;
      gsap.to(previewRef.current, {
        x: clientX - 50,
        y: clientY - 50,
        duration: 3.5,
        ease: "power3.out",
      });
    };

    gsap.from('#project',{
      y:200,
      opacity:0,
      duration:1,
      stagger:0.3,
      ease:'back.out',
      scrollTrigger:{
        trigger:'#project',
      }
    })

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
   
    <section id="work" className="flex flex-col min-h-screen mt-5 lg:mt-40">
          <AnimatedHeaderSection
            borderColor={true}
            subTitle="Logic meets Aesthetics, Seamlessly"
            title="Works"
            text={text}
            textColor="text-black"

            
          />

          

          


      <div className=" relative flex flex-col font-light  ">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0 "
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          ><a href={project.link}>
            {/* overlay */}
            <div
             ref={(el)=>{overlayRefs.current[idx]=el}}
             className='absolute inset-0 hidden  md:block duration-200  -z-10  transition-colors bg-black'
             style={{
               clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", // initial collapsed
        }}
             ></div>
            {/* title */}
            <div className="flex justify-between px-4  lg:px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="ri:arrow-right-up-line" className="md:sixe-6 sixe-5" />
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />

            {/* framework */}
            <div className="flex px-4 lg:px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12 flex-wrap">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div></a>

            {/* mobile preview image */}
            <div className="px-4 lg:px-10 md:hidden h-[400px]">
              <a className='relative w-full h-full  flex items-center justify-center'
              href={project.link}>
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={`${project.image}`}
                alt={`${project.name}-image`}
                className=" absolute overflow-hidden bg-center px-14 rounded-4xl"
              /></a>
              
            </div>
          </div>
        ))}

        {/* desktop floating preview image */}
        <div
          ref={previewRef}
          className={`fixed top-0 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[860px] h-[500px]  ${currentIndex== null? `hidden`:`md:block`} opacity-0 rounded-3xl`}
        >
          <img
            src={currentIndex !== null ? projects[currentIndex].image : null}
            alt="preview"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Work;
