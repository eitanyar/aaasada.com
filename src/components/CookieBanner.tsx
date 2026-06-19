"use client";

import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been granted
    const consent = localStorage.getItem("cookie-consent-approved");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-approved", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-banner">
      <div style={{ lineHeight: "1.5" }}>
        אתר זה משתמש בעוגיות (Cookies) ובכלים של Google Analytics לצורך ניתוח סטטיסטי, שיפור ביצועים והתאמת חוויית הגלישה. 
        בלחיצה על "מאשר/ת" אתם מסכימים למדיניות העוגיות ותנאי השימוש שלנו. 
        <a href="/privacy" style={{ marginRight: "6px" }}>
          קראו עוד במדיניות הפרטיות
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={handleAccept}>
          מאשר/ת
        </button>
      </div>
    </div>
  );
}
