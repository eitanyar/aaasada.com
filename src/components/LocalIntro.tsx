"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface LocalIntroProps {
  cityName: string;
  defaultIntro: string;
}

export default function LocalIntro({ cityName, defaultIntro }: LocalIntroProps) {
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash.toLowerCase());
    const handleHashChange = () => {
      setHash(window.location.hash.toLowerCase());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const eventParam = searchParams.get("event")?.toLowerCase() || "";

  const getIntroText = () => {
    const hasBrit = hash.includes("brit") || eventParam.includes("brit") || eventParam.includes("ברית");
    if (hasBrit) {
      return `חוגגים ברית מילה או בריתה ב${cityName}? אנו מספקים מגשי אוכל בשרי חם, עשיר וכשר למהדרין ב-₪58 למנה בלבד להפקה עצמית קלה וחסכונית בבית או באולם בית הכנסת, בכשרות בד"ץ הרב שלמה מחפוד.`;
    }
    
    const hasHina = hash.includes("hina") || hash.includes("henna") || eventParam.includes("hina") || eventParam.includes("henna") || eventParam.includes("חינה");
    if (hasHina) {
      return `מתכננים חגיגת חינה מסורתית ב${cityName}? תיהנו משפע קולינרי בשרי עשיר, מטעמים אותנטיים מכל הלב ומחיר משתלם של ₪58 למנה בלבד, בכשרות מהודרת של בד"ץ הרב שלמה מחפוד.`;
    }
    
    const hasBarMitzvah = hash.includes("bar-mitzvah") || hash.includes("mitzvah") || eventParam.includes("bar-mitzvah") || eventParam.includes("mitzvah") || eventParam.includes("בר-מצווה") || eventParam.includes("בר מצווה") || eventParam.includes("מצווה");
    if (hasBarMitzvah) {
      return `חוגגים בר מצווה או בת מצווה ב${cityName} בבית או בבית הכנסת? אנו מספקים מגשי אוכל בשרי חם ושופע ב-₪58 למנה. רמת כשרות מהודרת של הרב מחפוד שמכבדת כל אורח.`;
    }
    
    const hasShabbatChatan = hash.includes("shabbat-chatan") || hash.includes("chatan") || eventParam.includes("shabbat-chatan") || eventParam.includes("chatan") || eventParam.includes("שבת-חתן") || eventParam.includes("שבת חתן") || eventParam.includes("חתן");
    if (hasShabbatChatan) {
      return `מארגנים שבת עלייה לתורה או שבת חתן ב${cityName}? האוכל הבשרי שלנו מבושל טרי ומגיע במארזים מותאמים להנחה על פלטת שבת בבית או בבית הכנסת. אנו מספקים את כל המנות כשהן מקוררות בשישי בצהריים כדי לשמור על טריות מרבית ועל כללי ההלכה לחימום בשבת.`;
    }
    
    const hasAzkarot = hash.includes("azkarot") || hash.includes("azkara") || eventParam.includes("azkarot") || eventParam.includes("azkara") || eventParam.includes("אזכרה") || eventParam.includes("אזכרות");
    if (hasAzkarot) {
      return `אנו נספק לכם מגשים חמים של בשר מבושל, אורז וסלטים טריים ישירות לבית האבל או לבית הכנסת ב${cityName}, ברמת כשרות מהודרת של הרב מחפוד שמכבדת כל אורח בשעה הקשה.`;
    }
    
    return defaultIntro;
  };

  return (
    <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--text-dark)" }}>
      {getIntroText()}
    </p>
  );
}
