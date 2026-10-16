# The Dope Company — Website Build Spec

## 1. Project overview

Build a polished, responsive website for **The Dope Company**, an independent digital product studio based in Kigali, Rwanda.

The site should feel like a premium digital-product/game storefront: dark, cinematic, confident, playful, and visually led. Use the supplied generated hero reference image as the primary visual direction. Recreate the layout in code rather than displaying the reference image as the website itself.

This is a portfolio and company-concept site.

## 2. Design direction

- Dark charcoal/near-black canvas with a subtle grid and restrained ambient lighting.
- Large, bold, high-contrast typography.
- Five colorful product cards overlapping/fanning across the lower part of the hero, inspired by the reference image.
- Product cards should feel like distinct, polished mini-brand worlds, not identical generic SaaS cards.
- Generous spacing and clear hierarchy. Keep supporting copy short.
- Avoid tiny uppercase labels, excessive microcopy, decorative text that adds no value, generic gradients everywhere, over-rounded UI, and the typical template-like SaaS layout.
- Use motion sparingly: card hover lift/tilt, subtle entrance animation, and smooth anchor scrolling. Respect `prefers-reduced-motion`.
- Use real product logos, fonts, colors, and supplied assets when available. Do not invent replacement logos if assets exist.
- Use icons from the project's chosen icon library, not emoji as UI icons.
- The design must work on desktop, tablet, and mobile. Do not simply shrink the desktop fan on mobile; reflow into a horizontally scrollable card row or clean stacked layout.

### Reference image

Use the generated image supplied alongside this brief as the main layout reference. Put a copy in `public/images/dope-company-hero-reference.png` if needed for local reference. It is a reference for composition and mood, not an image to use as the final page background.

## 3. Site navigation

Header:
- Brand wordmark: `the dope company`
- Products
- Team
- Careers

Keep the header minimal and legible. It may be sticky after scrolling, but should not dominate the page. On mobile, use a compact accessible menu.

## 4. Pages and routes

### `/` — Home

#### Hero
- Large headline: **The Dope Company**
- Short supporting line: **We build things the internet didn't know it needed.**
- The five product cards should be the main visual element. Use a layered, overlapping composition similar to the reference.
- Each card displays the product logo/name and a concise one-line description. Avoid stuffing the cards with extra labels or paragraphs.
- Use each product's own theme colors and typography within its card while maintaining consistent card sizing, spacing, shadows, and interaction behavior.

#### Product showcase
Display five products in this order:
1. **Bamenya** — AI chatbot. Suggested short line: “AI that gets it.”
2. **Melto** — Food delivery app. Suggested short line: “Good food, on its way.”
3. **Zolga** — Dating app. Suggested short line: “Dating, reimagined.”
4. **JustFundMe** — Crowdsourced fundraising. Suggested short line: “Big ideas need people.”
5. **KGL-Life** — Kigali-focused realistic gaming platform. Suggested short line: “Kigali, playable.”

Each card should be clickable and open its external link.


### `/team` — Team

Present the company as a human-led, AI-assisted studio.

- Feature the founder prominently: **Bucura — Founder / Product & Development**. Keep the role editable.
- Show AI tools as AI collaborators supporting roles such as engineering, design, research, and quality assurance.
- AI collaborator cards may be playful, but should identify them as AI tools/collaborators rather than pretending they are human employees.
- Use a polished editorial team grid with varied but consistent cards, avatars/logos, role labels, and short copy.
- Make names, tools, roles, descriptions, and images configurable in data.
- Do not fabricate human employees.

### `/careers` — Careers

Tone: playful and welcoming, not dismissive of people looking for work.

- Heading: **Careers for the chronically ambitious.**
- Explain that the studio is open to meeting developers, designers, builders, collaborators, and potential co-founders.
- Display configurable opportunities. Initial state may be “No formal openings right now” plus an invitation to send a portfolio or introduction.
- Optional humorous role concept: “Chief Touch-Grass Officer”, clearly presented as a joke rather than a real vacancy.
- Include a working application action using a configurable email or URL.
- Do not collect or store applicant data unless a real submission backend is intentionally implemented.

## 5. Product branding and asset setup

Create one central product data file, for example `src/data/products.ts`, containing:
- `name`
- `slug`
- `category`
- `tagline`
- `logo`
- `themeColor`
- `fontFamily` (only if a supplied font is available and legally usable)
- `shortDescription`
- `productUrl` (optional)
- `ctaLabel` (optional)

Suggested asset layout:
- `public/brand/` — company and products logos
- `public/fonts/` — supplied local font files, if licensing permits

Use supplied product logos, fonts, colors, and artwork rather than imposing one shared visual identity on every product. The overall company site remains dark and consistent, while product cards can use their own brand styling.

## 6. Suggested component structure

Keep components reusable and avoid putting the entire site into one huge page component.

```text
src/
  app/
    page.tsx
    team/
      page.tsx
    careers/
      page.tsx
    globals.css
  components/
    site-header.tsx
    site-footer.tsx
    hero-section.tsx
    product-card.tsx
    team-member.tsx
    career-opportunity.tsx
  data/
    products.ts
    team.ts
    careers.ts
  lib/
    utils.ts
public/
  brand/
  products/
  fonts/
  images/
```

Adapt the structure to the existing repository rather than replacing a working project setup without reason.

## 7. Technical requirements

- Prefer the project's existing framework and conventions. If starting from scratch, use Next.js App Router with TypeScript and Tailwind CSS.
- Use semantic HTML, accessible navigation, visible keyboard focus, descriptive image alt text, and sufficient color contrast.
- Optimize images and fonts; avoid unnecessary client-side JavaScript.
- Use responsive layouts and test at common desktop, tablet, and mobile widths.
- Add page metadata and sensible titles/descriptions for each route.
- Use reusable data-driven components for products and team members.
- Ensure all navigation, cards, and CTAs work.
- Provide hover, focus, active, and reduced-motion states.
- Avoid unnecessary dependencies. Use the project's existing icon library if present.
- Do not add authentication, payments, databases, analytics, or a CMS for this static portfolio unless specifically requested.
- Do not fabricate working demos or external links.

## 8. Quality bar

The result should feel art-directed, not automatically assembled from a generic template.

Priorities, in order:
1. Strong hero composition and typography.
2. Beautiful, readable overlapping product cards.
3. Product-specific logos, colors, and fonts.
4. Clean spacing and restrained copy.
5. Responsive behavior and polished interactions.
6. Complete, functional navigation and product card links.

Avoid:
- Tiny text used as decoration.
- Too many labels and badges.
- Long descriptions under every heading.
- Generic stock illustrations when product assets are available.
- Excessive glassmorphism, random gradients, and overdone animation.
- Placeholder buttons that do nothing.
- Claims that misrepresent a product's availability or capabilities.

## 9. Implementation instructions

1. Inspect the existing repository and identify its framework, styling system, routes, and available assets before changing files.
2. Use the supplied reference image to guide composition and visual hierarchy.
3. Build the homepage and hero first, then product cards that link to their external product URLs, followed by Team and Careers. Do not create individual product detail pages.
4. Use the real product branding assets supplied by the project owner. If an asset is missing, create a restrained placeholder that is easy to replace.
5. Keep copy short and prioritize visual design over explanatory text.
6. Run the project's lint, type-check, and build commands where available. Fix errors introduced by the implementation.
7. Summarize what was built and list any assets, links, or email addresses that still need to be supplied.

The finished site should be visually impressive while accurately describing each product.
