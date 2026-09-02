# WAO Engineering Handoff

## Task
Implement the Rosh Hashanah intermediate-dish a-la-carte quantity flow.

## Required first reads
Before changing anything, read `/home/eitanya/aasada/AGENTS.md` and `/home/eitanya/aasada/PLAN-rosh-hashanah-2026.md`. `CLAUDE.md` is absent in this repository; do not invent its contents.

## Target repository
`/home/eitanya/aasada`

## Scope
Only modify the files named in the plan unless a directly necessary test/config artifact is required:
- `src/components/MenuBuilder.tsx`
- `src/app/holidays/rosh-hashanah/page.tsx`
- `src/data/catering-content.ts`
- narrowly scoped tests if the existing project test setup requires them

Preserve all existing MenuBuilder behavior on every non-Rosh-HaShanah page. Any new a-la-carte behavior must be opt-in and disabled when its props are absent.

## Functional requirements
1. Rosh Hashanah base menu uses the exact plan values: base price 110, minimum and initial guests 10; salads limit 9, sides limit 4, mains limit 2; use the exact dish lists and ID conventions from the plan.
2. Add opt-in MenuBuilder props from the plan:
   - `alaCarteCategoryId?: string`
   - `alaCartePricePerPortion?: number`
   - `alaCarteMinPortions?: number`
   - `alaCartePortionStep?: number`
3. For the Rosh Hashanah `intermediates` category, the visitor must enter/select an exact quantity beside the intermediate dishes. The quantity is a separate a-la-carte quantity, independent of the number of basic meals and may exceed the basic meal count.
4. Quantity rules for intermediate dishes: 0 means none; once selected it must be at least 5; valid quantities are only multiples of 5 (5, 10, 15, ...). Provide a visible per-dish quantity control/input beside each selected intermediate dish, so the visitor can specify the exact quantity for each dish. Do not cap intermediate quantities by base meal count. If the implementation retains a shared quantity control, it must still expose and correctly persist exact per-dish quantities; prefer per-dish quantities to satisfy this requirement.
5. Price each intermediate portion at ₪35 and calculate the intermediate total from the sum of the exact quantities across selected intermediate dishes. Include it as a separate summary line. Do not count intermediate dishes as mains for main-selection validation.
6. Reject/block WhatsApp, email, and print submission when any intermediate quantity is invalid (non-zero but below 5 or not divisible by 5). Normalize/snap only where consistent with the plan; never silently submit an invalid value. Keep base guest quantity enforcement at minimum 10 and multiples of 5.
7. Include intermediate dish names, exact per-dish quantities, per-dish/total pricing, and the correct grand total in the on-screen summary, WhatsApp payload/message, email output, and print output.
8. Add the Rosh Hashanah logistics banner and page copy/props/metadata required by the plan, without changing SEO keyword anchors beyond the plan's explicit request.

## Acceptance checks
- Rosh Hashanah allows intermediate quantities such as 5, 10, and 15 beside each selected dish, including quantities greater than base meals.
- Invalid intermediate quantities cannot be submitted and show a clear validation message.
- Grand total equals base/other extras plus `35 * sum(intermediate dish quantities)`.
- All four output paths (summary, WhatsApp, email, print) show exact intermediate quantities and correct total.
- Other MenuBuilder pages retain existing behavior when the new props are omitted.
- Run the relevant tests and `npm run lint` and `npm run build`; report the actual results.
- Before completion, run `git status --porcelain` in `/home/eitanya/aasada` and report only the scoped status. Do not deploy.

## Completion protocol
When finished, call `kanban_complete` with a one-paragraph summary and the exact `git status --porcelain` output. If blocked, call `kanban_block` with the reason. Exiting without one of these calls is a protocol failure.
