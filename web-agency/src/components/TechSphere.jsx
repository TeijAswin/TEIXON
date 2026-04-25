import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Stars, Trail } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const techStack = [
  { name: "React", icon: "⚛️", color: "#61DAFB", desc: "Frontend Library" },
  { name: "Node.js", icon: "🟢", color: "#68A063", desc: "Backend Runtime" },
  { name: "MongoDB", icon: "🍃", color: "#4DB33D", desc: "NoSQL Database" },
  { name: "TypeScript", icon: "📘", color: "#3178C6", desc: "Typed JavaScript" },
  { name: "Next.js", icon: "▲", color: "#ffffff", desc: "React Framework" },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4", desc: "CSS Framework" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28", desc: "Backend Platform" },
  { name: "AWS", icon: "☁️", color: "#FF9900", desc: "Cloud Services" },
];

function OrbitRing({ icons, radius, speed, tilt }) {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(null);

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * speed;
    groupRef.current.rotation.x = tilt;
  });

  return (
    <group ref={groupRef}>
      {icons.map((tech, i) => {
        const angle = (i / icons.length) * Math.PI * 2;
        return (
          <Html
            key={tech.name}
            position={[Math.cos(angle) * radius, Math.sin(angle * 1.5) * 0.4, Math.sin(angle) * radius]}
            center
          >
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer select-none"
              style={{ transition: "transform 0.3s", transform: hovered === i ? "scale(1.4)" : "scale(1)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}15)`,
                  border: `1.5px solid ${tech.color}80`,
                  boxShadow: `0 0 20px ${tech.color}50, inset 0 0 10px ${tech.color}10`,
                }}
              >
                {tech.icon}
              </div>
              {hovered === i && (
                <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl px-3 py-2 text-xs font-bold shadow-xl z-50"
                  style={{ background: "rgba(6,11,24,0.95)", border: `1px solid ${tech.color}60`, color: tech.color }}>
                  {tech.name} — {tech.desc}
                </div>
              )}
            </div>
          </Html>
        );
      })}
    </group>
  );
}

function CoreSphere() {
  const outerRef = useRef();
  const innerRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    outerRef.current.rotation.y = t * 0.1;
    outerRef.current.rotation.x = t * 0.07;
    innerRef.current.rotation.y = -t * 0.2;
  });

  return (
    <group>
      <mesh ref={outerRef}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.4} wireframe transparent opacity={0.4} />
      </mesh>
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.6} wireframe transparent opacity={0.3} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#818cf8" emissive="#818cf8" emissiveIntensity={1} />
      </mesh>
    </group>
  );
}

function ConnectionLines() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.material.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.05;
  });

  const verts = [];
  techStack.forEach((_, i) => {
    const a1 = (i / techStack.length) * Math.PI * 2;
    const p1 = new THREE.Vector3(Math.cos(a1) * 3.2, Math.sin(a1 * 1.5) * 0.4, Math.sin(a1) * 3.2);
    techStack.forEach((_, j) => {
      if (j > i) {
        const a2 = (j / techStack.length) * Math.PI * 2;
        const p2 = new THREE.Vector3(Math.cos(a2) * 3.2, Math.sin(a2 * 1.5) * 0.4, Math.sin(a2) * 3.2);
        if (p1.distanceTo(p2) < 4.5) {
          verts.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      }
    });
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={verts.length / 3} array={new Float32Array(verts)} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.15} />
    </lineSegments>
  );
}

export default function TechSphere() {
  return (
    <section id="tech-sphere" className="relative" style={{ height: "100vh", background: "linear-gradient(180deg, #060b18 0%, #0d1a3a 100%)" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <span className="section-label mb-3" style={{ color: "#22d3ee" }}>Our Stack</span>
        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-3">Teixon Tech Universe</h2>
        <p className="text-sm text-center" style={{ color: "#64748b" }}>Hover the icons to explore our technology stack</p>
      </div>
      <Canvas camera={{ position: [0, 2, 9], fov: 55 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#6366f1" />
        <pointLight position={[-5, -5, 5]} intensity={1} color="#22d3ee" />
        <Stars radius={100} depth={60} count={4000} factor={4} fade speed={0.5} />
        <CoreSphere />
        <ConnectionLines />
        <OrbitRing icons={techStack.slice(0, 4)} radius={3.2} speed={0.18} tilt={0.2} />
        <OrbitRing icons={techStack.slice(4)} radius={2.4} speed={-0.12} tilt={-0.3} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </section>
  );
}
