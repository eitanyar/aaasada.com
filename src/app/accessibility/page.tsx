import React from "react";
import { StarIcon } from "../../components/icons";

export const metadata = {
  title: "הצהרת נגישות | קייטרינג טעם מהודר",
  description: "הצהרת נגישות והתאמות הנגישות שבוצעו באתר קייטרינג טעם מהודר על פי חוק שוויון זכויות לאנשים עם מוגבלות בישראל.",
  alternates: {
    canonical: "https://aaasada.com/accessibility",
  },
};

export default function AccessibilityPage() {
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
            הצהרת נגישות אתר
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            עודכן לאחרונה: יוני 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="card" style={{ padding: "var(--spacing-lg)", borderTop: "4px solid var(--primary-gold)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", lineHeight: "1.7", fontSize: "1rem", color: "var(--text-dark)" }}>
            
            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>1. מבוא ומחויבות לנגישות</h2>
              <p>
                אנו ב<strong>קייטרינג טעם מהודר</strong> רואים חשיבות עליונה במתן שירות שוויוני, מכובד ונגיש לכלל הלקוחות והגולשים באתר. אנו משקיעים משאבים רבים על מנת להפוך את האתר לנגיש וידידותי לאנשים עם מוגבלויות פיזיות, קוגניטיביות וחושיות, מתוך אמונה כי לכל אדם מגיעה הזכות ליהנות מחוויית גלישה עצמאית ושוויונית.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>2. התאמות הנגישות שבוצעו באתר</h2>
              <p>
                אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013. התאמות הנגישות בוצעו על פי המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ועל פי מסמך ההנחיות הבינלאומי WCAG 2.1.
              </p>
              <p>
                להלן חלק מההתאמות שיושמו באתר:
              </p>
              <ul style={{ paddingRight: "20px", marginTop: "5px", listStyleType: "disc" }}>
                <li>
                  <strong>ניווט מקלדת:</strong> האתר תומך בניווט מלא באמצעות מקלדת (שימוש במקש Tab, חיצים ואישור ב-Enter) לגולשים המתקשים להפעיל עכבר.
                </li>
                <li>
                  <strong>תמיכה בקוראי מסך:</strong> האתר נבנה באמצעות קוד HTML5 סמנטי תקין והגדרות תיאוריות (ARIA) המאפשרות לקוראי מסך להקריא את התכנים והטפסים בצורה הגיונית ומובנית.
                </li>
                <li>
                  <strong>ניגודיות צבעים:</strong> עיצוב האתר שומר על יחס ניגודיות גבוה בין צבעי הטקסט לצבעי הרקע על מנת לסייע לכבדי ראייה.
                </li>
                <li>
                  <strong>תיאורי תמונות (Alt Text):</strong> כל התמונות החשובות באתר כוללות תיאור טקסטואלי חלופי.
                </li>
                <li>
                  <strong>תאימות לדפדפנים ומערכות הפעלה:</strong> האתר נבדק ונמצא תואם לדפדפנים המובילים (Chrome, Edge, Firefox, Safari) ולמכשירים ניידים ומחשבים אישיים.
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>3. תוסף נגישות (Accessibility Widget)</h2>
              <p>
                באתר מותקן כפתור נגישות צף (♿) המאפשר לגולשים להתאים אישית את תצוגת האתר לפי צרכיהם.
              </p>
              <p>
                באמצעות התוסף ניתן:
              </p>
              <ul style={{ paddingRight: "20px", marginTop: "5px", listStyleType: "disc" }}>
                <li>להגדיל או להקטין את גודל הגופן באתר.</li>
                <li>לשנות את גווני האתר למונוכרום או לניגודיות הפוכה/כהה.</li>
                <li>להדגיש קישורים ותפריטים בקו תחתי בולט.</li>
                <li>לחסום אנימציות או רכיבים נעים.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>4. סייגים לנגישות ופניות בנושא</h2>
              <p>
                למרות מאמצינו להפוך את כלל דפי האתר לנגישים, ייתכן שיתגלו חלקים ספציפיים שטרם הונגשו באופן מלא או שאינם תואמים בצורה מיטבית את הטכנולוגיות המסייעות.
              </p>
              <p>
                אם נתקלתם בקושי כלשהו בניווט או בקריאת המידע באתר, נשמח לקבל את פנייתכם כדי שנוכל לשפר ולתקן את הטעון שיפור.
              </p>
            </section>

            <section style={{ backgroundColor: "var(--secondary-green-light)", padding: "15px", borderRadius: "var(--border-radius-sm)", borderRight: "4px solid var(--primary-gold)" }}>
              <h2 style={{ color: "var(--secondary-green)", marginBottom: "8px", fontWeight: "bold" }}>5. פרטי רכז הנגישות</h2>
              <p>
                לפניות, הצעות שיפור או דיווח על תקלת נגישות, ניתן ליצור קשר ישיר עם רכז הנגישות של העסק:
              </p>
              <ul style={{ listStyleType: "none", padding: 0, marginTop: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <li>👤 <strong>שם רכז הנגישות:</strong> אלי גולדמן</li>
                <li>📞 <strong>טלפון:</strong> <a href="tel:052-609-0930" style={{ color: "var(--accent-terracotta)" }}>052-609-0930</a></li>
                <li>📧 <strong>דואר אלקטרוני:</strong> <a href="mailto:eliinga1206@gmail.com" style={{ color: "var(--accent-terracotta)" }}>eliinga1206@gmail.com</a></li>
              </ul>
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
