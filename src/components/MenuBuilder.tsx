"use client";

import React, { useState } from "react";
import { CATERING_MENU, MenuCategory, Dish } from "../data/catering-content";

interface MenuBuilderProps {
  menuData?: MenuCategory[];
  initialBasePrice?: number;
  initialGuests?: number;
}

const getCategoryImageUrl = (categoryId: string): string => {
  switch (categoryId) {
    case "salads":
      return "/images/salads_763x447.webp";
    case "sides":
      return "/images/above_763x447-1.webp";
    case "mains":
      return "/images/asado_763x447_webp.webp";
    case "intermediates":
      return "/images/salmon_763x447_webp.webp";
    case "premiumIntermediates":
      return "/images/kebab_763x447_webp.webp";
    case "desserts":
      return "/images/dessert_763x447_webp.webp";
    default:
      return "/images/asado_763x447_webp.webp";
  }
};

export default function MenuBuilder({ menuData = CATERING_MENU, initialBasePrice = 58, initialGuests = 30 }: MenuBuilderProps) {
  const [guests, setGuests] = useState<number>(initialGuests);
  const [selections, setSelections] = useState<Record<string, string[]>>({
    salads: [],
    sides: [],
    mains: [],
    intermediates: [],
    premiumIntermediates: [],
    desserts: [],
  });

  // Checkout Form States - Defaulting to "form" for kosher phone support
  const [checkoutMethod, setCheckoutMethod] = useState<"whatsapp" | "form">("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    email_confirm: "", // honeypot spam protection
  });
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  // Selection limits
  const LIMITS = menuData.reduce((acc, cat) => {
    acc[cat.id] = cat.limit;
    return acc;
  }, {} as Record<string, number>);

  const renderCategoryName = (name: string) => {
    const regex = /(\d+)/g;
    const parts = name.split(regex);
    return parts.map((part, index) => {
      if (part.match(/^\d+$/)) {
        return (
          <span 
            key={index} 
            style={{ 
              color: "var(--primary-gold)", 
              fontWeight: "900", 
              fontSize: "1.4rem",
              margin: "0 4px",
              display: "inline-block"
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const basePricePerGuest = initialBasePrice;

  // Find dish by ID helper
  const findDish = (id: string): Dish | undefined => {
    for (const cat of menuData) {
      const found = cat.options.find((d) => d.id === id);
      if (found) return found;
    }
    return undefined;
  };

  // Handle dish selection change
  const handleToggle = (categoryId: string, dishId: string) => {
    const limit = LIMITS[categoryId] || 99;
    setSelections((prev) => {
      const current = prev[categoryId] || [];
      const isChecked = current.includes(dishId);
      if (isChecked) {
        return {
          ...prev,
          [categoryId]: current.filter((id) => id !== dishId),
        };
      } else {
        if (current.length < limit) {
          return {
            ...prev,
            [categoryId]: [...current, dishId],
          };
        }
      }
      return prev;
    });
  };

  // Calculations
  const isGuestCountValid = guests >= 30;
  const basePrice = guests * basePricePerGuest;
  
  let extraPrice = 0;
  let maxIntermediatePrice = 0;
  let maxMainPrice = 0;

  Object.entries(selections).forEach(([catId, ids]) => {
    ids.forEach((id) => {
      const dish = findDish(id);
      if (dish && dish.premiumPrice) {
        if (dish.pricePerGuest) {
          if (catId === "intermediates" || catId === "premiumIntermediates") {
            if (dish.premiumPrice > maxIntermediatePrice) maxIntermediatePrice = dish.premiumPrice;
          } else if (catId === "mains") {
            if (dish.premiumPrice > maxMainPrice) maxMainPrice = dish.premiumPrice;
          } else {
            // Desserts / other stackable
            extraPrice += dish.premiumPrice * guests;
          }
        } else {
          // Flat rate items
          extraPrice += dish.premiumPrice;
        }
      }
    });
  });

  extraPrice += maxIntermediatePrice * guests;
  extraPrice += maxMainPrice * guests;

  const totalPrice = basePrice + extraPrice;
  const hasSelectedMains = (selections.mains || []).length > 0;
  const canSubmit = isGuestCountValid && hasSelectedMains;

  // Build the WhatsApp message content
  const generateWhatsAppMessage = () => {
    let text = "×©×œ×•×! ×¨×¦×™×ª×™ ×œ×§×‘×œ ×”×¦×¢×ª ×ž×—×™×¨ ×œ×§×™×™×˜×¨×™× ×’ ×‘×©×¨×™ ×˜×¢× ×ž×”×•×“×¨.\n";
    text += `×›×ž×•×ª ××•×¨×—×™×: ${guests} ××™×©\n`;
    text += "×¡×•×’ ×ª×¤×¨×™×˜: ×ª×¤×¨×™×˜ ×‘×¡×™×¡ â‚ª58 ×œ×ž× ×”\n\n";

    menuData.forEach((category) => {
      const chosenIds = selections[category.id] || [];
      const chosenDishes = chosenIds.map(id => findDish(id)).filter(Boolean) as Dish[];
      if (chosenDishes.length > 0) {
        text += `${category.name.split(" (")[0]}:\n`;
        chosenDishes.forEach((dish) => {
          if (dish.premiumPrice) {
            text += `- ${dish.name} (×©×“×¨×•×’ +â‚ª${dish.premiumPrice}${dish.pricePerGuest ? " ×œ×ž× ×”" : ""})\n`;
          } else {
            text += `- ${dish.name}\n`;
          }
        });
        text += "\n";
      }
    });

    text += `ðŸ’° ×¡×”"×› ×ž×©×•×¢×¨ ×œ×”×–×ž× ×”: â‚ª${totalPrice.toLocaleString()} (×œ× ×›×•×œ×œ ×“×ž×™ ×ž×©×œ×•×— ×©×™×—×•×©×‘×• ×‘× ×¤×¨×“).\n`;
    text += "× ×©×ž×— ×× ×ª×—×–×¨×• ××œ×™×™ ×‘×”×§×“× ×œ×¦×•×¨×š ×ª×™××•× ×•×¡×’×™×¨×”!";

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const url = `https://wa.me/972526090930?text=${generateWhatsAppMessage()}`;
    window.open(url, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !formData.name || !formData.phone || !privacyAccepted || isSubmitting) return;

    // Honeypot spam protection
    if (formData.email_confirm) {
      console.warn("Spam bot submission blocked.");
      setIsSubmitted(true); // Mock success
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // Build human readable list of selections for email message body
    let selectionsText = "";
    menuData.forEach((category) => {
      const chosenIds = selections[category.id] || [];
      const chosenDishes = chosenIds.map(id => findDish(id)).filter(Boolean) as Dish[];
      if (chosenDishes.length > 0) {
        selectionsText += `${category.name.split(" (")[0]}:\n`;
        chosenDishes.forEach((dish) => {
          if (dish.premiumPrice) {
            selectionsText += `- ${dish.name} (×©×“×¨×•×’ +â‚ª${dish.premiumPrice}${dish.pricePerGuest ? " ×œ×ž× ×”" : ""})\n`;
          } else {
            selectionsText += `- ${dish.name}\n`;
          }
        });
        selectionsText += "\n";
      }
    });

    const fullMessage = `
×¤× ×™×™×” ×—×“×©×” ×œ×”×¦×¢×ª ×ž×—×™×¨ ×¢×‘×•×¨ ×ª×¤×¨×™×˜ ×ž×•×¨×›×‘:

ðŸ‘¤ ×©× ×ž×œ×: ${formData.name}
ðŸ“ž ×˜×œ×¤×•×Ÿ: ${formData.phone}
ðŸŽ‰ ×¡×•×’ ×”××™×¨×•×¢: ${formData.eventType || "×œ× ×¦×•×™×Ÿ"}
ðŸ“… ×ª××¨×™×š: ${formData.eventDate || "×œ× ×¦×•×™×Ÿ"}
â° ×©×¢×”: ${formData.eventTime || "×œ× ×¦×•×™×Ÿ"}
ðŸ‘¥ ×›×ž×•×ª ××•×¨×—×™×: ${guests} ××™×©

ðŸ½ï¸ ×¤×™×¨×•×˜ ×”×ž× ×•×ª ×©× ×‘×—×¨×•:
${selectionsText}

ðŸ’° ×¡×›×•× ×ž×©×•×¢×¨ ×œ×ª×©×œ×•×: â‚ª${totalPrice.toLocaleString()} (×œ× ×›×•×œ×œ ×“×ž×™ ×ž×©×œ×•×—)
    `;

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          subject: `×”×¦×¢×ª ×ž×—×™×¨ ×—×“×©×” ×œ×§×™×™×˜×¨×™× ×’ - ${formData.name}`,
          message: fullMessage,
          email_confirm: formData.email_confirm,
        }),
      });
      
      const result = await response.json();
      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || "×©×’×™××” ×‘×©×œ×™×—×ª ×”×˜×•×¤×¡. ×× × × ×¡×• ×©×•×‘ ××• ×”×ª×§×©×¨×• ×™×©×™×¨×•×ª.");
      }
    } catch (err) {
      console.error("Error submitting lead:", err);
      // Fallback for local simulation if /api/submit does not exist (e.g. Next.js local dev port 3000)
      if (process.env.NODE_ENV === "development") {
        console.log("Lead Submitted (Local Dev Fallback Simulation):", {
          guests,
          selections,
          totalPrice,
          ...formData,
          fullMessage
        });
        setTimeout(() => {
          setIsSubmitted(true);
          setIsSubmitting(false);
        }, 800);
        return;
      }
      setSubmitError("×©×’×™××ª ×ª×§×©×•×¨×ª ×¢× ×”×©×¨×ª. ×× × ×•×“××• ×©××ª× ×ž×—×•×‘×¨×™× ×œ××™× ×˜×¨× ×˜ ×•× ×¡×• ×©×•×‘.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      eventType: "",
      eventDate: "",
      eventTime: "",
      email_confirm: "",
    });
  };

  return (
    <div className="builder-container" id="menu-builder-app">
      {/* Selection Area */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)" }}>
        {/* Step 1: Guest Counter */}
        <div className="card" style={{ borderRight: "4px solid var(--primary-gold)" }}>
          <h3 style={{ fontFamily: "sans-serif", fontWeight: "600", color: "var(--secondary-green)", marginBottom: "10px" }}>
            1. ×›×ž×•×ª ×”××•×¨×—×™× ×©×œ×›×
          </h3>
          <p style={{ fontSize: "0.95rem", marginBottom: "12px" }}>
            ×ž×™× ×™×ž×•× ×”×–×ž× ×” ×œ×ž×©×œ×•×— ××•×›×œ ×ž×•×›×Ÿ: <strong>30 ××™×©</strong>
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              className="btn btn-outline"
              style={{ width: "40px", height: "40px", padding: 0 }}
              onClick={() => setGuests((g) => Math.max(30, g - 5))}
            >
              -
            </button>
            <input
              type="number"
              min={30}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
              aria-label="×›×ž×•×ª ××•×¨×—×™×"
              style={{
                width: "80px",
                height: "40px",
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "var(--border-radius-sm)",
                border: "1px solid var(--border-color)",
              }}
            />
            <button
              type="button"
              className="btn btn-outline"
              style={{ width: "40px", height: "40px", padding: 0 }}
              onClick={() => setGuests((g) => g + 5)}
            >
              +
            </button>
          </div>
          {!isGuestCountValid && (
            <div style={{ color: "var(--accent-terracotta)", marginTop: "10px", fontWeight: "600", fontSize: "0.9rem" }}>
              âš ï¸ ×œ×ª×©×•×ž×ª ×œ×‘×›×: ×ž×™× ×™×ž×•× ×”×–×ž× ×” ×œ×§×™×™×˜×¨×™× ×’ ×ž×•×›×Ÿ ×”×•× 30 ××•×¨×—×™×.
            </div>
          )}
        </div>

        {/* Step 2: Food Categories Selection */}
        {menuData.map((category) => {
          const isUnlimited = LIMITS[category.id] === 99;
          const currentSelection = selections[category.id] || [];
          const reachedLimit = !isUnlimited && currentSelection.length >= LIMITS[category.id];
          const bannerImg = getCategoryImageUrl(category.id);

          return (
            <div 
              key={category.id} 
              className="card" 
              style={{ 
                padding: "0 0 var(--spacing-md) 0", 
                overflow: "hidden" 
              }}
            >
              {/* Category Header Slim Banner */}
              <div 
                style={{
                  height: "80px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 var(--spacing-md)",
                  marginBottom: "var(--spacing-md)",
                  borderBottom: "2px solid var(--primary-gold)",
                  zIndex: 1
                }}
              >
                {/* Lazy Loaded Banner Image */}
                <img
                  src={bannerImg}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2
                  }}
                />
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to left, rgba(30, 45, 20, 0.95) 45%, rgba(30, 45, 20, 0.45) 100%)",
                    zIndex: -1
                  }}
                />
                <h3 style={{ margin: 0, fontFamily: "sans-serif", fontWeight: "700", color: "#ffffff", fontSize: "1.2rem", textShadow: "1px 1px 3px rgba(0,0,0,0.5)", position: "relative", zIndex: 2 }}>
                  {renderCategoryName(category.name)}
                </h3>
                {!isUnlimited && (
                  <span style={{
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    backgroundColor: reachedLimit ? "var(--secondary-green)" : "var(--primary-gold)",
                    color: reachedLimit ? "#ffffff" : "#1e392a",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                    position: "relative",
                    zIndex: 2
                  }}>
                    × ×‘×—×¨×• {currentSelection.length} ×ž×ª×•×š {LIMITS[category.id]}
                  </span>
                )}
              </div>

              {/* Options Grid container with padding */}
              <div style={{ padding: "0 var(--spacing-md)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "12px" }}>
                  {category.options.map((dish) => {
                    const isChecked = currentSelection.includes(dish.id);
                    const isDisable = !isUnlimited && !isChecked && reachedLimit;

                    return (
                      <div
                        key={dish.id}
                        className="dish-option"
                        style={{
                          border: isChecked ? "1.5px solid var(--secondary-green)" : "1px solid var(--border-color)",
                          backgroundColor: isChecked ? "var(--secondary-green-light)" : "transparent",
                          opacity: isDisable ? 0.6 : 1,
                        }}
                        onClick={() => !isDisable && handleToggle(category.id, dish.id)}
                      >
                        <input
                          type="checkbox"
                          aria-label={dish.name}
                          checked={isChecked}
                          disabled={isDisable}
                          onChange={() => {}} // handled by parent onClick
                        />
                        <div className="dish-details">
                          <span className="dish-title">
                            {dish.name}
                            {dish.isPremium && (
                              <strong style={{ color: "var(--accent-terracotta)", marginRight: "6px" }}>
                                (+â‚ª{dish.premiumPrice}{dish.pricePerGuest ? " ×œ×ž× ×”" : ""})
                              </strong>
                            )}
                          </span>
                          <span className="dish-desc">{dish.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Sidebar */}
      <div>
        <div className="summary-sidebar">
          <h3 style={{ fontSize: "1.4rem", marginBottom: "15px", fontFamily: "sans-serif" }}>×¡×™×›×•× ×”×”×–×ž× ×” ×©×œ×›×</h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "15px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>×›×ž×•×ª ×ž× ×•×ª:</span>
              <strong>{guests} ××•×¨×—×™×</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>×ž×—×™×¨ ×‘×¡×™×¡ ×œ×ž× ×”:</span>
              <strong>â‚ª{basePricePerGuest}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
              <span>××•×›×œ ×ž×•×›×Ÿ (×‘×¡×™×¡):</span>
              <strong>â‚ª{basePrice.toLocaleString()}</strong>
            </div>

            {extraPrice > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
                <span>×©×“×¨×•×’×™× ×•×ª×•×¡×¤×•×ª:</span>
                <strong>â‚ª{extraPrice.toLocaleString()}</strong>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.3rem", padding: "10px 0", color: "var(--primary-gold)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span>×¡×”"×› ×ž×©×•×¢×¨ ×œ×”×–×ž× ×”:</span>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: "600",
                  color: "#f59e0b",
                  backgroundColor: "rgba(245,158,11,0.12)",
                  border: "1px solid rgba(245,158,11,0.35)",
                  borderRadius: "4px",
                  padding: "2px 7px",
                  letterSpacing: "0.02em",
                  display: "inline-block",
                  width: "fit-content"
                }}>ðŸšš ×œ×œ× ×¢×œ×•×ª ×ž×©×œ×•×—</span>
              </div>
              <strong>â‚ª{totalPrice.toLocaleString()}</strong>
            </div>
            <div style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              backgroundColor: "rgba(245,158,11,0.07)",
              border: "1px solid rgba(245,158,11,0.25)",
              borderRight: "3px solid #f59e0b",
              borderRadius: "4px",
              padding: "9px 12px",
              margin: "0"
            }}>
              <span style={{ fontSize: "1rem", marginTop: "1px" }}>â„¹ï¸</span>
              <p style={{ fontSize: "0.82rem", color: "#d4b97a", margin: 0, lineHeight: "1.55" }}>
                <strong>×¢×œ×•×ª ×ž×©×œ×•×— ×ª×™×§×‘×¢ ×‘×©×™×—×ª ×”×”×–×ž× ×”</strong> ×‘×”×ª×× ×œ××–×•×¨ ×•×©×¢×ª ×”×”×’×¢×” ×”× ×“×¨×©×ª.
              </p>
            </div>
          </div>

          {!hasSelectedMains && (
            <div style={{
              backgroundColor: "rgba(252, 165, 165, 0.15)",
              border: "1px solid #fca5a5",
              color: "#fca5a5",
              padding: "10px",
              borderRadius: "var(--border-radius-sm)",
              fontSize: "0.9rem",
              marginBottom: "15px",
              textAlign: "center"
            }}>
              âš ï¸ ×™×© ×œ×‘×—×•×¨ ×œ×¤×—×•×ª ×ž× ×” ×¢×™×§×¨×™×ª ××—×ª ×œ×”×ž×©×š ×ª×™××•× ×”×”×–×ž× ×”.
            </div>
          )}

          {isSubmitted ? (
            <div className="lead-success-card" style={{
              backgroundColor: "var(--secondary-green-light)",
              border: "1px solid var(--secondary-green)",
              borderRadius: "var(--border-radius-sm)",
              padding: "15px",
              color: "var(--text-dark)",
              textAlign: "center",
              animation: "fadeIn 0.3s ease-in-out"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>âœ…</div>
              <h4 style={{ margin: "0 0 10px 0", color: "var(--secondary-green)", fontWeight: "bold" }}>×”×‘×§×©×” × ×©×œ×—×” ×‘×”×¦×œ×—×”!</h4>
              <p style={{ fontSize: "0.9rem", margin: "0 0 12px 0", lineHeight: "1.5" }}>
                ×ª×•×“×”, <strong>{formData.name}</strong>. ×¤×¨×˜×™ ×”×”×–×ž× ×” ×©×œ×š × ×§×œ×˜×• ×‘×ž×¢×¨×›×ª. × ×¦×™×’ ×˜×œ×¤×•× ×™ ×ž×˜×¢× "×˜×¢× ×ž×”×•×“×¨" ×™×—×–×•×¨ ××œ×™×š ×‘×”×§×“× ×œ×ž×¡×¤×¨ <strong>{formData.phone}</strong> ×œ×¦×•×¨×š ×ª×™××•× ×•×¡×’×™×¨×ª ×”××™×¨×•×¢.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                style={{ width: "100%", padding: "8px", borderColor: "var(--secondary-green)", color: "var(--secondary-green)" }}
                onClick={handleResetForm}
              >
                ×¢×“×›×•×Ÿ ×¤×¨×˜×™× / ×©×œ×™×—×” ×—×•×–×¨×ª
              </button>
            </div>
          ) : (
            <div style={{ marginTop: "15px" }}>
              {/* Method tab switcher */}
              <div style={{
                display: "flex",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "var(--border-radius-sm)",
                padding: "4px",
                marginBottom: "15px",
                border: "1px solid rgba(255,255,255,0.15)"
              }}>
                <button
                  type="button"
                  onClick={() => setCheckoutMethod("whatsapp")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: checkoutMethod === "whatsapp" ? "#25D366" : "transparent",
                    color: checkoutMethod === "whatsapp" ? "#fff" : "#25D366",
                    border: checkoutMethod === "whatsapp" ? "none" : "1.5px solid #25D366",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease",
                    marginLeft: "8px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}
                >
                  ðŸ’¬ ×•×•××˜×¡××¤ <span style={{ fontSize: "0.7rem", backgroundColor: checkoutMethod === "whatsapp" ? "rgba(255, 255, 255, 0.2)" : "rgba(37, 211, 102, 0.15)", padding: "2px 6px", borderRadius: "10px", fontWeight: "bold" }}>×ž×”×™×¨ ×‘×§×œ×™×§!</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutMethod("form")}
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: checkoutMethod === "form" ? "var(--primary-gold)" : "transparent",
                    color: checkoutMethod === "form" ? "#1e392a" : "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease"
                  }}
                >
                  ðŸ“ž ×˜×œ×¤×•×Ÿ ×—×•×–×¨
                </button>
              </div>

              <div 
                style={{ 
                  display: checkoutMethod === "whatsapp" ? "flex" : "none", 
                  flexDirection: "column", 
                  gap: "10px" 
                }}
              >
                {/* How it works for WhatsApp */}
                <p style={{
                  fontSize: "0.85rem",
                  color: "#cbd5e1",
                  margin: "0 0 10px 0",
                  lineHeight: "1.5",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  padding: "10px 12px",
                  borderRadius: "4px",
                  borderRight: "3px solid #25D366",
                  textAlign: "right"
                }}>
                  ðŸ’¡ <strong>××™×š ×–×” ×¢×•×‘×“?</strong> ×›×œ ×”×ž× ×•×ª ×•×”×‘×—×™×¨×•×ª ×©×œ×›× ×™×™×©×œ×—×• ××œ×™× ×• ×‘×§×œ×™×§ ××—×“ ×œ× ×™×™×“ ×ž×™×“ ×¢× ×”×ž×¢×‘×¨ ×œ××¤×œ×™×§×¦×™×™×ª ×•×•××˜×¡××¤ (×œ×œ× ×¦×•×¨×š ×‘×”×§×œ×“×” ×™×“× ×™×ª ×©×œ ×”×ª×¤×¨×™×˜).
                </p>
                <button
                  onClick={handleWhatsAppSubmit}
                  disabled={!canSubmit}
                  className="btn btn-whatsapp"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "1.15rem",
                    opacity: !canSubmit ? 0.6 : 1,
                    cursor: !canSubmit ? "not-allowed" : "pointer"
                  }}
                >
                  ðŸ’¬ ×©×œ×—×• ×ª×¤×¨×™×˜ ×‘×•×•××˜×¡××¤ ×œ×ª×™××•×
                </button>
              </div>

              <form 
                id="menu-lead-form"
                onSubmit={handleFormSubmit} 
                style={{ 
                  display: checkoutMethod === "form" ? "flex" : "none", 
                  flexDirection: "column", 
                  gap: "12px" 
                }}
              >
                {/* How it works for Form */}
                <p style={{
                  fontSize: "0.85rem",
                  color: "#cbd5e1",
                  margin: "0 0 10px 0",
                  lineHeight: "1.5",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  padding: "10px 12px",
                  borderRadius: "4px",
                  borderRight: "3px solid var(--primary-gold)",
                  textAlign: "right"
                }}>
                  ðŸ’¡ <strong>××™×š ×–×” ×¢×•×‘×“?</strong> ×œ××—×¨ ×‘×—×™×¨×ª ×”×ž× ×•×ª, ×ž×œ××• ××ª ×¤×¨×˜×™×›× ×‘×˜×•×¤×¡ ×•×‘×§×©×•×ª×™×›× ×™×™×©×œ×—×• ××œ×™× ×• ×ž×™×™×“×™×ª. × ×¦×™×’ ×˜×œ×¤×•× ×™ ×™×—×–×•×¨ ××œ×™×›× ×‘×”×§×“× ×œ×ª×™××•× ×•×¡×’×™×¨×ª ×”×”×–×ž× ×”, ×œ×¨×‘×•×ª ×¤×¨×˜×™ ×”×ž×©×œ×•×—.
                </p>
                {/* Honeypot field - invisible to users, autocomplete off, tabIndex -1 */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="email_confirm"
                    value={formData.email_confirm}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-label="××™×©×•×¨ ××™×ž×™×™×œ"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="×©× ×ž×œ× *"
                    required
                    aria-label="×©× ×ž×œ×"
                    className="builder-form-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="×ž×¡×¤×¨ ×˜×œ×¤×•×Ÿ ×œ×ª×™××•× *"
                    required
                    aria-label="×ž×¡×¤×¨ ×˜×œ×¤×•×Ÿ ×œ×ª×™××•×"
                    className="builder-form-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    placeholder="×¡×•×’ ×”××™×¨×•×¢ (×©×‘×ª ×—×ª×Ÿ, ×‘×¨×™×ª, ×—×™× ×”...)"
                    aria-label="×¡×•×’ ×”××™×¨×•×¢"
                    className="builder-form-input"
                  />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    placeholder="×ª××¨×™×š ×”××™×¨×•×¢"
                    aria-label="×ª××¨×™×š ×”××™×¨×•×¢"
                    style={{ flex: 1 }}
                    className="builder-form-input"
                  />
                  <input
                    type="text"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    placeholder="×–×ž×Ÿ / ×©×¢×”"
                    aria-label="×–×ž×Ÿ ××• ×©×¢×ª ×”××™×¨×•×¢"
                    style={{ flex: 1 }}
                    className="builder-form-input"
                  />
                </div>
                {/* Privacy Consent Checkbox */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginTop: "4px", textAlign: "right" }}>
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    required
                    style={{ marginTop: "4px", width: "16px", height: "16px", cursor: "pointer", accentColor: "var(--primary-gold)" }}
                  />
                  <label htmlFor="privacy-consent" style={{ fontSize: "0.88rem", color: "#e2e8f0", cursor: "pointer", lineHeight: "1.4" }}>
                    ×× ×™ ×ž×¡×›×™×/×” ×œ<a href="/privacy" target="_blank" style={{ color: "var(--primary-gold)", textDecoration: "underline" }}>×ž×“×™× ×™×•×ª ×”×¤×¨×˜×™×•×ª ×•×ª× ××™ ×”×©×™×ž×•×©</a> ×•×ž××©×¨/×ª ×™×¦×™×¨×ª ×§×©×¨ ×œ×¦×•×¨×š ×”×¦×¢×ª ×ž×—×™×¨. *
                  </label>
                </div>

                {submitError && (
                  <div style={{
                    color: "var(--accent-terracotta)",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}>
                    âš ï¸ {submitError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={!canSubmit || !formData.name || !formData.phone || !privacyAccepted || isSubmitting}
                  className="btn"
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "1.1rem",
                    backgroundColor: "var(--primary-gold)",
                    color: "#1e392a",
                    fontWeight: "bold",
                    opacity: (!canSubmit || !formData.name || !formData.phone || !privacyAccepted || isSubmitting) ? 0.6 : 1,
                    cursor: (!canSubmit || !formData.name || !formData.phone || !privacyAccepted || isSubmitting) ? "not-allowed" : "pointer"
                  }}
                >
                  {isSubmitting ? "âŒ› ×©×•×œ×— ×¤×¨×˜×™×..." : "ðŸ“ž ×©×œ×— ×¤×¨×˜×™× ×•× ×¦×™×’ ×™×—×–×•×¨ ××œ×™×š"}
                </button>
              </form>

              <button
                onClick={() => window.print()}
                type="button"
                className="btn btn-outline"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  marginTop: "10px"
                }}
              >
                ðŸ–¨ï¸ ×”×“×¤×¡×” ×©×œ ×”×ª×¤×¨×™×˜ / ×©×ž×™×¨×” ×›-PDF
              </button>
            </div>
          )}
        </div>

        {/* Offline Print Layout Overlay (Hidden in screen media, shown only in print) */}
        <div className="print-only" style={{ display: "none" }}>
          <h2>×˜×•×¤×¡ ×¡×™×›×•× ×”×–×ž× ×” - ×§×™×™×˜×¨×™× ×’ ×˜×¢× ×ž×”×•×“×¨</h2>
          <p>×›×ž×•×ª ××•×¨×—×™×: {guests}</p>
          <p>×ž×—×™×¨ ×ž×ª×•×›× ×Ÿ: â‚ª{totalPrice.toLocaleString()}</p>
          <hr />
          {menuData.map((category) => {
            const chosenIds = selections[category.id] || [];
            if (chosenIds.length === 0) return null;
            return (
              <div key={category.id}>
                <h3>{category.name.split(" (")[0]}:</h3>
                <ul>
                  {chosenIds.map((id) => (
                    <li key={id}>- {findDish(id)?.name}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

