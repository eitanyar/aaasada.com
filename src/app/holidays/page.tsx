import React from "react";
import Link from "next/link";
import MainLayout from "../../components/MainLayout";

export const metadata = {
  title: "קייטרינג לחגים וחול המועד | טעם מהודר",
  description: "קייטרינג איכותי וכשר למהדרין לכל חגי ישראל: ראש השנה, פסח, וחול המועד. חוסכים לכם את הטירחה במטבח עם אוכל ביתי מוכן בטעם של פעם.",
  alternates: {
    canonical: "https://aaasada.com/holidays",
  },
};

export default function HolidaysIndexPage() {
  return (
    <MainLayout>
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="color-primary" style={{ fontSize: "2.5rem", marginBottom: "15px" }}>קייטרינג לחגים וחול המועד</h1>
            <div className="title-underline"></div>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
              בחגים כולנו רוצים לארח ולהנות בחיק המשפחה בלי לעמוד שעות במטבח. בקייטרינג טעם מהודר אנו מכינים עבורכם תפריטי חג עשירים, מסורתיים וכשרים למהדרין, כך שתוכלו לקבל את החג ברוגע ובשמחה.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px" }}>
            
            {/* Rosh Hashanah */}
            <div style={{ backgroundColor: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", transition: "transform 0.3s ease" }}>
              <div style={{ backgroundColor: "var(--primary-gold)", padding: "20px", textAlign: "center" }}>
                <h2 style={{ color: "#1e392a", margin: 0, fontSize: "1.8rem" }}>ראש השנה</h2>
              </div>
              <div style={{ padding: "25px" }}>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#444", marginBottom: "20px" }}>
                  שנה טובה ומתוקה מתחילה בארוחת חג בלתי נשכחת. תפריט ראש השנה שלנו כולל את כל הסימנים המסורתיים, מנות דגים עשירות, צלי בקר מובחר וסלטים טריים לשולחן החג.
                </p>
                <Link href="/holidays/rosh-hashanah" className="btn" style={{ width: "100%", display: "block", textAlign: "center" }}>
                  לתפריט קייטרינג לראש השנה
                </Link>
              </div>
            </div>

            {/* Passover */}
            <div style={{ backgroundColor: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", transition: "transform 0.3s ease" }}>
              <div style={{ backgroundColor: "var(--primary-gold)", padding: "20px", textAlign: "center" }}>
                <h2 style={{ color: "#1e392a", margin: 0, fontSize: "1.8rem" }}>פסח (כשר לפסח)</h2>
              </div>
              <div style={{ padding: "25px" }}>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#444", marginBottom: "20px" }}>
                  לפנות את הזמן לניקיונות ולהשאיר לנו את הבישולים. תפריט קייטרינג כשר לפסח למהדרין המבוסס על מסורת עדות ישראל, עם מגוון מנות עיקריות ותוספות שיהפכו את ליל הסדר למושלם.
                </p>
                <Link href="/holidays/passover" className="btn" style={{ width: "100%", display: "block", textAlign: "center" }}>
                  לתפריט קייטרינג לפסח
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
}
