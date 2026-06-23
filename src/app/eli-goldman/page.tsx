import React from "react";
import { PhoneIcon, WhatsAppIcon, CheckIcon } from "../../components/icons";

export const metadata = {
  title: "אלי גולדמן - פיקוח מקצועי ומנהל מטבחים | קייטרינג טעם מהודר",
  description: "אלי גולדמן, מומחה לניהול מטבחים בעל 30 שנות ניסיון, מפקח מקצועי על רמת הכשרות המהודרת (בד\"ץ יורה דעה של הרב שלמה מחפוד) והאיכות הקולינרית בקייטרינג טעם מהודר.",
  alternates: {
    canonical: "https://aaasada.com/eli-goldman",
  },
};

export default function EliGoldmanProfilePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-warm-sand)" }}>
      {/* Hero Section */}
      <section className="section" style={{
        background: "linear-gradient(135deg, var(--secondary-green) 0%, var(--secondary-green-hover) 100%)",
        color: "var(--text-light)",
        padding: "var(--spacing-xl) 0",
        textAlign: "center",
        borderBottom: "6px solid var(--primary-gold)",
      }}>
        <div className="container">
          <div className="supervision-badge" style={{
            margin: "0 auto var(--spacing-sm) auto",
            width: "60px",
            height: "60px",
            backgroundColor: "var(--primary-gold)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
          }}>
            <span style={{ fontSize: "1.4rem" }}>30</span>
            שנה
          </div>
          
          <h1 style={{ color: "#ffffff", fontFamily: "var(--font-frank-ruhl)", marginBottom: "var(--spacing-sm)" }}>
            אלי גולדמן
          </h1>
          <p style={{
            color: "var(--primary-gold)",
            fontSize: "1.35rem",
            fontWeight: "700",
            maxWidth: "600px",
            margin: "0 auto var(--spacing-md) auto",
            fontFamily: "sans-serif"
          }}>
            מנהל מטבחים ומפקח מקצועי
          </p>
          <p style={{
            color: "#e2e8f0",
            fontSize: "1.15rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            פיקוח קולינרי קפדני, בטיחות מזון ושמירה על רמת כשרות מהודרת של בד"ץ הרב שלמה מחפוד.
          </p>
        </div>
      </section>

      {/* Main Profile Info */}
      <section className="section" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "var(--spacing-lg)", alignItems: "flex-start" }}>
            <div>
              <h2 style={{ color: "var(--secondary-green)" }}>אודות וניסיון מקצועי</h2>
              <p>
                אלי גולדמן הוא מומחה ותיק לניהול מערכות מזון, ייצור קולינרי ובטיחות מזון, עם מעל ל-30 שנות ניסיון מעשי בניהול מטבחים מוסדיים, חברות קייטרינג ואירועים רחבי היקף.
              </p>
              <p>
                לאורך השנים, אלי הוביל והקים מערכי בישול מתקדמים תוך התמחות מיוחדת בשילוב שבין יעילות לוגיסטית, איכות קולינרית בלתי מתפשרת ושמירה על כללי הלכה מוקפדים ביותר.
              </p>
              <p>
                במסגרת תפקידו בקייטרינג "טעם מהודר", אלי גולדמן אחראי על:
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0, marginTop: "15px" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} />
                  <span><strong>בטיחות מזון והגיינה:</strong> פיקוח על תהליכי הייצור וקבלת חומרי הגלם בסטנדרט הגבוה ביותר.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} />
                  <span><strong>שמירה על כשרות למהדרין:</strong> עבודה צמודה מול משגיחי הכשרות של בד"ץ יורה דעה בהנהגת הרב שלמה מחפוד.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckIcon size={16} style={{ color: "var(--primary-gold)", marginTop: "4px" }} />
                  <span><strong>איכות חומרי הגלם:</strong> בחירת נתחי בשר מובחרים, עופות טריים וירקות מבוקרים ללא תולעים וחרקים.</span>
                </li>
              </ul>
            </div>

            <div style={{
              background: "var(--bg-warm-sand)",
              border: "1.5px solid var(--border-color)",
              borderRadius: "var(--border-radius-lg)",
              padding: "var(--spacing-lg)",
            }}>
              <h3 style={{ color: "var(--secondary-green)", fontFamily: "sans-serif", fontWeight: "700", marginBottom: "15px" }}>
                אני מאמין מקצועי והלכתי
              </h3>
              <p style={{ fontSize: "1.05rem", fontStyle: "italic", color: "var(--text-muted)", lineHeight: "1.7" }}>
                "אירוע משפחתי מוצלח, בין אם זו שבת חתן, ברית מילה או אזכרה, נשען בראש ובראשונה על השקט הנפשי של המארח. רמת כשרות למהדרין גלאט כשר היא יסוד קריטי שאינו סובל פשרות. 
              </p>
              <p style={{ fontSize: "1.05rem", fontStyle: "italic", color: "var(--text-muted)", lineHeight: "1.7" }}>
                בקייטרינג 'טעם מהודר', אנו דואגים שכל נתח בשר וכל מגש אוכל מוכן שמגיע ללקוח ייוצר תחת הקפדה הלכתית מחמירה ובפיקוח הסטנדרטים של בד"ץ הרב מחפוד שליט"א, תוך שמירה על טעם ביתי עשיר, טריות ושפע במחיר הוגן לכל נפש."
              </p>
              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "15px", marginTop: "15px", textAlign: "center" }}>
                <a href="tel:052-609-0930" className="btn btn-secondary" style={{ display: "inline-flex", gap: "8px", width: "100%" }}>
                  <PhoneIcon size={16} />
                  <span>בירורים לגבי כשרות: 052-609-0930</span>
                </a>

                <a href="/holidays" className="btn" style={{ display: "inline-flex", gap: "8px", width: "100%", marginTop: "15px", backgroundColor: "#fff", color: "var(--secondary-green)", border: "1.5px solid var(--secondary-green)", justifyContent: "center" }}>
                  <span>לקבלת תפריטי קייטרינג לחגים &gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
