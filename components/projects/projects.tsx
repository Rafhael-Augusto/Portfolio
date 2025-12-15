import { BBH_Sans_Hegarty } from "next/font/google";
import { useInView } from "@/hooks/useInView";
import Project from "../project/project";

const smooch_sans = BBH_Sans_Hegarty({
  subsets: ["latin"],
  weight: ["400", "400"],
});

export default function Projects() {
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
          <Project />
        </div>
      </div>
    </div>
  );
}
