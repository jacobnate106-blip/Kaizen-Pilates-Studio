import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { ArchMotif } from './ArchMotif';
import { BrandLogo } from './BrandLogo';
import { RoutePath } from '../../types';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const handleNavClick = (path: RoutePath) => {
    navigate(path);
  };

  return (
    <footer className="w-full bg-ink text-silver border-t border-charcoal transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] flex flex-col gap-[3.5rem]">
        {/* Top Tier: Brand Statement & Logo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-[2rem] pb-[2.5rem] border-b border-charcoal/80">
          <div className="flex flex-col gap-[1rem] max-w-[36rem]">
            <button
              onClick={() => handleNavClick('/')}
              className="text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-silver self-start"
              aria-label="KAIZEN Pilates Studios Home"
            >
              <BrandLogo className="h-12 md:h-14 w-auto text-frost" />
            </button>
            <p className="font-serif text-[1.25rem] text-stone italic">
              Precision. Progress. Calm.
            </p>
            <p className="text-[0.875rem] font-sans text-silver/70 leading-[1.6]">
              Small, precise changes repeated with intention until they become meaningful progress.
              A quiet, considered space to move in Lorton, Virginia.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-[0.5rem]">
            <ArchMotif className="w-12 h-20 text-slate" />
            <span className="text-[0.75rem] tracking-[0.2em] uppercase font-sans text-silver/50">
              改善 · Kaizen
            </span>
          </div>
        </div>

        {/* Middle Tier: Navigation, Studio Info, Hours & Policies */}
        <div className="flex flex-col md:flex-row justify-between gap-[2.5rem]">
          {/* Studio Location & Contact */}
          <div className="flex flex-col gap-[1rem] flex-1">
            <span className="text-[0.75rem] tracking-[0.2em] uppercase font-sans text-stone font-medium">
              Studio Location
            </span>
            <div className="flex flex-col gap-[0.375rem] text-[0.875rem] font-sans text-silver">
              <p className="text-frost font-medium">KAIZEN Pilates Studio</p>
              <p>6000 Saint Catherine’s Lane</p>
              <p>Lorton, VA 22079</p>
            </div>
            <div className="flex flex-col gap-[0.25rem] pt-[0.5rem] text-[0.875rem] font-sans">
              <a
                href="tel:+17033036404"
                className="text-silver hover:text-frost transition-colors"
              >
                +1 703-303-6404
              </a>
              <a
                href="mailto:info@kaizenpilatesstudio.com"
                className="text-silver hover:text-frost transition-colors"
              >
                info@kaizenpilatesstudio.com
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col gap-[1rem] flex-1">
            <span className="text-[0.75rem] tracking-[0.2em] uppercase font-sans text-stone font-medium">
              Explore
            </span>
            <nav className="flex flex-col gap-[0.625rem] text-[0.875rem] font-sans" aria-label="Footer Navigation">
              <button
                onClick={() => handleNavClick('/')}
                className="text-left text-silver hover:text-frost transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('/who-we-are')}
                className="text-left text-silver hover:text-frost transition-colors"
              >
                Who We Are
              </button>
              <button
                onClick={() => handleNavClick('/schedule')}
                className="text-left text-silver hover:text-frost transition-colors"
              >
                Schedule
              </button>
              <button
                onClick={() => handleNavClick('/studio-policies')}
                className="text-left text-silver hover:text-frost transition-colors"
              >
                Studio Policies
              </button>
              <button
                onClick={() => handleNavClick('/getting-started')}
                className="text-left text-silver hover:text-frost transition-colors"
              >
                Getting Started
              </button>
              <button
                onClick={() => handleNavClick('/contact')}
                className="text-left text-silver hover:text-frost transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Core Philosophy Pillar */}
          <div className="flex flex-col gap-[1rem] flex-1 max-w-[20rem]">
            <span className="text-[0.75rem] tracking-[0.2em] uppercase font-sans text-stone font-medium">
              Three Principles
            </span>
            <div className="flex flex-col gap-[0.75rem] text-[0.8125rem] font-sans">
              <div>
                <span className="text-frost font-medium block">Precision</span>
                <span className="text-silver/70">Every movement placed and controlled.</span>
              </div>
              <div>
                <span className="text-frost font-medium block">Progress</span>
                <span className="text-silver/70">Measured over weeks, not single sessions.</span>
              </div>
              <div>
                <span className="text-frost font-medium block">Calm</span>
                <span className="text-silver/70">A quiet, considered space to work in.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1rem] pt-[2rem] border-t border-charcoal/60 text-[0.75rem] font-sans text-silver/60">
          <p>© 2026 KAIZEN Pilates Studio. All rights reserved.</p>
          <div className="flex flex-row items-center gap-[1.5rem]">
            <button
              onClick={() => handleNavClick('/studio-policies')}
              className="hover:text-frost transition-colors"
            >
              Policies & Etiquette
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className="hover:text-frost transition-colors"
            >
              Lorton, VA Studio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
