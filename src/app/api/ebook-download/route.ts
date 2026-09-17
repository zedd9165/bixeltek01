import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import axios from "axios";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, clinic } = data;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    /* ───────── EMAIL DISPATCH ───────── */
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    const mailOptions = {
      from: '"Bixeltek Downloads" <noreply@bixeltek.com>',
      to: "zee@bixeltek.com",
      subject: `📘 Dental Growth Playbook Downloaded: ${clinic || name}`,
      text: `
New Dental Playbook Download:

Practitioner: ${name}
Work Email: ${email}
Clinic Name: ${clinic || "Not Provided"}
Downloaded Asset: BixDental Growth Playbook (2026 Edition)
Date/Time: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
          <h2 style="color: #1a56db; margin-bottom: 15px;">New Dental Playbook Download</h2>
          <table style="width: 100%; max-width: 500px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Practitioner:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Work Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Clinic Name:</td>
              <td style="padding: 8px 0;">${clinic || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Asset:</td>
              <td style="padding: 8px 0;">BixDental Growth Playbook 2026</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    /* ───────── OPTIONAL FRAPPE LEAD SYNC ───────── */
    /*
    if (process.env.FRAPPE_URL && process.env.FRAPPE_API_KEY) {
      const frappe = axios.create({
        baseURL: process.env.FRAPPE_URL,
        headers: {
          Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
          "Content-Type": "application/json",
        },
      });

      await frappe.post("/api/resource/CRM Lead", {
        doctype: "CRM Lead",
        first_name: name,
        email: email,
        organization: clinic,
        source: "Dental Playbook Download",
        custom_service: "Dental Marketing",
      });
    }
    */

    return NextResponse.json({ success: true, message: "Email sent" }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Ebook API Error:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Failed to process download request" },
      { status: 500 }
    );
  }
}