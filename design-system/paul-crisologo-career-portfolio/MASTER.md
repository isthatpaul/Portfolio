# Paul Crisologo Career Portfolio — Warm Split-Rail Design System

## Direction

Warm, approachable, editorial light mode. The portfolio uses a two-rail reading experience: a crisp white profile rail anchors identity while a cream content canvas carries the story. Use an understated paper texture, flat borders, and small handwritten highlights to keep the system personal without becoming decorative.

## Palette

- Canvas: `#FAF8F5` (warm cream with a subtle radial dot grid)
- Rail and cards: `#FFFFFF`
- Borders: `#EAE6DF` for every 1px rule and card edge
- Primary ink: `#141824` for headings, solid buttons, and navigation emphasis
- Warm slate: `#525866` for body copy and secondary UI
- Muted slate: `#7C8491` for metadata only
- Sky highlight: `#E0F2FE`; amber highlight: `#FEF3C7`

All body copy must maintain at least 4.5:1 contrast. Use `#7C8491` only for 12px metadata; use `#525866` for readable paragraphs and `#141824` for headings.

## Typography

- Display and body: Plus Jakarta Sans, fallback to `ui-sans-serif`, with tight tracking on headings and 1.65 line height for paragraphs.
- Handwritten accent: Caveat, fallback to `cursive`, only for the personal greeting and a few margin annotations.
- Metadata: JetBrains Mono, fallback to `ui-monospace`, only for dates, course codes, tags, and small status labels.
- H1: `clamp(2.8rem, 6vw, 5.6rem)`, 700–800 weight, 0.98 line height.
- H2: 1.75–2.4rem, 700–800 weight, -0.045em tracking.
- Body: 0.95–1.04rem, 1.6–1.7 line height.

## Spacing & Layout

Use an 8px base scale: 8, 16, 24, 32, 48, 64, 80, 112. Desktop layout is `300px 1fr`; the left rail is sticky and the right canvas scrolls naturally. Main content max-width is 1100px with 40–72px gutters. Mobile collapses the rail into a compact identity header and horizontal pill navigation.

## Interaction & Accessibility

- Minimum interactive target: 44×44px with at least 8px separation.
- All buttons, links, filters, dialogs, and form controls have visible `:focus-visible` rings.
- Dialogs use `role="dialog"`, `aria-modal="true"`, title/description labelling, Escape dismissal, and a scroll-safe overlay.
- Motion uses 180–420ms transitions and `prefers-reduced-motion: reduce` disables non-essential animation.
- Never communicate state by color alone; pair selected state with contrast, weight, and a text label.

## Component Motifs

- Profile rail: monogram avatar, identity stack, two pill actions, vertical navigation with selected sky-blue wash.
- Main nav: floating outlined pill switcher with a compact dark `Get in touch ↗` action.
- Hero: handwritten greeting, two-line ink headline, three-sentence intro, solid dark CTA, geometric line-art illustration.
- Academic work: two-column white cards, 16px radius, flat border, small metadata chips, and a text action with arrow.
- Timeline: left date rail, thin rule, circular markers, and open editorial entries.
- References: two-column quote cards with a narrow sky-blue rule.
- Contact: split details/form layout with visible labels and inline success state.
