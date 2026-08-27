import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../contexts/StoreContext';

export function Hero() {
  const { settings } = useStore();
  const [first, ...rest] = settings.tagline.split('.');

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 bg-shell"
      aria-label={`${settings.brandName} campaign`}>
      
      <div className="order-2 md:order-1 flex flex-col items-center justify-center text-center px-8 py-16 md:py-24">
        <svg
          width="92"
          height="62"
          viewBox="0 0 92 62"
          fill="none"
          aria-hidden="true"
          className="mb-8 text-gold">
          
          <ellipse cx="36" cy="31" rx="26" ry="29" stroke="currentColor" strokeWidth="1.6" />
          <ellipse cx="56" cy="31" rx="26" ry="29" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <h1 className="text-[26px] md:text-[34px] lg:text-[40px] leading-[1.15] tracking-[0.06em] uppercase font-light text-ink">
          {first}.
          <br />
          {rest.join('.').trim()}
        </h1>
        <Link
          to="/catalog"
          className="mt-9 inline-flex items-center justify-center bg-ink text-white text-[10px] uppercase tracking-[0.28em] px-14 py-3.5 hover:bg-ink/85 transition-colors">
          
          Discover
        </Link>
      </div>

      <div className="order-1 md:order-2 relative min-h-[380px] md:min-h-[620px]">
        <img
          src="/e0c18c43-ece2-46e9-b6b4-b189e8f68358.jpg"
          alt="Model wearing gold and pearl drop earrings at golden hour"
          className="absolute inset-0 h-full w-full object-cover" />
        
      </div>
    </section>);

}