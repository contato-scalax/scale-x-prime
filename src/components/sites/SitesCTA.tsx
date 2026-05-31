import { Reveal } from "@/components/Reveal";

export function SitesCTA() {
  return (
    <section id="orcamento" className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.45 0.22 250 / 0.45), transparent 70%)",
        }}
      />
      <div className="container relative mx-auto px-6 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Seu próximo projeto pode ser o{" "}
            <span className="bg-gradient-to-r from-scalax-neon to-scalax-blue bg-clip-text text-transparent">
              próximo case
            </span>{" "}
            da ScalaX.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sites desenvolvidos para transmitir confiança, autoridade e gerar
            resultados mensuráveis desde o primeiro dia.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-scalax-blue to-scalax-neon px-8 py-4 text-sm font-semibold text-scalax-ink shadow-[0_0_50px_oklch(0.78_0.18_235/0.5)] transition-transform hover:scale-[1.03]"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-border/50 bg-card/40 px-8 py-4 text-sm font-semibold backdrop-blur transition-colors hover:bg-card/70"
            >
              Ver Portfólio Completo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
