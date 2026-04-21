import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your backend / EmailJS / Formspree endpoint
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-8 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Let's Build Something Great
          </h2>
          <p className="text-gray-400 mt-4">
            We reply within 24 hours. Tell us about your project and we'll get back to you with a free quote.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
            >
              <span className="text-2xl">💬</span>
              <span className="font-semibold">Chat on WhatsApp</span>
            </a>
            <a
              href="mailto:hello@nexora.dev"
              className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="text-2xl">📧</span>
              <span className="font-semibold">hello@nexora.dev</span>
            </a>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 flex flex-col gap-4"
        >
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 transition-colors"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email Address"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 transition-colors"
          />
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your project..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-500 transition-colors resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold transition-colors"
          >
            {sent ? "✅ Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
