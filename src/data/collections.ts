export interface CollectionEntry {
  name: string;
  blurb: string;
  images: string[];
}

export const collections: CollectionEntry[] = [
{
  name: 'Still water',
  blurb: 'The quietest shapes we make — thin chains, unbroken curves.',
  images: ["/2026d462-7695-432a-b305-6162f3d03879.jpg", "/eb5e1a1c-f1c6-4931-8b40-63f762af11ac.jpg", "/d03038a5-808a-48aa-9612-4c934f781af7.jpg"]




},
{
  name: 'Pebble set',
  blurb: 'Hammered, rounded, worn smooth — jewellery shaped like riverstone.',
  images: ["/75071c55-25d8-4460-938c-8ac2c024b836.jpg", "/14596285-fa51-4ac1-9054-44e0c123172d.jpg", "/fd6c8bbe-983e-461e-8add-4ee457825108.jpg"]




},
{
  name: 'Horizont bar',
  blurb: 'Weighted links and straight lines with an oxidised depth.',
  images: ["/c72ca0e8-0c84-466c-9a32-49f552db45e2.jpg", "/a30acac6-2c8a-4e42-af95-62e78b9a38d9.jpg", "/417d8b79-c67b-46ff-a76d-4e6444884897.jpg"]




},
{
  name: 'Bare loop',
  blurb: 'Circles reduced to a single drawn line.',
  images: ["/be4faa2c-2e30-43f0-b49f-485ef330cf7f.jpg", "/79ad0203-ef0c-4ed8-9a1a-6a08d6f969d2.jpg", "/f7b6bf16-8566-4565-9f44-0e5e03e8928e.jpg"]




},
{
  name: 'Pearl reverie',
  blurb: 'Natural baroque pearls, set so no two pieces repeat.',
  images: ["/14596285-fa51-4ac1-9054-44e0c123172d.jpg", "/bec578c5-1949-4932-a5a9-c6e9d90524df.jpg", "/fd6c8bbe-983e-461e-8add-4ee457825108.jpg"]




}];


export const categoryNav = [
{ label: 'All products', value: '' },
{ label: 'Rings', value: 'Rings' },
{ label: 'Earrings', value: 'Earrings' },
{ label: 'Necklaces', value: 'Necklaces' },
{ label: 'Bracelets', value: 'Bracelets' },
{ label: 'Cuffs', value: 'Cuffs' }];


export const instagramPosts = [
{
  id: 'ig-1',
  image: "/be4faa2c-2e30-43f0-b49f-485ef330cf7f.jpg",

  alt: 'Thin gold hoop earrings on cream linen'
},
{
  id: 'ig-2',
  image: "/f7b6bf16-8566-4565-9f44-0e5e03e8928e.jpg",

  alt: 'Coiled gold ring on a white ceramic tile'
},
{
  id: 'ig-3',
  image: "/0f8d6c7e-5dde-44af-9de5-208817dad6b4.jpg",

  alt: 'Model wearing a beaded gold necklace'
},
{
  id: 'ig-4',
  image: "/14596285-fa51-4ac1-9054-44e0c123172d.jpg",

  alt: 'Gold signet ring with a baroque pearl'
},
{
  id: 'ig-5',
  image: "/79ad0203-ef0c-4ed8-9a1a-6a08d6f969d2.jpg",

  alt: 'Model wearing a gold double circle drop earring'
}];