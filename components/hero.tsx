import { Meteors } from "@/components/magicui/meteors";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            {/* hero */}
            <section className="flex items-center min-h-screen px-8 text-[var(--foreground)]">
                <div className="w-1/2 space-y-4">
                    <h1 className="text-6xl font-bold">
                        <Meteors />
                        <span className="block relative">
                            <span className="relative z-10">Hi,</span>
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
                </div>

                <div className="w-1/3 flex justify-left">
                        <Image
                            src="/transparent.png"
                            alt="Yusef's profile picture"
                            width={500}
                            height={450}
                            className="object-cover w-full"
                            priority
                        />
                </div>
            </section>
        </>
    );
}