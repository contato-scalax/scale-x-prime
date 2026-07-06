import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

const buttons = [
  { href: "https://wa.me/5585989324688", label: "Falar com Jefferson", name: "Jefferson" },
];

export function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-5">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="back-to-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-scalax-neon/30 bg-scalax-deep/70 text-scalax-neon backdrop-blur-xl transition-colors hover:border-scalax-neon hover:bg-scalax-deep/90"
            style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)" }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {buttons.map((b, i) => (
        <motion.a
          key={b.href}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 2 + i * 0.15,
          }}
          className="group relative flex h-14 items-center gap-2 rounded-full pl-4 pr-5 text-white shadow-2xl transition-shadow hover:shadow-scalax-neon/40"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          }}
          aria-label={b.label}
        >
          {i === 0 && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20" />
          )}
          <MessageCircle className="h-6 w-6 shrink-0" />
          <span className="text-sm font-semibold">{b.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
