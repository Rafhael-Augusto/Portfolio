"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { PiMouseScrollFill } from "react-icons/pi";

import { LuPackageSearch } from "react-icons/lu";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Project() {
  const lenis = useLenis();

  const [hovering, setHovering] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  const video_ref = useRef<HTMLVideoElement | null>(null);
  const current_ref = useRef<HTMLDivElement | null>(null);

  const handle_scroll = () => {
    if (!current_ref.current) return;

    lenis?.scrollTo(current_ref.current, {
      offset: -100,
    });
  };

  const handle_click = () => {
    if (!current_ref.current) return;
    if (showDesc) {
      current_ref.current.classList.remove(
        "top-1/5",
        "left-1/2",
        "-translate-x-1/2",
        "-translate-y-1/5",
        "scale-120",
        "w-[50%]",
        "hover:scale-115",
        "h-130",
        "overflow-scroll"
      );

      current_ref.current.classList.add(
        "top-0",
        "left-0",
        "h-100",
        "overflow-hidden"
      );

      setShowDesc(false);
    } else {
      handle_scroll();
      current_ref.current.classList.add(
        "top-1/5",
        "left-1/2",
        "-translate-x-1/2",
        "-translate-y-1/5",
        "scale-120",
        "w-[50%]",
        "hover:scale-115",
        "h-130",
        "overflow-scroll"
      );
      setShowDesc(true);
    }
  };

  useEffect(() => {
    if (!video_ref.current) return;

    if (showDesc || hovering) {
      video_ref.current.play();
    } else {
      video_ref.current.pause();
    }
  }, [showDesc, hovering]);

  const logos = [
    {
      name: "Next.js",
      icon: <RiNextjsFill />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Three.js",
      icon: <TbBrandThreejs />,
    },
    {
      name: "Zustand",
      icon: <LuPackageSearch />,
    },
    {
      name: "Lenis",
      icon: <PiMouseScrollFill />,
    },
  ];

  return (
    <div
      ref={current_ref}
      data-lenis-prevent
      onClick={(e) => handle_click()}
      className={`mt-32 absolute top-0 overflow-hidden left-0 bg-stone-950 rounded-2xl cursor-pointer h-100 w-100 hover:scale-105 transition-all duration-600 
      `}
    >
      <div
        className={`h-full w-full flex flex-col items-center justify-start gap-4 ${
          showDesc ? "py-4" : "py-0"
        }`}
      >
        <div
          className={`transition-all duration-400 ${
            showDesc ? "h-5/7 w-5/7" : "h-full w-full"
          }`}
        >
          <video
            ref={video_ref}
            onMouseEnter={(e) => setHovering(true)}
            onMouseLeave={(e) => setHovering(false)}
            src="/background.mp4"
            muted
            loop
            playsInline
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>

        <div
          className={`transition-all p-4 duration-400 flex flex-col gap-8 items-center justify-center ${
            showDesc ? "opacity-100 block" : " opacity-0 hidden"
          }`}
        >
          <h3 className="text-2xl font-extrabold">
            Projeto maneiro com nome bem legal
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            magni necessitatibus laboriosam ea quos obcaecati, exercitationem
            rem ipsa aut corporis sint eveniet nulla quibusdam. Accusantium
            placeat culpa iure adipisci suscipit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            magni necessitatibus laboriosam ea quos obcaecati, exercitationem
            rem ipsa aut corporis sint eveniet nulla quibusdam. Accusantium
            placeat culpa iure adipisci suscipit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            magni necessitatibus laboriosam ea quos obcaecati, exercitationem
            rem ipsa aut corporis sint eveniet nulla quibusdam. Accusantium
            placeat culpa iure adipisci suscipit.
          </p>

          <div className="flex gap-8 items-center text-2xl ">
            {logos.map((logo, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="bg-stone-900 rounded-full p-2">
                    {logo.icon}
                  </div>
                </TooltipTrigger>

                <TooltipContent className="bg-black/50 text-white font-bold">
                  <p>{logo.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
