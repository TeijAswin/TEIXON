import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll(".work-item"), {
      y: 60, opacity: 0, stagger: 0.12, duration: 0.7,
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-24 px-6 md:px-16" style={{ background: "var(--bg3)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <span className="section-label">Our Work</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4" style={{ color: "var(--text)" }}>Portfolio</h2>
        <p className="mb-16 max-w-xl mx-auto" style={{ color: "var(--text2)" }}>
          We're currently building our public portfolio. Our work speaks through our clients.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "🌐", label: "Web Projects", count: "20+" },
            { icon: "📱", label: "Mobile Apps", count: "10+" },
            { icon: "🛒", label: "E-Commerce", count: "8+" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              className="work-item glass rounded-2xl p-8 card-3d"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-4xl font-black mb-2" style={{ color: "var(--accent)" }}>{item.count}</p>
              <p className="font-semibold" style={{ color: "var(--text2)" }}>{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-2xl p-10 work-item">
          <p className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>Want to see our work?</p>
          <p className="mb-6" style={{ color: "var(--text2)" }}>Reach out and we'll share relevant case studies for your industry.</p>
          <a href="#contact" className="neon-btn">Request Portfolio →</a>
        </div>
      </div>
    </section>
  );
}
