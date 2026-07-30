"use client";

import { useState } from "react";
import { WarpBackground } from "@/components/magicui/warp-background";
import { BlurFade } from "@/components/ui/blur-fade";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:contact@yusef.dev?subject=${subject}&body=${body}`;
  };

  return (
    <WarpBackground>
      <div className="container mx-auto px-4 py-24 flex justify-center">
        <BlurFade delay={0.1} inView>
          <div className="w-full max-w-lg bg-[var(--background)]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-anton text-primary tracking-wide mb-2 text-center">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 font-lato text-center mb-8">
              Have a project in mind? Need tech help? Send me a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 font-lato h-12 focus:border-primary/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 font-lato h-12 focus:border-primary/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project or what you need help with..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 font-lato resize-none focus:border-primary/50"
                />
              </div>
              <CoolMode options={{ particleCount: 20, size: 8, speedHorz: 6, speedUp: 18 }}>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white font-lato font-bold h-12 text-base"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </CoolMode>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-sm text-gray-500 font-lato mb-3">
                Or email me directly
              </p>
              <a
                href="mailto:contact@yusef.dev"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-lato"
              >
                <Mail size={16} />
                contact@yusef.dev
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </WarpBackground>
  );
}
