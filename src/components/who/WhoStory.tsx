import React from 'react';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const WhoStory: React.FC = () => {
  return (
    <section className="w-full bg-frost dark:bg-charcoal text-ink dark:text-frost py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Story Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <div className="flex flex-row items-center gap-[0.75rem]">
            <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
              Our Studio Story
            </span>
          </div>

          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            We teach the way we want movement to feel.
          </h2>

          <p className="font-serif text-[1.375rem] text-slate dark:text-stone italic">
            Clear. Considered. Focused.
          </p>

          <div className="w-[3rem] h-[1px] bg-stone dark:bg-slate" aria-hidden="true" />

          <p className="font-sans text-[1rem] sm:text-[1.0625rem] text-slate dark:text-stone leading-[1.8] max-w-[34rem]">
            KAIZEN Pilates Studio is built around the idea that progress does not have to be dramatic to
            be meaningful. We focus on the details: how you move, how you control each position, and how
            those small improvements build over time.
          </p>

          <p className="font-sans text-[0.9375rem] text-slate/80 dark:text-silver/80 leading-[1.75] max-w-[34rem]">
            In a world that often measures exercise by exhaustion or speed, KAIZEN offers a different
            measure: precision. We teach you to feel where your limbs are in space, how your breath
            supports your spine, and how disciplined resistance leads to lasting strength.
          </p>
        </div>

        {/* Story Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[32rem] aspect-[4/5] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.whoStory.src}
              fallbackSrc={STUDIO_IMAGES.whoStory.fallbackSrc}
              alt={STUDIO_IMAGES.whoStory.alt}
              overlay="slate"
              overlayOpacity="opacity-20"
              archFrame={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
