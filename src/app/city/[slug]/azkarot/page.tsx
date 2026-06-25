import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { CITY_DATA, CATERING_REGIONS } from "../../../../data/catering-content";
import MenuBuilder from "../../../../components/MenuBuilder";
import LocalDeliveryCard from "../../../../components/LocalDeliveryCard";
import { PhoneIcon } from "../../../../components/icons";
import AzkarotReviews from "../../../../components/AzkarotReviews";

// Define the static slugs to pre-render during build time (Focus Cities only)
export async function generateStaticParams() {
  return CITY_DATA.filter((city) => city.isFocus).map((city) => ({
    slug: city.slug,
  }));
}

// Generate metadata for each Azkarot city page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city || !city.isFocus) return {};

  return {
    title: `קייטרינג לאזכרה ב${city.name} - אוכל מוכן לאזכרות ושבעה | טעם מהודר`,
    description: `שירותי קייטרינג לאזכרה ב${city.name} ולסעודת מצווה/אבלים. אוכל בשרי חם וכשר למהדרין (בד"ץ מחפוד) במשלוח מהר עד אליכם. ללא דאגות בימים קשים.`,
    alternates: {
      canonical: `https://aaasada.com/city/${city.slug}/azkarot`,
    },
  };
}

export default async function AzkarotCityPage({ params }: { params: Promise<{ slug: string }> }) {
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
    "name": `קייטרינג לאזכרה ב${city.name} - טעם מהודר`,
    "image": "https://aaasada.com/wp-content/uploads/2022/02/AnyConv.com__774aa9ca-0cae-4218-a91b-15307e737b79.jpg",
    "description": `קייטרינג לסעודת אבלים, שבעה ואזכרות ב${city.name} בהשגחת בד"ץ הרב מחפוד. אוכל בשרי מבושל חם ומנחם בשירות עצמי מכובד וזול.`,
    "telephone": "052-609-0930",
    "url": `https://aaasada.com/city/${city.slug}/azkarot`,
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
      "name": "תפריט אזכרות בשרי כשר למהדרין ב-58 ש\"ח",
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

      <section className="hero-section azkarot-hero">
        <div className="container">
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
            <a href="/azkarot" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לאזכרות</a>
            <span style={{ margin: "0 6px" }}>&gt;</span>
            <span style={{ color: "var(--primary-gold)" }}>אזכרה ב{city.name}</span>
          </div>

          <div className="badge-kosher" style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            color: "var(--primary-gold)",
            border: "1px solid var(--primary-gold)",
            marginBottom: "15px"
          }}>
            קייטרינג לאזכרות, אבלים ושבעה • כשר למהדרין בד"ץ הרב מחפוד
          </div>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontFamily: "var(--font-frank-ruhl)" }}>
            קייטרינג לאזכרה וסעודת מצווה ב{city.name}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.15rem", maxWidth: "800px", margin: "10px auto 0 auto" }}>
            משלוח אוכל מוכן חם, מכובד ומנחם לבית האבל או לבית הכנסת ב{city.name}. תפריט בשרי עשיר בהשגחה מהודרת ובמחיר הגון, ללא התעסקות בימים קשים.
          </p>
          </div>
        </div>
      </section>

      {/* Key Details Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
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
      </section>

      {/* Azkarot Text Reviews - replaces video (inappropriate for mourning context) */}
      <AzkarotReviews />

      {/* Menu Builder Section */}
      <section className="section" id="menu-section" style={{
        background: "var(--bg-warm-sand)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>תפריט אזכרות ₪58 למנה</span>
            <h2>הרכיבו את התפריט שלכם לאזכרה ב{city.name}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו את המנות העיקריות, התוספות והסלטים המועדפים. נציגנו יחזור אליכם בוואטסאפ או בטלפון עם אישור הזמנה מהיר.
            </p>
          </div>

          <MenuBuilder />
        </div>
      </section>

      {/* Respectfull guidelines */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שירות קשוב ומכובד בשעת הצורך ב{city.name}</h2>
            <p>אנו דואגים לכל הפרטים הקטנים כדי לאפשר לכם להתמקד במעמד</p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px" }}>
                טריות ללא פשרות
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                כל המזון מבושל ביום האזכרה עצמו, תוך שימוש בחומרי גלם מובחרים וטריים בלבד, כדי להבטיח את הטעם הביתי המצוין והשפע שמאפיינים אותנו.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px" }}>
                אריזה מבודדת חום
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                אנו שולחים את האוכל במארזי קלקר עבים במיוחד השומרים על טמפרטורה גבוהה של המגשים למשך שעות, כך שהאוכל יוגש חם גם אם יחול עיכוב קל בזמנים.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "600", marginBottom: "8px" }}>
                מענה וליווי אנושי
              </h3>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                נציגי השירות שלנו זמינים ללוות אתכם בסבלנות וברגישות בבחירת המנות, ההתאמות הנדרשות ודמי המשלוח המדויקים ל{city.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Azkarot Info (Long SEO Copy) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2>סעודה מכובדת ומנחמת ללא דאגות לוגיסטיות ב{city.name}</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)", marginTop: "15px" }}>
              ארגון סעודת אבלים או אזכרה ב{city.name} דורש היערכות מהירה ואוכל כשר למהדרין שיכבד את המעמד ואת האורחים המגיעים לחלוק כבוד. בימים אלו, העומס הרגשי והלוגיסטי הוא רב, ואתם זקוקים למענה אמין, מהיר וישר.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)" }}>
              קייטרינג 'טעם מהודר' מספק לכם מגשים חמים של אוכל בשרי ביתי חם (בשר בקר ברוטב, פרגיות, עופות בתנור, אורז, תפוחי אדמה וסלטים טריים). האוכל מגיע ארוז היטב במגשי אלומיניום השומרים על החום, ומוכן להנחה מיידית על שולחנות האירוח בבית הכנסת או בבית האבל ב{city.name}.
            </p>
            <div style={{
              backgroundColor: "#f1f5f9",
              borderRight: "4px solid #64748b",
              padding: "12px 18px",
              borderRadius: "4px",
              fontWeight: "600",
              marginTop: "15px",
              color: "#334155"
            }}>
              📌 השגחת בד"ץ יורה דעה של הרב שלמה מחפוד שליט"א - מעניקה שקט נפשי מלא לאירוח של כל קרובי המשפחה והמבקרים המקפידים על רמת כשרות מהודרת.
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
