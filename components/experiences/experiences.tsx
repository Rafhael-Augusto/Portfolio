import { useInView } from "@/hooks/useInView";
import { BBH_Sans_Hegarty } from "next/font/google";

const smooch_sans = BBH_Sans_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
});

export default function Experiences() {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  const experiences = [
    {
      company: "DecodeSoftware",
      role: "Software Engineer",
      date: "jun 2025 - momento",
      description:
        "Desenvolvimento de aplicações web e automação de processos, atuando em front-end e back-end, com foco em eficiência, qualidade de código e entregas escaláveis.",
    },
    {
      company: "Hotel Brasil",
      role: "Assistente Geral e Auxiliar Administrativo",
      date: "ago 2022 - abr 2024",
      description:
        "Atuação em atendimento ao cliente e suporte administrativo, com responsabilidade pelo controle de reservas, organização de agendas e gestão de fluxos operacionais. Realização de análises de relatórios financeiros, contribuindo para a organização e eficiência dos processos internos.",
    },
  ];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out grid gap-6 mt-16 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2
        className={`text-center py-4 text-4xl underline ${smooch_sans.className}`}
      >
        Experiencia
      </h2>

      <div className="grid lg:grid-cols-6 gap-8 grid-cols-2 sm:text-start">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="hover:scale-105 text-start col-span-3 rounded-xl border border-zinc-800 p-8 mx-8 transition hover:border-zinc-600"
          >
            <div>
              <span className="text-2xl font-semibold text-white">
                {experience.role}
              </span>
            </div>
            <h3 className="text-xl">{experience.company}</h3>
            <span className="text-zinc-400 text-sm">{experience.date}</span>
            <p className="mt-2 text-zinc-300 text-start">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
