import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: "⚡", title: "Alta Performance", desc: "Core Web Vitals otimizados." },
  { icon: "🚀", title: "Carregamento Rápido", desc: "Builds enxutos com CDN global." },
  { icon: "📱", title: "Responsivo", desc: "Pixel-perfect em qualquer device." },
  { icon: "🔍", title: "SEO Estruturado", desc: "Schema, OG e meta tags semânticas." },
  { icon: "💬", title: "WhatsApp", desc: "Integração direta com leads." },
  { icon: "📊", title: "Meta Pixel", desc: "Eventos avançados para campanhas." },
  { icon: "📈", title: "Google Analytics", desc: "Tracking completo de conversões." },
  { icon: "🎯", title: "Conversão", desc: "Estrutura desenhada para vender." },
];

export function Differentials() {
  return (
    <section className="relative border-b border-border/40 py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-scalax-neon">
            Diferenciais ScalaX
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Tudo que um site premium precisa ter
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-scalax-neon/10 blur-3xl transition-opacity duration-500 group-hover:bg-scalax-neon/25" />
                <div className="relative">
                  <div className="text-3xl">{it.icon}</div>
                  <h3 className="mt-4 font-display text-lg font-bold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
