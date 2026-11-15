# BuilderSupply — E-commerce Store for Builders

A modern Next.js e-commerce starter focused on tools, hardware, and materials for professional builders and contractors.

**Live:** [e-commerce-store-for-builders](https://e-commerce-store-for-builders.vercel.app)

> **Built entirely with Grok** (free tier) using the **Vercel** and **GitHub** connectors — no local terminal, no Vercel CLI, and no manual dashboard setup beyond granting the GitHub App access once. Everything was driven from a single chat conversation.

## Features

- Product listing with category filters
- Product detail pages
- Client-side cart (localStorage)
- Responsive design with Tailwind CSS
- Clean, professional UI

## Tech Stack

- Next.js 15.5 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Lucide icons
- Deployed on Vercel

---

## How This Project Was Created (via Grok)

This project was created end-to-end inside a Grok conversation using connected tools.

### 1. Connect Vercel & GitHub in Grok

- Connected the Vercel and GitHub accounts so Grok could create projects, repos, push code, and trigger deployments.

### 2. Create the Vercel project

- Asked Grok to create a new Vercel project named `e-commerce-store-for-builders`
- Framework preset: **Next.js**
- Linked to the existing Vercel team

### 3. Create an empty GitHub repository

- Asked Grok to create a new public GitHub repo: `Build-Fusion/e-commerce-store-for-builders`
- Initialized with a README

### 4. Link GitHub repo to the Vercel project

- Linked the GitHub repository to the Vercel project through Grok
- Production branch: `main`
- Automatic deployments on push enabled

> **Note:** If Vercel cannot see a newly created repo, grant the Vercel GitHub App access to the repository (GitHub → Settings → Applications → Vercel → Repository access). This was the only manual step required.

### 5. Push the Next.js e-commerce application

- Instructed Grok to push a complete App Router starter, including:
  - `app/` — pages (home, products, product detail, cart)
  - `components/` — Header, Footer, ProductCard, AddToCartButton
  - `lib/products.ts` — sample product catalog (tools, safety, fasteners, measuring)
  - `lib/cart.tsx` — client-side cart with localStorage persistence
  - Tailwind CSS + TypeScript config

### 6. Fix deployment issues (still from chat)

- First builds failed because of a **Vercel security block** on older Next.js versions
- Grok upgraded the project to the patched version required by the November 2026 security release:
  - `next@15.5.29`
  - `eslint-config-next@15.5.29`
- Also wrapped the app with `CartProvider` so the cart works across pages

### 7. Production deployment

- After the security upgrade, the build succeeded
- Status: **READY**
- Automatic production deployments now run on every push to `main`

---

## Getting Started (Local)

```bash
git clone https://github.com/Build-Fusion/e-commerce-store-for-builders.git
cd e-commerce-store-for-builders
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

This project is connected to Vercel. Any push to `main` triggers a production deployment.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Project Structure

```
app/
  layout.tsx          # Root layout + CartProvider
  page.tsx            # Home / landing
  products/
    page.tsx          # Product listing + filters
    [id]/page.tsx     # Product detail
  cart/page.tsx       # Shopping cart
  providers.tsx       # Client providers
components/
  Header.tsx
  Footer.tsx
  ProductCard.tsx
  AddToCartButton.tsx
lib/
  products.ts         # Product data + types
  cart.tsx            # Cart context + hooks
```

## License

MIT
