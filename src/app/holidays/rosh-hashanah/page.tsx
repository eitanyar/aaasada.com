import React from "react";
import Link from "next/link";

export const metadata = {
  title: "אוכל מוכן לראש השנה - קייטרינג לראש השנה | טעם מהודר",
  description: "שנה טובה ומתוקה! מזמינים אוכל מוכן לראש השנה מהקייטרינג המומלץ ביותר. תפריט חגיגי עם דגים, בשרים, סימני החג וסלטים. הזמינו קייטרינג לראש השנה.",
  alternates: {
    canonical: "https://aaasada.com/holidays/rosh-hashanah",
  },
};

export default function RoshHashanahPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-warm-sand)", paddingBottom: "40px" }}>
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="color-primary" style={{ fontSize: "2.5rem", marginBottom: "15px", paddingTop: "40px" }}>אוכל מוכן לראש השנה - תפריט קייטרינג</h1>
            <div className="title-underline"></div>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
              שנה טובה מקייטרינג טעם מהודר! גם בראש השנה הזה, אנו מזמינים אתכם לחגיגה של טעם, ריח וצבע. מי שכבר ניסה יודע, "טעם מהודר" מכין אוכל מוכן לראש השנה וזוכה מחדש לתשבחות מהאורחים סביב שולחן החג.
            </p>
          </div>

          <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", marginBottom: "30px" }}>
            <div style={{ backgroundColor: "var(--primary-gold)", padding: "15px", borderRadius: "8px", marginBottom: "30px", textAlign: "center", color: "#1e392a" }}>
              <strong>הערה חשובה:</strong> התפריט המוצג מטה מבוסס על שולחן החג המסורתי שלנו. 
              תפריט ראש השנה המדויק לשנה הקרובה יפורסם בסמוך לחג, כולל אפשרות להזמנה אונליין.
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              <div>
                <h3 className="color-primary" style={{ borderBottom: "2px solid var(--primary-gold)", paddingBottom: "10px", marginBottom: "15px" }}>מנות ביניים / דגים</h3>
                <ul style={{ lineHeight: "1.8", paddingRight: "20px" }}>
                  <li>סלמון נורבגי בקראנץ' פיצוחים</li>
                  <li>סלמון נורווגי בעשבי תיבול</li>
                  <li>פילה מושט מרוקאי פיקנטי</li>
                  <li>קציצות דג ברוטב מזרחי</li>
                  <li>מעטפת פילו פרגית ופירות יבשים</li>
                </ul>
              </div>

              <div>
                <h3 className="color-primary" style={{ borderBottom: "2px solid var(--primary-gold)", paddingBottom: "10px", marginBottom: "15px" }}>מנות עיקריות וחגיגיות</h3>
                <ul style={{ lineHeight: "1.8", paddingRight: "20px" }}>
                  <li>צלי כתף בקר ברוטב פטריות</li>
                  <li>אסאדו ברוטב יין וטריאקי</li>
                  <li>בשר ראש ברוטב פיקנטי</li>
                  <li>כרעיים עוף ברוטב הדרים</li>
                  <li>פרגית צלויה על האש</li>
                  <li>טורטיה רול ממולאת בשר</li>
                </ul>
              </div>

              <div>
                <h3 className="color-primary" style={{ borderBottom: "2px solid var(--primary-gold)", paddingBottom: "10px", marginBottom: "15px" }}>תוספות וסלטי בית</h3>
                <ul style={{ lineHeight: "1.8", paddingRight: "20px" }}>
                  <li>טנזיה – תבשיל פירות יבשים (חובה לחג מתוק!)</li>
                  <li>אורז חגיגי (קלאסי / שקדים וצימוקים)</li>
                  <li>תפוחי אדמה אפויים בשמן זית ורוזמרין</li>
                  <li>קינואה עם בוטנים וחמוציות</li>
                  <li>מגוון סלטים לסימני החג: סלק אדום, גזר חריף, מטבוחה ביתית, חציל פנקו ועוד...</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Link href="/#contact-section" className="btn" style={{ fontSize: "1.2rem", padding: "12px 30px" }}>
                דברו איתנו על הזמנות לחג
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
