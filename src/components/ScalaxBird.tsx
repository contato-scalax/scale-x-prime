import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  animated?: boolean;
}

/**
 * ScalaX official bird logo extracted from the provided brand reference.
 * Uses the exact reference silhouette adapted to the site's blue treatment.
 */
export function ScalaxBird({ className, animated = false }: Props) {
  return (
    <img
      src="/scalax-bird-official.png"
      aria-label="ScalaX"
      className={cn("object-contain", className)}
      decoding="async"
      draggable={false}
      style={animated ? { transformOrigin: "50% 50%" } : undefined}
    />
  );
}
