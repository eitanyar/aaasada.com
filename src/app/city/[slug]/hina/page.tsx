import React from "react";
import { notFound } from "next/navigation";
import { CITY_DATA, CATERING_REGIONS } from "../../../../data/catering-content";
import MenuBuilder from "../../../../components/MenuBuilder";
import { PhoneIcon } from "../../../../components/icons";

// Define the static slugs to pre-render during build time (Focus Cities only)
export async function generateStaticParams() {
  return CITY_DATA.filter((city) => city.isFocus).map((city) => ({
    slug: city.slug,
  }));
}

// Generate metadata for each Hina city page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city || !city.isFocus) return {};

  return {
    title: `קייטרינג לחינה ב${city.name} - תפריט ומחירים | טעם מהודר`,
    description: `מחפשים קייטרינג לחינה ב${city.name}? אוכל מוכן בשרי כשר למהדרין (בד"ץ מחפוד) ב-58 ₪ למנה. תפריט בשרי עשיר, מטעמים אותנטיים לחינה מרוקאית מסורתית.`,
    alternates: {
      canonical: `https://aaasada.com/city/${city.slug}/hina`,
    },
  };
}

export default async function HinaCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);

  if (!city || !city.isFocus) {
    notFound();
  }

  const regionTitle = CATERING_REGIONS[city.region]?.title || city.region;

  // Catering Service Schema JSON-LD
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "name": `קייטרינג לחינה ב${city.name} - טעם מהודר`,
    "image": "https://aaasada.com/wp-content/uploads/2022/02/AnyConv.com__774aa9ca-0cae-4218-a91b-15307e737b79.jpg",
    "description": `קייטרינג לחינה מרוקאית מסורתית ב${city.name} בהשגחת בד"ץ הרב מחפוד. מגשי אוכל מוכן בשרי חם ושופע ב-58 ₪ למנה להפקה עצמית קלה וחסכונית.`,
    "telephone": "052-609-0930",
    "url": `https://aaasada.com/city/${city.slug}/hina`,
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
      "name": "תפריט חינה בשרי כשר למהדרין ב-58 ש\"ח",
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
      <section className="hero-section hina-hero">
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
            <a href="/hina" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לחינה</a>
            <span style={{ margin: "0 6px" }}>&gt;</span>
            <span style={{ color: "var(--primary-gold)" }}>חינה ב{city.name}</span>
          </div>

          <div className="badge-kosher" style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            color: "var(--primary-gold)",
            border: "1px solid var(--primary-gold)",
            marginBottom: "15px"
          }}>
            קייטרינג לחינה מסורתית • כשר למהדרין בד"ץ הרב מחפוד • אזור {regionTitle}
          </div>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontFamily: "Frank Ruhl Libre, serif" }}>
            קייטרינג לחינה ב{city.name}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.15rem", maxWidth: "800px", margin: "10px auto 0 auto" }}>
            אוכל מוכן בשרי עשיר, מטעמים אותנטיים ומגשים חמים ב-₪58 למנה בלבד להזמנה ב{city.name}. אירוח שמח, עשיר ושופע מכל הלב המבוסס על הגשה עצמית קלה.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט לחינה</span>
            </a>
            <a href="tel:052-609-0930" className="btn btn-outline" style={{
              color: "#ffffff",
              borderColor: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.05)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <PhoneIcon size={18} />
              <span>052-609-0930</span>
            </a>
          </div>
        </div>
      </section>

      {/* Localized Hina Info */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "var(--spacing-lg)" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2>חוגגים חינה מרוקאית אותנטית ושופעת ב{city.name}</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)" }}>
                חגיגת החינה היא אחד האירועים המשפחתיים השמחים, הצבעוניים והמרגשים ביותר במסורת היהודית. כדי להבטיח שהאורחים שלכם ב{city.name} ייהנו מחוויה קולינרית עשירה שתשלים את התלבושות, השירים והשמחה, אתם זקוקים לתפריט בשרי עשיר ושופע מכל הלב.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)" }}>
                אנו ב'טעם מהודר' מספקים לכם מגשים חמים של תבשילים בשריים משובחים, תוספות חמות וסלטים טריים בטעם ביתי נפלא. האוכל מגיע חם, ארוז בצורה מוגנת ומקצועית במארזים מבודדי חום, ומוכן ישירות להגשה עצמית פשוטה ומהירה בבית או באולם ב{city.name}.
              </p>
              <div style={{
                backgroundColor: "var(--primary-gold-light)",
                borderRight: "4px solid var(--primary-gold)",
                padding: "12px 18px",
                borderRadius: "4px",
                fontWeight: "600",
                marginTop: "10px",
                color: "var(--primary-gold-hover)"
              }}>
                👑 כשרות מהודרת של בד"ץ הרב שלמה מחפוד שליט"א - מעניקה שקט נפשי מלא לאירוח של כל האורחים ובני המשפחה המגיעים לשמוח איתכם ב{city.name}.
              </div>
            </div>

            <div className="card" style={{
              border: "1.5px solid var(--border-color)",
              backgroundColor: "var(--bg-warm-sand)",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              justifyContent: "center"
            }}>
              <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", color: "var(--secondary-green)", margin: 0 }}>
                פרטי אספקה לחינות ב{city.name}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>📦 סוג המנות:</span>
                  <strong>תבשילים בשריים חמים וסלטים טריים</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>🚚 עלות משלוח ל{city.name}:</span>
                  <strong>ימסר על ידי הנציג בהתאם למיקום וזמן המסירה</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>👥 מינימום הזמנה:</span>
                  <strong>30 מנות (אורחים)</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>🔥 אספקה:</span>
                  <strong>משלוח מגיע חם ומוכן במארזים מבודדי חום</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>🍯 קינוחים ומתוקים:</span>
                  <strong>ניתן להוסיף מגשי קינוחי פרווה אישיים (60 יח')</strong>
                </li>
              </ul>
              <div style={{ marginTop: "10px" }}>
                <a href="tel:052-609-0930" className="btn btn-secondary" style={{ width: "100%" }}>
                  📞 שיחה מהירה להזמנה: 052-609-0930
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moroccan style and sweet trays details */}
      <section className="section" style={{ backgroundColor: "#f9fafb", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>אירוח חינה מושלם ב{city.name} עם "טעם מהודר"</h2>
            <p>שילוב מנצח של בשרים עסיסיים, סלטים מבושלים וקינוחים מתוקים</p>
          </div>

          <div className="grid grid-3" style={{ gap: "var(--spacing-md)" }}>
            <div className="card" style={{ backgroundColor: "#ffffff" }}>
              <h3 style={{ color: "var(--secondary-green)", marginBottom: "8px" }}>סלטים מבושלים אותנטיים</h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                תפריט 58 ש"ח מאפשר לכם לבחור **7 סלטים**. לחינה מסורתית אנו ממליצים במיוחד על הסלטים המבושלים שלנו: מטבוחה מרוקאית אסלית בבישול ארוך, גזר מרוקאי פיקנטי, סלק אדום בתיבול כמון, וזעלוק חצילים עשיר.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: "#ffffff" }}>
              <h3 style={{ color: "var(--secondary-green)", marginBottom: "8px" }}>בשרים עסיסיים ותבשילי קדרה</h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                בחרו **3 מנות עיקריות** חמות. לצד פרגיות על האש ושניצלים פריכים לילדים, תוכלו לבחור במנות קדרה חגיגיות כמו צלי בקר ברוטב פטריות עשיר או קציצות בשר נימוחות, המשתלבות נפלא עם אורז לנטריה או קוסקוס מרוקאי אוורירי.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: "#ffffff" }}>
              <h3 style={{ color: "var(--secondary-green)", marginBottom: "8px" }}>מגשי קינוחי פרווה מהודרים</h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                חינה אינה שלמה ללא שולחן מתוקים מרהיב. אצלנו תוכלו לשדרג ולהוסיף להזמנה **מגש קינוחים עשיר (60 יחידות)** המכיל לקט עשיר של קינוחי פרווה איכותיים, מעוצבים ואישיים שמשלימים את טקס החינה בתיאום מושלם.
              </p>
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
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>תפריט חינה ₪58 למנה</span>
            <h2>הרכיבו את התפריט שלכם לחינה ב{city.name}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו 3 מנות עיקריות, 3 תוספות ו-7 סלטים טריים. נציגנו יחזור אליכם בוואטסאפ או בטלפון עם אישור הזמנה מהיר.
            </p>
          </div>

          <MenuBuilder />
        </div>
      </section>

      {/* Bottom links */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <a href={`/city/${city.slug}`} style={{ fontWeight: "bold", textDecoration: "underline", color: "var(--secondary-green)" }}>
            ← חזרה לעמוד הקייטרינג הכללי של {city.name}
          </a>
        </div>
      </section>
    </div>
  );
}
