'use client';

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Motion", href: "#motion" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5ECD7]/85 backdrop-blur-[12px] border-b border-[#2C2C2A]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-bold text-[#B04A1C] tracking-[0.08em] uppercase"
        >
          Dhyey Patel
        </a>
        <div className="flex gap-8 max-sm:gap-6 max-sm:overflow-x-auto max-sm:scrollbar-none">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-[#2C2C2A] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#B04A1C] after:transition-all after:duration-300 hover:after:w-full max-sm:text-[0.82rem] max-sm:whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
