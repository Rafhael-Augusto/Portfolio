"use client";

import React, { useEffect, useRef, useState } from "react";

import { useLenis } from "lenis/react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type tool = {
  name: string;
  icon: React.ReactNode;
};

type links = {
  name: string;
  link: string;
};

interface props {
  title: string;
  desc: string;
  video: string;
  links: links[];
  tools: tool[];
}

export function Project({ data }: { data: props }) {
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

  const handle_click = (value: boolean) => {
    if (!current_ref.current) return;
    if (!value) {
      setShowDesc(false);
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
    } else {
      handle_scroll();
      setShowDesc(true);
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

  return (
    <div className={`relative w-screen h-screen`}>
      <div
        onClick={(e) => handle_click(false)}
        className={`top-0 left-0 h-screen w-screen ${
          showDesc ? "absolute" : "hidden"
        }`}
      />
      <div
        ref={current_ref}
        data-lenis-prevent
        onClick={(e) => handle_click(true)}
        style={{ cursor: !showDesc ? "pointer" : "default" }}
        className={`absolute top-0 overflow-hidden left-0 bg-stone-950 rounded-2xl h-100 w-100 hover:scale-105 transition-all duration-600 
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
              src={data.video}
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
            <h3 className="text-2xl font-extrabold">{data.title}</h3>

            <p>{data.desc}</p>

            <div className="flex flex-col gap-4 w-full">
              {data.links.map((link) => (
                <div key={link.name}>
                  <p className="font-bold">{link.name}</p>
                  <a href={link.link}>{link.link}</a>
                </div>
              ))}
            </div>

            <div className="flex gap-8 items-center text-2xl ">
              {data.tools.map((tool) => (
                <Tooltip key={tool.name}>
                  <TooltipTrigger asChild>
                    <div className="bg-stone-900 rounded-full p-2">
                      {tool.icon}
                    </div>
                  </TooltipTrigger>

                  <TooltipContent className="bg-black/50 text-white font-bold">
                    <p>{tool.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
