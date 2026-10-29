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
      <div>
        אנחנו משתמשים בעוגיות כדי להתאים עבורך את החוויה הטובה ביותר.
        <a href="/privacy">
          קראו עוד במדיניות הפרטיות
        </a>
      </div>
      <button onClick={handleAccept}>
        מאשר/ת
      </button>
    </div>
  );
}
