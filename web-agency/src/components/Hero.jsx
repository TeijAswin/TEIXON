import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#7c3aed"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* 3D background sphere */}
      <div className="absolute inset-0 opacity-40">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 md:px-16">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-sm font-semibold tracking-widest uppercase"
        >
          Web Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-5xl md:text-7xl font-black leading-tight"
        >
          We Build Websites That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Convert
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-400 text-lg max-w-xl"
        >
          Modern, fast, and conversion-focused websites for businesses that want
          to grow. From design to deployment — we handle it all.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-all hover:scale-105"
          >
            Start Project
          </a>
          <a
            href="#work"
            className="px-8 py-3 border border-white/20 hover:border-purple-500 rounded-xl font-semibold transition-all hover:scale-105"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
