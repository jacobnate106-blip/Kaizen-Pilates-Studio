import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const GettingStartedFirstSession: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-stone dark:bg-ink py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row-reverse items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Right: Studio Imagery */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[34rem] aspect-[4/3] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.gettingStartedFirstSession.src}
              fallbackSrc={STUDIO_IMAGES.gettingStartedFirstSession.fallbackSrc}
              alt={STUDIO_IMAGES.gettingStartedFirstSession.alt}
              overlay="charcoal"
              overlayOpacity="opacity-25"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left: First Session Guidance */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-charcoal/70 dark:text-silver font-medium">
            Your Initial Visit
          </span>

          <h2 className="font-serif text-[2.75rem] sm:text-[3.75rem] leading-[1.08] font-normal text-ink dark:text-frost">
            Begin where you are.
          </h2>

          <div className="w-[3rem] h-[1px] bg-charcoal/30 dark:bg-silver/40" aria-hidden="true" />

          <p className="font-sans text-[1.0625rem] sm:text-[1.125rem] text-charcoal/90 dark:text-stone leading-[1.75] max-w-[34rem]">
            You do not need to know everything before your first session.
          </p>

          <p className="font-sans text-[0.9375rem] text-charcoal/80 dark:text-silver/80 leading-[1.75] max-w-[34rem]">
            Every practitioner at KAIZEN was once a beginner adjusting the carriage stopper for the
            first time. Our instructors will demonstrate the apparatus, answer any questions, and ensure
            you feel supported from the moment you take off your shoes.
          </p>

          <button
            onClick={() => navigate('/schedule')}
            className="mt-[0.5rem] px-[2.25rem] py-[0.875rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
          >
            Explore Session Times
          </button>
        </div>
      </div>
    </section>
  );
};
