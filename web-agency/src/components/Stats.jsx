import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-16 border-y border-white/10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl font-black text-purple-400">{s.value}</p>
            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
