import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  { label: "Delivery Speed", them: "4–8 weeks", us: "1–2 weeks ⚡" },
  { label: "Design Quality", them: "Generic templates", us: "Custom UI" },
  { label: "Performance", them: "Slow & bloated", us: "Blazing fast" },
  { label: "Support", them: "Ticket system", us: "Direct WhatsApp" },
  { label: "SEO", them: "Basic", us: "Full optimization" },
];

export default function WhyUs() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll(".compare-row"), {
      x: -40, opacity: 0, stagger: 0.1, duration: 0.6,
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-16 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">The Difference</span>
          <h2 className="text-3xl md:text-5xl text-slate-900 mt-3">Why Choose Teixon</h2>
          <p className="text-slate-500 mt-4">See how we compare to the typical agency.</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
          <div className="grid grid-cols-3 bg-slate-50 px-6 py-4 border-b border-slate-200">
            <span className="text-sm font-semibold text-slate-400"></span>
            <span className="text-center text-sm font-semibold text-slate-400">Others ❌</span>
            <span className="text-center text-sm font-semibold text-indigo-600">Teixon ✓</span>
          </div>
          {comparisons.map((c, i) => (
            <div key={i} className={`compare-row grid grid-cols-3 px-6 py-4 items-center ${i < comparisons.length - 1 ? "border-b border-slate-100" : ""}`}>
              <span className="text-sm font-semibold text-slate-700">{c.label}</span>
              <span className="text-center text-sm text-slate-400">{c.them}</span>
              <span className="text-center text-sm text-indigo-600 font-semibold">{c.us}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
