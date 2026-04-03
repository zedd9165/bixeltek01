import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";

/* ───────── Ensure Territory Exists ───────── */

const ensureTerritory = async (frappe: any, territoryName: string) => {
  if (!territoryName) return;

  try {
    const check = await frappe.get("/api/resource/CRM Territory", {
      params: {
        filters: JSON.stringify([["name", "=", territoryName]]),
        limit_page_length: 1,
      },
    });

    const exists = check.data?.data || [];

    if (exists.length === 0) {
      console.log(`Creating territory: ${territoryName}`);

      await frappe.post("/api/resource/CRM Territory", {
        doctype: "CRM Territory",
        territory_name: territoryName,
      });

      console.log(`✅ Territory created: ${territoryName}`);
    }
  } catch (err) {
    console.error("❌ Territory check/create failed:", err);
  }
};

/* ───────── API Route ───────── */

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      name,
      email,
      phone,
      company,
      country,
      marketingBudget,
      services,
      website,
      message,
      websiteType,
      seoGoals,
      ppcPlatform,
      city,
    } = data;

    const fullName =
      firstName && lastName ? `${firstName} ${lastName}` : name || "N/A";

    const location = country || city;

    /* ───────── EMAIL LOGIC ───────── */

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    await transporter.verify();

    let serviceDetails = "";

    if (services === "Web Design and Development" && websiteType) {
      serviceDetails += `\nWebsite Type: ${websiteType}`;
    }

    if (services === "SEO Optimization" && seoGoals) {
      serviceDetails += `\nSEO Goals: ${seoGoals}`;
    }

    if (services === "PPC Campaigns" && ppcPlatform) {
      serviceDetails += `\nPPC Platform: ${ppcPlatform}`;
    }

    const mailOptions = {
      from: '"Bixeltek Support" <noreply@bixeltek.com>',
      to: "zee@bixeltek.com",
      subject: "Bixeltek - New Contact Form Submission",
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Country/City: ${location}
Marketing Budget: ${marketingBudget || "N/A"}
Interested Service: ${services}${serviceDetails}
Message: ${message}
Website: ${website}
      `,
    };

    await transporter.sendMail(mailOptions);


    /* ───────── FRAPPE CLIENT ───────── */

    const frappe = axios.create({
      baseURL: process.env.FRAPPE_URL,
      headers: {
        Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    /* ───────── DUPLICATE CHECK ───────── */

    const dupCheck = await frappe.get("/api/resource/CRM Lead", {
      params: {
        fields: JSON.stringify(["name", "email"]),
        filters: JSON.stringify([["email", "=", email]]),
        limit_page_length: 1,
      },
    });

    const existing = dupCheck.data?.data || [];

    if (existing.length > 0) {
      console.log("⚠️ Lead already exists, skipping insert");

      return NextResponse.json(
        { message: "Email sent, lead already exists" },
        { status: 200 }
      );
    }

    /* ───────── TERRITORY CHECK ───────── */

    await ensureTerritory(frappe, country);

    /* ───────── CREATE LEAD ───────── */

    const lead = {
      doctype: "CRM Lead",
      first_name: firstName || fullName,
      last_name: lastName || "",
      email: email,
      mobile_no: phone,
      organization: company,
      website: website,
      territory: country,
      custom_city: city,
      source: "Website Form Submission",
      custom_message: message,
      custom_service: services,
    };

    const response = await frappe.post("/api/resource/CRM Lead", lead);

    console.log("✅ Lead inserted into Frappe:", response.data);

    return NextResponse.json(
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Server Error:", error.response?.data || error);

    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}