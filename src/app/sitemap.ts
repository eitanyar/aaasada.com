import type { MetadataRoute } from "next";
import { CITY_DATA } from "../data/catering-content";

export const dynamic = "force-static";

const BASE = "https://aaasada.com";

const STATIC_PATHS = [
  "",
  "/azkarot",
  "/brit",
  "/hina",
  "/bar-mitzvah",
  "/shabbat-chatan",
  "/holidays",
  "/holidays/rosh-hashanah",
  "/holidays/passover",
  "/eli-goldman",
  "/accessibility",
  "/privacy",
];

const EVENT_SUBPAGES = ["azkarot", "brit", "hina", "bar-mitzvah", "shabbat-chatan"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const urls: string[] = STATIC_PATHS.map((p) => `${BASE}${p || "/"}`);

  for (const city of CITY_DATA) {
    urls.push(`${BASE}/city/${city.slug}`);
    if (city.isFocus) {
      for (const sub of EVENT_SUBPAGES) urls.push(`${BASE}/city/${city.slug}/${sub}`);
    }
  }

  return urls.map((url) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority: url === `${BASE}/` ? 1 : url.includes("/city/") ? 0.6 : 0.8,
  }));
}
