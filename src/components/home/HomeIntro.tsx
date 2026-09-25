import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

export const HomeIntro: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-frost dark:bg-charcoal text-ink dark:text-frost py-[4.5rem] md:py-[6.5rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Left Column: Editorial Statement */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <div className="flex flex-row items-center gap-[0.75rem]">
            <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
              The Philosophy
            </span>
          </div>

          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.08] font-normal text-ink dark:text-frost">
            Small changes. Meaningful progress.
          </h2>

          <div className="w-[3rem] h-[1px] bg-stone dark:bg-slate my-[0.5rem]" aria-hidden="true" />

          <p className="font-sans text-[1rem] sm:text-[1.0625rem] text-slate dark:text-stone leading-[1.75] font-normal max-w-[34rem]">
            Kaizen means change for the better. At KAIZEN Pilates Studio, we bring that idea into every
            session: small, precise changes repeated with intention until they become meaningful progress.
          </p>

          <p className="font-sans text-[0.9375rem] text-slate/80 dark:text-silver/80 leading-[1.7] max-w-[34rem]">
            Movement here is deliberate, individual, and unhurried. We do not chase exhaustion; we build
            coordination, spinal integrity, and genuine neuromuscular control.
          </p>

          <button
            onClick={() => navigate('/who-we-are')}
            className="mt-[1rem] inline-flex items-center gap-[0.75rem] text-[0.8125rem] font-medium tracking-[0.15em] uppercase text-ink dark:text-frost hover:text-slate dark:hover:text-stone border-b border-ink dark:border-frost pb-[0.25rem] transition-colors"
          >
            <span>Learn About Our Studio</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Right Column: Editorial Pilates Photography */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-[32rem] aspect-[4/5] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.homeIntro.src}
              fallbackSrc={STUDIO_IMAGES.homeIntro.fallbackSrc}
              alt={STUDIO_IMAGES.homeIntro.alt}
              overlay="slate"
              overlayOpacity="opacity-20"
              archFrame={true}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-[1rem] text-[0.75rem] font-sans text-slate/60 dark:text-silver/60 tracking-[0.08em] text-center">
            Precise alignment · Continuous adjustment · Focused practice
          </p>
        </div>
      </div>
    </section>
  );
};
