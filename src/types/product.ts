export type Category =
'Rings' |
'Earrings' |
'Necklaces' |
'Bracelets' |
'Cuffs';

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  collection: string;
  price: number;
  material: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  specs: Spec[];
  sizes: string[];
  images: string[];
  inStock: boolean;
  isNew: boolean;
  isBestseller: boolean;
}

export interface StoreSettings {
  brandName: string;
  tagline: string;
  whatsappNumber: string;
  whatsappGreeting: string;
  instagramHandle: string;
  email: string;
  location: string;
}