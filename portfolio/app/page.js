"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import NavBar from "@/sections/NavBar";
import Hero from "@/sections/Hero";
import ServiceSummary from "@/sections/ServiceSummary";
import Services from "@/sections/Services";
import About from "@/sections/About";
import Work from "@/sections/Work";
import ContactSummary from "@/sections/ContactSummary";
import Contact from "@/sections/Contact";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate waiting for GSAP & Spline to be ready
    const timeout = setTimeout(() => {
      // Animate loader fade out
      gsap.to(".loader", {
        opacity: 0,
        duration: 1,
        onComplete: () => setLoading(false),
      });
    }, 8000); // <-- adjust based on your assets loading time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-screen min-h-screen relative">
      {/* Loader */}
      {loading && (
        <div className="loader fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-black text-white z-50">
          <div
          className="h-50 w-50 relative flex items-center justify-center animate-pulse"
          >
            <Image
            src='/favicon.svg'
            alt="favicon"
            fill
            className="object-center object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold animate-pulse ml-5">Loading...</h1>
        </div>
      )}

      {/* Main Content */}
      {!loading && (
        <>
          <NavBar />
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Work />
          <ContactSummary />
          <Contact />
        </>
      )}
    </div>
  );
}
