import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { categoryNav, collections } from '../data/collections';
import { useStore } from '../contexts/StoreContext';

type Sort = 'featured' | 'price-asc' | 'price-desc' | 'name';

const sortOptions: {value: Sort;label: string;}[] = [
{ value: 'featured', label: 'Featured' },
{ value: 'price-asc', label: 'Price, low to high' },
{ value: 'price-desc', label: 'Price, high to low' },
{ value: 'name', label: 'Name, A–Z' }];


export function Catalog() {
  const { products } = useStore();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<Sort>('featured');

  const category = params.get('category') ?? '';
  const collection = params.get('collection') ?? '';

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);else
    next.delete(key);
    setParams(next, { replace: true });
  }

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      if (category && p.category !== category) return false;
      if (collection && p.collection !== collection) return false;
      if (
      q &&
      ![p.name, p.material, p.collection, p.shortDescription].some((field) =>
      field.toLowerCase().includes(q)
      ))

      return false;
      return true;
    });

    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'featured')
    sorted.sort(
      (a, b) =>
      Number(b.isNew) + Number(b.isBestseller) - (
      Number(a.isNew) + Number(a.isBestseller))
    );
    return sorted;
  }, [products, category, collection, query, sort]);

  return (
    <main className="bg-paper min-h-screen">
      <header className="px-6 md:px-10 lg:px-14 pt-14 md:pt-20 pb-8">
        <h1 className="text-[24px] md:text-[34px] uppercase tracking-[0.12em] font-light text-ink">
          Catalog
          <span className="text-ink/40">//</span>
        </h1>
        <p className="mt-3 text-[11px] text-ink/60 max-w-md leading-[1.8]">
          Browse everything we currently make. Found something? Send it straight
          to us on WhatsApp or Instagram from its page.
        </p>
      </header>

      <div className="px-6 md:px-10 lg:px-14 pb-8 flex flex-col gap-5">
        <div className="flex items-center gap-3 border-b border-ink/20 pb-2 max-w-md">
          <Search size={15} strokeWidth={1.2} className="text-ink/50" />
          <label htmlFor="catalog-search" className="sr-only">
            Search the catalog
          </label>
          <input
            id="catalog-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pieces…"
            className="w-full bg-transparent text-[12px] text-ink placeholder:text-ink/40 focus:outline-none" />
          
        </div>

        <nav aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categoryNav.map((item) => {
            const isActive = category === item.value;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setParam('category', item.value)}
                aria-pressed={isActive}
                className={`text-[9px] uppercase tracking-[0.2em] px-4 py-2 border transition-colors ${
                isActive ?
                'bg-ink text-white border-ink' :
                'border-ink/25 text-ink/70 hover:border-ink hover:text-ink'}`
                }>
                
                {item.label}
              </button>);

          })}
        </nav>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <label
              htmlFor="collection-filter"
              className="text-[9px] uppercase tracking-[0.2em] text-ink/50">
              
              Collection
            </label>
            <select
              id="collection-filter"
              value={collection}
              onChange={(e) => setParam('collection', e.target.value)}
              className="bg-transparent border border-ink/25 text-[10px] uppercase tracking-[0.14em] text-ink px-3 py-2 focus:outline-none focus:border-ink">
              
              <option value="">All</option>
              {collections.map((c) =>
              <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              )}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="sort-by"
              className="text-[9px] uppercase tracking-[0.2em] text-ink/50">
              
              Sort
            </label>
            <select
              id="sort-by"
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="bg-transparent border border-ink/25 text-[10px] uppercase tracking-[0.14em] text-ink px-3 py-2 focus:outline-none focus:border-ink">
              
              {sortOptions.map((option) =>
              <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              )}
            </select>
          </div>
        </div>
      </div>

      <p className="px-6 md:px-10 lg:px-14 text-[10px] uppercase tracking-[0.18em] text-ink/45 pb-5">
        {visible.length} {visible.length === 1 ? 'piece' : 'pieces'}
      </p>

      {visible.length === 0 ?
      <div className="px-6 md:px-10 lg:px-14 pb-24">
          <p className="text-[12px] text-ink/60">
            Nothing matches those filters yet. Try clearing the search or picking
            another category.
          </p>
        </div> :

      <div className="px-6 md:px-10 lg:px-14 pb-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          {visible.map((product) =>
        <ProductCard key={product.id} product={product} />
        )}
        </div>
      }
    </main>);

}