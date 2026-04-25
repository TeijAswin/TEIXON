import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Your Name",
    role: "CEO & Founder",
    bio: "Visionary leader with a passion for building digital products that make a real impact.",
    skills: ["Strategy", "Product Vision", "Client Relations", "Leadership"],
    avatar: "👨‍💼",
    badge: "CEO",
    color: "from-indigo-500 to-purple-600",
    isCeo: true,
  },
  {
    name: "Developer",
    role: "Full Stack Developer",
    bio: "Expert in building scalable web applications with modern frameworks.",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    avatar: "👨‍💻",
    badge: "DEV",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Designer",
    role: "UI/UX Designer",
    bio: "Creates beautiful, intuitive interfaces that users love.",
    skills: ["Figma", "Design Systems", "Prototyping", "Branding"],
    avatar: "🎨",
    badge: "UX",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Mobile Dev",
    role: "Mobile Developer",
    bio: "Builds cross-platform mobile apps with native performance.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    avatar: "📱",
    badge: "MOB",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Team() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current.querySelectorAll(".team-card"), {
      y: 80, opacity: 0, stagger: 0.15, duration: 0.8,
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
    });
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-24 px-6 md:px-16" style={{ background: "var(--bg2)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">The People</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3" style={{ color: "var(--text)" }}>Meet Our Team</h2>
          <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "var(--text2)" }}>
            A small but mighty team of experts dedicated to building exceptional digital products.
          </p>
        </div>

        {/* CEO featured */}
        <motion.div
          whileHover={{ y: -8 }}
          className="team-card glass rounded-3xl p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center gap-8"
        >
          <div className={`w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br ${team[0].color} flex items-center justify-center text-6xl shadow-2xl flex-shrink-0`}>
            {team[0].avatar}
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <span className="text-xs font-black px-3 py-1 rounded-full text-white" style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
                {team[0].badge}
              </span>
              <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{team[0].role}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3" style={{ color: "var(--text)" }}>{team[0].name}</h3>
            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text2)" }}>{team[0].bio}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {team[0].skills.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ background: "var(--bg3)", color: "var(--accent)", border: "1px solid var(--card-border)" }}>{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Rest of team */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.slice(1).map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="team-card glass rounded-2xl p-7 text-center"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl shadow-xl mx-auto mb-4`}>
                {member.avatar}
              </div>
              <span className="text-xs font-black px-3 py-1 rounded-full text-white" style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
                {member.badge}
              </span>
              <h3 className="text-lg font-black mt-3 mb-1" style={{ color: "var(--text)" }}>{member.name}</h3>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>{member.role}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text2)" }}>{member.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--bg3)", color: "var(--text2)", border: "1px solid var(--border)" }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
