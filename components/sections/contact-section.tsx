import { WarpBackground } from "@/components/magicui/warp-background";
import { AuroraText } from "@/components/magicui/aurora-text";
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
                            <AuroraText colors={["#3B82F6", "#4C51BF", "#9370DB"]}> Get in Touch </AuroraText>
                        </CardTitle>
                        <CardDescription className="text-lg text-center text-white font-lato">
                            Feel free to reach out to me via email. I'd love to hear from you!
                        </CardDescription>
                        <a
                            href="mailto:contact@yusef.dev"
                            className="text-xl text-center text-[var(--primary)] hover:underline break-all overflow-wrap-anywhere"
                        >
                            contact@yusef.dev
                        </a>
                    </CardContent>
                </Card>
            </div>
        </WarpBackground>
    );

}