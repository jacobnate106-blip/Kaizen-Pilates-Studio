import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { BookingButton } from '../components/common/BookingButton';
import { SectionDivider } from '../components/common/SectionDivider';
import { HeroBackground } from '../components/common/HeroBackground';
import { BrandImage } from '../components/common/BrandImage';
import { STUDIO_IMAGES } from '../constants/images';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    question: 'Do I need experience?',
    answer:
      'No. Beginners and experienced Pilates students are welcome. Your instruction will reflect your experience and goals.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Comfortable clothing that lets you move freely and grip socks. Avoid exposed zippers or accessories that could catch on the equipment.',
  },
  {
    question: 'How often should I attend?',
    answer:
      'We\'ll discuss a frequency that works with your goals and schedule. Regular practice helps you build on what you learn.',
  },
  {
    question: 'What if I have an injury or recently had surgery?',
    answer:
      'Please contact me before booking so we can discuss your circumstances and any clearance or guidance from your healthcare provider.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Please cancel or reschedule at least 24 hours before your session to avoid a charge. If an emergency comes up, please contact me as soon as possible.',
  },
];

export const PrivateSessionsPage: React.FC = () => {
  const { navigate } = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 2. OPENING SECTION — Immersive Hero with Dynamic Light/Dark Background Images */}
      <section className="relative w-full min-h-[62vh] md:min-h-[72vh] flex flex-col justify-end bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden transition-colors duration-500">
        <HeroBackground
          lightSrc="/images/1000088189-150kb.jpg"
          darkSrc="/images/1000088193-150kb.jpg"
          alt="Classical Pilates Private Sessions at KAIZEN"
          priority={true}
        />

        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4.5rem] md:py-[6rem] flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal/90 dark:text-stone font-semibold">
            PRIVATE CLASSICAL PILATES
          </span>

          <h1 className="font-serif text-[3rem] sm:text-[4.25rem] md:text-[5rem] leading-[1.05] font-normal text-ink dark:text-frost max-w-[50rem]">
            Sessions built around you.
          </h1>

          <p className="font-sans text-[1.0625rem] md:text-[1.1875rem] leading-[1.65] text-charcoal/95 dark:text-stone/95 max-w-[38rem]">
            One-on-one instruction shaped around your body, your goals, and your experience. Whether you're new to Pilates or deepening your practice, you'll have my full attention and guidance throughout.
          </p>

          <div className="pt-[0.5rem]">
            <BookingButton />
          </div>
        </div>
      </section>

      {/* Consistent Section Divider below hero */}
      <SectionDivider />

      {/* 3. WHAT YOUR SESSIONS LOOK LIKE */}
      <section className="w-full bg-sand/30 dark:bg-charcoal/20 py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[80rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[3rem] lg:gap-[4.5rem] items-center">
          {/* Studio and equipment photo from uploaded images */}
          <div className="lg:col-span-6 order-2 lg:order-1 w-full">
            <div className="w-full aspect-[16/11] overflow-hidden shadow-xs">
              <BrandImage
                src={STUDIO_IMAGES.scheduleHero.src}
                fallbackSrc={STUDIO_IMAGES.scheduleHero.fallbackSrc}
                alt="The studio apparatus and serene classical equipment layout"
                overlay="slate"
                overlayOpacity="opacity-20"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-[1.5rem]">
            <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
              INDIVIDUAL ATTENTION. ROOM TO GROW.
            </span>

            <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
              We begin with you.
            </h2>

            <div className="flex flex-col gap-[1.25rem] font-sans text-[1rem] md:text-[1.0625rem] leading-[1.75] text-slate dark:text-silver max-w-[36rem]">
              <p>
                We'll take time to understand what brings you to Pilates, how you feel in your body, and what you'd like to work toward.
              </p>
              <p>
                Using different apparatuses, I'll guide you through the classical Pilates system that will be suited to your experience. Each session builds on what we learn together, with time to ask questions, refine movements, and explore new challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. YOUR FIRST SESSION */}
      <section className="w-full bg-frost dark:bg-ink py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[48rem] mx-auto flex flex-col items-start gap-[1.75rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
            YOUR INTRODUCTION TO KAIZEN
          </span>

          <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
            Come as you are.
          </h2>

          <div className="flex flex-col gap-[1.25rem] font-sans text-[1rem] md:text-[1.0625rem] leading-[1.75] text-slate dark:text-silver">
            <p>
              Your introductory session begins with a conversation about your goals and movement history. We'll explore the equipment and move through exercises that help me understand your starting point.
            </p>
            <p>
              You don't need previous Pilates experience. This is an opportunity to experience my teaching, ask questions, and discuss how you'd like to continue.
            </p>
          </div>

          <div className="w-full p-[2rem] bg-sand/40 dark:bg-charcoal/30 border border-stone/60 dark:border-slate/60 flex flex-col sm:flex-row sm:items-center justify-between gap-[1.5rem] my-[0.5rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex items-center gap-[1rem] text-[0.9375rem] font-sans">
                <span className="text-slate dark:text-silver">Duration:</span>
                <span className="text-ink dark:text-frost font-medium">50 Minutes</span>
              </div>
              <div className="flex items-center gap-[1rem] text-[0.9375rem] font-sans">
                <span className="text-slate dark:text-silver">Introductory price:</span>
                <span className="text-ink dark:text-frost font-medium text-[1.0625rem]">$65</span>
              </div>
            </div>

            <BookingButton />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. PRICING & PACKAGES */}
      <section className="w-full bg-sand/30 dark:bg-charcoal/20 py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[56rem] mx-auto flex flex-col items-start gap-[2rem]">
          <div className="flex flex-col items-start gap-[0.75rem]">
            <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
              CONTINUE YOUR PRACTICE
            </span>

            <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
              Find your rhythm.
            </h2>

            <p className="font-sans text-[1rem] md:text-[1.0625rem] leading-[1.7] text-slate dark:text-silver max-w-[36rem]">
              Choose individual sessions or a package to support consistent practice.
            </p>
          </div>

          {/* Pricing Table with expiration dates displayed alongside each option per client instruction */}
          <div className="w-full overflow-x-auto border border-stone/60 dark:border-slate/60 bg-frost dark:bg-charcoal">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone/60 dark:border-slate/60 bg-sand/50 dark:bg-charcoal/80">
                  <th className="py-[1rem] px-[1.5rem] font-sans text-[0.8125rem] tracking-[0.1em] uppercase font-semibold text-ink dark:text-frost">
                    Option
                  </th>
                  <th className="py-[1rem] px-[1.5rem] font-sans text-[0.8125rem] tracking-[0.1em] uppercase font-semibold text-ink dark:text-frost">
                    Price
                  </th>
                  <th className="py-[1rem] px-[1.5rem] font-sans text-[0.8125rem] tracking-[0.1em] uppercase font-semibold text-ink dark:text-frost">
                    Package Expiration
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone/40 dark:divide-slate/50 font-sans text-[0.9375rem]">
                <tr>
                  <td className="py-[1.25rem] px-[1.5rem] font-medium text-ink dark:text-frost">
                    Single Private Session
                  </td>
                  <td className="py-[1.25rem] px-[1.5rem] font-medium text-ink dark:text-frost">
                    $95
                  </td>
                  <td className="py-[1.25rem] px-[1.5rem] text-slate dark:text-silver">
                    Valid for 30 days
                  </td>
                </tr>
                <tr>
                  <td className="py-[1.25rem] px-[1.5rem] font-medium text-ink dark:text-frost">
                    Five Private Sessions
                  </td>
                  <td className="py-[1.25rem] px-[1.5rem] font-medium text-ink dark:text-frost">
                    $450
                  </td>
                  <td className="py-[1.25rem] px-[1.5rem] text-slate dark:text-silver">
                    Valid for 3 months
                  </td>
                </tr>
                <tr>
                  <td className="py-[1.25rem] px-[1.5rem] font-medium text-ink dark:text-frost">
                    Ten Private Sessions
                  </td>
                  <td className="py-[1.25rem] px-[1.5rem] font-medium text-ink dark:text-frost">
                    $850
                  </td>
                  <td className="py-[1.25rem] px-[1.5rem] text-slate dark:text-silver">
                    Valid for 6 months
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note beneath the table */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[1rem] w-full pt-[0.25rem]">
            <p className="font-serif text-[1.0625rem] italic text-slate dark:text-silver">
              All sessions are one-on-one with Luwam.
            </p>

            {/* Link: View Studio Policies placed directly beneath pricing section */}
            <button
              onClick={() => navigate('/studio-policies')}
              className="font-sans text-[0.875rem] font-medium tracking-[0.08em] text-ink dark:text-frost border-b border-ink dark:border-frost pb-0.5 hover:opacity-75 transition-opacity self-start sm:self-auto"
            >
              View Studio Policies →
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. COMMON QUESTIONS */}
      <section className="w-full bg-frost dark:bg-ink py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[48rem] mx-auto flex flex-col items-start gap-[2.5rem]">
          <div className="flex flex-col items-start gap-[0.75rem]">
            <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
              BEFORE YOU VISIT
            </span>
            <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
              Common Questions
            </h2>
          </div>

          <div className="w-full flex flex-col divide-y divide-stone/50 dark:divide-slate/50 border-y border-stone/50 dark:border-slate/50">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="py-[1.25rem]">
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-[1rem] text-left py-[0.5rem] focus:outline-none group"
                  >
                    <h3 className="font-serif text-[1.25rem] md:text-[1.375rem] text-ink dark:text-frost group-hover:opacity-80 transition-opacity">
                      {faq.question}
                    </h3>
                    <span className="text-[1.25rem] text-slate dark:text-silver shrink-0 font-light">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-[0.5rem] pb-[1rem] pr-[1.5rem]">
                      <p className="font-sans text-[0.9375rem] md:text-[1rem] text-slate dark:text-silver leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. CLOSING INVITATION */}
      <section className="w-full bg-sand/40 dark:bg-charcoal/30 py-[5rem] md:py-[6.5rem] px-[1.5rem] md:px-[3rem] transition-colors border-t border-stone/50 dark:border-slate/50 text-center">
        <div className="w-full max-w-[40rem] mx-auto flex flex-col items-center gap-[1.5rem]">
          <h2 className="font-serif text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] leading-[1.12] font-normal text-ink dark:text-frost">
            Let's build your practice together.
          </h2>

          <p className="font-sans text-[1.0625rem] md:text-[1.125rem] leading-[1.7] text-slate dark:text-silver max-w-[32rem]">
            Start with an introductory private session and discover how Pilates can fit into your life.
          </p>

          <div className="pt-[1rem]">
            <BookingButton />
          </div>
        </div>
      </section>
    </div>
  );
};
