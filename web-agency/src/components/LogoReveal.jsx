import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LogoReveal() {
  const sectionRef = useRef();
  const logoRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    tl.from(logoRef.current, {
      scale: 0,
      rotation: 360,
      opacity: 0,
    }).from(
      textRef.current.children,
      {
        y: 100,
        opacity: 0,
        stagger: 0.1,
      },
      "-=0.3"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center px-8 py-24 bg-gradient-to-b from-black via-purple-950/10 to-black"
    >
      <motion.div
        ref={logoRef}
        className="relative mb-12"
      >
        <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full" />
        <img
          src="/logo.jpg"
          alt="Company Logo"
          className="relative w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl shadow-2xl"
        />
      </motion.div>

      <div ref={textRef} className="text-center max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-black mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
            Teixon
          </span>
          <br />
          Technology
        </h2>
        <p className="text-gray-400 text-lg">
          We engineer powerful digital experiences that drive real business growth.
        </p>
      </div>
    </section>
  );
}
