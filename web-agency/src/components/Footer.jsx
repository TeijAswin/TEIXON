export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-black">
          <span className="text-purple-500">Nex</span>ora
        </h1>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Nexora. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
          <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
