import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const HomeGettingStarted: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-stone dark:bg-ink py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Left: Welcoming Imagery */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[34rem] aspect-[4/3] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.homeGettingStarted.src}
              fallbackSrc={STUDIO_IMAGES.homeGettingStarted.fallbackSrc}
              alt={STUDIO_IMAGES.homeGettingStarted.alt}
              overlay="slate"
              overlayOpacity="opacity-20"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Getting Started Guidance */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-charcoal/70 dark:text-silver font-medium">
            First Time Visitors
          </span>

          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            New to Pilates? Start here.
          </h2>

          <div className="w-[3rem] h-[1px] bg-charcoal/30 dark:bg-silver/40" aria-hidden="true" />

          <p className="font-sans text-[1rem] sm:text-[1.0625rem] text-charcoal/90 dark:text-stone leading-[1.75] max-w-[32rem]">
            You do not need to know everything before your first session. Begin where you are, learn the
            foundations, and build from there.
          </p>

          <p className="font-sans text-[0.9375rem] text-charcoal/70 dark:text-silver/70 leading-[1.65] max-w-[32rem]">
            Our instructors take time to introduce you to the reformer, walk you through carriage
            mechanics, and tailor spring resistance to your starting strength.
          </p>

          <button
            onClick={() => navigate('/getting-started')}
            className="mt-[0.5rem] px-[2.25rem] py-[0.875rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
