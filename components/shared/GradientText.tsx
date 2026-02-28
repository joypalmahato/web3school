/**
 * @component GradientText
 * @part-of Web3School — Shared Components
 * @design Gradient text wrapper with customizable colors
 */
import { cn } from "@/lib/utils/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
  from?: string;
  to?: string;
}

export function GradientText({
  children,
  className,
  as: Component = "span",
  from = "from-purple-primary",
  to = "to-cyan-accent",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        to,
        className
      )}
    >
      {children}
    </Component>
  );
}
