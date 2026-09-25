import React, { useState } from 'react';
import { PolicyItem } from '../../types';

const STUDIO_POLICIES: PolicyItem[] = [
  {
    id: 'booking',
    title: 'Booking & Reservations',
    summary: 'Advance booking procedures and reservation windows for group and private sessions.',
    details:
      'All sessions must be reserved in advance through our online schedule or directly with our studio coordinator. To preserve spatial calm and individual instructor attention, walk-in availability is not guaranteed. Booking windows open on a weekly basis.',
  },
  {
    id: 'cancellations',
    title: 'Cancellations',
    summary: 'Standard studio notice period and cancellation guidelines.',
    details:
      'We recognize unexpected schedule changes occur. To respect both instructor preparation and fellow students on our waitlist, please provide advance notice prior to your scheduled class. Specific window and cancellation fee parameters are confirmed upon membership registration.',
  },
  {
    id: 'rescheduling',
    title: 'Rescheduling',
    summary: 'Moving your session to another available day or time.',
    details:
      'Sessions may be transferred to alternative open slots within the same active calendar week, subject to carriage availability. Please initiate rescheduling requests through your client portal or by contacting info@kaizenpilatesstudio.com.',
  },
  {
    id: 'late-arrivals',
    title: 'Late Arrivals',
    summary: 'Entry policy once class warm-up has commenced.',
    details:
      'Because the first 10 minutes of every class establish vital pelvic alignment and reformer spring safety checks, students arriving after warm-up may be asked to observe or reschedule to protect personal physical safety and studio quiet.',
  },
  {
    id: 'etiquette',
    title: 'Studio Etiquette & Footwear',
    summary: 'Grip socks, footwear requirements, and device etiquette.',
    details:
      'Grip socks with non-slip soles are required at all times on the reformers for hygiene, carriage traction, and joint alignment. We ask that mobile phones remain silenced and stowed in the personal cubbies upon entering the movement space.',
  },
  {
    id: 'health-safety',
    title: 'Health & Safety Considerations',
    summary: 'Injury disclosures, physical modifications, and studio sanitation.',
    details:
      'Please inform your instructor before class regarding recent injuries, spinal sensitivities, or pregnancy so springs and straps can be modified safely. All reformers and leather straps are thoroughly sanitized with hospital-grade, botanical disinfectant between sessions.',
  },
  {
    id: 'payments',
    title: 'Payments & Membership Terms',
    summary: 'Class packages, memberships, and payment processing.',
    details:
      'We accept all major credit and debit payment methods. Session packages and recurring memberships are non-transferable and activated on the date of your first attended class. Tailored packages can be discussed with studio management.',
  },
  {
    id: 'first-time',
    title: 'First-Time Visitors',
    summary: 'Arrival expectations for your very first KAIZEN session.',
    details:
      'First-time visitors should arrive 10 to 15 minutes before their scheduled time to complete our orientation intake, meet the instructor, and receive a guided introduction to carriage carriage tension and strap adjustments.',
  },
];

export const PoliciesAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('booking');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-frost dark:bg-charcoal py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[80rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col gap-[3rem]">
        {/* Intro statement */}
        <div className="flex flex-col gap-[1rem] max-w-[36rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
            Studio Standards
          </span>
          <h2 className="font-serif text-[2.5rem] sm:text-[3.25rem] leading-[1.1] font-normal text-ink dark:text-frost">
            Respect for the Space & Practice
          </h2>
          <p className="font-sans text-[0.9375rem] text-slate dark:text-stone/90 leading-[1.7]">
            Our studio policies are designed to keep the experience clear, respectful, and consistent for
            everyone. By maintaining these shared agreements, we preserve a tranquil environment where
            real progress can happen.
          </p>
        </div>

        {/* Accordion Panels alternating visual surfaces */}
        <div className="flex flex-col divide-y divide-silver/40 dark:divide-slate/60 border-t border-b border-silver/40 dark:border-slate/60">
          {STUDIO_POLICIES.map((policy, index) => {
            const isOpen = openId === policy.id;
            // Alternating surface tint for rhythm
            const surfaceBg =
              index % 2 === 0
                ? 'hover:bg-stone/20 dark:hover:bg-ink/30'
                : 'bg-stone/10 dark:bg-ink/20 hover:bg-stone/30 dark:hover:bg-ink/40';

            return (
              <div key={policy.id} className={`transition-colors ${surfaceBg}`}>
                <button
                  onClick={() => toggleAccordion(policy.id)}
                  aria-expanded={isOpen}
                  className="w-full py-[1.75rem] px-[1rem] md:px-[1.5rem] flex flex-row items-center justify-between text-left gap-[1.5rem] focus:outline-none focus-visible:ring-1 focus-visible:ring-slate"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-[0.5rem] sm:gap-[2rem] flex-1">
                    <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium w-[2rem] shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-[1.375rem] sm:text-[1.625rem] text-ink dark:text-frost font-normal">
                      {policy.title}
                    </h3>
                  </div>

                  <span
                    className={`font-sans text-[1.25rem] text-slate dark:text-silver transition-transform duration-300 transform ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-[1rem] md:px-[1.5rem] pb-[1.75rem] pt-[0.25rem] flex flex-col gap-[0.75rem] pl-[1rem] sm:pl-[4.5rem] max-w-[48rem]">
                    <p className="font-sans text-[0.875rem] font-medium text-slate dark:text-silver tracking-[0.02em]">
                      {policy.summary}
                    </p>
                    <p className="font-sans text-[0.9375rem] text-slate/90 dark:text-stone leading-[1.75]">
                      {policy.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
