import React from 'react';
import { ArchMotif } from '../common/ArchMotif';

export const ContactInfo: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-[2.5rem]">
      <div className="flex flex-col gap-[0.75rem]">
        <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
          Studio Details
        </span>
        <h2 className="font-serif text-[2.5rem] sm:text-[3rem] leading-[1.1] font-normal text-ink dark:text-frost">
          Visit or Reach Out
        </h2>
        <p className="font-sans text-[0.9375rem] text-slate dark:text-stone/90 leading-[1.7] max-w-[32rem]">
          We welcome new practitioners to tour the studio by appointment or discuss personalized
          reformer instruction.
        </p>
      </div>

      <div className="w-[3rem] h-[1px] bg-silver/40 dark:bg-slate/60" />

      {/* Info Blocks */}
      <div className="flex flex-col gap-[2rem]">
        {/* Address */}
        <div className="flex flex-col gap-[0.375rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
            Location
          </span>
          <p className="font-serif text-[1.25rem] text-ink dark:text-frost font-medium">
            KAIZEN Pilates Studio
          </p>
          <p className="font-sans text-[0.9375rem] text-slate dark:text-stone">
            6000 Saint Catherine’s Lane
          </p>
          <p className="font-sans text-[0.9375rem] text-slate dark:text-stone">
            Lorton, VA 22079
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-[0.75rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
            Telephone & Email
          </span>
          <div className="flex flex-col gap-[0.375rem] font-sans text-[0.9375rem]">
            <a
              href="tel:+17033036404"
              className="text-ink dark:text-frost hover:text-slate dark:hover:text-stone transition-colors font-medium"
            >
              +1 703-303-6404
            </a>
            <a
              href="mailto:info@kaizenpilatesstudio.com"
              className="text-ink dark:text-frost hover:text-slate dark:hover:text-stone transition-colors"
            >
              info@kaizenpilatesstudio.com
            </a>
            <span className="text-slate dark:text-silver text-[0.8125rem]">
              www.kaizenpilatesstudio.com
            </span>
          </div>
        </div>

        {/* Studio Quiet Notice */}
        <div className="p-[1.25rem] bg-stone/30 dark:bg-ink/40 border border-silver/30 dark:border-slate/60 flex flex-row items-center gap-[1rem]">
          <ArchMotif className="w-8 h-12 text-slate/60 dark:text-silver/60 shrink-0" />
          <p className="font-sans text-[0.8125rem] text-slate dark:text-silver leading-[1.6]">
            To protect practitioner concentration, our doors open 15 minutes prior to scheduled session times.
          </p>
        </div>
      </div>
    </div>
  );
};
