# Rosh Hashanah hero offer wording and background image

## Target repository
The target checkout is `/home/eitanya/aasada`. `CLAUDE.md` is absent there; do not invent its contents. The kanban workspace flag is required separately, but all inspection and edits must be made in the target checkout above.

## Deliverable
Update the Rosh Hashanah route at `/holidays/rosh-hashanah` so the hero communicates the offer as an attractive ordering reason rather than a restrictive limit.

## Requirements
- Locate the current hero text containing the equivalent of `מחיר 110 ₪ למנה · מינימום 10 מנות (בכפולות של 5 בלבד)`.
- Replace the restrictive-sounding presentation with the approved offer angle and wording: `שבוע אחרון למבצע — מ-10 מנות בלבד!`
- Keep the factual price information (`110 ₪ למנה`) visible in a clear supporting treatment, but do not frame the minimum/5-quantity rule as the hero's primary sales message. Preserve any existing required SEO keyword anchors unless this exact request requires otherwise.
- Import/download the image from `https://ibb.co/ch2TjLqy` and use the actual image as a local background image layer for this route's hero. Do not hotlink it at runtime. Inspect the page/source URL to resolve the image asset URL before downloading; do not substitute a guessed or unrelated image.
- Optimize the hero background treatment for high copy visibility: use an appropriate overlay/gradient, readable contrast, and positioning/cropping that works at desktop and mobile widths. Preserve existing RTL layout, CTA behavior, and responsive interaction.
- Avoid drive-by refactors and do not modify unrelated routes or shared components unless strictly necessary for this hero.

## Verification required
- Run the relevant lint and `npm run build` from `/home/eitanya/aasada`.
- Verify the local image file exists and is a real image, and that the route references the local asset rather than the ibb URL.
- If browser tooling is available, inspect the route at desktop and mobile widths and confirm the offer text is readable with no horizontal overflow.
- Report `git status --porcelain` and call `kanban_complete` with a concise summary. If the image cannot be accessed/resolved or another hard blocker prevents the requested deliverable, call `kanban_block` with the concrete reason instead of fabricating an asset.
