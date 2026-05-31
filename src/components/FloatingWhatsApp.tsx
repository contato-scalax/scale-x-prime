import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5585989324688"
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
        delay: 2 // Show after a delay
      }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-shadow hover:shadow-scalax-neon/40"
      style={{ 
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)"
      }}
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20" />
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
