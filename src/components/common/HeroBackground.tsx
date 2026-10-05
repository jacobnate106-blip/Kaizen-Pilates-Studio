import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BrandImage } from './BrandImage';

interface HeroBackgroundProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  priority?: boolean;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  lightSrc,
  darkSrc,
  alt,
  priority = true,
}) => {
  const { theme } = useTheme();
  const currentSrc = theme === 'dark' ? darkSrc : lightSrc;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Both images rendered for seamless transition without layout shifts */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          theme === 'dark' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <BrandImage
          src={lightSrc}
          alt={alt}
          priority={priority}
          className="w-full h-full object-cover scale-[1.02]"
        />
        {/* Light Mode: Warm stone/frost scrim for pristine readability */}
        <div
          className="absolute inset-0 bg-stone/45 bg-gradient-to-t from-stone/95 via-stone/60 to-stone/30"
          aria-hidden="true"
        />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <BrandImage
          src={darkSrc}
          alt={alt}
          priority={priority}
          className="w-full h-full object-cover scale-[1.02]"
        />
        {/* Dark Mode: Deep rich ink scrim for moody, tranquil contrast */}
        <div
          className="absolute inset-0 bg-ink/65 bg-gradient-to-t from-ink/95 via-ink/75 to-ink/40"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
