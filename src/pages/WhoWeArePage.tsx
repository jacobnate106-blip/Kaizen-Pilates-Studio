import React from 'react';
import { WhoHero } from '../components/who/WhoHero';
import { WhoStory } from '../components/who/WhoStory';
import { WhoPhilosophy } from '../components/who/WhoPhilosophy';
import { WhoPrinciples } from '../components/who/WhoPrinciples';
import { WhoCTA } from '../components/who/WhoCTA';
import { SectionDivider } from '../components/common/SectionDivider';

export const WhoWeArePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <WhoHero />
      <SectionDivider />
      <WhoStory />
      <SectionDivider />
      <WhoPhilosophy />
      <WhoPrinciples />
      <WhoCTA />
    </div>
  );
};
