import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const WhoCTA: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="relative w-full min-h-[26rem] md:min-h-[32rem] flex flex-col items-center justify-center text-center bg-frost dark:bg-charcoal text-ink dark:text-frost overflow-hidden px-[1.5rem] md:px-[3rem] py-[5rem] transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.whoCTA.src}
          fallbackSrc={STUDIO_IMAGES.whoCTA.fallbackSrc}
          alt={STUDIO_IMAGES.whoCTA.alt}
          overlay="none"
        />
        <div
          className="absolute inset-0 bg-frost/80 bg-gradient-to-t from-frost/95 via-frost/85 to-frost/65 dark:bg-charcoal/85 dark:from-charcoal/95 dark:via-charcoal/85 dark:to-charcoal/65 transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[48rem] mx-auto flex flex-col items-center gap-[1.5rem]">
        <span className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-charcoal dark:text-silver font-medium">
          Your Movement Practice
        </span>

        <h2 className="font-serif text-[2.25rem] sm:text-[3.25rem] md:text-[4rem] leading-[1.08] font-normal text-ink dark:text-frost tracking-[0.02em]">
          START WHERE YOU ARE. CONTINUE FROM THERE.
        </h2>

        <p className="font-sans text-[0.9375rem] sm:text-[1.0625rem] text-charcoal/90 dark:text-stone/90 max-w-[32rem] leading-[1.6]">
          No prior experience needed. Simply a willingness to pay attention and practice with intention.
        </p>

        <button
          onClick={() => navigate('/getting-started')}
          className="mt-[0.5rem] px-[2.5rem] py-[0.9375rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};
