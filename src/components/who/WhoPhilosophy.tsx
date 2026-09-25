import React from 'react';
import { BrandImage } from '../common/BrandImage';
import { ArchMotif } from '../common/ArchMotif';
import { STUDIO_IMAGES } from '../../constants/images';

export const WhoPhilosophy: React.FC = () => {
  return (
    <section className="relative w-full min-h-[34rem] md:min-h-[42rem] flex flex-col items-center justify-center text-center bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden px-[1.5rem] md:px-[3rem] py-[5.5rem] transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.whoPhilosophy.src}
          fallbackSrc={STUDIO_IMAGES.whoPhilosophy.fallbackSrc}
          alt={STUDIO_IMAGES.whoPhilosophy.alt}
          overlay="none"
        />
        <div
          className="absolute inset-0 bg-stone/80 bg-gradient-to-t from-stone/95 via-stone/85 to-stone/65 dark:bg-ink/85 dark:from-ink/95 dark:via-ink/85 dark:to-ink/65 transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[50rem] mx-auto flex flex-col items-center gap-[1.5rem]">
        <span className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-charcoal dark:text-stone font-medium">
          The Kaizen Method
        </span>

        <h2 className="font-serif text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] leading-[1.08] font-normal text-ink dark:text-frost tracking-[0.02em]">
          Change for the better.
        </h2>

        <div className="w-[3rem] h-[1px] bg-slate/40 dark:bg-silver/40" aria-hidden="true" />

        <p className="font-sans text-[1.0625rem] sm:text-[1.125rem] text-charcoal/90 dark:text-stone leading-[1.8] font-normal">
          The word <em>Kaizen</em> (改善) originates from the belief that significant transformation does
          not come from violent upheaval or exhaustion. It comes from incremental refinement: tiny,
          deliberate adjustments made with full awareness.
        </p>

        <p className="font-sans text-[0.9375rem] text-charcoal/80 dark:text-silver/90 leading-[1.75] max-w-[42rem]">
          On the reformer, this means feeling the centimeter of deviation in your pelvic alignment,
          quieting unnecessary tension in your neck, and letting breath initiate effort. When practice is
          rooted in awareness, progress becomes permanent.
        </p>
      </div>
    </section>
  );
};
