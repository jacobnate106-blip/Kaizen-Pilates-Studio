import React from 'react';
import { BrandImage } from '../common/BrandImage';
import { ArchMotif } from '../common/ArchMotif';
import { STUDIO_IMAGES } from '../../constants/images';

export const GettingStartedHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col justify-end bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.gettingStartedHero.src}
          fallbackSrc={STUDIO_IMAGES.gettingStartedHero.fallbackSrc}
          alt={STUDIO_IMAGES.gettingStartedHero.alt}
          overlay="none"
          priority={true}
        />
        {/* 50% Brand Color Overlay (Stone in Light, Ink in Dark) */}
        <div
          className="absolute inset-0 bg-stone/50 dark:bg-ink/50 transition-colors duration-500"
          aria-hidden="true"
        />
        {/* Fade from the bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-stone/90 via-stone/40 to-transparent dark:from-ink/90 dark:via-ink/40 dark:to-transparent transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[5.5rem] flex flex-col items-start gap-[1.25rem]">
        <div className="flex flex-row items-center gap-[0.75rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal dark:text-stone font-medium">
            GETTING STARTED
          </span>
          <span className="text-[0.75rem] text-slate/50 dark:text-silver/60">·</span>
          <span className="font-serif text-[0.875rem] text-slate dark:text-silver tracking-[0.05em] italic">
            Your First Step
          </span>
        </div>

        <h1 className="font-serif text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-[0.02em] font-normal text-ink dark:text-frost max-w-[50rem]">
          New here? Start here.
        </h1>

        <p className="font-sans text-[1rem] sm:text-[1.125rem] text-charcoal/90 dark:text-stone/90 max-w-[34rem] leading-[1.6]">
          You do not need prior experience or flexibility to begin. We meet you exactly where you are,
          teaching foundational movement with patience, precision, and personal care.
        </p>
      </div>
    </section>
  );
};
