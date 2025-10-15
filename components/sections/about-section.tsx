"use client";
import Image from "next/image";
import { useState } from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function About() {
    const cats = [
        { name: "Simba", src: "/catPics/simba.png", width: 140, height: 170, shape: "rounded-xl" },
        // Nuna image made larger
        { name: "Nuna", src: "/catPics/nuna.png", width: 220, height: 260, shape: "rounded-full" }
    ];

    const [selectedCat] = useState(() => cats[Math.floor(Math.random() * cats.length)]);
    const [isRevealed, setIsRevealed] = useState(false);
    const auroraColors = selectedCat.name === "Simba"
        ? ["#F59E0B", "#D97706", "#B45309", "#92400E"]
        : ["#F59E0B", "#FFFFFF", "#8B5E3C"];

    // ensure scratch canvas is at least the default size but grows to fit larger cat images
    const scratchWidth = Math.max(200, selectedCat.width + 40);
    const scratchHeight = Math.max(350, selectedCat.height + 40);

    return (
        <>
            <BoxReveal boxColor="#3B82F6" width="fit-content" duration={0.5}>
                <h2 className="text-4xl font-bold border-l-4 border-primary pl-4 mb-6 font-anton">
                    About Me
                </h2>
            </BoxReveal>

            <div className="mt-8 flex flex-col md:flex-row">
                {/* left side - text content */}
                <div className="md:w-1/2 mx-auto">
                    <div className="space-y-5">
                        <p className="text-lg font-lato">
                            Outside of developing software, I'm a first-generation Palestinian-American who's always been into building things and figuring out how they work. When I'm not coding, I'm enjoying one of my many hobbies such as drumming. I've been playing percussion for over 10 years, and that sense of rhythm and focus naturally shows up in how I approach problem-solving and teamwork.
                        </p>

                        <p className="text-lg font-lato">
                            I've been the go-to tech person in my circle for as long as I can remember fixing laptops, building PCs, and solving whatever tech issue pops up. That hands-on experience with both hardware and software helps me think about systems from the ground up.
                        </p>

                        <p className="text-lg font-lato">
                            These days, I'm focused on full-stack development and infrastructure. Building tools that are reliable, intuitive, and actually useful. I'm always experimenting with new technologies and building small projects to keep learning and improving.
                        </p>
                    </div>
                </div>

                {/* right side - book and cat */}
                <div className="md:w-1/2">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* book */}
                        <div className="flex flex-col items-center mx-25">
                            <h4 className="text-lg mb-3">My Favorite Book</h4>
                            <div className="relative w-50 h-70 overflow-hidden rounded-md border-2 border-primary/30 shadow-lg">
                                <Image
                                    src="/bookCover.jpg"
                                    alt="Project Hail Mary by Andy Weir"
                                    width={176}
                                    height={256}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <p className="text-center text-sm font-lato mt-2 text-gray-300 max-w-[180px]">Project Hail Mary by Andy Weir</p>
                        </div>

                        {/* scratch reveal for cat */}
                        <div className="flex flex-col items-center">
                            {!isRevealed && (<p className="text-center text-lg mb-2">Scratch to see one of my cats</p>)}
                            <ScratchToReveal
                                width={scratchWidth}
                                height={scratchHeight}
                                minScratchPercentage={50}
                                gradientColors={["#3B82F6", "#1B2A41", "#334155"]}
                                className={`flex items-center justify-center overflow-hidden ${selectedCat.shape}`}
                                onComplete={() => setIsRevealed(true)}
                            >
                                <div className="flex flex-col items-center justify-center px-4">
                                    <Image
                                        src={selectedCat.src}
                                        alt={selectedCat.name}
                                        width={selectedCat.width}
                                        height={selectedCat.height}
                                    />
                                    <div className="mt-2">
                                        <AuroraText
                                            colors={auroraColors}
                                            speed={0.8}
                                            className="text-lg"
                                        >
                                            {selectedCat.name}
                                        </AuroraText>
                                    </div>
                                </div>
                            </ScratchToReveal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}