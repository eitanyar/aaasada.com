import React from "react";
import MenuBuilder from "../../components/MenuBuilder";
import ProfessionalSupervision from "../../components/ProfessionalSupervision";
import { CITY_DATA, CATERING_REGIONS } from "../../data/catering-content";
import { PhoneIcon, StarIcon, CheckIcon } from "../../components/icons";
import VideoTestimonial from "../../components/VideoTestimonial";

export const metadata = {
  title: "קייטרינג לברית כשר למהדרין בד\"ץ מחפוד | טעם מהודר",
  description: "חוגגים ברית מילה או בריתה? אוכל מוכן בשרי חם, עשיר וכשר למהדרין (בהשגחת בד\"ץ הרב שלמה מחפוד) במחיר ללא תחרות של 58 ₪ למנה. מינימום 30 איש.",
  alternates: {
    canonical: "https://aaasada.com/brit",
  },
};

export default function BritGeneralPage() {
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
        "@id": "https://aaasada.com/brit#catering",
        "name": "קייטרינג לברית מילה - טעם מהודר",
        "image": "https://aaasada.com/images/brit_1-scaled.webp",
        "description": "קייטרינג לברית מילה. אוכל מוכן בשרי חם, עשיר וכשר למהדרין בהשגחת בד\"ץ הרב מחפוד ב-58 ש\"ח בלבד למנה.",
        "telephone": "052-609-0930",
        "url": "https://aaasada.com/brit",
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
          "name": "תפריט בשרי לברית ב-58 ש\"ח",
          "offers": {
            "@type": "Offer",
            "price": "58.00",
            "priceCurrency": "ILS"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aaasada.com/brit#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "איך מזמינים קייטרינג כשר לברית מילה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "פשוט מאוד - בוחרים מנות עיקריות, סלטים ותוספות בתפריט האינטראקטיבי שלנו מעל, מציינים את כמות המוזמנים (מינימום 30 מנות) ושולחים אלינו בטופס או בוואטסאפ. אנו נחזור אליכם מייד לאישור וסגירה."
            }
          },
          {
            "@type": "Question",
            "name": "האם יש לכם קייטרינג לברית מילה כולל הכול?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כן, בנוסף לאספקת אוכל מוכן חם במגשים לשירות עצמי, אנו מציעים מעטפת הפקה מלאה הכוללת מלצרים לעריכה, הגשה ופינוי, וכן אספקת ציוד מלא כגון שולחנות, כסאות, וכלי הגשה (הפקות מלאות החל מ-100 איש ומעלה)."
            }
          },
          {
            "@type": "Question",
            "name": "מה היא רמת הכשרות של האוכל לברית?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כל האוכל מבושל במטבח כשר למהדרין בפיקוח צמוד ותחת השגחת בד\"ץ יורה דעה של הרב שלמה מחפוד שליט\"א. כל הבשרים הם חלק גלאט מן המהדרין."
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
      <section className="hero-section">
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
            <StarIcon size={16} style={{ color: "var(--primary-gold)" }} />
            <span>כשרות למהדרין - בד"ץ יורה דעה בהשגחת הרב שלמה מחפוד שליט"א</span>
          </div>
          
          <h1 style={{ color: "#ffffff", fontFamily: "var(--font-frank-ruhl)", marginBottom: "var(--spacing-sm)" }}>
            קייטרינג לברית מילה
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
            חוגגים ברית מילה בצהריים בבית או באולם בית הכנסת? אנו מספקים מגשי אוכל בשרי מבושל חם להפקה עצמית קלה וחסכונית שחוסכת לכם אלפי שקלים.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט לברית</span>
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

      {/* Main content explaining Brit features */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-lg)" }}>
            <div>
              <h2>קייטרינג לברית מילה בטעם ביתי עשיר ובנוחות מקסימלית</h2>
              <p>
                ברית מילה היא אירוע קצר ומרגש, המתקיים בדרך כלל בשעות הבוקר או הצהריים בבית כנסת או בבית. ההתארגנות לאירוע צריכה להיות מהירה, יעילה וכשרה למהדרין.
              </p>
              <p>
                קייטרינג "טעם מהודר" מתמחה באספקת מגשי אוכל בשרי מבושל חם לאירוח עצמי והגשה פשוטה לבריתות. האוכל מגיע במגשים ארוזים ומבודדי חום, חוסך לכם את דאגות המטבח והעסקת שרתים ומלצרים, ומאפשר לכם להתרכז באירוע ובאורחים שלכם.
              </p>
              <p>
                <strong>כשרות בד"ץ יורה דעה של הרב שלמה מחפוד</strong> – רמת הכשרות המהודרת ביותר המאפשרת לארח בראש שקט אורחים מכל הקהילות והזרמים.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <img
                src="/images/brit_at_home-scaled.webp"
                alt="קייטרינג לברית מילה"
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
                background: "var(--bg-warm-sand)",
                border: "1.5px solid var(--border-color)",
                borderRadius: "var(--border-radius-lg)",
                padding: "var(--spacing-lg)"
              }}>
                <h3 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", margin: "0 0 15px 0" }}>הפתרון לברית מילה:</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מבחר בשרים ב-₪58 — כולל בקר:</strong> צלי בקר, רוסטביף וקבב כלולים במחיר הבסיסי. מתחרים בזול מגישים בד"כ עוף בלבד.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>7 סלטים + 3 תוספות חמות:</strong> מתחרים בזול מסתפקים בד"כ 4 סלטים ו-2 תוספות בלבד — אצלנו שניים יותר מכל, במחיר קבוע ושקוף.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>אספקה מהירה וחמה:</strong> המגשים מגיעים חמים ישירות לאירוע שלכם במועד שנקבע.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>ללא טרחה:</strong> פשוט לפתוח ולהגיש, ללא צורך בחימום מורכב או בכלי הגשה יקרים.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <ProfessionalSupervision />
        </div>
      </section>

      {/* Menu Builder Section */}
      <section className="section" id="menu-section" style={{
        background: "#ffffff",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>תפריט ₪58 למנה</span>
            <h2>הרכיבו את התפריט לברית מילה שלכם</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> עיקריות, <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> תוספות ו-<strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>7</strong> סלטים. שלחו אלינו בוואטסאפ לתיאום מהיר.
            </p>
          </div>
          
          <MenuBuilder />
        </div>
      </section>

      {/* Detailed Services & Copy (BTF) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-lg)" }}>
            <div>
              <h2>קייטרינג כשר לברית מילה: טעם מהודר</h2>
              <p>
                ברוכים הבאים לטעם מהודר, השותף האמיתי שלכם לקייטרינג כשר למהדרין לברית מילה. אנו מבינים את החשיבות של היום המיוחד והמרגש הזה ומחויבים להפוך אותו לאירוע מוצלח, שופע ומכובד שכל האורחים שלכם יזכרו לטובה!
              </p>
              <p>
                <strong>ארוחות מוכנות לברית מילה במחיר שנכון לכם:</strong> תכנון ברית לא חייב להיות יקר ומלחיץ. עם הארוחות המוכנות והחמות שלנו להגשה עצמית, תיהנו מתפריט עשיר, טעים ומפנק החל מ-58 ₪ בלבד למנה מלאה (עבור 3 עיקריות, 3 תוספות ו-7 סלטים). האורחים שלכם ייהנו מסעודה בשרית כשרה למהדרין ומשובחת ביותר, המגיעה ארוזה בבטחה במארזים מבודדי חום לשמירה על הטריות.
              </p>
              <p>
                <strong>איכות ללא פשרות וכשרות מהודרת:</strong> אנו מתחייבים לעמוד בסטנדרטים הגבוהים ביותר של כשרות בד"ץ יורה דעה של הרב שלמה מחפוד שליט"א. אנו משתמשים אך ורק בחומרי גלם טריים ואיכותיים ביותר ליצירת מנות מרהיבות לעיניים וטעימות לחך כאחד.
              </p>
            </div>

            <div style={{
              background: "#ffffff",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-lg)",
              padding: "var(--spacing-lg)",
              boxShadow: "var(--shadow-medium)"
            }}>
              <span className="badge-kosher" style={{ backgroundColor: "var(--secondary-green-light)", color: "var(--secondary-green)" }}>קייטרינג כולל הכל מ-100 איש ומעלה</span>
              <h3 style={{ marginTop: "10px", fontWeight: "700" }}>שירות הפקת אירוע מלא לברית</h3>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                חוגגים אירוע גדול ורוצים להגיע כאורחים? אנו מציעים שירות הפקה מלאה לברית מילה הכולל מלצרים מקצועיים, עריכה ועיצוב שולחנות בכלים נאים, הגשת האוכל החם ופינוי וניקיון מלא בסיום האירוע.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                אנו ניקח על עצמנו את כל הטרחה והעבודה הקשה, כדי להשאיר לכם אך ורק את השמחה וההנאה המלאה עם התינוק החדש והמשפחה. שירות ההפקה המלא מתאים לאירועים של 100 איש ומעלה.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "15px" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--accent-terracotta)" }}>₪130</span>
                <span style={{ fontSize: "1.1rem", color: "var(--text-muted)", fontWeight: "500" }}>לסועד (הכל כלול)</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px", margin: "40px auto 0 auto" }}>
            <details className="faq-details" style={{ backgroundColor: "#ffffff", padding: "15px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <summary style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--secondary-green)", cursor: "pointer", listStylePosition: "inside" }}>
                למה משתלם להזמין קייטרינג בשירות עצמי (DIY) לברית מילה?
              </summary>
              <div style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                <p>
                  לא כל אחד עושה מסיבה גדולה, אנשים שונים עם העדפות שונות. אם מדובר באירוע משפחתי לרבות חברים טובים, לאירוע של עד 100 איש אתם לגמרי יכולים לוותר, מניסיוננו, על האופציה היקרה יותר - הפקה מלאה עם הגשת מלצרים.
                </p>
                <p>
                  עם מעט עזרה מחברים - אפשר לחגוג ברית עם מאכלים טובים והרבה הנאה. כמובן, תוכלו לעשות זאת גם במסעדה, אך לפעמים, אין כמו לחגוג אירוע אינטימי באווירת הבית, עם אוכל של בית רק מהודר ומשודרג. זהו עניין של טעם ולפעמים, מסורת - מתאים במיוחד לאנשים שדווקא אוהבים לארח ולא רק להתארח.
                </p>
              </div>
            </details>

            <details className="faq-details" style={{ backgroundColor: "#ffffff", padding: "15px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <summary style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--secondary-green)", cursor: "pointer", listStylePosition: "inside" }}>
                איך שומרים על טריות וחום המנות במהלך אירוע הברית?
              </summary>
              <div style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                <p>
                  המגשים שלנו מגיעים ארוזים יפה, חמים וטריים. כל מה שנשאר זה להגיש בצלחות. אנו נקפיד על משלוח והגעה בסמוך לאירוע, אך דעו כי המזון נשמר חם מהתנור לפחות שלוש שעות מרגעי ההכנה. אתם מסודרים.
                </p>
                <p>
                  ספציפית אם הברית נערכת דווקא בשישי בצהריים (פחות אופייני אך קורה), המזון מגיע מקורר בבטחה כדי להבטיח את טריותו המלאה, ויש לקחת בחשבון זמן קצר לחימום המנות - המגשים והחמגשיות נכנסים בקלות לתנור סטנדרטי או מונחים על פלטת שבת לקראת הסעודה.
                </p>
              </div>
            </details>

            <details className="faq-details" style={{ backgroundColor: "#ffffff", padding: "15px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <summary style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--secondary-green)", cursor: "pointer", listStylePosition: "inside" }}>
                פתרונות קייטרינג והפקה מלאה לבריתות של 100 סועדים ומעלה
              </summary>
              <div style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                <p>
                  קייטרינג "טעם מהודר" יספק לכם את כל הפתרונות. באמת, אם מדובר ב-100 סועדים ומעלה - אין ספק שהטרחה רבה. גם אתם צריכים ליהנות בברית הזו!
                </p>
                <p>
                  יש לנו מבצע מיוחד על קייטרינג מלצרים והפקה מלאה לברית בדיוק בשביל זה. הצוות המקצועי שלנו ידאג לסידור, הגשה, מלצרות ופינוי מלא, כך שתוכלו להתפנות לאורחים שלכם ולחגוג בראש שקט.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (BTF) */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שאלות ותשובות נפוצות - קייטרינג לברית</h2>
            <p>שאלות נפוצות בנושא תפריטים, הזמנות וכשרות לברית מילה</p>
          </div>

          <div className="faq-accordion">
            <details className="faq-item">
              <summary className="faq-summary">איך מזמינים קייטרינג כשר לברית מילה?</summary>
              <div className="faq-content">
                בוחרים את המנות האהובות עליכם מהתפריט האינטראקטיבי מעל (סלטים, תוספות ומנות עיקריות), מזינים את כמות האורחים ושולחים אלינו ישירות בוואטסאפ או בטופס. אנו נחזור אליכם מייד לאישור ההזמנה וסגירת פרטי המשלוח. לחלופין, ניתן להתקשר אלינו לטלפון 052-6090930 לשיחת ייעוץ חינם מכל הלב.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם יש לכם קייטרינג לברית מילה כולל הכול?</summary>
              <div className="faq-content">
                כן, אנו מציעים שירות קייטרינג לברית מילה כולל הכל - אוכל מוכן משובח, שירות מלצרים מקצועי, עריכה, הגשה ופינוי מלא. שירות זה מיועד לאירועים של 100 איש ומעלה ומאפשר לכם להגיע לאירוע בראש שקט לחלוטין.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">מה היא רמת הכשרות של האוכל לברית?</summary>
              <div className="faq-content">
                כל האוכל מבושל במטבח כשר למהדרין בפיקוח צמוד ותחת השגחת בד"ץ יורה דעה של הרב שלמה מחפוד שליט"א. כל הבשרים והעופות הם משחיטה מהודרת וחלק גלאט מן המהדרין, כדי שכל האורחים שלכם יוכלו לאכול בביטחון מלא.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם ניתן להזמין אוכל מוכן לברית בבית?</summary>
              <div className="faq-content">
                בוודאי. אנו מספקים משלוחים של אוכל מוכן חם ארוז במגשים מבודדי חום לכל מקום שתבחרו - לבית פרטי, לחצר, למועדון דיירים או לאולם בית כנסת. האוכל מגיע חם ומוכן לפתיחה והגשה מיידית ללא צורך בחימום נוסף.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Dynamic SEO Cities Directory Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שירותי קייטרינג לברית לפי ערים וישובים</h2>
            <p>משלוחי אוכל חם לאירועי ברית מילה בכל אזור המרכז, השרון, השפלה והדרום</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {Object.entries(citiesByRegion).map(([regionKey, cities]) => {
              const regionInfo = CATERING_REGIONS[regionKey];
              return (
                <div key={regionKey} style={{
                  backgroundColor: "var(--bg-warm-sand)",
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
                    קייטרינג לברית {regionInfo?.title || regionKey}
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "10px",
                    marginTop: "10px"
                  }}>
                    {cities.map((city) => {
                      const href = city.isFocus
                        ? `/city/${city.slug}/brit`
                        : `/city/${city.slug}?event=brit`;
                      return (
                        <a
                          key={city.slug}
                          href={href}
                          className="city-link"
                        >
                          ברית ב{city.name}
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
