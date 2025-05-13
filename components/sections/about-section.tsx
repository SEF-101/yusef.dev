"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { Music, Cpu, Flag, BookOpen } from "lucide-react";

export default function About() {
    return (
        <>
            <BoxReveal boxColor="#3B82F6" width="fit-content" duration={0.5}>
                <h2 className="text-4xl font-bold border-l-4 border-primary pl-4 mb-6 font-anton">
                    About Me
                </h2>
            </BoxReveal>

            <div className="mt-8 flex flex-col-reverse md:flex-row gap-10">
                {/* left side */}
                <div className="md:w-2/3">
                    <div className="space-y-6">
                        <div>
                            <p className="text-xl font-lato">
                                Outside of developing software, I'm a first-generation Palestinian-American who’s always been into building things and figuring out how they work. When I’m not coding, I’m enjoying one of my many hobbies such as drumming. I’ve been playing percussion for over 10 years, and that sense of rhythm and focus naturally shows up in how I approach problem-solving and teamwork.
                            </p>

                            <p className="text-xl font-lato mt-5">
                                I’ve been the go-to tech person in my circle for as long as I can remember fixing laptops, building PCs, and solving whatever tech issue pops up. That hands-on experience with both hardware and software helps me think about systems from the ground up.
                            </p>

                            <p className="text-xl font-lato mt-5">
                                These days, I’m focused on full-stack development and infrastructure. Building tools that are reliable, intuitive, and actually useful. I'm always experimenting with new technologies and building small projects to keep learning and improving.
                            </p>

                        </div>


                    </div>
                </div>

                {/* right side */}
                <div className="md:w-1/3 flex flex-col items-center space-y-8">
                    {/* book */}
                    <div className="w-full flex flex-col items-center">
                        <h4 className="text-lg font-semibold mb-3">My Favorite Book</h4>
                        <div className="relative w-40 h-56 overflow-hidden rounded-md border-2 border-primary/30 shadow-lg">
                            <Image
                                src="/bookCover.jpg"
                                alt="Project Hail Mary by Andy Weir"
                                width={160}
                                height={240}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="text-center text-sm font-lato mt-2 text-gray-300">Project Hail Mary</p>
                    </div>

                    {/* scratch reveal quotes */}
                    {/* <div className="mt-6">
            <p className="text-center text-sm mb-2 text-blue-300">Scratch for a random quote</p>
            <ScratchToReveal
              width={260}
              height={170}
              minScratchPercentage={50}
              gradientColors={["#3B82F6", "#1B2A41", "#334155"]}
              className="flex items-center justify-center overflow-hidden rounded-xl bg-black border border-blue-500/30"
            >
              <div className="flex flex-col items-center justify-center px-4">
                <p className="text-lg text-center text-[var(--primary)]">
                  "Good code is its own best documentation."
                </p>
                <p className="text-sm text-blue-300 mt-2">- Steve McConnell</p>
              </div>
            </ScratchToReveal>
          </div> */}
                </div>
            </div>
        </>
    );
}