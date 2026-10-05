import React from 'react';
import { useRouter } from '../context/RouterContext';
import { BookingButton } from '../components/common/BookingButton';
import { SectionDivider } from '../components/common/SectionDivider';
import { HeroBackground } from '../components/common/HeroBackground';
import { BrandImage } from '../components/common/BrandImage';
import { STUDIO_IMAGES } from '../constants/images';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="flex flex-col w-full">
      {/* 2. OPENING SECTION — Immersive Hero with Light/Dark Background Images */}
      <section className="relative w-full min-h-[88vh] md:min-h-[92vh] flex flex-col justify-end bg-stone dark:bg-ink text-ink dark:text-frost overflow-hidden transition-colors duration-500">
        {/* Dynamic Light/Dark Studio Hero Background */}
        <HeroBackground
          lightSrc="/images/1000088194-150kb.jpg"
          darkSrc="/images/1000088190-150kb.jpg"
          alt="KAIZEN Classical Pilates Studio reformers and natural light"
          priority={true}
        />

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[6rem] flex flex-col items-start gap-[1.75rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-charcoal/90 dark:text-stone font-semibold">
            PRIVATE CLASSICAL PILATES · LORTON, VIRGINIA
          </span>

          <h1 className="font-serif text-[3rem] sm:text-[4.5rem] lg:text-[5.75rem] leading-[1.02] tracking-[0.02em] font-normal text-ink dark:text-frost max-w-[54rem]">
            Move with purpose.
          </h1>

          <p className="font-sans text-[1.0625rem] sm:text-[1.1875rem] text-charcoal/95 dark:text-stone/95 max-w-[36rem] leading-[1.65] font-normal">
            One-on-one Pilates instruction tailored to your body, your goals, and your experience. Build strength, develop control, and discover what intentional movement can do for you.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[1rem] pt-[0.75rem] w-full sm:w-auto">
            <BookingButton />
            <button
              onClick={() => navigate('/our-story')}
              className="inline-flex items-center justify-center px-[2.25rem] py-[0.9375rem] text-[0.8125rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 border border-ink text-ink bg-frost/70 hover:bg-ink hover:text-frost active:scale-[0.98] dark:border-frost dark:text-frost dark:bg-ink/60 dark:hover:bg-frost dark:hover:text-ink backdrop-blur-xs whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate"
            >
              Discover KAIZEN →
            </button>
          </div>
        </div>
      </section>

      {/* Consistent Section Divider below hero */}
      <SectionDivider />

      {/* 3. THE PRIVATE EXPERIENCE */}
      <section className="w-full bg-sand/30 dark:bg-charcoal/20 py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[80rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[3rem] lg:gap-[4.5rem] items-center">
          {/* Photo of studio equipment from uploaded studio photos */}
          <div className="lg:col-span-6 order-2 lg:order-1 w-full">
            <div className="w-full aspect-[16/11] overflow-hidden shadow-xs">
              <BrandImage
                src={STUDIO_IMAGES.homePractice.src}
                fallbackSrc={STUDIO_IMAGES.homePractice.fallbackSrc}
                alt="Classical Pilates equipment and reformer apparatus in the studio"
                overlay="slate"
                overlayOpacity="opacity-20"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start gap-[1.5rem]">
            <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
              YOUR TIME. YOUR PRACTICE.
            </span>

            <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
              Individual attention, every session.
            </h2>

            <div className="flex flex-col gap-[1.25rem] font-sans text-[1rem] md:text-[1.0625rem] leading-[1.7] text-slate dark:text-silver max-w-[36rem]">
              <p>
                Each session is dedicated entirely to you. We take time to understand how you move, what you want to work toward, and where you need guidance.
              </p>
              <p>
                Through classical Pilates on different apparatuses, you'll build a practice that develops with you, introducing new challenges as your strength, control, and confidence grow.
              </p>
            </div>

            <div className="pt-[0.5rem]">
              <button
                onClick={() => navigate('/private-sessions')}
                className="font-sans text-[0.875rem] md:text-[0.9375rem] font-medium tracking-[0.08em] text-ink dark:text-frost border-b border-ink dark:border-frost pb-1 hover:opacity-75 transition-opacity"
              >
                Explore Private Sessions →
              </button>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. MEET LUWAM */}
      <section className="w-full bg-frost dark:bg-ink py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[48rem] mx-auto flex flex-col items-start gap-[1.75rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
            The Person Behind Kaizen
          </span>

          <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
            A personal journey. A passion for teaching.
          </h2>

          <div className="flex flex-col gap-[1.25rem] font-sans text-[1rem] md:text-[1.0625rem] leading-[1.7] text-slate dark:text-silver">
            <p>
              My love for Pilates began at a time when I felt disconnected from my body. I'd worked out for years, but after my fourth C-section and hernia surgery, movement felt different. Pilates gave me a way to reconnect, and that experience made me want to share it with others.
            </p>
            <p>
              That desire led me to become a teacher and eventually open Signature Studio in Ethiopia. Through countless classes—and my continued learning as a student—I've come to value how personal this practice can be.
            </p>
            <p>
              That's what I bring to KAIZEN: experience, care, and the understanding that you have your own story, too. Our time together starts with listening to it.
            </p>
          </div>

          <div className="pt-[0.75rem] border-t border-stone/50 dark:border-slate/50 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-[1.5rem]">
            <span className="font-sans text-[0.875rem] md:text-[0.9375rem] font-medium tracking-[0.05em] text-ink dark:text-frost">
              Luwam Tesfaye · Founder & Pilates Instructor
            </span>
            <BookingButton />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. THE KAIZEN APPROACH */}
      <section className="w-full bg-sand/30 dark:bg-charcoal/20 py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors">
        <div className="w-full max-w-[80rem] mx-auto flex flex-col items-start gap-[2.5rem]">
          <div className="flex flex-col items-start gap-[1rem] max-w-[44rem]">
            <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
              Small changes. Meaningful progress.
            </span>

            <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
              A practice that grows with you.
            </h2>

            <div className="flex flex-col gap-[1rem] font-sans text-[1rem] md:text-[1.0625rem] leading-[1.7] text-slate dark:text-silver">
              <p>
                KAIZEN means continuous improvement. We bring that idea into every session through attentive teaching, purposeful movement, and an appreciation for the small adjustments that help you progress.
              </p>
              <p>
                Our classical Pilates practice is grounded in six principles:
              </p>
            </div>
          </div>

          {/* Six principles in one simple grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] pt-[1rem]">
            <div className="p-[2rem] bg-frost dark:bg-charcoal border border-stone/50 dark:border-slate/50 flex flex-col gap-[0.75rem]">
              <h3 className="font-serif text-[1.375rem] font-medium text-ink dark:text-frost">
                Concentration
              </h3>
              <p className="font-sans text-[0.9375rem] text-slate dark:text-silver leading-[1.6]">
                Bring your attention to each movement.
              </p>
            </div>

            <div className="p-[2rem] bg-frost dark:bg-charcoal border border-stone/50 dark:border-slate/50 flex flex-col gap-[0.75rem]">
              <h3 className="font-serif text-[1.375rem] font-medium text-ink dark:text-frost">
                Control
              </h3>
              <p className="font-sans text-[0.9375rem] text-slate dark:text-silver leading-[1.6]">
                Move with intention and coordination.
              </p>
            </div>

            <div className="p-[2rem] bg-frost dark:bg-charcoal border border-stone/50 dark:border-slate/50 flex flex-col gap-[0.75rem]">
              <h3 className="font-serif text-[1.375rem] font-medium text-ink dark:text-frost">
                Centering
              </h3>
              <p className="font-sans text-[0.9375rem] text-slate dark:text-silver leading-[1.6]">
                Build support and initiate movement from your center.
              </p>
            </div>

            <div className="p-[2rem] bg-frost dark:bg-charcoal border border-stone/50 dark:border-slate/50 flex flex-col gap-[0.75rem]">
              <h3 className="font-serif text-[1.375rem] font-medium text-ink dark:text-frost">
                Precision
              </h3>
              <p className="font-sans text-[0.9375rem] text-slate dark:text-silver leading-[1.6]">
                Give the details the attention they deserve.
              </p>
            </div>

            <div className="p-[2rem] bg-frost dark:bg-charcoal border border-stone/50 dark:border-slate/50 flex flex-col gap-[0.75rem]">
              <h3 className="font-serif text-[1.375rem] font-medium text-ink dark:text-frost">
                Breath
              </h3>
              <p className="font-sans text-[0.9375rem] text-slate dark:text-silver leading-[1.6]">
                Connect your breathing to your movement.
              </p>
            </div>

            <div className="p-[2rem] bg-frost dark:bg-charcoal border border-stone/50 dark:border-slate/50 flex flex-col gap-[0.75rem]">
              <h3 className="font-serif text-[1.375rem] font-medium text-ink dark:text-frost">
                Flow
              </h3>
              <p className="font-sans text-[0.9375rem] text-slate dark:text-silver leading-[1.6]">
                Develop rhythm and continuity throughout your practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. YOUR FIRST SESSION (Anchor target: #your-first-session) */}
      <section
        id="your-first-session"
        className="w-full bg-frost dark:bg-ink py-[4.5rem] md:py-[6rem] px-[1.5rem] md:px-[3rem] transition-colors scroll-mt-24"
      >
        <div className="w-full max-w-[48rem] mx-auto flex flex-col items-start gap-[1.75rem]">
          <span className="font-sans text-[0.75rem] md:text-[0.8125rem] tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
            BEGIN WHERE YOU ARE
          </span>

          <h2 className="font-serif text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.12] font-normal text-ink dark:text-frost">
            Let's get to know you.
          </h2>

          <div className="flex flex-col gap-[1.25rem] font-sans text-[1rem] md:text-[1.0625rem] leading-[1.7] text-slate dark:text-silver">
            <p>
              Your introductory private session begins with a conversation about your goals and movement experience. We'll introduce you to the equipment, guide you through exercises suited to your starting point, and discuss how to build your practice.
            </p>
            <p>
              Whether you're new to Pilates or returning to it, you'll have space to ask questions and learn at your own pace.
            </p>
          </div>

          {/* Session Details */}
          <div className="w-full p-[2rem] bg-sand/40 dark:bg-charcoal/30 border border-stone/60 dark:border-slate/60 flex flex-col sm:flex-row sm:items-center justify-between gap-[1.5rem] my-[0.5rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex items-center gap-[1rem] text-[0.9375rem] font-sans">
                <span className="text-slate dark:text-silver">Session length:</span>
                <span className="text-ink dark:text-frost font-medium">50 minutes</span>
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

      {/* 7. OUR STUDIO STORY (Placed directly before the footer) */}
      <section className="w-full bg-sand/40 dark:bg-charcoal/30 py-[5rem] md:py-[6.5rem] px-[1.5rem] md:px-[3rem] transition-colors border-t border-stone/50 dark:border-slate/50">
        <div className="w-full max-w-[48rem] mx-auto flex flex-col items-start gap-[1.75rem]">
          <h2 className="font-serif text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] leading-[1.1] font-normal text-ink dark:text-frost">
            Our Studio Story
          </h2>

          <h3 className="font-serif text-[1.5rem] sm:text-[1.75rem] italic text-slate dark:text-silver leading-[1.3]">
            A space to grow, one intentional movement at a time.
          </h3>

          <div className="flex flex-col gap-[1.25rem] font-sans text-[1rem] md:text-[1.0625rem] leading-[1.75] text-slate dark:text-silver">
            <p>
              KAIZEN grew from my love of Pilates and the discovery that there is always more to learn about what our bodies and minds can do together. As both a teacher and a student, I continue to experience how small adjustments can deepen a practice, and how that progress carries into everyday life.
            </p>
            <p>
              I created this private studio to give others the time, attention, and guidance to make those discoveries for themselves. A space where you can ask questions, build confidence, and develop a practice that meets you where you are.
            </p>
            <p>
              The name KAIZEN means continuous improvement. That idea shapes our approach to classical Pilates, grounded in its six principles: concentration, control, centering, precision, breath, and flow. Each session brings these principles to life through thoughtful movement and teaching tailored to you.
            </p>
            <p>
              My hope is that you leave feeling stronger, more connected to yourself, and curious about what you can do next.
            </p>
          </div>

          <p className="font-sans text-[1rem] font-medium tracking-[0.05em] text-ink dark:text-frost pt-[0.5rem]">
            — Luwam, Founder
          </p>
        </div>
      </section>
    </div>
  );
};
