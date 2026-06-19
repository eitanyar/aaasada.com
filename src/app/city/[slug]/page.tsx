import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { CITY_DATA, CATERING_REGIONS, CityConfig } from "../../../data/catering-content";
import MenuBuilder from "../../../components/MenuBuilder";
import CityHero from "../../../components/CityHero";
import LocalDeliveryCard from "../../../components/LocalDeliveryCard";
import LocalIntro from "../../../components/LocalIntro";

// Define the static slugs to pre-render during build time (required for output: export)
export async function generateStaticParams() {
  return CITY_DATA.map((city) => ({
    slug: city.slug,
  }));
}

// Generate metadata for each city page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `${city.customHeading} | טעם מהודר`,
    description: `מחפשים קייטרינג בשרי כשר למהדרין ב${city.name}? קבלו משלוח אוכל מוכן חם ועשיר לשבת חתן, אזכרות ובריתות. תפריט ₪58 למנה בהשגחת בד\"ץ הרב מחפוד.`,
    alternates: {
      canonical: `https://aaasada.com/city/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  const regionTitle = CATERING_REGIONS[city.region]?.title || city.region;

  const getEventUrl = (event: string) => {
    if (city.isFocus) {
      return `/city/${city.slug}/${event}`;
    }
    return `/city/${city.slug}?event=${event}`;
  };

  // Local Business, Product & FAQ Schema Graph JSON-LD
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CateringService",
        "@id": `https://aaasada.com/city/${city.slug}#catering`,
        "name": `קייטרינג טעם מהודר ${city.name}`,
        "image": "https://aaasada.com/images/assado_763x447_webp.webp",
        "description": `אוכל מוכן בשרי כשר למהדרין בהשגחת בד\"ץ הרב מחפוד ב${city.name} לשבת חתן, בריתות ואזכרות.`,
        "telephone": "052-609-0930",
        "url": `https://aaasada.com/city/${city.slug}`,
        "priceRange": "$$",
        "provider": {
          "@type": "LocalBusiness",
          "name": "קייטרינג טעם מהודר",
          "telephone": "052-609-0930",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "addressCountry": "IL"
          }
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": city.name
        },
        "hasMenu": {
          "@type": "FoodMenu",
          "name": "תפריט בשרי כשר למהדרין ב-58 ש\"ח",
          "offers": {
            "@type": "Offer",
            "price": "58.00",
            "priceCurrency": "ILS"
          }
        }
      },
      {
        "@type": "Product",
        "@id": `https://aaasada.com/city/${city.slug}#product`,
        "name": `קייטרינג בשרי כשר למהדרין ב${city.name} - תפריט מנה ב-58 ש\"ח`,
        "description": `תפריט קייטרינג בשרי עשיר ושופע ב-58 ש\"ח למנה ב${city.name}. כשרות מהודרת של בד\"ץ הרב מחפוד.`,
        "image": "https://aaasada.com/images/assado_763x447_webp.webp",
        "brand": {
          "@type": "Brand",
          "name": "טעם מהודר"
        },
        "offers": {
          "@type": "Offer",
          "price": "58.00",
          "priceCurrency": "ILS",
          "availability": "https://schema.org/InStock",
          "url": `https://aaasada.com/city/${city.slug}`
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "184"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://aaasada.com/city/${city.slug}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `מה היא כשרות הקייטרינג ב${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `כל האוכל המוכן בקייטרינג טעם מהודר ב${city.name} מוכן תחת השגחת בד\"ץ יורה דעה של הרב שלמה מחפוד שליט\"א. כל הבשרים והעופות כשרים למהדרין גלאט בשרי מן המהדרין.`
            }
          },
          {
            "@type": "Question",
            "name": `כמה עולה משלוח קייטרינג ל${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `עלות המשלוח ל${city.name} (ולכל אזור ספציפי אחר) תיקבע ותימסר על ידי הנציג בעת שיחת תיאום ההזמנה, בהתאם למיקום המדויק וזמן המסירה הנדרש.`
            }
          },
          {
            "@type": "Question",
            "name": `מהי כמות המנות המינימלית להזמנה ב${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `כדי להבטיח את איכות הבישול והאספקה החמה במחירי המפעל שלנו, המינימום להזמנת מגשי אוכל מוכן בשרי ל${city.name} הוא 30 מנות (30 אורחים).`
            }
          }
        ]
      }
    ]
  };

  return (
    <div>
      {/* Inject JSON-LD Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* City Hero Section (Client Side Listeners Active) */}
      <Suspense fallback={
        <section className="section" style={{
          background: "linear-gradient(135deg, var(--secondary-green) 0%, #202c11 100%)",
          color: "var(--text-light)",
          padding: "var(--spacing-xl) 0",
          borderBottom: "4px solid var(--primary-gold)",
          textAlign: "center"
        }}>
          <div className="container">
            <h1 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 5vw, 3.2rem)", fontFamily: "var(--font-frank-ruhl)", fontWeight: 900 }}>
              קייטרינג בשרי ואוכל מוכן ב{city.name}
            </h1>
            <p style={{ color: "#e2e8f0", fontSize: "1.2rem", maxWidth: "800px", margin: "15px auto 0 auto", lineHeight: "1.7" }}>
              {city.customIntro}
            </p>
          </div>
        </section>
      }>
        <CityHero
          cityName={city.name}
          regionTitle={regionTitle}
          defaultIntro={city.customIntro}
        />
      </Suspense>

      {/* Localized Copy Content & Info */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "var(--spacing-lg)" }}>
            {/* Custom Description to solve SEO duplicate text issues */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2>פתרון קייטרינג בשרי מנצח ב{city.name}</h2>
              <Suspense fallback={<p>{city.customIntro}</p>}>
                <LocalIntro cityName={city.name} defaultIntro={city.customIntro} />
              </Suspense>
              {city.localTrustHook && (
                <div style={{
                  backgroundColor: "var(--primary-gold-light)",
                  borderRight: "4px solid var(--primary-gold)",
                  padding: "12px 18px",
                  borderRadius: "4px",
                  fontWeight: "600",
                  marginTop: "10px",
                  color: "var(--primary-gold-hover)"
                }}>
                  💡 {city.localTrustHook}
                </div>
              )}
            </div>

            {/* Local delivery configuration details */}
            <Suspense fallback={
              <div className="card" style={{
                background: "#ffffff",
                padding: "var(--spacing-md)",
                borderRadius: "var(--border-radius-md)",
                border: "1.5px solid var(--border-color)",
                boxShadow: "var(--shadow-subtle)"
              }}>
                <h3>משלוח אוכל מוכן ל{city.name}</h3>
                <p>משלוח מבוקר לכל שכונות העיר. פרטי אספקה ומחיר יימסרו בתיאום טלפוני.</p>
              </div>
            }>
              <LocalDeliveryCard cityName={city.name} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Reusable Menu Builder section locally for this city */}
      <section className="section" id="menu-section" style={{
        background: "var(--bg-warm-sand)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>תפריט ₪58 לתושבי {city.name}</span>
            <h2>הרכיבו את התפריט שלכם למשלוח ב{city.name}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו מנות עיקריות, תוספות וסלטים. דמי המשלוח יקבעו על ידי הנציג בהתאם למיקום וזמן המסירה הנדרש ויתווספו להצעה הסופית.
            </p>
          </div>

          <MenuBuilder />
        </div>
      </section>

      {/* Local Event Types descriptions specific to the city */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>סוגי אירועים משפחתיים ב{city.name}</h2>
            <p>אנו מספקים פתרון נוח ומהיר לאירוח עצמי בכל חלקי העיר</p>
          </div>

          <div className="grid grid-3">
            {/* Shabbat Chatan Card */}
            <div className="card" id="shabbat-chatan" style={{ border: "1.5px solid var(--primary-gold)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div className="badge-kosher" style={{ backgroundColor: "var(--primary-gold-light)", color: "var(--primary-gold-hover)", fontSize: "0.8rem", padding: "2px 8px", alignSelf: "flex-start", marginBottom: "8px", display: "inline-block" }}>
                  🔥 מומלץ: חבילת 3 סעודות ב-₪149 לסועד
                </div>
                <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px", fontFamily: "sans-serif" }}>
                  שבת חתן ב{city.name}
                </h3>
                <p style={{ fontSize: "0.9rem", margin: "0 0 10px 0", lineHeight: "1.5" }}>
                  מתכננים שבת עלייה לתורה ב{city.name}? האוכל הבשרי שלנו מבושל טרי ומגיע במארזים מותאמים להנחה על פלטת שבת בבית או בבית הכנסת, תוך שמירה על עסיסיות הבשרים.
                </p>
                <p style={{ fontSize: "0.85rem", fontWeight: "bold", color: "var(--accent-terracotta)", margin: "0 0 10px 0", lineHeight: "1.4" }}>
                  הזמינו את חבילת השבת המלאה (כל 3 הארוחות, מגיע מקורר בשישי) ב-149 ₪ בלבד לסועד!
                </p>
              </div>
              <div style={{ marginTop: "12px" }}>
                <a href={getEventUrl("shabbat-chatan")} style={{ fontSize: "0.85rem", fontWeight: "bold", color: "var(--primary-gold-hover)", textDecoration: "underline" }}>
                  ← לתפריט שבת חתן מלא ב{city.name}
                </a>
              </div>
            </div>
            
            {/* Azkarot Card */}
            <div className="card" id="azkarot" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px", fontFamily: "sans-serif" }}>
                  אזכרות וסעודות מצווה ב{city.name}
                </h3>
                <p style={{ fontSize: "0.9rem", margin: "0 0 10px 0", lineHeight: "1.5" }}>
                  אנו נספק לכם מגשים חמים של בשר מבושל, אורז וסלטים טריים ישירות לבית האבל או לבית הכנסת ב{city.name}, ברמת כשרות מהודרת של הרב מחפוד שמכבדת כל אורח בשעה הקשה.
                </p>
              </div>
              <div style={{ marginTop: "12px" }}>
                <a href={getEventUrl("azkarot")} style={{ fontSize: "0.85rem", fontWeight: "bold", color: "var(--secondary-green)", textDecoration: "underline" }}>
                  ← לתפריט אזכרות מלא ב{city.name}
                </a>
              </div>
            </div>

            {/* Brit Card */}
            <div className="card" id="brit" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px", fontFamily: "sans-serif" }}>
                  בריתות ואירועים קטנים ב{city.name}
                </h3>
                <p style={{ fontSize: "0.9rem", margin: "0 0 10px 0", lineHeight: "1.5" }}>
                  חוגגים ברית מילה או בריתה ב{city.name}? אנו מספקים מגשי אוכל בשרי חם, עשיר וכשר למהדרין ב-₪58 למנה בלבד להפקה עצמית קלה וחסכונית בבית או באולם.
                </p>
              </div>
              <div style={{ marginTop: "12px" }}>
                <a href={getEventUrl("brit")} style={{ fontSize: "0.85rem", fontWeight: "bold", color: "var(--secondary-green)", textDecoration: "underline" }}>
                  ← לתפריט ברית מילה מלא ב{city.name}
                </a>
              </div>
            </div>

            {/* Bar Mitzvah Card */}
            <div className="card" id="bar-mitzvah" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px", fontFamily: "sans-serif" }}>
                  בר מצווה ובת מצווה ב{city.name}
                </h3>
                <p style={{ fontSize: "0.9rem", margin: "0 0 10px 0", lineHeight: "1.5" }}>
                  חוגגים בר מצווה ב{city.name} בבית או בבית הכנסת? אנו מספקים מגשי אוכל בשרי חם ושופע ב-₪58 למנה. רמת כשרות מהודרת של הרב מחפוד שמכבדת כל אורח.
                </p>
              </div>
              <div style={{ marginTop: "12px" }}>
                <a href={getEventUrl("bar-mitzvah")} style={{ fontSize: "0.85rem", fontWeight: "bold", color: "var(--secondary-green)", textDecoration: "underline" }}>
                  ← לתפריט בר מצווה מלא ב{city.name}
                </a>
              </div>
            </div>

            {/* Hina Card */}
            <div className="card" id="hina" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px", fontFamily: "sans-serif" }}>
                  חינה מרוקאית מסורתית ב{city.name}
                </h3>
                <p style={{ fontSize: "0.9rem", margin: "0 0 10px 0", lineHeight: "1.5" }}>
                  מתכננים חגיגת חינה מסורתית ב{city.name}? תיהנו משפע קולינרי בשרי עשיר, מטעמים אותנטיים מכל הלב ומחיר משתלם של ₪58 למנה בלבד, בכשרות מהודרת של הרב מחפוד.
                </p>
              </div>
              <div style={{ marginTop: "12px" }}>
                <a href={getEventUrl("hina")} style={{ fontSize: "0.85rem", fontWeight: "bold", color: "var(--secondary-green)", textDecoration: "underline" }}>
                  ← לתפריט חינה מלא ב{city.name}
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "var(--spacing-lg)" }}>
            <a href="/" style={{ fontWeight: "bold", textDecoration: "underline", color: "var(--secondary-green)" }}>
              ← חזרה לעמוד הראשי של קייטרינג טעם מהודר
            </a>
          </div>
        </div>
      </section>

      {/* Localized Neighborhoods & Synagogues Section */}
      {(city.neighborhoods || city.synagogues) && (
        <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "var(--spacing-md)" }}>
              <h2>🏠 אספקה ומשלוחים לשכונות ובתי כנסת ב{city.name}</h2>
              <p style={{ maxWidth: "800px", margin: "10px auto 0 auto", lineHeight: "1.6" }}>
                אנחנו ב"טעם מהודר" מכירים לעומק כל רחוב, בית כנסת ומוקד קהילתי ב{city.name}. מערך הלוגיסטיקה והמשלוחים שלנו מותאם במיוחד לאספקה מהירה ומבוקרת ישירות לביתכם, למועדון הדיירים בשכונה, או ישירות לגבאי בבית הכנסת שבו נערך האירוע.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: "var(--spacing-md)", marginTop: "20px" }}>
              {city.neighborhoods && (
                <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                  <h3 style={{ color: "var(--secondary-green)", borderBottom: "2px solid var(--primary-gold)", paddingBottom: "8px", marginBottom: "12px", fontSize: "1.2rem", fontFamily: "sans-serif" }}>
                    📍 שכונות ואזורי חלוקה ב{city.name}:
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {city.neighborhoods.map((n, i) => (
                      <span key={i} style={{ backgroundColor: "var(--bg-warm-sand)", padding: "4px 12px", borderRadius: "16px", fontSize: "0.9rem", fontWeight: "500", color: "var(--text-dark)" }}>
                        {n}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "15px", lineHeight: "1.4" }}>
                    הצוותים שלנו מספקים משלוחים לכל השכונות ב{city.name}. אם השכונה שלכם אינה מופיעה ברשימה, צרו קשר עם הנציג לבדיקת היתכנות וזמני הגעה מדויקים.
                  </p>
                </div>
              )}

              {city.synagogues && (
                <div className="card" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
                  <h3 style={{ color: "var(--secondary-green)", borderBottom: "2px solid var(--primary-gold)", paddingBottom: "8px", marginBottom: "12px", fontSize: "1.2rem", fontFamily: "sans-serif" }}>
                    🕌 בתי כנסת ומוקדי שמחות ב{city.name}:
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {city.synagogues.map((s, i) => (
                      <span key={i} style={{ backgroundColor: "var(--bg-warm-sand)", padding: "4px 12px", borderRadius: "16px", fontSize: "0.9rem", fontWeight: "500", color: "var(--text-dark)" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "15px", lineHeight: "1.4" }}>
                    אנו מתואמים היטב עם מנהלי האירועים והגבאים במוקדים אלו ב{city.name} לאספקה חלקה ומכבדת של אוכל מוכן חם או מקורר ישירות למקום השמחה.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Neighboring Cities SILO links */}
      {city.neighborSlugs && city.neighborSlugs.length > 0 && (
        <section className="section" style={{ backgroundColor: "#ffffff", padding: "var(--spacing-md) 0", borderTop: "1px solid var(--border-color)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h3 style={{ color: "var(--secondary-green)", marginBottom: "15px", fontSize: "1.2rem", fontWeight: "bold", fontFamily: "sans-serif" }}>
              🏠 שירותי קייטרינג בערים סמוכות ל{city.name}:
            </h3>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
              {city.neighborSlugs.map((neighborSlug) => {
                const neighbor = CITY_DATA.find((c) => c.slug === neighborSlug);
                if (!neighbor) return null;
                return (
                  <a
                    key={neighborSlug}
                    href={`/city/${neighborSlug}`}
                    style={{
                      backgroundColor: "var(--bg-warm-sand)",
                      color: "var(--text-dark)",
                      padding: "6px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      border: "1px solid var(--border-color)",
                      fontWeight: "600",
                      textDecoration: "none"
                    }}
                  >
                    קייטרינג ב{neighbor.name}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
