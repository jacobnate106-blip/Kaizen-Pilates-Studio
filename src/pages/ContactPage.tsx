import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactLocation } from '../components/contact/ContactLocation';
import { HomeCTA } from '../components/home/HomeCTA';
import { SectionDivider } from '../components/common/SectionDivider';

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
      <SectionDivider />

      {/* Main Info + Form Section */}
      <section className="w-full bg-frost dark:bg-charcoal py-[5rem] md:py-[7rem] transition-colors">
        <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] flex flex-col lg:flex-row items-start justify-between gap-[4rem] lg:gap-[5rem]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <ContactLocation />

      <HomeCTA
        headline="START WHERE YOU ARE."
        subtext="Explore our weekly schedule or step into the studio for your initial session."
        buttonText="View Schedule"
        destination="/schedule"
      />
    </div>
  );
};
