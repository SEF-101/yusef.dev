import { Meteors } from "@/components/magicui/meteors";
import Image from "next/image";
import {Linkedin, Github} from "lucide-react"
import { TechMarquee } from "./marquee-custom";

export default function Hero() {
    return (
        <>
            {/* hero  */}
            <section className="flex flex-col min-h-screen text-[var(--foreground)] relative">
                <div className="absolute inset-0">
                    <Meteors />
                </div>
                
                {/* main */}
                <div className="flex flex-col md:flex-row items-center flex-grow px-8 py-12">
                    {/* image */}
                    <div className="flex justify-center relative w-full md:w-1/3 mb-8 md:mb-0">
                        <Image
                            src="/transparent.png"
                            alt="Yusef's profile picture"
                            width={500}
                            height={450}
                            className="object-cover w-3/4 md:w-full"
                            priority
                        />
                    </div>
                    
                    {/* text */}
                    <div className="w-full md:w-2/3 space-y-4 md:ml-8 relative text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            <span className="block relative">
                                <span className="relative">Hi,</span>
                            </span>
                            <span className="block">
                                I&apos;m Yu
                                <span className="relative">
                                    <span className="text-[var(--primary)]">sef</span>
                                    <span className="absolute text-xs text-[var(--primary)] bottom-4">101</span>
                                </span>
                            </span>
                        </h1>

                        <p className="text-lg">
                            A passionate developer skilled in modern web technologies.
                        </p>

                        <div className="flex justify-center md:justify-start space-x-4 pt-2">
                            <a href="https://linkedin.com/in/yusef-h" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                                <Linkedin size={36} />
                            </a>
                            <a href="https://github.com/SEF-101" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                                <Github size={36} />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* marquee */}
                <div className="w-full mt-auto">
                    <TechMarquee />
                </div>
            </section>
        </>
    );
}