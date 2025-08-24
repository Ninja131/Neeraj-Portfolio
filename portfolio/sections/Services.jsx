'use client'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import AnimatedHeaderSection from "@/Components/AnimatedHeaderSection";
import { servicesData } from "@/constants";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: 768 }); // 48rem

  // animation starts here
  useEffect(() => {
    const ctc = gsap.context(()=>{
        serviceRefs.current.forEach((el)=>{
            if(!el) return;
            gsap.from(el,{
                y:100,
                duration:1,
                ease:'circ.out',
                scrollTrigger:{
                    trigger:el,
                    start:'top 80%'
                },
                
            })
        })
    })
  
    return () => ctx.revert();
  }, [])
  

  return (
    <section
      id="services"
      className=" min-h-screen bg-black rounded-t-2xl pt-10"
    >
      <AnimatedHeaderSection
        subTitle={"Design that speaks, experiences that stay"}
        title={"Service"}
        text={`I blend UX strategy, UI design, and frontend development to create digital experiences that are as functional as they are beautiful`}
        textColor={"text-white"}
        widthScrollTrigger={true}
        borderColor={false}
      />

      <div className="bg-black relative lg:h-[2000px] h-[3000px]">
        {servicesData.map((service, idx) => (
          <div
            ref={(el) => (serviceRefs.current[idx] = el)}
            key={idx}
            className=" sticky  px-4 lg:px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
            style={{ top: `${idx * 6}rem` }} // stagger
          >
            <div className="bg-black flex items-center justify-between gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h1 className="text-3xl lg:text-5xl">{service.title}</h1>
                <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                  {service.description}
                </p>

                <div className="bg-black flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                  {service.items.map((item, itemIdx) => (
                    <div key={`item-${idx}-${itemIdx}`}>
                      <h3 className="flex">
                        <span className="mr-12 text-lg text-white/30">
                          0{itemIdx + 1}
                        </span>
                        {item.title}
                      </h3>
                      {itemIdx < service.items.length - 1 && (
                        <div className="w-full h-px my-2 bg-white/30" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Services;
