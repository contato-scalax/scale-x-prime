import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import lelumaImg from "@/assets/project-leluma.jpeg";
import vipImg from "@/assets/project-vipagenda.jpeg";
import stImg from "@/assets/project-st-importados.jpeg";

type Project = {
  name: string;
  description: string;
  url: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "VIP Agenda",
    description: "Sistema de Agendamento Online",
    url: "https://vipagenda.lovable.app/",
    image: vipImg,
  },
  {
    name: "Leluma Estética",
    description: "Clínica de Estética Avançada",
    url: "https://lelumalaser.com.br/",
    image: lelumaImg,
  },
  {
    name: "S&T Importados",
    description: "Catálogo Digital para Atacado e Varejo",
    url: "https://melodic-platypus-f93f0f.netlify.app/",
    image: stImg,
  },
];

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projetos" className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.45 0.22 250 / 0.15), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container relative z-10 mx-auto px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
            Portfólio
          </div>
          <h2 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
            Projetos <span className="text-gradient">Desenvolvidos</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sites, Landing Pages e Sistemas criados pela ScalaX para gerar
            resultados reais.
          </p>
        </Reveal>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((p) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 40 },
                show: reduce
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
              }}
              whileHover={reduce ? undefined : { y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="glass card-elevated group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 transition-colors hover:border-scalax-neon/50"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-scalax-deep">
                <img
                  src={p.image}
                  alt={`Preview do projeto ${p.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 100%, oklch(0.78 0.18 235 / 0.35), transparent 70%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "0 0 60px oklch(0.78 0.18 235 / 0.35), inset 0 0 0 1px oklch(0.78 0.18 235 / 0.4)",
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-scalax-neon transition-transform duration-300 group-hover:translate-x-1">
                  Ver Projeto
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
