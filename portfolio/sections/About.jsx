'use client'
import AnimatedHeaderSection from '@/Components/AnimatedHeaderSection'
import AnimatedTextLines from '@/Components/AnimatedTextLines';
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    //gsap animation
    useEffect(() => {
      const ctx = gsap.context(()=>{
        gsap.to("#about", {
        scale: 0.95,
        scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });

      })
    
      return () => ctx.revert();
    }, [])
    




    const text = `Passionate about design and technology, I create digital experiences that are functional, visually striking, and built to grow with users`;
const aboutText = `👋 Hey, I’m Neeraj — a student at Lovely Professional University chasing my passion for UX/UI and 3D web experiences.

Here’s what keeps me busy (and excited):

🎨 Designing digital experiences — from mobile apps to websites, blending creativity with usability.

🌀 Exploring 3D web — I love making interfaces interactive and alive.

💻 Frontend Development — building responsive, scalable products with Next.js, Tailwind, Shadcn, and our favorite GPT 🤖.

🎓 IIT Delhi Internship Grad — worked on projects spanning 3D, mobile, and website design, plus frontend coding.

📺 Learning code on YouTube — because who needs textbooks when tutorials are free? 😅

🌍 Sharing my work on LinkedIn — even Webflow gave me a nod 👀✨.

And when I’m not designing or coding?

🎬 I edit & create content for YouTube and LinkedIn (yes, I do my own marketing too 😎).

⚡️ One promise: Bore toh bilkul bhi nahi hoge! 🚀`;
const imgRef = useRef(null);
  return (
    <section
    id='about'
    className='min-h-screen bg-black rounded-b-4xl  pt-60'
    >

    <AnimatedHeaderSection
     subTitle={"Designing experiences, not just screens"}
    title={"About"}
    text={text}
    textColor={"text-white"}
    withScrollTrigger={true}
      />

    <div className="flex flex-col items-start lg:items-center justify-between gap-16 px-4 lg:px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 ">
        {/* image */}
        <div className=' relative lg:w-150 lg:h-110 w-full h-100 max-w-150'>
        <Image
        ref={imgRef}
          src="/profile-image.jpg"
          alt="man"
          className=" rounded-3xl  object-cover "
          fill
        />
        </div>
        {/* <AnimatedTextLines text={aboutText} className={"w-full text-[16px] leading-relaxed max-w-[700px]"} /> 
        */}
        <p className={"w-full text-[16px] leading-loose max-w-[700px]"} >👋 Hey, <span className='text-white'>I’m Neeraj</span> — a student at <span className='text-white'>Lovely Professional University</span> chasing my passion for <span className='text-white'>UX/UI and 3D web experiences </span>

          Here’s what keeps me busy and excited- <br />

          <span className='text-white'>🎨 Designing digital experiences —</span>  from mobile apps to websites, blending creativity with usability. <br />

          <span className='text-white'>🌀 Exploring 3D web —</span>
           I love making interfaces interactive and alive. <br />


          <span className='text-white'>💻 Frontend Development —</span>building responsive, scalable products with Next.js, Tailwind, Shadcn, and our favorite GPT 🤖. <br />


          <span className='text-white'>🎓 IIT Delhi Internship Grad —</span>
           worked on projects spanning 3D, mobile, and website design, plus frontend coding. <br />


          <span className='text-white'>📺 Learning code on YouTube —</span>
           because who needs textbooks when tutorials are free? 😅 <br />



          <span className='text-white'>🌍 Sharing my work on LinkedIn —</span>
           even Webflow gave me a nod 👀✨. <br />

          And when I’m not designing or coding?

          🎬 I edit & create content for YouTube and LinkedIn (yes, I do my own marketing too 😎).


          <span className='text-white'>⚡️Website he scrool kre rhoge ya Linkedin pe follow bhi kroge🚀</span> <a
          className=' border-1 border-white pt-1 pb-2 px-4 rounded-full hover:bg-white/20'
          href="https://www.linkedin.com/in/neerajchoudhary09/">neerajchoudhary09</a>
          </p>
      </div>

    </section>
  )
}

export default About