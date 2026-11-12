import { NextResponse } from "next/server";

const PRODUCTION_WEBHOOK_URL =
  "https://maroon-sardine-668853.hostingersite.com/webhook/lumiere-booking";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, branch, service } = body;

    console.log("New Lumiere booking received:", {
      name,
      phone,
      email,
      branch,
      service,
    });

    // تنظيف وضمان توجيه الطلب إلى مسار الإنتاج /webhook/ وليس /webhook-test/
    let webhookUrl = (
      process.env.N8N_WEBHOOK_URL ||
      process.env.BOOKING_WEBHOOK_URL ||
      ""
    ).trim();

    // إذا كان الرابط فارغاً أو غير صالح، نستخدم رابط الإنتاج المعتمد
    if (!webhookUrl || !webhookUrl.startsWith("http")) {
      webhookUrl = PRODUCTION_WEBHOOK_URL;
    } else if (webhookUrl.includes("/webhook-test/")) {
      // حماية صارمة لمنع إرسال البيانات لمسار التيست التجريبي
      webhookUrl = webhookUrl.replace("/webhook-test/", "/webhook/");
    }

    const payload = {
      name: name || "غير محدد",
      phone: phone || "",
      email: email || "",
      branch: branch || "فرع الروضة",
      service: service || "استشارة عامة",
      timestamp: new Date().toISOString(),
    };

    let n8nSuccess = false;
    let n8nStatus = 0;

    // المحاولة الأساسية
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      n8nStatus = response.status;
      if (response.ok) {
        n8nSuccess = true;
      }
    } catch (primaryErr) {
      console.error("Primary n8n Webhook fetch failed:", primaryErr);
    }

    // إذا فشل الرابط الأولي، نعيد المحاولة فوراً مع رابط الإنتاج الثابت
    if (!n8nSuccess && webhookUrl !== PRODUCTION_WEBHOOK_URL) {
      try {
        console.warn("Retrying with permanent production webhook URL...");
        const fallbackRes = await fetch(PRODUCTION_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
          cache: "no-store",
        });
        if (fallbackRes.ok) {
          n8nSuccess = true;
          n8nStatus = fallbackRes.status;
        }
      } catch (fallbackErr) {
        console.error("Fallback n8n Webhook fetch failed:", fallbackErr);
      }
    }

    return NextResponse.json({
      success: true,
      n8nDelivered: n8nSuccess,
      n8nStatus,
      message: "تم استلام طلب الحجز بنجاح وسيتم التواصل معكِ فوراً",
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
