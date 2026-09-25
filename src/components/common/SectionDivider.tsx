import React from 'react';
import { KaizenMonogram } from './KaizenMonogram';

interface SectionDividerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'line' | 'minimal' | 'badge';
  lineClassName?: string;
  iconClassName?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = 'my-[1.5rem] md:my-[2rem]',
  size = 'md',
  variant = 'line',
  lineClassName = 'border-stone/60 dark:border-slate/60',
  iconClassName,
}) => {
  const sizeMap = {
    sm: {
      wrapper: 'w-7 h-7',
      padding: 'px-3',
      line: 'border-t',
    },
    md: {
      wrapper: 'w-9 h-9 md:w-10 md:h-10',
      padding: 'px-4 md:px-5',
      line: 'border-t',
    },
    lg: {
      wrapper: 'w-12 h-12 md:w-14 md:h-14',
      padding: 'px-6 md:px-8',
      line: 'border-t',
    },
  };

  const currentSize = sizeMap[size];

  if (variant === 'minimal') {
    return (
      <div className={`w-full flex justify-center items-center ${className}`}>
        <KaizenMonogram
          className={`${currentSize.wrapper} ${
            iconClassName || 'text-stone dark:text-silver/60 hover:text-ink dark:hover:text-frost transition-colors'
          }`}
        />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`w-full flex items-center justify-center ${className}`}>
        <div className={`flex-1 ${currentSize.line} ${lineClassName}`} />
        <div className="px-3 md:px-4 py-1.5 rounded-full border border-stone/50 dark:border-slate/50 bg-sand/30 dark:bg-charcoal/40 backdrop-blur-sm flex items-center gap-2">
          <KaizenMonogram
            className={`w-5 h-5 ${iconClassName || 'text-ink dark:text-frost'}`}
          />
          <span className="text-[0.6875rem] font-sans tracking-[0.25em] uppercase text-slate dark:text-silver font-medium">
            KAIZEN
          </span>
        </div>
        <div className={`flex-1 ${currentSize.line} ${lineClassName}`} />
      </div>
    );
  }

  // Default: Elegant dual architectural hairline divider with centered monogram seal
  return (
    <div
      className={`w-full max-w-[80rem] mx-auto px-[1.5rem] md:px-[3rem] flex items-center justify-center ${className}`}
      role="separator"
      aria-orientation="horizontal"
    >
      <div className={`flex-1 ${currentSize.line} ${lineClassName}`} />
      <div className={`shrink-0 flex items-center justify-center ${currentSize.padding}`}>
        <div className="relative p-1.5 rounded-full border border-stone/40 dark:border-slate/40 bg-sand dark:bg-ink shadow-xs">
          <KaizenMonogram
            className={`${currentSize.wrapper} ${
              iconClassName || 'text-ink/80 dark:text-frost/80'
            }`}
          />
        </div>
      </div>
      <div className={`flex-1 ${currentSize.line} ${lineClassName}`} />
    </div>
  );
};
