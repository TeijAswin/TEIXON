import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = ["Digital Systems", "Web Platforms", "Mobile Apps", "AI Solutions", "E-Commerce"];

function FloatingSphere() {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    innerRef.current.rotation.y = -t * 0.3;
  });

  return (
    <group>
      <Stars radius={80} depth={50} count={3000} factor={4} fade speed={1} />
      {/* Outer distort sphere */}
      <Sphere ref={meshRef} args={[1.8, 128, 128]}>
        <MeshDistortMaterial color="#6366f1" distort={0.35} speed={1.5} roughness={0} metalness={0.8} transparent opacity={0.7} />
      </Sphere>
      {/* Inner wireframe */}
      <Sphere ref={innerRef} args={[1.2, 32, 32]}>
        <meshStandardMaterial color="#22d3ee" wireframe transparent opacity={0.25} />
      </Sphere>
      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.4, 0.04, 16, 100]} />
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={2} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  const heroRef = useRef();
  const contentRef = useRef();
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let t;
    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIdx]);

  useEffect(() => {
    gsap.to(contentRef.current, {
      y: 100, opacity: 0.1,
      scrollTrigger: { trigger: heroRef.current, start: "top top", end: "80% top", scrub: 1 },
    });
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #060b18 0%, #0d1a3a 50%, #0a0f1e 100%)" }}>
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#6366f1" />
          <pointLight position={[-5, -5, 5]} intensity={1} color="#22d3ee" />
          <FloatingSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,11,24,0.95) 0%, rgba(6,11,24,0.7) 60%, transparent 100%)" }} />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-36">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-label" style={{ color: "#22d3ee" }}>Teixon Technology</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-4xl md:text-6xl lg:text-7xl font-black text-white max-w-3xl leading-tight"
        >
          We Build
          <br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #818cf8, #22d3ee)" }}>
            {displayed}<span className="animate-pulse">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-lg max-w-xl leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          High-performance digital solutions for businesses that want to lead their industry. From concept to launch — we handle everything.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#contact" className="neon-btn">Start Your Project →</a>
          <a href="#work" className="px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white" }}>
            View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 flex flex-wrap gap-10"
        >
          {[["50+", "Projects"], ["10+", "Clients"], ["3+", "Years"], ["100%", "Satisfaction"]].map(([v, l]) => (
            <div key={l}>
              <p className="text-3xl font-black text-white">{v}</p>
              <p className="text-sm mt-1" style={{ color: "#64748b" }}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
