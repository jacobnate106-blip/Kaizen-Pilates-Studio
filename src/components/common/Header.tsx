import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useTheme } from '../../context/ThemeContext';
import { NavItem, RoutePath } from '../../types';
import { BrandLogo } from './BrandLogo';
import { BookingButton } from './BookingButton';

// Non-negotiable top navigation menu: Home · Our Story · Private Sessions · Contact
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'Private Sessions', path: '/private-sessions' },
  { label: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (path: RoutePath | string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 border-b ${
        isScrolled
          ? 'bg-frost/95 dark:bg-ink/95 backdrop-blur-md border-silver/30 dark:border-charcoal shadow-sm'
          : 'bg-frost/90 dark:bg-ink/90 border-transparent'
      }`}
    >
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[1rem] flex flex-row items-center justify-between">
        {/* Logo: KAIZEN Pilates Studio */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex flex-row items-center gap-[0.75rem] text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-slate py-1"
          aria-label="KAIZEN Pilates Studio - Home"
        >
          <BrandLogo className="h-10 md:h-12 w-auto text-ink dark:text-frost group-hover:opacity-85 transition-opacity" />
        </button>

        {/* Menu: Home · Our Story · Private Sessions · Contact (Desktop) */}
        <nav
          className="hidden lg:flex flex-row items-center gap-[1.5rem] xl:gap-[2.25rem]"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item, index) => {
            const isActive = currentPath === item.path;
            return (
              <React.Fragment key={item.path}>
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`font-sans text-[0.875rem] tracking-[0.05em] transition-colors py-[0.25rem] whitespace-nowrap ${
                    isActive
                      ? 'text-ink dark:text-frost font-medium border-b border-ink dark:border-frost'
                      : 'text-slate dark:text-silver hover:text-ink dark:hover:text-frost'
                  }`}
                >
                  {item.label}
                </button>
                {index < NAV_ITEMS.length - 1 && (
                  <span className="text-slate/40 dark:text-silver/40 text-[0.875rem] select-none" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle + Button: Book Your Introductory Session */}
        <div className="flex flex-row items-center gap-[1rem]">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-[0.5rem] rounded-none border border-silver/40 dark:border-slate/60 text-slate dark:text-silver hover:text-ink dark:hover:text-frost hover:border-slate dark:hover:border-silver transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-slate"
          >
            {theme === 'dark' ? (
              /* Sun Icon SVG */
              <svg
                className="w-[1.125rem] h-[1.125rem]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              /* Moon Icon SVG */
              <svg
                className="w-[1.125rem] h-[1.125rem]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Top Nav Button: Book Your Introductory Session */}
          <div className="hidden sm:block">
            <BookingButton variant="nav" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-[0.5rem] border border-silver/40 dark:border-slate/60 text-slate dark:text-silver hover:text-ink dark:hover:text-frost focus:outline-none focus-visible:ring-1 focus-visible:ring-slate"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-[1.25rem] h-[1.25rem]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-[1.25rem] h-[1.25rem]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-frost dark:bg-ink border-b border-silver/30 dark:border-charcoal py-[1.75rem] px-[1.5rem] flex flex-col gap-[1.5rem] shadow-lg">
          <div className="flex flex-col gap-[1.25rem]">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left font-serif text-[1.5rem] transition-colors py-[0.25rem] flex flex-row items-center justify-between ${
                    isActive
                      ? 'text-ink dark:text-frost font-semibold'
                      : 'text-slate dark:text-silver hover:text-ink dark:hover:text-frost'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-ink dark:bg-frost" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-[1.5rem] border-t border-silver/30 dark:border-charcoal flex flex-col gap-[1rem]">
            {/* Mobile drawer theme switcher */}
            <button
              onClick={toggleTheme}
              className="flex flex-row items-center justify-between w-full py-[0.625rem] px-[1rem] border border-silver/40 dark:border-slate/60 text-[0.8125rem] font-sans text-slate dark:text-silver hover:text-ink dark:hover:text-frost transition-colors"
            >
              <span>Appearance</span>
              <span className="font-medium text-ink dark:text-frost">
                {theme === 'dark' ? 'Dark (Switch to Light ☀️)' : 'Light (Switch to Dark 🌙)'}
              </span>
            </button>

            <div className="w-full">
              <BookingButton className="w-full text-center" />
            </div>
            <p className="text-[0.75rem] text-slate dark:text-silver text-center font-sans tracking-[0.05em]">
              Lorton, Virginia
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
