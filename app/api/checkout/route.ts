import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getCourseById } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { courseId } = await req.json();

    if (!courseId || typeof courseId !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid courseId" },
        { status: 400 }
      );
    }

    const course = await getCourseById(courseId);

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    if (course.price === 0) {
      return NextResponse.json(
        { error: "This course requires a custom quote. Please contact us via LinkedIn." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
      "http://localhost:3000";

    // Create a Stripe Checkout Session using inline price_data.
    // This is stateless — no database writes needed on checkout creation.
    // On success, Stripe sends a receipt email directly to the customer.
    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.title,
              description: course.subtitle,
              metadata: {
                courseId: course.id,
              },
            },
            unit_amount: course.price * 100, // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&course=${course.id}`,
      cancel_url: `${baseUrl}/courses`,
      metadata: {
        courseId: course.id,
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
