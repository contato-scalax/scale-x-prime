import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ScalaxBird } from "./ScalaxBird";

const links = [
  { label: "Resultados", href: "#resultados" },
  { label: "Sites", href: "#sites" },
  { label: "Tráfego", href: "#trafego" },
  { label: "Processo", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Produtos", href: "#analytics" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 30);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40"
      >
        <motion.div
          style={{ opacity: scrolled ? 1 : opacity }}
          className="absolute inset-0 border-b border-border/40 bg-background/70 backdrop-blur-xl"
        />
        <nav className="container relative mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <ScalaxBird className="h-8 w-8" />
            <span className="text-sm font-bold tracking-[0.25em]">SCALAX</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="rounded-full border border-scalax-neon/30 bg-scalax-deep/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-scalax-neon backdrop-blur transition-colors hover:bg-scalax-deep/80"
          >
            Diagnóstico
          </a>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}
