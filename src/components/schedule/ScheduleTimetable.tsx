import React, { useState } from 'react';
import { useRouter } from '../../context/RouterContext';
import { ScheduleSession } from '../../types';

const INITIAL_SCHEDULE: ScheduleSession[] = [
  {
    id: 'mon-01',
    day: 'Monday',
    time: '07:30 AM',
    title: 'Foundations Reformer',
    focus: 'Alignment, carriage mechanics, breath control, and core stabilization.',
    duration: '50 min',
    level: 'All Levels / Beginner Friendly',
  },
  {
    id: 'mon-02',
    day: 'Monday',
    time: '09:00 AM',
    title: 'Precision Reformer Flow',
    focus: 'Continuous kinetic sequences, balance work, and eccentric strength.',
    duration: '50 min',
    level: 'Intermediate',
  },
  {
    id: 'mon-03',
    day: 'Monday',
    time: '05:30 PM',
    title: 'Decompression & Alignment',
    focus: 'Spinal decompression, hip mobility, and mindful restorative movement.',
    duration: '55 min',
    level: 'All Levels',
  },
  {
    id: 'tue-01',
    day: 'Tuesday',
    time: '08:00 AM',
    title: 'Core & Spinal Articulation',
    focus: 'Segmental spinal control, pelvic floor integration, and postural tone.',
    duration: '50 min',
    level: 'Foundational / Intermediate',
  },
  {
    id: 'tue-02',
    day: 'Tuesday',
    time: '12:00 PM',
    title: 'Midday Focused Reformer',
    focus: 'Midday reset emphasizing thoracic extension and shoulder girdle stability.',
    duration: '45 min',
    level: 'All Levels',
  },
  {
    id: 'wed-01',
    day: 'Wednesday',
    time: '07:30 AM',
    title: 'Foundations Reformer',
    focus: 'Carriage orientation, spring calibration, and deep abdominal recruitment.',
    duration: '50 min',
    level: 'All Levels',
  },
  {
    id: 'wed-02',
    day: 'Wednesday',
    time: '09:30 AM',
    title: 'Dynamic Contrology',
    focus: 'Challenging balance progressions and fluid transitional choreography.',
    duration: '50 min',
    level: 'Intermediate / Advanced',
  },
  {
    id: 'thu-01',
    day: 'Thursday',
    time: '08:30 AM',
    title: 'Precision Reformer Flow',
    focus: 'Cadence control, unilateral stability, and rotational integrity.',
    duration: '50 min',
    level: 'Intermediate',
  },
  {
    id: 'thu-02',
    day: 'Thursday',
    time: '06:00 PM',
    title: 'Restorative Alignment',
    focus: 'Gentle traction, diaphragmatic breathwork, and slow fascial release.',
    duration: '55 min',
    level: 'All Levels',
  },
  {
    id: 'fri-01',
    day: 'Friday',
    time: '08:00 AM',
    title: 'Foundations & Balance',
    focus: 'Revisiting core fundamentals with elevated attention to joint stacking.',
    duration: '50 min',
    level: 'All Levels',
  },
  {
    id: 'fri-02',
    day: 'Friday',
    time: '10:00 AM',
    title: 'End-of-Week Precision Flow',
    focus: 'Full-body integration and steady endurance over continuous spring sequences.',
    duration: '50 min',
    level: 'Intermediate',
  },
  {
    id: 'sat-01',
    day: 'Saturday',
    time: '09:00 AM',
    title: 'Weekend Immersion Reformer',
    focus: 'Comprehensive studio sequence spanning all reformer configurations.',
    duration: '60 min',
    level: 'All Levels',
  },
  {
    id: 'sat-02',
    day: 'Saturday',
    time: '10:30 AM',
    title: 'Foundations Masterclass',
    focus: 'In-depth postural screening, individual cues, and foundational mastery.',
    duration: '60 min',
    level: 'New & Returning Students',
  },
];

const DAYS = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const ScheduleTimetable: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedDay, setSelectedDay] = useState('All Days');
  const [activeBookingSession, setActiveBookingSession] = useState<ScheduleSession | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const filteredSessions =
    selectedDay === 'All Days'
      ? INITIAL_SCHEDULE
      : INITIAL_SCHEDULE.filter((s) => s.day === selectedDay);

  const handleBooking = (session: ScheduleSession) => {
    setActiveBookingSession(session);
    setBookingConfirmed(false);
  };

  return (
    <section className="w-full bg-frost dark:bg-charcoal py-[4.5rem] md:py-[6.5rem] transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col gap-[3rem]">
        {/* Timetable Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[1.5rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
              Studio Timetable
            </span>
            <h2 className="font-serif text-[2.5rem] sm:text-[3.25rem] leading-[1.1] font-normal text-ink dark:text-frost">
              Weekly Sessions
            </h2>
          </div>
          <p className="font-sans text-[0.875rem] text-slate dark:text-stone/90 max-w-[28rem] leading-[1.6]">
            Select a session to inquire or reserve your spot. Sessions are limited to ensure generous space and attentive guidance.
          </p>
        </div>

        {/* Day Filter Buttons (Flexbox only) */}
        <div className="flex flex-row flex-wrap items-center gap-[0.5rem] p-[0.375rem] bg-stone/40 dark:bg-ink/60 border border-silver/30 dark:border-slate/60">
          {DAYS.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-[1.25rem] py-[0.5rem] text-[0.8125rem] font-sans tracking-[0.05em] transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-ink text-frost dark:bg-frost dark:text-ink font-medium shadow-sm'
                    : 'text-slate dark:text-silver hover:text-ink dark:hover:text-frost'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Sessions List */}
        <div className="w-full flex flex-col divide-y divide-silver/40 dark:divide-slate/60 border-t border-b border-silver/40 dark:border-slate/60">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="py-[1.75rem] flex flex-col lg:flex-row lg:items-center justify-between gap-[1.5rem] hover:bg-stone/20 dark:hover:bg-ink/30 px-[0.75rem] transition-colors"
            >
              {/* Day & Time Column */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-[0.5rem] sm:gap-[1.5rem] lg:w-[16rem]">
                <span className="font-sans text-[0.8125rem] font-medium tracking-[0.1em] uppercase text-slate dark:text-silver">
                  {session.day}
                </span>
                <span className="font-serif text-[1.5rem] sm:text-[1.75rem] text-ink dark:text-frost font-normal tabular-nums">
                  {session.time}
                </span>
              </div>

              {/* Title & Focus Description */}
              <div className="flex flex-col gap-[0.375rem] flex-1 max-w-[36rem]">
                <div className="flex flex-row items-center gap-[0.75rem] flex-wrap">
                  <h3 className="font-serif text-[1.25rem] sm:text-[1.375rem] text-ink dark:text-frost font-medium">
                    {session.title}
                  </h3>
                  <span className="text-[0.75rem] font-sans text-slate/70 dark:text-silver/70">
                    · {session.level}
                  </span>
                </div>
                <p className="font-sans text-[0.875rem] text-slate dark:text-stone/90 leading-[1.6]">
                  {session.focus}
                </p>
              </div>

              {/* Duration & Booking Action */}
              <div className="flex flex-row items-center justify-between lg:justify-end gap-[1.5rem] pt-[0.5rem] lg:pt-0 shrink-0">
                <span className="font-sans text-[0.8125rem] tracking-[0.1em] uppercase text-slate dark:text-silver">
                  {session.duration}
                </span>

                <button
                  onClick={() => handleBooking(session)}
                  className="px-[1.5rem] py-[0.625rem] text-[0.75rem] font-medium tracking-[0.15em] uppercase bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone transition-colors whitespace-nowrap"
                >
                  Reserve Spot
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Note regarding scheduling */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1rem] p-[1.5rem] bg-stone/40 dark:bg-ink/50 border border-silver/30 dark:border-slate/60 text-[0.8125rem] font-sans text-slate dark:text-silver">
          <p>
            Private 1-on-1 and duet sessions are scheduled by direct appointment to suit your cadence.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="text-ink dark:text-frost underline underline-offset-4 hover:text-slate dark:hover:text-stone transition-colors whitespace-nowrap font-medium"
          >
            Inquire About Private Sessions →
          </button>
        </div>
      </div>

      {/* Booking / Reservation Modal Dialog */}
      {activeBookingSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/75 backdrop-blur-sm p-[1.5rem]">
          <div className="w-full max-w-[32rem] bg-frost dark:bg-charcoal text-ink dark:text-frost p-[2.5rem] border border-silver/30 dark:border-slate/60 shadow-xl flex flex-col gap-[1.5rem] relative">
            <button
              onClick={() => setActiveBookingSession(null)}
              className="absolute top-[1.25rem] right-[1.25rem] p-[0.5rem] text-slate dark:text-silver hover:text-ink dark:hover:text-frost text-[1.25rem] leading-none"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {!bookingConfirmed ? (
              <>
                <div className="flex flex-col gap-[0.25rem]">
                  <span className="font-sans text-[0.75rem] tracking-[0.2em] uppercase text-slate dark:text-silver font-medium">
                    Session Reservation Request
                  </span>
                  <h3 className="font-serif text-[1.875rem] font-normal text-ink dark:text-frost">
                    {activeBookingSession.title}
                  </h3>
                  <p className="font-sans text-[0.875rem] text-slate dark:text-silver">
                    {activeBookingSession.day} at {activeBookingSession.time} ({activeBookingSession.duration})
                  </p>
                </div>

                <div className="w-full h-[1px] bg-silver/30 dark:bg-slate/60" />

                <div className="flex flex-col gap-[0.75rem] text-[0.875rem] font-sans text-slate dark:text-stone">
                  <p>
                    Please provide your contact details. Our studio coordinator will confirm availability
                    and send arrival guidance for our Lorton location.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBookingConfirmed(true);
                  }}
                  className="flex flex-col gap-[1rem]"
                >
                  <div className="flex flex-col gap-[0.375rem]">
                    <label className="text-[0.75rem] font-sans tracking-[0.1em] uppercase text-slate dark:text-silver">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="px-[1rem] py-[0.625rem] bg-stone/20 dark:bg-ink border border-silver/40 dark:border-slate/60 text-ink dark:text-frost text-[0.875rem] focus:outline-none focus:border-ink dark:focus:border-frost"
                    />
                  </div>

                  <div className="flex flex-col gap-[0.375rem]">
                    <label className="text-[0.75rem] font-sans tracking-[0.1em] uppercase text-slate dark:text-silver">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your.email@example.com"
                      className="px-[1rem] py-[0.625rem] bg-stone/20 dark:bg-ink border border-silver/40 dark:border-slate/60 text-ink dark:text-frost text-[0.875rem] focus:outline-none focus:border-ink dark:focus:border-frost"
                    />
                  </div>

                  <div className="flex flex-col gap-[0.375rem]">
                    <label className="text-[0.75rem] font-sans tracking-[0.1em] uppercase text-slate dark:text-silver">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (703) 000-0000"
                      className="px-[1rem] py-[0.625rem] bg-stone/20 dark:bg-ink border border-silver/40 dark:border-slate/60 text-ink dark:text-frost text-[0.875rem] focus:outline-none focus:border-ink dark:focus:border-frost"
                    />
                  </div>

                  <div className="flex flex-row justify-end gap-[1rem] pt-[0.5rem]">
                    <button
                      type="button"
                      onClick={() => setActiveBookingSession(null)}
                      className="px-[1.5rem] py-[0.625rem] text-[0.75rem] font-sans tracking-[0.1em] uppercase text-slate dark:text-silver hover:text-ink dark:hover:text-frost"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-[1.75rem] py-[0.625rem] text-[0.75rem] font-sans font-medium tracking-[0.15em] uppercase bg-ink text-frost hover:bg-charcoal dark:bg-frost dark:text-ink dark:hover:bg-stone transition-colors"
                    >
                      Confirm Request
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center gap-[1.25rem] py-[1.5rem]">
                <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-stone/40 dark:bg-ink text-ink dark:text-frost">
                  ✓
                </div>
                <h3 className="font-serif text-[2rem] font-normal">Reservation Received</h3>
                <p className="font-sans text-[0.875rem] text-slate dark:text-stone leading-[1.6]">
                  Thank you. We have recorded your interest for <strong>{activeBookingSession.title}</strong> on {activeBookingSession.day} at {activeBookingSession.time}. A studio team member will contact you shortly.
                </p>
                <button
                  onClick={() => setActiveBookingSession(null)}
                  className="mt-[0.5rem] px-[2rem] py-[0.625rem] text-[0.75rem] font-sans tracking-[0.15em] uppercase bg-ink text-frost dark:bg-frost dark:text-ink"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
