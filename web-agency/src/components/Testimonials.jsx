import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialFeedbacks = [];

export default function Testimonials() {
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", text: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    setFeedbacks((prev) => [{ ...form, avatar: form.name.slice(0, 2).toUpperCase(), color: "bg-indigo-500" }, ...prev]);
    setForm({ name: "", role: "", text: "", rating: 5 });
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setShowForm(false); }, 2500);
  };

  return (
    <section className="py-24 px-6 md:px-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Client Feedback</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3" style={{ color: "var(--text)" }}>What Clients Say</h2>
          <p className="mt-4" style={{ color: "var(--text2)" }}>Real feedback from real clients.</p>
        </div>

        {/* Feedback cards */}
        {feedbacks.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <AnimatePresence>
              {feedbacks.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold text-white`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "var(--text3)" }}>{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text2)" }}>"{t.text}"</p>
                  <div className="text-yellow-400 text-sm">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-12 mb-10 glass rounded-2xl">
            <p className="text-4xl mb-3">💬</p>
            <p className="font-semibold" style={{ color: "var(--text2)" }}>No feedback yet — be the first!</p>
          </div>
        )}

        {/* Add feedback button */}
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="neon-btn"
          >
            + Leave Your Feedback
          </button>
        </div>

        {/* Feedback form modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              onClick={() => setShowForm(false)}
            >
              <div className="absolute inset-0 backdrop-blur-sm" style={{ background: "rgba(6,11,24,0.7)" }} />
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                className="relative rounded-3xl p-8 max-w-md w-full shadow-2xl"
                style={{ background: "var(--bg2)", border: "1px solid var(--card-border)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "var(--bg3)", color: "var(--text2)" }}>✕</button>
                <h3 className="text-xl font-black mb-6" style={{ color: "var(--text)" }}>Share Your Experience</h3>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-3">🎉</div>
                    <p className="font-bold text-lg" style={{ color: "var(--text)" }}>Thank you for your feedback!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name"
                      className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }} />
                    <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                      placeholder="Your Role / Company (optional)"
                      className="rounded-xl px-4 py-3 text-sm outline-none"
                      style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }} />
                    <textarea required rows={4} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })}
                      placeholder="Share your experience with Teixon Technology..."
                      className="rounded-xl px-4 py-3 text-sm outline-none resize-none"
                      style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--text)" }} />
                    <div>
                      <p className="text-sm font-semibold mb-2" style={{ color: "var(--text2)" }}>Rating</p>
                      <div className="flex gap-2">
                        {[1,2,3,4,5].map((r) => (
                          <button key={r} type="button" onClick={() => setForm({ ...form, rating: r })}
                            className="text-2xl transition-transform hover:scale-125">
                            {r <= form.rating ? "★" : "☆"}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="neon-btn text-sm mt-2">Submit Feedback →</button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
