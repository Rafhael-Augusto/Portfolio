"use client";

import { useMenu } from "@/store/useMenu";
import { Button } from "../ui/button";

import { Smooch_Sans } from "next/font/google";

const smooch_sans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function Menu() {
  const year = new Date().getFullYear();
  const { value } = useMenu();

  const buttons = [
    {
      name: "Sobre",
    },
    {
      name: "Experiencia",
    },
    {
      name: "Projetos",
    },
    {
      name: "Contato",
    },
  ];

  return (
    <div
      className={`flex justify-between p-4 text-xl tracking-wider transition-all duration-1000 sticky top-0 z-30 ${
        smooch_sans.className
      } ${value ? "opacity-100" : "opacity-0 disabled:*"}`}
    >
      <div>
        <span>Rafhael Augusto</span>
      </div>

      <div className="flex gap-8">
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={"ghost"}
            className={`text-xl ${value && "cursor-pointer"}`}
          >
            {button.name}
          </Button>
        ))}
      </div>

      <div>
        <span>{year}</span>
      </div>
    </div>
  );
}
