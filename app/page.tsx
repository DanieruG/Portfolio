"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
  return (
    <div>
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
            <div className="space-x-30 p-4 text-white backdrop-filter rounded-3xl backdrop-blur-sm bg-white/15">
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
            <div className="flex flex-row items-center space-x-4">
              <Image
                alt="Profile Placeholder"
                src="/IMG_6980.jpg"
                width="200"
                height="200"
                className="overflow-hidden rounded-full aspect-square object-cover"
              />
              {/* aspect-square = container remains 1:1 and object-cover here to fill the square and crop the edges... very interesting */}
              <div className="flex flex-col items-center space-y-3">
                <h2 className="text-5xl font-bold bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent py-1">
                  Hey, my name's Daniel Gyabaah.
                </h2>

                <p className="text-transparent text-center w-100 bg-linear-to-r from-blue-200 to-blue-500 bg-clip-text">
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
          <div className="flex flex-row p-8">
            <div className="max-w-sm rounded overflow-hidden bg-zinc-900">
              <Image
                alt="placeholder"
                src="/conjugator.png"
                width={300}
                height={100}
                className="w-full aspect-video object-cover"
              />
              <div className="px-6 py-4 border border-zinc-700">
                <div className="text-xl font-bold text-center py-3">
                  Conjugator
                </div>
                <p className="text-sm text-zinc-400 ml-2">
                  Built with Python, HTML, CSS and a little JavaScript.
                </p>
                <div className="m-2 space-x-4">
                  <span className="inline-flex items-center transition-all hover:bg-white hover:text-black rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                    Python
                  </span>
                </div>
                <div className="flex justify-end">
                  {/* The button styling here was the work of AI */}
                  <button className="px-3 py-2 text-sm font-semibold text-white border border-white/20 rounded-md hover:bg-white hover:text-black transition-all duration-300">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
