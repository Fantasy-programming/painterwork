import { url } from '@/lib/env';

const baseUrl = `${url}/api/send`;

export type MailInput = {
  name: string;
  email: string;
  phone: string;
  medium: string;
  message: string;
};

export const sendMail = async (data: MailInput) => {
  try {
    await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

const resendService = {
  sendMail,
};

export default resendService;
