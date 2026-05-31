import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const v = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, v)));
  };

  return (
    <section className="relative border-b border-border/40 py-28">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-scalax-neon">
            Antes & Depois
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            A evolução visual dos nossos projetos
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
            onTouchMove={(e) => onMove(e.touches[0].clientX)}
            onClick={(e) => onMove(e.clientX)}
            className="relative mt-16 aspect-[16/9] w-full select-none overflow-hidden rounded-3xl border border-border/40 bg-card/40 shadow-[0_30px_100px_-20px_oklch(0.55_0.22_255/0.4)]"
          >
            <img
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1800&q=80"
              alt="Antes"
              className="absolute inset-0 h-full w-full object-cover grayscale"
              draggable={false}
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1800&q=80"
                alt="Depois"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
            <div
              className="absolute top-0 h-full w-px bg-scalax-neon shadow-[0_0_30px_var(--scalax-neon)]"
              style={{ left: `${pos}%` }}
            >
              <div
                onMouseDown={(e) => {
                  const move = (ev: MouseEvent) => onMove(ev.clientX);
                  const up = () => {
                    window.removeEventListener("mousemove", move);
                    window.removeEventListener("mouseup", up);
                  };
                  window.addEventListener("mousemove", move);
                  window.addEventListener("mouseup", up);
                  e.preventDefault();
                }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 cursor-ew-resize items-center justify-center rounded-full border border-scalax-neon/60 bg-scalax-ink/80 text-scalax-neon backdrop-blur"
              >
                ↔
              </div>
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-scalax-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
              Antes
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-scalax-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-scalax-neon backdrop-blur">
              Depois
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
