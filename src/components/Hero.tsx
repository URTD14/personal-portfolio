'use client';

import { useEffect, useState } from "react";

const TYPING_LINES = [
  "Technical Co-founder @ GLOQONT — Pre-Trade Risk Intelligence",
  "Built a 3,500-param Transformer that competes with BERT",
  "Autonomous trading agents that evolve via fitness scoring",
  "Everything built from scratch. No black boxes.",
];

const PILLS = ["ML Engineer", "Quant Builder", "Technical Co-founder"];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_LINES[lineIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setLineIndex((i) => (i + 1) % TYPING_LINES.length);
          }
        }
      },
      deleting ? 25 : 50
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-[120px] pb-20">
      <div className="max-w-[700px]">
        <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold text-[#2C2C2A] tracking-[-0.03em] leading-[1.1] mb-4">
          Dhyey Patel
        </h1>
        <p className="text-[clamp(1rem,2vw,1.2rem)] text-[#B04A1C] italic mb-2">
          building things that build things
        </p>
        <div className="h-10 mb-8">
          <span className="text-[clamp(0.9rem,2.5vw,1.1rem)] text-[#6B6B68]">
            {TYPING_LINES[lineIndex].slice(0, charIndex)}
            <span className="animate-pulse text-[#B04A1C]">|</span>
          </span>
        </div>
        <div className="flex gap-3 justify-center flex-wrap mb-16">
          {PILLS.map((pill) => (
            <span
              key={pill}
              className="inline-block px-5 py-2 border-[1.5px] border-[#B04A1C] rounded-full text-[0.85rem] text-[#B04A1C] tracking-[0.02em] uppercase"
            >
              {pill}
            </span>
          ))}
        </div>
        <div className="inline-flex text-[#6B6B68] animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
