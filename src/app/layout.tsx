import type { Metadata } from "next";
import Script from "next/script";
import { PhoneIcon, WhatsAppIcon, LocationPinIcon } from "../components/icons";
import MobileHeader from "../components/MobileHeader";
import "./globals.css";
import AccessibilityWidget from "../components/AccessibilityWidget";
import CookieBanner from "../components/CookieBanner";
import { Assistant, Frank_Ruhl_Libre } from "next/font/google";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "900"],
  variable: "--font-frank-ruhl",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "קייטרינג לאירועים | אוכל מוכן בשרי כשר למהדרין - טעם מהודר",
  description: "קייטרינג לאירועים קטנים, שבתות חתן, אזכרות ובריתות. אוכל מוכן בשרי עשיר, חם ושופע ב-58 ש\"ח בלבד למנה בכשרות המהודרת של בד\"ץ הרב מחפוד.",
  metadataBase: new URL("https://aaasada.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read analytics IDs from environment variables or use fallback placeholders
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-M4EG38FYSW"; // Fallback to a placeholder
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID; // GTM-XXXXXXX
  const wcKey = process.env.NEXT_PUBLIC_WHATCONVERTS_KEY || "192348a82b"; // WhatConverts client key

  return (
    <html lang="he-IL" dir="rtl" className={`${assistant.variable} ${frankRuhl.variable}`}>
      <head>

        {/* GA4 Script */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* GTM Script */}
        {gtmId && (
          <Script id="google-tag-manager" strategy="lazyOnload">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        )}

        {/* WhatConverts Script */}
        {wcKey && (
          <Script
            src={`//www.whatconverts.com/js/wc-client.js?key=${wcKey}`}
            strategy="lazyOnload"
          />
        )}
      </head>
      <body>
        {/* GTM Noscript Fallback */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* Striped Storefront Awning Header (Desktop Only) */}
        <div className="marquise-header">
          <div className="container" style={{ display: "flex", justifyContent: "center" }}>
            <div className="header-badge">
              {/* Branding Text */}
              <div className="header-logo-text">
                <a href="/" className="header-logo-main">טעם מהודר</a>
                <span className="header-logo-sub">קייטרינג בשרי כשר למהדרין</span>
                <span className="header-tagline">הדרך הקלה לאירוע מוצלח</span>
              </div>

              {/* Rabbi Mahfoud Kosher Seal */}
              <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <img 
                  src="/images/machpod-kosher.webp" 
                  alt='כשר למהדרין בד"ץ הרב מחפוד יורה דעה' 
                  width={55} 
                  height={55} 
                  style={{ 
                    borderRadius: "50%", 
                    border: "1.5px solid var(--primary-gold)", 
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Sticky Header (Mobile Only) */}
        <MobileHeader />

        {/* Sticky Navigation Bar */}
        <header className="site-nav-bar">
          <div className="container nav-bar-container">
            <nav>
              <ul className="nav-links">
                <li><a href="/">דף הבית</a></li>
                <li><a href="/shabbat-chatan">שבת חתן</a></li>
                <li><a href="/brit">ברית מילה</a></li>
                <li><a href="/bar-mitzvah">בר מצווה</a></li>
                <li><a href="/hina">חינה</a></li>
                <li><a href="/azkarot">אזכרות</a></li>
                <li><a href="/#menu-section">התפריט שלנו</a></li>
                <li><a href="/#contact-section">צור קשר</a></li>
              </ul>
            </nav>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <a href="tel:052-609-0930" className="btn btn-secondary btn-phone" style={{ padding: "6px 12px", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <PhoneIcon size={14} />
                <span>052-609-0930</span>
              </a>
            </div>
          </div>
        </header>



        {/* Main Content Area */}
        <main style={{ minHeight: "80vh", paddingBottom: "80px" }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ backgroundColor: "var(--bg-footer)", color: "var(--text-light)", padding: "var(--spacing-xl) 0 var(--spacing-lg) 0", borderTop: "4px solid var(--primary-gold)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--spacing-lg)", marginBottom: "var(--spacing-lg)" }}>
              <div>
                <h3 style={{ color: "var(--primary-gold)", marginBottom: "var(--spacing-sm)", fontFamily: "sans-serif", fontWeight: "600" }}>קייטרינג טעם מהודר</h3>
                <p style={{ color: "#aaa", fontSize: "0.95rem" }}>
                  קייטרינג בשרי גלאט כשר למהדרין בהשגחת בד"צ יורה דעה של הרב שלמה מחפוד. מתמחים במגשי אוכל מוכן בשירות עצמי לשבת חתן, בריתות, אזכרות ואירועים קטנים. שפע וטעם ביתי חם במחירים הוגנים.
                </p>
              </div>
              <div>
                <h3 style={{ color: "var(--primary-gold)", marginBottom: "var(--spacing-sm)", fontFamily: "sans-serif", fontWeight: "600" }}>סוגי אירועים</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <li><a href="/shabbat-chatan" style={{ color: "#aaa" }}>קייטרינג לשבת חתן</a></li>
                  <li><a href="/brit" style={{ color: "#aaa" }}>קייטרינג לברית מילה</a></li>
                  <li><a href="/bar-mitzvah" style={{ color: "#aaa" }}>קייטרינג לבר מצווה</a></li>
                  <li><a href="/azkarot" style={{ color: "#aaa" }}>קייטרינג לאזכרות</a></li>
                  <li><a href="/hina" style={{ color: "#aaa" }}>קייטרינג לחינה</a></li>
                </ul>
              </div>
              <div>
                <h3 style={{ color: "var(--primary-gold)", marginBottom: "var(--spacing-sm)", fontFamily: "sans-serif", fontWeight: "600" }}>פרטי קשר</h3>
                <p style={{ color: "#aaa", fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <PhoneIcon size={16} style={{ color: "var(--primary-gold)" }} />
                  <span>טלפון להזמנות: <strong><a href="tel:052-609-0930" style={{ color: "#fff" }}>052-609-0930</a></strong></span>
                </p>
                <p style={{ color: "#aaa", fontSize: "0.95rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <WhatsAppIcon size={16} style={{ color: "#25d366" }} />
                  <span>וואטסאפ: <strong><a href="https://wa.me/972526090930" style={{ color: "#fff" }}>שלחו לנו הודעה</a></strong></span>
                </p>
                <p style={{ color: "#aaa", fontSize: "0.95rem", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <LocationPinIcon size={16} style={{ color: "var(--primary-gold)", flexShrink: 0, marginTop: "4px" }} />
                  <span>אזורי שירות: נתניה עד באר שבע, כולל השרון, המרכז, השפלה והשומרון.</span>
                </p>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #333", paddingTop: "var(--spacing-md)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", fontSize: "0.9rem", color: "#666" }}>
              <span>
                © {new Date().getFullYear()} קייטרינג טעם מהודר. כל הזכויות שמורות. בהשגחת בד"ץ יורה דעה - הרב שלמה מחפוד.
                {" • "}
                <a href="/privacy" style={{ color: "#aaa", textDecoration: "underline", margin: "0 6px" }}>מדיניות פרטיות</a>
                {" • "}
                <a href="/accessibility" style={{ color: "#aaa", textDecoration: "underline", margin: "0 6px" }}>הצהרת נגישות</a>
              </span>
              <span>עיצוב ופיתוח: Next.js Static.</span>
            </div>
          </div>
        </footer>

        {/* Floating CTA Mobile Bar */}
        <div className="floating-cta">
          <a href="tel:052-609-0930" className="btn btn-secondary" style={{ flex: 1, gap: "6px" }}>
            <PhoneIcon size={16} />
            <span>חייגו כעת</span>
          </a>
          <a
            href="https://wa.me/972526090930?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92%20%D7%91%D7%A9%D7%A8%D7%99%20%D7%9B%D7%A9%D7%A8%20%D7%9C%D7%9e%D7%94%D7%93%D7%A8%D7%99%D7%9F"
            className="btn btn-whatsapp"
            style={{ flex: 1, gap: "6px" }}
          >
            <WhatsAppIcon size={16} />
            <span>וואטסאפ</span>
          </a>
        </div>

        {/* Global Compliance & Accessibility Widgets */}
        <AccessibilityWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
