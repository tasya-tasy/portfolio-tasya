import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-slate max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-12 h-0.5 bg-gold" />
    </div>
  );
}

