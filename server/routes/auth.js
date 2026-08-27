import { Router } from 'express';
import bcrypt from 'bcryptjs';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { Admin } from '../models/Admin.js';

export const authRouter = Router();
const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: 'draft-7', legacyHeaders: false });
const loginSchema = z.object({ email: z.string().email(), password: z.string().min(8).max(200) });

authRouter.get('/me', async (req, res) => {
  if (!req.session.adminId) return res.json({ authenticated: false });
  const admin = await Admin.findById(req.session.adminId).select('email').lean();
  if (!admin) return res.json({ authenticated: false });
  res.json({ authenticated: true, email: admin.email });
});

authRouter.post('/login', loginLimiter, async (req, res, next) => {
  try {
    const body = loginSchema.parse(req.body);
    const admin = await Admin.findOne({ email: body.email.toLowerCase() });
    if (!admin || !(await bcrypt.compare(body.password, admin.passwordHash))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    await new Promise((resolve, reject) => req.session.regenerate(err => err ? reject(err) : resolve()));
    req.session.adminId = admin.id;
    await new Promise((resolve, reject) => req.session.save(err => err ? reject(err) : resolve()));
    res.json({ authenticated: true, email: admin.email });
  } catch (err) { next(err); }
});

authRouter.post('/logout', async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => req.session.destroy(err => err ? reject(err) : resolve()));
    res.clearCookie('kline.sid');
    res.status(204).end();
  } catch (err) { next(err); }
});
