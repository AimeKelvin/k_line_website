import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`flex flex-col items-center gap-1 text-ink ${className}`}
      aria-label="K-Line Accessories — home">
      
      <svg
        width="34"
        height="10"
        viewBox="0 0 34 10"
        fill="none"
        aria-hidden="true"
        className="overflow-visible">
        
        <path
          d="M1 6.2c2.2-4.3 4.4-4.3 6.6 0s4.4 4.3 6.6 0 4.4-4.3 6.6 0 4.4 4.3 6.6 0 4.4-4.3 6.6 0"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none" />
        
      </svg>
      <span className="text-[13px] font-medium tracking-[0.22em] leading-none">
        K&#8209;LINE
      </span>
      <span className="text-[7px] tracking-[0.42em] leading-none text-ink/60">
        ACCESSORIES
      </span>
    </Link>);

}