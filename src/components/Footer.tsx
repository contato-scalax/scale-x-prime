import { MessageCircle, Instagram, Linkedin, Mail } from "lucide-react";
import { ScalaxBird } from "./ScalaxBird";

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-border/40 pt-20 pb-10">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.78 0.18 235 / 0.6), transparent)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.45 0.22 250 / 0.15), transparent 70%)",
        }}
      />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <ScalaxBird className="h-10 w-10" />
              <span className="text-xl font-bold tracking-widest">SCALAX</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Escalamos negócios através de dados, performance e inteligência
              de campanhas. Tecnologia premium para crescimento previsível.
            </p>
            <a
              href="https://wa.me/5585989324688"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <FooterCol
            title="Navegação"
            links={[
              { label: "Resultados", href: "#resultados" },
              { label: "Tráfego Pago", href: "#trafego" },
              { label: "Processo", href: "#processo" },
              { label: "Cases", href: "#cases" },
            ]}
          />
          <FooterCol
            title="Produtos"
            links={[
              { label: "ScalaX Analytics", href: "#analytics" },
              { label: "ScalaX LeadHunter", href: "#leadhunter" },
            ]}
          />
          <div>
            <h4 className="text-xs uppercase tracking-widest text-scalax-neon">
              Contato
            </h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:contato@scalax.com.br"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" /> contato@scalax.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5585989324688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-scalax-neon" /> (85) 98932-4688
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/scalax_ads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram className="h-3.5 w-3.5 text-scalax-neon" /> @scalax_ads
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/scalax_ads/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-scalax-neon" 
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://wa.me/5585989324688" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-scalax-neon" 
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} ScalaX. Todos os direitos reservados.</span>
          <span className="uppercase tracking-widest">Tecnologia · Performance · Escala</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-widest text-scalax-neon">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
