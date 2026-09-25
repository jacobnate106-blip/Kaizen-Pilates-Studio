import React from 'react';
import { ScheduleHero } from '../components/schedule/ScheduleHero';
import { ScheduleTimetable } from '../components/schedule/ScheduleTimetable';
import { ScheduleSupport } from '../components/schedule/ScheduleSupport';
import { HomeCTA } from '../components/home/HomeCTA';
import { SectionDivider } from '../components/common/SectionDivider';

export const SchedulePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <ScheduleHero />
      <SectionDivider />
      <ScheduleTimetable />
      <ScheduleSupport />
      <HomeCTA
        headline="RESERVE YOUR MAT & REFORMER."
        subtext="Class sizes are limited to ensure every practitioner receives dedicated, focused instruction."
        buttonText="Get Started"
        destination="/getting-started"
      />
    </div>
  );
};
