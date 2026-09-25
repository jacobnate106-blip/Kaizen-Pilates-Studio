import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { HomeIntro } from '../components/home/HomeIntro';
import { HomePrinciples } from '../components/home/HomePrinciples';
import { HomePractice } from '../components/home/HomePractice';
import { HomeEditorial } from '../components/home/HomeEditorial';
import { HomeStudio } from '../components/home/HomeStudio';
import { HomeSchedulePreview } from '../components/home/HomeSchedulePreview';
import { HomeGettingStarted } from '../components/home/HomeGettingStarted';
import { HomeCTA } from '../components/home/HomeCTA';
import { SectionDivider } from '../components/common/SectionDivider';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HomeHero />
      <SectionDivider />
      <HomeIntro />
      <SectionDivider />
      <HomePrinciples />
      <HomePractice />
      <HomeEditorial />
      <HomeStudio />
      <SectionDivider />
      <HomeSchedulePreview />
      <HomeGettingStarted />
      <HomeCTA />
    </div>
  );
};
