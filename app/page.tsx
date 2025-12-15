"use client";

import { useEffect, useRef } from "react";
import { useMenu } from "@/store/useMenu";

import { ReactLenis } from "lenis/react";

import Menu from "@/components/menu/menu";
import Presentation from "@/components/presentation/presentation";
import Projects from "@/components/projects/projects";
import Experiences from "@/components/experiences/experiences";
import Contact from "@/components/contact/contact";
import About from "@/components/about/about";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { value } = useMenu();

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);

  useEffect(() => {
    document.body.style.overflowY = value ? "auto" : "hidden";
    document.body.classList.add("overflow-hidden");
    document.body.style.overflowX = "hidden";
    window.scrollTo(0, 0);
  }, [value]);

  return (
    <div>
      <Menu />
      <div className={`w-screen overflow-hidden`}>
        {value && <ReactLenis root />}

        <section className="relative">
          <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Presentation />
          </div>
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div>
            <video
              ref={videoRef}
              src="/background.mp4"
              muted
              loop
              playsInline
              className={`object-cover h-screen w-full transition-all duration-600 ${
                value ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </section>

        <section>
          <About />
        </section>

        <section>
          <Experiences />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Contact />
        </section>
      </div>
    </div>
  );
}
