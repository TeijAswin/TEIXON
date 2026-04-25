import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = ["Services", "Work", "Team", "Process", "Contact"];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 px-6 md:px-14 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <img src="/teixon-logo.svg" alt="Teixon Technology" className={`h-9 ${theme === "dark" ? "brightness-0 invert" : ""}`} />

      <ul className="hidden md:flex gap-8 text-sm font-semibold" style={{ color: "var(--text2)" }}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="hover:text-indigo-500 transition-colors">{l}</a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        {/* Dark/Light toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{ background: "var(--bg3)", border: "1px solid var(--border)" }}
          title="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <a href="#contact" className="neon-btn">Get a Quote</a>
      </div>

      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="space-y-1.5">
          {[0,1,2].map(i => (
            <span key={i} className={`block w-6 h-0.5 transition-all`} style={{ background: "var(--text)" }} />
          ))}
        </div>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full glass flex flex-col items-center gap-6 py-8 md:hidden">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-semibold hover:text-indigo-500" style={{ color: "var(--text)" }} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
          <button onClick={toggleTheme} className="text-2xl">{theme === "dark" ? "☀️" : "🌙"}</button>
          <a href="#contact" className="neon-btn" onClick={() => setMenuOpen(false)}>Get a Quote</a>
        </div>
      )}
    </motion.nav>
  );
}
