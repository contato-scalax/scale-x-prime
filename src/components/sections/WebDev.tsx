import { Reveal } from "../Reveal";
import { 
  Layout, 
  Rocket, 
  Link, 
  Code, 
  ShieldCheck, 
  TrendingUp, 
  Smartphone, 
  Search, 
  Zap,
  Globe,
  ShoppingCart,
  Layers,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";

const infoCards = [
  {
    category: "Tipos de Projetos",
    items: [
      { name: "Sites Institucionais", icon: Globe },
      { name: "Landing Pages", icon: Layout },
      { name: "Sistemas Web", icon: Layers },
      { name: "E-commerce", icon: ShoppingCart },
      { name: "Plataformas SaaS", icon: Cpu },
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Tecnologia",
    items: [
      { name: "React", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Supabase", icon: ShieldCheck },
      { name: "Integrações Inteligentes", icon: Link },
    ],
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    category: "Performance",
    items: [
      { name: "SEO", icon: Search },
      { name: "Core Web Vitals", icon: Rocket },
      { name: "Mobile First", icon: Smartphone },
    ],
    color: "from-cyan-500/20 to-teal-500/20"
  },
  {
    category: "Experiência",
    items: [
      { name: "UX/UI Premium", icon: Zap },
    ],
    color: "from-blue-600/20 to-indigo-600/20"
  }
];

const differentiators = [
  {
    title: "Design Estratégico",
    description: "Cada elemento possui um propósito. Estruturamos páginas para conduzir o visitante até a ação mais importante.",
    icon: Layout
  },
  {
    title: "Alta Performance",
    description: "Sites rápidos convertem mais. Otimizados para carregamento rápido e máxima estabilidade.",
    icon: Rocket
  },
  {
    title: "Integrações Inteligentes",
    description: "WhatsApp, CRM, Meta Pixel, Google Analytics e automações. Tudo conectado para resultados.",
    icon: Link
  },
  {
    title: "Tecnologia Moderna",
    description: "Construído com React e TypeScript. Seu projeto pode crescer sem precisar ser reconstruído do zero.",
    icon: Code
  },
  {
    title: "Experiência Premium",
    description: "Interfaces modernas, animações profissionais e design responsivo alinhado à sua marca.",
    icon: ShieldCheck
  },
  {
    title: "Preparado para Crescer",
    description: "Seu site nasce preparado para SEO, Tráfego Pago e captação de Leads desde o dia um.",
    icon: TrendingUp
  }
];

export function WebDev() {
  return (
    <section id="sites" className="relative overflow-hidden py-32 bg-scalax-ink">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-scalax-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-scalax-neon/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-24">
          <Reveal>
            <div className="mb-4 inline-flex rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-1.5 text-xs uppercase tracking-widest text-scalax-neon">
              Criação de Sites
            </div>
            <h2 className="text-balance text-4xl font-bold leading-tight md:text-6xl mb-6">
              Não criamos páginas. <br />
              <span className="text-gradient">Construímos ativos digitais.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Não criamos páginas. Construímos ativos digitais que trabalham por você 24 horas por dia.
            </p>
            <p className="mt-6 text-lg text-muted-foreground/80 leading-relaxed max-w-2xl">
              Seu site não deve ser apenas bonito. Ele deve transmitir confiança, gerar autoridade, 
              captar oportunidades e transformar visitantes em clientes. Cada projeto desenvolvido 
              pela ScalaX é pensado para unir design, performance, experiência do usuário e conversão.
            </p>
          </Reveal>
        </div>

        {/* Info Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-32">
          {infoCards.map((card, idx) => (
            <Reveal key={card.category} delay={idx * 0.1}>
              <div className="glass h-full p-8 rounded-2xl flex flex-col group hover:border-scalax-neon/40 transition-all duration-500">
                <h3 className="text-scalax-neon font-bold text-sm uppercase tracking-wider mb-6">
                  {card.category}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {card.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-3 text-foreground/90 group-hover:text-foreground transition-colors">
                      <div className="p-2 rounded-lg bg-scalax-deep/50 text-scalax-neon">
                        <item.icon size={16} />
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </li>
                  ))}
                </ul>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none`} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Differentiators Section */}
        <div className="mb-20">
          <Reveal>
            <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
              <span className="h-px w-12 bg-scalax-neon/50" />
              Diferenciais ScalaX
            </h3>
          </Reveal>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((diff, i) => (
              <Reveal key={diff.title} delay={i * 0.05}>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-scalax-blue/10 flex items-center justify-center text-scalax-neon mb-6 group-hover:scale-110 transition-transform duration-500">
                    <diff.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{diff.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {diff.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Connection Area */}
        <Reveal>
          <div className="relative mt-32 p-1 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-scalax-blue via-scalax-neon to-scalax-blue animate-shimmer opacity-30" style={{ backgroundSize: '200% 100%' }} />
            <div className="relative bg-scalax-ink rounded-[calc(1.5rem-1px)] p-12 md:p-20 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
                  "Tráfego sem um bom site gera visitas. <br />
                  <span className="text-neon">Um bom site transforma visitas em oportunidades."</span>
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                  A ScalaX une desenvolvimento, experiência do usuário e marketing de performance 
                  para criar estruturas completas de crescimento digital. Não entregamos apenas campanhas. 
                  Não entregamos apenas sites. Construímos ecossistemas digitais preparados para escalar.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-4 rounded-full bg-gradient-to-r from-scalax-blue to-scalax-neon text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-scalax-blue/25">
                    Falar com Especialista
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
