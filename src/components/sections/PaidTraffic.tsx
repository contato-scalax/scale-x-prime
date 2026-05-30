import { Reveal } from "../Reveal";
import { Target, Zap, LineChart, BrainCircuit } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Segmentação precisa",
    text: "Identificamos quem realmente compra. Públicos personalizados, lookalikes e camadas de exclusão para gastar onde converte.",
  },
  {
    icon: Zap,
    title: "Velocidade de execução",
    text: "Setup, criativos e estrutura prontos para rodar em até 7 dias. Sem promessa vazia, com cronograma claro.",
  },
  {
    icon: LineChart,
    title: "Otimização contínua",
    text: "Análise diária de CPM, CTR, CPA e ROAS. Cada real é realocado para o conjunto de maior retorno.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência de dados",
    text: "Eventos via API de conversões, atribuição correta e modelos preditivos integrados ao seu funil.",
  },
];

export function PaidTraffic() {
  return (
    <section id="trafego" className="relative overflow-hidden py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
              Tráfego Pago
            </div>
            <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
              Não vendemos cliques.{" "}
              <span className="text-gradient">Vendemos previsibilidade.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Tráfego pago é o motor mais rápido para colocar sua oferta na
              frente do público certo. Estruturamos campanhas em Meta Ads,
              Google Ads e LinkedIn Ads com foco em uma única métrica: custo
              de aquisição saudável e escalável.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Plataformas", value: "Meta · Google · LinkedIn" },
                { label: "Modelo", value: "Performance + Branding" },
                { label: "Atribuição", value: "API + Server-side" },
                { label: "Relatórios", value: "Tempo real" },
              ].map((kv) => (
                <div
                  key={kv.label}
                  className="rounded-xl border border-border bg-card/40 px-4 py-3 backdrop-blur"
                >
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {kv.label}
                  </div>
                  <div className="mt-1 text-sm font-medium">{kv.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal
                key={it.title}
                delay={i * 0.08}
                className="glass card-elevated group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <it.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {it.text}
                </p>
                <div
                  className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.78 0.18 235 / 0.3), transparent 70%)",
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
