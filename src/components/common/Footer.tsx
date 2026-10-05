import React from 'react';
import { useRouter } from '../../context/RouterContext';

interface FooterProps {
  // Page-specific footer variant support per client brief
  page?: 'home' | 'our-story' | 'private-sessions' | 'contact' | 'policies';
}

export const Footer: React.FC<FooterProps> = ({ page = 'home' }) => {
  const { navigate } = useRouter();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="w-full bg-ink text-silver border-t border-charcoal transition-colors">
      <div className="w-full max-w-[90rem] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] flex flex-col gap-[3rem]">
        {/* Brand Lockup */}
        <div className="flex flex-col gap-[0.5rem] max-w-[36rem]">
          <h2 className="font-serif text-[1.5rem] md:text-[1.75rem] text-frost tracking-[0.03em] font-normal">
            KAIZEN Pilates Studio
          </h2>
          <p className="font-sans text-[0.9375rem] text-silver/80">
            Private classical Pilates in Lorton, Virginia.
          </p>
          <p className="font-serif text-[1.125rem] text-stone font-medium">
            Precision. Progress. Calm.
          </p>
        </div>

        {/* Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5rem] pt-[1rem] border-t border-charcoal/80">
          {/* Explore / Navigation */}
          <div className="flex flex-col gap-[1rem]">
            <span className="text-[0.75rem] tracking-[0.2em] uppercase font-sans text-stone font-medium">
              Explore
            </span>

            {/* Render exact navigation links per client specification */}
            {page === 'private-sessions' ? (
              // Page 3 Footer: Home · Our Story · Private Sessions · Contact · Studio Policies
              <div className="flex flex-wrap items-center gap-x-[0.75rem] gap-y-[0.5rem] text-[0.875rem] font-sans text-silver">
                <button
                  onClick={() => handleNavClick('/')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Home
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/our-story')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Our Story
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/private-sessions')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Private Sessions
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Contact
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/studio-policies')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Studio Policies
                </button>
              </div>
            ) : page === 'contact' ? (
              // Page 4 Footer: Home · Our Story · Private Sessions · Studio Policies · Contact
              <div className="flex flex-wrap items-center gap-x-[0.75rem] gap-y-[0.5rem] text-[0.875rem] font-sans text-silver">
                <button
                  onClick={() => handleNavClick('/')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Home
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/our-story')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Our Story
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/private-sessions')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Private Sessions
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/studio-policies')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Studio Policies
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            ) : (
              // Home / Our Story / Studio Policies Footer:
              // Our Story · Private Sessions · Getting Started · Contact · Studio Policies
              <div className="flex flex-wrap items-center gap-x-[0.75rem] gap-y-[0.5rem] text-[0.875rem] font-sans text-silver">
                <button
                  onClick={() => handleNavClick('/our-story')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Our Story
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/private-sessions')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Private Sessions
                </button>
                <span className="text-silver/40">·</span>
                {/* Getting Started anchor link to Your First Session per client prompt */}
                <button
                  onClick={() => handleNavClick('/#your-first-session')}
                  className="hover:text-frost transition-colors text-left"
                  title="Anchors to Your First Session section on Home page"
                >
                  Getting Started
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/contact')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Contact
                </button>
                <span className="text-silver/40">·</span>
                <button
                  onClick={() => handleNavClick('/studio-policies')}
                  className="hover:text-frost transition-colors text-left"
                >
                  Studio Policies
                </button>
              </div>
            )}
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-[0.75rem]">
            <span className="text-[0.75rem] tracking-[0.2em] uppercase font-sans text-stone font-medium">
              Get in Touch
            </span>
            <div className="flex flex-col gap-[0.375rem] text-[0.875rem] font-sans text-silver">
              <a
                href="mailto:luwam@kaizenpilatesstudio.com"
                className="hover:text-frost transition-colors text-left underline underline-offset-4 decoration-stone/50 hover:decoration-frost"
              >
                luwam@kaizenpilatesstudio.com
              </a>
              {page !== 'contact' && (
                <p className="text-silver/80 flex items-center gap-2">
                  <span>Phone:</span>
                  <span className="font-sans text-frost">TBD</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Subtle Bottom Line */}
        <div className="pt-[1.5rem] border-t border-charcoal/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1rem] text-[0.75rem] font-sans text-silver/50">
          <p>© {new Date().getFullYear()} KAIZEN Pilates Studio. Lorton, Virginia.</p>
          <button
            onClick={() => handleNavClick('/studio-policies')}
            className="hover:text-frost transition-colors"
          >
            Studio Policies
          </button>
        </div>
      </div>
    </footer>
  );
};
