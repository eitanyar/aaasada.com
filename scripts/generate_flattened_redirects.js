const fs = require('fs');
const path = require('path');

const REDIRECTION_FILE = '/mnt/c/Users/eitan/.gemini/antigravity/brain/7e8d0843-bbfa-4098-b466-eba181481ef3/scratch/redirection-aaasada-com-16-ביוני-2026.json';
const MAPPING_FILE = '/mnt/c/Users/eitan/.gemini/antigravity/brain/7e8d0843-bbfa-4098-b466-eba181481ef3/scratch/redirect_mapping.json';

const OUTPUT_REDIRECTS = '/home/eitanya/aasada/public/_redirects';
const OUTPUT_NGINX = '/home/eitanya/aasada/nginx_redirects.conf';

// Helper to normalize path for matching: decode, trim slashes, lowercase
function normalizePath(urlPath) {
  if (!urlPath) return '';
  let p = urlPath.replace(/^https?:\/\/[^\/]+/, '');
  try {
    p = decodeURIComponent(p);
  } catch (e) {}
  p = p.split('?')[0].split('#')[0];
  p = p.toLowerCase().trim().replace(/^\/+|\/+$/g, '');
  return p;
}

function run() {
  console.log("Starting redirect flattening with hash anchors support...");

  if (!fs.existsSync(MAPPING_FILE)) {
    console.error("Mapping file not found:", MAPPING_FILE);
    return;
  }
  const mappingData = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
  console.log(`Loaded ${mappingData.length} city redirects from Next.js mapping file.`);

  // Create a normalized mapping lookup: normalized_old_path -> new_route_with_hash
  const mappingLookup = new Map();
  mappingData.forEach(item => {
    const normOld = normalizePath(item.old_path);
    const normDecodedOld = normalizePath(item.decoded_old_path);
    
    // Determine the hash anchor based on category to resolve city-service page concern
    let targetRoute = item.new_route;
    if (item.category === 'bar_mitzvah') {
      targetRoute = `${item.new_route}#bar-mitzvah`;
    } else if (item.category === 'brit_milah') {
      targetRoute = `${item.new_route}#brit`;
    } else if (item.category === 'henna') {
      targetRoute = `${item.new_route}#hina`;
    } else if (item.category === 'ochel_mochan') {
      targetRoute = `${item.new_route}#menu-section`;
    }
    
    mappingLookup.set(normOld, targetRoute);
    mappingLookup.set(normDecodedOld, targetRoute);
  });

  // Add core general service mappings to prevent soft 404s/homepage redirects
  const generalServiceMappings = {
    "קייטרינג-לשבת-חתן": "/shabbat-chatan",
    "תפריט-קייטרינג-לשבת-חתן": "/shabbat-chatan",
    "קייטרינג-לשבת-חתן-כשר-למהדרין-בדץ-מחפוד": "/shabbat-chatan",
    "קייטרינג-לאזכרות": "/azkarot",
    "קייטרינג-אוכל-מוכן-לאזכרה": "/azkarot",
    "תפריט-קייטרינג-לאזכרה": "/azkarot",
    "קייטרינג-כשר-לחינה": "/hina",
    "תפריט-קייטרינג-לחינה": "/hina",
    "קייטרינג-כשר-לבר-מצווה": "/bar-mitzvah",
    "קייטרינג-כשר-לברית": "/brit",
    "תפריט-קייטרינג-לברית-בריתה": "/brit",
    "אוכל-מוכן-לאירועים-קטנים": "/#menu-section",
    "תפריט-אוכל-מוכן-לאירועים": "/#menu-section"
  };

  Object.entries(generalServiceMappings).forEach(([oldSlug, newRoute]) => {
    const norm = normalizePath(oldSlug);
    mappingLookup.set(norm, newRoute);
  });

  // Load Redirection plugin file
  if (!fs.existsSync(REDIRECTION_FILE)) {
    console.error("Redirection plugin file not found:", REDIRECTION_FILE);
    return;
  }
  const redirectionData = JSON.parse(fs.readFileSync(REDIRECTION_FILE, 'utf8'));
  const pluginRedirects = redirectionData.redirects || [];
  console.log(`Loaded ${pluginRedirects.length} redirects from Redirection plugin.`);

  // Create plugin lookup
  const pluginLookup = new Map();
  pluginRedirects.forEach(r => {
    if (r.enabled === false) return;
    const normSource = normalizePath(r.url);
    const targetUrl = r.action_data?.url || '';
    if (normSource && targetUrl) {
      const normTarget = normalizePath(targetUrl);
      if (normSource !== normTarget) {
        pluginLookup.set(normSource, targetUrl); // Keep original target to preserve hash if any
      }
    }
  });

  const finalRedirectsMap = new Map();

  // Helper to resolve a normalized path to its final path, carrying hash anchors forward
  function resolveFinalPathWithHash(normPath, currentHash = '', visited = new Set()) {
    if (visited.has(normPath)) {
      return { base: normPath, hash: currentHash };
    }
    visited.add(normPath);

    // 1. Check mapping lookup
    if (mappingLookup.has(normPath)) {
      const nextjsRoute = mappingLookup.get(normPath);
      const parts = nextjsRoute.split('#');
      const baseRoute = parts[0];
      const newHash = parts[1] ? '#' + parts[1] : currentHash;
      
      const normNextjsRoute = normalizePath(baseRoute);
      return resolveFinalPathWithHash(normNextjsRoute, newHash, visited);
    }

    // 2. Check plugin lookup
    if (pluginLookup.has(normPath)) {
      const pluginTarget = pluginLookup.get(normPath);
      const parts = pluginTarget.split('#');
      const baseTarget = parts[0];
      const newHash = parts[1] ? '#' + parts[1] : currentHash;
      
      const normPluginTarget = normalizePath(baseTarget);
      return resolveFinalPathWithHash(normPluginTarget, newHash, visited);
    }

    return { base: normPath, hash: currentHash };
  }

  function normToFinalUrl(normPath) {
    if (normPath === '') return '/';
    if (normPath.startsWith('city/')) {
      return '/' + normPath;
    }
    return '/' + normPath;
  }

  // Resolve all plugin redirects
  pluginLookup.forEach((value, key) => {
    const result = resolveFinalPathWithHash(key);
    const finalUrl = normToFinalUrl(result.base) + result.hash;
    if (finalUrl !== '/' + key && finalUrl !== '/' + key + '/') {
      finalRedirectsMap.set(key, finalUrl);
    }
  });

  // Also include all Next.js mappings directly
  mappingLookup.forEach((value, key) => {
    const result = resolveFinalPathWithHash(key);
    const finalUrl = normToFinalUrl(result.base) + result.hash;
    if (finalUrl !== '/' + key && finalUrl !== '/' + key + '/') {
      finalRedirectsMap.set(key, finalUrl);
    }
  });

  console.log(`Resolved and flattened redirects. Total unique redirects: ${finalRedirectsMap.size}`);

  // Generate Cloudflare Pages _redirects file
  let redirectsContent = `# Flattened 301 redirects for aaasada.com (Cloudflare Pages)\n`;
  redirectsContent += `# Generated automatically on ${new Date().toISOString()}\n\n`;
  
  redirectsContent += `/feed / 301\n`;
  redirectsContent += `/comments/feed / 301\n`;
  redirectsContent += `/fb / 301\n`;
  redirectsContent += `/eli-goldman / 301\n`;
  redirectsContent += `/privacy / 301\n`;
  redirectsContent += `/מפת-אתר / 301\n`;
  redirectsContent += `/%d7%9e%d7%a4%d7%aa-%d7%90%d7%aa%d7%a8 / 301\n`;
  redirectsContent += `/gallery / 301\n`;
  redirectsContent += `/contact / 301\n`;
  redirectsContent += `/about / 301\n`;
  redirectsContent += `/kosher / 301\n`;

  const sortedKeys = Array.from(finalRedirectsMap.keys()).sort();
  const writtenKeys = new Set();
  
  sortedKeys.forEach(normPath => {
    const targetUrl = finalRedirectsMap.get(normPath);
    
    const decodedPath = '/' + normPath;
    const encodedPath = '/' + normPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
    
    // Add decoded version
    const ruleDecoded = `${decodedPath} ${targetUrl} 301`;
    if (!writtenKeys.has(ruleDecoded) && decodedPath !== targetUrl) {
      redirectsContent += `${decodedPath} ${targetUrl} 301\n`;
      writtenKeys.add(ruleDecoded);
    }
    
    // Add encoded version
    const ruleEncoded = `${encodedPath} ${targetUrl} 301`;
    if (!writtenKeys.has(ruleEncoded) && encodedPath !== targetUrl) {
      redirectsContent += `${encodedPath} ${targetUrl} 301\n`;
      writtenKeys.add(ruleEncoded);
    }
  });

  fs.writeFileSync(OUTPUT_REDIRECTS, redirectsContent, 'utf8');
  console.log(`✓ Saved ${writtenKeys.size} redirect rules to ${OUTPUT_REDIRECTS}`);

  // Generate Nginx redirects config
  let nginxContent = `# Nginx 301 redirects for aaasada.com\n`;
  nginxContent += `# Generated automatically on ${new Date().toISOString()}\n\n`;

  const writtenNginx = new Set();
  sortedKeys.forEach(normPath => {
    const targetUrl = finalRedirectsMap.get(normPath);
    
    const decodedPath = '/' + normPath;
    const encodedPath = '/' + normPath.split('/').map(segment => encodeURIComponent(segment)).join('/');

    const ruleDecoded = `rewrite ^${decodedPath.replace(/\//g, '\\/')}$ ${targetUrl} permanent;`;
    if (!writtenNginx.has(ruleDecoded) && decodedPath !== targetUrl) {
      nginxContent += `rewrite ^${decodedPath.replace(/\//g, '\\/')}$ ${targetUrl} permanent;\n`;
      writtenNginx.add(ruleDecoded);
    }

    const ruleEncoded = `rewrite ^${encodedPath.replace(/\//g, '\\/')}$ ${targetUrl} permanent;`;
    if (!writtenNginx.has(ruleEncoded) && encodedPath !== targetUrl) {
      nginxContent += `rewrite ^${encodedPath.replace(/\//g, '\\/')}$ ${targetUrl} permanent;\n`;
      writtenNginx.add(ruleEncoded);
    }
  });

  fs.writeFileSync(OUTPUT_NGINX, nginxContent, 'utf8');
  console.log(`✓ Saved Nginx redirects to ${OUTPUT_NGINX}`);
}

run();
