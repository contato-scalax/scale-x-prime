import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import siteRef from "@/assets/sites-reference.png";

export function SitesHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 pb-24 pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 10%, oklch(0.45 0.22 250 / 0.45), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, oklch(0.6 0.22 235 / 0.25), transparent 70%)",
        }}
      />
      <div className="container relative mx-auto grid items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-scalax-neon/30 bg-scalax-deep/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-scalax-neon backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-scalax-neon shadow-[0_0_12px_var(--scalax-neon)]" />
              Criação de Sites
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Sites que{" "}
              <span className="bg-gradient-to-r from-white via-scalax-neon to-scalax-blue bg-clip-text text-transparent">
                Geram Resultados
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Não criamos apenas sites bonitos. Criamos experiências digitais
              desenvolvidas para converter visitantes em clientes — com tecnologia,
              design cinematográfico e estrutura focada em performance.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#orcamento"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-scalax-blue to-scalax-neon px-7 py-3.5 text-sm font-semibold text-scalax-ink shadow-[0_0_40px_oklch(0.78_0.18_235/0.4)] transition-transform hover:scale-[1.02]"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-border/50 bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card/70"
              >
                Ver Portfólio
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-md"
            style={{ perspective: 1200 }}
          >
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-scalax-blue/30 via-scalax-neon/20 to-transparent blur-3xl" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full overflow-hidden rounded-[2rem] border border-border/40 bg-card/40 shadow-[0_30px_120px_-20px_oklch(0.55_0.22_255/0.6)] backdrop-blur"
            >
              <img
                src={siteRef}
                alt="Mockup de site premium ScalaX"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-scalax-ink/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
