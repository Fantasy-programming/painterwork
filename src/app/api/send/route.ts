import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MessageUsEmail from "@/components/StaffEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, medium, phone, message } = await req.json();
  console.log({ name, email, medium, phone, message });

  try {
    const data = await resend.emails.send({
      from: "Hello <support@fantasyprogramming.tech>", // your verified domain
      to: `${email}`, // the email address you want to send a message
      subject: `${name} has a message!`,
      react: MessageUsEmail({ name, email, medium, phone, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
