import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const steps = [
  { title: "Planejamento", desc: "Diagnóstico de negócio, persona e jornada de conversão." },
  { title: "Estrutura", desc: "Arquitetura de informação e wireframes orientados a resultado." },
  { title: "Design", desc: "Identidade visual premium, motion e direção cinematográfica." },
  { title: "Desenvolvimento", desc: "Código limpo, performático e responsivo em todos os devices." },
  { title: "Otimização", desc: "SEO técnico, Core Web Vitals e integração com pixels." },
  { title: "Publicação", desc: "Deploy seguro, monitoramento contínuo e iteração baseada em dados." },
];

export function Timeline() {
  return (
    <section className="relative border-b border-border/40 py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-scalax-neon">
            Processo
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Um método validado em cada entrega
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-scalax-neon/60 via-scalax-blue/30 to-transparent md:left-1/2 md:block" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`md:text-${i % 2 ? "left" : "right"}`}>
                    <p className="font-display text-6xl font-bold text-scalax-neon/30">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-3 max-w-md text-muted-foreground md:ml-auto md:max-w-sm">
                      {s.desc}
                    </p>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="absolute left-4 top-3 h-3 w-3 rounded-full bg-scalax-neon shadow-[0_0_20px_var(--scalax-neon)] md:left-1/2 md:-translate-x-1/2"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
