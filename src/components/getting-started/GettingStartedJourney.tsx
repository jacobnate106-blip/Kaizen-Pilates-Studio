import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';

interface JourneyStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  actionText?: string;
  actionPath?: '/schedule' | '/who-we-are' | '/contact';
}

const STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'LEARN ABOUT KAIZEN',
    headline: 'Understand the studio’s approach to movement.',
    description:
      'We practice Pilates as a discipline of precision, not speed or exhaustion. Take a moment to read our principles so you arrive aligned with our quiet, intentional rhythm.',
    actionText: 'Read Our Philosophy',
    actionPath: '/who-we-are',
  },
  {
    number: '02',
    title: 'CHOOSE YOUR SESSION',
    headline: 'Explore the schedule and choose an appropriate session.',
    description:
      'For your first visit, we strongly recommend our Foundations Reformer session or a private 1-on-1 assessment. These sessions dedicate time to carriage setup, footbar alignment, and spring mechanics.',
    actionText: 'Browse Sessions',
    actionPath: '/schedule',
  },
  {
    number: '03',
    title: 'ARRIVE PREPARED',
    headline: 'Come equipped with comfort and time.',
    description:
      'Plan to arrive 10 to 15 minutes before your scheduled start. Wear comfortable, form-fitting athletic wear that allows full range of motion, and bring a pair of non-slip grip socks. Water and private cubbies are provided.',
  },
  {
    number: '04',
    title: 'LISTEN TO YOUR BODY',
    headline: 'Attentive, controlled movement without comparison.',
    description:
      'Every body has a unique skeletal structure and movement history. Never force a range of motion; communicate openly with your instructor about any areas of tenderness or previous injury.',
  },
  {
    number: '05',
    title: 'KEEP GOING',
    headline: 'Focus on consistency and progress over time.',
    description:
      'Small, deliberate adjustments build profound spinal integrity and muscular balance over weeks. Commit to a regular cadence: two to three sessions weekly will reshape how you walk, stand, and live.',
    actionText: 'Contact Our Team',
    actionPath: '/contact',
  },
];

export const GettingStartedJourney: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-frost dark:bg-charcoal py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[80rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col gap-[4rem]">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-[0.75rem] max-w-[36rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
            Step-by-Step Guidance
          </span>
          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            Your First Five Steps
          </h2>
          <p className="font-sans text-[0.9375rem] text-slate dark:text-stone/90 leading-[1.7]">
            An editorial guide to preparing for your initial visits and creating a sustainable practice.
          </p>
        </div>

        {/* Editorial Journey Timeline with Photography Accents */}
        <div className="flex flex-col divide-y divide-silver/30 dark:divide-slate/60 border-t border-b border-silver/30 dark:border-slate/60">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="py-[2.5rem] flex flex-col md:flex-row items-start justify-between gap-[1.5rem] md:gap-[3rem]"
            >
              {/* Step Number & Title */}
              <div className="flex flex-row items-baseline gap-[1rem] md:w-[18rem] shrink-0">
                <span className="font-serif text-[2rem] sm:text-[2.5rem] text-slate/40 dark:text-silver/40 font-normal leading-none tabular-nums">
                  {step.number}
                </span>
                <span className="font-sans text-[0.8125rem] tracking-[0.2em] uppercase text-ink dark:text-frost font-medium">
                  {step.title}
                </span>
              </div>

              {/* Step Headline & Description */}
              <div className="flex flex-col gap-[0.75rem] flex-1 max-w-[38rem]">
                <h3 className="font-serif text-[1.5rem] sm:text-[1.75rem] text-ink dark:text-frost font-normal leading-[1.25]">
                  {step.headline}
                </h3>
                <p className="font-sans text-[0.9375rem] text-slate dark:text-stone/90 leading-[1.75]">
                  {step.description}
                </p>

                {step.actionText && step.actionPath && (
                  <button
                    onClick={() => navigate(step.actionPath!)}
                    className="self-start mt-[0.5rem] inline-flex items-center gap-[0.5rem] text-[0.75rem] font-sans tracking-[0.15em] uppercase text-ink dark:text-frost border-b border-ink dark:border-frost pb-[0.25rem] hover:text-slate dark:hover:text-stone transition-colors"
                  >
                    <span>{step.actionText}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>

              {/* Interspersed Photography on Step 2 and 4 */}
              {(idx === 1 || idx === 3) && (
                <div className="w-full md:w-[14rem] h-[10rem] shrink-0 mt-[1rem] md:mt-0 overflow-hidden hidden sm:block">
                  <BrandImage
                    src={idx === 1 ? '/images/1000088189-150kb.jpg' : '/images/1000088192-150kb.jpg'}
                    alt="Pilates studio movement detail"
                    overlay="slate"
                    overlayOpacity="opacity-25"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
