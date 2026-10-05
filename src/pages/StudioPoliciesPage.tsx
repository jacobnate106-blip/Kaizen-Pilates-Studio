import React, { useState } from 'react';
import { BookingButton } from '../components/common/BookingButton';
import { SectionDivider } from '../components/common/SectionDivider';
import { HeroBackground } from '../components/common/HeroBackground';

interface PolicyTopic {
  title: string;
  body: string;
}

const POLICIES: PolicyTopic[] = [
  {
    title: 'Cancellation, rescheduling, and late arrivals',
    body: 'Please cancel or reschedule at least 24 hours before your session to avoid a charge. If an emergency comes up, please contact me as soon as possible.',
  },
  {
    title: 'Package expiration, refunds, and transfers',
    body: 'Single Private Session: valid for 30 days. Five Private Sessions: valid for 3 months. Ten Private Sessions: valid for 6 months.',
  },
  {
    title: 'Payment and booking requirements',
    body: 'Sessions are booked and paid for in advance through the booking page.',
  },
  {
    title: 'Grip socks and studio etiquette',
    body: 'Grip socks are required for every session. Wear comfortable clothing that lets you move freely, and avoid exposed zippers or accessories that could catch on the equipment.',
  },
  {
    title: 'Health information and preparation for sessions',
    body: 'If you have an injury or recently had surgery, please contact me before booking so we can discuss your circumstances and any clearance or guidance from your healthcare provider.',
  },
];

export const StudioPoliciesPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglePolicy = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 2. OPENING SECTION — Immersive Hero with Dynamic Light/Dark Background Images */}
      <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col justify-end bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden transition-colors duration-500">
        <HeroBackground
          lightSrc="/images/1000088190-150kb.jpg"
          darkSrc="/images/1000088189-150kb.jpg"
          alt="KAIZEN Pilates Studio Policies"
          priority={true}
        />

        <div className="relative z-10 w-full max-w-[48rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[5.5rem] flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal/90 dark:text-stone font-semibold">
            STUDIO POLICIES
          </span>

          <h1 className="font-serif text-[3rem] sm:text-[4.25rem] md:text-[5rem] leading-[1.05] font-normal text-ink dark:text-frost">
            Before you book.
          </h1>
        </div>
      </section>

      {/* Consistent Section Divider below hero */}
      <SectionDivider />

      {/* 3. POLICY SECTIONS */}
      <section className="w-full bg-sand/30 dark:bg-charcoal/20 py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[48rem] mx-auto flex flex-col gap-[2.5rem]">
          {/* Policy Topics Stacked/Accordion in existing studio style */}
          <div className="w-full flex flex-col divide-y divide-stone/50 dark:divide-slate/50 border-y border-stone/50 dark:border-slate/50 bg-frost dark:bg-charcoal shadow-xs">
            {POLICIES.map((policy) => (
              <div key={policy.title} className="p-[1.75rem] md:p-[2.25rem] flex flex-col gap-[0.75rem]">
                <h2 className="font-serif text-[1.375rem] md:text-[1.5rem] text-ink dark:text-frost font-normal">
                  {policy.title}
                </h2>
                <p className="font-sans text-[1rem] text-slate dark:text-silver leading-[1.75]">
                  {policy.body}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-[1.5rem] flex flex-col sm:flex-row items-center justify-between gap-[1.5rem]">
            <p className="font-sans text-[0.875rem] text-slate dark:text-silver">
              Have questions regarding studio guidelines?
            </p>
            <BookingButton />
          </div>
        </div>
      </section>

      <SectionDivider />
    </div>
  );
};
