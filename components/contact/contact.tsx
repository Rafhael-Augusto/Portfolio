import { useInView } from "@/hooks/useInView";

import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { BBH_Sans_Hegarty } from "next/font/google";

const smooch_sans = BBH_Sans_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
});

export default function Contact() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  const contacts = [
    {
      icon: <SiGmail />,
      title: "Gmail",
      description: "rafhaelalvesprado@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "Github",
      description: "https://github.com/Rafhael-Augusto",
    },
    {
      icon: <FaLinkedin />,
      title: "Linkedin",
      description: "https://www.linkedin.com/in/rafhael-augusto/",
    },
  ];

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out mt-12
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <h2
        className={`text-4xl font-semibold underline text-center ${smooch_sans.className}`}
      >
        Contato
      </h2>
      <div className="flex flex-col lg:flex-row lg:gap-0 gap-8 p-8 border-2 rounded-xl border-zinc-800 m-8">
        <div className="md:flex hidden flex-col gap-8 lg:w-1/2 border-b-2 lg:border-b-0 pb-8 lg:pb-0 lg:border-r-2 border-white lg:border-zinc-800">
          <h2 className="text-4xl font-semibold ">Rafhael Augusto</h2>
          <p className="text-xl whitespace-pre-line">
            Porque sou a escolha certa; {"\n \n"}
            Sou um desenvolvedor focado em construir soluções funcionais, bem
            estruturadas e fáceis de manter. Tenho experiência tanto no
            front-end quanto no back-end, o que me permite enxergar o produto
            como um todo e tomar decisões técnicas mais eficientes. {"\n \n"}
            Valorizo código limpo, boas práticas e entregas consistentes. Tenho
            facilidade em aprender novas tecnologias, resolver problemas de
            forma prática e automatizar processos para ganhar eficiência e
            reduzir erros. {"\n \n"}
            Mais do que apenas escrever código, busco entender o contexto, o
            objetivo do projeto e o impacto da solução, contribuindo de forma
            responsável e colaborativa para resultados reais.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:px-8 px-0 justify-center">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex gap-4 items-center justify-left border-b-2 border-zinc-900"
            >
              <div className="text-4xl w-full sm:w-12 hidden sm:flex items-center justify-center">
                {contact.icon}
              </div>
              <a
                href={`${
                  contact.description.startsWith("http")
                    ? `${contact.description}`
                    : `mailto:${contact.description}`
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block text-2xl hover:scale-105 cursor-pointer transition-all duration-200"
              >
                {contact.description}
              </a>

              <div className="flex items-center justify-start sm:hidden text-4xl  sm:w-12">
                {contact.icon}
              </div>
              <a
                href={`${
                  contact.description.startsWith("http")
                    ? `${contact.description}`
                    : `mailto:${contact.description}`
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl sm:hidden hover:scale-105 cursor-pointer transition-all duration-200"
              >
                {contact.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
