import React from 'react';
import { ArchMotif } from '../common/ArchMotif';

export const HomeEditorial: React.FC = () => {
  return (
    <section className="w-full bg-frost dark:bg-charcoal py-[6rem] md:py-[8rem] border-y border-stone/50 dark:border-slate/50 transition-colors">
      <div className="w-full max-w-[80rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col items-center justify-center text-center gap-[2rem]">
        {/* Subtle Architectural Arch */}
        <div className="flex justify-center opacity-70">
          <ArchMotif className="w-16 h-24 text-slate/50 dark:text-silver/50" />
        </div>

        {/* Large Editorial Statement */}
        <blockquote className="font-serif text-[2.75rem] sm:text-[4.25rem] lg:text-[5.5rem] leading-[1.05] tracking-[0.02em] font-normal text-ink dark:text-frost max-w-[60rem]">
          A LITTLE STRONGER THAN LAST WEEK.
        </blockquote>

        <p className="font-sans text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
          Continuous, intentional improvement · 改善
        </p>
      </div>
    </section>
  );
};
