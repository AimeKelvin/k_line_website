import mongoose from 'mongoose';

const specSchema = new mongoose.Schema({ label: { type: String, trim: true }, value: { type: String, trim: true } }, { _id: false });

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, trim: true, lowercase: true },
  name: { type: String, required: true, trim: true, maxlength: 160 },
  category: { type: String, required: true, enum: ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Cuffs'] },
  collection: { type: String, required: true, trim: true, maxlength: 120 },
  price: { type: Number, required: true, min: 0 },
  material: { type: String, trim: true, maxlength: 160, default: '' },
  shortDescription: { type: String, trim: true, maxlength: 500, default: '' },
  description: { type: String, trim: true, maxlength: 6000, default: '' },
  highlights: [{ type: String, trim: true, maxlength: 300 }],
  specs: [specSchema],
  sizes: [{ type: String, trim: true, maxlength: 40 }],
  images: [{ type: String, trim: true, maxlength: 2000 }],
  inStock: { type: Boolean, default: true },
  isNew: { type: Boolean, default: false },
  isBestseller: { type: Boolean, default: false }
}, { timestamps: true, versionKey: false });

productSchema.index({ name: 'text', shortDescription: 'text', description: 'text' });
productSchema.set('toJSON', { transform: (_doc, ret) => { delete ret._id; return ret; } });
export const Product = mongoose.model('Product', productSchema);
