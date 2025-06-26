import { Meteors } from "@/components/magicui/meteors";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Linkedin, Github , FileUser } from "lucide-react"

export default function Hero() {
    return (
        <>
            {/* hero  */}
            <section className="flex flex-col min-h-screen text-[var(--foreground)] relative">
                <div className="absolute inset-0">
                    <Meteors />
                </div>

                {/* main */}
                <div className="flex flex-col md:flex-row items-center flex-grow px-8 py-12 relative z-10">
                    {/* image */}
                    <div className="flex justify-center relative w-full md:w-1/3 mb-8 md:mb-0 z-10">
                        <Image
                            src="/transparent.png"
                            alt="Yusef's profile picture"
                            width={500}
                            height={450}
                            className="object-cover w-3/4 md:w-full relative"
                            priority
                        />
                    </div>

                    {/* text */}
                    <div className="w-full md:w-2/3 space-y-4 md:ml-8 relative text-center md:text-left z-10">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            <span className="block relative">
                                <span className="relative">Hi,</span>
                            </span>
                            <span className="block">
                                I&apos;m Yu
                                <span className="relative group">
                                    <span className="text-[var(--primary)]">sef</span>
                                    <span className="absolute text-xs text-[var(--primary)] bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">101</span>
                                </span>
                            </span>
                        </h1>
                        <p className="text-lg font-lato">
                            Software engineer building scalable systems and sleek interfaces.
                        </p>

                        <div className="flex justify-center md:justify-start space-x-4 pt-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a href="https://linkedin.com/in/yusef-h" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                                            <Linkedin size={36} />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom" className="bg-accent">
                                        <p className="font-lato">View My LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a href="https://github.com/SEF-101" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                                            <Github size={36} />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p className="font-lato">View My GitHub</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <a href="/resume/Yusef_Harb_Software_Engineer_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                                            <FileUser size={36} />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p className="font-lato">View My Resume</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}