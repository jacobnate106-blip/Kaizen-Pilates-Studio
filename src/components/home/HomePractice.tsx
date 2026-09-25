import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const HomePractice: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="relative w-full min-h-[30rem] md:min-h-[38rem] flex flex-col items-center justify-center text-center bg-stone dark:bg-charcoal text-ink dark:text-frost overflow-hidden px-[1.5rem] md:px-[3rem] py-[5rem] transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.homePractice.src}
          fallbackSrc={STUDIO_IMAGES.homePractice.fallbackSrc}
          alt={STUDIO_IMAGES.homePractice.alt}
          overlay="none"
        />
        <div
          className="absolute inset-0 bg-stone/80 bg-gradient-to-t from-stone/95 via-stone/85 to-stone/65 dark:bg-charcoal/85 dark:from-charcoal/95 dark:via-charcoal/85 dark:to-charcoal/60 transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Center Editorial Content */}
      <div className="relative z-10 w-full max-w-[48rem] mx-auto flex flex-col items-center gap-[1.75rem]">
        <span className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-charcoal dark:text-silver font-medium">
          Movement Philosophy
        </span>

        <h2 className="font-serif text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] leading-[1.05] text-ink dark:text-frost font-normal">
          A quieter way to get stronger.
        </h2>

        <div className="w-[3rem] h-[1px] bg-slate/40 dark:bg-silver/40" aria-hidden="true" />

        <p className="font-sans text-[1rem] sm:text-[1.125rem] text-charcoal/90 dark:text-stone/90 leading-[1.7] max-w-[36rem]">
          Our approach focuses on control, awareness, and consistent practice. The goal is not to rush
          through movement, but to understand it.
        </p>

        <button
          onClick={() => navigate('/who-we-are')}
          className="mt-[0.5rem] px-[2.25rem] py-[0.875rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
        >
          Explore The Studio
        </button>
      </div>
    </section>
  );
};
