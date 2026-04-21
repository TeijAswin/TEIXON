import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹5,000",
    desc: "Perfect for small businesses getting started online.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO",
      "1 Month Support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹15,000",
    desc: "For growing businesses that need more power.",
    features: [
      "Up to 15 Pages",
      "Custom UI Design",
      "CMS Integration",
      "Full SEO Setup",
      "WhatsApp Integration",
      "3 Months Support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹30,000",
    desc: "Full-scale solution for serious businesses.",
    features: [
      "Unlimited Pages",
      "E-Commerce Ready",
      "Admin Dashboard",
      "Payment Gateway",
      "Analytics Setup",
      "6 Months Support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-8 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Simple Plans</h2>
          <p className="text-gray-400 mt-4">No hidden fees. Pay for what you need.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-purple-600 shadow-2xl shadow-purple-500/30 scale-105"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <span className="text-xs font-bold bg-white text-purple-600 px-3 py-1 rounded-full self-start mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-4xl font-black mt-2">{p.price}</p>
              <p className={`text-sm mt-2 mb-6 ${p.highlight ? "text-purple-200" : "text-gray-400"}`}>
                {p.desc}
              </p>
              <ul className="space-y-2 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className={`text-sm flex items-center gap-2 ${p.highlight ? "text-white" : "text-gray-300"}`}>
                    <span className={p.highlight ? "text-white" : "text-purple-400"}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 py-3 rounded-xl text-center font-semibold transition-all hover:scale-105 ${
                  p.highlight
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
