"use client";

import React, { useState } from "react";
import MenuBuilder from "./MenuBuilder";
import { AZKAROT_MENU_43, CATERING_MENU } from "../data/catering-content";

type TierId = "basic" | "rich";

interface TierConfig {
  id: TierId;
  label: string;
  price: number;
  minGuests: number;
  spec: string;
  isPromo?: boolean;
}

const TIERS: TierConfig[] = [
  {
    id: "basic",
    label: "תפריט 43",
    price: 43,
    minGuests: 40,
    spec: "5 סלטים · 2 תוספות · 3 מנות עיקריות",
    isPromo: true,
  },
  {
    id: "rich",
    label: "תפריט 58 · מורחב",
    price: 58,
    minGuests: 30,
    spec: "7 סלטים · 3 תוספות · כולל בשר בקר",
  },
];

export default function AzkarotMenuTiers() {
  const [activeTier, setActiveTier] = useState<TierId>("basic");
  const tier = TIERS.find((t) => t.id === activeTier)!;

  return (
    <div>
      {/* Tier switcher */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        {TIERS.map((t) => {
          const isActive = t.id === activeTier;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTier(t.id)}
              style={{
                textAlign: "right",
                cursor: "pointer",
                padding: "14px 16px",
                borderRadius: "var(--border-radius-md)",
                border: isActive ? "2px solid var(--primary-gold)" : "1.5px solid var(--border-color)",
                backgroundColor: isActive ? "var(--primary-gold-light)" : "#ffffff",
                boxShadow: isActive ? "0 4px 14px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontWeight: 700, color: "var(--secondary-green)", fontFamily: "sans-serif" }}>
                  {t.label}
                </span>
                {t.isPromo && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--primary-gold-hover)",
                      backgroundColor: "rgba(210, 157, 56, 0.15)",
                      border: "1px solid rgba(210, 157, 56, 0.4)",
                      borderRadius: "20px",
                      padding: "2px 9px",
                    }}
                  >
                    מבצע
                  </span>
                )}
              </div>
              <div style={{ fontWeight: 700, color: "var(--secondary-green)", fontSize: "1.1rem" }}>
                ₪{t.price} <span style={{ fontWeight: 400, fontSize: "0.85rem" }}>למנה</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dark)", opacity: 0.75, marginTop: "2px" }}>
                {t.spec}
              </div>
            </button>
          );
        })}
      </div>

      {tier.isPromo && (
        <div
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "var(--secondary-green)",
            backgroundColor: "var(--primary-gold-light)",
            border: "1px solid rgba(210, 157, 56, 0.35)",
            borderRadius: "var(--border-radius-sm)",
            padding: "10px 14px",
            marginBottom: "var(--spacing-md)",
          }}
        >
          מבצע — תפריט אזכרה מלא ומכובד ב-₪{tier.price} למנה · החל מ-{tier.minGuests} מנות
        </div>
      )}

      <MenuBuilder
        key={tier.id}
        menuData={tier.id === "basic" ? AZKAROT_MENU_43 : CATERING_MENU}
        initialBasePrice={tier.price}
        initialGuests={tier.minGuests}
        minGuests={tier.minGuests}
        showWhatsApp={false}
        showEventTypeField={false}
        combinedTimingField={true}
        formIntroText="בוחרים מנות, משאירים שם וטלפון — ונציג שלנו יחזור אליכם בהקדם לתיאום, כולל פרטי המשלוח. אנחנו כאן כדי להקל עליכם."
        ctaText="השאירו פרטים — נחזור אליכם בהקדם"
        trustText="הפרטים משמשים לתיאום ההזמנה בלבד. איננו שולחים דיוור."
        contactPhoneDisplay="052-6090930"
        contactPhoneHref="tel:0526090930"
      />
    </div>
  );
}
