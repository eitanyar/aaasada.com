import React from "react";
import MenuBuilder from "../../components/MenuBuilder";
import ProfessionalSupervision from "../../components/ProfessionalSupervision";
import { CITY_DATA, CATERING_REGIONS } from "../../data/catering-content";
import { PhoneIcon, StarIcon, CheckIcon } from "../../components/icons";
import VideoTestimonial from "../../components/VideoTestimonial";

export const metadata = {
  title: "קייטרינג לבר מצווה כשר למהדרין בד\"ץ מחפוד | טעם מהודר",
  description: "חוגגים בר מצווה או בת מצווה? אוכל מוכן בשרי חם, עשיר וכשר למהדרין (בהשגחת בד\"ץ הרב שלמה מחפוד) במחיר ללא תחרות של 58 ₪ למנה. מינימום 30 איש.",
  alternates: {
    canonical: "https://aaasada.com/bar-mitzvah",
  },
};

export default function BarMitzvahGeneralPage() {
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
        "@id": "https://aaasada.com/bar-mitzvah#catering",
        "name": "קייטרינג לבר מצווה - טעם מהודר",
        "image": "https://aaasada.com/images/bar_mitzvah.webp",
        "description": "קייטרינג לבר מצווה ובת מצווה. אוכל מוכן בשרי חם, עשיר וכשר למהדרין בהשגחת בד\"ץ הרב מחפוד ב-58 ש\"ח בלבד למנה.",
        "telephone": "052-609-0930",
        "url": "https://aaasada.com/bar-mitzvah",
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
          "name": "תפריט בשרי לבר מצווה ב-58 ש\"ח",
          "offers": {
            "@type": "Offer",
            "price": "58.00",
            "priceCurrency": "ILS"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aaasada.com/bar-mitzvah#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "מה המינימום להזמנת קייטרינג לבר מצווה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "המינימום להזמנת אוכל מוכן בשרי חם לבר מצווה הוא 30 מנות. שירותי הפקה מלאים הכוללים מלצרים, עריכה ופינוי זמינים לאירועים של 100 איש ומעלה."
            }
          },
          {
            "@type": "Question",
            "name": "האם האוכל מגיע חם לאירוע?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כן, האוכל מבושל סמוך למועד האירוע ונארז במגשי אלומיניום אטומים ובתוך תרמוקנים שומרי חום, כך שהוא מגיע חם ומוכן ישירות להגשה."
            }
          },
          {
            "@type": "Question",
            "name": "איזו כשרות יש לקייטרינג לבר מצווה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כל התפריט שלנו מוכן תחת השגחת בד\"ץ יורה דעה של הרב שלמה מחפוד שליט\"א. כל חומרי הגלם כשרים למהדרין גלאט בשרי מן המהדרין."
            }
          },
          {
            "@type": "Question",
            "name": "האם ניתן להתאים את התפריט לילדים או אורחים עם רגישויות?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כן, התפריט שלנו מגוון וכולל מנות שילדים אוהבים במיוחד (כגון שניצל פריך, קבב ועוף זהוב) וכן מנות צמחוניות/טבעוניות כמו פלפל ממולא."
            }
          },
          {
            "@type": "Question",
            "name": "כיצד מנהלים אירוע בר מצווה בשבת (שבת חתן)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "לשבת חתן בר מצווה אנו מספקים את המגשים סגורים ואטומים היטב, המותאמים במיוחד להנחה בטוחה על פלטת שבת בבית הכנסת או במקום האירוע."
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
            <span>כשרות למהדרין מן המהדרין - בד"ץ יורה דעה (הרב שלמה מחפוד)</span>
          </div>
          
          <h1 style={{ color: "#ffffff", fontFamily: "var(--font-frank-ruhl)", marginBottom: "var(--spacing-sm)" }}>
            קייטרינג לבר מצווה ואירועים משפחתיים
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
            חוגגים בר מצווה בבית או עלייה לתורה בבית הכנסת? אנו מספקים מגשי אוכל בשרי מבושל חם להפקה עצמית קלה וחסכונית. מנות נדיבות וטעימות המגיעות חמות ישירות לאורחים שלכם.
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

      {/* Main content explaining Bar Mitzvah features */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center", gap: "var(--spacing-lg)" }}>
            <div>
              <h2>חגיגת בר מצווה מכובדת ושופעת מבלי לקרוע את הכיס</h2>
              <p>
                אירוע בר המצווה או עלייה לתורה בבית כנסת הוא יום גדול ומרגש. אתם רוצים להעניק לאורחים שלכם חוויה קולינרית בשרית טעימה, נדיבה וכשרה למהדרין, אך לא חייבים לשלם מחירי עתק על הפקה מלאה ומלצרים.
              </p>
              <p>
                קייטרינג "טעם מהודר" מציע לכם מגשי אוכל מוכן חמים להגשה עצמית פשוטה ומהירה בסגנון "עשה זאת בעצמך" ברמת כשרות מהודרת של בד"ץ יורה דעה בנשיאות הרב שלמה מחפוד. הבשרים המובחרים שלנו, האורז החגיגי והסלטים הטריים מגיעים במגשי אלומיניום קשיחים, ארוזים במיוחד לשמירה על חום גבוה ומוכנים לפתיחה מיידית על שולחן האירוח.
              </p>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <img
                src="/images/bar_mitzvah.webp"
                alt="קייטרינג לבר מצווה"
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
                <h3 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", margin: "0 0 15px 0" }}>השפע שלנו לבר מצווה:</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>מבחר בשרים ב-58 ש"ח — כולל בקר:</strong> צלי בקר, רוסטביף וקבב כלולים במחיר הבסיסי — מתחרים בזול מגישים בד"כ עוף.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>7 סלטים + 3 תוספות חמות:</strong> מתחרים בזול מסתפקים בד"כ 4 סלטים ו-2 תוספות בלבד — אצלנו שניים יותר מכל, במחיר קבוע ושקוף.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>כשרות מהודרת:</strong> בד"ץ הרב שלמה מחפוד, השחיטה המועדפת על מגוון הזרמים.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>אירועי הפקה מלאה:</strong> שירותי מלצרים, עריכה וניהול הגשה מלאים זמינים לאירועים של 100 סועדים ומעלה.</span></li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}><CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} /> <span><strong>הפקה עצמית קלה:</strong> חוסכים אלפי שקלים של הפקה ומלצרים ומשקיעים באוכל מעולה ללא פשרות.</span></li>
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
            <h2>הרכיבו את התפריט לבר מצווה שלכם</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> עיקריות, <strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>3</strong> תוספות ו-<strong style={{ color: "var(--primary-gold)", fontSize: "1.25rem" }}>7</strong> סלטים טריים. שלחו אלינו ישירות לוואטסאפ לתיאום מהיר.
            </p>
          </div>
          
          <MenuBuilder />
        </div>
      </section>

      {/* Detailed SEO Copywriting & Articles (Collapsible) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-md)" }}>
            <h2>מדריכים ותוכן מקצועי לתכנון בר מצווה</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>לחצו על הכותרות מטה לקריאת מידע מורחב על תכנון קולינרי, כשרות מהודרת וטיפים שיחסכו לכם אלפי שקלים באירוע.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px", margin: "0 auto" }}>
            <details className="faq-details" style={{ backgroundColor: "#ffffff", padding: "15px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <summary style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--secondary-green)", cursor: "pointer", listStylePosition: "inside" }}>
                קייטרינג כשר לבר מצווה – שילוב של כשרות, טעם ושפע ביתי
              </summary>
              <div style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                <p>
                  בר מצווה היא אבן דרך משמעותית בחייו של נער יהודי, המסמלת את המעבר שלו לבגרות ואת קבלתו לעול מצוות. כדי להבטיח שאירוע חשוב זה ייחגג בהתאם למסורת, לקייטרינג כשר יש תפקיד מרכזי במתן חוויה בלתי נשכחת.
                </p>
                <p>
                  אצלנו ב"טעם מהודר" אנו משלבים את אמנות הכנת המנות המשובחות עם הקפדה מוחלטת על חוקי התזונה היהודיים ברמת המהדרין הגבוהה ביותר. כל המנות מוכנות בפיקוח צמוד ותחת השגחת בד"ץ יורה דעה בנשיאות מרן הגאון הרב שלמה מחפוד שליט"א. רמה זו של כשרות מאפשרת לכם לארח בביטחון מלא בני משפחה וחברים מכל הקהילות והזרמים.
                </p>
                <p>
                  מעבר לכשרות, המודל של "טעם מהודר" מבוסס על שירות עצמי חכם (DIY). על ידי אספקת מגשי אוכל בשרי מבושל חם ישירות לאירוע ללא צוות מלצרים קבוע באתר, אנו חוסכים לכם עד 60% מעלות הקייטרינג הרגילה ומאפשרים לכם להשקיע את התקציב במה שבאמת חשוב לאורחים – אוכל מעולה בשפע רב.
                </p>
              </div>
            </details>

            <details className="faq-details" style={{ backgroundColor: "#ffffff", padding: "15px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <summary style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--secondary-green)", cursor: "pointer", listStylePosition: "inside" }}>
                איך מתכננים תפריט בר מצווה כשר, עשיר ומותאם אישית?
              </summary>
              <div style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                <p>
                  תכנון תפריט בר מצווה דורש שילוב נכון של מאכלים מסורתיים לצד מנות מודרניות שאהובות על כולם. המטבח היהודי המסורתי מציע שפע אפשרויות מענגות – מצלי בקר עסיסי ברוטב פטריות, כרעי עוף זהובים בתנור ועד קוסקוס מרוקאי אוורירי עם מרק ירקות עשיר.
                </p>
                <p>
                  התפריט שלנו מאפשר לכם התאמה אישית מלאה. תוכלו לבחור 7 סוגי סלטים טריים (חומוס ביתי, מטבוחה מבושלת, חצילים במגוון סגנונות ועוד), 3 תוספות חמות ו-3 מנות עיקריות בשריות ב-58 ₪ בלבד למנה. אנו מציעים גם שדרוגים כמו אסאדו מובחר בצלייה ארוכה עם יין ודבש, פילה סלמון מרוקאי, או פאסטיה עוף מסורתית עם פירות יבשים למי שרוצה להוסיף נופך חגיגי נוסף.
                </p>
                <p>
                  אנו שמים דגש רב גם על התאמה לילדים ולבעלי רגישויות. לצד המנות העיקריות המורכבות, השניצל הביתי הפריך והקבב על האש אהובים מאוד על בני הנוער והילדים באירוע. למי שמחפש מנות צמחוניות או טבעוניות, אנו מציעים פלפל ממולא באורז וירקות שורש ברוטב עגבניות עשיר.
                </p>
              </div>
            </details>

            <details className="faq-details" style={{ backgroundColor: "#ffffff", padding: "15px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <summary style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--secondary-green)", cursor: "pointer", listStylePosition: "inside" }}>
                קייטרינג בר מצווה ועליה לתורה – חוויה קולינרית מרגשת ושבתות חתן
              </summary>
              <div style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                <p>
                  <strong>קייטרינג בר מצווה – חוויה קולינרית מרגשת:</strong> אם אתם מחפשים קייטרינג בר מצווה שירשים את כל האורחים, אנחנו כאן כדי לספק לכם את הטוב ביותר. עם מנות מגוונות שמתאימות לכל טעם וסגנון, אתם יכולים להיות בטוחים שכולם ייהנו מאוכל כשר ומהודר שמתאים בדיוק לאירוע שלכם.
                </p>
                <p>
                  <strong>קייטרינג לשבת בר מצווה – טעמים לחגיגה:</strong> מה אוכלים בשבת בר מצווה? קייטרינג לשבת חתן בר מצווה מציע לכם תפריט עשיר שמחבר בין מסורת לחידוש. אנו מספקים מגוון מנות שמשלבות בין טעמים מוכרים לקינוחים מפתיעים, כך שכל רגע בשולחן יהיה מיוחד.
                </p>
                <p>
                  האירוח בשבת דורש היערכות מיוחדת. אנו מספקים את כל המנות בקייטרינג לשבת חתן בר מצווה כשהן מבושלות ומוכנות לחלוטין וארוזות במגשי אלומיניום המיועדים להנחה ישירה על פלטת שבת בבית הכנסת או בבית הארחה. האוכל שומר על עסיסיות וטריות ומאפשר לכם לערוך סעודה משפחתית חמה ומכובדת לאורך כל השבת.
                </p>
              </div>
            </details>

            <details className="faq-details" style={{ backgroundColor: "#ffffff", padding: "15px", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
              <summary style={{ fontWeight: "bold", fontSize: "1.1rem", color: "var(--secondary-green)", cursor: "pointer", listStylePosition: "inside" }}>
                טיפים חשובים להפקת אירוע בר מצווה כשר ומוצלח
              </summary>
              <div style={{ marginTop: "10px", lineHeight: "1.6", fontSize: "0.95rem" }}>
                <ul>
                  <li><strong>תכנון מוקדם:</strong> חברות קייטרינג מובילות בכשרות מהודרת נתפסות במהירות. מומלץ לשריין את תאריך האירוע לפחות מספר שבועות מראש, במיוחד בעונות השיא של העליות לתורה בקיץ ובסתיו.</li>
                  <li><strong>הגדרת אופי ההגשה:</strong> לאירועים אינטימיים בבית או בבית הכנסת (30 עד 80 איש), הגשה עצמית במגשים מוכנים היא הפתרון החסכוני והאינטימי ביותר. לאירועים גדולים מעל 100 איש, מומלץ לשקול את שירות המלצרים המלא שלנו להסרת דאגה מוחלטת מהמארחים.</li>
                  <li><strong>שילוב נגיעות אישיות:</strong> הוסיפו עמדת קינוחי פרווה עשירה או שלבו מתכונים משפחתיים אהובים כדי ליצור אווירה חמה המהדהדת את האישיות והמסע של ילדכם לבגרות.</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שאלות ותשובות נפוצות – קייטרינג לבר מצווה</h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                מה המינימום להזמנת קייטרינג לבר מצווה?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                מינימום ההזמנה של מגשי אוכל מוכן בשרי חם לבר מצווה הוא 30 מנות. עבור אירועי הפקה מלאים הכוללים צוות מלצרים, עריכת שולחנות וניהול הגשה באתר, המינימום הוא 100 אורחים ומעלה.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                האם האוכל מגיע חם לאתר האירוע?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                כן, האוכל מבושל במטבח המהודר שלנו סמוך מאוד למועד המשלוח ונארז חם במגשי אלומיניום אטומים. המגשים מובלים בתוך ארגזים תרמיים מבודדים (תרמוקנים) שומרי חום ומגיעים אליכם חמים ומוכנים לפתיחה והגשה מיידית על השולחן.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                איזו כשרות יש לקייטרינג לבר מצווה?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                קייטרינג "טעם מהודר" פועל תחת השגחתה המהודרת של בד"ץ יורה דעה בראשות הרב שלמה מחפוד שליט\"א. כל חומרי הגלם, העופות, הבשרים (חלק גלאט בשרי) והירקות עומדים בסטנדרטים המחמירים ביותר של כשרות למהדרין.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                האם ניתן להתאים את המנות לילדים או לרגישויות שונות?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                בוודאי. התפריט שלנו מגוון מאוד וכולל מנות שילדים אוהבים כמו שניצל ביתי פריך בציפוי מוזהב וקבב בגריל, וכן מנות מבוגרים מורכבות יותר. לאורחים בעלי רגישויות או צמחוניים/טבעוניים אנו מציעים מנות ייעודיות כמו פלפל ממולא עשיר.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                כיצד מנהלים את האוכל בשבת חתן בר מצווה?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                לשבתות חתן ועליות לתורה בשבת, אנו מספקים את האוכל מבושל במלואו במגשים המותאמים במיוחד להנחה על פלטת שבת. אנו מספקים הנחיות חימום מדויקות כדי שהבשרים, העופות והתוספות יישארו חמים, עסיסיים ורכים לאורך כל השבת.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic SEO Cities Directory Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שירותי קייטרינג לבר מצווה לפי ערים וישובים</h2>
            <p>משלוחי אוכל חם לאירועי בר מצווה ובת מצווה בכל אזור המרכז, השרון, השפלה והדרום</p>
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
                    קייטרינג לבר מצווה {regionInfo?.title || regionKey}
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "10px",
                    marginTop: "10px"
                  }}>
                    {cities.map((city) => {
                      const href = city.isFocus
                        ? `/city/${city.slug}/bar-mitzvah`
                        : `/city/${city.slug}?event=bar-mitzvah`;
                      return (
                        <a
                          key={city.slug}
                          href={href}
                          className="city-link"
                        >
                          בר מצווה ב{city.name}
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
