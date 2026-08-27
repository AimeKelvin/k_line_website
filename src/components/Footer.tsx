import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useStore } from '../contexts/StoreContext';
import {
  generalWhatsappLink,
  instagramProfileLink } from
'../utils/contact';

const catalogLinks = ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Cuffs'];
const collectionLinks = [
'Still water',
'Pebble set',
'Horizont bar',
'Bare loop',
'Pearl reverie'];


export function Footer() {
  const { settings } = useStore();

  return (
    <footer className="bg-shell px-6 md:px-10 lg:px-14 pt-12 pb-8">
      <div className="pb-8">
        <Logo className="items-start" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
        <img
          src="/9ce90218-9b96-4a7e-a114-f602e9ad3b8a.jpg"
          alt="Model wearing layered K-Line gold necklaces"
          className="col-span-2 md:col-span-1 aspect-[3/4] w-full object-cover"
          loading="lazy" />
        

        <nav aria-label="Catalog">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-ink mb-3">
            Catalog
          </h2>
          <ul className="space-y-1.5">
            {catalogLinks.map((link) =>
            <li key={link}>
                <Link
                to={`/catalog?category=${encodeURIComponent(link)}`}
                className="text-[11px] text-ink/65 hover:text-ink transition-colors">
                
                  {link}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <nav aria-label="Collections">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-ink mb-3">
            Collections
          </h2>
          <ul className="space-y-1.5">
            {collectionLinks.map((link) =>
            <li key={link}>
                <Link
                to={`/catalog?collection=${encodeURIComponent(link)}`}
                className="text-[11px] text-ink/65 hover:text-ink transition-colors">
                
                  {link}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div>
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-ink mb-3">
            Visit
          </h2>
          <ul className="space-y-2 text-[11px] text-ink/65">
            <li className="flex items-start gap-2">
              <MapPin size={13} strokeWidth={1.3} className="mt-0.5 shrink-0" />
              {settings.location}
            </li>
            <li className="flex items-start gap-2">
              <Mail size={13} strokeWidth={1.3} className="mt-0.5 shrink-0" />
              <a href={`mailto:${settings.email}`} className="hover:text-ink">
                {settings.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-ink mb-3">
            Ordering is a conversation
          </h2>
          <p className="text-[11px] leading-[1.7] text-ink/65">
            Tell us which piece caught your eye and we&rsquo;ll take care of the
            rest — sizing, photos of the exact item, and delivery.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={generalWhatsappLink(settings)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ink text-white text-[9px] uppercase tracking-[0.22em] py-3 hover:bg-ink/85 transition-colors">
              
              <WhatsAppIcon size={13} />
              WhatsApp
            </a>
            <a
              href={instagramProfileLink(settings)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink text-ink text-[9px] uppercase tracking-[0.22em] py-3 hover:bg-ink hover:text-white transition-colors">
              
              <Instagram size={13} strokeWidth={1.4} />
              @{settings.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[9px] uppercase tracking-[0.16em] text-ink/45">
          © All rights reserved. {settings.brandName}, 2026
        </p>
        <Link
          to="/admin"
          className="text-[9px] uppercase tracking-[0.16em] text-ink/35 hover:text-ink transition-colors">
          
          Shop admin
        </Link>
      </div>
    </footer>);

}