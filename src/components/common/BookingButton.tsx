import React from 'react';
import { useRouter } from '../../context/RouterContext';

interface BookingButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'nav';
}

export const BookingButton: React.FC<BookingButtonProps> = ({
  className = '',
  variant = 'primary',
}) => {
  const { navigate } = useRouter();

  const handleBooking = () => {
    // Directs to the onboarding / contact booking flow
    navigate('/contact');
  };

  // Nav Button: Sleek, compact architectural button for header
  if (variant === 'nav') {
    return (
      <button
        onClick={handleBooking}
        className={`inline-flex items-center justify-center text-center px-4 py-2 sm:px-5 sm:py-2.5 text-[0.75rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 bg-ink text-frost hover:bg-charcoal active:scale-[0.98] dark:bg-frost dark:text-ink dark:hover:bg-stone shadow-xs whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate shrink-0 ${className}`}
      >
        <span className="w-full text-center">Book Your Introductory Session</span>
      </button>
    );
  }

  // Secondary Button: Crisp outline button with inverted hover
  if (variant === 'secondary') {
    return (
      <button
        onClick={handleBooking}
        className={`inline-flex items-center justify-center text-center px-6 sm:px-8 py-3.5 text-[0.8125rem] sm:text-[0.875rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 border border-ink text-ink hover:bg-ink hover:text-frost active:scale-[0.98] dark:border-frost dark:text-frost dark:hover:bg-frost dark:hover:text-ink whitespace-normal sm:whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate shrink-0 ${className}`}
      >
        <span className="w-full text-center">Book Your Introductory Session</span>
      </button>
    );
  }

  // Primary Button: Full coverage, generous padding, responsive text wrapping protection
  return (
    <button
      onClick={handleBooking}
      className={`inline-flex items-center justify-center text-center px-6 sm:px-9 py-3.5 sm:py-4 text-[0.8125rem] sm:text-[0.875rem] font-medium tracking-[0.14em] uppercase transition-all duration-300 bg-ink text-frost hover:bg-charcoal active:scale-[0.98] dark:bg-frost dark:text-ink dark:hover:bg-stone shadow-sm hover:shadow-md whitespace-normal sm:whitespace-nowrap max-w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-slate shrink-0 ${className}`}
    >
      <span className="w-full text-center leading-snug">Book Your Introductory Session</span>
    </button>
  );
};
