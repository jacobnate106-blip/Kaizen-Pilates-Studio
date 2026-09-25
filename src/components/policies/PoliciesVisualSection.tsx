import React from 'react';
import { BrandImage } from '../common/BrandImage';
import { ArchMotif } from '../common/ArchMotif';
import { STUDIO_IMAGES } from '../../constants/images';

export const PoliciesVisualSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[28rem] md:min-h-[36rem] flex flex-col items-center justify-center text-center bg-stone dark:bg-charcoal text-ink dark:text-frost overflow-hidden px-[1.5rem] md:px-[3rem] py-[5rem] transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.policiesVisual.src}
          fallbackSrc={STUDIO_IMAGES.policiesVisual.fallbackSrc}
          alt={STUDIO_IMAGES.policiesVisual.alt}
          overlay="none"
        />
        <div
          className="absolute inset-0 bg-stone/80 bg-gradient-to-t from-stone/95 via-stone/85 to-stone/65 dark:bg-charcoal/85 dark:from-charcoal/95 dark:via-charcoal/85 dark:to-charcoal/65 transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[48rem] mx-auto flex flex-col items-center gap-[1.5rem]">
        <span className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-charcoal dark:text-silver font-medium">
          Intentional Environment
        </span>

        <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4.25rem] leading-[1.08] font-normal text-ink dark:text-frost tracking-[0.02em]">
          A considered space begins with considered expectations.
        </h2>

        <div className="w-[3rem] h-[1px] bg-slate/40 dark:bg-silver/40" aria-hidden="true" />

        <p className="font-sans text-[1rem] sm:text-[1.125rem] text-charcoal/90 dark:text-stone/90 max-w-[34rem] leading-[1.7]">
          When we step onto the reformer with shared mutual care, the studio becomes a sanctuary where
          every student can reach their highest level of presence.
        </p>
      </div>
    </section>
  );
};
