import { Reveal } from "../Reveal";
import { motion } from "framer-motion";
import { Crosshair, Filter, Layers } from "lucide-react";

export function LeadHunter() {
  return (
    <section id="leadhunter" className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, oklch(0.45 0.22 250 / 0.18), transparent 70%)",
        }}
      />
      <div className="container relative z-10 mx-auto grid gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <LeadMockup />
        </Reveal>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
            ScalaX LeadHunter
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
            Prospecção <span className="text-gradient">cirúrgica</span>, não em massa
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Sistema de geração de leads B2B com enriquecimento de dados,
            qualificação automática por IA e roteamento direto para o time
            comercial.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Crosshair, label: "Geração de leads ultra-segmentada" },
              { icon: Filter, label: "Qualificação automática por IA" },
              { icon: Layers, label: "Segmentação por cargo, setor e intent" },
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
      </div>
    </section>
  );
}

function LeadMockup() {
  const leads = [
    { name: "Carolina M.", role: "CMO · Fintech", score: 94 },
    { name: "Rafael T.", role: "Founder · SaaS", score: 88 },
    { name: "Mariana O.", role: "Head Growth · E-com", score: 82 },
    { name: "Bruno V.", role: "CEO · Health", score: 76 },
  ];
  return (
    <div className="glass card-elevated rounded-3xl p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Pipeline ativo
          </div>
          <div className="text-2xl font-bold text-neon">1.247 leads</div>
        </div>
        <div className="rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-3 py-1 text-[10px] uppercase tracking-wider text-scalax-neon">
          Hoje
        </div>
      </div>

      <div className="space-y-3">
        {leads.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
              style={{ background: "var(--gradient-primary)" }}
            >
              {l.name.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{l.name}</div>
              <div className="text-[11px] text-muted-foreground">{l.role}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Score
              </div>
              <div className="text-base font-bold text-neon">{l.score}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
