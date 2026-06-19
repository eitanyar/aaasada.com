import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SCRATCH_DIR = "/mnt/c/Users/eitan/.gemini/antigravity/brain/7e8d0843-bbfa-4098-b466-eba181481ef3/scratch";

const cities = [
  { name: "פתח תקווה", slug: "petah-tikva" },
  { name: "בני ברק", slug: "bnei-brak" },
  { name: "רחובות", slug: "rehovot" },
  { name: "חולון", slug: "holon" },
  { name: "אלעד", slug: "elad" },
  { name: "ירושלים", slug: "jerusalem" },
  { name: "ירושלם", slug: "jerusalem" },
  { name: "נתניה", slug: "netanya" },
  { name: "כפר סבא", slug: "kfar-saba" },
  { name: "רעננה", slug: "raanana" },
  { name: "הוד השרון", slug: "hod-hasharon" },
  { name: "הרצליה", slug: "herzliya" },
  { name: "רמת השרון", slug: "ramat-hasharon" },
  { name: "תל אביב", slug: "tel-aviv" },
  { name: "רמת גן", slug: "ramat-gan" },
  { name: "גבעתיים", slug: "givatayim" },
  { name: "בת ים", slug: "bat-yam" },
  { name: "גבעת שמואל", slug: "givat-shmuel" },
  { name: "קרית אונו", slug: "kiryat-ono" },
  { name: "אור יהודה", slug: "or-yehuda" },
  { name: "יהוד", slug: "yehud" },
  { name: "ראשון לציון", slug: "rishon-lezion" },
  { name: "נס ציונה", slug: "nes-ziona" },
  { name: "יבנה", slug: "yavne" },
  { name: "רמלה", slug: "ramla" },
  { name: "לוד", slug: "lod" },
  { name: "שוהם", slug: "shoham" },
  { name: "גדרה", slug: "gedera" },
  { name: "ראש העין", slug: "rosh-haayin" },
  { name: "מודיעין", slug: "modiin" },
  { name: "בית שמש", slug: "beit-shemesh" },
  { name: "אשדוד", slug: "ashdod" },
  { name: "אשקלון", slug: "ashkelon" },
  { name: "קרית גת", slug: "kiryat-gat" },
  { name: "באר שבע", slug: "beer-sheva" },
  { name: "אריאל", slug: "ariel" },
  { name: "קרני שומרון", slug: "karnei-shomron" }
];

async function run() {
  console.log("Loading crawl manifest...");
  let rawData;
  try {
    rawData = readFileSync(join(SCRATCH_DIR, "aaasada_pages.json"), "utf8");
  } catch (err) {
    console.error("Could not find aaasada_pages.json. Running generation with empty data.", err.message);
    rawData = "[]";
  }

  const pages = JSON.parse(rawData);
  console.log(`Found ${pages.length} crawled pages. Generating redirects mapping...`);

  const redirectLines = [];
  const nginxLines = [];

  // Add baseline custom redirects (e.g. feed, comments, generic elements)
  redirectLines.push("# Custom global redirects");
  redirectLines.push("/feed / 301");
  redirectLines.push("/comments/feed / 301");
  
  nginxLines.push("# Custom global redirects");
  nginxLines.push("rewrite ^/feed$ / permanent;");
  nginxLines.push("rewrite ^/comments/feed$ / permanent;");

  let mappedGeoCount = 0;
  let mappedGeneralCount = 0;

  pages.forEach((page) => {
    const title = page.title || "";
    const originalLink = page.link || "";
    
    // Extract path from absolute URL
    let path = originalLink.replace(/^https?:\/\/(www\.)?aaasada\.com/, "").replace(/\/$/, "");
    if (!path || path === "/" || path === "") return;

    // Decode URL characters for comparison
    let decodedPath = "";
    try {
      decodedPath = decodeURIComponent(path);
    } catch (e) {
      decodedPath = path;
    }

    // Check if it's a GEO page
    let matchedCity = null;
    for (const city of cities) {
      if (title.includes(city.name) || decodedPath.includes(city.name) || decodedPath.replace(/-/g, " ").includes(city.name)) {
        matchedCity = city;
        break;
      }
    }

    let destination = "/";
    if (matchedCity) {
      destination = `/city/${matchedCity.slug}`;
      mappedGeoCount++;
    } else {
      // Map general pillar pages
      const lowerDecoded = decodedPath.toLowerCase();
      if (lowerDecoded.includes("שבת") || lowerDecoded.includes("chatan") || lowerDecoded.includes("חתן")) {
        destination = "/#menu-section"; // Shabbat Chatan details
      } else if (lowerDecoded.includes("אוכל") || lowerDecoded.includes("ready") || lowerDecoded.includes("מגשי")) {
        destination = "/#diy-catering"; // Ready food trays
      } else if (lowerDecoded.includes("צור") || lowerDecoded.includes("contact")) {
        destination = "/#contact-section";
      } else {
        destination = "/";
      }
      mappedGeneralCount++;
    }

    // Next.js percent-encodes paths on incoming requests. We should write the redirect source in percent-encoded format
    // to match standard edge routers, and also write a lowercase decoded helper just in case.
    const encodedSource = path;
    redirectLines.push(`${encodedSource} ${destination} 301`);
    
    // Write Nginx rewrite rule
    // Nginx rewrite matches decoded URI usually, but we write both or regex-tolerant matches
    nginxLines.push(`rewrite ^${encodedSource}/?$ ${destination} permanent;`);
  });

  console.log(`Mapped ${mappedGeoCount} geographic paths to city pages.`);
  console.log(`Mapped ${mappedGeneralCount} general service paths to pillars.`);

  // Write _redirects to public folder (for Cloudflare Pages / Netlify edge hosting)
  mkdirSync(join(ROOT, "public"), { recursive: true });
  writeFileSync(join(ROOT, "public", "_redirects"), redirectLines.join("\n"), "utf8");
  console.log("✓ Generated public/_redirects");

  // Write nginx_redirects.conf to root folder
  writeFileSync(join(ROOT, "nginx_redirects.conf"), nginxLines.join("\n"), "utf8");
  console.log("✓ Generated nginx_redirects.conf");
}

run();
