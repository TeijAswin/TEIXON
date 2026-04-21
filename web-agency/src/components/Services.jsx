import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Fast, responsive, SEO-friendly websites built with modern tech stacks.",
    features: ["React / Next.js", "Mobile Responsive", "SEO Optimized", "Fast Load Times"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love and convert.",
    features: ["Figma Prototypes", "User Research", "Design Systems", "Accessibility"],
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Online stores that drive sales with seamless shopping experiences.",
    features: ["Product Catalog", "Payment Gateway", "Order Management", "Analytics"],
  },
  {
    icon: "📈",
    title: "SEO Optimization",
    desc: "Rank higher on Google and drive organic traffic to your business.",
    features: ["On-Page SEO", "Technical SEO", "Speed Optimization", "Monthly Reports"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Our Services</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Everything you need to build a powerful online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 cursor-default"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{s.desc}</p>
              <ul className="space-y-1">
                {s.features.map((f, j) => (
                  <li key={j} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="text-purple-400">✓</span> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
