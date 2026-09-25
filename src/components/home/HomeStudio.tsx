import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const HomeStudio: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-stone dark:bg-ink py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col-reverse lg:flex-row items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[34rem] aspect-[16/11] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.homeStudio.src}
              fallbackSrc={STUDIO_IMAGES.homeStudio.fallbackSrc}
              alt={STUDIO_IMAGES.homeStudio.alt}
              overlay="slate"
              overlayOpacity="opacity-25"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Copy & Action */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-charcoal/70 dark:text-silver font-medium">
            The Studio Space
          </span>

          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            A space designed for focus.
          </h2>

          <div className="w-[3rem] h-[1px] bg-charcoal/30 dark:bg-silver/40" aria-hidden="true" />

          <p className="font-sans text-[1rem] sm:text-[1.0625rem] text-charcoal/90 dark:text-stone leading-[1.75] max-w-[32rem]">
            KAIZEN is designed to give movement room to breathe: a considered environment where you can
            slow down, pay attention, and build from where you are.
          </p>

          <p className="font-sans text-[0.9375rem] text-charcoal/70 dark:text-silver/70 leading-[1.65] max-w-[32rem]">
            From the acoustics to the spacing between reformers, every detail eliminates distraction so
            you can cultivate deep kinetic connection.
          </p>

          <button
            onClick={() => navigate('/who-we-are')}
            className="mt-[0.5rem] px-[2rem] py-[0.8125rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
          >
            Who We Are
          </button>
        </div>
      </div>
    </section>
  );
};
