import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { collections } from '../data/collections';
import { useStore } from '../contexts/StoreContext';

export function Collections() {
  const { products } = useStore();
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="bg-paper pb-16">
      <SectionHeading title="Collections" to="/catalog" />
      <div className="px-6 md:px-10 lg:px-14">
        <ul className="border-t border-ink/15">
          {collections.map((collection, index) => {
            const isOpen = index === openIndex;
            const count = products.filter(
              (p) => p.collection === collection.name
            ).length;

            return (
              <li key={collection.name} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 text-center group">
                    
                    <span
                      className={`text-[12px] md:text-[14px] uppercase tracking-[0.16em] transition-colors ${
                      isOpen ?
                      'text-ink font-medium' :
                      'text-ink/80 group-hover:text-ink'}`
                      }>
                      
                      {collection.name}
                    </span>
                    <span className="ml-2 text-[9px] align-super text-ink/45">
                      ({count})
                    </span>
                  </button>
                </h3>

                {isOpen &&
                <div className="pb-9 md:px-10 lg:px-24">
                    <p className="text-center text-[11px] text-ink/60 pb-6">
                      {collection.blurb}
                    </p>
                    <div className="grid grid-cols-3 gap-4 md:gap-10 lg:gap-20">
                      {collection.images.map((image, i) =>
                    <img
                      key={image + i}
                      src={image}
                      alt={`${collection.name} collection piece ${i + 1}`}
                      className="aspect-[3/4] w-full object-cover"
                      loading="lazy" />

                    )}
                    </div>
                    <div className="text-center pt-7">
                      <Link
                      to={`/catalog?collection=${encodeURIComponent(collection.name)}`}
                      className="text-[9px] uppercase tracking-[0.22em] border-b border-ink pb-0.5 text-ink hover:opacity-60 transition-opacity">
                      
                        Browse {collection.name}
                      </Link>
                    </div>
                  </div>
                }
              </li>);

          })}
        </ul>
      </div>
    </section>);

}