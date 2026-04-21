import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Restaurant Owner",
    text: "Nexora built our website in just 10 days. Our online orders increased by 40% in the first month. Absolutely worth it!",
    avatar: "RS",
    color: "bg-orange-500",
  },
  {
    name: "Priya Mehta",
    role: "E-Commerce Founder",
    text: "The team understood exactly what we needed. Clean design, fast performance, and great support. Highly recommend!",
    avatar: "PM",
    color: "bg-purple-500",
  },
  {
    name: "Arjun Patel",
    role: "College Director",
    text: "Our student portal is now loved by everyone. The UI is modern and the system works flawlessly. 5 stars!",
    avatar: "AP",
    color: "bg-cyan-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">What Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-4 text-yellow-400 text-sm">★★★★★</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
