import React from 'react';
import { GettingStartedHero } from '../components/getting-started/GettingStartedHero';
import { GettingStartedJourney } from '../components/getting-started/GettingStartedJourney';
import { GettingStartedFirstSession } from '../components/getting-started/GettingStartedFirstSession';
import { GettingStartedFAQ } from '../components/getting-started/GettingStartedFAQ';
import { HomeCTA } from '../components/home/HomeCTA';
import { SectionDivider } from '../components/common/SectionDivider';

export const GettingStartedPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <GettingStartedHero />
      <SectionDivider />
      <GettingStartedJourney />
      <SectionDivider />
      <GettingStartedFirstSession />
      <GettingStartedFAQ />
      <HomeCTA
        headline="READY TO MOVE WITH INTENTION?"
        subtext="Choose your preferred session from our weekly schedule or connect with us directly."
        buttonText="View Schedule"
        destination="/schedule"
      />
    </div>
  );
};
