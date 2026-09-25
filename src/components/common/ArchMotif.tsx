import React from 'react';

interface ArchMotifProps {
  className?: string;
  strokeColor?: string;
  fillColor?: string;
  width?: number;
  height?: number;
}

export const ArchMotif: React.FC<ArchMotifProps> = ({
  className = 'w-16 h-24 text-silver/40',
  strokeColor = 'currentColor',
  fillColor = 'none',
  width = 64,
  height = 96,
}) => {
  return (
    <svg
      viewBox="0 0 64 96"
      width={width}
      height={height}
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="1"
      strokeMiterlimit="10"
      className={className}
      aria-hidden="true"
    >
      <path d="M 1,95 L 1,32 C 1,14.88 14.88,1 32,1 C 49.12,1 63,14.88 63,32 L 63,95" />
      <path
        d="M 9,95 L 9,32 C 9,19.29 19.29,9 32,9 C 44.71,9 55,19.29 55,32 L 55,95"
        strokeOpacity="0.4"
      />
      <line x1="32" y1="9" x2="32" y2="95" strokeOpacity="0.25" strokeDasharray="2 4" />
    </svg>
  );
};
