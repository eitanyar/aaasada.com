"use client";

import React, { useState, useEffect } from "react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  useEffect(() => {
    // Sync settings with body classes
    const body = document.body;
    if (contrast) body.classList.add("accessibility-high-contrast");
    else body.classList.remove("accessibility-high-contrast");

    if (largeText) body.classList.add("accessibility-large-text");
    else body.classList.remove("accessibility-large-text");

    if (underlineLinks) body.classList.add("accessibility-underline-links");
    else body.classList.remove("accessibility-underline-links");

    if (readableFont) body.classList.add("accessibility-readable-font");
    else body.classList.remove("accessibility-readable-font");
  }, [contrast, largeText, underlineLinks, readableFont]);

  const handleReset = () => {
    setContrast(false);
    setLargeText(false);
    setUnderlineLinks(false);
    setReadableFont(false);
  };

  return (
    <div style={{ position: "fixed", bottom: "85px", right: "20px", zIndex: 9999, direction: "rtl" }}>
      {/* Floating Accessibility Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.2rem",
          transition: "transform 0.2s ease",
          padding: 0
        }}
        title="תפריט נגישות"
        aria-label="פתח תפריט נגישות"
      >
        ♿
      </button>

      {/* Accessibility Option Popover Panel */}
      {isOpen && (
        <div style={{
          position: "absolute",
          bottom: "60px",
          right: "0",
          width: "260px",
          backgroundColor: "#fff",
          color: "#333",
          border: "2px solid var(--primary-gold)",
          borderRadius: "var(--border-radius-md)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          fontFamily: "sans-serif"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: "8px" }}>
            <h4 style={{ margin: 0, color: "var(--secondary-green)", fontSize: "1.1rem", fontWeight: "bold" }}>נגישות האתר</h4>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer", padding: "0 5px" }}
            >
              ✕
            </button>
          </div>

          {/* Settings Options */}
          <button
            onClick={() => setContrast(!contrast)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "var(--border-radius-sm)",
              backgroundColor: contrast ? "var(--primary-gold-light)" : "#fff",
              color: "#333",
              textAlign: "right",
              cursor: "pointer",
              fontWeight: contrast ? "bold" : "normal",
              fontSize: "0.95rem"
            }}
          >
            {contrast ? "✓ ניגודיות גבוהה פעילה" : "ניגודיות גבוהה (שחור-לבן)"}
          </button>

          <button
            onClick={() => setLargeText(!largeText)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "var(--border-radius-sm)",
              backgroundColor: largeText ? "var(--primary-gold-light)" : "#fff",
              color: "#333",
              textAlign: "right",
              cursor: "pointer",
              fontWeight: largeText ? "bold" : "normal",
              fontSize: "0.95rem"
            }}
          >
            {largeText ? "✓ גופן מוגדל פעיל" : "הגדלת גופן (טקסט גדול)"}
          </button>

          <button
            onClick={() => setUnderlineLinks(!underlineLinks)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "var(--border-radius-sm)",
              backgroundColor: underlineLinks ? "var(--primary-gold-light)" : "#fff",
              color: "#333",
              textAlign: "right",
              cursor: "pointer",
              fontWeight: underlineLinks ? "bold" : "normal",
              fontSize: "0.95rem"
            }}
          >
            {underlineLinks ? "✓ קו תחתון לקישורים פעיל" : "הדגשת קישורים (קו תחתון)"}
          </button>

          <button
            onClick={() => setReadableFont(!readableFont)}
            style={{
              padding: "8px 12px",
              border: "1px solid #ddd",
              borderRadius: "var(--border-radius-sm)",
              backgroundColor: readableFont ? "var(--primary-gold-light)" : "#fff",
              color: "#333",
              textAlign: "right",
              cursor: "pointer",
              fontWeight: readableFont ? "bold" : "normal",
              fontSize: "0.95rem"
            }}
          >
            {readableFont ? "✓ גופן קריא פעיל" : "מעבר לגופן קריא (Arial)"}
          </button>

          <button
            onClick={handleReset}
            style={{
              padding: "8px 12px",
              border: "none",
              borderRadius: "var(--border-radius-sm)",
              backgroundColor: "var(--retro-terracotta)",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "0.95rem",
              marginTop: "5px"
            }}
          >
            איפוס הגדרות נגישות
          </button>
        </div>
      )}
    </div>
  );
}
