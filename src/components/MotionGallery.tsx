'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const VIDEOS = [
  { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/branding/black-scholes.mp4", title: "Black-Scholes Model", duration: "0:27" },
  { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/motion-design/attention.mp4", title: "Attention Is All You Need", duration: "0:44" },
  { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/long-form/mean-reversion.mp4", title: "Mean Reversion", duration: "3:56", wide: true },
];

type VideoInfo = {
  src: string;
  title: string;
  duration: string;
  wide?: boolean;
};

export default function MotionGallery() {
  const [modalVideo, setModalVideo] = useState<VideoInfo | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = useCallback((video: VideoInfo) => {
    setModalVideo(video);
  }, []);

  const closeModal = useCallback(() => {
    setModalVideo(null);
  }, []);

  useEffect(() => {
    if (modalVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [modalVideo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <section id="motion" className="px-6 py-24 max-w-[1200px] mx-auto">
      <RevealOnScroll>
        <div className="text-center mb-14">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#2C2C2A] mb-2">
            Motion Design
          </h2>
          <p className="text-[1.05rem] text-[#6B6B68]">
            Manim animations — AI, Math & Finance
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {VIDEOS.map((video, i) => (
          <div
            key={video.title}
            onClick={() => openModal(video)}
            className="relative rounded-xl overflow-hidden bg-[#EDE3CB] aspect-[9/16] cursor-pointer transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(44,44,42,0.15)]"
          >
            <video
              src={video.src}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
              onMouseLeave={(e) => {
                const vid = e.currentTarget as HTMLVideoElement;
                vid.pause();
                vid.currentTime = 0;
              }}
            />
            <span className="absolute top-2.5 right-2.5 z-[2] bg-[#2C2C2A]/75 text-white text-[0.75rem] px-2 py-[3px] rounded pointer-events-none">
              {video.duration}
            </span>
            <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-[#2C2C2A]/70 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none hover:opacity-100 max-sm:opacity-100 max-sm:bg-gradient-to-t max-sm:from-[#2C2C2A]/80 max-sm:via-[#2C2C2A]/20 max-sm:to-transparent">
              <span className="text-[0.75rem] uppercase tracking-[0.05em] text-white/70 mb-1">
                {video.duration}
              </span>
              <span className="text-[1rem] font-bold text-white leading-tight">
                {video.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {modalVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center" style={{ opacity: 1, pointerEvents: "auto" }}>
          <div className="absolute inset-0 bg-[#2C2C2A]/85 backdrop-blur-[8px]" onClick={closeModal} />
          <div className={`relative z-10 w-[90%] max-h-[90vh] flex flex-col items-center ${modalVideo.wide ? "max-w-[800px]" : "max-w-[480px]"}`}>
            <button onClick={closeModal} className="self-end bg-none border-none text-[#F5ECD7] text-[2.5rem] cursor-pointer p-0 pb-3 leading-none opacity-80 hover:opacity-100 transition-opacity">
              &times;
            </button>
            <div className="w-full rounded-xl overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <video
                ref={videoRef}
                src={modalVideo.src}
                controls
                className={`w-full block bg-black ${modalVideo.wide ? "aspect-video" : "aspect-[9/16]"}`}
              />
            </div>
            <div className="w-full pt-4 text-center">
              <span className="text-[0.75rem] uppercase tracking-[0.05em] text-[#F5ECD7]/60 block mb-1">{modalVideo.duration}</span>
              <span className="text-[1.1rem] font-bold text-[#F5ECD7] block">{modalVideo.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
