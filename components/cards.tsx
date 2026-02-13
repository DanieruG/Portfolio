import Image from "next/image";
import Link from "next/link";
import { Python } from "./icons";

export default function Cards() {
  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
  };

  const projects = [
    {
      title: "Conjugator",
      description:
        "A site meant to act as a revision site for students studying French at GCSE/A-Level. Allows the user to generate conjugation quizzes, and have their progress tracked through a dashboard. To be improved in the future.",
      image: "/conjugator2.png",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "Javascript",
        "JQuery",
        "Flask",
        "SQL",
      ],
    },

    {
      title: "Pomodoro Timer",
      description:
        "A small timer project I did to improve my skills in Tkinter, and my object-oriented programming skills.",
      image: "/pomodoro.png",
      technologies: ["Python", "Tkinter"],
    },

    {
      title: "TravelPal",
      description:
        "For GreatUniHack 2025. A site meant to act as a matchmaker for travellers. An AI agent was implemented to suggest possible destinations based on the user's interests and profile.",
      image: "/guh.png",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "TailwindCSS",
        "Flask",
        "SQL",
      ],
    },
  ];

  return (
    <>
      {projects.map((project: Project) => (
        <div className="max-w-sm flex flex-col flex-1 border border-zinc-700 rounded overflow-hidden bg-zinc-900/85 transition-all duration-300 hover:bg-zinc-800/20">
          <Image
            alt="placeholder"
            src={project.image}
            width={300}
            height={100}
            className="w-full aspect-video object-cover"
          />
          <div className="px-6 py-4 flex flex-col grow">
            <div className="text-xl font-bold text-center py-3">
              {project.title}
            </div>
            <p className="text-sm text-zinc-400 ml-2">{project.description}</p>

            <div className="m-2 space-x-3 space-y-2">
              <p className="text-zinc-500 font-semibold text-sm">
                Technologies used:
              </p>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex gap-2 items-center transition-all hover:bg-white hover:text-black rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20"
                >
                  <Python width={10} height={10} />
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-end mt-auto">
              {/* The button styling here was the work of AI */}
              <button className="px-3 py-2 text-sm font-semibold text-white border border-white/20 rounded-md hover:bg-white hover:text-black transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
