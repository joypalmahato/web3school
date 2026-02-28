/**
 * @component Logo
 * @part-of Web3School — Shared Components
 * @design Purple gradient text logo
 */
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export function Logo({ size = "md", className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-heading font-bold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent",
        sizeClasses[size],
        className
      )}
    >
      Web3School
    </span>
  );
}
