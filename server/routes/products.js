import { Router } from 'express';
import { z } from 'zod';
import { Product } from '../models/Product.js';
import { requireAdmin } from '../middleware/auth.js';

export const productsRouter = Router();
const spec = z.object({ label: z.string().max(300), value: z.string().max(500) });
const schema = z.object({
  id: z.string().min(1).max(180).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1).max(160), category: z.enum(['Rings','Earrings','Necklaces','Bracelets','Cuffs']),
  collection: z.string().min(1).max(120), price: z.number().nonnegative(), material: z.string().max(160),
  shortDescription: z.string().max(500), description: z.string().max(6000), highlights: z.array(z.string().max(300)).max(30),
  specs: z.array(spec).max(40), sizes: z.array(z.string().max(40)).max(50), images: z.array(z.string().max(2000)).min(1).max(20),
  inStock: z.boolean(), isNew: z.boolean(), isBestseller: z.boolean()
});

productsRouter.get('/', async (_req, res, next) => { try { res.json(await Product.find().sort({ createdAt: -1 })); } catch (e) { next(e); } });
productsRouter.get('/:id', async (req, res, next) => { try { const p = await Product.findOne({ id: req.params.id }); if (!p) return res.status(404).json({ error: 'Product not found' }); res.json(p); } catch (e) { next(e); } });
productsRouter.post('/', requireAdmin, async (req, res, next) => { try { const body = schema.parse(req.body); res.status(201).json(await Product.create(body)); } catch (e) { next(e); } });
productsRouter.put('/:id', requireAdmin, async (req, res, next) => { try { const body = schema.parse(req.body); const p = await Product.findOneAndUpdate({ id: req.params.id }, body, { new: true, runValidators: true }); if (!p) return res.status(404).json({ error: 'Product not found' }); res.json(p); } catch (e) { next(e); } });
productsRouter.delete('/:id', requireAdmin, async (req, res, next) => { try { const p = await Product.findOneAndDelete({ id: req.params.id }); if (!p) return res.status(404).json({ error: 'Product not found' }); res.status(204).end(); } catch (e) { next(e); } });
