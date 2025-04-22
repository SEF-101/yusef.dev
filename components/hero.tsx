export default function Hero() {
    return (
        <>
            {/* hero */}
            <section className="flex items-center justify-between min-h-screen px-8 text-[var(--foreground)]">
                <div className="space-y-4">
                    <h1 className="text-6xl font-bold">
                        <span className="block">Hi,</span>
                        <span className="block">
                            I'm Yu
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

                <div className="w-1/3">
                    <img
                        src="/profile.jpg"
                        alt="Yusef"
                        className="rounded-full shadow-lg"
                    />
                </div>
            </section>
        </>
    );
}