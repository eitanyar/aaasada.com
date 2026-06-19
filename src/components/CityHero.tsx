"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { StarIcon, PhoneIcon } from "./icons";

interface CityHeroProps {
  cityName: string;
  regionTitle: string;
  defaultIntro: string;
}

export default function CityHero({ cityName, regionTitle, defaultIntro }: CityHeroProps) {
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.toLowerCase());
    const handleHashChange = () => {
      setHash(window.location.hash.toLowerCase());
      
      const newHash = window.location.hash;
      if (newHash) {
        const element = document.querySelector(newHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    // Initial scroll on load
    const initScroll = () => {
      const currentHash = window.location.hash;
      if (currentHash) {
        const element = document.querySelector(currentHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }

      const eventParam = searchParams.get("event")?.toLowerCase();
      if (eventParam) {
        const elementId = eventParam === "brit" || eventParam === "ברית" ? "#brit" : 
                            eventParam === "hina" || eventParam === "חינה" ? "#hina" : 
                            eventParam === "bar-mitzvah" || eventParam === "מצווה" || eventParam === "בר מצווה" || eventParam === "בר-מצווה" ? "#bar-mitzvah" : 
                            eventParam === "shabbat-chatan" || eventParam === "חתן" || eventParam === "שבת-חתן" || eventParam === "שבת חתן" ? "#shabbat-chatan" : 
                            eventParam === "azkarot" || eventParam === "אזכרה" || eventParam === "אזכרות" ? "#azkarot" : null;
        if (elementId) {
          const element = document.querySelector(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };
    setTimeout(initScroll, 400);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [searchParams]);

  const eventParam = searchParams.get("event")?.toLowerCase() || "";

  const getService = () => {
    const hasBrit = hash.includes("brit") || eventParam.includes("brit") || eventParam.includes("ברית");
    if (hasBrit) return "brit";
    
    const hasHina = hash.includes("hina") || hash.includes("henna") || eventParam.includes("hina") || eventParam.includes("henna") || eventParam.includes("חינה");
    if (hasHina) return "hina";
    
    const hasBarMitzvah = hash.includes("bar-mitzvah") || hash.includes("mitzvah") || eventParam.includes("bar-mitzvah") || eventParam.includes("mitzvah") || eventParam.includes("בר-מצווה") || eventParam.includes("בר מצווה") || eventParam.includes("מצווה");
    if (hasBarMitzvah) return "bar-mitzvah";
    
    const hasShabbatChatan = hash.includes("shabbat-chatan") || hash.includes("chatan") || eventParam.includes("shabbat-chatan") || eventParam.includes("chatan") || eventParam.includes("שבת-חתן") || eventParam.includes("שבת חתן") || eventParam.includes("חתן");
    if (hasShabbatChatan) return "shabbat-chatan";
    
    const hasAzkarot = hash.includes("azkarot") || hash.includes("azkara") || eventParam.includes("azkarot") || eventParam.includes("azkara") || eventParam.includes("אזכרה") || eventParam.includes("אזכרות");
    if (hasAzkarot) return "azkarot";
    
    return null;
  };

  const service = getService();

  // Content map based on service
  const getContent = () => {
    switch (service) {
      case "brit":
        return {
          title: `קייטרינג לברית מילה ב${cityName}`,
          intro: `חוגגים ברית מילה או בריתה ב${cityName}? קבלו משלוח אוכל מוכן בשרי חם, עשיר וכשר למהדרין ב-₪58 למנה בלבד. פתרון מושלם ומכובד להפקה עצמית קלה וחסכונית בהשגחת בד"ץ הרב שלמה מחפוד.`,
          badge: "קייטרינג לברית מילה"
        };
      case "hina":
        return {
          title: `קייטרינג לחינה ב${cityName}`,
          intro: `מתכננים חגיגת חינה מסורתית ב${cityName}? תיהנו משפע קולינרי בשרי עשיר, מטעמים אותנטיים מכל הלב ומחיר משתלם של ₪58 למנה בלבד. כשר למהדרין גלאט בהשגחת בד"ץ הרב מחפוד.`,
          badge: "קייטרינג לחינה מסורתית"
        };
      case "bar-mitzvah":
        return {
          title: `קייטרינג לבר מצווה ב${cityName}`,
          intro: `חוגגים בר מצווה או בת מצווה ב${cityName} בבית או בבית הכנסת? אנו מספקים מגשי אוכל בשרי חם ושופע ב-₪58 למנה. רמת כשרות מהודרת של הרב מחפוד שמכבדת כל אורח.`,
          badge: "קייטרינג לבר/בת מצווה"
        };
      case "shabbat-chatan":
        return {
          title: `קייטרינג לשבת חתן ב${cityName}`,
          intro: `מתכננים שבת עלייה לתורה ב${cityName}? האוכל הבשרי החם והעשיר שלנו מבושל טרי ומגיע במארזים מותאמים להנחה קלה על פלטת שבת בבית או בבית הכנסת, תוך שמירה על עסיסיות הבשרים.`,
          badge: "קייטרינג לשבת חתן"
        };
      case "azkarot":
        return {
          title: `קייטרינג לאזכרות וסעודות מצווה ב${cityName}`,
          intro: `אנו נספק לכם מגשים חמים של בשר מבושל, אורז וסלטים טריים ישירות לבית האבל או לבית הכנסת ב${cityName}, ברמת כשרות מהודרת של הרב מחפוד שמכבדת כל אורח בשעה הקשה.`,
          badge: "קייטרינג לאזכרה ושבעה"
        };
      default:
        return {
          title: `קייטרינג בשרי ואוכל מוכן ב${cityName}`,
          intro: defaultIntro,
          badge: `בד"ץ יורה דעה הרב מחפוד • אזור שירות ${regionTitle}`
        };
    }
  };

  const content = getContent();

  const getBreadcrumbs = () => {
    const base = <a href="/" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>ראשי</a>;
    const separator = <span style={{ margin: "0 6px" }}>&gt;</span>;
    
    switch (service) {
      case "brit":
        return (
          <>
            {base}
            {separator}
            <a href="/brit" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לברית מילה</a>
            {separator}
            <span style={{ color: "var(--primary-gold)" }}>ברית מילה ב{cityName}</span>
          </>
        );
      case "hina":
        return (
          <>
            {base}
            {separator}
            <a href="/hina" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לחינה</a>
            {separator}
            <span style={{ color: "var(--primary-gold)" }}>חינה ב{cityName}</span>
          </>
        );
      case "bar-mitzvah":
        return (
          <>
            {base}
            {separator}
            <a href="/bar-mitzvah" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לבר מצווה</a>
            {separator}
            <span style={{ color: "var(--primary-gold)" }}>בר מצווה ב{cityName}</span>
          </>
        );
      case "shabbat-chatan":
        return (
          <>
            {base}
            {separator}
            <a href="/shabbat-chatan" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לשבת חתן</a>
            {separator}
            <span style={{ color: "var(--primary-gold)" }}>שבת חתן ב{cityName}</span>
          </>
        );
      case "azkarot":
        return (
          <>
            {base}
            {separator}
            <a href="/azkarot" style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}>קייטרינג לאזכרות</a>
            {separator}
            <span style={{ color: "var(--primary-gold)" }}>אזכרה ב{cityName}</span>
          </>
        );
      default:
        return (
          <>
            {base}
            {separator}
            <span style={{ color: "var(--primary-gold)" }}>קייטרינג ב{cityName}</span>
          </>
        );
    }
  };

  return (
    <section className="hero-section">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* SEO Breadcrumbs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.9rem",
          color: "rgba(255, 255, 255, 0.6)",
          marginBottom: "20px",
          fontFamily: "sans-serif"
        }}>
          {getBreadcrumbs()}
        </div>

        <div className="badge-kosher" style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          color: "var(--primary-gold)",
          border: "1px solid var(--primary-gold)",
          marginBottom: "15px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <StarIcon size={14} style={{ color: "var(--primary-gold)" }} />
          <span>{content.badge}</span>
        </div>
        
        <h1 style={{ 
          color: "#ffffff", 
          fontSize: "clamp(1.8rem, 5vw, 3.2rem)", 
          fontFamily: "Frank Ruhl Libre, serif",
          fontWeight: 900,
          lineHeight: 1.2,
          marginBottom: "15px"
        }}>
          {content.title}
        </h1>
        
        <p style={{ 
          color: "#e2e8f0", 
          fontSize: "1.2rem", 
          maxWidth: "800px", 
          margin: "15px auto 0 auto",
          lineHeight: "1.7"
        }}>
          {content.intro}
        </p>

        {/* Above-The-Fold (ATF) Jump Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginTop: "25px" }}>
          <a href="#menu-section" className="btn btn-primary" style={{ padding: "12px 30px", fontSize: "1.1rem" }}>
            <span>להרכבת תפריט ב-₪58</span>
          </a>
          <a href="tel:052-609-0930" className="btn btn-outline" style={{
            color: "#ffffff",
            borderColor: "#ffffff",
            padding: "12px 30px",
            fontSize: "1.1rem",
            backgroundColor: "rgba(255,255,255,0.05)",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <PhoneIcon size={18} />
            <span>052-609-0930</span>
          </a>
        </div>
      </div>
    </section>
  );
}
