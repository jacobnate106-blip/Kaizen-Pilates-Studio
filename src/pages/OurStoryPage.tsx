import React from 'react';
import { BookingButton } from '../components/common/BookingButton';
import { SectionDivider } from '../components/common/SectionDivider';
import { HeroBackground } from '../components/common/HeroBackground';

export const OurStoryPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 2. OPENING SECTION — Immersive Hero with Dynamic Light/Dark Background Images */}
      <section className="relative w-full min-h-[62vh] md:min-h-[72vh] flex flex-col justify-end bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden transition-colors duration-500">
        <HeroBackground
          lightSrc="/images/1000088191-150kb.jpg"
          darkSrc="/images/1000088190-150kb.jpg"
          alt="Luwam and KAIZEN Pilates story background"
          priority={true}
        />

        <div className="relative z-10 w-full max-w-[48rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4.5rem] md:py-[6rem] flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal/90 dark:text-stone font-semibold">
            OUR STORY
          </span>

          <h1 className="font-serif text-[2.75rem] sm:text-[3.75rem] md:text-[4.5rem] leading-[1.06] font-normal text-ink dark:text-frost">
            A personal journey. A passion for teaching.
          </h1>
        </div>
      </section>

      {/* Consistent Section Divider below hero */}
      <SectionDivider />

      {/* Story Narrative Section */}
      <section className="relative w-full bg-frost dark:bg-ink py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[48rem] mx-auto flex flex-col items-start gap-[2rem]">
          <div className="flex flex-col gap-[1.5rem] font-sans text-[1.0625rem] md:text-[1.125rem] leading-[1.8] text-slate dark:text-silver">
            <p>
              I didn't walk into my first Pilates class thinking I would someday become a teacher or open a studio. I walked in because I'd had hernia surgery after my fourth C-section, and a physical therapist suggested Pilates to support my recovery.
            </p>
            <p>
              I'd worked out for years, but after everything my body had been through, I felt disconnected from it. That was difficult. I was a mother of four, accustomed to caring for my children, and now I needed to learn how to care for myself in a different way.
            </p>

            {/* Standalone line per client formatting note */}
            <p className="font-serif text-[1.375rem] md:text-[1.5rem] italic text-ink dark:text-frost py-[0.5rem]">
              After one class, I was hooked.
            </p>

            <p>
              What began as a step toward recovery became something I wanted to keep exploring. Pilates gave me time to pay attention to myself, to learn how I moved, what challenged me, and what my body was capable of. Years later, I'm still making those discoveries.
            </p>
            <p>
              That experience made me want to teach. I wanted to share the practice that had become so meaningful to me and help others find their own connection to it.
            </p>
            <p>
              Eventually, I opened Signature Studio in Addis Ababa, Ethiopia. What started with my own recovery grew into countless classes and a community of people finding their own reasons to love Pilates.
            </p>
            <p>
              Throughout that growth, I've remained a student. I still take lessons, still need guidance, and still learn something new about my body. Being on both sides of that experience shapes how I teach. It reminds me to be patient, stay curious, and listen to the person in front of me.
            </p>
            <p>
              KAIZEN is the next chapter of that story: a private studio in Lorton where I can give someone the time and attention to explore their own practice.
            </p>
            <p>
              When you come here, I want to know what brought you. What you hope to feel. What you'd love to be able to do. As a mother, I understand how much thought and effort can go into making that time for yourself. As a student, I understand the vulnerability of trying something unfamiliar. As a teacher, I get to support you through it.
            </p>
            <p>
              The name KAIZEN reflects continuous improvement. It feels true to the journey I'm still on, and the one I hope to share with you.
            </p>
          </div>

          <div className="pt-[1.5rem] border-t border-stone/50 dark:border-slate/50 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-[1.5rem]">
            <span className="font-sans text-[0.9375rem] md:text-[1rem] font-medium tracking-[0.05em] text-ink dark:text-frost">
              Luwam Tesfaye · Founder & Pilates Instructor
            </span>
            <BookingButton />
          </div>
        </div>
      </section>

      <SectionDivider />
    </div>
  );
};
