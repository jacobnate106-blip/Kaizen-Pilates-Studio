import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { BrandImage } from '../common/BrandImage';
import { STUDIO_IMAGES } from '../../constants/images';

interface SessionPreview {
  format: string;
  focus: string;
  duration: string;
}

const SESSION_FORMATS: SessionPreview[] = [
  {
    format: 'Foundations Reformer',
    focus: 'Alignment, carriage mechanics, breath control, and core stabilization.',
    duration: '50 min',
  },
  {
    format: 'Precision Movement',
    focus: 'Intermediate flow, spinal articulation, and eccentric strength balance.',
    duration: '50 min',
  },
  {
    format: 'Restorative & Alignment',
    focus: 'Decompression, postural restoration, and deliberate mobility practice.',
    duration: '55 min',
  },
];

export const HomeSchedulePreview: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-frost dark:bg-charcoal py-[5rem] md:py-[7rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[5rem]">
        {/* Left: Schedule Information & Overview */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-[1.5rem]">
          <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
            Weekly Timetable
          </span>

          <h2 className="font-serif text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-normal text-ink dark:text-frost">
            Find your time to move.
          </h2>

          <p className="font-sans text-[1rem] sm:text-[1.0625rem] text-slate dark:text-stone leading-[1.7] max-w-[32rem]">
            Explore the schedule and find a session that fits your week. Sessions are intentionally kept
            small to ensure individualized guidance and spatial calm.
          </p>

          {/* Session format rows */}
          <div className="w-full flex flex-col divide-y divide-silver/30 dark:divide-slate/60 my-[1rem]">
            {SESSION_FORMATS.map((session) => (
              <div
                key={session.format}
                className="py-[1.25rem] flex flex-col sm:flex-row sm:items-center justify-between gap-[0.5rem]"
              >
                <div className="flex flex-col gap-[0.25rem]">
                  <span className="font-serif text-[1.25rem] text-ink dark:text-frost">
                    {session.format}
                  </span>
                  <span className="font-sans text-[0.8125rem] text-slate/80 dark:text-silver/80">
                    {session.focus}
                  </span>
                </div>
                <span className="font-sans text-[0.75rem] tracking-[0.1em] text-slate dark:text-silver sm:text-right shrink-0 uppercase">
                  {session.duration}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/schedule')}
            className="px-[2rem] py-[0.8125rem] bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone text-[0.8125rem] font-medium tracking-[0.15em] uppercase transition-colors"
          >
            View Schedule
          </button>
        </div>

        {/* Right: Studio Imagery */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[32rem] aspect-[4/5] overflow-hidden">
            <BrandImage
              src={STUDIO_IMAGES.homeSchedulePreview.src}
              fallbackSrc={STUDIO_IMAGES.homeSchedulePreview.fallbackSrc}
              alt={STUDIO_IMAGES.homeSchedulePreview.alt}
              overlay="charcoal"
              overlayOpacity="opacity-20"
              archFrame={true}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
