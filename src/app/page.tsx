import React from "react";
import MenuBuilder from "../components/MenuBuilder";
import ImageGallery from "../components/ImageGallery";
import ProfessionalSupervision from "../components/ProfessionalSupervision";
import { CITY_DATA, CATERING_REGIONS } from "../data/catering-content";
import { PhoneIcon, WhatsAppIcon, StarIcon, CheckIcon, KosherStampIcon, LocationPinIcon } from "../components/icons";

export default function Home() {
  // Group cities by region for local SEO linking (Focus/Tier 1 cities only)
  const citiesByRegion: Record<string, typeof CITY_DATA> = {};
  CITY_DATA.filter((city) => city.isFocus).forEach((city) => {
    if (!citiesByRegion[city.region]) {
      citiesByRegion[city.region] = [];
    }
    citiesByRegion[city.region].push(city);
  });

  // Local Business & Catering Service Schema Graph JSON-LD
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CateringService",
        "@id": "https://aaasada.com/#catering",
        "name": "קייטרינג טעם מהודר",
        "image": "https://aaasada.com/images/assado_763x447_webp.webp",
        "description": "שירותי קייטרינג ביתי ואוכל מוכן לאירועים קטנים, שבתות חתן, אזכרות ובריתות. תפריט בשרי עשיר ושופע ב-58 ש\"ח בלבד למנה בכשרות המהודרת של בד\"ץ הרב מחפוד.",
        "telephone": "072-393-9710",
        "url": "https://aaasada.com/",
        "priceRange": "$$",
        "provider": {
          "@type": "LocalBusiness",
          "name": "קייטרינג טעם מהודר",
          "telephone": "072-393-9710",
          "priceRange": "$$",
          "image": "https://aaasada.com/images/assado_763x447_webp.webp",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "בני ברק",
            "addressCountry": "IL"
          }
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
          "name": "תפריט בשרי כשר למהדרין ב-58 ש\"ח",
          "offers": {
            "@type": "Offer",
            "price": "58.00",
            "priceCurrency": "ILS"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://aaasada.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "מה היא כשרות הקייטרינג?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "כל האוכל המוכן בקייטרינג מוכן תחת השגחת בד\"ץ יורה דעה של הרב שלמה מחפוד שליט\"א. כל חומרי הגלם, העופות, הבשרים והירקות כשרים למהדרין גלאט בשרי מן המהדרין."
            }
          },
          {
            "@type": "Question",
            "name": "כיצד ניתן לחמם את האוכל בשבת (שבת חתן)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "המגשים שלנו מותאמים להנחה על פלטת שבת. ניתן להניחם כשהם סגורים ישירות על הפלטה בערב שבת או בבוקר השבת והבשרים והתוספות יישארו חמים, רכים ועסיסיים."
            }
          },
          {
            "@type": "Question",
            "name": "מהו מספר המנות המינימלי להזמנה?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "מינימום ההזמנה של מגשי אוכל מוכן בשרי חם הוא 30 מנות כדי להבטיח את איכות הבישול והאספקה החמה."
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
            <span>כשר למהדרין מן המהדרין - בד"ץ יורה דעה בהשגחת שלמה מחפוד</span>
          </div>
          
          <h1 style={{ color: "#ffffff", fontFamily: "Frank Ruhl Libre, serif", marginBottom: "var(--spacing-sm)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            קייטרינג לאירועים ואוכל מוכן כשר למהדרין
            <br />
            <span style={{ color: "var(--primary-gold)" }}>האופציה הנדיבה, בפחות כסף!</span>
          </h1>
          
          <p style={{
            color: "#e2e8f0",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto var(--spacing-lg) auto",
            lineHeight: "1.7"
          }}>
            מגשי אוכל מוכן בשרי חם לאירועים קטנים בהפקה עצמית קלה וחסכונית. פתרון מושלם, נדיב ומכובד לשבת חתן, אזכרות, בריתות ועליות לתורה. מנות ביתיות עשירות המגיעות חמות וארוזות ישירות אליכם.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-section" className="btn btn-primary">
              <span>להרכבת תפריט ב-₪58</span>
            </a>
            <a href="tel:072-393-9710" className="btn btn-outline" style={{
              color: "#ffffff",
              borderColor: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.05)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <PhoneIcon size={18} />
              <span>072-393-9710</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Badatz Details Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--primary-gold)", fontWeight: "bold", fontSize: "1.1rem", textTransform: "uppercase" }}>כשרות בד"ץ יורה דעה</span>
              <h2 style={{ display: "block", marginTop: "5px" }}>אירוח בראש שקט עם הכשרות המהודרת ביותר</h2>
              <p>
                אנו יודעים כמה חשובה רמת הכשרות לאורחים שלכם. כל המנות בקייטרינג "טעם מהודר" מוכנות תחת השגחתה הקפדנית של בד"ץ יורה דעה, בנשיאות מרן הגאון <strong>הרב שלמה מחפוד שליט"א</strong>.
              </p>
              <p>
                הבשרים והעופות כולם משחיטה מהודרת, ירקות עלים ללא תולעים, והפרשת תרומות ומעשרות כדין. רמת כשרות זו מאפשרת לכם לארח בביטחון מלא בני משפחה וחברים מכל הקהילות והזרמים.
              </p>
              <div style={{ display: "flex", gap: "10px", marginTop: "15px", flexWrap: "wrap" }}>
                <span className="badge-kosher" style={{ gap: "6px" }}><CheckIcon size={14} /> בשר גלאט כשר למהדרין</span>
                <span className="badge-kosher" style={{ gap: "6px" }}><CheckIcon size={14} /> השגחה צמודה</span>
                <span className="badge-kosher" style={{ gap: "6px" }}><CheckIcon size={14} /> שחיטה מהודרת מחפוד</span>
              </div>
            </div>
            <div style={{
              background: "var(--bg-warm-sand)",
              border: "1.5px solid var(--border-color)",
              borderRadius: "var(--border-radius-lg)",
              padding: "var(--spacing-lg)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <KosherStampIcon style={{ margin: "0 auto var(--spacing-sm) auto" }} />
              <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", color: "var(--secondary-green)", marginTop: "10px" }}>תעודת כשרות בתוקף</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-dark)" }}>
                כל המזון המוכן בקייטרינג מלווה בפיקוח צמוד ותעודת כשרות רשמית של בד"ץ הרב מחפוד. ניתן לקבל עותק מצולם של התעודה העדכנית בוואטסאפ בעת התיאום.
              </p>
              <a href="https://wa.me/972523939710?text=שלום, אשמח לקבל צילום של תעודת הכשרות העדכנית שלכם של הרב מחפוד" target="_blank" className="btn btn-secondary" style={{ marginTop: "10px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <WhatsAppIcon size={18} />
                <span>בקשת תעודה בוואטסאפ</span>
              </a>
            </div>
          </div>
          <ProfessionalSupervision />
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>למה כולם בוחרים בקייטרינג להגשה עצמית בסגנון "עשה זאת בעצמך"?</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>חוסכים בעלויות ההפקה והמלצרים ומשקיעים במה שבאמת חשוב לאורחים - בשר איכותי בשפע נדיב.</p>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ textAlign: "center", padding: "var(--spacing-lg)", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "var(--primary-gold)", marginBottom: "15px" }}><StarIcon size={40} /></div>
              <h3 style={{ marginTop: "10px", fontWeight: "600" }}>שפע ונדיבות של בית</h3>
              <p style={{ fontSize: "0.95rem" }}>
                המנות שלנו גדולות, מכובדות ונדיבות במיוחד. המטרה שלנו היא שהאורחים שלכם ייהנו מאוכל מעולה וישבעו מכל הלב, בדיוק כמו בבית.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center", padding: "var(--spacing-lg)", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "var(--primary-gold)", marginBottom: "15px", fontSize: "2.5rem", fontWeight: "bold", lineHeight: "1" }}>₪</div>
              <h3 style={{ marginTop: "10px", fontWeight: "600" }}>חיסכון כספי עצום</h3>
              <p style={{ fontSize: "0.95rem" }}>
                על ידי הימנעות מצוות מלצרים, סבלים ומשגיחים באתר, אנו חוסכים לכם עד 60% מעלות הקייטרינג הרגילה ומביאים לכם תפריט בשרי מלא ב-58 ש"ח בלבד.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center", padding: "var(--spacing-lg)", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "var(--primary-gold)", marginBottom: "15px" }}><LocationPinIcon size={40} /></div>
              <h3 style={{ marginTop: "10px", fontWeight: "600" }}>משלוח חם לאתר האירוע</h3>
              <p style={{ fontSize: "0.95rem" }}>
                האוכל מבושל סמוך לאירוע ונארז במארזי תרמוקן שומרי חום. הוא מגיע אליכם חם, טרי ומוכן ישירות לשולחן או לפלטת השבת שלכם.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Use Cases (Pillars) */}
      <section className="section" id="diy-catering" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>פתרונות קייטרינג מותאמים לאירוע שלכם</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>המגשים הבשריים שלנו מתאימים בדיוק להפקה עצמית קלה ונוחה בבתי כנסת, חצרות ובתים פרטיים.</p>
          </div>

          <div className="grid grid-2">
            <div className="card" style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold" }}>קייטרינג לשבת חתן / עלייה לתורה</h3>
              <p style={{ fontSize: "0.95rem" }}>
                שבת חתן בבית או בבית הכנסת דורשת אוכל בשרי חם, טעים וכשר שניתן לחמם בקלות על פלטות שבת מבלי לפגוע באיכות. אנו מכינים תבשילים עשירים, צלי בקר, עופות שחומים ותוספות חמות שמתאימים בול להנחה על פלטת שבת ומגיעים ארוזים במיוחד לשמירת הטריות לאורך השבת.
              </p>
              <a href="#menu-section" style={{ fontWeight: "bold", textDecoration: "underline" }}>הרכיבו תפריט לשבת חתן ←</a>
            </div>

            <div className="card" style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold" }}>קייטרינג לאזכרות, שבעה וסעודת מצווה</h3>
              <p style={{ fontSize: "0.95rem" }}>
                אנו מבינים את הצורך באוכל חם, מכובד ומנחם בשעות קשות אלו, ללא צורך בהתעסקות מורכבת במטבח. אנו מספקים משלוחי אוכל מבושל ביתי חם (בשרים, אורז, תפוחי אדמה וסלטים) ארוזים במגשים נוחים להנחה מיידית על שולחנות האירוח, כדי שתוכלו להתפנות לאורחים.
              </p>
              <a href="#menu-section" style={{ fontWeight: "bold", textDecoration: "underline" }}>הרכיבו תפריט לאזכרה ←</a>
            </div>

            <div className="card" style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold" }}>אוכל מוכן לברית מילה</h3>
              <p style={{ fontSize: "0.95rem" }}>
                חוגגים ברית בבוקר או בצהריים בבית או באולם בית הכנסת? מגשי האוכל המוכן הבשריים שלנו להפקה עצמית מאפשרים לכם לערוך שולחן חגיגי עשיר בעלות מינימלית ובמהירות שיא. אוכל ביתי טעים ורמת כשרות בד"צ מחפוד מהודרת שתכבד כל אורח.
              </p>
              <a href="#menu-section" style={{ fontWeight: "bold", textDecoration: "underline" }}>הרכיבו תפריט לברית מילה ←</a>
            </div>

            <div className="card" style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
              <h3 style={{ color: "var(--secondary-green)", fontWeight: "bold" }}>בר מצווה, חינה ואירועים קטנים בבית</h3>
              <p style={{ fontSize: "0.95rem" }}>
                חוגגים אירוע משפחתי קטן בחצר או בבית מעל 30 איש? אל תתחייבו למחירי מנות מופקעים באולמות. מגשי האוכל החם שלנו מאפשרים לכם להגיש ארוחה בשרית מפוארת, נדיבה וטעימה בכשרות מהודרת ובמחיר הגיוני שמשאיר לכם תקציב לדברים אחרים.
              </p>
              <a href="#menu-section" style={{ fontWeight: "bold", textDecoration: "underline" }}>הרכיבו תפריט לאירוע קטן ←</a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section" style={{ backgroundColor: "#ffffff", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-md)" }}>
            <h2>מהמטבח שלנו לאירוע שלכם - גלריית מנות</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              צפו במבחר הבשרים הנימוחים, העופות בתנור, הסלטים הטריים המבושלים יום-יום ומגשי האירוח החמים שלנו.
            </p>
          </div>
          <ImageGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>לקוחות מספרים עלינו</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              השילוב המנצח של אוכל טעים בשפע רב, כשרות מהודרת של הרב מחפוד ומחיר ללא תחרות.
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">א</div>
                <div className="testimonial-info">
                  <h4>אלירן כהן</h4>
                  <span>שבת חתן בפתח תקווה</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "10px", color: "var(--primary-gold)" }}>
                <StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} />
              </div>
              <p style={{ fontSize: "0.95rem", margin: 0, color: "var(--text-muted)" }}>
                "הזמנו שבת חתן ל-60 איש. האוכל הגיע חם מאוד במארזים מבודדים, הבשרים היו נימוחים בפה והסלטים טריים בטירוף. האורחים לא הפסיקו לשבח את הכשרות והשפע. מומלץ ביותר!"
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">מ</div>
                <div className="testimonial-info">
                  <h4>מיכל אלקבץ</h4>
                  <span>ברית מילה בראשון לציון</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "10px", color: "var(--primary-gold)" }}>
                <StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} />
              </div>
              <p style={{ fontSize: "0.95rem", margin: 0, color: "var(--text-muted)" }}>
                "חיפשנו פתרון קל ולא יקר לברית של הבן בבית הכנסת. האוכל הגיע ארוז ומאורגן למופת. פשוט פתחנו והגשנו. הכל היה בשפע אדיר ובטעם ביתי חם. תודה רבה על השירות הנפלא!"
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">ד</div>
                <div className="testimonial-info">
                  <h4>דוד מזרחי</h4>
                  <span>אזכרה וסעודת מצווה בבני ברק</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "10px", color: "var(--primary-gold)" }}>
                <StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} /><StarIcon size={16} />
              </div>
              <p style={{ fontSize: "0.95rem", margin: 0, color: "var(--text-muted)" }}>
                "בשעה הקשה של האזכרה לאמא, היינו צריכים שקט נפשי לגבי האוכל והכשרות. טעם מהודר סיפקו לנו אוכל חם ומכובד בכשרות הרב מחפוד שכולם סומכים עליה. הכל היה טעים ומכובד מאוד."
              </p>
            </div>
          </div>
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
            <span className="badge-kosher" style={{ marginBottom: "10px" }}>התפריט הנדיב ב-₪58 למנה</span>
            <h2>הרכיבו תפריט לאירוע שלכם</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              בחרו את המנות העיקריות, התוספות החמות והסלטים האהובים עליכם, הזינו את מספר האורחים ושלחו אלינו ישירות בטופס/ וואטסאפ לקבלת הצעת מחיר מהירה.
            </p>
          </div>
          
          <MenuBuilder />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>שאלות ותשובות נפוצות</h2>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                מה היא כשרות הקייטרינג?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                כל האוכל המוכן בקייטרינג מוכן תחת השגחת בד"ץ יורה דעה של הרב שלמה מחפוד שליט"א. כל חומרי הגלם, העופות, הבשרים והירקות כשרים למהדרין גלאט בשרי מן המהדרין.
              </p>
            </div>
            
            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                איך האוכל מגיע לאירוע?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                האוכל מבושל סמוך מאוד למועד המשלוח ונארז חם במגשי אלומיניום קשיחים ואטומים היטב. המגשים מועברים בארגזים שומרי חום (תרמוקנים) ומגיעים אליכם חמים ומוכנים להגשה על שולחנות האירוח.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                כיצד ניתן לחמם את האוכל בשבת (שבת חתן)?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                המגשים שלנו מותאמים במיוחד להנחה על פלטת שבת. ניתן להניחם כשהם סגורים ישירות על הפלטה בערב שבת או בבוקר השבת (לפי כללי ההלכה המועדפים עליכם) והבשרים והתוספות יישארו חמים, רכים ועסיסיים.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                מהו מספר המנות המינימלי להזמנה?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                כדי להבטיח את איכות הבישול והמשלוח החם במחירי המפעל שלנו, המינימום להזמנת מגשי אוכל מוכן בשרי הוא 30 מנות (30 אורחים).
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600", marginBottom: "6px" }}>
                האם ניתן להזמין ציוד נוסף לאירוע?
              </h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>
                הקייטרינג שלנו מתמקד בעיקר במתן שירות עצמי זול של אוכל מוכן חם בהפקה עצמית קלה. במידת הצורך ולאירועים מתאימים, אנו יכולים לספק ולתווך ציוד נלווה להשכרה כגון שולחנות, כסאות, כלי הגשה חד פעמיים מהודרים, ואוהלי אירועים. ציינו זאת בעת הפנייה בוואטסאפ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Target links (Local SEO Footer) */}
      <section className="section" style={{ backgroundColor: "var(--bg-warm-sand)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-md)" }}>
            <h3 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "600" }}>סניפים ואזורי שירות משלוחי אוכל חם</h3>
            <p style={{ fontSize: "0.95rem" }}>משלוחי קייטרינג בשרי כשר למהדרין בהשגחת הרב מחפוד בכל ערי המרכז, השרון, השפלה, הדרום והשומרון.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", marginTop: "20px" }}>
            {Object.entries(citiesByRegion).map(([regionKey, cities]) => {
              const regionTitle = CATERING_REGIONS[regionKey]?.title || regionKey;
              return (
                <div key={regionKey} style={{ borderRight: "2px solid var(--primary-gold)", paddingRight: "10px" }}>
                  <h4 style={{ fontSize: "1rem", color: "var(--secondary-green)", fontWeight: "bold", marginBottom: "8px", fontFamily: "sans-serif" }}>
                    קייטרינג {regionTitle}
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px", fontSize: "0.9rem" }}>
                    {cities.map((city) => (
                      <li key={city.slug}>
                        <a href={`/city/${city.slug}`} style={{ color: "var(--text-muted)" }}>
                          קייטרינג ב{city.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
