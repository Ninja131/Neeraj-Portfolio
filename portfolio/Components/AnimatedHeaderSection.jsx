'use client'
import AnimatedTextLines from "@/Components/AnimatedTextLines";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimatedHeaderSection = ({ subTitle, title, text, textColor, borderColor, widthScrollTrigger = false }) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  // 🔹 Path animation refs
  const svgWrapperRef = useRef(null);
  const pathRef = useRef(null);
  const [width, setWidth] = useState(0);

  // gsap animations starts here
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: widthScrollTrigger
          ? {
              trigger: contextRef.current,
            }
          : undefined,
      });
      tl.from(contextRef.current, {
        y: "50vh",
        duration: 1,
        ease: "circ.out",
      });
      tl.from(
        headerRef.current,
        {
          opacity: 0,
          y: "200",
          duration: 1,
          ease: "circ.out",
        },
        "<+0.2s"
      );
    });

    return () => ctx.revert();
  }, [widthScrollTrigger]);

  // 🔹 Path animation effect (from your first component)
  useEffect(() => {
    if (svgWrapperRef.current) {
      setWidth(svgWrapperRef.current.getBoundingClientRect().width);
    }

    const handleResize = () => {
      if (svgWrapperRef.current) {
        setWidth(svgWrapperRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener("resize", handleResize);






 const handleMouseMove = (event) => {
  if (!svgWrapperRef.current) return;

  const bounds = svgWrapperRef.current.getBoundingClientRect();
  const x = event.clientX - bounds.left; // relative to wrapper
  const y = event.clientY - bounds.top;  // relative to wrapper

  gsap.to(pathRef.current, {
    attr: { d: `M 0 0 Q ${x} ${y} ${width} 0` },
    duration: 0.3,
    ease: "power2.out",
  });
};






    const handleMouseLeave = () => {
      gsap.to(pathRef.current, {
        attr: { d: `M 0 0 Q ${width / 2} 0 ${width} 0` },
        duration: 1.5,
        ease: "elastic.out(2,0.1)",
      });
    };

    if (svgWrapperRef.current) {
      svgWrapperRef.current.addEventListener("mousemove", handleMouseMove);
      svgWrapperRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (svgWrapperRef.current) {
        svgWrapperRef.current.removeEventListener("mousemove", handleMouseMove);
        svgWrapperRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [width]);

  return (
    <div  className="px-4 lg:px-10" ref={contextRef}>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div  ref={headerRef} className={`flex flex-col justify-center`}>
          <p
            className={`md:text-sm text-xs font-light tracking-[0.4rem] uppercase ${textColor} mb-4`}
          >
            {subTitle}
          </p>

          <div>
            <h1
              className={`${textColor} uppercase banner-text-responsive md:block mb-1 lg:mb-4`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* 🔹 Replaced static border line with animated SVG path */}
      <div ref={svgWrapperRef} className={` relative ${textColor}`}>
        <div  className="w-full">
          <svg className="w-full" >
            <path
              ref={pathRef}
              d={`M 0 0 Q ${width / 2} 0 ${width} 0`}
              stroke={borderColor ? "black" : "white"}
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>

        <div className="py-10 sm:py-12 flex justify-end">
          <AnimatedTextLines
            text={text}
            className="font-light uppercase value-text-responsive max-w-200 text-end opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
