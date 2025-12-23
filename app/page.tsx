"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";

export default function Hero() {
  const projects = [
    {
      title: "Conjugator",
      description: "Something I built with Python, HTML, CSS and Javascript.",
      image: "/conjugator.png",
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
        "A small timer project I did to improve my skills in Tkinter.",
      image: "/placeholder.jpg",
      technologies: ["Python", "Tkinter"],
    },
  ];

  return (
    <div className="overflow-hidden w-full">
      <AuroraBackground className="bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative h-full flex flex-col justify-center items-center"
        >
          <header className="absolute top-0 left-0 right-0 flex justify-center p-8">
            {" "}
            {/* This absolute here fixed a massive issue. Please cover it more thoroughly soon, just like every other piece of AI in here. */}
            <div className="space-x-2 p-4 text-white backdrop-filter rounded-3xl backdrop-blur-sm bg-white/15 md:space-x-30">
              <a href="#" className="font-semibold">
                Projects
              </a>
              <a href="#" className="font-semibold">
                Experience
              </a>
              <a href="#" className="font-semibold">
                About Me
              </a>
            </div>
          </header>

          {/* MAIN HEADER */}

          <section>
            <div className="flex flex-col items-center space-x-4 md:flex-row">
              <Image
                alt="Profile Placeholder"
                src="/IMG_6980.jpg"
                width="200"
                height="200"
                className="overflow-hidden rounded-full aspect-square object-cover"
              />
              {/* aspect-square = container remains 1:1 and object-cover here to fill the square and crop the edges... very interesting */}
              <div className="flex flex-col items-center space-y-3">
                <h2 className="text-xl font-bold bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent py-1 md:text-5xl sm:text-center">
                  Hey, my name's Daniel Gyabaah.
                </h2>

                <p className="text-transparent text-center w-50 bg-linear-to-r from-blue-200 to-blue-500 bg-clip-text">
                  I am currently a 1st year Computer Science student @ The
                  University of Manchester.
                </p>
                <div className="flex flex-row space-x-4">
                  <Link href={"https://github.com/DanieruG"}>
                    <Image
                      alt="GHub"
                      src="./github.svg"
                      width="30"
                      height="30"
                      className="brightness-0 invert"
                    />
                  </Link>
                  <Link href={"https://www.linkedin.com/in/daniel-gyabaah/"}>
                    <Image
                      alt="LinkedIn"
                      src="./linkedin.svg"
                      width="30"
                      height="30"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AuroraBackground>

      <div className="flex flex-col bg-black text-white">
        {/* PROJECTS */}
        <section>
          <div className="flex flex-col text-center space-y-2">
            <div className="text-4xl font-bold">Projects.</div>
            <p className="text-md text-zinc-400">
              A collection of things I've built for school, or just for fun!
            </p>
          </div>

          {/* This is where card generation needs to happen! */}
          <div className="flex flex-col gap-6 p-8 justify-center md:flex-row">
            {/* Gap is great because it works both ways! */}
            {projects.map((project) => (
              <div className="max-w-sm flex flex-col flex-1 border border-zinc-700 rounded overflow-hidden bg-zinc-900">
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
                  <p className="text-sm text-zinc-400 ml-2">
                    {project.description}
                  </p>

                  <div className="m-2 space-x-3 space-y-2">
                    <p className="text-zinc-500 font-semibold text-sm">
                      Technologies used:
                    </p>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center transition-all hover:bg-white hover:text-black rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20"
                      >
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
          </div>
        </section>
      </div>
    </div>
  );
}
