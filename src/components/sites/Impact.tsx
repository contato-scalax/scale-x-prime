import { motion } from "framer-motion";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const stats = [
  { label: "Visitantes a mais", value: 312, suffix: "%" },
  { label: "Conversões geradas", value: 4800, suffix: "+" },
  { label: "Contatos qualificados", value: 1250, suffix: "+" },
  { label: "Vendas atribuídas", value: 187, suffix: "%" },
];

export function Impact() {
  return (
    <section className="relative border-b border-border/40 py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-scalax-neon">
            Impacto dos Projetos
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Sites que transformam métricas
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-7 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-scalax-blue/10 via-transparent to-scalax-neon/10 opacity-60" />
                <div className="relative">
                  <p className="font-display text-5xl font-bold tracking-tight">
                    <Counter to={s.value} />
                    <span className="text-scalax-neon">{s.suffix}</span>
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-6 h-1 origin-left rounded-full bg-gradient-to-r from-scalax-blue to-scalax-neon"
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
