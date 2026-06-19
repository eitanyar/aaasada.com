import React from "react";

export default function ProfessionalSupervision() {
  return (
    <div className="supervision-box">
      <div className="supervision-content">
        <h4 className="supervision-title">פיקוח מקצועי: אלי גולדמן</h4>
        <p className="supervision-desc">
          מומחה לניהול מטבחים וכשרות מהודרת (בד"ץ מחפוד).{" "}
          <a href="/eli-goldman" className="supervision-link">
            לפרופיל המלא &gt;
          </a>
        </p>
      </div>
      <div className="supervision-badge">
        <span>30</span>
        שנה
      </div>
    </div>
  );
}
