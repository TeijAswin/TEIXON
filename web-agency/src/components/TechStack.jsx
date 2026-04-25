import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Frontend",
    icon: "🎨",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend",
    icon: "⚙️",
    techs: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Database",
    icon: "💾",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Supabase"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Netlify", "Railway"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Design & Tools",
    icon: "🛠️",
    techs: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Blender", "Three.js"],
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "Mobile",
    icon: "📱",
    techs: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA"],
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

export default function TechStack() {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".tech-category");
    gsap.from(cards, {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section id="tech-stack" ref={sectionRef} className="py-24 px-6 md:px-16 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Technology Stack</span>
          <h2 className="text-3xl md:text-5xl text-slate-900 mt-3">Tools We Master</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable, performant, and beautiful applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`tech-category card-3d glass rounded-2xl p-6 bg-gradient-to-br ${cat.color} border border-slate-200`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">{cat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1.5 bg-white/80 rounded-full text-slate-700 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
          >
            Build With These Technologies →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
