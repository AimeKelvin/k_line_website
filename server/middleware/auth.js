export function requireAdmin(req, res, next) {
  if (!req.session?.adminId) return res.status(401).json({ error: 'Authentication required' });
  next();
}

export function requireSameOrigin(req, res, next) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
  const origin = req.get('origin');
  const host = req.get('host');
  if (!origin || !host) return next();
  try {
    if (new URL(origin).host !== host && origin !== process.env.CLIENT_ORIGIN) {
      return res.status(403).json({ error: 'Invalid request origin' });
    }
  } catch {
    return res.status(403).json({ error: 'Invalid request origin' });
  }
  next();
}
