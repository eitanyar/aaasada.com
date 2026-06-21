"use client";

import React, { useState } from "react";

interface VideoTestimonialProps {
  videoId: string;
  title?: string;
  subTitle?: string;
}

export default function VideoTestimonial({ 
  videoId, 
  title = "אל תסמכו רק על המילה שלנו", 
  subTitle = "צפו במה שיש ללקוחות שלנו לומר" 
}: VideoTestimonialProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // YouTube thumbnail URL (hqdefault is usually safe and exists for all videos)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section id="video-testimonials" className="section" style={{ padding: "var(--spacing-md) 0", marginTop: "15px" }}>
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", marginBottom: "5px" }}>{title}</h2>
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "20px" }}>{subTitle}</p>
        
        <div 
          style={{ 
            position: "relative", 
            width: "100%", 
            paddingBottom: "56.25%", /* 16:9 Aspect Ratio */
            borderRadius: "var(--border-radius-md)",
            overflow: "hidden",
            boxShadow: "var(--shadow-medium)",
            backgroundColor: "#000",
            cursor: "pointer"
          }}
          onClick={() => setIsLoaded(true)}
        >
          {!isLoaded ? (
            <>
              {/* Thumbnail Image */}
              <img 
                src={thumbnailUrl} 
                alt="סרטון המלצות טעם מהודר" 
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.85,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "0.85"}
              />
              
              {/* Play Button Overlay */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "70px",
                height: "50px",
                backgroundColor: "rgba(220, 38, 38, 0.9)", // YouTube Red
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                transition: "transform 0.2s ease"
              }}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderLeft: "20px solid white",
                  marginLeft: "5px" // optical centering
                }}></div>
              </div>
            </>
          ) : (
            /* Actual Iframe loaded only after click */
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
