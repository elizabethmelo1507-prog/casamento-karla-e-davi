import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onImageLoad: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onImageLoad }) => {
  const mobileImgRef = useRef<HTMLImageElement>(null);
  const desktopImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if images are already cached/loaded on mount
    if (mobileImgRef.current?.complete) onImageLoad();
    if (desktopImgRef.current?.complete) onImageLoad();
  }, [onImageLoad]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-900">

      {/* Fallback Gradient/Color while loading */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0" />

      {/* Mobile: Static Image */}
      <img
        ref={mobileImgRef}
        src="/images/hero-mobile.jpg"
        alt="Casamento Karla e Davi"
        className="absolute inset-0 w-full h-full object-cover md:hidden opacity-90"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        onLoad={onImageLoad}
        onError={onImageLoad} // Proceed even if image fails
      />

      {/* Desktop: Static Image */}
      <img
        ref={desktopImgRef}
        src="/images/hero-desktop.jpg"
        alt="Casamento Karla e Davi"
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-90"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        onLoad={onImageLoad}
        onError={onImageLoad} // Proceed even if image fails
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/60 drop-shadow-md z-10">
        <ChevronDown size={32} strokeWidth={1.5} />
      </div>
    </section>
  );
};