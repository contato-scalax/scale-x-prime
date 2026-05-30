import { Reveal } from "../Reveal";

const steps = [
  { n: "01", title: "Diagnóstico", text: "Auditamos canais, criativos, eventos e tracking. Mapa do estado atual." },
  { n: "02", title: "Planejamento", text: "Definimos persona, oferta, KPIs e meta de CPA por etapa do funil." },
  { n: "03", title: "Estruturação", text: "Configuração técnica: pixel, API de conversões, eventos e atribuição." },
  { n: "04", title: "Campanhas", text: "Criativos múltiplos, segmentações e estrutura de teste estatístico." },
  { n: "05", title: "Otimização", text: "Análise diária. Pausa do que não performa, escala do que converte." },
  { n: "06", title: "Escala", text: "Aumento de orçamento controlado, novos canais e expansão geográfica." },
];

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, oklch(0.55 0.22 255 / 0.15), transparent 70%)",
        }}
      />
      <div className="container relative z-10 mx-auto px-6">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
            Processo
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
            Seis etapas. <span className="text-gradient">Zero achismo.</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 h-full w-px md:left-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent, oklch(0.78 0.18 235 / 0.6), transparent)",
            }}
          />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 0.05}
                className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Node */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center md:mx-auto">
                  <div className="absolute inset-0 rounded-full bg-scalax-neon/20 blur-xl" />
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "0 0 30px oklch(0.78 0.18 235 / 0.5)",
                    }}
                  >
                    {s.n}
                  </div>
                </div>

                <div className={`glass card-elevated flex-1 rounded-2xl p-6 md:max-w-md ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
