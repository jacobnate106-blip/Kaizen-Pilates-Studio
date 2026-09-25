import React from 'react';
import { BrandImage } from '../common/BrandImage';
import { ArchMotif } from '../common/ArchMotif';
import { STUDIO_IMAGES } from '../../constants/images';

export const PoliciesHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col justify-end bg-frost dark:bg-charcoal text-ink dark:text-frost overflow-hidden transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.policiesHero.src}
          fallbackSrc={STUDIO_IMAGES.policiesHero.fallbackSrc}
          alt={STUDIO_IMAGES.policiesHero.alt}
          overlay="none"
          priority={true}
        />
        {/* 50% Brand Color Overlay (Frost in Light, Charcoal in Dark) */}
        <div
          className="absolute inset-0 bg-frost/50 dark:bg-charcoal/50 transition-colors duration-500"
          aria-hidden="true"
        />
        {/* Fade from the bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-frost/90 via-frost/40 to-transparent dark:from-charcoal/90 dark:via-charcoal/40 dark:to-transparent transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[5.5rem] flex flex-col items-start gap-[1.25rem]">
        <div className="flex flex-row items-center gap-[0.75rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal dark:text-stone font-medium">
            STUDIO POLICIES
          </span>
          <span className="text-[0.75rem] text-slate/50 dark:text-silver/60">·</span>
          <span className="font-serif text-[0.875rem] text-slate dark:text-silver tracking-[0.05em] italic">
            Respect & Consistency
          </span>
        </div>

        <h1 className="font-serif text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-[0.02em] font-normal text-ink dark:text-frost max-w-[50rem]">
          Clear expectations. A better studio experience.
        </h1>

        <p className="font-sans text-[1rem] sm:text-[1.125rem] text-charcoal/90 dark:text-stone/90 max-w-[34rem] leading-[1.6]">
          Our studio policies are designed to keep the experience clear, respectful, and consistent for
          everyone who steps through our doors.
        </p>
      </div>
    </section>
  );
};
