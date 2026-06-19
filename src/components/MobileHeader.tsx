"use client";

import React, { useState, useEffect } from "react";
import { PhoneIcon, WhatsAppIcon, EnvelopeIcon } from "./icons";

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`mobile-header-bar ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Striped Awning Accent */}
      <div className="mobile-awning-strip"></div>
      
      <div className="mobile-header-main">
        {/* Right side: Logo/Seal branding */}
        <a href="/" className="mobile-logo-group" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/images/machpod-kosher.webp" 
            alt="כשרות מחפוד" 
            className="mobile-favicon"
            width={34} 
            height={34} 
            style={{ 
              borderRadius: "50%", 
              border: "1.5px solid var(--primary-gold)", 
              backgroundColor: "#fff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
            }}
          />
          <div className="mobile-logo-text-container">
            <span className="mobile-logo-text">טעם מהודר</span>
            <span className="mobile-logo-sub">קייטרינג בשרי למהדרין</span>
          </div>
        </a>
        
        {/* Left side: Action Buttons and Hamburger */}
        <div className="mobile-header-actions" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Normal state action: compact phone circle button */}
          <a href="tel:072-393-9710" className="mobile-action-btn-normal circle-btn circle-phone" aria-label="חיוג טלפוני">
            <PhoneIcon size={15} />
          </a>
          
          {/* Scrolled state action circular buttons */}
          <div className="mobile-action-circles" style={{ gap: "8px" }}>
            {/* Envelope (directs to contact form) */}
            <a href="/#contact-section" className="circle-btn circle-envelope" aria-label="פנייה בטופס קשר">
              <EnvelopeIcon size={15} />
            </a>
            
            {/* Phone (direct dial) */}
            <a href="tel:072-393-9710" className="circle-btn circle-phone" aria-label="חיוג טלפוני">
              <PhoneIcon size={15} />
            </a>
            
            {/* WhatsApp (opens chat) */}
            <a 
              href="https://wa.me/972523939710?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A7%D7%99%D7%99%D7%98%D7%A8%D7%99%D7%A0%D7%92%20%D7%91%D7%A9%D7%A8%D7%99%20%D7%9כ%D7%A9%D7%A8%20%D7%9l%D7%9e%D7%94%D7%93%D7%A8%D7%99%D7%9f" 
              className="circle-btn circle-whatsapp" 
              aria-label="שיחת וואטסאפ"
            >
              <WhatsAppIcon size={15} />
            </a>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button 
            className={`hamburger-btn ${isMenuOpen ? "open" : ""}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="תפריט ניווט"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-drawer">
          <ul className="mobile-nav-links">
            <li><a href="/" onClick={() => setIsMenuOpen(false)}>דף הבית</a></li>
            <li><a href="/shabbat-chatan" onClick={() => setIsMenuOpen(false)}>שבת חתן</a></li>
            <li><a href="/brit" onClick={() => setIsMenuOpen(false)}>ברית מילה</a></li>
            <li><a href="/bar-mitzvah" onClick={() => setIsMenuOpen(false)}>בר מצווה</a></li>
            <li><a href="/hina" onClick={() => setIsMenuOpen(false)}>חינה</a></li>
            <li><a href="/azkarot" onClick={() => setIsMenuOpen(false)}>אזכרות</a></li>
            <li><a href="/#menu-section" onClick={() => setIsMenuOpen(false)}>התפריט שלנו</a></li>
            <li><a href="/#contact-section" onClick={() => setIsMenuOpen(false)}>צור קשר</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
