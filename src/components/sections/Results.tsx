import { Counter } from "../Counter";
import { Reveal } from "../Reveal";
import { memo } from "react";

const stats = [
  { label: "Custo por Conversa", prefix: "R$ ", to: 1.20, decimals: 2 },
  { label: "Conversas Geradas", to: 223 },
  { label: "Pessoas Alcançadas", to: 65000, suffix: "+" },
  { label: "Impressões", to: 102300, suffix: "+" },
  { label: "Investimento Total", prefix: "R$ ", to: 267.91, decimals: 2 },
];

export const Results = memo(() => {
  return (
    <section id="resultados" className="relative overflow-hidden py-32" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.45 0.22 250 / 0.18), transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
            Números reais
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
            Resultados que <span className="text-gradient">falam por si</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dados de campanhas ativas geridas pela nossa equipe.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className="glass card-elevated group relative overflow-hidden rounded-2xl p-8 transition-transform hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.78 0.18 235 / 0.15), transparent 70%)",
                }}
              />
              <div className="text-4xl font-bold tracking-tight md:text-5xl">
                <Counter
                  to={s.to}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});

Results.displayName = "Results";
