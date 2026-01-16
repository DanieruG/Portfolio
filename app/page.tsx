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
          className="relative h-full flex flex-col justify-center items-center"
        >
          <header className="absolute top-0 left-0 right-0 flex justify-center p-8">
            {" "}
            {/* This absolute here fixed a massive issue. Please cover it more thoroughly soon, just like every other piece of AI in here. */}
            <div className="space-x-15 p-4 border border-white/20 text-white backdrop-filter rounded-3xl backdrop-blur-sm bg-white/15 transition-all duration-300">
              <a href="#section1" className="font-semibold hover:text-zinc-400">
                Projects
              </a>
              <a href="#" className="font-semibold hover:text-zinc-400">
                Experience
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
                <h2 className="text-3xl text-center font-bold bg-linear-to-r from-zinc-500 to-zinc-200 bg-clip-text text-transparent py-1 md:text-5xl animate-text-flow bg-[length:200%_auto]">
                  Hey, my name's Daniel Gyabaah.
                </h2>

                <p className="text-transparent text-center w-50 bg-zinc-300 bg-clip-text md:w-100">
                  I'm currently a 1st year Computer Science student @ The
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
