'use client'
import AnimatedTextLines from "@/Components/AnimatedTextLines";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const AnimatedHeaderSection = ({subTitle,title,text,textColor,borderColor,widthScrollTrigger=false}) => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);

    // gsap animations starts here 
    useEffect(() => {
      const ctx = gsap.context(()=>{
        const tl = gsap.timeline({
            scrollTrigger: widthScrollTrigger ? {
                trigger:contextRef.current,
            }: undefined,
        });
        tl.from(contextRef.current,{
            y:'50vh',
            duration:1,
            ease:'circ.out'
        });
        tl.from(headerRef.current,{
            opacity:0,
            y:'200',
            duration:1,
            ease:'circ.out',
        },'<+0.2s');

      })
    
      return () => ctx.revert();
    }, []);
  return (
    <div className="px-4 lg:px-10"
     ref={contextRef}>
            <div style={{clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)' }}>
                <div
                ref={headerRef}
                 className={`flex flex-col justify-center  `}>
                    <p className={`md:text-sm text-xs font-light tracking-[0.4rem] uppercase  ${textColor} mb-4`}>{subTitle}</p>

                    <div className=" ">
                        <h1 className={`${textColor} uppercase banner-text-responsive md:block mb-1 lg:mb-4`}>{title}</h1>
                    </div>
                 </div>
            </div>
            {/* line is hetre */}
            <div className={`relative   ${textColor}`}>
               <div className={`absolute inset-x-0 border-1 ${borderColor? `border-black`:`border-white/70`}`} />

                    
                <div className="py-10 sm:py-12 flex justify-end">
                        <AnimatedTextLines text = {text} className="font-light uppercase value-text-responsive max-w-200 text-end opacity-60 "/>
                        
                           
                    </div>
            </div>
        </div>
  )
}

export default AnimatedHeaderSection