import React, { Suspense } from "react";
import MenuBuilder from "../../components/MenuBuilder";
import ProfessionalSupervision from "../../components/ProfessionalSupervision";
import LocalDeliveryCard from "../../components/LocalDeliveryCard";
import VideoTestimonial from "../../components/VideoTestimonial";
import { CITY_DATA, CATERING_REGIONS } from "../../data/catering-content";
import { CheckIcon, PhoneIcon } from "../../components/icons";

export const metadata = {
  title: "קייטרינג לשבת חתן כשר למהדרין בד\"ץ מחפוד | טעם מהודר",
  description: "מחפשים קייטרינג לשבת חתן או עלייה לתורה? אוכל מוכן בשרי מקורר לשמירה על הטריות, עשיר וכשר למהדרין (בד\"ץ הרב מחפוד) ב-58 ₪ למנה. מינימום 30 איש.",
  alternates: {
    canonical: "https://aaasada.com/shabbat-chatan",
  },
};

export default function ShabbatChatanGeneralPage() {
  // Group cities by region for regional navigation
  const citiesByRegion: Record<string, typeof CITY_DATA> = {};
  CITY_DATA.forEach((city) => {
    if (!citiesByRegion[city.region]) {
      citiesByRegion[city.region] = [];
    }
    citiesByRegion[city.region].push(city);
  });

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CateringService",
        "@id": "https://aaasada.com/shabbat-chatan#catering",
        "name": "קייטרינג לשבת חתן - טעם מהודר",
        "image": "https://aaasada.com/images/shabat_hatan.webp",
        "description": "קייטרינג לשבת חתן ועליות לתורה. אוכל מוכן בשרי מקורר לשמירה על הטריות, עשיר וכשר למהדרין בהשגחת בד\"ץ הרב מחפוד ב-58 ש\"ח בלבד למנה.",
        "telephone": "052-609-0930",
        "url": "https://aaasada.com/shabbat-chatan",
        "priceRange": "$$",
        "provider": {
          "@type": "LocalBusiness",
          "name": "קייטרינג טעם מהודר",
          "telephone": "052-609-0930"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "המרכז" },
          { "@type": "AdministrativeArea", "name": "השרון" },
          { "@type": "AdministrativeArea", "name": "השפלה" },
          { "@type": "AdministrativeArea", "name": "הדרום" },
          { "@type": "AdministrativeArea", "name": "השומרון" }
        ],
        "hasMenu": {
          "@type": "FoodMenu",
          "name": "תפריט בשרי לשבת חתן ב-58 ש\"ח",
          "offers": {
            "@type": "Offer",
            "price": "58.00",
            "priceCurrency": "ILS"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aaasada.com/shabbat-chatan#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "מה כולל קייטרינג לשבת חתן בבית הכנסת?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "קייטרינג לשבת חתן בבית הכנסת דורש התארגנות מיוחדת. אנו מגיעים עם כל הציוד הדרוש, מתאמים עם הגבאים, ודואגים שהכל יעבור חלק ומכובד כמו שמתאים למקום הקדוש. האוכל מגיע מקורר בבטחה ומוכן לחימום קל בבית הכנסת."
            }
          },
          {
            "@type": "Question",
            "name": "איפה אפשר למצוא את המחירים לקייטרינג שבת חתן?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "המחירים לשבת חתן מתחילים מ-58 ש\"ח למנה לארוחת קידוש עשירה. אנו מציעים גם מבצע מיוחד לכל 3 סעודות השבת ב-149 ש\"ח בלבד לסועד."
            }
          },
          {
            "@type": "Question",
            "name": "האם האוכל מגיע חם או מקורר?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "האוכל לשבת חתן מגיע מקורר בבטחה במגשי אלומיניום אטומים ומסודרים. קירור המזון שומר על טריותו המלאה ומאפשר לכם להניחו בצורה בטוחה ישירות על פלטת השבת לקראת הסעודה."
            }
          },
          {
            "@type": "Question",
            "name": "האם קיים אצלכם קייטרינג לשבת חתן כולל ציוד?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כן, אנו מציעים שירות קייטרינג לשבת חתן כולל ציוד מלא כגון שולחנות, כסאות, כלי הגשה יפים, מפות שבת, פלטות חימום ועוד, כדי שתוכלו להתמקד באירוח ללא דאגות לוגיסטיות."
            }
          },
          {
            "@type": "Question",
            "name": "מה מיוחד בקייטרינג לשבת חתן בר מצווה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "אנו מתאימים את התפריט כך שישלב מנות אהובות על מבוגרים וילדים כאחד, עם שפע סלטים, תוספות חמות ובשרים נדירים לעילוי שמחת בר המצווה."
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={{ backgroundColor: "var(--bg-warm-sand)" }}>
      {/* Inject JSON-LD Schema Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      {/* Hero Section */}
      <section className="hero-section shabbat-hero">
        <div className="container">
          <div className="badge-kosher" style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "var(--primary-gold)",
            border: "1.5px solid var(--primary-gold)",
            marginBottom: "var(--spacing-md)",
            fontSize: "1.1rem",
            padding: "8px 20px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span>⭐️ כשרות למהדרין - בד"ץ יורה דעה בנשיאות הגאון הרב שלמה מחפוד שליט"א</span>
          </div>
          
          <h1 style={{ color: "#ffffff", fontFamily: "var(--font-frank-ruhl)", marginBottom: "var(--spacing-sm)" }}>
            קייטרינג לשבת חתן בשרי ועשיר
            <br />
            <span style={{ color: "var(--primary-gold)" }}>מנה עשירה ומפנקת במיוחד ב-₪58 בלבד!</span>
          </h1>
          
          <p style={{
            color: "#e2e8f0",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto var(--spacing-lg) auto",
            lineHeight: "1.7"
          }}>
            מתכננים שבת עלייה לתורה בבית או בבית הכנסת? אנו מספקים מגשי אוכל בשרי מקורר מוכן מראש, המתאימים בול להנחה על פלטת שבת ומאפשרים חימום קל תוך שמירה על עסיסיות הבשרים. פתרון הפקה עצמית קלה וחסכונית חוסך לכם אלפי שקלים.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט שבת חתן</span>
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
              <h3>משלוח אוכל מוכן</h3>
              <p>משלוח מבוקר לכל שכונות העיר. פרטי אספקה ומחיר יימסרו בתיאום טלפוני.</p>
            </div>
          }>
            <LocalDeliveryCard isShabbatChatanOverride={true} priceText="₪58 למנה / ₪149 לחבילת 3 סעודות" />
          </Suspense>

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
              🌟 מבצע בלעדי לשבת חתן
            </span>
            <h3 style={{
              color: "var(--secondary-green)",
              fontFamily: "var(--font-frank-ruhl)",
              fontSize: "2rem",
              margin: "0 0 10px 0"
            }}>
              שבת חתן "הכל כלול" ב-₪149 בלבד לסועד!
            </h3>
            <p style={{
              fontSize: "1.15rem",
              lineHeight: "1.7",
              color: "var(--text-dark)",
              maxWidth: "750px",
              margin: "0 auto 10px auto"
            }}>
              פוטרים אתכם מכל דאגות הבישול לשבת. אנו מציעים את <strong>חבילת 3 סעודות השבת המלאה</strong> במתכונת עשירה ושופעת במיוחד:
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
                🥗 כל 3 הסעודות • 🥩 כשרות בד"ץ הרב מחפוד • 🚚 משלוח מקורר בשישי
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
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>התפריט הנדיב ב-₪58 למנה</span>
            <h2>הרכיבו את התפריט שלכם לשבת חתן</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> עיקריות, <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> תוספות ו-<strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>7</strong> סלטים טריים. שלחו אלינו בוואטסאפ ונתחיל לתאם את השבת שלכם.
            </p>
          </div>
          
          <MenuBuilder />
        </div>
      </section>

      {/* Types of Shabbat Chatan Catering Services (BTF) */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>פתרונות אירוח מותאמים לשבת המיוחדת שלכם</h2>
            <p>שירות מקצועי, כשרות מוקפדת ואוכל משובח לכל צורך לוגיסטי</p>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-warm-sand)", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold", fontSize: "1.2rem" }}>🕍 שבת חתן בבית הכנסת</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                העלייה לתורה בבית הכנסת היא רגע מרגש במיוחד, המצריך התארגנות מדויקת ואווירה מתאימה. אנו מציעים קייטרינג לשבת חתן המותאם במיוחד לסעודות באוֹלם בית הכנסת - כולל מנות אישיות מסודרות או הגשה עצמית בסגנון בופה עשיר וקהילתי.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-warm-sand)", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold", fontSize: "1.2rem" }}>🤵 קייטרינג עם מלצרים והפקה (מ-100 איש)</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                מחפשים חוויה יוקרתית אך חמימה? שירות הקייטרינג שלנו עם מלצרים והפקה מלאה מאפשר לכם ולבני המשפחה להתפנות לחלוטין לאירוח ולשמחה ללא כל טרחה. הצוות המנוסה שלנו פועל ברגישות, לבוש ייצוגי ומעניק שירות מקצועי לכל סעודות השבת (הפקות אירועים שלמות החל מ-100 איש ומעלה).
              </p>
            </div>

            <div className="card" style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-warm-sand)", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold", fontSize: "1.2rem" }}>🍽️ פתרון אירוח כולל ציוד מלא</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                אין לכם מספיק שולחנות, כיסאות או כלי הגשה מתאימים? אנו מציעים מעטפת לוגיסטית מלאה - החל ממפות, כלי אוכל, ציוד שמירה על חום וטריות האוכל, ועד פינוי וניקיון מלא של אולם האירוע. חוסך לכם זמן, כסף וכאבי ראש מיותרים.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ marginTop: "30px" }}>
            <div className="card" style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-warm-sand)", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold", fontSize: "1.2rem" }}>📖 שבת חתן בר מצווה</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                כאשר שבת החתן מציינת גם את בר המצווה, נדרשת התייחסות מיוחדת לתפריט, לעיצוב ולשירות. אנו מתמחים בהפקת שבתות בר מצווה באווירה משפחתית מרוממת, עם תפריט בשרי עשיר ומשובח שמתאים גם לנער החוגג וגם לאורחים המבוגרים.
              </p>
            </div>

            <div className="card" style={{ padding: "var(--spacing-md)", backgroundColor: "var(--bg-warm-sand)", borderRadius: "var(--border-radius-md)", border: "1px solid var(--border-color)" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold", fontSize: "1.2rem" }}>📜 כשרות למהדרין בד"ץ מחפוד</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                כל המנות שלנו מוגשות ברמת כשרות קפדנית של בד"ץ יורה דעה. אנו עובדים עם חומרי גלם איכותיים בלבד, ומתחייבים לסטנדרט מוקפד של הכנה הלכתית. אנו מלווים משפחות כבר שנים עם ניסיון עשיר, שירות מכל הלב ואוכל מעולה שכולם מדברים עליו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content explaining Shabbat Chatan features (Long SEO text) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-lg)" }}>
            <div>
              <h2>קייטרינג לשבת חתן – שפע ללא פשרות</h2>
              <p>
                שבת עלייה לתורה היא מהשבתות החגיגיות והמרגשות ביותר בחיי המשפחה היהודית. ב"טעם מהודר" אנו מתחייבים להבטחה אחת ברורה: שפע ללא פשרות. אנו מציעים תפריט עשיר, מכבד ומלא בכל טוב לארוחת קידוש או לסעודות השבת, במחיר המשתלם ביותר בשוק של 58 ₪ למנה בלבד.
              </p>
              <p>
                התפריט כולל מבחר מפנק: 3 מנות עיקריות לבחירה מתוך מגוון עשיר של בשרים ועופות, 7 סוגי סלטים טריים בנדיבות רבה, ו-3 תוספות חמות עשירות בניחוח ביתי אמיתי. אצלנו השקיפות היא מתכון מנצח – אתם מקבלים תמורה מלאה לכסף שלכם בלי אותיות קטנות ובלי הפתעות במחיר.
              </p>
              <p>
                האוכל מבושל טרי ומגיע אליכם כשהוא מקורר בבטחה ובטמפרטורה מבוקרת במגשי אלומיניום אטומים ומסודרים, המתאימים בול לחימום הלכתי קל ישירות על גבי פלטת שבת, תוך שמירה על עסיסיות הבשרים והטריות המרבית. כשרות בד"ץ יורה דעה בהשגחת הגאון הרב שלמה מחפוד שליט"א מעניקה לכם ביטחון ושקט נפשי מלא לארח כל אורח ומנחם.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <img
                src="/images/shabat_hatan-scaled.webp"
                alt="קייטרינג לשבת חתן"
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "var(--border-radius-lg)",
                  border: "3px solid var(--primary-gold)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
                }}
              />
              <div style={{
                background: "#ffffff",
                border: "1.5px solid var(--border-color)",
                borderRadius: "var(--border-radius-lg)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", margin: "0 0 15px 0" }}>היתרונות שלנו לשבת חתן:</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מחיר קבוע והוגן:</strong> ₪58 בלבד למנה (בשרים, תוספות חמות וסלטים).</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מתאים לפלטת שבת:</strong> המגשים מותאמים לחימום איטי מבלי לייבש את האוכל.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מינימום הזמנה נמוך:</strong> החל מ-30 מנות בלבד, מתאים בדיוק לאירועים קטנים בבית או בבית הכנסת.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>משלוח מקורר בבטחה:</strong> מגיע אליכם בשישי בצהריים כשהוא מקורר בטמפרטורה מבוקרת לשמירה על טריות מקסימלית עד כניסת השבת.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <ProfessionalSupervision />
        </div>
      </section>

      {/* FAQ Accordion Section (BTF) */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שאלות ותשובות נפוצות - קייטרינג שבת חתן</h2>
            <p>כל התשובות לשאלות הלוגיסטיות וההלכתיות לקראת השבת שלכם</p>
          </div>

          <div className="faq-accordion">
            <details className="faq-item">
              <summary className="faq-summary">מה כולל קייטרינג לשבת חתן בבית הכנסת?</summary>
              <div className="faq-content">
                קייטרינג לשבת חתן בבית הכנסת דורש התארגנות מיוחדת, ואנחנו יודעים בדיוק איך לעשות את זה בכבוד ובסדר. אנו מגיעים עם כל הציוד הדרוש, מתאמים עם הגבאים, ודואגים שהכל יעבור חלק ומכובד כמו שמתאים למקום הקדוש. הכל נעשה בכבוד ובסדר שמתאים לבית הכנסת, ובסוף האירוע אנחנו מחזירים הכל למצב הראשוני ומשאירים את המקום נקי ומסודר.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">איפה אפשר למצוא את המחירים לקייטרינג שבת חתן?</summary>
              <div className="faq-content">
                המחירים שלנו לשבת חתן משתלמים וברורים. החל מ-58 ש"ח למנה, בלי הפתעות בסוף. המחירים תמיד נשארים הוגנים וזולים. יש לנו טווח מחירים רחב שמתאים לכל תקציב. השבת כוללת שלוש סעודות, ואנחנו יכולים לספק קייטרינג לכל הסעודות או רק לחלק מהן. הכי פשוט זה להתקשר ל-052-6090930 או לשלוח הודעה בוואסטאפ ונעשה לכם חישוב מדויק.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">מה מיוחד בקייטרינג לשבת חתן בר מצווה?</summary>
              <div className="faq-content">
                אנחנו מבינים שזה אירוע מיוחד, אז הקייטרינג שלנו כולל תפריט עשיר שמתאים לכל הגילאים. אנו משלבים מנות בשריות פרימיום וסלטים אותנטיים המורכבים בתיאום אישי ומספקים פתרון של סעודות מלאות לכל השבת במבצע משתלם.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם קיים אצלכם קייטרינג לשבת חתן כולל ציוד?</summary>
              <div className="faq-content">
                קייטרינג לשבת חתן כולל ציוד זה הפתרון המושלם למי שרוצה שהכל יהיה מסודר ומוכן. זה כולל לא רק את האוכל הטעים, אלא גם את כל הציוד הדרוש: שולחנות וכסאות, כלי הגשה יפים, מפות לבנות לכבוד השבת, ואפילו אוהל אם השבת חתן בחצר. צריכים תוספות? כלי חימום, תאורה נוספת, או כל דבר אחר שיעשה את השבת מושלמת. אנו פותרים כל בעיה לוגיסטית שתעלה כדי שתוכלו להתמקד בשמחה.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">מה מחיר ארוחה אחת לשבת חתן ולגבי שלושת הסעודות- במה שונה המבצע לכל הארוחות?</summary>
              <div className="faq-content">
                כל ארוחה ומאפייניה על מנת שהשבת הזו תהיה מושלמת למלך שלנו. כך, בדקנו עם מאות מוזמנים לפני שיצרנו את התפריט לשבת השלמה. ארוחה ראשונה (קידוש) עולה 58 ש"ח. לכל שלושת הסעודות? 149 ש"ח בלבד. מדובר בארוחת קידוש עשירה במיוחד ועוד שתי ארוחות משלימות המתוכננות בדיוק לזמני השבת.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Dynamic SEO Cities Directory Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שירותי קייטרינג שבת חתן לפי ערים וישובים</h2>
            <p>אנו מספקים משלוחי אוכל מקורר לשבתות חתן בכל אזור המרכז, השרון, השפלה והדרום</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {Object.entries(citiesByRegion).map(([regionKey, cities]) => {
              const regionInfo = CATERING_REGIONS[regionKey];
              return (
                <div key={regionKey} style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "var(--border-radius-md)",
                  border: "1px solid var(--border-color)"
                }}>
                  <h3 style={{
                    color: "var(--secondary-green)",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    borderBottom: "2px solid var(--primary-gold)",
                    paddingBottom: "5px",
                    display: "inline-block"
                  }}>
                    קייטרינג לשבת חתן {regionInfo?.title || regionKey}
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "10px",
                    marginTop: "10px"
                  }}>
                    {cities.map((city) => {
                      const href = city.isFocus
                        ? `/city/${city.slug}/shabbat-chatan`
                        : `/city/${city.slug}?event=shabbat-chatan`;
                      return (
                        <a
                          key={city.slug}
                          href={href}
                          className="city-link"
                        >
                          שבת חתן ב{city.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
