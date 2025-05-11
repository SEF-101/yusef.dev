import { WarpBackground } from "@/components/magicui/warp-background";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

export default function Contact() {
    return (
        <WarpBackground>
            <div className="container mx-auto px-4 flex justify-center">
                <Card className="w-full max-w-md bg-[var(--card)] shadow-lg">
                    <CardContent className="flex flex-col gap-4 p-6">
                        <CardTitle className="text-4xl font-bold text-center text-[var(--primary)]">
                            Get in Touch
                        </CardTitle>
                        <CardDescription className="text-lg text-center text-[var(--foreground)]">
                            Feel free to reach out to me via email. I'd love to hear from you!
                        </CardDescription>
                        <a
                            href="mailto:yusef8000@gmail.com"
                            className="text-xl text-center text-[var(--primary)] hover:underline"
                        >
                            yusef8000@gmail.com
                        </a>
                    </CardContent>
                </Card>
            </div>
        </WarpBackground>
    );

}