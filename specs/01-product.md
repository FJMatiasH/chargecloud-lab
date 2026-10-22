# Product spec: chargecloud Lab
## Goal
A fast, accessible, bilingual (en, de) marketing site that marketing can edit
in Storyblok without developer help.
## Pages
- /en and /de: home page built only from Storyblok blocks.
- A language switcher visible on every page.
- A 404 page with a link home.
## Success criteria
- Lighthouse (mobile, production build): Performance 90+, Accessibility 100,
SEO 100.
- LCP under 2.5 s and CLS under 0.1.
- A marketer can add, reorder and edit blocks with no code changes.
- Lint, tests and build pass on every pull request.
## Out of scope for now
Authentication, e-commerce, blog, search.