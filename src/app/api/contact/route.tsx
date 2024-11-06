"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { type, name, email, message } = await req.json();

  // Ensure all required fields are present
  if (type === "contact") {
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
  } else if (type === "newsletter") {
    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      { error: "Invalid request type." },
      { status: 400 }
    );
  }

  // Nodemailer transport configuration using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // smtp.gmail.com
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASSWORD, // Your Gmail app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Set the sender's email to the same as user email
    to: process.env.EMAIL_TO, // Your email address where the form submissions will be sent
    subject: "",
    text: "",
  };

  if (type === "contact") {
    mailOptions.subject = `New Contact Form Submission from ${name}`;
    mailOptions.text = `You have a new message from ${name} (${email}):\n\n${message}`;
  } else if (type === "newsletter") {
    mailOptions.subject = `New Newsletter Subscription`;
    mailOptions.text = `You have a new subscriber: ${email}`;
  }

  try {
    // Send email using Nodemailer
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message); // Now we can safely access `error.message`
    } else {
      console.error("Unexpected error:", error);
    }
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
