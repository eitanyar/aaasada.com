"use client";

import React, { useState } from "react";
import { CATERING_MENU, Dish } from "../data/catering-content";

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

export default function MenuBuilder() {
  const [guests, setGuests] = useState<number>(30);
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
  const LIMITS: Record<string, number> = {
    salads: 7,
    sides: 3,
    mains: 3,
    intermediates: 99,
    premiumIntermediates: 99,
    desserts: 99,
  };

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

  const basePricePerGuest = 58;

  // Find dish by ID helper
  const findDish = (id: string): Dish | undefined => {
    for (const cat of CATERING_MENU) {
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
  Object.entries(selections).forEach(([catId, ids]) => {
    ids.forEach((id) => {
      const dish = findDish(id);
      if (dish && dish.premiumPrice) {
        if (dish.pricePerGuest) {
          extraPrice += dish.premiumPrice * guests;
        } else {
          extraPrice += dish.premiumPrice;
        }
      }
    });
  });

  const totalPrice = basePrice + extraPrice;
  const hasSelectedMains = (selections.mains || []).length > 0;
  const canSubmit = isGuestCountValid && hasSelectedMains;

  // Build the WhatsApp message content
  const generateWhatsAppMessage = () => {
    let text = "שלום! רציתי לקבל הצעת מחיר לקייטרינג בשרי טעם מהודר.\n";
    text += `כמות אורחים: ${guests} איש\n`;
    text += "סוג תפריט: תפריט בסיס ₪58 למנה\n\n";

    CATERING_MENU.forEach((category) => {
      const chosenIds = selections[category.id] || [];
      const chosenDishes = chosenIds.map(id => findDish(id)).filter(Boolean) as Dish[];
      if (chosenDishes.length > 0) {
        text += `${category.name.split(" (")[0]}:\n`;
        chosenDishes.forEach((dish) => {
          if (dish.premiumPrice) {
            text += `- ${dish.name} (שדרוג +₪${dish.premiumPrice}${dish.pricePerGuest ? " למנה" : ""})\n`;
          } else {
            text += `- ${dish.name}\n`;
          }
        });
        text += "\n";
      }
    });

    text += `💰 סה"כ משוער לתשלום: ₪${totalPrice.toLocaleString()} (לא כולל דמי משלוח).\n`;
    text += "נשמח אם תחזרו אליי בהקדם לצורך תיאום וסגירה!";

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const url = `https://wa.me/972523939710?text=${generateWhatsAppMessage()}`;
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
    CATERING_MENU.forEach((category) => {
      const chosenIds = selections[category.id] || [];
      const chosenDishes = chosenIds.map(id => findDish(id)).filter(Boolean) as Dish[];
      if (chosenDishes.length > 0) {
        selectionsText += `${category.name.split(" (")[0]}:\n`;
        chosenDishes.forEach((dish) => {
          if (dish.premiumPrice) {
            selectionsText += `- ${dish.name} (שדרוג +₪${dish.premiumPrice}${dish.pricePerGuest ? " למנה" : ""})\n`;
          } else {
            selectionsText += `- ${dish.name}\n`;
          }
        });
        selectionsText += "\n";
      }
    });

    const fullMessage = `
פנייה חדשה להצעת מחיר עבור תפריט מורכב:

👤 שם מלא: ${formData.name}
📞 טלפון: ${formData.phone}
🎉 סוג האירוע: ${formData.eventType || "לא צוין"}
📅 תאריך: ${formData.eventDate || "לא צוין"}
⏰ שעה: ${formData.eventTime || "לא צוין"}
👥 כמות אורחים: ${guests} איש

🍽️ פירוט המנות שנבחרו:
${selectionsText}

💰 סכום משוער לתשלום: ₪${totalPrice.toLocaleString()} (לא כולל דמי משלוח)
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
          subject: `הצעת מחיר חדשה לקייטרינג - ${formData.name}`,
          message: fullMessage,
          email_confirm: formData.email_confirm,
        }),
      });
      
      const result = await response.json();
      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || "שגיאה בשליחת הטופס. אנא נסו שוב או התקשרו ישירות.");
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
      setSubmitError("שגיאת תקשורת עם השרת. אנא ודאו שאתם מחוברים לאינטרנט ונסו שוב.");
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
            1. כמות האורחים שלכם
          </h3>
          <p style={{ fontSize: "0.95rem", marginBottom: "12px" }}>
            מינימום הזמנה למשלוח אוכל מוכן: <strong>30 איש</strong>
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
              ⚠️ לתשומת לבכם: מינימום הזמנה לקייטרינג מוכן הוא 30 אורחים.
            </div>
          )}
        </div>

        {/* Step 2: Food Categories Selection */}
        {CATERING_MENU.map((category) => {
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
                  background: `linear-gradient(to left, rgba(30, 45, 20, 0.95) 45%, rgba(30, 45, 20, 0.45) 100%), url(${bannerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 var(--spacing-md)",
                  marginBottom: "var(--spacing-md)",
                  borderBottom: "2px solid var(--primary-gold)"
                }}
              >
                <h3 style={{ margin: 0, fontFamily: "sans-serif", fontWeight: "700", color: "#ffffff", fontSize: "1.2rem", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
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
                    boxShadow: "0 2px 8px rgba(0,0,0,0.25)"
                  }}>
                    נבחרו {currentSelection.length} מתוך {LIMITS[category.id]}
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
                          checked={isChecked}
                          disabled={isDisable}
                          onChange={() => {}} // handled by parent onClick
                        />
                        <div className="dish-details">
                          <span className="dish-title">
                            {dish.name}
                            {dish.isPremium && (
                              <strong style={{ color: "var(--accent-terracotta)", marginRight: "6px" }}>
                                (+₪{dish.premiumPrice}{dish.pricePerGuest ? " למנה" : ""})
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
          <h3 style={{ fontSize: "1.4rem", marginBottom: "15px", fontFamily: "sans-serif" }}>סיכום ההזמנה שלכם</h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "15px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>כמות מנות:</span>
              <strong>{guests} אורחים</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>מחיר בסיס למנה:</span>
              <strong>₪{basePricePerGuest}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
              <span>אוכל מוכן (בסיס):</span>
              <strong>₪{basePrice.toLocaleString()}</strong>
            </div>

            {extraPrice > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "10px" }}>
                <span>שדרוגים ותוספות:</span>
                <strong>₪{extraPrice.toLocaleString()}</strong>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.3rem", padding: "10px 0", color: "var(--primary-gold)" }}>
              <span>סה"כ לתשלום:</span>
              <strong>₪{totalPrice.toLocaleString()}</strong>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#ccc", margin: 0 }}>
              * המחיר המופיע הנו משוער ואינו כולל דמי משלוח. עלות המשלוח תיקבע על ידי הנציג בהתאם למיקום וזמן המסירה הנדרש.
            </p>
          </div>

          {!hasSelectedMains && (
            <div style={{
              backgroundColor: "rgba(220, 38, 38, 0.1)",
              border: "1px solid var(--accent-terracotta)",
              color: "var(--accent-terracotta)",
              padding: "10px",
              borderRadius: "var(--border-radius-sm)",
              fontSize: "0.9rem",
              marginBottom: "15px",
              textAlign: "center"
            }}>
              ⚠️ יש לבחור לפחות מנה עיקרית אחת להמשך תיאום ההזמנה.
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
              <div style={{ fontSize: "2rem", marginBottom: "8px" }}>✅</div>
              <h4 style={{ margin: "0 0 10px 0", color: "var(--secondary-green)", fontWeight: "bold" }}>הבקשה נשלחה בהצלחה!</h4>
              <p style={{ fontSize: "0.9rem", margin: "0 0 12px 0", lineHeight: "1.5" }}>
                תודה, <strong>{formData.name}</strong>. פרטי ההזמנה שלך נקלטו במערכת. נציג טלפוני מטעם "טעם מהודר" יחזור אליך בהקדם למספר <strong>{formData.phone}</strong> לצורך תיאום וסגירת האירוע.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                style={{ width: "100%", padding: "8px", borderColor: "var(--secondary-green)", color: "var(--secondary-green)" }}
                onClick={handleResetForm}
              >
                עדכון פרטים / שליחה חוזרת
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
                  💬 וואטסאפ <span style={{ fontSize: "0.7rem", backgroundColor: checkoutMethod === "whatsapp" ? "rgba(255, 255, 255, 0.2)" : "rgba(37, 211, 102, 0.15)", padding: "2px 6px", borderRadius: "10px", fontWeight: "bold" }}>מהיר בקליק!</span>
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
                  📞 טלפון חוזר (כשר)
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
                  💡 <strong>איך זה עובד?</strong> כל המנות והבחירות שלכם יישלחו אלינו בקליק אחד לנייד מיד עם המעבר לאפליקציית וואטסאפ (ללא צורך בהקלדה ידנית של התפריט).
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
                  💬 שלחו תפריט בוואטסאפ לתיאום
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
                  💡 <strong>איך זה עובד?</strong> לאחר בחירת המנות, מלאו את פרטיכם בטופס ובקשותיכם יישלחו אלינו מיידית. נציג טלפוני יחזור אליכם בהקדם לתיאום וסגירה (מושלם לבעלי טלפונים כשרים).
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
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="שם מלא *"
                    required
                    className="builder-form-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="מספר טלפון לתיאום *"
                    required
                    className="builder-form-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    placeholder="סוג האירוע (שבת חתן, ברית, חינה...)"
                    className="builder-form-input"
                  />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    placeholder="תאריך האירוע"
                    style={{ flex: 1 }}
                    className="builder-form-input"
                  />
                  <input
                    type="text"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    placeholder="זמן / שעה"
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
                    אני מסכים/ה ל<a href="/privacy" target="_blank" style={{ color: "var(--primary-gold)", textDecoration: "underline" }}>מדיניות הפרטיות ותנאי השימוש</a> ומאשר/ת יצירת קשר לצורך הצעת מחיר. *
                  </label>
                </div>

                {submitError && (
                  <div style={{
                    color: "var(--accent-terracotta)",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}>
                    ⚠️ {submitError}
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
                  {isSubmitting ? "⌛ שולח פרטים..." : "📞 שלח פרטים ונציג יחזור אליך"}
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
                🖨️ הדפסה של התפריט / שמירה כ-PDF
              </button>
            </div>
          )}
        </div>

        {/* Offline Print Layout Overlay (Hidden in screen media, shown only in print) */}
        <div className="print-only" style={{ display: "none" }}>
          <h2>טופס סיכום הזמנה - קייטרינג טעם מהודר</h2>
          <p>כמות אורחים: {guests}</p>
          <p>מחיר מתוכנן: ₪{totalPrice.toLocaleString()}</p>
          <hr />
          {CATERING_MENU.map((category) => {
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
