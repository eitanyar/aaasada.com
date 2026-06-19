"use client";

import React, { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/assado_763x447_webp.webp",
    alt: "אסאדו בקר בבישול ארוך",
    title: "אסאדו בקר נימוח בבישול ארוך",
    category: "mains"
  },
  {
    src: "/images/roastbeef_763x447_webp.webp",
    alt: "צלי בקר רך ברוטב פטריות",
    title: "צלי בקר עסיסי ברוטב פטריות",
    category: "mains"
  },
  {
    src: "/images/salmon_763x447_webp.webp",
    alt: "דג סלמון אפוי בתנור",
    title: "פילה סלמון מובחר בעשבי תיבול",
    category: "mains"
  },
  {
    src: "/images/kebab_763x447_webp.webp",
    alt: "קבב בשרי על האש",
    title: "קבב ביתי ים תיכוני על הגריל",
    category: "mains"
  },
  {
    src: "/images/shitzel_763x447_webp.webp",
    alt: "שניצל ביתי פריך",
    title: "שניצל זהוב ופריך עם שומשום",
    category: "mains"
  },
  {
    src: "/images/salads_763x447.webp",
    alt: "מגוון סלטים טריים של טעם מהודר",
    title: "סלטים ביתיים טריים יום-יום",
    category: "salads"
  },
  {
    src: "/images/plate4_final_4-scaled.webp",
    alt: "מגשי אירוח בשריים מוכנים",
    title: "מגשי אוכל מוכן חגיגיים",
    category: "trays"
  },
  {
    src: "/images/plate3_final_3-scaled.webp",
    alt: "מגש סעודה מעוצב של טעם מהודר",
    title: "אירוח משפחתי נדיב ושופע",
    category: "trays"
  },
  {
    src: "/images/shabat_hatan-scaled.webp",
    alt: "עריכת שולחן לשבת חתן",
    title: "סידור שולחן חגיגי לשבת חתן",
    category: "events"
  },
  {
    src: "/images/brit_at_home-scaled.webp",
    alt: "אירוע ברית מילה בבית",
    title: "הפקת ברית מילה חמה בבית",
    category: "events"
  },
  {
    src: "/images/home-hina-scaled.webp",
    alt: "סידור שולחן לחינה מרוקאית",
    title: "אירוע חינה צבעוני ושמח",
    category: "events"
  },
  {
    src: "/images/bar_mitzvah.webp",
    alt: "אירוע בר מצווה כשר למהדרין",
    title: "סעודת מצווה חגיגית לבר מצווה",
    category: "events"
  }
];

export default function ImageGallery() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredImages = activeTab === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  const tabs = [
    { id: "all", label: "הכל" },
    { id: "mains", label: "עיקריות" },
    { id: "salads", label: "סלטים" },
    { id: "trays", label: "מגשי אירוח" },
    { id: "events", label: "אירועים בשטח" }
  ];

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Category Tabs */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "10px", 
        marginBottom: "30px",
        flexWrap: "wrap"
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 24px",
              borderRadius: "50px",
              border: "1.5px solid var(--primary-gold)",
              backgroundColor: activeTab === tab.id ? "var(--secondary-green)" : "#ffffff",
              color: activeTab === tab.id ? "#ffffff" : "var(--secondary-green)",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all var(--transition-fast)",
              fontFamily: "inherit"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px"
      }}>
        {filteredImages.map((img, idx) => (
          <div 
            key={idx} 
            className="card" 
            style={{
              padding: 0,
              overflow: "hidden",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-md)",
              backgroundColor: "#ffffff",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ 
              position: "relative", 
              width: "100%", 
              height: "200px", 
              overflow: "hidden",
              backgroundColor: "#f1f5f9"
            }}>
              {/* Using standard img tags since Next.js image requires configuring domains for static export */}
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform var(--transition-normal)"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
            <div style={{ padding: "15px", textAlign: "center" }}>
              <h4 style={{ 
                margin: 0, 
                fontSize: "1.1rem", 
                color: "var(--secondary-green)",
                fontFamily: "Frank Ruhl Libre, serif",
                fontWeight: "bold"
              }}>
                {img.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
