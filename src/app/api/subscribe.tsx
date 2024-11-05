import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  // You can add your logic here to save the email (e.g., save to database or send email)
  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  // Simulating a successful response
  return NextResponse.json({ message: 'Subscribed successfully!' });
}
