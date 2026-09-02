# Increase Rosh Hashanah dish thumbnail size by 25 percent

## Target repository
The actual target checkout is `/home/eitanya/aasada`. The mandatory kanban workspace path is `/home/eitanya/wao`, but do not edit that checkout if it differs. Read `AGENTS.md`; `CLAUDE.md` is absent in this repository.

## Objective
Make the existing Rosh Hashanah dish thumbnails 25% larger while preserving the current visual design and usability.

## Scope
- The current rendered thumbnail size is 56px by 56px. Change it to exactly 70px by 70px (25% increase).
- Update only the shared thumbnail styling needed for this change, expected in `src/app/globals.css`, unless a directly necessary scoped adjustment is required.
- Preserve the square aspect ratio, object-fit behavior, border, radius, RTL layout, checkbox placement, dish text, intermediate quantity controls, and responsive behavior.
- The change must not alter thumbnail source files, dish mappings, other menu behavior, SEO copy, or unrelated pages.
- Check mobile layout specifically; 70px must not cause horizontal overflow or unusable controls.
- Do not deploy. Do not modify `.env`, personal configuration, or unrelated files.

## Verification required
- Run targeted lint for the changed file and `npm run build`.
- Run the local exported/static route and use browser DOM inspection to confirm the Rosh Hashanah `.dish-thumb` elements render at 70px by 70px.
- Check representative dishes and confirm checkbox/selection interaction remains usable, including at a mobile viewport if possible.
- Before completing, call `kanban_complete` with a one-paragraph English summary and the exact `git status --porcelain` output. If blocked, call `kanban_block` with the concrete reason. Exiting without one of those calls is a protocol failure.
