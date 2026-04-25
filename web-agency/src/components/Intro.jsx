import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ onFinish }) {
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  const finish = () => {
    setVisible(false);
    setTimeout(onFinish, 700);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      setReady(true);
      // Try with sound first, fallback to muted
      v.muted = false;
      v.volume = 1.0;
      v.play().catch(() => {
        v.muted = true;
        v.play().catch(() => setError(true));
      });
    };

    v.addEventListener("canplaythrough", tryPlay, { once: true });
    v.addEventListener("ended", finish);
    v.addEventListener("error", () => setError(true));
    v.load();

    return () => {
      v.removeEventListener("ended", finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {!ready && !error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-white/60 text-sm">Loading intro...</p>
            </div>
          )}

          {error ? (
            <div className="flex flex-col items-center gap-6">
              <img src="/teixon-logo.svg" alt="Teixon" className="h-16 brightness-0 invert" />
              <h1 className="text-white text-3xl font-black">Teixon Technology</h1>
              <p className="text-white/50 text-sm">Engineering Digital Excellence</p>
              <button onClick={finish} className="neon-btn mt-4">Enter Site →</button>
            </div>
          ) : (
            <video
              ref={videoRef}
              src="/intro.mp4"
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              style={{ opacity: ready ? 1 : 0, transition: "opacity 0.5s" }}
            />
          )}

          {ready && !error && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              onClick={finish}
              className="absolute bottom-10 right-10 px-5 py-2.5 border border-white/30 text-white text-sm rounded-full backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              Skip Intro ›
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
