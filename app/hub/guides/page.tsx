"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Network, Tv, FolderOpen, HelpCircle, Copy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServerConnectPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Refs for section navigation
  const topRef = useRef<HTMLDivElement | null>(null);
  const vpnSectionRef = useRef<HTMLDivElement | null>(null);
  const plexSectionRef = useRef<HTMLDivElement | null>(null);
  const filesSectionRef = useRef<HTMLDivElement | null>(null);
  const troubleshootingRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = "http://100.102.224.18:7745/favicon.svg"; // must be a valid, reachable asset
    img.onload = () => setIsConnected(true);
    img.onerror = () => setIsConnected(false);

    // Check hash on load for direct section navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-background to-black/80 text-white  px-4 sm:px-6"
      ref={topRef}
    >
      <div className="max-w-4xl mx-auto">
        {" "}
        {/* connection status */}
        {isConnected !== null && (
          <Card
            className={`mb-8 border ${
              isConnected
                ? "bg-green-900/20 border-green-500/50"
                : "bg-red-900/20 border-red-500/50"
            }`}
          >
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isConnected ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className="font-medium">
                  {isConnected
                    ? "You are connected to the VPN!"
                    : "You are not connected"}
                </span>
              </div>
              {!isConnected && (
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="bg-primary hover:bg-primary/80"
                >
                  <a
                    href="https://tailscale.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Tailscale
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
        <BoxReveal boxColor="#3B82F6" width="fit-content" duration={0.5}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            Yusef's Server Guide
          </h1>
        </BoxReveal>
        <p className="text-xl text-center text-blue-300 mb-8">
          Welcome! This guide will walk you through connecting to the private
          network, watching movies, and accessing shared files — from anywhere.
        </p>{" "}
        {/* Table of Contents */}
        <div className="mb-12 p-6 bg-black/30 border border-primary/20 rounded-xl">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => scrollToSection(vpnSectionRef)}
              className="flex items-center gap-3 px-4 py-3 bg-primary/5 hover:bg-primary/10 border border-primary/30 rounded-lg transition-colors text-left"
            >
              <div className="p-2 rounded-full bg-primary/10">
                <Network size={20} className="text-primary" />
              </div>
              <div>
                <span className="font-medium text-white">
                  Connect to Private Network
                </span>
                <p className="text-xs text-blue-300/80 mt-1">
                  Set up Tailscale VPN
                </p>
              </div>
            </button>
            <button
              onClick={() => scrollToSection(plexSectionRef)}
              className="flex items-center gap-3 px-4 py-3 bg-primary/5 hover:bg-primary/10 border border-primary/30 rounded-lg transition-colors text-left"
            >
              <div className="p-2 rounded-full bg-primary/10">
                <Tv size={20} className="text-primary" />
              </div>
              <div>
                <span className="font-medium text-white">
                  Watch Movies and Shows
                </span>
                <p className="text-xs text-blue-300/80 mt-1">
                  Access the Plex server
                </p>
              </div>
            </button>
            <button
              onClick={() => scrollToSection(filesSectionRef)}
              className="flex items-center gap-3 px-4 py-3 bg-primary/5 hover:bg-primary/10 border border-primary/30 rounded-lg transition-colors text-left"
            >
              <div className="p-2 rounded-full bg-primary/10">
                <FolderOpen size={20} className="text-primary" />
              </div>
              <div>
                {" "}
                <span className="font-medium text-white">
                  Access Your Personal Drive
                </span>
                <p className="text-xs text-blue-300/80 mt-1">
                  Browse family photos and files
                </p>
              </div>
            </button>
            <button
              onClick={() => scrollToSection(troubleshootingRef)}
              className="flex items-center gap-3 px-4 py-3 bg-primary/5 hover:bg-primary/10 border border-primary/30 rounded-lg transition-colors text-left"
            >
              <div className="p-2 rounded-full bg-primary/10">
                <HelpCircle size={20} className="text-primary" />
              </div>
              <div>
                <span className="font-medium text-white">Troubleshooting</span>
                <p className="text-xs text-blue-300/80 mt-1">
                  Common issues and solutions
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="space-y-12">
          {" "}
          {/* VPN Connection */}
          <Card
            className="relative overflow-hidden bg-black/40 border-primary/30"
            ref={vpnSectionRef}
          >
            <BorderBeam
              duration={10}
              size={300}
              className="from-transparent via-primary/30 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Network size={24} className="text-primary" />
                  <CardTitle className="text-2xl md:text-3xl text-primary">
                    Connect to the Private Network (VPN)
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg mt-2">
                  To access anything from outside the house (like Plex or shared
                  files), you need to connect to our private network using
                  Tailscale.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-300">
                    On your laptop or computer:
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-200">
                    <li>
                      Go to{" "}
                      <a
                        href="https://tailscale.com/download"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://tailscale.com/download
                      </a>
                    </li>
                    <li>Choose Windows or macOS depending on your device</li>
                    <li>Install the app</li>
                    <li>
                      Open it and sign in using your Gmail account (the one
                      Yusef invited)
                    </li>
                    <li>
                      Once connected, you're securely on the SEF101 network!
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-300">
                    On iPhone or iPad:
                  </h3>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-200">
                    <li>Go to the App Store and download Tailscale</li>
                    <li>Open it and sign in using your Gmail</li>
                    <li>Tap "Connect" — that's it!</li>
                  </ol>
                </div>
              </CardContent>
            </motion.div>
          </Card>{" "}
          {/* Plex Access */}
          <Card
            className="relative overflow-hidden bg-black/40 border-primary/30"
            ref={plexSectionRef}
          >
            <BorderBeam
              duration={10}
              size={300}
              delay={2}
              className="from-transparent via-blue-600/20 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Tv size={24} className="text-primary" />
                  <CardTitle className="text-2xl md:text-3xl text-primary">
                    Watch Movies and Shows on Plex
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg mt-2">
                  Once you're connected to the VPN:
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ol className="list-decimal pl-6 space-y-3 text-gray-200">
                  <li>
                    Open a browser and go to{" "}
                    <a
                      href="https://app.plex.tv"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://app.plex.tv
                    </a>
                  </li>
                  <li>
                    Log in with your Plex account (ask Yusef if you don't have
                    one)
                  </li>
                  <li>You'll see "Yusef's Plex Server" appear in your list</li>
                  <li>Click it and browse the movies or shows!</li>
                </ol>

                <p className="text-gray-300">
                  On a phone or tablet, use the Plex app (download from the App
                  Store or Google Play)
                </p>
              </CardContent>

              <CardFooter>
                <Card className="w-full bg-primary/10 border-primary/30">
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-300">
                      <span className="font-bold text-blue-300">Note:</span> You
                      must be connected to Tailscale for this to work when
                      you're away from home.
                    </p>
                  </CardContent>
                </Card>
              </CardFooter>
            </motion.div>
          </Card>{" "}
          {/* Shared Files Access */}
          <Card
            className="relative overflow-hidden bg-black/40 border-primary/30"
            ref={filesSectionRef}
          >
            <BorderBeam
              duration={10}
              size={300}
              delay={4}
              className="from-transparent via-green-500/20 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <FolderOpen size={24} className="text-primary" />
                  <CardTitle className="text-2xl md:text-3xl text-primary">
                    Access Your Personal Drive
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg mt-2">
                  This lets you browse or download family photos, videos, or
                  other shared files.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-300">
                    On Windows:
                  </h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-200">
                    <li>Press Windows key + R</li>
                    <li>
                      Type this and hit Enter:
                      <Card className="mt-2 bg-gray-800 border-gray-700">
                        <CardContent className="p-3 flex items-center">
                          <code className="font-mono">
                            \\100.88.69.73\family
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                "\\\\100.88.69.73\\family"
                              );
                            }}
                            className="ml-auto h-7 bg-primary/30 hover:bg-primary/50 text-xs"
                          >
                            <Copy className="h-3.5 w-3.5 mr-1" />
                            Copy
                          </Button>
                        </CardContent>
                      </Card>
                    </li>
                    <li>
                      Enter your username and password (Yusef will provide these
                      credentials)
                    </li>
                    <li>
                      You can now drag, drop, and copy files from the shared
                      folders!
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-300">
                    On iPhone or iPad:
                  </h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-200">
                    <li>Open the Files app</li>
                    <li>
                      Tap the three dots in the top right → choose Connect to
                      Server
                    </li>
                    <li>
                      In the Server field, type:
                      <Card className="mt-2 bg-gray-800 border-gray-700">
                        <CardContent className="flex items-center">
                          <code className="font-mono">
                            smb://100.88.69.73/family
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                "smb://100.88.69.73/family"
                              );
                            }}
                            className="ml-auto h-7 bg-primary/30 hover:bg-primary/50 text-xs"
                          >
                            <Copy className="h-3.5 w-3.5" />
                            Copy
                          </Button>
                        </CardContent>
                      </Card>
                    </li>
                    <li>Tap Connect</li>
                    <li>Enter your username and password</li>
                    <li>You can now browse files from your phone!</li>
                  </ol>
                </div>
              </CardContent>
            </motion.div>
          </Card>{" "}
          {/* Troubleshooting */}
          <Card
            className="relative overflow-hidden bg-black/40 border-primary/30"
            ref={troubleshootingRef}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <HelpCircle size={24} className="text-primary" />
                  <CardTitle className="text-2xl md:text-3xl text-primary">
                    Troubleshooting
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg mt-2">
                  Common issues and solutions you might encounter
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      If something isn't working, make sure Tailscale is
                      connected
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      If you forgot your password or login, message Yusef
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      If Plex says "Server Unavailable," you're probably not on
                      Tailscale
                    </span>
                  </li>
                </ul>
              </CardContent>
            </motion.div>
          </Card>
        </div>{" "}
        <Card className="mt-12 bg-primary/10 border-primary/30">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center">
              Need Assistance?
            </CardTitle>
            <CardDescription className="text-center text-gray-300">
              If you encounter any issues or have questions, contact Yusef
              directly.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button
              asChild
              className="px-6 py-2 bg-primary hover:bg-primary/80 text-white"
            >
              <a href="/">Return to Main Site</a>
            </Button>
          </CardFooter>
        </Card>
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <div className="fixed bottom-4 right-4">
            {" "}
            <button
              onClick={() => scrollToSection(topRef)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-primary transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <span className="text-sm font-semibold">Scroll to Top</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
