import { useInView } from "@/hooks/useInView";

import { BBH_Sans_Hegarty } from "next/font/google";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { PiMouseScrollFill } from "react-icons/pi";
import { LuPackageSearch } from "react-icons/lu";
import { Project } from "../project/project";

const smooch_sans = BBH_Sans_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
});

const projects = [
  {
    title: "Project title",
    desc: "Project description",
    video: "/background.mp4",
    links: [
      {
        name: "Github",
        link: "https://github.com/Rafhael-Augusto/Portfolio",
      },
      {
        name: "Vercel",
        link: "https://github.com/Rafhael-Augusto/Portfolio",
      },
    ],
    tools: [
      {
        icon: <RiNextjsFill />,
        name: "Next.js",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <BiLogoTypescript />,
        name: "TypeScript",
      },
      {
        icon: <RiTailwindCssFill />,
        name: "Tailwind CSS",
      },
      {
        icon: <TbBrandThreejs />,
        name: "Three.js",
      },

      {
        icon: <LuPackageSearch />,
        name: "Zustand",
      },
      {
        icon: <PiMouseScrollFill />,
        name: "Lenis",
      },
    ],
  },
];

export function Projects() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out grid gap-6 mt-16 p-8 h-screen ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative ">
        <h2
          className={`text-center py-4 text-4xl underline ${smooch_sans.className}`}
        >
          Projetos
        </h2>

        <div className="h-full w-full ">
          {projects.map((project) => (
            <Project key={project.title} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
