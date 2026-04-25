export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16" style={{ background: "#060b18", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="/teixon-logo.svg" alt="Teixon Technology" className="h-9 brightness-0 invert" />
        <p className="text-sm" style={{ color: "#475569" }}>
          © {new Date().getFullYear()} Teixon Technology. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm" style={{ color: "#475569" }}>
          {["services", "work", "team", "process", "contact"].map((l) => (
            <a key={l} href={`#${l}`} className="hover:text-indigo-400 transition-colors capitalize">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
