import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Web Dev", "AI", "E-Commerce", "Mobile", "Design"];

const services = [
  { id: 1, cat: "Web Dev", icon: "🌐", title: "Web Development", short: "Fast, scalable websites built with modern frameworks.", color: "from-indigo-500/10 to-blue-500/10", border: "border-indigo-200", features: ["React / Next.js", "SEO Optimized", "Mobile Responsive", "99% Uptime"], desc: "We build blazing-fast, SEO-friendly websites using React, Next.js, and modern tooling. Every site is mobile-first, accessible, and built to convert." },
  { id: 2, cat: "AI", icon: "🤖", title: "AI Integration", short: "Smart automation and AI-powered features for your product.", color: "from-purple-500/10 to-pink-500/10", border: "border-purple-200", features: ["Chatbots", "Recommendation Engines", "Data Analysis", "Automation"], desc: "We integrate cutting-edge AI into your products — from intelligent chatbots to recommendation systems and workflow automation." },
  { id: 3, cat: "E-Commerce", icon: "🛒", title: "E-Commerce", short: "Online stores that drive sales and scale with your business.", color: "from-emerald-500/10 to-teal-500/10", border: "border-emerald-200", features: ["Product Catalog", "Payment Gateway", "Order Management", "Analytics"], desc: "Full-featured online stores with seamless checkout, inventory management, and analytics to grow your revenue." },
  { id: 4, cat: "Mobile", icon: "📱", title: "Mobile Apps", short: "Cross-platform apps for iOS and Android.", color: "from-orange-500/10 to-red-500/10", border: "border-orange-200", features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"], desc: "We build beautiful, performant mobile apps using React Native — one codebase, both platforms, native feel." },
  { id: 5, cat: "Design", icon: "🎨", title: "UI/UX Design", short: "Interfaces users love — clean, intuitive, and on-brand.", color: "from-cyan-500/10 to-sky-500/10", border: "border-cyan-200", features: ["Figma Prototypes", "Design Systems", "User Research", "Accessibility"], desc: "We design interfaces that are beautiful and functional. Every pixel is intentional, every flow is tested." },
  { id: 6, cat: "Web Dev", icon: "📈", title: "SEO & Performance", short: "Rank higher, load faster, convert better.", color: "from-yellow-500/10 to-amber-500/10", border: "border-yellow-200", features: ["Technical SEO", "Core Web Vitals", "Speed Optimization", "Monthly Reports"], desc: "We optimize your site for search engines and performance — faster load times, better rankings, more traffic." },
];

function DetailPanel({ service, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors text-lg">✕</button>
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">{service.title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
        <ul className="space-y-2 mb-8">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-700">
              <span className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">✓</span>
              {f}
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={onClose} className="neon-btn inline-block text-center w-full text-sm">
          Start This Project →
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const sectionRef = useRef();

  const filtered = active === "All" ? services : services.filter((s) => s.cat === active);

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll(".svc-card"), {
      y: 60, opacity: 0, stagger: 0.1, duration: 0.7,
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">What We Do</span>
          <h2 className="text-3xl md:text-5xl text-slate-900 mt-3">Our Services</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base">
            End-to-end digital solutions to build, grow, and scale your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((s) => (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(s)}
                className={`svc-card card-3d cursor-pointer rounded-2xl p-7 bg-gradient-to-br ${s.color} border ${s.border} group`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.short}</p>
                <span className="text-indigo-600 text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <DetailPanel service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
