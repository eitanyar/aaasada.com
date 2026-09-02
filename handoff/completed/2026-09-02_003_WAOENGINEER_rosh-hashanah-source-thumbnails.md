# Rosh Hashanah menu thumbnails from source menu

## Target repository
The actual target checkout is `/home/eitanya/aasada`. The mandatory kanban workspace path is `/home/eitanya/wao`, but do not edit that checkout; read and modify the target repository above. The repository's `CLAUDE.md` is absent; do not invent its contents. Read `AGENTS.md` and the existing Rosh Hashanah plan before editing.

## Objective
Add small food thumbnails beside every selectable dish on `/holidays/rosh-hashanah`, matching the corresponding dish thumbnails shown in the live "תפריט לראש השנה" menu on `https://teamimofmama.com/`.

## Source and matching method
- The live source page is `https://teamimofmama.com/`; its rendered Rosh Hashanah menu contains item cards with `data-item-name` and a nearby `<img>` asset. Inspect the live HTML/DOM and use the image that belongs to the same source dish card, not a generic category image.
- Prefer downloading exact matching source images into `public/images/dishes/` and serving them locally. Do not hotlink the source site at runtime.
- Do not generate substitute images when a matching source asset exists. Do not invent ingredients, garnishes, or visual claims.
- If a current target dish has no exact source match, use the closest clearly equivalent source dish only when the equivalence is unambiguous; otherwise leave that dish without an image and document it in the completion note rather than attaching a misleading image.
- Confirm downloaded files are real image files, optimized for their small rendered size, and not oversized originals. Preserve licensing/source attribution assumptions from the user-provided source; do not add copy.

## Target dishes
Use the exact current target names and IDs from `ROSH_HASHANAH_MENU` in `src/data/catering-content.ts`; the following are the expected categories and menu names from the current plan:
- salads: מטבוחה מרוקאית, טחינה, תפוחי אדמה במיונז, סלט אבוקדו עשיר, סלט ביצים קלאסי, סלק מבושל בתיבול ביתי, סלט ירוק, חציל משוחה, טאבולה, סלט גזר בלימון, פלפל חריף קלוי
- sides: אורז לבן עם שקדים, אורז לבנוני, אורז אדום, פסטה פנה ברוטב פסטו, ברוקולי אפוי, אפונה וארטישוק, פרחי כרובית, אנטיפסטי, ירקות מוקפצים בסגנון אסייתי, פירה תפו\"א
- mains: פרגית על האש, קבב ביתי אמיתי, קציצות בשר ברוטב עגבניות, אסאדו ברוטב הבית, צלי בקר ברוטב פטריות, בשר ראש ברוטב פיקנטי, שניצל עוף, שניצלונים
- intermediates: כבדי עוף ברוטב יין, ארטישוק ממולא בשר, פילטים עוף בטמפורה, כבד קצוץ קלאסי, פסטייה עוף מרוקאית, סיגר בשר טלה, סלמון ברוטב מזרחי, סלמון קראנצ\' פיסטוק, קציצות לברק ברוטב מרוקאי, דג טונה ברוטב מרוקאי, ברבוניות מטוגנות, פילה אמנון מטוגן

## Implementation constraints
- Inspect and reuse the existing home-page dish-thumbnail implementation and its conventions for layout, dimensions, alt text, loading, and responsive behavior.
- Extend the existing data/component design minimally. Keep the image mapping data-driven by dish ID or an equivalent stable field; do not match by fragile display-text substring logic at render time.
- Preserve RTL, keyboard interaction, checkbox and quantity behavior, a-la-carte intermediate quantities, selection limits, and all existing SEO anchors/copy.
- Keep thumbnails visually secondary to the labels and selection controls. They must not cause layout shifts or break the mobile layout.
- Preserve behavior on all other pages using `MenuBuilder`; any new behavior must remain Rosh Hashanah-specific or safely opt-in.
- Do not change `AGENTS.md`, `.env`, personal configuration, redirects, deployment scripts, or unrelated content.
- Do not deploy.

## Verification required
- Verify the complete mapping against the live source: every target dish with an attached image must show the intended corresponding food, and any unmatched item must be explicitly listed.
- Run `npm run lint` and `npm run build`; if a repo-wide check fails from unrelated existing debt, report the exact failure and run targeted checks for changed code.
- Run the local app and inspect `/holidays/rosh-hashanah` at desktop and mobile widths if possible. Confirm representative items in every category show the thumbnail beside the dish label and that controls remain usable.
- Confirm local image requests resolve successfully and that no runtime request points to `teamimofmama.com`.
- Before completing, call `kanban_complete` with a one-paragraph English summary and the exact `git status --porcelain` output. If blocked, call `kanban_block` with the concrete reason. Exiting without one of those calls is a protocol failure.
