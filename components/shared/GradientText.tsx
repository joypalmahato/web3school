/**
 * @component GradientText
 * @part-of Web3School — Shared Components
 * @design Plain white text wrapper (gradient removed)
 */
import { cn } from "@/lib/utils/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
}

export function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "text-white",
        className
      )}
    >
      {children}
    </Component>
  );
}
