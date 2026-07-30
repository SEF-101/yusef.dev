"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function EasterEggs() {
  const bufferRef = useRef<string[]>([]);

  useEffect(() => {
    console.log(
      "%c👋 Hey — you're looking at the source? Nice.",
      "font-size: 16px; font-weight: bold; color: #3B82F6;"
    );
    console.log(
      "%cBuilt by Yusef (SEF) — real code, no templates.\nhttps://sef101.com",
      "font-size: 12px; color: #888;"
    );
    console.log(
      "%cTry the Konami code 👀",
      "font-size: 11px; color: #555; font-style: italic;"
    );

    const handleKeyDown = (e: KeyboardEvent) => {
      bufferRef.current.push(e.key);
      if (bufferRef.current.length > KONAMI.length) {
        bufferRef.current.shift();
      }

      if (bufferRef.current.join(",") === KONAMI.join(",")) {
        bufferRef.current = [];
        fireConfetti();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}

function fireConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ["#3B82F6", "#93c5fd", "#1e40af", "#ffffff"],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ["#3B82F6", "#93c5fd", "#1e40af", "#ffffff"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}
