import React from "react";
import MenuBuilder from "../../../components/MenuBuilder";
import { StarIcon } from "../../../components/icons";
import { ROSH_HASHANAH_MENU } from "../../../data/catering-content";

// Rosh Hashanah תשפ"ז (2026) logistics dates — update these each year.
const ORDER_DEADLINE_DATE = "יום שני, 7.9.2026";
const ORDER_DEADLINE_HEBREW_DATE = 'כ"ה באלול תשפ"ו';
const DELIVERY_WINDOW_TEXT = "יום חמישי בערב או יום שישי (בוקר/צהריים), ערב החג";

export const metadata = {
  title: "אוכל מוכן לראש השנה - קייטרינג לראש השנה | טעם מהודר",
  description: "שנה טובה ומתוקה! מזמינים אוכל מוכן לראש השנה מהקייטרינג המומלץ ביותר, מחיר 110 ש\"ח למנה, בהשגחת בד\"ץ יורה דעה. תפריט חגיגי עם דגים, בשרים, סימני החג וסלטים. הזמינו קייטרינג לראש השנה.",
  alternates: {
    canonical: "https://aaasada.com/holidays/rosh-hashanah",
  },
};

export default function RoshHashanahPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-warm-sand)", paddingBottom: "40px" }}>
      {/* Hero — local Rosh Hashanah image with an overlay for copy contrast */}
      <section className="hero-section rosh-hashanah-hero">
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
            <span>כשר למהדרין - בד&quot;ץ יורה דעה בהשגחת הרב שלמה מחפוד שליט&quot;א</span>
          </div>

          <h1 style={{ color: "#ffffff", fontFamily: "var(--font-frank-ruhl)", marginBottom: "var(--spacing-sm)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            אוכל מוכן לראש השנה
            <br />
            <span style={{ color: "var(--primary-gold)" }}>שנה טובה ומתוקה מקייטרינג טעם מהודר</span>
          </h1>

          <p style={{
            color: "#e2e8f0",
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto var(--spacing-lg) auto",
            lineHeight: "1.7"
          }}>
            חגיגה של טעם, ריח וצבע לשולחן החג — מגשי אוכל מוכן חמים ונדיבים, מבושלים באהבה ומגיעים ישירות אליכם.
            <br />
            <strong>שבוע אחרון למבצע — מ-10 מנות בלבד!</strong>
            <br />
            <span style={{ fontSize: "1.1rem" }}>110 ₪ למנה</span>
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            <a href="#menu-builder-app" className="btn btn-primary">
              <span>להרכבת תפריט לראש השנה</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content — logistics, interactive menu, official flyer */}
      <section className="section-padding bg-light">
        <div className="container">
          {/* Logistics banner — order deadline / delivery window / delivery fee */}
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto 40px",
              background: "linear-gradient(135deg, rgba(30,57,42,0.06), rgba(212,175,55,0.10))",
              border: "1px solid var(--primary-gold)",
              borderRight: "4px solid var(--secondary-green)",
              borderRadius: "var(--border-radius-sm)",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: "1.6" }}>
              🗓️ <strong>מועד אחרון להזמנות:</strong> {ORDER_DEADLINE_DATE} ({ORDER_DEADLINE_HEBREW_DATE})
            </p>
            <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: "1.6" }}>
              🚚 <strong>מועדי אספקה:</strong> {DELIVERY_WINDOW_TEXT}
            </p>
            <p style={{ margin: 0, fontSize: "1.02rem", lineHeight: "1.6" }}>
              💰 <strong>משלוחים:</strong> שירות משלוחים בתשלום נוסף
            </p>
            <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: "1.6", color: "var(--secondary-green)" }}>
              הערה: ההזמנה מתבצעת בכפולות של 5 מנות בלבד.
            </p>
          </div>

          <MenuBuilder
            menuData={ROSH_HASHANAH_MENU}
            initialBasePrice={110}
            initialGuests={10}
            minGuests={10}
            eventTypesPlaceholder="לאיזה חג (ערב חג, חג שני...)"
            alaCarteCategoryId="intermediates"
            alaCartePricePerPortion={35}
            alaCarteMinPortions={5}
            alaCartePortionStep={5}
            showMultipleNote={true}
          />

          {/* Official printed menu flyer (with בד"ץ יורה דעה hechsher) */}
          <figure style={{ maxWidth: "700px", margin: "50px auto 0", textAlign: "center" }}>
            <figcaption
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                color: "var(--secondary-green)",
                marginBottom: "16px",
              }}
            >
              התפריט הרשמי לראש השנה — בהשגחת בד&quot;ץ יורה דעה
            </figcaption>
            <img
              src="/images/rosh-hashanah-menu.jpg"
              alt="תפריט ראש השנה תשפ&quot;ז של קייטרינג טעם מהודר — מנות עיקריות, תוספות חמות, סלטים ומנות ביניים, בהשגחת בד&quot;ץ יורה דעה"
              loading="lazy"
              decoding="async"
              width={963}
              height={1600}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "var(--border-radius-sm)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
                border: "1px solid var(--primary-gold)",
              }}
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
