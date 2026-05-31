import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  animated?: boolean;
  loading?: "lazy" | "eager";
  priority?: "high" | "low" | "auto";
}

/**
 * ScalaX official bird logo extracted from the provided brand reference.
 * Uses the exact reference silhouette adapted to the site's blue treatment.
 */
export function ScalaxBird({ className, animated = false, loading = "eager", priority = "auto" }: Props) {
  return (
    <img
      src="/scalax-bird-official.png"
      aria-label="ScalaX"
      className={cn("object-contain", className)}
      decoding="async"
      loading={loading}
      fetchPriority={priority}
      draggable={false}
      style={animated ? { transformOrigin: "50% 50%" } : undefined}
    />
  );
}
