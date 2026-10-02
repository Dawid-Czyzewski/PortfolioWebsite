# Portfolio Website

Portfolio Dawida Czyżewskiego – projekty, doświadczenie i kontakt (PL / EN).

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- i18next / react-i18next
- Lucide + react-icons

## Uruchomienie

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikacja: [http://localhost:3000](http://localhost:3000)

## Skrypty

| Komenda | Opis |
|---------|------|
| `npm run dev` | Serwer deweloperski |
| `npm run build` | Build produkcyjny |
| `npm start` | Start buildu produkcyjnego |
| `npm run typecheck` | Sprawdzenie typów TypeScript |

## SEO

- Metadata / Open Graph / Twitter Cards na każdej stronie
- `sitemap.xml`, `robots.txt`
- JSON-LD (`Person`)
- Canonical URL (`NEXT_PUBLIC_SITE_URL`)

## Env

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://dawid-developer.pl
```
