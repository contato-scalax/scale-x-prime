import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ScalaxBird } from "./ScalaxBird";

interface Props {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<"forming" | "revealed" | "out">("forming");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("revealed"), 1800);
    const t2 = setTimeout(() => setPhase("out"), 3000);
    const t3 = setTimeout(() => onComplete(), 3700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  // Pre-compute particle starting positions that fly into the bird
  const particles = Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * Math.PI * 2;
    const radius = 200 + Math.random() * 300;
    return {
      id: i,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      delay: Math.random() * 0.8,
    };
  });

  return (
    <AnimatePresence>
      {phase !== "out" ? null : null}
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "out" ? 0 : 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => {
          if (phase === "out") onComplete();
        }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#050816" }}
      >
        {/* Ambient grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Ambient radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.45 0.22 250 / 0.35), transparent 70%)",
          }}
        />

        <div className="relative flex flex-col items-center">
          {/* Particle convergence */}
          <div className="relative h-64 w-64">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                initial={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: [0, 1, 0],
                  scale: [0, 1.4, 0],
                }}
                transition={{
                  duration: 1.6,
                  delay: p.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-scalax-neon"
                style={{
                  boxShadow:
                    "0 0 12px oklch(0.78 0.18 235), 0 0 24px oklch(0.78 0.18 235 / 0.6)",
                }}
              />
            ))}

            {/* Bird */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, filter: "blur(20px)" }}
              animate={{
                opacity: phase === "forming" ? [0, 0, 1] : 1,
                scale: phase === "forming" ? [0.4, 0.6, 1] : 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.8,
                times: [0, 0.6, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <ScalaxBird className="h-48 w-48 drop-shadow-[0_0_30px_oklch(0.78_0.18_235_/_0.8)]" />
            </motion.div>
          </div>

          {/* Wordmark reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: phase === "revealed" || phase === "out" ? 1 : 0,
              y: phase === "revealed" || phase === "out" ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-center"
          >
            <h1
              className="text-5xl font-bold tracking-[0.3em] text-foreground md:text-7xl"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.97 0.01 240), oklch(0.78 0.18 235), oklch(0.97 0.01 240))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SCALAX
            </h1>
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{
                opacity: phase === "revealed" || phase === "out" ? 1 : 0,
                letterSpacing: "0.4em",
              }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 text-xs font-light uppercase text-scalax-neon md:text-sm"
            >
              Tecnologia · Performance · Escala
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom scanline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3.5, ease: "linear" }}
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-scalax-neon to-transparent"
        />
      </motion.div>
    </AnimatePresence>
  );
}
