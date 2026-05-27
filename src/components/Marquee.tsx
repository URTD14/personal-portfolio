'use client';

import { useEffect, useRef, useState } from "react";

export default function Marquee() {
  const words = [
    "BUILDING THINGS THAT BUILD THINGS",
    "FROM SCRATCH",
    "NO BLACK BOXES",
    "ML × QUANT × AI",
    "UNDERSTAND EVERY WEIGHT",
    "THEN SHIP",
  ];

  return (
    <div className="relative overflow-hidden py-8 border-y border-[#2C2C2A]/8 bg-[#EDE3CB]/50">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, loop) => (
          <div key={loop} className="flex shrink-0 items-center gap-8 mx-4">
            {words.map((word, i) => (
              <span key={`${loop}-${i}`} className="flex items-center gap-8">
                <span className="text-[0.8rem] font-bold tracking-[0.15em] text-[#B04A1C]/60 uppercase">
                  {word}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B04A1C]/30 shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
