import type { Product, StoreSettings } from '../types/product';

export function buildEnquiryMessage(
product: Product,
settings: StoreSettings,
size?: string)
: string {
  const lines = [
  `${settings.whatsappGreeting}`,
  '',
  `I want to order this piece:`,
  `• ${product.name}`,
  `• ${product.material}`,
  `• Collection: ${product.collection}`,
  `• Price: $${product.price}`];


  if (size) lines.push(`• Size: ${size}`);

  lines.push(`• Reference: ${product.id}`);
  lines.push('');
  lines.push('Could you confirm availability and delivery details?');

  return lines.join('\n');
}

export function whatsappLink(
settings: StoreSettings,
message: string)
: string {
  const number = settings.whatsappNumber.replace(/[^\d]/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function instagramDmLink(settings: StoreSettings): string {
  return `https://ig.me/m/${settings.instagramHandle.replace(/^@/, '')}`;
}

export function instagramProfileLink(settings: StoreSettings): string {
  return `https://instagram.com/${settings.instagramHandle.replace(/^@/, '')}`;
}

export function generalWhatsappLink(settings: StoreSettings): string {
  return whatsappLink(
    settings,
    `${settings.whatsappGreeting}\n\nI'd like to ask about your pieces.`
  );
}