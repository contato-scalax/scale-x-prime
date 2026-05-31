import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/Reveal";

type Project = {
  id: string;
  name: string;
  niche: string;
  launched_at: string | null;
  technologies: string[];
  cover_url: string | null;
  project_url: string | null;
  description: string | null;
  objective: string | null;
};

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    supabase
      .from("site_projects")
      .select("*")
      .order("display_order", { ascending: true })
      .then(({ data }) => data && setProjects(data as Project[]));
  }, []);

  return (
    <section id="portfolio" className="relative border-b border-border/40 py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-scalax-neon">
            Portfólio
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            Cases reais, resultados reais
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <motion.button
                onClick={() => setActive(p)}
                whileHover={{ y: -6 }}
                className="group relative w-full overflow-hidden rounded-2xl border border-border/40 bg-card/40 text-left backdrop-blur transition-colors hover:border-scalax-neon/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {p.cover_url && (
                    <img
                      src={p.cover_url}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-scalax-ink via-scalax-ink/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-scalax-neon">
                      {p.niche}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold">{p.name}</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 p-5">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/40 bg-scalax-deep/40 px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-scalax-ink/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border/40 bg-card shadow-[0_40px_120px_-20px_oklch(0.55_0.22_255/0.5)]"
            >
              {active.cover_url && (
                <img src={active.cover_url} alt={active.name} className="aspect-video w-full object-cover" />
              )}
              <div className="p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-scalax-neon">
                  {active.niche} {active.launched_at && `· ${new Date(active.launched_at).toLocaleDateString("pt-BR", { month: "short", year: "numeric" })}`}
                </p>
                <h3 className="mt-2 font-display text-3xl font-bold">{active.name}</h3>
                {active.description && (
                  <p className="mt-4 text-muted-foreground">{active.description}</p>
                )}
                {active.objective && (
                  <div className="mt-6 rounded-2xl border border-border/40 bg-scalax-deep/40 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-scalax-neon">
                      Objetivo
                    </p>
                    <p className="mt-2 text-sm">{active.objective}</p>
                  </div>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.technologies.map((t) => (
                    <span key={t} className="rounded-full border border-border/40 bg-scalax-deep/40 px-3 py-1 text-[10px] uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                {active.project_url && (
                  <a
                    href={active.project_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex rounded-full bg-gradient-to-r from-scalax-blue to-scalax-neon px-6 py-3 text-xs font-semibold uppercase tracking-wider text-scalax-ink"
                  >
                    Visitar projeto
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
