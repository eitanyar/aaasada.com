---
name: holiday-page-update
description: >
  Update a holiday landing page on the טעם מהודר catering site end-to-end from a
  menu brochure image. Trigger when the user gives a holiday page URL (e.g.
  /holidays/rosh-hashanah, /holidays/passover) plus a brochure/flyer image and asks
  to update the page, menu, prices, dates, or "update the holiday page". Handles the
  data, the page hero, the interactive MenuBuilder, the flyer image, and the homepage
  internal link — in one pass, following the project's established conventions.
---

# Holiday page update (from brochure → live page)

Given a **holiday page URL** and a **brochure image**, update the whole page in one pass.
Ask the user for either if missing. This skill encodes the workflow and the client's
locked-in preferences from the Rosh Hashanah תשפ"ז build.

## Inputs
- Holiday page URL → maps to `src/app/holidays/<slug>/page.tsx` and a `<HOLIDAY>_MENU`
  export in `src/data/catering-content.ts` (e.g. `ROSH_HASHANAH_MENU`, `PASSOVER_MENU`).
- Brochure image (usually dropped at project root, e.g. `passover.jpg`).

## Step 0 — Read before editing
Read, in this order:
1. The brochure image (extract every field — see "Extract from brochure").
2. `src/app/holidays/<slug>/page.tsx` (current page).
3. The holiday's `<HOLIDAY>_MENU` in `src/data/catering-content.ts`.
4. `src/components/MenuBuilder.tsx` (shared by ~14 pages).
5. `src/app/page.tsx` hero + the block right after it (for the homepage link).

## Extract from brochure
- **Categories**: for each (salads / sides / mains / intermediates / desserts) → the exact
  Hebrew dish names AND the "choose N" count (that N becomes the category `limit`).
- **Base price** per portion (₪) and **minimum portions**.
- **Order rules**: e.g. "בכפולות של 5 בלבד" (multiples of N), minimum.
- **A-la-carte items**: any category priced separately per portion with its own min/step
  (Rosh Hashanah: מנות ביניים ₪35, min 5, ×5) — these are NOT part of the base price.
- **Dates**: order deadline (Gregorian + Hebrew date), delivery windows, delivery-fee note.
- **Kashrut**: supervising body (e.g. בד"ץ יורה דעה / בד"ץ הרב מחפוד).

## Step 1 — Data (`catering-content.ts`)
Replace the holiday's `<HOLIDAY>_MENU` options + `limit` per the brochure. Keep the ID
convention (prefix per holiday, e.g. `r_sl*`/`r_s*`/`r_m*`/`r_in*`). Descriptions may be "".

## Step 2 — MenuBuilder (only if an a-la-carte category exists)
MenuBuilder already supports **opt-in** a-la-carte via props:
`alaCarteCategoryId`, `alaCartePricePerPortion`, `alaCarteMinPortions`, `alaCartePortionStep`.
It also snaps the guest count to multiples of 5. **Do not change default behavior** — these
props must stay optional/off so the other ~13 pages are unaffected. Only add new mechanics
if the brochure needs something the props don't cover.

## Step 3 — Page (`src/app/holidays/<slug>/page.tsx`)
- **Hero = the unified green `hero-section`** (same as homepage & event pages). Structure:
  `<section className="hero-section">` → `container` → kosher `badge-kosher` (with `StarIcon`)
  → `<h1>` whose **first line is the primary keyword** ("אוכל מוכן ל<חג>") + a gold `<span>`
  subtitle → an inviting `<p>` that includes **price + minimum** → a CTA
  `<a href="#menu-builder-app" className="btn btn-primary">` **inside the hero**.
  (Do NOT use a plain white title block or a separate jump button — the CTA lives in the hero.)
- **Logistics banner** below the hero: order deadline (Gregorian + Hebrew), delivery windows,
  delivery-fee note, multiples-of-N note. Put dates in **named constants** at the top of the
  file, commented "update each year".
- **MenuBuilder** with `initialBasePrice`, `initialGuests`, `minGuests` from the brochure, plus
  the a-la-carte props if applicable.
- **Official flyer image below the builder**: copy the brochure to
  `public/images/<slug>-menu.jpg`, render it in a `<figure>` (responsive `width:100%`,
  lazy, real `width`/`height`, gold border) with a caption naming the kashrut supervision.
- Refresh `metadata.title`/`description` to include price + kashrut body. Keep the `<h1>`/title
  primary keyword = "אוכל מוכן ל<חג>".

## Step 4 — Homepage internal link (SEO, Lior's pattern)
Add/refresh **one** seasonal strip as the **first `<section>` after the hero** in
`src/app/page.tsx` (highest crawlable position = most link equity):
- `<section className="section">` green gradient, centered, reusing `badge-kosher` +
  `btn btn-primary`.
- Short festive copy: badge ("… חדש לחג"), an `<h2>` with the holiday name, one inviting line
  with price + deadline, and a **keyword-rich static `<a href="/holidays/<slug>">`** whose
  anchor text CONTAINS the target page's exact primary keyword ("… אוכל מוכן ל<חג>").
- Keep it to ONE primary equity link on the homepage (don't repeat the exact anchor elsewhere).

## Client-locked conventions (do NOT violate)
- **No English in user-facing labels.** e.g. never "(a-la-carte)" — write "(תוספת של 35 ₪ למנה)".
- **Shekel format is number-first**: "110 ₪ למנה", never "₪110", in body/label copy.
- **Hero must match the homepage/event pages** (prominent green, CTA inside it).
- **Anchor text = the target page's title keyword** ("אוכל מוכן ל<חג>").
- **MenuBuilder changes stay backward compatible** (opt-in props; ~14 pages share it).
- Hebrew double-quotes in JSX text use the `&quot;` entity (matches the codebase).

## Step 5 — Verify
- `npm run build` must pass clean (static export, `output: "export"`).
- If a dev server is up (usually `http://localhost:3001`), curl the holiday page and homepage
  for `200` and grep that the hero, the flyer, and the keyword anchor render.
- Optional model routing when the user asks: build on **Sonnet 5**, verify on **Haiku 4.5**,
  and consult strategy (e.g. SEO placement) on a higher model (Opus). Otherwise just do it inline.

## Step 6 — Wrap up (ask, don't assume)
- Leave the working tree dirty and **hold the commit** until the user previews, unless they
  said otherwise. Then ask three things:
  1. Delete the redundant root brochure image (`<holiday>.jpg` + any `:Zone.Identifier`)?
  2. Any cross-page copy change (e.g. shared MenuBuilder helper text) — keep global or scope it?
  3. Commit locally or commit + push? (AGENTS.md documents an auto-push convention — honor the
     user's choice.)
- Include `public/images/<slug>-menu.jpg` in the commit.

## Reference
The Rosh Hashanah build (spec + result) lives in `PLAN-rosh-hashanah-2026.md` — a concrete
worked example of every step above.
