export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { name, phone, subject, message, email_confirm } = data;

    // Honeypot spam bot check
    if (email_confirm) {
      console.warn("Spam bot submission blocked on backend.");
      return new Response(
        JSON.stringify({ success: true, message: "הפנייה נשלחה בהצלחה" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Validate input
    if (!name || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "נא למלא את כל שדות החובה (שם וטלפון)" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Call Resend API using environment variables
    const resendApiKey = context.env.RESEND_API_KEY;
    const toEmail = context.env.TO_EMAIL || "eliinga1206@gmail.com";
    const fromEmail = context.env.FROM_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ success: false, message: "שגיאת שרת: מפתח Resend אינו מוגדר" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Format the email request to Resend API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: subject || `ליד חדש מקייטרינג טעם מהודר - ${name}`,
        html: `
          <div style="direction: rtl; text-align: right; font-family: sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #244d20; border-bottom: 2px solid #d4af37; padding-bottom: 8px;">ליד חדש מקייטרינג טעם מהודר</h2>
            <p style="font-size: 1.1rem;"><strong>👤 שם מלא:</strong> ${name}</p>
            <p style="font-size: 1.1rem;"><strong>📞 טלפון:</strong> ${phone}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="color: #244d20;">🍽️ פרטי התפריט שהורכב:</h3>
            <pre style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap; font-family: sans-serif; font-size: 1rem; direction: rtl;">${message}</pre>
          </div>
        `,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, id: result.id }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: result.message || "נכשלה שליחת האימייל דרך השירות" }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

// Support preflight requests for CORS if called from other domains
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
