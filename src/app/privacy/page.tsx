import React from "react";
import { StarIcon } from "../../components/icons";

export const metadata = {
  title: "מדיניות פרטיות ותנאי שימוש | קייטרינג טעם מהודר",
  description: "מדיניות הפרטיות ותנאי השימוש באתר קייטרינג טעם מהודר. מידע על איסוף נתונים, שימוש בעוגיות (Cookies) ואבטחת מידע.",
  alternates: {
    canonical: "https://aaasada.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="document-page" style={{ backgroundColor: "var(--bg-warm-sand)", padding: "var(--spacing-xl) 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        {/* Document Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
          <div className="badge-kosher" style={{ marginBottom: "15px" }}>
            <StarIcon size={14} style={{ color: "var(--primary-gold)" }} />
            <span>טעם מהודר • כשר למהדרין</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-frank-ruhl)", color: "var(--secondary-green)" }}>
            מדיניות פרטיות ותנאי שימוש
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            עודכן לאחרונה: יוני 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="card" style={{ padding: "var(--spacing-lg)", borderTop: "4px solid var(--primary-gold)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", lineHeight: "1.7", fontSize: "1rem", color: "var(--text-dark)" }}>
            
            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>1. מבוא</h2>
              <p>
                ברוכים הבאים לאתר של <strong>קייטרינג טעם מהודר</strong> (להלן: "האתר"). אנו מכבדים את פרטיותכם ומחויבים להגן על המידע האישי שאתם משתפים עמנו. מסמך זה מפרט את מדיניות הגנת הפרטיות, את אופן איסוף הנתונים ואת השימוש בעוגיות (Cookies) באתר.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>2. איזה מידע אנו אוספים?</h2>
              <p>
                אנו עשויים לאסוף שני סוגי מידע מהמשתמשים באתר:
              </p>
              <ul style={{ paddingRight: "20px", marginTop: "5px", listStyleType: "disc" }}>
                <li>
                  <strong>מידע שנמסר מרצון:</strong> בעת הרכבת תפריט בטופס האינטראקטיבי או לחיצה על כפתורי ההתקשרות, אתם עשויים להעביר אלינו מידע אישי כגון שם, מספר טלפון, כמות אורחים והעדפות קולינריות לצורך תיאום והצעת מחיר.
                </li>
                <li>
                  <strong>מידע טכני וסטטיסטי (לא מזהה):</strong> במהלך הגלישה באתר, נאסף מידע אנונימי על הרגלי השימוש שלכם באמצעות מערכות ניתוח סטטיסטיות (כגון Google Analytics ו-Google Tag Manager). מידע זה כולל את כתובת ה-IP שלכם (מוצפנת/אנונימית), סוג הדפדפן, דפי האתר בהם ביקרתם וזמני השהות.
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>3. שימוש בעוגיות (Cookies)</h2>
              <p>
                האתר משתמש בקבצי עוגיות (Cookies) על מנת לשפר את חוויית הגלישה, לזכור את הבחירות שלכם בטופס התפריט, ולבצע ניתוח סטטיסטי לשיפור ביצועי האתר.
              </p>
              <p>
                עוגייה היא קובץ טקסט קטן שהדפדפן שומר על המכשיר שלכם. באפשרותכם להגדיר מחדש את הדפדפן שלכם כך שיסרב לקבל עוגיות או שיתריע בפניכם כאשר עוגייה נשלחת, אך שימו לב כי הדבר עלול לפגוע בתפקוד של חלקים מסוימים באתר (כגון שמירת הבחירות בטופס התפריט).
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>4. שימוש במידע והעברתו לצד שלישי</h2>
              <p>
                המידע שאתם מוסרים לנו משמש אך ורק לצורך תיאום האירוע שלכם, שליחת הצעת מחיר ומתן שירות הלקוחות הטוב ביותר.
              </p>
              <p>
                אנו <strong>לא</strong> מוכרים, משכירים או משתפים את המידע האישי שלכם עם גופים מסחריים אחרים למטרות שיווקיות. מידע סטטיסטי אנונימי מועבר ל-Google Analytics לצורך ניתוח ביצועים בלבד.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>5. אבטחת מידע</h2>
              <p>
                אנו מיישמים באתר מערכות ונהלים מתקדמים לאבטחת מידע (כולל הצפנת SSL/TLS מאובטחת). בעוד שמערכות אלו מצמצמות את הסיכונים לחדירה בלתי-מורשית, אין הן מעניקות חסינות מוחלטת, ואיננו יכולים להבטיח כי האתר יהיה חסין לחלוטין מפני גישה בלתי מורשית לנתונים.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>6. יצירת קשר וזכויותיכם</h2>
              <p>
                על פי חוק הגנת הפרטיות, התשמ"א-1981, אתם זכאים לעיין במידע עליכם המוחזק במאגר מידע ואף לבקש מאיתנו לתקן או למחוק מידע זה אם אינו מדויק או אינו רלוונטי.
              </p>
              <p>
                לכל שאלה או בקשה בנוגע למדיניות הפרטיות והמידע האישי שלכם, אנא פנו אלינו בטלפון: <strong><a href="tel:052-609-0930" style={{ color: "var(--retro-terracotta)" }}>052-609-0930</a></strong>.
              </p>
            </section>

          </div>
        </div>

        {/* Back Link */}
        <div style={{ textAlign: "center", marginTop: "var(--spacing-md)" }}>
          <a href="/" style={{ color: "var(--secondary-green)", fontWeight: "bold", textDecoration: "underline" }}>
            חזרה לדף הבית
          </a>
        </div>

      </div>
    </div>
  );
}
