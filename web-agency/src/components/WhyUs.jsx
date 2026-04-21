import { motion } from "framer-motion";

const comparisons = [
  { label: "Delivery Speed", them: "4–8 weeks", us: "1–2 weeks" },
  { label: "Design Quality", them: "Generic templates", us: "Custom UI" },
  { label: "Performance", them: "Slow & bloated", us: "Blazing fast ⚡" },
  { label: "Support", them: "Ticket system", us: "Direct WhatsApp" },
  { label: "SEO", them: "Basic", us: "Full optimization" },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            The Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Why Choose Us</h2>
        </motion.div>

        <div className="glass rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white/5 px-6 py-4 text-sm font-semibold text-gray-400">
            <span></span>
            <span className="text-center">Others ❌</span>
            <span className="text-center text-purple-400">Nexora ⚡</span>
          </div>

          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-3 px-6 py-4 border-t border-white/5 items-center"
            >
              <span className="text-sm font-medium">{c.label}</span>
              <span className="text-center text-sm text-gray-500">{c.them}</span>
              <span className="text-center text-sm text-purple-300 font-semibold">{c.us}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
