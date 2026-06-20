"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PhoneIcon } from "./icons";

interface LocalDeliveryCardProps {
  cityName?: string;
  isShabbatChatanOverride?: boolean;
  priceText?: string;
}

export default function LocalDeliveryCard({ 
  cityName = "המרכז, השרון והשפלה", 
  isShabbatChatanOverride = false,
  priceText = "₪58 בלבד למנה בשרית עשירה"
}: LocalDeliveryCardProps) {
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
  const isShabbatChatan =
    isShabbatChatanOverride ||
    hash.includes("shabbat-chatan") ||
    hash.includes("chatan") ||
    eventParam.includes("shabbat-chatan") ||
    eventParam.includes("chatan") ||
    eventParam.includes("שבת-חתן") ||
    eventParam.includes("שבת חתן") ||
    eventParam.includes("חתן");

  return (
    <div
      className="card"
      style={{
        border: "2px solid var(--primary-gold)",
        backgroundColor: "var(--bg-warm-sand)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        justifyContent: "center",
        maxWidth: "600px",
        margin: "0 auto",
        boxShadow: "var(--shadow-gold)",
        padding: "var(--spacing-md) var(--spacing-lg)",
        textAlign: "right"
      }}
    >
      <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", color: "var(--secondary-green)", margin: 0, textAlign: "center", borderBottom: "2.5px solid var(--primary-gold)", paddingBottom: "10px" }}>
        📋 פרטי הזמנה ואספקת קייטרינג
      </h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0, margin: 0 }}>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "8px" }}>
          <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>כשרות מהודרת:</span>
          <strong style={{ color: "var(--secondary-green)" }}>בד"ץ יורה דעה (הרב שלמה מחפוד)</strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "8px" }}>
          <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>מחיר המנה:</span>
          <strong style={{ color: "var(--secondary-green)" }}>{priceText}</strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "8px" }}>
          <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>מינימום הזמנה:</span>
          <strong style={{ color: "var(--secondary-green)" }}>30 מנות (אורחים)</strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "8px" }}>
          <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>אזור אספקה:</span>
          <strong style={{ color: "var(--secondary-green)" }}>{cityName} וסביבתה</strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: "2px" }}>
          <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>טמפרטורת הגעה:</span>
          <strong style={{ color: "var(--accent-terracotta)", textAlign: "left", maxWidth: "65%" }}>
            {isShabbatChatan
              ? "מגיע מקורר בשישי בצהריים לשמירה הלכתית על הטריות וחימום קל על הפלטה"
              : "מגיע חם מאוד במארזי קלקר שומרי חום מוכן להגשה"}
          </strong>
        </li>
      </ul>
      <div style={{ marginTop: "5px" }}>
        <a href="tel:052-609-0930" className="btn btn-secondary" style={{ width: "100%", gap: "8px", justifyContent: "center" }}>
          <PhoneIcon size={18} />
          <span>שיחה לתיאום והזמנה מהירה: 052-609-0930</span>
        </a>
      </div>
    </div>
  );
}
