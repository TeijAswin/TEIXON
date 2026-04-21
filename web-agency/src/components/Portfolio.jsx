import { motion } from "framer-motion";

const projects = [
  {
    title: "Restaurant Website",
    desc: "Full-stack restaurant site with online menu, reservations, and ordering system.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "from-orange-500/20 to-red-500/20",
    emoji: "🍽️",
  },
  {
    title: "E-Commerce Store",
    desc: "Modern online store with product catalog, cart, and Stripe payment integration.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    color: "from-blue-500/20 to-cyan-500/20",
    emoji: "🛍️",
  },
  {
    title: "College Portal",
    desc: "Student portal with course management, attendance tracking, and announcements.",
    tech: ["React", "Firebase", "Figma"],
    color: "from-purple-500/20 to-pink-500/20",
    emoji: "🎓",
  },
  {
    title: "SaaS Dashboard",
    desc: "Analytics dashboard with real-time charts, user management, and dark mode.",
    tech: ["React", "Chart.js", "Express"],
    color: "from-green-500/20 to-teal-500/20",
    emoji: "📊",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Portfolio</h2>
          <p className="text-gray-400 mt-4">A few things we've built recently.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass rounded-2xl p-8 bg-gradient-to-br ${p.color} cursor-pointer group`}
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-purple-400 text-sm font-semibold group-hover:underline">
                View Case Study →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
