'use server';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { type, name, email, message } = await req.json();

  // Ensure all required fields are present
  if (type === 'contact') {
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
  } else if (type === 'newsletter') {
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
  } else {
    return NextResponse.json({ error: 'Invalid request type.' }, { status: 400 });
  }

  // Nodemailer transport configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ammarqasimpakistan123@gmail.com',
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  

  const mailOptions = {
    from: email,
    to: 'ammarqasimpakistan123@gmail.com', // Your Gmail address to receive the email
    subject: '',
    text: '',
  };

  if (type === 'contact') {
    mailOptions.subject = `New Contact Form Submission from ${name}`;
    mailOptions.text = `You have a new message from ${name} (${email}):\n\n${message}`;
  } else if (type === 'newsletter') {
    mailOptions.subject = `New Newsletter Subscription`;
    mailOptions.text = `You have a new subscriber: ${email}`;
  }

  try {
    // Send email using Nodemailer
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
