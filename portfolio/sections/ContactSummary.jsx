'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Marquee } from "@/Components/magicui/marquee";
import { Icon } from "@iconify/react";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const logoRefs = useRef([]); // array of refs

  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];

  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      logoRefs.current.forEach((el) => {
        if (el) {
          gsap.to(el, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "linear",
            transformOrigin: "center center", // ensures rotation from middle
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16 font-workSan overflow-hidden"
    >
   
      <Marquee pauseOnHover={true} className="bg-black text-white">
        {items.map((val, idx) => (
          <div className="flex items-center gap-10" key={idx}>
            <Icon
              ref={(el) => (logoRefs.current[idx] = el)} // assign each icon its own ref
              icon="streamline:star-2-solid"
              width="20"
              height="20"
              className="ml-5 "
            />
            <p className="text-4xl font-extralight font-workSans">{val}</p>
          </div>
        ))}
      </Marquee>

      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          "From   
          <span className="font-normal opacity-100"> concept to code,</span>{" "} <br />
          <span className="italic"> let’s craft something bold &</span> 
          {" "}
          <span className="text-yellow-500 font-normal">inspiring</span>"
        </p>
      </div>

      <Marquee pauseOnHover={true} reverse={true} className="">
        {items2.map((val, idx) => (
          <div className="flex items-center gap-10 justify-center" key={idx}>
            <Icon
              icon="material-symbols:square-outline"
              width="24"
              height="24"
              className="mt-1 ml-5 text-yellow-500"
            />
            <p className="text-4xl font-extralight font-workSans text-black">
              {val}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ContactSummary;
