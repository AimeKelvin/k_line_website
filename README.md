# K-Line Accessories — Full-stack CMS storefront

A Vite + React storefront with an Express/Node.js API, MongoDB persistence, Mongo-backed session authentication, and an owner CMS.

## What is included

- Public catalog and product detail pages backed by MongoDB.
- Admin sign-in with email/password; passwords are bcrypt-hashed and the browser receives only an HTTP-only session cookie.
- MongoDB-backed sessions using `connect-mongo`.
- Product CMS: create, edit, delete, stock state, categories, collections, pricing, material, descriptions, highlights, specifications, sizing, and gallery image URLs.
- Store settings CMS including the WhatsApp number, greeting, Instagram, email, location, brand name, and tagline.
- **Order on WhatsApp** buttons generate a pre-filled message containing the exact product, material, collection, price, selected size, and product reference, then open the WhatsApp number configured in Admin.
- Input validation with Zod, login/API rate limiting, Helmet security headers, same-origin mutation checks, and production-only secure cookies.
- Automatic first-run seed of the supplied demo catalog/settings. The first admin account is created from environment variables if the database has no admin yet.

## Local development

1. Install Node.js 20+ and MongoDB, or use MongoDB Atlas.
2. Copy `.env.example` to `.env` and set strong credentials.
3. Run `npm install`.
4. Run `npm run dev`.
5. Storefront: `http://localhost:5173`; admin: `http://localhost:5173/admin`; API: `http://localhost:4000/api`.

Vite proxies `/api` to Express during development, so cookies work without changing frontend code.

## Environment variables

```env
NODE_ENV=development
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/kline-shop
SESSION_SECRET=replace-with-a-long-random-secret-at-least-32-characters
ADMIN_EMAIL=owner@example.com
ADMIN_PASSWORD=replace-with-a-strong-password
CLIENT_ORIGIN=http://localhost:5173
```

For production, `MONGODB_URI`, `SESSION_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` are mandatory. Never commit `.env`.

## Production

Run:

```bash
npm install
npm run build
npm start
```

In production Express serves the compiled Vite `dist/` folder and the API from the same origin. Set `NODE_ENV=production` and point `CLIENT_ORIGIN` at the public HTTPS origin (for example `https://shop.example.com`).

A typical deployment can use Render/Railway/Fly.io plus MongoDB Atlas. The application itself does not require a separate frontend deployment because Express serves the built frontend.

## Admin account behavior

On the first start against an empty database, the server hashes `ADMIN_PASSWORD` and creates `ADMIN_EMAIL`. Once an admin exists, changing those environment variables does not overwrite the existing database account.

## Product images

The CMS currently stores image URLs/paths, matching the original frontend. The supplied demo images remain in `public/`. For a production shop that needs direct image uploads, use a persistent object-storage service such as Cloudinary or S3 and save the resulting URLs in the existing `images` array.

## API overview

Public reads:
- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/settings`
- `GET /api/auth/me`

Admin/session:
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
- `PUT /api/settings`

Health check: `GET /api/health`.
