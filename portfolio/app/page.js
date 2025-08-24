import About from "@/sections/About";
import Contact from "@/sections/Contact";
import ContactSummary from "@/sections/ContactSummary";
import Hero from "@/sections/Hero";
import MouseMove from "@/sections/MouseMove";
import NavBar from "@/sections/NavBar";
import Services from "@/sections/Services";
import ServiceSummary from "@/sections/ServiceSummary";
import Work from "@/sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-screen min-h-screen  ">
      <NavBar/>
      <Hero/>
      <ServiceSummary/>
      <Services/>
      <About/>
      <Work/>
      {/* <MouseMove/> */}
      <ContactSummary/>
      <Contact/>
     
    </div>
    
    </>
  );
}
