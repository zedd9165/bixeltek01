import { NextResponse } from "next/server";

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  service?: string;
  industry?: string;
  page?: string;
  company_url?: string; // honeypot
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field: pretend success, store nothing.
  if (body.company_url) return NextResponse.json({ ok: true });

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  if (!name || !email || !phone || !emailRe.test(email)) {
    return NextResponse.json({ error: "Please enter your name, a valid email and a phone number." }, { status: 422 });
  }

  // Forward to email / CRM or log
  console.log("[lead]", { name, email, phone, website: body.website, service: body.service, industry: body.industry, page: body.page });

  return NextResponse.json({ ok: true });
}
