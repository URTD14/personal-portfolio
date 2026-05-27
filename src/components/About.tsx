export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#2C2C2A] mb-2">
          Who I Am
        </h2>
        <p className="text-[1.05rem] text-[#6B6B68]">The short version</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 text-[1.05rem] text-[#2C2C2A]/80 leading-relaxed">
        <p>
          <strong className="text-[#B04A1C]">Technical Co-founder @ GLOQONT</strong>
          {" — "}Pre-trade risk & scenario intelligence engine for smarter
          markets.
        </p>
        <p>
          Built a <strong className="text-[#B04A1C]">3,500-parameter looped
          Transformer</strong> that rivals BERT&apos;s 110M. One thinking layer,
          looped — not stacked deep.
        </p>
        <p>
          Created{" "}
          <strong className="text-[#B04A1C]">AlphaBeta Trading Arena</strong>
          {" — "}autonomous agents that backtest, compete, and evolve their own
          strategies through fitness scoring.
        </p>
        <p>
          ML from <strong className="text-[#B04A1C]">pure first
          principles</strong>. No black boxes. If it exists in PyTorch, I rebuild
          it from scratch first.
        </p>
        <p>
          Active day trader. Self-developed strategy.{" "}
          <strong className="text-[#B04A1C]">2026:</strong> Real cash flow via
          AI × Finance.
        </p>
        <p className="text-[#6B6B68] text-[0.95rem] pt-4">
          📍 Gandhinagar, India · 🎓 BTech CE @ IAR · 19
        </p>
      </div>
    </section>
  );
}
