import React from "react";
import Link from "next/link";
import MainLayout from "../../../components/MainLayout";

export const metadata = {
  title: "אוכל מוכן לפסח - תפריט קייטרינג כשר לפסח | טעם מהודר",
  description: "קייטרינג לפסח ברמה אחרת! אוכל מוכן, ביתי וכשר לפסח בהשגחת בד\"ץ, מוכן על השולחן ללא טרחה. מגוון ענק של סלטים, דגים ובשרים. היכנסו לתפריט החג.",
  alternates: {
    canonical: "https://aaasada.com/holidays/passover",
  },
};

export default function PassoverPage() {
  return (
    <MainLayout>
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="color-primary" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>אוכל מוכן לפסח - קייטרינג טעם מהודר</h1>
            <div className="title-underline"></div>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
              פסח שמח מקייטרינג טעם מהודר! גם בפסח הזה, אנו מזמינים אתכם לחגיגה של טעם, ריח וצבע עם קייטרינג לפסח ברמה אחרת, אצלכם, מוכן על השולחן. ללא צורך בטרחה הכרוכה בהכנה!
            </p>
          </div>

          <div style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", marginBottom: "30px" }}>
            <div style={{ backgroundColor: "var(--primary-gold)", padding: "15px", borderRadius: "8px", marginBottom: "30px", textAlign: "center", color: "#1e392a" }}>
              <strong>הערה חשובה:</strong> התפריט המוצג מטה הוא דוגמה לתפריט פסח משנים קודמות (כולל מחירי עבר לצורך המחשה). 
              התפריט המעודכן והמחירים לשנה הקרובה יפורסמו בסמוך לחג הפסח.
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              <div>
                <h3 className="color-primary" style={{ borderBottom: "2px solid var(--primary-gold)", paddingBottom: "10px", marginBottom: "15px" }}>מנות ביניים לבחירה</h3>
                <ul style={{ lineHeight: "1.8", paddingRight: "20px" }}>
                  <li>מושט ברוטב מרוקאי חריף</li>
                  <li>נסיכת הנילוס מרוקאי</li>
                  <li>טונה בנוסח מרוקאי</li>
                  <li>דג סול מטוגן מרוקאי</li>
                  <li>קציצות דגים ברוטב</li>
                </ul>
              </div>

              <div>
                <h3 className="color-primary" style={{ borderBottom: "2px solid var(--primary-gold)", paddingBottom: "10px", marginBottom: "15px" }}>מנות עיקריות לבחירה</h3>
                <ul style={{ lineHeight: "1.8", paddingRight: "20px" }}>
                  <li>צלי בקר ברוטב פטריות</li>
                  <li>בקר בנוסח מרוקאי</li>
                  <li>פרגיות על האש</li>
                  <li>קבב על האש / מטוגן</li>
                  <li>חזה עוף על האש</li>
                  <li>שניצל עוף פריך</li>
                  <li>שוקיים עוף ברוטב / אפוי</li>
                  <li>עוף בגריל אפוי (כרעיים)</li>
                </ul>
              </div>

              <div>
                <h3 className="color-primary" style={{ borderBottom: "2px solid var(--primary-gold)", paddingBottom: "10px", marginBottom: "15px" }}>תוספות חמות וסלטים</h3>
                <ul style={{ lineHeight: "1.8", paddingRight: "20px" }}>
                  <li>תפו"א זעירים אפויים בתנור</li>
                  <li>ארטישוק בפטריות</li>
                  <li>אפונה וגזר / שעועית ירוקה</li>
                  <li>ירקות מוקפצים</li>
                  <li>מגוון ענק של סלטי הבית: מטבוחה מרוקאית, זעלוק (חציל מבושל), סלק אדום ועוד...</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <p style={{ fontSize: "1.1rem", marginBottom: "20px", fontWeight: "bold" }}>הכשרות: כשר למהדרין בפיקוח הרב יגאל בן עזרא</p>
              <Link href="/#contact-section" className="btn" style={{ fontSize: "1.2rem", padding: "12px 30px" }}>
                ליצירת קשר לבירורים נוספים
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
