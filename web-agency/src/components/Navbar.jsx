import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = ["Services", "Work", "Pricing", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-black tracking-tight">
        <span className="text-purple-500">Nex</span>ora
      </h1>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-300">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:block bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
      >
        Get Quote
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-8 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-300 hover:text-purple-400 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-purple-600 px-6 py-2 rounded-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Get Quote
          </a>
        </div>
      )}
    </motion.nav>
  );
}
