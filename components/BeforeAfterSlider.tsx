"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  category: string;
  description: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  category,
  description,
  beforeLabel = "Before (Swirls / Oxidised)",
  afterLabel = "After (Ceramic / 99% Defect Free)",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-md group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A6818]">
            {category}
          </span>
          <h3 className="text-lg sm:text-xl font-display font-bold text-neutral-900">
            {title}
          </h3>
        </div>
        <p className="text-xs text-neutral-500 max-w-xs">{description}</p>
      </div>

      {/* Comparison Container */}
      <div
        ref={containerRef}
        className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden cursor-ew-resize select-none border border-neutral-200 shadow-inner"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt={`${title} After Result`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[320px] sm:min-w-[600px] md:min-w-[800px]">
            <Image
              src={beforeImage}
              alt={`${title} Before Result`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover grayscale brightness-90"
            />
          </div>
          <div className="absolute bottom-3 left-3 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-amber-300 border border-amber-400/30">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-[#B38E3F] to-white shadow-[0_0_10px_rgba(179,142,63,0.8)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#B38E3F] flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 text-[#8A6818]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M8 9l-4 3 4 3m8-6l4 3-4 3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500">
        <span>← Drag left or right to inspect paint clarity →</span>
        <span className="font-mono font-bold text-[#8A6818]">{Math.round(sliderPosition)}% View</span>
      </div>
    </div>
  );
}
