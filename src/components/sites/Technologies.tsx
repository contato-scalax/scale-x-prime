import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const techs = ["React", "Next.js", "Supabase", "Tailwind", "Framer Motion", "TypeScript", "Vercel", "Node.js"];

export function Technologies() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-scalax-neon">
            Stack
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Tecnologias de ponta em cada projeto
          </h2>
        </Reveal>

        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-6"
          >
            {[...techs, ...techs].map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-border/40 bg-card/40 font-display text-xl font-bold tracking-tight text-muted-foreground backdrop-blur transition-colors hover:border-scalax-neon/40 hover:text-foreground"
              >
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
