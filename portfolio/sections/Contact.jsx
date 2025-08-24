
'use client'
import AnimatedHeaderSection from "@/Components/AnimatedHeaderSection";
import { Marquee } from "@/Components/magicui/marquee";
import { socials } from "../constants";
import gsap from "gsap";
import { Icon } from "@iconify/react";


const Contact = () => {
  const text = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`;
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ];

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black mt-10 lg:mt-20 pt-10 lg:pt-20 pb-10 font-workSans"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
          borderColor={false}
        />
        <div className="flex px-4 lg:px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                neerajneeraj1541@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                +91 78141 27212
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

       <Marquee pauseOnHover={true} className="bg-black text-white">
              {items.map((val, idx) => (
                <div className="flex items-center gap-10" key={idx}>
                  <Icon
                    icon="streamline:star-2-solid"
                    width="20"
                    height="20"
                    className="ml-5 "
                  />
                  <p className="text-4xl font-extralight font-workSans">{val}</p>
                </div>
              ))}
            </Marquee>
    </section>
  );
};

export default Contact;