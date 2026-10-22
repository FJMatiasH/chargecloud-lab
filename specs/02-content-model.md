# Content model (Storyblok blocks to React components)
| Storyblok block | React component | Notes |
| --- | --- | --- |
| page | src/app/[locale]/[[...slug]]/page.tsx | content type; renders body
blocks |
| hero | src/components/blocks/Hero.tsx | h1 headline, image with required
alt, CTA link |
| feature_grid | src/components/blocks/FeatureGrid.tsx | h2 title, list of
features |
| feature | src/components/blocks/Feature.tsx | h3 title, text, icon |
| cta_banner | src/components/blocks/CtaBanner.tsx | h2 title, text, button |
| contact_form | src/components/blocks/ContactForm.tsx | client component,
uses a Server Action |
Rules
- Unknown blocks render nothing in production and a visible warning in
development.
- Fetch published content in production; draft content only with the preview
token.
- Content slugs: en/home and de/home.