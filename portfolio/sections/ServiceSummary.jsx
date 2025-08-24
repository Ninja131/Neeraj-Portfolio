'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
    //gsap animations starst here
    useEffect(() => {
      const ctx = gsap.context(()=>{
        gsap.to('#title-service-1',{
            x:'100%',
            scrollTrigger:{
                target: '#title-service-1',
                scrub:1,
            }

        });

        gsap.to('#title-service-2',{
            x:'-30%',
            scrollTrigger:{
                target: '#title-service-2',
                scrub: 1,
            }

        });

        gsap.to('#title-service-3',{
            x:'80%',
            scrollTrigger:{
                target: '#title-service-3',
                scrub: 1,
            }

        });

        gsap.to('#title-service-4',{
            x:'-100%',
            scrollTrigger:{
                target: '#title-service-4',
                scrub: 1,
            }

        });

      });
    
      return () => ctx.revert();
    }, [])
    
  return (
    <section className=' mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive'>
        <div id='title-service-1'>
            <p>UX/UI</p>
        </div>
        <div id='title-service-2' className='flex items-center justify-center gap-3 translate-x-16'>
            <p className=''>Development</p>
            <div className='w-10 h-1 md:w-32 bg-yellow-600'/>
            <p>3 D</p>
        </div>

        <div id='title-service-3' className='flex items-center justify-center gap-3 -translate-x-48'
        >
            <p>UxResearch</p>
            <div className='w-10 h-1 md:w-32 bg-yellow-600'/>
            <p className='italic'>Animation</p>
             <div className='w-10 h-1 md:w-32 bg-yellow-600'/>
            <p className='italic'>Prototype</p>
        </div>
        <div id='title-service-4' className=' translate-x-48'>
            <p>WireFrames</p>
        </div>
    </section>
  )
}

export default ServiceSummary