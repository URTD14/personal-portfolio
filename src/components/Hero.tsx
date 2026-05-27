'use client';

import { useEffect, useRef, useState, useCallback } from "react";

const PARTICLE_COUNT = 20;

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  const TYPING_LINES = [
    "Technical Co-founder @ GLOQONT — Pre-Trade Risk Intelligence",
    "Built a 3,500-param Transformer that competes with BERT",
    "Autonomous trading agents that evolve via fitness scoring",
    "Everything built from scratch. No black boxes.",
  ];

  const PILLS = ["ML Engineer", "Quant Builder", "Technical Co-founder"];

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
  }, [charIndex, deleting, lineIndex, TYPING_LINES]);

  const initParticles = useCallback(() => {
    const arr: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    setParticles(arr);
  }, []);

  useEffect(() => {
    initParticles();
    const onResize = () => initParticles();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || particles.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const p = [...particles];

      p.forEach((pt, i) => {
        pt.x += pt.speedX;
        pt.y += pt.speedY;

        if (pt.x < 0) pt.x = canvas.width;
        if (pt.x > canvas.width) pt.x = 0;
        if (pt.y < 0) pt.y = canvas.height;
        if (pt.y > canvas.height) pt.y = 0;

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(176, 74, 28, ${pt.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < p.length; j++) {
          const dx = p[i].x - p[j].x;
          const dy = p[i].y - p[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p[i].x, p[i].y);
            ctx.lineTo(p[j].x, p[j].y);
            ctx.strokeStyle = `rgba(176, 74, 28, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      setParticles(p);
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [particles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-[120px] pb-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-[700px]">
        <div className="inline-block mb-6">
          <span className="text-[0.7rem] uppercase tracking-[0.15em] text-[#B04A1C] bg-[#B04A1C]/10 px-4 py-2 rounded-full">
            urtd14
          </span>
        </div>

        <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-bold text-[#2C2C2A] tracking-[-0.03em] leading-[1.1] mb-4">
          Dhyey Patel
        </h1>
        <p className="text-[clamp(1rem,2vw,1.2rem)] text-[#B04A1C] italic mb-2">
          building things that build things
        </p>
        <div className="h-10 mb-8">
          <span className="text-[clamp(0.9rem,2.5vw,1.1rem)] text-[#6B6B68]">
            {TYPING_LINES[lineIndex].slice(0, charIndex)}
            <span className="animate-pulse text-[#B04A1C] font-bold">|</span>
          </span>
        </div>
        <div className="flex gap-3 justify-center flex-wrap mb-16">
          {PILLS.map((pill, i) => (
            <span
              key={pill}
              className="inline-block px-5 py-2 border-[1.5px] border-[#B04A1C] rounded-full text-[0.85rem] text-[#B04A1C] tracking-[0.02em] uppercase transition-all duration-300 hover:bg-[#B04A1C] hover:text-[#F5ECD7] hover:shadow-[0_4px_16px_rgba(176,74,28,0.2)]"
              style={{ animationDelay: `${i * 0.1}s` }}
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
