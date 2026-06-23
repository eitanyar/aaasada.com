import React from "react";
import MenuBuilder from "../../../components/MenuBuilder";
import { PASSOVER_MENU } from "../../../data/catering-content";

export const metadata = {
  title: "אוכל מוכן לפסח - תפריט קייטרינג כשר לפסח | טעם מהודר",
  description: "קייטרינג לפסח ברמה אחרת! אוכל מוכן, ביתי וכשר לפסח בהשגחת בד\"ץ, מוכן על השולחן ללא טרחה. מגוון ענק של סלטים, דגים ובשרים. היכנסו לתפריט החג.",
  alternates: {
    canonical: "https://aaasada.com/holidays/passover",
  },
};

export default function PassoverPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-warm-sand)", paddingBottom: "40px" }}>
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="color-primary" style={{ fontSize: "2.5rem", marginBottom: "15px", paddingTop: "40px" }}>אוכל מוכן לפסח - קייטרינג טעם מהודר</h1>
            <div className="title-underline"></div>
            <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "40px" }}>
              פסח שמח מקייטרינג טעם מהודר! גם בפסח הזה, אנו מזמינים אתכם לחגיגה של טעם, ריח וצבע עם קייטרינג לפסח ברמה אחרת, אצלכם, מוכן על השולחן. ללא צורך בטרחה הכרוכה בהכנה!
              התפריט כשר לפסח בהשגחת בד"ץ.
            </p>
          </div>
          <MenuBuilder menuData={PASSOVER_MENU} initialBasePrice={149} initialGuests={10} />
        </div>
      </section>
    </div>
  );
}
