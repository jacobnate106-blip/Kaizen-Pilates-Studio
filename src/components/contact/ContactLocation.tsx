import React from 'react';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const ContactLocation: React.FC = () => {
  return (
    <section className="w-full bg-stone dark:bg-ink py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Left: Location Photo */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[34rem] aspect-[16/11] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.contactLocation.src}
              fallbackSrc={STUDIO_IMAGES.contactLocation.fallbackSrc}
              alt={STUDIO_IMAGES.contactLocation.alt}
              overlay="slate"
              overlayOpacity="opacity-25"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Arrival & Neighborhood Context */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-charcoal/70 dark:text-silver font-medium">
            Studio Arrival
          </span>

          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            Located in Lorton, Virginia
          </h2>

          <div className="w-[3rem] h-[1px] bg-charcoal/30 dark:bg-silver/40" aria-hidden="true" />

          <p className="font-sans text-[1rem] sm:text-[1.0625rem] text-charcoal/90 dark:text-stone leading-[1.75] max-w-[32rem]">
            Nestled on Saint Catherine’s Lane in Lorton, KAIZEN provides a peaceful escape from busy
            commutes and high-traffic retail strips.
          </p>

          <div className="flex flex-col gap-[0.75rem] text-[0.875rem] font-sans text-charcoal/80 dark:text-silver/80 max-w-[32rem]">
            <p>
              <strong>Parking:</strong> Complimentary, reserved studio parking is situated directly
              adjacent to the building entrance.
            </p>
            <p>
              <strong>Accessibility:</strong> Level, step-free access throughout the studio lobby,
              restrooms, and reformer training floor.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=6000+Saint+Catherine%27s+Lane+Lorton+VA+22079"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[0.5rem] inline-flex items-center gap-[0.5rem] text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-ink dark:text-frost hover:text-slate dark:hover:text-stone border-b border-ink dark:border-frost pb-[0.25rem] transition-colors"
          >
            <span>Open in Maps</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};
