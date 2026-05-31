import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { ReactNode, memo } from "react";

interface Props extends MotionProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
}

export const Reveal = memo(({ children, delay = 0, y = 32, blur = true, className, ...rest }: Props) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }
      }
      whileInView={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${className} will-change-[transform,opacity,filter]`}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

Reveal.displayName = "Reveal";
