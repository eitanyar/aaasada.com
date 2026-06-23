import React from "react";
import MenuBuilder from "../../../components/MenuBuilder";
import { ROSH_HASHANAH_MENU } from "../../../data/catering-content";

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
            <h1 className="color-primary" style={{ fontSize: "2.5rem", marginBottom: "15px", paddingTop: "40px" }}>אוכל מוכן לראש השנה - קייטרינג טעם מהודר</h1>
            <div className="title-underline"></div>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "40px" }}>
              שנה טובה מקייטרינג טעם מהודר.<br />
              גם בראש השנה הזה, אנו מזמינים אתכם לחגיגה של טעם, ריח וצבע.<br />
              מחיר למנה: 185 ש"ח, מינימום להזמנה – 15 מנות.<br />
              מי שכבר ניסה יודע, טעם מהודר מכין אוכל מוכן לראש השנה וזוכה מחדש לתשבחות, הלקוחות שמזמינים קייטרינג מאיתנו ממשיכים להזמין מאיתנו גם קייטרינג בראש השנה הבאה
            </p>
          </div>
          <MenuBuilder menuData={ROSH_HASHANAH_MENU} initialBasePrice={185} initialGuests={15} />
        </div>
      </section>
    </div>
  );
}
