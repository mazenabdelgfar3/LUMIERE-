import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, branch, service } = body;

    console.log("New Lumiere booking received:", { name, phone, email, branch, service });

    // رابط الـ Production Webhook المعتمد على n8n
    const webhookUrl =
      process.env.N8N_WEBHOOK_URL ||
      process.env.BOOKING_WEBHOOK_URL ||
      "https://maroon-sardine-668853.hostingersite.com/webhook/lumiere-booking";

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          branch,
          service,
        }),
      }).catch((err) => console.error("n8n Webhook error:", err));
    }

    return NextResponse.json({
      success: true,
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
