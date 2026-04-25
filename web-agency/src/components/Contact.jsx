import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", project: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="section-label text-cyan-400">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl text-white mt-3">Let's Build Something Great</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            We reply within 24 hours. Tell us about your project and we'll get back to you with a free quote.
          </p>

          <div className="mt-10 space-y-5">
            <a href="mailto:hello@teixon.tech"
              className="flex items-center gap-4 p-4 rounded-xl transition-all group"
              style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}>
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-white font-semibold text-sm">hello@teixon.tech</p>
                <p className="text-xs" style={{ color: "#94a3b8" }}>Email us anytime</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-dark rounded-2xl p-8 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-400 transition-colors" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-400 transition-colors" />
          </div>
          <select value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 outline-none focus:border-indigo-400 transition-colors">
            <option value="" className="bg-slate-900">Select Project Type</option>
            <option value="web" className="bg-slate-900">Web Development</option>
            <option value="mobile" className="bg-slate-900">Mobile App</option>
            <option value="ecommerce" className="bg-slate-900">E-Commerce</option>
            <option value="ai" className="bg-slate-900">AI Integration</option>
            <option value="design" className="bg-slate-900">UI/UX Design</option>
          </select>
          <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about your project..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-400 transition-colors resize-none" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="neon-btn text-sm">
            {sent ? "✅ Message Sent!" : "Send Message →"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
