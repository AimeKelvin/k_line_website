import React from 'react';
import { Link } from 'react-router-dom';

interface SectionHeadingProps {
  title: string;
  to?: string;
  actionLabel?: string;
}

export function SectionHeading({
  title,
  to,
  actionLabel = 'View all'
}: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-6 px-6 md:px-10 lg:px-14 pt-14 pb-7 md:pt-20 md:pb-9">
      <h2 className="text-[19px] md:text-[26px] tracking-[0.14em] uppercase font-light text-ink">
        {title}
        <span className="text-ink/40">//</span>
      </h2>
      {to &&
      <Link
        to={to}
        className="shrink-0 text-[9px] md:text-[10px] uppercase tracking-[0.22em] border-b border-ink pb-0.5 text-ink hover:text-ink/60 hover:border-ink/60 transition-colors">
        
          {actionLabel}
        </Link>
      }
    </div>);

}