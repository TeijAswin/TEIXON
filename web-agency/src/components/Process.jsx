import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", icon: "💡", title: "Discovery", desc: "We dive deep into your business goals, target audience, and requirements to craft the perfect strategy." },
  { num: "02", icon: "🎨", title: "Design", desc: "Our designers create stunning wireframes and prototypes that align with your brand and user needs." },
  { num: "03", icon: "⚙️", title: "Development", desc: "We build with clean, scalable code using the best modern technologies for performance and reliability." },
  { num: "04", icon: "🚀", title: "Launch", desc: "We deploy, test, and monitor your product — then provide ongoing support to keep it running perfectly." },
];

export default function Process() {
  const sectionRef = useRef();

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".process-step");
    items.forEach((el, i) => {
      gsap.from(el, {
        x: i % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-24 px-6 md:px-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">How We Work</span>
          <h2 className="text-3xl md:text-5xl text-slate-900 mt-3">Our Process</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A proven 4-step process that delivers results every time.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 via-cyan-300 to-indigo-300 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`process-step relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-200 z-10">
                  {step.num}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`ml-20 md:ml-0 md:w-5/12 glass rounded-2xl p-6 ${i % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}`}
                >
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
