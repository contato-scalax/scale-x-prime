import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const buttons = [
  { href: "https://wa.me/5585989324688", label: "Falar no WhatsApp (85)" },
  { href: "https://wa.me/5527999629889", label: "Falar no WhatsApp (27)" },
];

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
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
          className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-shadow hover:shadow-scalax-neon/40"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          }}
          aria-label={b.label}
        >
          {i === 0 && (
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20" />
          )}
          <MessageCircle className="h-7 w-7" />
        </motion.a>
      ))}
    </div>
  );
}
