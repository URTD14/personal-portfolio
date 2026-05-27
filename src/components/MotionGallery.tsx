'use client';

import { useCallback, useEffect, useRef, useState } from "react";

const VIDEOS = {
  branding: {
    label: "Branding — Gloqont",
    videos: [
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/branding/black-scholes.mp4", title: "Black-Scholes Model", duration: "0:27" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/branding/monte-carlo.mp4", title: "Monte Carlo 10K Futures", duration: "0:40" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/branding/kelly-criterion.mp4", title: "Kelly Criterion", duration: "0:37" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/branding/volatility-drag.mp4", title: "Volatility Drag", duration: "0:36" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/branding/correlation-breaks.mp4", title: "Correlation Breaks", duration: "0:28" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/branding/gamblers-ruin.mp4", title: "Gambler's Ruin", duration: "0:27" },
    ],
  },
  motion: {
    label: "Motion Design",
    videos: [
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/motion-design/backpropagation.mp4", title: "Backpropagation in 60 Seconds", duration: "0:40" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/motion-design/attention.mp4", title: "Attention Is All You Need", duration: "0:44" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/motion-design/neural-network.mp4", title: "A Neural Network Learns Like a Child", duration: "1:54" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/motion-design/ai-broke-math.mp4", title: "AI Broke Math", duration: "0:43" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/motion-design/entropy.mp4", title: "Why Entropy Always Increases", duration: "0:43" },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/motion-design/riemann-hypothesis.mp4", title: "Riemann Hypothesis", duration: "2:23" },
    ],
  },
  longform: {
    label: "Long Form",
    videos: [
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/long-form/black-scholes-to-mamba.mp4", title: "Black-Scholes to Mamba", duration: "8:51", wide: true },
      { src: "https://raw.githubusercontent.com/URTD14/motion-videos-resume/master/videos/long-form/mean-reversion.mp4", title: "Mean Reversion", duration: "3:56", wide: true },
    ],
  },
};

type VideoInfo = {
  src: string;
  title: string;
  duration: string;
  wide?: boolean;
};

export default function MotionGallery() {
  const [modalVideo, setModalVideo] = useState<VideoInfo | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
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

  const renderVideoCard = (video: VideoInfo, index: number) => (
    <div
      key={video.title}
      onClick={() => openModal(video)}
      className="relative rounded-xl overflow-hidden bg-[#EDE3CB] aspect-[9/16] cursor-pointer transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(44,44,42,0.15)] opacity-0 translate-y-5"
      style={{
        animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 * (index + 1)}s forwards`,
      }}
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
      <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-[#2C2C2A]/70 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 hover:opacity-100 max-sm:opacity-100 max-sm:bg-gradient-to-t max-sm:from-[#2C2C2A]/80 max-sm:via-[#2C2C2A]/20 max-sm:to-transparent">
        <span className="text-[0.75rem] uppercase tracking-[0.05em] text-white/70 mb-1">
          {video.duration}
        </span>
        <span className="text-[1rem] font-bold text-white leading-tight">
          {video.title}
        </span>
      </div>
    </div>
  );

  return (
    <section id="motion" className="px-6 py-24 max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#2C2C2A] mb-2">
          Motion Design
        </h2>
        <p className="text-[1.05rem] text-[#6B6B68]">
          Manim animations — AI, Math & Finance
        </p>
      </div>

      {/* Branding Section */}
      <div className="mb-16">
        <h3 className="text-[0.75rem] uppercase tracking-[0.08em] text-[#B04A1C] mb-6">
          {VIDEOS.branding.label}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {VIDEOS.branding.videos.map((v, i) => renderVideoCard(v, i))}
        </div>
      </div>

      {/* Motion Design Section */}
      <div className="mb-16">
        <h3 className="text-[0.75rem] uppercase tracking-[0.08em] text-[#B04A1C] mb-6">
          {VIDEOS.motion.label}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {VIDEOS.motion.videos.map((v, i) => renderVideoCard(v, i))}
        </div>
      </div>

      {/* Long Form Section */}
      <div>
        <h3 className="text-[0.75rem] uppercase tracking-[0.08em] text-[#B04A1C] mb-6">
          {VIDEOS.longform.label}
        </h3>
        <div className="flex flex-col gap-6">
          {VIDEOS.longform.videos.map((v) => (
            <div
              key={v.title}
              onClick={() => openModal(v)}
              className="flex items-center gap-6 sm:gap-8 bg-[#EDE3CB] rounded-xl cursor-pointer transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,44,42,0.12)] max-sm:flex-col max-sm:items-stretch"
            >
              <video
                src={v.src}
                className="w-[280px] shrink-0 aspect-video object-cover rounded-l-xl max-sm:w-full max-sm:rounded-t-xl max-sm:rounded-bl-none"
                muted
                playsInline
              />
              <div className="p-6 pl-0 flex-1 min-w-0 max-sm:p-4">
                <span className="text-[0.75rem] uppercase tracking-[0.05em] text-[#B04A1C] mb-1 block">
                  {v.duration}
                </span>
                <span className="text-[1.3rem] font-bold text-[#2C2C2A] block mb-2">
                  {v.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {modalVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ opacity: 1, pointerEvents: "auto" }}
        >
          <div
            className="absolute inset-0 bg-[#2C2C2A]/85 backdrop-blur-[8px]"
            onClick={closeModal}
          />
          <div
            className={`relative z-10 w-[90%] max-h-[90vh] flex flex-col items-center ${
              modalVideo.wide ? "max-w-[800px]" : "max-w-[480px]"
            }`}
          >
            <button
              onClick={closeModal}
              className="self-end bg-none border-none text-[#F5ECD7] text-[2.5rem] cursor-pointer p-0 pb-3 leading-none opacity-80 hover:opacity-100 transition-opacity"
            >
              &times;
            </button>
            <div className="w-full rounded-xl overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <video
                ref={videoRef}
                src={modalVideo.src}
                controls
                className={`w-full block bg-black ${
                  modalVideo.wide ? "aspect-video" : "aspect-[9/16]"
                }`}
              />
            </div>
            <div className="w-full pt-4 text-center">
              <span className="text-[0.75rem] uppercase tracking-[0.05em] text-[#F5ECD7]/60 block mb-1">
                {modalVideo.duration}
              </span>
              <span className="text-[1.1rem] font-bold text-[#F5ECD7] block">
                {modalVideo.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
