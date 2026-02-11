import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getCourseById } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { courseId, hours } = await req.json();

    if (!courseId || typeof courseId !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid courseId" },
        { status: 400 }
      );
    }

    const course = await getCourseById(courseId);

    if (!course) {
      return NextResponse.json(
        { error: "Service not found" },
        { status: 404 }
      );
    }

    if (course.hourlyRate === 0) {
      return NextResponse.json(
        { error: "This service requires a custom quote. Please contact us via LinkedIn." },
        { status: 400 }
      );
    }

    // Validate hours
    const requestedHours = typeof hours === "number" && hours >= course.minHours && hours <= course.maxHours
      ? hours
      : course.minHours;

    const totalAmount = course.hourlyRate * requestedHours;

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
      "http://localhost:3000";

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${course.title} (${requestedHours} ${requestedHours === 1 ? "hour" : "hours"})`,
              description: course.subtitle,
              metadata: {
                courseId: course.id,
                hours: String(requestedHours),
              },
            },
            unit_amount: totalAmount * 100, // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&course=${course.id}`,
      cancel_url: `${baseUrl}/services`,
      metadata: {
        courseId: course.id,
        hours: String(requestedHours),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Internal server error";
    console.error("Stripe checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
