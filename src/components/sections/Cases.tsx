import { useQuery } from "@tanstack/react-query";
import { useState, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "../Reveal";
import { X, TrendingUp, Target, Users, MessageCircle, DollarSign } from "lucide-react";

interface CaseRow {
  id: string;
  client: string;
  objective: string;
  investment: number;
  reach: number;
  conversations: number;
  cpa: number;
  description: string | null;
  image_url: string | null;
}

export const Cases = memo(() => {
  const [active, setActive] = useState<CaseRow | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["cases"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cases")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data as CaseRow[];
    },
  });

  return (
    <section id="cases" className="relative overflow-hidden py-32" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative z-10 mx-auto px-6">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
            Cases
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
            Resultados <span className="text-gradient">reais</span> de clientes reais
          </h2>
        </Reveal>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-64 animate-pulse rounded-2xl bg-card/40" />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {data?.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.1}>
                <button
                  onClick={() => setActive(c)}
                  className="glass card-elevated group relative block w-full overflow-hidden rounded-2xl p-7 text-left transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.5deg]"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, oklch(0.78 0.18 235 / 0.25), transparent 70%)",
                    }}
                  />
                  <div className="mb-4 text-xs uppercase tracking-widest text-scalax-neon">
                    Cliente
                  </div>
                  <h3 className="text-2xl font-bold">{c.client}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.objective}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border/50 pt-6">
                    <Metric icon={DollarSign} label="Invest." value={`R$ ${c.investment.toLocaleString("pt-BR")}`} />
                    <Metric icon={Users} label="Alcance" value={c.reach.toLocaleString("pt-BR")} />
                    <Metric icon={MessageCircle} label="Conversas" value={c.conversations.toString()} />
                    <Metric icon={Target} label="CPA" value={`R$ ${c.cpa.toFixed(2)}`} />
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-scalax-neon">
                    Ver case completo
                    <TrendingUp className="h-3 w-3" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass card-elevated relative max-w-2xl rounded-3xl p-10"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-5 top-5 rounded-full p-2 text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-xs uppercase tracking-widest text-scalax-neon">
                Case Premium
              </div>
              <h3 className="mt-2 text-3xl font-bold">{active.client}</h3>
              <p className="mt-3 text-muted-foreground">{active.objective}</p>
              {active.description && (
                <p className="mt-6 leading-relaxed text-foreground/90">
                  {active.description}
                </p>
              )}
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                <ModalStat label="Investimento" value={`R$ ${active.investment.toLocaleString("pt-BR")}`} />
                <ModalStat label="Alcance" value={active.reach.toLocaleString("pt-BR")} />
                <ModalStat label="Conversas" value={active.conversations.toString()} />
                <ModalStat label="CPA" value={`R$ ${active.cpa.toFixed(2)}`} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

Cases.displayName = "Cases";

function Metric({ icon: Icon, label, value }: { icon: typeof TrendingUp; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function ModalStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 px-4 py-3">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 text-base font-bold text-neon">{value}</div>
    </div>
  );
}
