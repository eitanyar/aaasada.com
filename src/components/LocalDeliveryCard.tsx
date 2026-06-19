"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface LocalDeliveryCardProps {
  cityName: string;
}

export default function LocalDeliveryCard({ cityName }: LocalDeliveryCardProps) {
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
        border: "1.5px solid var(--border-color)",
        backgroundColor: "var(--bg-warm-sand)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      <h3 style={{ fontFamily: "sans-serif", fontWeight: "700", color: "var(--secondary-green)", margin: 0 }}>
        תנאי משלוח ואספקה ל{cityName}
      </h3>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "6px" }}>
          <span>אזור חלוקה:</span>
          <strong>{cityName} וסביבתה</strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "6px" }}>
          <span>עלות משלוח:</span>
          <strong>ימסר על ידי הנציג בהתאם למיקום וזמן המסירה</strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "6px" }}>
          <span>מינימום הזמנה:</span>
          <strong>30 מנות (אורחים)</strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed var(--border-color)", paddingBottom: "6px" }}>
          <span>טמפרטורה:</span>
          <strong>
            {isShabbatChatan
              ? "מגיע מקורר בשישי בצהריים לשמירה הלכתית על הטריות וחימום קל על הפלטה"
              : "מגיע חם מאוד במארזי קלקר שומרי חום"}
          </strong>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: "2px" }}>
          <span>רמת כשרות:</span>
          <strong>מהודרת - בד"ץ יורה דעה (הרב מחפוד)</strong>
        </li>
      </ul>
      <div style={{ marginTop: "15px" }}>
        <a href="tel:072-393-9710" className="btn btn-secondary" style={{ width: "100%", gap: "8px" }}>
          <span>שיחה להזמנה ישירה</span>
        </a>
      </div>
    </div>
  );
}
