import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import MotionGallery from "@/components/MotionGallery";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <MotionGallery />
        <Stats />
        <Contact />
      </main>
      <footer className="text-center px-6 py-8 text-[0.85rem] text-[#6B6B68] border-t border-[#2C2C2A]/10">
        © 2026 Dhyey Patel. All rights reserved.
      </footer>
    </>
  );
}
