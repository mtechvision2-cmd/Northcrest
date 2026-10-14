import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Where a writable SQLite database exists (z.ai sandbox, self-hosted server)
// leads are stored with Prisma. Where it does not (Netlify serverless), the
// lead is printed to the function logs instead so it is never lost, and the
// visitor still sees a success message.
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim().slice(0, 40);
    const projectType = String(body.projectType ?? "").trim().slice(0, 120);
    const budget = String(body.budget ?? "").trim().slice(0, 60);
    const message = String(body.message ?? "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please tell us your name." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "That email address does not look right. Please check it." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        {
          error:
            "Please add a few more details about the project so we can help properly.",
        },
        { status: 400 }
      );
    }

    if (db) {
      try {
        const saved = await db.contactMessage.create({
          data: { name, email, phone, projectType, budget, message },
        });

        return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
      } catch (err) {
        console.error(
          "[contact] database write failed, logging the lead instead:",
          err
        );
      }
    }

    console.log(
      "[contact-lead]",
      JSON.stringify({
        name,
        email,
        phone,
        projectType,
        budget,
        message,
        receivedAt: new Date().toISOString(),
      })
    );

    return NextResponse.json({ ok: true, stored: "log" }, { status: 201 });
  } catch (err) {
    console.error("[contact] failed to handle submission:", err);
    return NextResponse.json(
      {
        error:
          "We could not save your message right now. Please email us directly at info@northcrestcg.com.",
      },
      { status: 500 }
    );
  }
}
