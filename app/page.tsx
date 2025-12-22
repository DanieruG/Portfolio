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

      {/* PROJECTS */}
      <div className="flex flex-col bg-black text-white">
        <h3 className="text-center text-3xl font-bold">Projects.</h3>

        <p>Just text to see something.</p>
      </div>
    </div>
  );
}
