import React, { useState } from 'react';
import { Plus, Trash2, ArrowUp } from 'lucide-react';
import type { Category, Product, Spec } from '../../types/product';
import { collections } from '../../data/collections';

const categories: Category[] = [
'Rings',
'Earrings',
'Necklaces',
'Bracelets',
'Cuffs'];


const label = 'block text-[9px] uppercase tracking-[0.2em] text-ink/55 mb-1.5';
const field =
'w-full bg-white border border-ink/20 px-3 py-2 text-[12px] text-ink focus:outline-none focus:border-ink';

function slugify(value: string) {
  return value.
  toLowerCase().
  trim().
  replace(/[^a-z0-9]+/g, '-').
  replace(/^-|-$/g, '');
}

export const emptyProduct: Product = {
  id: '',
  name: '',
  category: 'Rings',
  collection: collections[0].name,
  price: 0,
  material: '',
  shortDescription: '',
  description: '',
  highlights: [],
  specs: [{ label: 'Metal', value: '' }],
  sizes: [],
  images: [],
  inStock: true,
  isNew: false,
  isBestseller: false
};

interface ProductFormProps {
  initial: Product;
  isNewRecord: boolean;
  onSave: (product: Product) => void | Promise<void>;
  onCancel: () => void;
}

export function ProductForm({
  initial,
  isNewRecord,
  onSave,
  onCancel
}: ProductFormProps) {
  const [draft, setDraft] = useState<Product>(initial);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  function set<K extends keyof Product>(key: K, value: Product[K]) {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }

  function updateSpec(index: number, next: Partial<Spec>) {
    setDraft((prev) => {
      const specs = [...prev.specs];
      specs[index] = { ...specs[index], ...next };
      return { ...prev, specs };
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!draft.name.trim()) {
      setError('A product name is required.');
      return;
    }
    if (draft.images.length === 0) {
      setError('Add at least one image URL so the piece can be shown.');
      return;
    }
    const id = draft.id || slugify(draft.name);
    await onSave({ ...draft, id, price: Number(draft.price) || 0 });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-shell/60 border border-ink/15 p-6 md:p-8">
      <h2 className="text-[14px] uppercase tracking-[0.16em] font-light text-ink pb-6">
        {isNewRecord ? 'New piece' : `Editing — ${initial.name}`}
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="pf-name">
            Name
          </label>
          <input
            id="pf-name"
            className={field}
            value={draft.name}
            onChange={(e) => set('name', e.target.value)} />
          
        </div>
        <div>
          <label className={label} htmlFor="pf-price">
            Price (USD)
          </label>
          <input
            id="pf-price"
            type="number"
            min={0}
            className={field}
            value={draft.price}
            onChange={(e) => set('price', Number(e.target.value))} />
          
        </div>
        <div>
          <label className={label} htmlFor="pf-category">
            Category
          </label>
          <select
            id="pf-category"
            className={field}
            value={draft.category}
            onChange={(e) => set('category', e.target.value as Category)}>
            
            {categories.map((c) =>
            <option key={c} value={c}>
                {c}
              </option>
            )}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="pf-collection">
            Collection
          </label>
          <select
            id="pf-collection"
            className={field}
            value={draft.collection}
            onChange={(e) => set('collection', e.target.value)}>
            
            {collections.map((c) =>
            <option key={c.name} value={c.name}>
                {c.name}
              </option>
            )}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="pf-material">
            Material
          </label>
          <input
            id="pf-material"
            className={field}
            value={draft.material}
            onChange={(e) => set('material', e.target.value)} />
          
        </div>
        <div>
          <label className={label} htmlFor="pf-sizes">
            Sizes (comma separated, leave blank if none)
          </label>
          <input
            id="pf-sizes"
            className={field}
            value={draft.sizes.join(', ')}
            onChange={(e) =>
            set(
              'sizes',
              e.target.value.
              split(',').
              map((s) => s.trim()).
              filter(Boolean)
            )
            } />
          
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="pf-short">
          Short description (shown in listings)
        </label>
        <input
          id="pf-short"
          className={field}
          value={draft.shortDescription}
          onChange={(e) => set('shortDescription', e.target.value)} />
        
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="pf-desc">
          Full description
        </label>
        <textarea
          id="pf-desc"
          rows={4}
          className={field}
          value={draft.description}
          onChange={(e) => set('description', e.target.value)} />
        
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="pf-highlights">
          Highlights (one per line)
        </label>
        <textarea
          id="pf-highlights"
          rows={3}
          className={field}
          value={draft.highlights.join('\n')}
          onChange={(e) =>
          set(
            'highlights',
            e.target.value.split('\n').map((l) => l.trim()).filter(Boolean)
          )
          } />
        
      </div>

      <fieldset className="mt-7">
        <legend className={label}>Specifications</legend>
        <div className="space-y-2">
          {draft.specs.map((spec, i) =>
          <div key={i} className="flex gap-2">
              <input
              aria-label={`Specification ${i + 1} label`}
              className={`${field} md:w-56`}
              placeholder="Label"
              value={spec.label}
              onChange={(e) => updateSpec(i, { label: e.target.value })} />
            
              <input
              aria-label={`Specification ${i + 1} value`}
              className={field}
              placeholder="Value"
              value={spec.value}
              onChange={(e) => updateSpec(i, { value: e.target.value })} />
            
              <button
              type="button"
              aria-label={`Remove specification ${i + 1}`}
              onClick={() =>
              set(
                'specs',
                draft.specs.filter((_, index) => index !== i)
              )
              }
              className="shrink-0 px-3 border border-ink/20 text-ink/60 hover:text-ink hover:border-ink transition-colors">
              
                <Trash2 size={14} strokeWidth={1.3} />
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => set('specs', [...draft.specs, { label: '', value: '' }])}
          className="mt-3 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-ink border-b border-ink pb-0.5">
          
          <Plus size={12} strokeWidth={1.4} />
          Add specification
        </button>
      </fieldset>

      <fieldset className="mt-8">
        <legend className={label}>Gallery images</legend>
        {draft.images.length > 0 &&
        <ul className="flex flex-wrap gap-3 mb-3">
            {draft.images.map((image, i) =>
          <li key={image + i} className="relative w-24">
                <img
              src={image}
              alt={`Gallery image ${i + 1}`}
              className="aspect-square w-full object-cover border border-ink/15" />
            
                <div className="flex">
                  {i > 0 &&
              <button
                type="button"
                aria-label={`Move image ${i + 1} earlier`}
                onClick={() => {
                  const images = [...draft.images];
                  [images[i - 1], images[i]] = [images[i], images[i - 1]];
                  set('images', images);
                }}
                className="flex-1 py-1 text-ink/60 hover:text-ink border border-t-0 border-ink/15 flex justify-center">
                
                      <ArrowUp size={12} strokeWidth={1.4} />
                    </button>
              }
                  <button
                type="button"
                aria-label={`Remove image ${i + 1}`}
                onClick={() =>
                set(
                  'images',
                  draft.images.filter((_, index) => index !== i)
                )
                }
                className="flex-1 py-1 text-ink/60 hover:text-ink border border-t-0 border-ink/15 flex justify-center">
                
                    <Trash2 size={12} strokeWidth={1.4} />
                  </button>
                </div>
                {i === 0 &&
            <span className="absolute top-1 left-1 bg-ink text-white text-[7px] uppercase tracking-[0.16em] px-1.5 py-0.5">
                    Cover
                  </span>
            }
              </li>
          )}
          </ul>
        }
        <div className="flex gap-2">
          <label className="sr-only" htmlFor="pf-image">
            Image URL
          </label>
          <input
            id="pf-image"
            className={field}
            placeholder="Paste an image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)} />
          
          <button
            type="button"
            onClick={() => {
              if (!imageUrl.trim()) return;
              set('images', [...draft.images, imageUrl.trim()]);
              setImageUrl('');
            }}
            className="shrink-0 bg-ink text-white text-[9px] uppercase tracking-[0.2em] px-5">
            
            Add
          </button>
        </div>
      </fieldset>

      <fieldset className="mt-7 flex flex-wrap gap-6">
        <legend className="sr-only">Visibility</legend>
        {(
        [
        ['inStock', 'In stock'],
        ['isNew', 'Show in New arrivals'],
        ['isBestseller', 'Show in Bestsellers']] as
        const).
        map(([key, text]) =>
        <label key={key} className="flex items-center gap-2 text-[11px] text-ink">
            <input
            type="checkbox"
            checked={draft[key]}
            onChange={(e) => set(key, e.target.checked)}
            className="h-3.5 w-3.5 accent-black" />
          
            {text}
          </label>
        )}
      </fieldset>

      {error &&
      <p role="alert" className="mt-5 text-[11px] text-red-700">
          {error}
        </p>
      }

      <div className="mt-8 flex gap-3">
        <button
          type="submit"
          className="bg-ink text-white text-[10px] uppercase tracking-[0.22em] px-8 py-3 hover:bg-ink/85 transition-colors">
          
          {isNewRecord ? 'Create piece' : 'Save changes'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-ink text-ink text-[10px] uppercase tracking-[0.22em] px-8 py-3 hover:bg-ink hover:text-white transition-colors">
          
          Cancel
        </button>
      </div>
    </form>);

}