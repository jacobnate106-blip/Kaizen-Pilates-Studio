import React, { useState } from 'react';
import { ArchMotif } from './ArchMotif';

interface BrandImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  overlay?: 'none' | 'ink' | 'charcoal' | 'slate' | 'stone' | 'frost' | 'ink-heavy' | 'gradient';
  overlayOpacity?: string;
  archFrame?: boolean;
  priority?: boolean;
}

export const BrandImage: React.FC<BrandImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden',
  overlay = 'none',
  overlayOpacity = 'opacity-50',
  archFrame = false,
  priority = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Sync if src prop changes
  React.useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);
    setHasError(false);
  }, [src]);

  const handleImageError = () => {
    if (fallbackSrc && !hasTriedFallback && fallbackSrc !== currentSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  // Overlay styles map
  const overlayMap = {
    none: '',
    ink: 'bg-ink',
    'ink-heavy': 'bg-ink/80',
    charcoal: 'bg-charcoal',
    slate: 'bg-slate',
    stone: 'bg-stone/60',
    frost: 'bg-frost/40',
    gradient: 'bg-gradient-to-t from-ink/90 via-ink/40 to-transparent',
  };

  return (
    <div
      className={`flex items-center justify-center ${containerClassName} ${
        archFrame ? 'arch-top' : ''
      }`}
    >
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className={`${className} transition-transform duration-700 ease-out`}
        />
      ) : (
        /* Zero-broken-image resilient fallback matching brand architecture */
        <div className="flex flex-col items-center justify-center w-full h-full bg-charcoal text-silver p-[2rem] text-center select-none">
          <ArchMotif className="w-16 h-24 text-silver/50 mb-3" />
          <span className="text-[0.75rem] tracking-[0.2em] uppercase font-sans text-silver">
            KAIZEN Studio
          </span>
          <span className="text-[0.875rem] font-serif text-stone mt-1 max-w-[16rem]">
            {alt}
          </span>
        </div>
      )}

      {/* Brand Color Scrim Overlay */}
      {overlay !== 'none' && (
        <div
          className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${overlayMap[overlay]} ${overlayOpacity}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
