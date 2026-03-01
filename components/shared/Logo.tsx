/**
 * @component Logo
 * @part-of Web3School — Shared Components
 * @design Plain white bold text logo
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
        "font-heading font-bold text-white",
        sizeClasses[size],
        className
      )}
    >
      Web3School
    </span>
  );
}
