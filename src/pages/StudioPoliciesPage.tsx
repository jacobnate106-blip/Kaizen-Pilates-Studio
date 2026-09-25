import React from 'react';
import { PoliciesHero } from '../components/policies/PoliciesHero';
import { PoliciesAccordion } from '../components/policies/PoliciesAccordion';
import { PoliciesVisualSection } from '../components/policies/PoliciesVisualSection';
import { HomeCTA } from '../components/home/HomeCTA';
import { SectionDivider } from '../components/common/SectionDivider';

export const StudioPoliciesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <PoliciesHero />
      <SectionDivider />
      <PoliciesAccordion />
      <PoliciesVisualSection />
      <HomeCTA
        headline="QUESTIONS ABOUT OUR POLICIES?"
        subtext="Our studio coordinator is available to answer any questions regarding accommodations or scheduling."
        buttonText="Contact Studio"
        destination="/contact"
      />
    </div>
  );
};
