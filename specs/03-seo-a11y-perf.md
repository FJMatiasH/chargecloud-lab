# SEO, accessibility and performance
## SEO
- generateMetadata per page: title, description, canonical, Open Graph,
hreflang for en and es.
- sitemap.ts listing every published page in both locales; robots.ts.
- JSON-LD Organization on the home page.
- One h1 per page; headings never skip levels.
## Accessibility (WCAG 2.2 AA)
- Landmarks (header, nav, main, footer), skip link, lang attribute set per
locale.
- Visible focus on every interactive element; full keyboard use.
- Form fields have labels; errors linked with aria-describedby and announced
with aria-live.
- Contrast 4.5:1 for text, 3:1 for UI elements. Respect prefers-reducedmotion.
## Performance
- next/image with width, height and sizes; priority only for the hero image.
- next/font for fonts. No layout shift.
- Server Components by default; keep client JavaScript small.
