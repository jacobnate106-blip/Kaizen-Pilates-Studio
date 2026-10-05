import React, { useState } from 'react';
import { FAQItem } from '../../types';

const FAQ_LIST: FAQItem[] = [
  {
    id: 'first-session-expect',
    question: 'What should I expect from my first session?',
    answer:
      'Expect a thoughtful, measured introduction. Your instructor will introduce you to the reformer carriage, footbar, and spring tensions before guiding you through foundational breathing and pelvic alignment exercises. The focus is on form, stability, and understanding your movement rather than rapid cardio.',
  },
  {
    id: 'what-to-wear',
    question: 'What should I wear?',
    answer:
      'Wear comfortable, breathable, form-fitting athletic apparel (such as leggings or fitted joggers and a fitted top). Clothing without loose ties, bulky zippers, or belts is recommended to avoid snagging on reformer springs. Non-slip grip socks are required on the carriage for safety and hygiene.',
  },
  {
    id: 'pilates-experience',
    question: 'Do I need Pilates experience?',
    answer:
      'Not at all. Our Foundations Reformer classes are designed specifically for beginners, while intermediate students benefit from returning to foundational mechanics. Instructors continuously offer regressions and progressions for varying movement backgrounds.',
  },
  {
    id: 'how-early-arrive',
    question: 'How early should I arrive?',
    answer:
      'For your first visit, please arrive 10 to 15 minutes before class begins. This gives you ample time to check in, stow your belongings in our secure cubbies, complete your intake information, and receive a personal equipment walkthrough.',
  },
  {
    id: 'how-to-book',
    question: 'How do I book a session?',
    answer:
      'You can browse our schedule on the website and reserve your spot directly using our booking interface. If you prefer personal assistance or want to arrange a private 1-on-1 assessment, call us at +1 703-303-6404 or email info@kaizenpilatesstudio.com.',
  },
  {
    id: 'how-to-reschedule',
    question: 'What if I need to reschedule?',
    answer:
      'You can reschedule sessions through our client booking portal or by contacting the studio coordinator with adequate advance notice. Please consult our Studio Policies for specific cancellation notice windows.',
  },
  {
    id: 'what-to-bring',
    question: 'What should I bring?',
    answer:
      'Just yourself, your grip socks, and a reusable water bottle. We provide filtered water, clean sweat towels, equipment sanitization stations, and secure personal storage cubbies for your belongings.',
  },
];

export const GettingStartedFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('first-session-expect');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-frost dark:bg-charcoal py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[80rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col gap-[3rem]">
        {/* Header */}
        <div className="flex flex-col gap-[0.75rem] max-w-[36rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
            Common Questions
          </span>
          <h2 className="font-serif text-[2.5rem] sm:text-[3.25rem] leading-[1.1] font-normal text-ink dark:text-frost">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-[0.9375rem] text-slate dark:text-stone/90 leading-[1.7]">
            Everything you need to know about getting ready for your practice at KAIZEN.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col divide-y divide-silver/40 dark:divide-slate/60 border-t border-b border-silver/40 dark:border-slate/60">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors hover:bg-stone/20 dark:hover:bg-ink/30">
                <button
                  onClick={() => toggleFAQ(item.id || item.question)}
                  aria-expanded={isOpen}
                  className="w-full py-[1.75rem] px-[1rem] md:px-[1.5rem] flex flex-row items-center justify-between text-left gap-[1.5rem] focus:outline-none focus-visible:ring-1 focus-visible:ring-slate"
                >
                  <h3 className="font-serif text-[1.25rem] sm:text-[1.5rem] text-ink dark:text-frost font-normal">
                    {item.question}
                  </h3>

                  <span
                    className={`font-sans text-[1.25rem] text-slate dark:text-silver transition-transform duration-300 transform shrink-0 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-[1rem] md:px-[1.5rem] pb-[1.75rem] pt-[0.25rem] max-w-[48rem]">
                    <p className="font-sans text-[0.9375rem] text-slate dark:text-stone leading-[1.75]">
                      {item.answer}
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
