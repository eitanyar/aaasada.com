import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { CITY_DATA, CATERING_REGIONS } from "../../../../data/catering-content";
import MenuBuilder from "../../../../components/MenuBuilder";
import LocalDeliveryCard from "../../../../components/LocalDeliveryCard";
import VideoTestimonial from "../../../../components/VideoTestimonial";
import { PhoneIcon } from "../../../../components/icons";

// Define the static slugs to pre-render during build time (Focus Cities only)
export async function generateStaticParams() {
  return CITY_DATA.filter((city) => city.isFocus).map((city) => ({
    slug: city.slug,
  }));
}

// Generate metadata for each Shabbat Chatan city page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city || !city.isFocus) return {};

  return {
    title: `קייטרינג לשבת חתן ב${city.name} - תפריט ומחירים | טעם מהודר`,
    description: `מחפשים קייטרינג לשבת חתן ב${city.name}? אוכל מוכן כשר למהדרין (בד"ץ מחפוד) במחירים ללא תחרות. תפריט מותאם לכל סעודות השבת. מינימום 30 איש.`,
    alternates: {
      canonical: `https://aaasada.com/city/${city.slug}/shabbat-chatan`,
    },
  };
}

export default async function ShabbatChatanCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);

  if (!city || !city.isFocus) {
    notFound();
  }

  const regionTitle = CATERING_REGIONS[city.region]?.title || city.region;

  // FoodEvent/Catering Service Schema JSON-LD
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "name": `קייטרינג לשבת חתן ב${city.name} - טעם מהודר`,
    "image": "https://aaasada.com/wp-content/uploads/2022/02/AnyConv.com__774aa9ca-0cae-4218-a91b-15307e737b79.jpg",
    "description": `קייטרינג לשבת חתן ב${city.name} בהשגחת בד"ץ הרב מחפוד. אוכל מוכן בשרי מקורר ועשיר לסעודות ליל שבת, בוקר וסעודה שלישית.`,
    "telephone": "052-609-0930",
    "url": `https://aaasada.com/city/${city.slug}/shabbat-chatan`,
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
      "name": "תפריט שבת חתן בשרי כשר למהדרין ב-58 ש\"ח",
      "offers": {
        "@type": "Offer",
        "price": "58.00",
        "priceCurrency": "ILS"
      }
    }
  };

  return (
    <div>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Hero Section */}
      <section className="hero-section shabbat-hero">
        <div className="container" style={{ textAlign: "center" }}>
          {/* SEO Breadcrumbs */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "0.9rem",
            color: "rgba(255, 255, 255, 0.6)",
            marginBottom: "15px",
            fontFamily: "sans-serif"
          }}>
            <a href="/" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>ראשי</a>
            <span style={{ margin: "0 6px" }}>&gt;</span>
            <a href="/shabbat-chatan" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לשבת חתן</a>
            <span style={{ margin: "0 6px" }}>&gt;</span>
            <span style={{ color: "var(--primary-gold)" }}>שבת חתן ב{city.name}</span>
          </div>

          <div className="badge-kosher" style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "var(--primary-gold)",
            border: "1px solid var(--primary-gold)",
            marginBottom: "15px"
          }}>
            קייטרינג לשבת חתן • כשר בד"ץ יורה דעה (הרב מחפוד)
          </div>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontFamily: "var(--font-frank-ruhl)" }}>
            קייטרינג לשבת חתן ב{city.name}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.15rem", maxWidth: "800px", margin: "10px auto 0 auto" }}>
            משלוח אוכל מוכן מקורר, עשיר ושופע לשבת עלייה לתורה ב{city.name}. תפריט מותאם במיוחד לשמירה על טריות במקרר וחימום קל על פלטת שבת.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט שבת חתן</span>
            </a>
            <a href="#video-testimonials" className="btn btn-outline" style={{
              color: "#ffffff",
              borderColor: "rgba(255,255,255,0.4)",
              padding: "12px 30px",
              fontSize: "1.1rem"
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}><span>צפו בהמלצות וידאו</span><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg></span>
            </a>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
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
            <LocalDeliveryCard isShabbatChatanOverride={true} priceText="₪58 למנה / ₪149 לחבילת 3 סעודות" cityName={city.name} />
          </Suspense>

      {/* Video Testimonial Section */}
      <VideoTestimonial videoId="gYsjvm6XgSQ" />

          {/* 149 NIS Package Callout */}
          <div style={{
            background: "linear-gradient(135deg, #fffdf0 0%, #fef9e6 100%)",
            border: "2px solid var(--primary-gold)",
            borderRadius: "var(--border-radius-lg)",
            padding: "var(--spacing-lg)",
            boxShadow: "0 8px 30px rgba(212, 175, 55, 0.15)",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            <span style={{
              backgroundColor: "var(--accent-terracotta)",
              color: "#ffffff",
              padding: "5px 15px",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "15px"
            }}>
              🌟 מבצע בלעדי לשבת חתן ב{city.name}
            </span>
            <h3 style={{
              color: "var(--secondary-green)",
              fontFamily: "var(--font-frank-ruhl)",
              fontSize: "2rem",
              margin: "0 0 10px 0"
            }}>
              חבילת שבת חתן "הכל כלול" ב-₪149 בלבד לסועד!
            </h3>
            <p style={{
              fontSize: "1.15rem",
              lineHeight: "1.7",
              color: "var(--text-dark)",
              maxWidth: "750px",
              margin: "0 auto 10px auto"
            }}>
              מארגנים שבת עלייה לתורה ב{city.name}? קבלו את <strong>חבילת 3 סעודות השבת המלאה</strong> במתכונת עשירה ושופעת במיוחד:
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "15px",
              marginTop: "20px",
              marginBottom: "25px",
              textAlign: "right"
            }}>
              {/* Friday Night Card */}
              <div style={{
                background: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.02)"
              }}>
                <h4 style={{ color: "var(--secondary-green)", borderBottom: "2px solid var(--primary-gold)", paddingBottom: "6px", marginBottom: "12px", fontSize: "1.1rem", fontFamily: "sans-serif", fontWeight: "bold" }}>
                  🕯️ סעודת ליל שבת (ערב שבת)
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.95rem" }}>
                  <li>🥗 <strong>7 סלטים טריים</strong> לבחירה</li>
                  <li>🍚 <strong>3 תוספות חמות</strong> לבחירה</li>
                  <li>🍽️ <strong>2 מנות ביניים</strong> לבחירה</li>
                  <li>🥩 <strong>3 מנות עיקריות</strong> לבחירה</li>
                  <li>🥖 <strong>לחמנייה טרייה לכל סועד</strong></li>
                </ul>
              </div>

              {/* Saturday Noon Card */}
              <div style={{
                background: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.02)"
              }}>
                <h4 style={{ color: "var(--secondary-green)", borderBottom: "2px solid var(--primary-gold)", paddingBottom: "6px", marginBottom: "12px", fontSize: "1.1rem", fontFamily: "sans-serif", fontWeight: "bold" }}>
                  ☀️ סעודת יום שבת (שבת צהריים)
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.95rem" }}>
                  <li>🥗 <strong>7 סלטים טריים</strong> לבחירה</li>
                  <li>🍚 <strong>3 תוספות חמות</strong> לבחירה</li>
                  <li>🥩 <strong>3 מנות עיקריות</strong> לבחירה</li>
                  <li>🥖 <strong>לחמנייה טרייה לכל סועד</strong></li>
                </ul>
              </div>

              {/* Third Meal Card */}
              <div style={{
                background: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.02)"
              }}>
                <h4 style={{ color: "var(--secondary-green)", borderBottom: "2px solid var(--primary-gold)", paddingBottom: "6px", marginBottom: "12px", fontSize: "1.1rem", fontFamily: "sans-serif", fontWeight: "bold" }}>
                  🌅 סעודה שלישית (שבת אחה"צ)
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.95rem" }}>
                  <li>🥗 <strong>4 סלטים טריים</strong> לבחירה</li>
                  <li>🐟 <strong>דג מושט מטוגן פריך</strong></li>
                  <li>🥧 <strong>פשטידה חמה (קוגל)</strong></li>
                  <li>🥖 <strong>לחמנייה טרייה לכל סועד</strong></li>
                </ul>
              </div>
            </div>

            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center"
            }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--secondary-green)" }}>
                🥗 כל 3 הסעודות • 🥩 כשרות בד"ץ הרב מחפוד • 🚚 משלוח מקורר בשישי ל{city.name}
              </div>
              <a href="tel:052-609-0930" className="btn btn-secondary" style={{
                padding: "12px 28px",
                fontSize: "1.1rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}>
                📞 לפרטים והזמנה טלפונית: 052-609-0930
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Builder Section */}
      <section className="section" id="menu-section" style={{
        background: "var(--bg-warm-sand)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>תפריט שבת חתן ₪58 למנה</span>
            <h2>הרכיבו את התפריט שלכם לשבת חתן ב{city.name}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו את המנות המועדפות עליכם לאורחי השבת. דמי המשלוח יתווספו אוטומטית בעת שיחת תיאום ההזמנה.
            </p>
          </div>

          <MenuBuilder />
        </div>
      </section>

      {/* Waiter Service Callout — Shabbat Chatan only */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div className="card" style={{ padding: "var(--spacing-md)", backgroundColor: "#ffffff", borderRadius: "var(--border-radius-md)", border: "2px solid var(--primary-gold)" }}>
            <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold", fontSize: "1.2rem" }}>🤵 קייטרינג שבת חתן ב{city.name} עם שירות מלצרים</h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              שירות מלצרים לשבת חתן הוא אפשרי לחלוטין — וכמובן בתנאי כשרות מחמירים. מכיוון שהמלצרים שוהים את כל השבת במקום האירוח, <strong>בעל השמחה אחראי לתיאום סידורי הלינה</strong> עבורם. כתוצאה מכך, צוות המלצרים נוכח ומגיש <strong>בכל 3 סעודות השבת</strong> — מה שמעלה את עלות השירות בהתאם.
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "10px", marginBottom: 0, borderTop: "1px solid var(--border-color)", paddingTop: "10px" }}>
              📞 <strong>לפרטים נוספים ותיאום</strong> — צרו קשר ישירות עמנו: <a href="tel:052-609-0930" style={{ color: "var(--secondary-green)", fontWeight: "bold" }}>052-609-0930</a>
            </p>
          </div>
        </div>
      </section>

      {/* Shabbat Chatan Tips & Context */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>טיפים לארגון קייטרינג שבת חתן ב{city.name}</h2>
            <p>איך לחסוך זמן ולשמור על אוכל חם ומפנק לאורך כל השבת</p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px" }}>
                חימום נכון על פלטה
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                כדי לשמור על עסיסיות הבשרים, מומלץ להניח את המגשים סגורים על גבי פלטת שבת כשהם מוגבהים מעט (למשל, על תבנית הפוכה) או ישירות על פלטה בחום נמוך, כשעתיים לפני הגשת האוכל.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px" }}>
                סדר הגשת הסלטים
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                הסלטים הטריים שלנו מגיעים בקופסאות נפרדות. מומלץ להוציא אותם מהמקרר כחצי שעה לפני הארוחה כדי שיגיעו לטמפרטורת החדר ויפתחו את הטעמים הים-תיכוניים העשירים שלהם.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px" }}>
                חלוקת מנות חכמה
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                תפריט 58 ש"ח של 'טעם מהודר' כולל בחירה של <strong style={{ color: "var(--primary-gold)", fontSize: "1.1rem" }}>3</strong> מנות עיקריות, <strong style={{ color: "var(--primary-gold)", fontSize: "1.1rem" }}>3</strong> תוספות ו-<strong style={{ color: "var(--primary-gold)", fontSize: "1.1rem" }}>7</strong> סלטים. המנות מגיעות בנדיבות רבה כך שאין צורך לחשוש שמישהו יישאר רעב - אצלנו כולם שבעים!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Shabbat Chatan Info (Long SEO Copy) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2>אירוח מכובד ושופע לשבת המרגשת שלכם ב{city.name}</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)", marginTop: "15px" }}>
              עלייה לתורה ושבת חתן ב{city.name} הן הזדמנות משמחת לחגוג עם המשפחה והחברים הקרובים. במקום לבלות שעות ארוכות במטבח או לשלם אלפי שקלים נוספים על צוות הפקה ומלצרים, 'טעם מהודר' מציעה לכם פתרון חכם להגשה עצמית קלה ונוחה בסגנון "עשה זאת בעצמך".
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)" }}>
              אנו נספק לכם מגשים המגיעים מקוררים ומכילים נתחי בשר בבישול ארוך, עופות שחומים, אורז חגיגי, תפוחי אדמה אפויים וסלטים ביתיים טריים. כל האוכל מבושל טרי לקראת שבת ומגיע מקורר בשישי בצהריים כדי להבטיח טריות מקסימלית והתאמה מושלמת לחימום בטוח על פלטת השבת בבית או בבית הכנסת ב{city.name}.
            </p>
            <div style={{
              backgroundColor: "var(--primary-gold-light)",
              borderRight: "4px solid var(--primary-gold)",
              padding: "12px 18px",
              borderRadius: "4px",
              fontWeight: "600",
              marginTop: "15px",
              color: "var(--primary-gold-hover)"
            }}>
              👑 כשרות מהודרת בד"ץ הרב שלמה מחפוד (שחיטת חלק) - מעניקה שקט נפשי מלא לאירוח של כל אורח ועדה ב{city.name}.
            </div>
            
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <a href={`/city/${city.slug}`} style={{ fontWeight: "bold", textDecoration: "underline", color: "var(--secondary-green)" }}>
                ← חזרה לעמוד הקייטרינג הכללי של {city.name}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
