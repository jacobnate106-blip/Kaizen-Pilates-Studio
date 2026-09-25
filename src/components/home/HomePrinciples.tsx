import React from 'react';
import { BrandImage } from '../common/BrandImage';

interface PrincipleItem {
  title: string;
  tagline: string;
  description: string;
  image: string;
  fallbackSrc?: string;
  alt: string;
  overlay: 'ink' | 'charcoal' | 'slate';
}

const PRINCIPLES: PrincipleItem[] = [
  {
    title: 'PRECISION',
    tagline: 'Every movement placed and controlled.',
    description: 'Alignment is not an accident. We guide each joint and breath so that effort transforms directly into core stability.',
    image: '/images/1000088189-150kb.jpg',
    alt: 'Pilates reformer carriage and springs detail',
    overlay: 'ink',
  },
  {
    title: 'PROGRESS',
    tagline: 'Measured over weeks, not single sessions.',
    description: 'We do not ask for dramatic overnight transformations. Incremental, disciplined practice creates durable physical resilience.',
    image: '/images/1000088191-150kb.jpg',
    alt: 'Focused practitioner moving with intention on reformer',
    overlay: 'charcoal',
  },
  {
    title: 'CALM',
    tagline: 'A quiet, considered space to work in.',
    description: 'A sanctuary removed from hectic gym noise. An environment designed to give your breath and body room to focus.',
    image: '/images/1000088190-150kb.jpg',
    alt: 'Serene minimalist studio interior with morning ambient light',
    overlay: 'slate',
  },
];

export const HomePrinciples: React.FC = () => {
  return (
    <section className="w-full bg-stone dark:bg-ink py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col gap-[3rem]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[1.5rem]">
          <div className="flex flex-col gap-[0.75rem]">
            <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-charcoal/70 dark:text-silver font-medium">
              The Three Foundations
            </span>
            <h2 className="font-serif text-[2.5rem] sm:text-[3.25rem] text-ink dark:text-frost font-normal leading-[1.1]">
              The KAIZEN Approach
            </h2>
          </div>
          <p className="font-sans text-[0.9375rem] text-charcoal/80 dark:text-silver/80 max-w-[26rem] leading-[1.6]">
            Every session in our Lorton studio is guided by three non-negotiable principles.
          </p>
        </div>

        {/* Three Photographic Panels using Flexbox */}
        <div className="flex flex-col md:flex-row gap-[1.5rem] w-full">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.title}
              className="relative flex-1 min-h-[28rem] md:min-h-[34rem] flex flex-col justify-end p-[2rem] overflow-hidden bg-charcoal group"
            >
              {/* Background Image with brand overlay */}
              <div className="absolute inset-0 z-0">
                <BrandImage
                  src={principle.image}
                  fallbackSrc={principle.fallbackSrc}
                  alt={principle.alt}
                  overlay={principle.overlay}
                  overlayOpacity="opacity-40"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone/95 via-stone/60 to-transparent dark:from-ink/95 dark:via-ink/60 dark:to-transparent transition-colors duration-500" />
              </div>

              {/* Foreground Typography */}
              <div className="relative z-10 flex flex-col gap-[0.75rem] text-ink dark:text-frost">
                <span className="font-sans text-[0.75rem] tracking-[0.25em] text-slate dark:text-stone/80 font-medium">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-[2rem] tracking-[0.05em] font-normal text-ink dark:text-frost">
                  {principle.title}
                </h3>
                <p className="font-serif text-[1.125rem] text-charcoal dark:text-stone italic leading-[1.3]">
                  {principle.tagline}
                </p>
                <div className="w-[2rem] h-[1px] bg-slate/30 dark:bg-silver/40 my-[0.25rem]" aria-hidden="true" />
                <p className="font-sans text-[0.875rem] text-slate dark:text-silver/90 leading-[1.6]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
