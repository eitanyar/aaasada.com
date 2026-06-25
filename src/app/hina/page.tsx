import React from "react";
import MenuBuilder from "../../components/MenuBuilder";
import ProfessionalSupervision from "../../components/ProfessionalSupervision";
import { CITY_DATA, CATERING_REGIONS } from "../../data/catering-content";
import { PhoneIcon, StarIcon, CheckIcon } from "../../components/icons";
import VideoTestimonial from "../../components/VideoTestimonial";

export const metadata = {
  title: "קייטרינג לחינה כשר למהדרין בד\"ץ מחפוד | טעם מהודר",
  description: "חוגגים חינה מסורתית? אוכל מוכן בשרי חם, עשיר וכשר למהדרין (בהשגחת בד\"ץ הרב שלמה מחפוד) במחיר ללא תחרות של 58 ₪ למנה. מינימום 30 איש.",
  alternates: {
    canonical: "https://aaasada.com/hina",
  },
};

export default function HinaGeneralPage() {
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
        "@id": "https://aaasada.com/hina#catering",
        "name": "קייטרינג לחינה - טעם מהודר",
        "image": "https://aaasada.com/images/home-hina-scaled.webp",
        "description": "קייטרינג לחינה מסורתית. אוכל מוכן בשרי חם, עשיר וכשר למהדרין בהשגחת בד\"ץ הרב מחפוד ב-58 ש\"ח בלבד למנה.",
        "telephone": "052-609-0930",
        "url": "https://aaasada.com/hina",
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
          "name": "תפריט בשרי לחינה ב-58 ש\"ח",
          "offers": {
            "@type": "Offer",
            "price": "58.00",
            "priceCurrency": "ILS"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aaasada.com/hina#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "איך נראה תפריט אוכל לחינה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "תפריט אוכל לחינה שלנו בנוי בדיוק כמו שצריך לחגיגה מסורתית ואותנטית - מנות בשריות עשירות עם טעמים מזרחיים אמיתיים, מגוון סלטים מרוקאיים וטריים, ותוספות מסורתיות. הכל מוכן עם כשרות בד\"ץ מחפוד וטעמים ביתיים שכולם אוהבים."
            }
          },
          {
            "@type": "Question",
            "name": "האם יש לכם קייטרינג לחינה מרוקאית?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "בהחלט! תפריט לחינה מרוקאית שלנו כולל את כל המנות המסורתיות שמתאימות לחגיגה מרוקאית אמיתית - קובה עירקית, סיגרים מרוקאים, סלטי חצילים מגוונים, וכל הטעמים האותנטיים שהמשפחה שלכם מכירה ואוהבת."
            }
          },
          {
            "@type": "Question",
            "name": "האם יש לכם גם קייטרינג לחינה תימנית?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כמובן! קייטרינג לחינה תימנית שלנו כולל את המנות המסורתיות התימניות וכל הטעמים המיוחדים של המטבח התימני, המתאימים בדיוק לחגיגה תימנית אותנטית בטעמים ביתיים."
            }
          },
          {
            "@type": "Question",
            "name": "מה המחיר הכי זול לקייטרינג לחינה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "קייטרינג לחינה במחיר הכי זול שלנו מתחיל מ-39 ש\"ח למנה לאוכל מוכן במגשים (עבור פריטים בסיסיים). התפריט הבשרי המלא והעשיר ביותר שלנו הכולל 3 עיקריות, 3 תוספות ו-7 סלטים הוא 58 ש\"ח למנה בלבד, ללא אותיות קטנות."
            }
          },
          {
            "@type": "Question",
            "name": "מה כולל קייטרינג לחינה ביתית?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "קייטרינג לחינה ביתית כולל אוכל מוכן חם במגשים להגשה עצמית פשוטה, או לחלופין הפקה מלאה עם מלצרים, שירותי הגשה, שולחנות וכסאות, וציוד חימום מלא לפי דרישה."
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
            <span>כשר למהדרין - בד"ץ יורה דעה בהשגחת הגאון הרב שלמה מחפוד שליט"א</span>
          </div>
          
          <h1 style={{ color: "#ffffff", fontFamily: "var(--font-frank-ruhl)", marginBottom: "var(--spacing-sm)" }}>
            קייטרינג לחינה מסורתית ושופעת
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
            חוגגים חינה בבית, בחצר או באולם בית הכנסת? אנו מספקים מגשי אוכל בשרי חם, טרי ועשיר להפקה עצמית קלה וחסכונית שחוסכת לכם אלפי שקלים ומכבדת כל אורח.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט לחינה</span>
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

      {/* Main content explaining Hina features */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-lg)" }}>
            <div>
              <h2>קייטרינג לחינה בטעם של פעם ובכשרות מהודרת</h2>
              <p>
                חוגגים חינה? העניקו לאורחים שלכם אירוח למהדרין, בשפע מטעמי עדות אהובים ואותנטיים, מגוון גדול של טעמים ביתיים חמים וכשרות מהודרת ללא פשרות. אירוע החינה הוא זמן מיוחד של שמחה משפחתית, צבעוניות עשירה ומסורת עמוקה שעוברת מדור לדור. ב"טעם מהודר" אנו מתמחים בהכנת תפריט עשיר במיוחד לאירועי חינה, המשלב בין מיטב מאכלי עדות המזרח המסורתיים והאהובים לבין שיטות בישול מתקדמות השומרות על עסיסיות הבשרים.
              </p>
              <p>
                השילוב הייחודי הזה יוצר סעודת שמחה מפוארת ומכובדת, שתגרום לאורחים שלכם לשבח אתכם על הבחירה המצוינת ולדבר על האוכל הטעים הרבה אחרי שהחגיגה תסתיים. אנו מגישים אוכל בשירות עצמי חכם המיועד להפקה עצמית פשוטה ונוחה, ומספקים את המנות חמות מאוד במארזי תרמוקן מבודדי חום השומרים על הטריות עד להגשה.
              </p>
              <p>
                כל המגשים נוחים לפתיחה קלה ולפריסה מיידית על שולחנות האירוח בבית, בחצר או במועדון הדיירים, וחוסכים לכם את הצורך בצוות הגשה יקר ובמשגיחים צמודים באתר.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <img
                src="/images/home-hina-scaled.webp"
                alt="קייטרינג לחינה"
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
                <h3 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", margin: "0 0 15px 0" }}>הפתרון המושלם לחינה:</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מבחר בשרים ב-58 ש"ח — כולל בקר:</strong> צלי בקר, רוסטביף וקבב כלולים במחיר הבסיסי — מתחרים בזול מגישים בד"כ עוף.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>7 סלטים + 3 תוספות חמות:</strong> מתחרים בזול מסתפקים בד"כ 4 סלטים ו-2 תוספות בלבד — אצלנו שניים יותר מכל, במחיר קבוע ושקוף.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>שפע של סלטים:</strong> חומוס אסלי, טחינה ירוקה, מטבוחה מרוקאית ועוד 7 סוגים.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>חיסכון משמעותי:</strong> תפריט מלא ב-₪58 לסועד בלבד, ללא עלויות צוות שרתים ומלצרים.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מתאים לכל מקום:</strong> קל ופשוט להגשה בבית, בחצר או במועדון הדיירים.</span></li>
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
            <h2>הרכיבו את התפריט לחינה שלכם</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> עיקריות, <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> תוספות ו-<strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>7</strong> סלטים. שלחו אלינו בוואטסאפ ונתחיל לתאם את האירוע שלכם.
            </p>
          </div>
          
          <MenuBuilder />
        </div>
      </section>

      {/* Waiters & Full Production Option (BTF) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-lg)" }}>
            <div style={{
              background: "#ffffff",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-lg)",
              padding: "var(--spacing-lg)",
              boxShadow: "var(--shadow-medium)"
            }}>
              <span className="badge-kosher" style={{ backgroundColor: "var(--secondary-green-light)", color: "var(--secondary-green)" }}>שירות מלא מ-100 סועדים ומעלה</span>
              <h3 style={{ marginTop: "10px", fontWeight: "700" }}>קייטרינג לחינה עם הגשת מלצרים והפקה מלאה</h3>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                מחפשים הפקה מלאה של האירוע וראש שקט לחלוטין? אנו מציעים שירות קייטרינג בשרי מלא לחינה הכולל מלצרים מקצועיים לעריכה, הגשה ופינוי מלא.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                הצוות שלנו יגיע לאתר האירוע שלכם, יערוך שולחנות הגשה מהודרים עם כלים נאים, יגיש את המאכלים החמים בצורה מעוררת תיאבון, וידאג לקיפול ולפינוי מלא בסוף הערב. כך תוכלו להתמקד באורחים שלכם ולחגוג בלב שקט ובשמחה אמיתית.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "15px" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--accent-terracotta)" }}>₪130</span>
                <span style={{ fontSize: "1.1rem", color: "var(--text-muted)", fontWeight: "500" }}>לסועד (הכל כלול)</span>
              </div>
            </div>

            <div>
              <h2>חווית שמחה בראש שקט</h2>
              <p>
                שירות ההפקה המלאה שלנו מתאים לאירועי חינה גדולים יותר או לאירועים שבהם אין לכם אפשרות או רצון להתעסק בלוגיסטיקה ובארגון.
              </p>
              <p>
                האוכל מבושל במקום או מגיע חם ומנוהל על ידי מנהל אירוע ייעודי מטעם "טעם מהודר". הכשרות המהודרת נשמרת בקפדנות לאורך כל שלבי ההגשה.
              </p>
              <a href="tel:052-609-0930" className="btn btn-secondary" style={{ marginTop: "15px" }}>
                <span>לפרטים ותיאום הפקה: 052-609-0930</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section (BTF) */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שאלות ותשובות נפוצות - קייטרינג לחינה</h2>
            <p>כל מה שחשוב לדעת על הזמנת אוכל מוכן וכשרות לחינה שלכם</p>
          </div>

          <div className="faq-accordion">
            <details className="faq-item">
              <summary className="faq-summary">איך נראה תפריט אוכל לחינה?</summary>
              <div className="faq-content">
                תפריט אוכל לחינה שלנו בנוי בדיוק כמו שצריך לחגיגה מסורתית ואותנטית - מנות בשריות עשירות עם טעמים מזרחיים אמיתיים, מגוון סלטים מרוקאיים וטריים, ותוספות מסורתיות. הכל מוכן עם כשרות בד"ץ מחפוד וטעמים ביתיים שכולם אוהבים. חינה זה אירוע של מסורת ושמחה, והתפריט צריך לכבד את המסורת ולפנק את כל האורחים.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם יש לכם קייטרינג לחינה מרוקאית?</summary>
              <div className="faq-content">
                בהחלט! תפריט לחינה מרוקאית שלנו כולל את כל המנות המסורתיות שמתאימות לחגיגה מרוקאית אמיתית - קובה עירקית, סיגרים מרוקאים, סלטי חצילים מגוונים, וכל הטעמים האותנטיים שהמשפחה שלכם מכירה ואוהבת. קייטרינג לחינה מרוקאית זו המומחיות שלנו, ואנחנו יודעים לעשות את זה בדיוק כמו שסבתא הייתה רוצה.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">מה זה בופה לחינה ואיך זה עובד?</summary>
              <div className="faq-content">
                בופה לחינה זה דרך מושלמת להגיש את האוכל בצורה חגיגית ונוחה לכולם. במקום הגשה לשולחנות, האוכל מסודר על שולחן מרכזי יפה ומעוצב, וכל אחד בוחר בעצמו מה שהוא רוצה. זה מושלם לחינה כי זה יוצר אווירה חגיגית ונותן לכולם להסתובב, להכיר, ולהנות מהחגיגה. אנחנו יכולים להכין בופה מרהיב עם כל המנות הטובות שלנו.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">האם יש לכם גם קייטרינג לחינה תימנית?</summary>
              <div className="faq-content">
                כמובן! קייטרינג לחינה תימנית שלנו כולל את המנות המסורתיות התימניות וכל הטעמים המיוחדים של המטבח התימני. אנחנו מבינים שלכל עדה יש את המנהגים והטעמים המיוחדים שלה, ואנחנו יודעים להכין חינה תימנית אותנטית שתכבד את המסורת ותפנק את כל האורחים בטעמים שהם מכירים ואוהבים מהבית.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">מה כולל קייטרינג לחינה ביתית?</summary>
              <div className="faq-content">
                קייטרינג לחינה ביתית זה הבחירה הכי אינטימית ונוחה. החינה שלכם בבית, במקום הכי חם ומוכר. אנחנו מגיעים ומתאימים את עצמנו לבית שלכם, בין אם זה בסלון, בחצר, או בגינה. אם זה אוכל מוכן, אתם מקבלים הכל מוכן להגשה במגשים. אם בחרתם בהפקה מלאה, המלצרים מגיעים עם כל הציוד ודואגים להכל. וכמובן שולחנות וכסאות, אוהל אם צריך, ואפילו כלי חימום.
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">מה המחיר הכי זול לקייטרינג לחינה?</summary>
              <div className="faq-content">
                קייטרינג לחינה במחיר הכי זול שלנו מתחיל מ-39 ש"ח למנה לאוכל מוכן במגשים (עבור מנות בסיסיות מאוד). התפריט הבשרי המלא והעשיר ביותר שלנו הכולל 3 עיקריות, 3 תוספות ו-7 סלטים בבחירה אישית מוגש במחיר קבוע של 58 ש"ח למנה בלבד, עם התחייבות לשקיפות מלאה ושפע יוצא דופן.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Dynamic SEO Cities Directory Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שירותי קייטרינג לחינה לפי ערים וישובים</h2>
            <p>משלוחי אוכל חם לחינות בכל אזורי השירות שלנו</p>
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
                    קייטרינג לחינה {regionInfo?.title || regionKey}
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "10px",
                    marginTop: "10px"
                  }}>
                    {cities.map((city) => {
                      const href = city.isFocus
                        ? `/city/${city.slug}/hina`
                        : `/city/${city.slug}?event=hina`;
                      return (
                        <a
                          key={city.slug}
                          href={href}
                          className="city-link"
                        >
                          חינה ב{city.name}
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
