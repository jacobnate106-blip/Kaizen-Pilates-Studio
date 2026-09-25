import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { ArchMotif } from '../common/ArchMotif';
import { STUDIO_IMAGES } from '../../constants/images';

export const HomeHero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[92vh] flex flex-col justify-end bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.homeHero.src}
          fallbackSrc={STUDIO_IMAGES.homeHero.fallbackSrc}
          alt={STUDIO_IMAGES.homeHero.alt}
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

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[6rem] flex flex-col items-start gap-[1.75rem]">
        {/* Eyebrow */}
        <div className="flex flex-row items-center gap-[0.75rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal dark:text-stone font-medium">
            KAIZEN PILATES STUDIO
          </span>
          <span className="text-[0.75rem] text-slate/50 dark:text-silver/60">·</span>
          <span className="font-serif text-[0.875rem] text-slate dark:text-silver tracking-[0.05em] italic">
            改善 · Change for the better
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-[1.02] tracking-[0.02em] font-normal text-ink dark:text-frost max-w-[52rem]">
          MOVE WITH PURPOSE.
        </h1>

        {/* Body Description */}
        <p className="font-sans text-[1rem] sm:text-[1.125rem] text-charcoal/90 dark:text-stone/90 max-w-[32rem] leading-[1.6] font-normal">
          Pilates built around precision, progress, and a calmer approach to movement.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[1rem] pt-[0.75rem] w-full sm:w-auto">
          <button
            onClick={() => navigate('/getting-started')}
            className="px-[2rem] py-[0.875rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/schedule')}
            className="px-[2rem] py-[0.875rem] border border-ink/60 text-ink hover:bg-ink/10 dark:border-frost/60 dark:text-frost dark:hover:bg-frost/10 text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-silver"
          >
            View Schedule
          </button>
        </div>
      </div>
    </section>
  );
};
