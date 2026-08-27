import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { categoryNav } from '../data/collections';

export function ChooseYourOwn() {
  return (
    <section className="bg-paper">
      <SectionHeading title="Choose your own" to="/catalog" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img
          src="/e846a68a-e299-47dc-af33-c68150aba58c.jpg"
          alt="Model in profile wearing a gold pearl hoop earring"
          className="h-[320px] md:h-[440px] w-full object-cover"
          loading="lazy" />
        
        <div className="relative h-[320px] md:h-[440px]">
          <img
            src="/68ea37fe-64c1-4952-8d3c-34b44e932977.jpg"
            alt="Gold ring with a clear stone standing in fine sand"
            className="h-full w-full object-cover"
            loading="lazy" />
          
          <nav
            aria-label="Product categories"
            className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
            
            {categoryNav.map((category, i) =>
            <Link
              key={category.label}
              to={
              category.value ?
              `/catalog?category=${encodeURIComponent(category.value)}` :
              '/catalog'
              }
              className={`text-[11px] md:text-[13px] uppercase tracking-[0.14em] text-ink hover:opacity-60 transition-opacity ${
              i === 0 ? 'font-medium border-b border-ink pb-0.5' : ''}`
              }>
              
                {category.label}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </section>);

}