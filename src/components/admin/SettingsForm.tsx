import React, { useState } from 'react';
import type { StoreSettings } from '../../types/product';

const label = 'block text-[9px] uppercase tracking-[0.2em] text-ink/55 mb-1.5';
const field =
'w-full bg-white border border-ink/20 px-3 py-2 text-[12px] text-ink focus:outline-none focus:border-ink';

interface SettingsFormProps {
  settings: StoreSettings;
  onSave: (settings: StoreSettings) => void | Promise<void>;
}

export function SettingsForm({ settings, onSave }: SettingsFormProps) {
  const [draft, setDraft] = useState<StoreSettings>(settings);
  const [saved, setSaved] = useState(false);

  function set<K extends keyof StoreSettings>(key: K, value: StoreSettings[K]) {
    setDraft((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await onSave(draft);
        setSaved(true);
      }}
      className="bg-shell/60 border border-ink/15 p-6 md:p-8 max-w-3xl">
      
      <h2 className="text-[14px] uppercase tracking-[0.16em] font-light text-ink pb-2">
        Store settings
      </h2>
      <p className="text-[11px] text-ink/55 pb-6 max-w-md leading-[1.7]">
        These details power every WhatsApp and Instagram button across the site.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="st-brand">
            Brand name
          </label>
          <input
            id="st-brand"
            className={field}
            value={draft.brandName}
            onChange={(e) => set('brandName', e.target.value)} />
          
        </div>
        <div>
          <label className={label} htmlFor="st-tagline">
            Tagline
          </label>
          <input
            id="st-tagline"
            className={field}
            value={draft.tagline}
            onChange={(e) => set('tagline', e.target.value)} />
          
        </div>
        <div>
          <label className={label} htmlFor="st-wa">
            WhatsApp number (country code, digits only)
          </label>
          <input
            id="st-wa"
            className={field}
            value={draft.whatsappNumber}
            onChange={(e) => set('whatsappNumber', e.target.value)} />
          
        </div>
        <div>
          <label className={label} htmlFor="st-ig">
            Instagram handle
          </label>
          <input
            id="st-ig"
            className={field}
            value={draft.instagramHandle}
            onChange={(e) => set('instagramHandle', e.target.value)} />
          
        </div>
        <div>
          <label className={label} htmlFor="st-email">
            Contact e-mail
          </label>
          <input
            id="st-email"
            type="email"
            className={field}
            value={draft.email}
            onChange={(e) => set('email', e.target.value)} />
          
        </div>
        <div>
          <label className={label} htmlFor="st-location">
            Location line
          </label>
          <input
            id="st-location"
            className={field}
            value={draft.location}
            onChange={(e) => set('location', e.target.value)} />
          
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="st-greeting">
          WhatsApp message opener
        </label>
        <input
          id="st-greeting"
          className={field}
          value={draft.whatsappGreeting}
          onChange={(e) => set('whatsappGreeting', e.target.value)} />
        
        <p className="mt-2 text-[10px] text-ink/45">
          The product name, material, price, size and reference are appended
          automatically.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="submit"
          className="bg-ink text-white text-[10px] uppercase tracking-[0.22em] px-8 py-3 hover:bg-ink/85 transition-colors">
          
          Save settings
        </button>
        {saved &&
        <span role="status" className="text-[10px] uppercase tracking-[0.18em] text-ink/55">
            Saved
          </span>
        }
      </div>
    </form>);

}