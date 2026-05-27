'use client';

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const PROJECTS = [
  {
    title: "Looped-Transformer",
    description:
      "Single thinking layer looped multiple times instead of stacking deep layers. ~3,500 parameters vs BERT's 110M.",
    href: "https://github.com/URTD14/Looped-Transformer",
    tags: ["Jupyter", "PyTorch"],
    stars: 5,
  },
  {
    title: "AlphaBeta Trading Arena",
    description:
      "Autonomous agent arena — strategies compete, evolve, and survive in simulated markets. Fitness scoring cuts the weak.",
    href: "https://github.com/URTD14/AlphaBeta-trading-arena",
    tags: ["Python"],
    stars: 1,
  },
  {
    title: "from-scratch",
    description:
      "Deep learning from pure first principles. No abstractions hiding the math. Rebuilt before PyTorch gets it.",
    href: "https://github.com/URTD14/from-scratch",
    tags: ["Jupyter", "PyTorch"],
    stars: 1,
  },
  {
    title: "Compass for Vibecoders",
    description:
      "Open-source PM router for AI-assisted dev. Routes tasks, manages scope, stops shipping spaghetti.",
    href: "https://github.com/URTD14/Compass-for-Vibecoders",
    tags: ["TypeScript", "Skill"],
    stars: 5,
  },
  {
    title: "Aushadh-AI",
    description:
      "Live AI-powered healthcare assistant. Real-time medical guidance. Production deployed.",
    href: "https://github.com/URTD14/Aushadh-AI",
    tags: ["HTML", "AI"],
    stars: 1,
  },
  {
    title: "Demand Forecasting",
    description:
      "Production-grade demand forecasting model deployed live. Real data pipeline, real predictions.",
    href: "https://github.com/URTD14/demand-forecasting_model_live",
    tags: ["Python"],
    stars: 1,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 max-w-[1200px] mx-auto">
      <RevealOnScroll>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#2C2C2A] mb-2">
            Projects
          </h2>
          <p className="text-[1.05rem] text-[#6B6B68]">
            Built from scratch. Shipped in the open.
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <RevealOnScroll key={project.title} delay={i * 80}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#EDE3CB] rounded-xl p-6 transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(176,74,28,0.12)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B04A1C]/0 via-transparent to-[#B04A1C]/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#B04A1C]/40" />
                  <h3 className="text-[1.15rem] font-bold text-[#2C2C2A] group-hover:text-[#B04A1C] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#6B6B68] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] uppercase tracking-[0.08em] text-[#B04A1C] bg-[#B04A1C]/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.stars > 0 && (
                      <span className="text-[0.8rem] text-[#6B6B68] flex items-center gap-1 shrink-0">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" opacity="0.4">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {project.stars}
                      </span>
                    )}
                    <span className="text-[#2C2C2A]/20 group-hover:text-[#B04A1C]/40 transition-colors duration-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
