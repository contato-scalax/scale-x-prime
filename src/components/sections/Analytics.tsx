import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Activity, Cpu, Gauge } from "lucide-react";

export function Analytics() {
  return (
    <section id="analytics" className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 50%, oklch(0.55 0.22 255 / 0.15), transparent 70%)",
        }}
      />
      <div className="container relative z-10 mx-auto grid gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
            ScalaX Analytics
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
            Inteligência de campanhas em <span className="text-gradient">tempo real</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Plataforma proprietária que consolida Meta, Google e LinkedIn em um
            único painel. Diagnóstico automatizado de criativos, públicos e
            funis com alertas de anomalia.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Activity, label: "Análise de campanhas multi-canal" },
              { icon: Gauge, label: "Score de performance por criativo" },
              { icon: Cpu, label: "Diagnóstico preditivo com IA" },
            ].map((f) => (
              <li key={f.label} className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <f.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-sm">{f.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="glass card-elevated relative overflow-hidden rounded-3xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          analytics.scalax.com
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "ROAS", value: "5.8x" },
          { label: "CPA", value: "R$ 12" },
          { label: "CTR", value: "3.4%" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card/60 p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {s.label}
            </div>
            <div className="mt-1 text-lg font-bold text-neon">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Animated chart */}
      <div className="mt-5 h-40 rounded-xl border border-border bg-card/60 p-4">
        <svg viewBox="0 0 300 120" className="h-full w-full">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.18 235)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="oklch(0.78 0.18 235)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 0 90 L 30 70 L 60 80 L 90 50 L 120 60 L 150 35 L 180 45 L 210 25 L 240 30 L 270 15 L 300 20"
            stroke="oklch(0.78 0.18 235)"
            strokeWidth="2"
            fill="none"
            filter="drop-shadow(0 0 6px oklch(0.78 0.18 235))"
          />
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            d="M 0 90 L 30 70 L 60 80 L 90 50 L 120 60 L 150 35 L 180 45 L 210 25 L 240 30 L 270 15 L 300 20 L 300 120 L 0 120 Z"
            fill="url(#chartFill)"
          />
        </svg>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: "Meta Ads", val: 78 },
          { label: "Google Ads", val: 64 },
          { label: "LinkedIn", val: 42 },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-3 text-xs">
            <span className="w-20 text-muted-foreground">{b.label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-card">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${b.val}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
            <span className="w-8 text-right text-foreground">{b.val}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
