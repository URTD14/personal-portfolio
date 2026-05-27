export default function Stats() {
  return (
    <section className="px-6 py-24 max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#2C2C2A] mb-2">
          Stats
        </h2>
        <p className="text-[1.05rem] text-[#6B6B68]">
          GitHub activity & presence
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=URTD14&bg_color=0d1117&color=00E5CC&line=00E5CC&point=ffffff&area=true&hide_border=true&area_color=0a2a2a"
          alt="GitHub activity graph"
          className="w-full max-w-full rounded-xl"
          loading="lazy"
        />
      </div>
    </section>
  );
}
