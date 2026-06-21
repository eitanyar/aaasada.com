import React, { Suspense } from "react";
import MenuBuilder from "../../components/MenuBuilder";
import ProfessionalSupervision from "../../components/ProfessionalSupervision";
import LocalDeliveryCard from "../../components/LocalDeliveryCard";
import VideoTestimonial from "../../components/VideoTestimonial";
import { CITY_DATA, CATERING_REGIONS } from "../../data/catering-content";
import { CheckIcon, PhoneIcon } from "../../components/icons";

export const metadata = {
  title: "קייטרינג לאזכרה כשר למהדרין בד\"ץ הרב מחפוד | טעם מהודר",
  description: "שירותי קייטרינג לאזכרות, שבעה וסעודות אבלים. אוכל בשרי חם, עשיר וכשר למהדרין (בהשגחת בד\"ץ הרב שלמה מחפוד) ישירות אליכם ללא דאגות. תפריט ₪58.",
  alternates: {
    canonical: "https://aaasada.com/azkarot",
  },
};

export default function AzkarotGeneralPage() {
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
        "@id": "https://aaasada.com/azkarot#catering",
        "name": "קייטרינג לאזכרה וסעודות אבלים - טעם מהודר",
        "image": "https://aaasada.com/images/roastbeef_763x447_webp.webp",
        "description": "קייטרינג לאזכרות, שבעה וסעודות אבלים. אוכל מוכן בשרי חם, עשיר וכשר למהדרין בהשגחת בד\"ץ הרב מחפוד ב-58 ש\"ח בלבד למנה.",
        "telephone": "052-609-0930",
        "url": "https://aaasada.com/azkarot",
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
          "name": "תפריט בשרי לאזכרה ב-58 ש\"ח",
          "offers": {
            "@type": "Offer",
            "price": "58.00",
            "priceCurrency": "ILS"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aaasada.com/azkarot#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "למה עדיף לשלם 58 ₪ למנה ולא פחות?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כי ההבדל הוא עצום: ב-39-45 ₪ מקבלים לרוב עוף בסיסי וקצת סלטים (4 סוגים). אצלנו ב-58 ₪ השולחן עמוס ב-7 סוגי סלטים טריים, 3 תוספות ומגוון בשרים איכותיים כולל בקר (צלי בקר ורוסטביף ללא תוספת תשלום). זו השקעה קטנה שעושה הבדל גדול בכבוד לנפטר."
            }
          },
          {
            "@type": "Question",
            "name": "האם ניתן להזמין בהתראה קצרה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כן, אנו ערוכים לספק מענה מהיר ומכבד למקרים של שבעה ולוויות בהתראות קצרות. מומלץ להתקשר מייד ל-052-6090930 לתיאום ואספקה מהירה."
            }
          },
          {
            "@type": "Question",
            "name": "האם האוכל מגיע חם ומוכן להגשה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כן, האוכל המוכן לאזכרה יוצא מהמטבח שלנו בסמוך למועד האירוע ונארז בחמגשיות מיוחדות השומרות על החום והטריות. זהו שירות שחוסך לכם התעסקות בחימום ומאפשר הגשה מיידית ומכובדת של האוכל לאורחים."
            }
          },
          {
            "@type": "Question",
            "name": "כמה מנות מומלץ להזמין לאזכרה? מה המינימום?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "בחישוב מנות לאזכרה, מומלץ לקחת בחשבון כ-10% יותר ממספר האנשים הצפוי למקרה שיגיעו מנחמים נוספים. המינימום להזמנה אצלנו הוא 30 מנות בלבד, שזהו המינימום הנמוך ביותר בשוק לקייטרינג ברמת שפע כזו."
            }
          },
          {
            "@type": "Question",
            "name": "האם ניתן להזמין שירות מלצרים לאזכרה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "בוודאי. מעבר לאספקת אוכל מוכן חם במגשים, אנו מציעים שירותי קייטרינג מלאים הכוללים מלצרים לעריכה, הגשה ופינוי. צוות המלצרים שלנו מנוסה ורגיש לאופי האירוע, וידאג שהכל יתנהל בצורה המכובדת ביותר."
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
      <section className="hero-section azkarot-hero">
        <div className="container">
          <div className="badge-kosher" style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            color: "var(--primary-gold)",
            border: "1.5px solid var(--primary-gold)",
            marginBottom: "var(--spacing-md)",
            fontSize: "1.1rem",
            padding: "8px 20px"
          }}>
            🕯️ קייטרינג לאזכרות וסעודות אבלים • כשר למהדרין בהשגחת בד"ץ הרב שלמה מחפוד
          </div>
          
          <h1 style={{ color: "#ffffff", fontFamily: "var(--font-frank-ruhl)", marginBottom: "var(--spacing-sm)" }}>
            קייטרינג לאזכרה וסעודת אבלים
            <br />
            <span style={{ color: "var(--primary-gold)" }}>אוכל בשרי חם, מכובד ומנחם ללא טרחה</span>
          </h1>
          
          <p style={{
            color: "#cbd5e1",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto var(--spacing-lg) auto",
            lineHeight: "1.7"
          }}>
            בשעות קשות אלו אנו מורידים מכם את דאגות המטבח והאירוח. אנו מכינים ושולחים מגשים חמים של אוכל ביתי בשרי כשר למהדרין להגשה עצמית פשוטה ומכובדת, במחיר הוגן וללא עמלות תיווך.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט לאזכרה</span>
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
        <div className="container">
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
            <LocalDeliveryCard />
          </Suspense>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <VideoTestimonial videoId="gYsjvm6XgSQ" />

      {/* Menu Builder Section */}
      <section className="section" id="menu-section" style={{
        background: "var(--bg-warm-sand)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)"
      }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>תפריט אזכרה ₪58 למנה</span>
            <h2>הרכיבו את התפריט לאזכרה / סעודת מצווה</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו את המנות העיקריות, התוספות והסלטים המבוקשים. שלחו אלינו בוואטסאפ או התקשרו להזמנה מהירה.
            </p>
          </div>
          
          <MenuBuilder />
        </div>
      </section>

      {/* Comparison Section & Detailed Copy (BTF) */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>התאמה מלאה לאירוע אזכרה, שבעה וסעודות אבלים</h2>
            <p style={{ maxWidth: "700px", margin: "0 auto" }}>
              רוצים לכבד את הנפטר עם שולחן ערוך, עשיר ומכובד באמת? בעוד שהצעות זולות בבסיסן בשוק (39-45 ₪) מסתפקות לרוב במנת עוף פשוטה ומעט סלטים, ב"טעם מהודר" אנו מציעים סטנדרט גבוה ומפרט נדיב במיוחד במחיר קבוע ושקוף של 58 ₪ בלבד למנה:
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>הפרמטר</th>
                  <th>הצעות בסיסיות (כ-40 ₪)</th>
                  <th className="highlight-col">טעם מהודר (58 ₪)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>מנה עיקרית</strong></td>
                  <td>בעיקר עוף או שניצל פשוט</td>
                  <td className="highlight-col">כולל צלי בקר, רוסטביף, קבב ועוף!</td>
                </tr>
                <tr>
                  <td><strong>בשר בקר</strong></td>
                  <td>דורש תוספת תשלום משמעותית</td>
                  <td className="highlight-col"><strong>כלול במחיר!</strong> צלי בקר ורוסטביף כחלק מהתפריט לבחירה</td>
                </tr>
                <tr>
                  <td><strong>מגוון סלטים</strong></td>
                  <td>4 סלטים בסיסיים בלבד</td>
                  <td className="highlight-col"><strong>7 סוגי סלטים</strong> טריים ועשירים לבחירה מהמגוון</td>
                </tr>
                <tr>
                  <td><strong>תוספות חמות</strong></td>
                  <td>2 תוספות</td>
                  <td className="highlight-col"><strong>3 תוספות חמות</strong> לבחירה בנדיבות רבה</td>
                </tr>
                <tr>
                  <td><strong>מגוון לבחירה</strong></td>
                  <td>2 מנות לבחירה מראש</td>
                  <td className="highlight-col"><strong>3 מנות עיקריות לבחירה חופשית</strong> (שליש מכל סוג)</td>
                </tr>
                <tr>
                  <td><strong>רמת כשרות</strong></td>
                  <td>משתנה / מקומית</td>
                  <td className="highlight-col"><strong>בד"ץ הרב שלמה מחפוד (יורה דעה)</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p style={{ fontWeight: "700", color: "var(--secondary-green)" }}>
              לקוחות יקרים לתשומת לבכם! בטעם מהודר, המנה הגדולה שתבחרו היא המנה שתקבלו. בלי תוספות בתשלום על סלטים, בלי אותיות קטנות. ההצעה שלנו היא הנדיבה ביותר ובמחיר הכי טוב למפרט. התחייבות לשפע אמיתי לעילוי נשמת יקירכם.
            </p>
          </div>
        </div>
      </section>

      {/* Comfort and Ease explanation (Long SEO copy) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-lg)" }}>
            <div>
              <h2>מענה מהיר, רגיש ומכובד לסעודת אבלים או אזכרה</h2>
              <p>
                ארגון סעודה במהלך ימי השבעה או לרגל אזכרה שנתית מלווה בקושי לוגיסטי ובצורך להכין אוכל בשרי חם ומכובד שמתאים למגוון רחב של אורחים ומנחמים. בשעות קשות אלו, המטרה העליונה שלנו ב"טעם מהודר" אנו להעניק לכם שקט נפשי מלא. אנו מספקים מעטפת מלאה של שירותי קייטרינג ופתרונות הסעדה רגישים, ומסייעים לכם לכבד את זכר יקירכם בצורה הטובה ביותר ללא התעסקות קשה במטבח.
              </p>
              <p>
                האוכל המוכן מבושל טרי יום-יום ומגיע ארוז בתוך חמגשיות אלומיניום קשיחות, נקי, מסודר ומוכן להגשה מיידית על גבי שולחנות האירוח בבית האבלים, בבית הכנסת או בבית המדרש. המגשים מועברים בתוך מארזים מבודדי חום מיוחדים ומגיעים חמים מאוד, דבר החוסך לכם התעסקות מסובכת בחימום האוכל ומאפשר לכם להתרכז בעיקר.
              </p>
              <p>
                כל הבשרים והמנות מוכנים תחת פיקוח צמוד ותעודת כשרות בתוקף של בד"ץ יורה דעה בנשיאות הגאון הרב שלמה מחפוד שליט"א (בשר גלאט חלק בית יוסף, ירקות עלים ללא תולעים והפרשת תרומות ומעשרות כדין). רמת כשרות מהודרת זו מבטיחה שכל המשפחה והמנחמים יוכלו לאכול ולשבוע בלב שקט ובביטחון הלכתי מלא.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <img
                src="/images/roastbeef_763x447_webp.webp"
                alt="קייטרינג לאזכרה וסעודת אבלים"
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
                <h3 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", margin: "0 0 15px 0" }}>השירות שלנו לסעודות אבלים:</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מענה טלפוני מהיר ורגיש:</strong> אנו מבינים את הדחיפות ומסייעים בבחירה מהירה.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>משלוח חם ישירות אליכם:</strong> האוכל מועבר במארזים מבודדי חום מיוחדים ומגיע חם מאוד.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>תפריט עשיר במחיר 58 ש"ח:</strong> בשרים איכותיים, תוספות חמות וסלטים טריים בנדיבות רבה.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>ללא טרחה:</strong> אין צורך בציוד חימום מורכב או בצוות מלצרים. מניחים ומגישים.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <ProfessionalSupervision />
        </div>
      </section>

      {/* Comfort & Service Details (BTF) */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "var(--spacing-lg)" }}>
            <div>
              <h3 style={{ fontWeight: "700" }}>אוכל מוכן לאזכרות ושבעה – מעטפת מלאה</h3>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                אנו מבינים את המורכבות והרגישות בארגון סעודת מצווה בעת ימי האבל. לכן, אנו ערוכים לספק מענה מהיר במיוחד ללוויות ושבעה בהתראות קצרות. האוכל מגיע חם ומוכן להגשה, ארוז באסתטיות ובטריות.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                בנוסף, אם אתם זקוקם להפקה מלאה הכוללת מלצרים מקצועיים, עריכת שולחנות ופינוי מלא, אנו מציעים פתרון כולל בתיאום מראש (הפקות אירועים שלמות ושירותי מלצרים מלאים החל מ-100 איש ומעלה). אנו נדאג לכל הצד הלוגיסטי כדי להוריד מכם את הדאגות ולאפשר לכם להתייחד עם זכר יקירכם בכבוד הראוי.
              </p>
            </div>

            <div style={{
              background: "var(--bg-warm-sand)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-lg)",
              padding: "var(--spacing-lg)"
            }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "700" }}>התחייבות השירות של טעם מהודר:</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0 }}>
                <li>✔️ <strong>מנות טריות בלבד:</strong> בישול בסמוך למשלוח מחומרי גלם טריים ומשובחים.</li>
                <li>✔️ <strong>כשרות מהודרת:</strong> כשרות בד"ץ הרב שלמה מחפוד המקובלת על כל העדות.</li>
                <li>✔️ <strong>שפע ורווחה:</strong> כמויות נדיבות המבטיחות שכל האורחים יאכלו וישבעו.</li>
                <li>✔️ <strong>הגעה מדויקת:</strong> אספקה מהירה ומתוזמנת לאתר האירוע או לבית האבל.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (BTF) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שאלות ותשובות נפוצות - קייטרינג לאזכרה</h2>
            <p>שאלות נפוצות בנושא כשרות, כמויות והזמנה מהירה בזמני שבעה</p>
          </div>

          <div className="faq-accordion">
            <details className="faq-item">
              <summary className="faq-summary">למה עדיף לשלם 58 ₪ למנה ולא פחות?</summary>
              <div className="faq-content">
                כי ההבדל בשולחן הוא עצום: ב-39-45 ₪ מקבלים לרוב מנת עוף בסיסית ורק 4 סלטים. אצלנו ב-58 ₪ השולחן עמוס ב-7 סוגי סלטים טריים, 3 תוספות ומגוון בשרים איכותיים כולל בקר (צלי בקר ורוסטביף ללא תוספת תשלום). זו השקעה קטנה שעושה הבדל גדול בכבוד לנפטר ובשובע של המנחמים.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם ניתן להזמין בהתראה קצרה?</summary>
              <div className="faq-content">
                כן, אנו ערוכים במיוחד לספק מענה מהיר למקרים של שבעה ולוויות בהתראות קצרות. מומלץ להתקשר מיד לטלפון 052-6090930 לתיאום ואספקה מהירה של מגשים חמים.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם האוכל מגיע חם ומוכן להגשה?</summary>
              <div className="faq-content">
                כן. אוכל מוכן לאזכרה יוצא מהמטבח שלנו בסמוך למועד האירוע ונארז בחמגשיות מיוחדות השומרות על החום והטריות. זהו שירות שחוסך לכם התעסקות בחימום ומאפשר הגשה מיידית ומכובדת של האוכל לאורחים ברגע ההגעה.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">כמה מנות מומלץ להזמין לאזכרה? מה המינימום?</summary>
              <div className="faq-content">
                בחישוב מנות קייטרינג לאזכרה, מומלץ תמיד לקחת בחשבון כ-10% יותר ממספר האנשים הצפוי למקרה שיגיעו מנחמים נוספים. מינימום ההזמנה אצלנו הוא 30 מנות בלבד, שזהו מינימום נמוך במיוחד המאפשר גם למשפחות קטנות ליהנות מקייטרינג איכותי ושופע.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם ניתן להזמין שירות מלצרים לאזכרה?</summary>
              <div className="faq-content">
                בוודאי. מעבר לאספקת אוכל מוכן חם במגשים, אנו מציעים שירותי קייטרינג מלאים הכוללים מלצרים לעריכה, הגשה ופינוי. שימו לב שהפקות אירועים שלמות ושירותי מלצרים מלאים מתאימים לאירועים של 100 איש ומעלה.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Dynamic SEO Cities Directory Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>קייטרינג לאזכרות ושבעה לפי ישובים וערים</h2>
            <p>משלוחי אוכל חם ומנחם לסעודות אבלים ואזכרות בכל רחבי המרכז, השרון, השפלה והדרום</p>
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
                    קייטרינג לאזכרה {regionInfo?.title || regionKey}
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "10px",
                    marginTop: "10px"
                  }}>
                    {cities.map((city) => {
                      const href = city.isFocus
                        ? `/city/${city.slug}/azkarot`
                        : `/city/${city.slug}?event=azkarot`;
                      return (
                        <a
                          key={city.slug}
                          href={href}
                          className="city-link"
                        >
                          אזכרה ב{city.name}
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
