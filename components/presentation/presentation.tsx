import { useEffect, useState } from "react";

import { useMenu } from "@/store/useMenu";

import { BBH_Sans_Hegarty } from "next/font/google";

const smooch_sans = BBH_Sans_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
});

export function Presentation() {
  const [size, setSize] = useState(6);
  const { value, updateValue } = useMenu();

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    const handlePresentation = async () => {
      if (size <= 5) return;

      await sleep(600);
      setSize(9);

      await sleep(900);
      setSize(5);

      await sleep(400);
      updateValue(true);
    };

    if (document.readyState === "complete") {
      handlePresentation();
    } else {
      window.addEventListener("load", handlePresentation);
    }
  }, []);

  return (
    <div className={`h-1/2 w-screen tracking-widest z-10`}>
      <div
        style={{ fontSize: `${size}vw` }}
        className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-all duration-600"
      >
        <div className="flex flex-col relative items-center justify-center">
          <h1 className={`inline-block ${smooch_sans.className}`}>
            Software Engineer
          </h1>
          <span
            className={`absolute bottom-0.5 bg-white h-1 md:w-3xl origin-left transition-all duration-1500 ${
              value ? "scale-x-100" : "scale-x-0"
            } `}
          />
        </div>
        <span
          className={`absolute top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg text-gray-500 w-full  sm:w-1/3 transition-all duration-2000 ${
            value ? "opacity-100" : "opacity-0"
          }`}
        >
          Transformando ideias em código limpo, soluções eficientes e
          experiências digitais memoráveis
        </span>
      </div>
    </div>
  );
}
