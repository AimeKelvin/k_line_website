import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useStore } from '../contexts/StoreContext';
import { generalWhatsappLink } from '../utils/contact';

export function FloatingContact() {
  const { settings } = useStore();

  return (
    <a
      href={generalWhatsappLink(settings)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 bg-ink text-white text-[9px] uppercase tracking-[0.2em] px-5 py-3.5 shadow-lg hover:bg-ink/85 transition-colors">
      
      <WhatsAppIcon size={15} />
      <span className="hidden sm:inline">Chat with us</span>
      <span className="sr-only sm:hidden">Chat with us on WhatsApp</span>
    </a>);

}