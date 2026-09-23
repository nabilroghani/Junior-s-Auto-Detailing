import { Sparkles } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  highlightText?: string;
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  highlightText,
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-14 sm:pt-36 sm:pb-18 overflow-hidden border-b border-neutral-200/80 bg-gradient-to-b from-[#F3F4F6] via-[#F8F9FA] to-[#F8F9FA]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#B38E3F]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B38E3F]/40 text-[#8A6818] text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B38E3F]" />
          <span>{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-neutral-900 tracking-tight max-w-4xl mx-auto leading-[1.12]">
          {title}{" "}
          {highlightText && (
            <span className="text-[#8A6818] block sm:inline">{highlightText}</span>
          )}
        </h1>

        <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
