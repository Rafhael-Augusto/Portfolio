import { useInView } from "@/hooks/useInView";

import { BBH_Sans_Hegarty } from "next/font/google";
import { Laptop } from "../renders/laptop/laptop";

const smooch_sans = BBH_Sans_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
});

export function About() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.6,
  });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-8 p-2 lg:p-8 mt-32 transition-all duration-700 ease-out gap-6 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex flex-col gap-4 justify-start col-span-8 lg:col-span-4 h-full p-8">
        <h2 className={`text-4xl underline ${smooch_sans.className}`}>
          Sobre mim
        </h2>

        <p>
          Sou Rafhael Augusto, formado em Full Stack Python pela EBAC. Meu
          interesse por tecnologia começou aos 13 anos, criando jogos e
          estudando programação de forma autodidata. Aos 17, decidi seguir
          carreira em desenvolvimento web e desde então venho me dedicando a
          projetos práticos e estudos contínuos. <br /> <br />
          Atuo no front-end com HTML, CSS, TypeScript e React, utilizando
          Next.js, Vite, Tailwind CSS e Styled Components para criar interfaces
          responsivas e bem estruturadas. <br /> <br />
          No back-end, trabalho com Python e Django, desenvolvendo APIs RESTful,
          integrando PostgreSQL e realizando deploys com Render, Vercel, Nginx e
          Gunicorn. <br /> <br /> Tenho familiaridade com Git/GitHub, Linux e
          ambientes virtuais. Sou curioso, organizado e valorizo a evolução
          constante e o trabalho em equipe.
        </p>
      </div>

      <div className="col-span-4 h-full">
        <Laptop />
      </div>
    </div>
  );
}
