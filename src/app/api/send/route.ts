import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

import { resendKey } from '@/lib/env';

import MessageUsEmail from '@/components/mail/StaffEmail';

const resend = new Resend(resendKey);

export async function POST(req: NextRequest) {
  const { name, email, medium, phone, message } = await req.json();
  console.log({ name, email, medium, phone, message });

  try {
    const data = await resend.emails.send({
      from: 'Hello <support@fantasyprogramming.tech>',
      to: `${email}`,
      subject: `${name} has a message!`,
      react: MessageUsEmail({ name, email, medium, phone, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
