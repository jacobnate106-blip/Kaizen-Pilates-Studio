import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { ArchMotif } from '../common/ArchMotif';
import { STUDIO_IMAGES } from '../../constants/images';

interface HomeCTAProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  destination?: '/getting-started' | '/schedule' | '/contact';
}

export const HomeCTA: React.FC<HomeCTAProps> = ({
  headline = 'YOUR NEXT SESSION IS READY WHEN YOU ARE.',
  subtext = 'Experience intentional movement in a quiet, architectural studio setting in Lorton, VA.',
  buttonText = 'Get Started',
  destination = '/getting-started',
}) => {
  const { navigate } = useRouter();

  return (
    <section className="relative w-full min-h-[26rem] md:min-h-[32rem] flex flex-col items-center justify-center text-center bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden px-[1.5rem] md:px-[3rem] py-[5rem] transition-colors duration-500">
      {/* Background Image with Dynamic Light/Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <BrandImage
          src={STUDIO_IMAGES.homeCTA.src}
          fallbackSrc={STUDIO_IMAGES.homeCTA.fallbackSrc}
          alt={STUDIO_IMAGES.homeCTA.alt}
          overlay="none"
        />
        <div
          className="absolute inset-0 bg-stone/80 bg-gradient-to-t from-stone/95 via-stone/85 to-stone/65 dark:bg-ink/85 dark:from-ink/95 dark:via-ink/85 dark:to-ink/65 transition-colors duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[48rem] mx-auto flex flex-col items-center gap-[1.5rem]">
        <span className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-charcoal dark:text-stone font-medium">
          Begin Your Practice
        </span>

        <h2 className="font-serif text-[2.25rem] sm:text-[3.25rem] md:text-[4rem] leading-[1.08] font-normal text-ink dark:text-frost tracking-[0.02em]">
          {headline}
        </h2>

        <p className="font-sans text-[0.9375rem] sm:text-[1.0625rem] text-charcoal/90 dark:text-stone/90 max-w-[32rem] leading-[1.6]">
          {subtext}
        </p>

        <button
          onClick={() => navigate(destination)}
          className="mt-[0.5rem] px-[2.5rem] py-[0.9375rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};
