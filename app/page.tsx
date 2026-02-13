"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Cards from "@/components/cards";
import { cn } from "@/lib/utils";
{
  /* An import for the dotted background. */
}

export default function Hero() {
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
          className="relative h-full flex flex-col justify-center items-stretch px-6 md:px-12"
        >
          <header className="absolute top-0 left-0 right-0 flex justify-center p-8">
            <div className="flex items-center max-w-6xl w-full p-4 border border-white/20 text-white backdrop-filter rounded-xl backdrop-blur-sm bg-white/15 transition-all duration-300 relative">
              <a
                href="#"
                className="text-2xl font-bold hover:text-zinc-400 space-x-7 self-start"
              >
                Daniel G
              </a>
              <div className="space-x-15 mx-auto">
                <a
                  href="#"
                  className="font-semibold hover:text-zinc-400 hover:px-6 hover:rounded-md border border-zinc-500 rounded-xl p-2 transition-all duration-300"
                >
                  About Me
                </a>
                <a
                  href="#section1"
                  className="font-semibold hover:text-zinc-400 hover:rounded-md hover:px-6 border border-zinc-500 rounded-xl p-2 transition-all duration-300"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="font-semibold hover:text-zinc-400 hover:rounded-md hover:px-6 border border-zinc-500 rounded-xl p-2 transition-all duration-300"
                >
                  Experience
                </a>
              </div>
            </div>
          </header>

          {/* MAIN HERO CONTENT */}
          <section className="w-full">
            <div className="flex flex-row items-center space-x-20">
              <Image
                alt="Profile Placeholder"
                src="/IMG_6980.jpg"
                width="200"
                height="200"
                className="w-60 h-60 rounded-full object-cover shrink-0 hidden lg:block"
              />
              <div className="flex flex-col space-y-6 md:space-y-8">
                {/* Headline */}
                <p className="text-sm md:text-base text-zinc-500 font-medium uppercase tracking-wider">
                  Hey, I'm Daniel Gyabaah.
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  I build web applications
                  <span className="block text-zinc-400">
                    that solve real problems.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
                  Full-stack developer studying BSc Computer Science at{" "}
                  <span className="bg-linear-to-r from-purple-600 via-purple-400 to-yellow-400 bg-clip-text text-transparent ">
                    The University of Manchester
                  </span>
                  . I turn ideas into products using React, Flask, and modern
                  web tools.
                </p>

                {/* CTA Buttons + Social Links */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <div className="flex gap-4">
                    <a
                      href="#section1"
                      className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                    >
                      View Projects
                    </a>
                    <a
                      href="#"
                      className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/5 transition-all"
                    >
                      Download CV
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 sm:ml-4">
                    <Link
                      href={"https://github.com/DanieruG"}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <Image
                        alt="GitHub"
                        src="./github.svg"
                        width="24"
                        height="24"
                        className="brightness-0 invert"
                      />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/in/daniel-gyabaah/"}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <Image
                        alt="LinkedIn"
                        src="./linkedin.svg"
                        width="24"
                        height="24"
                        className="brightness-0 invert"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AuroraBackground>

      <div className="flex flex-col items-center bg-black text-white">
        {/* PROJECTS */}
        <section>
          <div className="flex flex-col text-center space-y-2">
            <div className="text-4xl font-bold" id="section1">
              Projects.
            </div>
            <p className="text-md text-zinc-400">
              A collection of things I've built for school, or just for fun!
            </p>
          </div>

          {/* This is where card generation needs to happen! */}
          <div className="flex flex-col gap-6 p-8 items-center md:justify-center md:flex-row md:items-stretch">
            {/* Gap is great because it works both ways! */}

            <Cards />
          </div>
        </section>

        <section>
          <div className="flex flex-col text-center space-y-2 mt-10">
            <div className="text-4xl font-bold">Experience.</div>
            <div className="text-md text-zinc-400">
              This includes work, education, and other extra exploits.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
