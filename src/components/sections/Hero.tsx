import { motion } from "framer-motion";
import { ScalaxBird } from "../ScalaxBird";
import { Particles } from "../Particles";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <Particles count={50} />

      {/* Orbital glow rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 will-change-transform">
        <div className="absolute inset-0 rounded-full border border-scalax-neon/10 animate-pulse-glow will-change-[opacity,filter]" />
        <div
          className="absolute inset-10 rounded-full border border-scalax-neon/5 animate-pulse-glow will-change-[opacity,filter]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-24 rounded-full border border-scalax-neon/10 animate-pulse-glow will-change-[opacity,filter]"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon backdrop-blur"
          >
            <Sparkles className="h-3 w-3" />
            Performance · Dados · Escala
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Escalamos{" "}
            <span className="text-gradient">negócios</span> através de{" "}
            <span className="text-neon">dados</span> e performance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Transformamos investimentos em crescimento previsível através de
            tráfego pago, automação e inteligência de campanhas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Ver Resultados
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full border border-scalax-neon/30 bg-scalax-deep/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-scalax-neon hover:bg-scalax-deep/70"
            >
              Solicitar Diagnóstico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* 3D-ish bird stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          {/* Holographic backdrop */}
          <div
            className="absolute inset-0 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "conic-gradient(from 0deg, oklch(0.55 0.22 255 / 0.5), oklch(0.78 0.18 235 / 0.7), oklch(0.45 0.20 260 / 0.5), oklch(0.55 0.22 255 / 0.5))",
            }}
          />
          <motion.div
            animate={{ rotateY: [0, 360] }}
            style={{ willChange: "transform" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-scalax-neon/20"
          />
          <motion.div
            animate={{ rotateZ: [0, -360] }}
            style={{ willChange: "transform" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-16 rounded-full border border-scalax-neon/10"
          />

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ filter: "drop-shadow(0 30px 60px oklch(0.55 0.22 255 / 0.6))", willChange: "transform" }}
          >
            <ScalaxBird className="h-3/4 w-3/4" priority="high" />
          </motion.div>

          {/* Orbiting particles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-scalax-neon"
              style={{ boxShadow: "0 0 20px oklch(0.78 0.18 235)" }}
              animate={{
                x: [
                  Math.cos((i * Math.PI) / 2) * 200,
                  Math.cos((i * Math.PI) / 2 + Math.PI * 2) * 200,
                ],
                y: [
                  Math.sin((i * Math.PI) / 2) * 200,
                  Math.sin((i * Math.PI) / 2 + Math.PI * 2) * 200,
                ],
              }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
