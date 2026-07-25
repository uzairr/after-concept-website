import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Submits the contact form to Formspree.
 *
 * Setup (one-time):
 *  1. Create a free account at https://formspree.io
 *  2. Create a new form and copy your Form ID (e.g. "xkgnprdz")
 *  3. Add it to your .env.local:
 *       FORMSPREE_FORM_ID=xkgnprdz
 *
 * Without the env var the route still returns 200 and logs the
 * submission to the server console (useful during local development).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, budget, message } = body as {
      name?: string;
      email?: string;
      service?: string;
      budget?: string;
      message?: string;
    };

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const formspreeId = process.env.FORMSPREE_FORM_ID;

    if (!formspreeId) {
      // Dev fallback — log submission and return success
      console.log("[contact] Form submission received (no FORMSPREE_FORM_ID set):", {
        name,
        email,
        service,
        budget,
        message,
      });
      return NextResponse.json({ success: true });
    }

    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, service, budget, message }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "unknown error");
      console.error("[contact] Formspree error:", detail);
      return NextResponse.json(
        { error: "Failed to deliver your message. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
