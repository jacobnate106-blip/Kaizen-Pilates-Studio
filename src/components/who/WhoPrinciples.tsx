import React from 'react';
import { BrandImage } from '../common/BrandImage';

interface PrincipleDetail {
  number: string;
  title: string;
  headline: string;
  body: string;
  image: string;
  fallbackSrc?: string;
  alt: string;
  reverse?: boolean;
}

const PRINCIPLE_DETAILS: PrincipleDetail[] = [
  {
    number: '01',
    title: 'PRECISION',
    headline: 'Every movement placed and controlled.',
    body: 'In classical Pilates, Joseph Pilates called his work "Contrology", the art of control. At KAIZEN, precision means no mindless repetitions. We calibrate spring resistance, track joint stacking, and ensure every muscle acts with purposeful economy.',
    image: '/images/1000088189-150kb.jpg',
    alt: 'Macro photograph of reformer spring precision mechanics',
  },
  {
    number: '02',
    title: 'PROGRESS',
    headline: 'Measured over weeks, not single sessions.',
    body: 'True physical confidence does not arrive in a single workout. It accumulates over continuous practice. We guide students through steady progressions: from mastering core breath stabilization to complex reformer sequences and suspended carriage balance.',
    image: '/images/1000088191-150kb.jpg',
    alt: 'Pilates student practicing movement with steady focus',
    reverse: true,
  },
  {
    number: '03',
    title: 'CALM',
    headline: 'A quiet, considered space to work in.',
    body: 'Mental chatter fades when you are challenged to move with absolute presence. Our studio in Lorton is intentionally sparse, serene, and illuminated by soft natural light. There are no loud beats or chaotic crowds, only the sound of carriage gliding on tracks and focused breathing.',
    image: '/images/1000088193-150kb.jpg',
    alt: 'Calm studio space with natural wood and minimal architectural details',
  },
];

export const WhoPrinciples: React.FC = () => {
  return (
    <section className="w-full bg-stone dark:bg-charcoal py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col gap-[5rem]">
        <div className="flex flex-col items-center text-center gap-[0.75rem] max-w-[36rem] mx-auto">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-charcoal/70 dark:text-silver font-medium">
            Core Tenets
          </span>
          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            How We Practice
          </h2>
          <p className="font-sans text-[0.9375rem] text-charcoal/80 dark:text-silver/80">
            Three interconnected pillars that shape our instruction and student experience.
          </p>
        </div>

        <div className="flex flex-col gap-[4rem] md:gap-[6rem]">
          {PRINCIPLE_DETAILS.map((principle) => (
            <div
              key={principle.title}
              className={`flex flex-col ${
                principle.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center justify-between gap-[2.5rem] lg:gap-[5rem]`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-[34rem] aspect-[16/11] overflow-hidden">
                  <BrandImage
                    src={principle.image}
                    fallbackSrc={principle.fallbackSrc}
                    alt={principle.alt}
                    overlay="slate"
                    overlayOpacity="opacity-20"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.25rem]">
                <div className="flex flex-row items-center gap-[0.75rem]">
                  <span className="font-sans text-[0.75rem] tracking-[0.2em] font-medium text-slate dark:text-silver">
                    {principle.number}
                  </span>
                  <span className="text-[0.75rem] text-slate/50 dark:text-silver/60">·</span>
                  <span className="font-sans text-[0.75rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
                    {principle.title}
                  </span>
                </div>

                <h3 className="font-serif text-[2rem] sm:text-[2.75rem] leading-[1.15] font-normal text-ink dark:text-frost">
                  {principle.headline}
                </h3>

                <div className="w-[2.5rem] h-[1px] bg-charcoal/20 dark:bg-silver/30" aria-hidden="true" />

                <p className="font-sans text-[0.9375rem] sm:text-[1rem] text-charcoal/90 dark:text-stone leading-[1.75] max-w-[34rem]">
                  {principle.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
