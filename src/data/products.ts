import type { Product, StoreSettings } from '../types/product';

const IMG = {
  heroModel: "/e0c18c43-ece2-46e9-b6b4-b189e8f68358.jpg",

  drops: "/c72ca0e8-0c84-466c-9a32-49f552db45e2.jpg",

  starPendant: "/2026d462-7695-432a-b305-6162f3d03879.jpg",

  coreRing: "/eb5e1a1c-f1c6-4931-8b40-63f762af11ac.jpg",

  halo: "/d03038a5-808a-48aa-9612-4c934f781af7.jpg",

  sol: "/f79cb01c-46ad-4d38-8877-16da13cf65f0.jpg",

  silverNecklace: "/a30acac6-2c8a-4e42-af95-62e78b9a38d9.jpg",

  calmRing: "/417d8b79-c67b-46ff-a76d-4e6444884897.jpg",

  cloudline: "/bec578c5-1949-4932-a5a9-c6e9d90524df.jpg",

  chooseModel: "/e846a68a-e299-47dc-af33-c68150aba58c.jpg",

  stoneRing: "/68ea37fe-64c1-4952-8d3c-34b44e932977.jpg",

  driftwood: "/98ec5c14-9fde-4f07-b44b-79119b31cd85.jpg",

  pearlDrop: "/75071c55-25d8-4460-938c-8ac2c024b836.jpg",

  pearlRing: "/14596285-fa51-4ac1-9054-44e0c123172d.jpg",

  pearlCuff: "/fd6c8bbe-983e-461e-8add-4ee457825108.jpg",

  hoops: "/be4faa2c-2e30-43f0-b49f-485ef330cf7f.jpg",

  necklaceModel: "/0f8d6c7e-5dde-44af-9de5-208817dad6b4.jpg",

  earCuffModel: "/79ad0203-ef0c-4ed8-9a1a-6a08d6f969d2.jpg",

  footerModel: "/9ce90218-9b96-4a7e-a114-f602e9ad3b8a.jpg",

  ringTile: "/f7b6bf16-8566-4565-9f44-0e5e03e8928e.jpg"

};

export const RING_SIZES = ['5', '6', '7', '8', '9'];

export const defaultSettings: StoreSettings = {
  brandName: 'K-Line Accessories',
  tagline: 'Soft forms. Lasting beauty',
  whatsappNumber: '15551234567',
  whatsappGreeting: 'Hello K-Line Accessories!',
  instagramHandle: 'klineaccessories',
  email: 'hello@kline-accessories.com',
  location: 'Studio visits by appointment'
};

export const defaultProducts: Product[] = [
{
  id: 'drops-gold-earrings',
  name: 'Drops gold earrings',
  category: 'Earrings',
  collection: 'Still water',
  price: 540,
  material: '14k yellow gold',
  shortDescription:
  'Weightless teardrop silhouettes with a high-polish finish.',
  description:
  'A pair of hollow-formed teardrops, hand-polished to a liquid shine. Their volume reads bold from across the room, yet each earring weighs less than a coin — designed to be worn from morning to midnight without a second thought.',
  highlights: [
  'Hand-polished hollow form, feather-light on the lobe',
  'Secure butterfly backs included',
  'Tarnish-resistant 14k yellow gold'],

  specs: [
  { label: 'Metal', value: '14k yellow gold' },
  { label: 'Drop length', value: '28 mm' },
  { label: 'Width', value: '16 mm' },
  { label: 'Weight', value: '4.2 g per pair' },
  { label: 'Closure', value: 'Post with butterfly back' },
  { label: 'Made in', value: 'Small-batch atelier production' }],

  sizes: [],
  images: [IMG.drops, IMG.heroModel, IMG.hoops, IMG.earCuffModel],
  inStock: true,
  isNew: true,
  isBestseller: false
},
{
  id: 'star-gold-pendant',
  name: 'Star gold pendant',
  category: 'Necklaces',
  collection: 'Still water',
  price: 175,
  material: '14k yellow gold',
  shortDescription: 'A whisper-thin chain carrying a single star.',
  description:
  'The quietest piece in the collection. A 0.8 mm cable chain holds a small faceted star that catches light as you move. Made to be layered, or worn entirely alone.',
  highlights: [
  'Adjustable 40–45 cm chain',
  'Layers cleanly with longer pendants',
  'Suitable for sensitive skin'],

  specs: [
  { label: 'Metal', value: '14k yellow gold' },
  { label: 'Chain length', value: '40 cm, extendable to 45 cm' },
  { label: 'Chain width', value: '0.8 mm' },
  { label: 'Pendant', value: '7 mm star' },
  { label: 'Weight', value: '1.9 g' },
  { label: 'Closure', value: 'Lobster clasp' }],

  sizes: [],
  images: [IMG.starPendant, IMG.necklaceModel, IMG.footerModel, IMG.silverNecklace],
  inStock: true,
  isNew: true,
  isBestseller: false
},
{
  id: 'core-gold-ring',
  name: 'Core gold ring',
  category: 'Rings',
  collection: 'Horizont bar',
  price: 220,
  material: '14k yellow gold',
  shortDescription: 'Stacked coils shaped into one continuous band.',
  description:
  'Four coils wrap into a single sculptural band with a soft, hand-finished surface. It reads as a stack without the noise of separate rings shifting on the finger.',
  highlights: [
  'One-piece construction, no moving parts',
  'Comfort-rounded inner band',
  'Free resizing within 30 days'],

  specs: [
  { label: 'Metal', value: '14k yellow gold' },
  { label: 'Band width', value: '9 mm at widest point' },
  { label: 'Profile', value: 'Rounded comfort fit' },
  { label: 'Weight', value: '5.6 g (size 7)' },
  { label: 'Finish', value: 'Hand-brushed and polished' },
  { label: 'Sizing', value: 'US 5 – 9' }],

  sizes: RING_SIZES,
  images: [IMG.coreRing, IMG.ringTile, IMG.stoneRing, IMG.calmRing],
  inStock: true,
  isNew: true,
  isBestseller: false
},
{
  id: 'halo-gold-earrings',
  name: 'Halo gold earrings',
  category: 'Earrings',
  collection: 'Bare loop',
  price: 310,
  material: '14k yellow gold',
  shortDescription: 'Two circles suspended in quiet geometry.',
  description:
  'A smaller ring holds a larger one below it, so the pair swings gently with movement. Architectural at a glance, soft in the way it actually wears.',
  highlights: [
  'Articulated joint for natural movement',
  'Balanced weight distribution',
  'Everyday-to-evening scale'],

  specs: [
  { label: 'Metal', value: '14k yellow gold' },
  { label: 'Total drop', value: '42 mm' },
  { label: 'Lower ring', value: '20 mm diameter' },
  { label: 'Weight', value: '5.1 g per pair' },
  { label: 'Closure', value: 'Post with butterfly back' },
  { label: 'Finish', value: 'High polish' }],

  sizes: [],
  images: [IMG.halo, IMG.earCuffModel, IMG.hoops, IMG.drops],
  inStock: true,
  isNew: true,
  isBestseller: false
},
{
  id: 'sol-gold-earrings',
  name: 'Sol gold earrings',
  category: 'Earrings',
  collection: 'Pebble set',
  price: 460,
  material: '14k yellow gold',
  shortDescription: 'Hammered hoops with a sun-worn texture.',
  description:
  'Each hoop is hammered by hand, so no two catch the light in exactly the same way. Thick enough to feel substantial, light enough to forget.',
  highlights: [
  'Hand-hammered — every pair is unique',
  'Hinged closure sits flush',
  'Our most repeated piece'],

  specs: [
  { label: 'Metal', value: '14k yellow gold' },
  { label: 'Diameter', value: '24 mm' },
  { label: 'Thickness', value: '5 mm' },
  { label: 'Weight', value: '6.8 g per pair' },
  { label: 'Closure', value: 'Hinged snap' },
  { label: 'Finish', value: 'Hand-hammered' }],

  sizes: [],
  images: [IMG.sol, IMG.hoops, IMG.earCuffModel, IMG.halo],
  inStock: true,
  isNew: false,
  isBestseller: true
},
{
  id: 'star-silver-necklace',
  name: 'Star silver necklace',
  category: 'Necklaces',
  collection: 'Horizont bar',
  price: 210,
  material: 'Sterling silver',
  shortDescription: 'A weighted chain with a cool, tactile drape.',
  description:
  'Chunky oval links in solid sterling silver, oxidised slightly in the recesses so the chain reads with depth rather than flat shine. Heavy in the hand, comfortable on the neck.',
  highlights: [
  'Solid links, never hollow',
  'Lightly oxidised for contrast',
  'Wears well with layered pieces'],

  specs: [
  { label: 'Metal', value: '925 sterling silver' },
  { label: 'Length', value: '48 cm' },
  { label: 'Link width', value: '11 mm' },
  { label: 'Weight', value: '38 g' },
  { label: 'Closure', value: 'Oversized lobster clasp' },
  { label: 'Finish', value: 'Brushed with oxidised recesses' }],

  sizes: [],
  images: [IMG.silverNecklace, IMG.driftwood, IMG.necklaceModel, IMG.footerModel],
  inStock: true,
  isNew: false,
  isBestseller: true
},
{
  id: 'calm-gold-ring',
  name: 'Calm gold ring',
  category: 'Rings',
  collection: 'Still water',
  price: 175,
  material: '14k white gold',
  shortDescription: 'A smooth wrap that ends without a seam.',
  description:
  'The band tapers as it wraps, finishing in a soft point that rests against the finger. Nothing to catch, nothing to fuss with.',
  highlights: [
  'Slightly flexible open band',
  'Adjusts across half a size',
  'Reads beautifully stacked'],

  specs: [
  { label: 'Metal', value: '14k white gold' },
  { label: 'Band width', value: '6 mm tapering to 2 mm' },
  { label: 'Weight', value: '3.4 g' },
  { label: 'Profile', value: 'Open wrap' },
  { label: 'Finish', value: 'Mirror polish' },
  { label: 'Sizing', value: 'US 5 – 9' }],

  sizes: RING_SIZES,
  images: [IMG.calmRing, IMG.stoneRing, IMG.coreRing, IMG.ringTile],
  inStock: true,
  isNew: false,
  isBestseller: true
},
{
  id: 'cloudline-gold-ring',
  name: 'Cloudline gold ring with a pearl',
  category: 'Rings',
  collection: 'Pearl reverie',
  price: 265,
  material: '14k yellow gold',
  shortDescription: 'A single freshwater pearl set into a soft dome.',
  description:
  'A rounded gold dome cradles one baroque freshwater pearl. Because the pearls are natural, each ring arrives with its own shape and lustre.',
  highlights: [
  'Natural baroque pearl — shape varies',
  'Bezel setting protects the pearl',
  'Photographs of your exact piece on request'],

  specs: [
  { label: 'Metal', value: '14k yellow gold' },
  { label: 'Stone', value: 'Baroque freshwater pearl, 9–11 mm' },
  { label: 'Band width', value: '4 mm' },
  { label: 'Weight', value: '5.2 g (size 7)' },
  { label: 'Setting', value: 'Full bezel' },
  { label: 'Sizing', value: 'US 5 – 9' }],

  sizes: RING_SIZES,
  images: [IMG.cloudline, IMG.pearlRing, IMG.pearlCuff, IMG.pearlDrop],
  inStock: true,
  isNew: false,
  isBestseller: true
},
{
  id: 'pearl-reverie-cuff',
  name: 'Pearl reverie ear cuff',
  category: 'Cuffs',
  collection: 'Pearl reverie',
  price: 290,
  material: '14k gold vermeil',
  shortDescription: 'A curved cuff scattered with tiny pearls.',
  description:
  'Sits along the upper ear without a piercing. The pearls are graduated in size so the curve feels like it grows out of the ear rather than clipping onto it.',
  highlights: [
  'No piercing required',
  'Gently adjustable for a custom hold',
  'Sold individually'],

  specs: [
  { label: 'Metal', value: '14k gold vermeil over sterling silver' },
  { label: 'Stones', value: '11 freshwater pearls, 2–4 mm' },
  { label: 'Length', value: '32 mm' },
  { label: 'Weight', value: '2.6 g' },
  { label: 'Fit', value: 'Adjustable cuff, no piercing' },
  { label: 'Sold as', value: 'Single earring' }],

  sizes: [],
  images: [IMG.pearlCuff, IMG.pearlDrop, IMG.pearlRing, IMG.chooseModel],
  inStock: true,
  isNew: false,
  isBestseller: false
},
{
  id: 'pebble-pearl-ring',
  name: 'Pebble pearl ring',
  category: 'Rings',
  collection: 'Pebble set',
  price: 340,
  material: '14k yellow gold',
  shortDescription: 'A signet reimagined around a baroque pearl.',
  description:
  'The wide signet face is hollowed to hold a single large pearl, so the ring keeps the presence of a signet without the weight.',
  highlights: [
  'Statement scale, everyday weight',
  'Natural pearl, no two alike',
  'Free resizing within 30 days'],

  specs: [
  { label: 'Metal', value: '14k yellow gold' },
  { label: 'Stone', value: 'Baroque freshwater pearl, 12 mm' },
  { label: 'Face width', value: '14 mm' },
  { label: 'Weight', value: '7.1 g (size 7)' },
  { label: 'Setting', value: 'Recessed bezel' },
  { label: 'Sizing', value: 'US 5 – 9' }],

  sizes: RING_SIZES,
  images: [IMG.pearlRing, IMG.pearlCuff, IMG.pearlDrop, IMG.stoneRing],
  inStock: false,
  isNew: false,
  isBestseller: false
},
{
  id: 'bare-loop-hoops',
  name: 'Bare loop hoops',
  category: 'Earrings',
  collection: 'Bare loop',
  price: 195,
  material: '14k gold fill',
  shortDescription: 'The thinnest hoop we make.',
  description:
  'A 1 mm wire hoop that reads as a drawn line rather than an object. The pair most of our customers never take off.',
  highlights: [
  'Endless hoop closure',
  'Shower and sleep safe',
  'Available in two diameters on request'],

  specs: [
  { label: 'Metal', value: '14k gold fill' },
  { label: 'Diameter', value: '38 mm' },
  { label: 'Wire thickness', value: '1 mm' },
  { label: 'Weight', value: '1.4 g per pair' },
  { label: 'Closure', value: 'Endless hoop' },
  { label: 'Care', value: 'Water resistant' }],

  sizes: [],
  images: [IMG.hoops, IMG.sol, IMG.earCuffModel, IMG.heroModel],
  inStock: true,
  isNew: false,
  isBestseller: false
},
{
  id: 'horizont-chain-bracelet',
  name: 'Horizont chain bracelet',
  category: 'Bracelets',
  collection: 'Horizont bar',
  price: 230,
  material: 'Sterling silver',
  shortDescription: 'A shortened version of our heaviest chain.',
  description:
  'Solid sterling links with the same oxidised depth as the Star necklace, cut to a bracelet length that sits just past the wrist bone.',
  highlights: [
  'Solid sterling links',
  'Two length options',
  'Pairs with the Star silver necklace'],

  specs: [
  { label: 'Metal', value: '925 sterling silver' },
  { label: 'Length', value: '19 cm' },
  { label: 'Link width', value: '9 mm' },
  { label: 'Weight', value: '21 g' },
  { label: 'Closure', value: 'Lobster clasp' },
  { label: 'Finish', value: 'Brushed with oxidised recesses' }],

  sizes: [],
  images: [IMG.driftwood, IMG.silverNecklace, IMG.ringTile, IMG.footerModel],
  inStock: true,
  isNew: false,
  isBestseller: false
}];


export const bestsellersBlurb =
"K-Line's bestselling pieces capture the spirit of simple, essential beauty that our customers crave. They are chosen time and again because they offer the perfect balance of everyday wearability and refined style.";