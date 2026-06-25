import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { CITY_DATA, CATERING_REGIONS } from "../../../../data/catering-content";
import MenuBuilder from "../../../../components/MenuBuilder";
import { PhoneIcon } from "../../../../components/icons";
import LocalDeliveryCard from "../../../../components/LocalDeliveryCard";
import VideoTestimonial from "../../../../components/VideoTestimonial";

// Define the static slugs to pre-render during build time (Focus Cities only)
export async function generateStaticParams() {
  return CITY_DATA.filter((city) => city.isFocus).map((city) => ({
    slug: city.slug,
  }));
}

// Generate metadata for each Bar Mitzvah city page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_DATA.find((c) => c.slug === slug);
  if (!city || !city.isFocus) return {};

  return {
    title: `קייטרינג לבר מצווה ב${city.name} - תפריט ומחירים | טעם מהודר`,
    description: `מחפשים קייטרינג לבר מצווה ב${city.name}? אוכל מוכן בשרי כשר למהדרין (בד"ץ מחפוד) ב-58 ₪ למנה. פתרון הגשה עצמית חסכוני או שירות מלצרים ל-100+ אורחים.`,
    alternates: {
      canonical: `https://aaasada.com/city/${city.slug}/bar-mitzvah`,
    },
  };
}

export default async function BarMitzvahCityPage({ params }: { params: Promise<{ slug: string }> }) {
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
    "name": `קייטרינג לבר מצווה ב${city.name} - טעם מהודר`,
    "image": "https://aaasada.com/wp-content/uploads/2022/02/AnyConv.com__774aa9ca-0cae-4218-a91b-15307e737b79.jpg",
    "description": `קייטרינג לבר מצווה או בת מצווה ב${city.name} בהשגחת בד"ץ הרב מחפוד. מגשי אוכל מוכן בשרי חם ושופע ב-58 ₪ למנה להפקה עצמית קלה וחסכונית.`,
    "telephone": "052-609-0930",
    "url": `https://aaasada.com/city/${city.slug}/bar-mitzvah`,
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
    "hasMenu": {
      "@type": "FoodMenu",
      "name": "תפריט בר מצווה בשרי כשר למהדרין ב-58 ש\"ח",
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
      <section className="hero-section barmitzvah-hero">
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
            <a href="/bar-mitzvah" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לבר מצווה</a>
            <span style={{ margin: "0 6px" }}>&gt;</span>
            <span style={{ color: "var(--primary-gold)" }}>בר מצווה ב{city.name}</span>
          </div>

          <div className="badge-kosher" style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            color: "var(--primary-gold)",
            border: "1px solid var(--primary-gold)",
            marginBottom: "15px"
          }}>
            קייטרינג לבר מצווה ובת מצווה • כשר למהדרין בד"ץ הרב מחפוד
          </div>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontFamily: "var(--font-frank-ruhl)" }}>
            קייטרינג לבר מצווה ב{city.name}
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.15rem", maxWidth: "800px", margin: "10px auto 0 auto" }}>
            מגשי אוכל בשרי חם, עשיר וכשר למהדרין ב-₪58 למנה בלבד להזמנה ב{city.name}. מענה איכותי ושופע לבית הכנסת או לבית החוסך לכם אלפי שקלים.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט לבר מצווה</span>
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

      {/* Video Testimonial Section */}
      <VideoTestimonial videoId="gYsjvm6XgSQ" />

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

      {/* Waiter vs DIY details */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שירותי הפקה והגשה לבר מצווה ב{city.name}</h2>
            <p>התאימו את אופי השירות לתקציב ולסגנון האירוע שלכם</p>
          </div>

          <div className="grid grid-2" style={{ gap: "var(--spacing-md)" }}>
            <div className="card" style={{ backgroundColor: "#ffffff" }}>
              <h3 style={{ color: "var(--secondary-green)" }}>1. הגשה עצמית חסכונית (מנות אוכל מוכן)</h3>
              <p>האפשרות המומלצת והמשתלמת ביותר לבר מצווה בבית או בבית הכנסת ב{city.name}:</p>
              <ul style={{ paddingRight: "20px", display: "flex", flexDirection: "column", gap: "8px", margin: "10px 0" }}>
                <li><strong>מחיר</strong>: 58 ₪ בלבד למנה.</li>
                <li><strong>מה מקבלים</strong>: מגשי אלומיניום שומרי חום עם 3 מנות עיקריות, 3 תוספות חמות ו-7 סלטים לבחירה.</li>
                <li><strong>לוגיסטיקה</strong>: השליח מגיע כשעה לפני תחילת הארוחה עם המגשים חמים מאוד בתוך מארזי קלקר עבים.</li>
                <li><strong>חיסכון</strong>: אין צורך בתשלום על מלצרים, עריכה או פינוי - הכל מוגש בצורה פשוטה, נקייה ומכובדת בסגנון בופיי.</li>
              </ul>
            </div>

            <div className="card" style={{ backgroundColor: "#ffffff", border: "1.5px solid var(--primary-gold)" }}>
              <h3 style={{ color: "var(--secondary-green)" }}>2. שירות הגשה ומלצרים מלא (למעל 100 אורחים)</h3>
              <p>אם ברצונכם להפיק אירוע בר מצווה ב{city.name} ללא מאמץ כלל עם צוות מקצועי:</p>
              <ul style={{ paddingRight: "20px", display: "flex", flexDirection: "column", gap: "8px", margin: "10px 0" }}>
                <li><strong>תנאי סף</strong>: מינימום **100 אורחים** להזמנת שירות זה.</li>
                <li><strong>שירות עריכה והגשה</strong>: צוות המלצרים יגיע למקום האירוע, יערוך את השולחנות במפות ובכלים, יחמם את האוכל, יגיש לאורחים ברווחה ויפנה את השולחנות בסיום.</li>
                <li><strong>מה כולל השדרוג</strong>: שירות מלצרים מקצועי, מפות, כלים חד-פעמיים מהודרים רויאל, ופלטות חימום.</li>
                <li><strong>מחיר</strong>: תוספת של 80 ₪ למנה (החל מ-138 ₪ סה"כ למנה כולל האוכל והמלצרים).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Builder Section */}
      <section className="section" id="menu-section" style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>תפריט בר מצווה ₪58 למנה</span>
            <h2>הרכיבו את התפריט שלכם לבר מצווה ב{city.name}</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו 3 מנות עיקריות, 3 תוספות ו-7 סלטים טריים. נציגנו יחזור אליכם בוואטסאפ או בטלפון עם אישור הזמנה מהיר.
            </p>
          </div>

          <MenuBuilder />
        </div>
      </section>

      {/* Localized Bar Mitzvah Info (Long SEO Copy) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "var(--spacing-lg)" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2>חוגגים עלייה לתורה ובר מצווה ב{city.name} בשפע וברווחה</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)", marginTop: "15px" }}>
                בר מצווה או בת מצווה הן אירועים מרגשים וחד-פעמיים בחיי המשפחה. בין אם השמחה נערכת בבית הכנסת ב{city.name} מיד לאחר העלייה לתורה ביום שני או חמישי, או בתוך מועדון הדיירים בשכונה בסוף השבוע, אתם צריכים פתרון קייטרינג שפוטר אתכם מדאגות ומכבד את האורחים שלכם באוכל מעולה.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)" }}>
                קייטרינג 'טעם מהודר' מספק לכם מגשים בשריים חמים של אוכל מוכן מבושל טרי. התפריט העשיר והמשתלם שלנו ב-58 ₪ למנה, כולל מגוון רחב של מנות בשריות מעולות, תוספות חמות וסלטים טריים. המשלוח מגיע ישירות אליכם ל{city.name} במארזים מבודדי חום, מוכן להנחה קלה על השולחנות להגשה עצמית חכמה.
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
                🕍 רמת כשרות מהודרת של בד"ץ הרב שלמה מחפוד שליט"א - מאפשרת לכל האורחים שלכם ב{city.name} לאכול ולשמוח בלב שקט ובשמחה מלאה.
              </div>
            </div>

            <div className="card" style={{
              border: "1.5px solid var(--border-color)",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              justifyContent: "center"
            }}>
              <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", color: "var(--secondary-green)", margin: 0 }}>
                פרטי אספקה לבר מצווה ב{city.name}
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
                  <span>🍽️ אפשרויות הגשה:</span>
                  <strong>הגשה עצמית חסכונית או שירות מלצרים ל-100+ איש</strong>
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
