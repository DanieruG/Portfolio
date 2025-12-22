"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
  return (
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
        <section>
          <div className="flex flex-row items-center space-x-4">
            <Image
              alt="Profile Placeholder"
              src="./profile-picture.svg"
              width="200"
              height="200"
              className="rounded-full"
            />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-white text-5xl font-bold">
                Hey, my name's Daniel Gyabaah.
              </h2>
              <p className="text-muted text-center w-100">
                I am currently a 1st year Computer Science student @ The
                University of Manchester.
              </p>
              <Image
                alt="GHub"
                src="./github.svg"
                width="50"
                height="50"
                className="dark:invert"
              />
            </div>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  );
}
