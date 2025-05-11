import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
export default function About() {
    return (
        <>
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
                <p className="text-lg mb-6">
                    I'm a passionate developer with expertise in modern web technologies.
                    My journey in software development has equipped me with a diverse skill set
                    and a problem-solving mindset.
                </p>
                <p className="text-lg mb-6">
                    With a focus on creating responsive, user-friendly interfaces, I strive to build
                    applications that are both functionally robust and aesthetically pleasing.
                    I enjoy learning new technologies and continuously improving my skills.
                </p>
                <div className="mt-8 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-4">
                        <p className="text-lg font-semibold text-[var(--primary)]">Scratch this!</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-[var(--primary)] animate-bounce"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                    <ScratchToReveal
                        width={300}
                        height={200}
                        minScratchPercentage={50}
                        gradientColors={["#3B82F6", "#1B2A41", "#334155"]}
                        className="flex items-center justify-center overflow-hidden rounded-2xl bg-black border-2"
                    >
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-center text-[var(--primary)] mb-10">
                                Insert daily favorite quote here
                            </h3>
                            <h3 className="text-2xl font-bold text-[var(--primary)]">
                                quote here
                            </h3>
                        </div>
                    </ScratchToReveal>
                </div>
            </div>
        </>
    );
}