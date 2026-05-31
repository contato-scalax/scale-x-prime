import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const devices = [
  {
    label: "Desktop",
    frame: "aspect-[16/10] rounded-xl border-[10px] border-scalax-deep/80 bg-scalax-ink",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
  },
  {
    label: "Notebook",
    frame: "aspect-[16/10] rounded-lg border-[8px] border-scalax-deep/80 bg-scalax-ink",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  },
  {
    label: "Tablet",
    frame: "aspect-[3/4] rounded-2xl border-[10px] border-scalax-deep/80 bg-scalax-ink",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
  },
  {
    label: "Smartphone",
    frame: "aspect-[9/19] rounded-[2rem] border-[8px] border-scalax-deep/80 bg-scalax-ink",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
  },
];

export function Showcase() {
  return (
    <section className="relative border-b border-border/40 py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-scalax-neon">
            Vitrine
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Projetos premium em todos os dispositivos
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {devices.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4, rotateY: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                style={{ transformPerspective: 1000 }}
                className="group relative"
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-scalax-blue/30 to-scalax-neon/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`relative overflow-hidden ${d.frame} shadow-[0_20px_60px_-10px_oklch(0.08_0.03_265/0.8)]`}>
                  <img src={d.img} alt={d.label} className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <p className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {d.label}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
