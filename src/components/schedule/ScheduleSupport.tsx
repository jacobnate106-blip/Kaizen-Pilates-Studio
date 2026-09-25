import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const ScheduleSupport: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-stone dark:bg-ink py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Left: Studio Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[34rem] aspect-[16/11] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.scheduleSupport.src}
              fallbackSrc={STUDIO_IMAGES.scheduleSupport.fallbackSrc}
              alt={STUDIO_IMAGES.scheduleSupport.alt}
              overlay="charcoal"
              overlayOpacity="opacity-20"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: First Session Guidance */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-charcoal/70 dark:text-silver font-medium">
            Preparation & Arrival
          </span>

          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            Your first session? Begin here.
          </h2>

          <div className="w-[3rem] h-[1px] bg-charcoal/30 dark:bg-silver/40" aria-hidden="true" />

          <p className="font-sans text-[1rem] sm:text-[1.0625rem] text-charcoal/90 dark:text-stone leading-[1.75] max-w-[32rem]">
            Whether you have never touched a reformer or are transitioning from mat work, our introductory
            guidelines ensure you arrive confident, relaxed, and ready to focus.
          </p>

          <p className="font-sans text-[0.9375rem] text-charcoal/70 dark:text-silver/70 leading-[1.65] max-w-[32rem]">
            Learn about what to wear, how our spring systems function, and what to expect during your first
            50 minutes of guided instruction.
          </p>

          <button
            onClick={() => navigate('/getting-started')}
            className="mt-[0.5rem] px-[2.25rem] py-[0.875rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
          >
            Getting Started
          </button>
        </div>
      </div>
    </section>
  );
};
