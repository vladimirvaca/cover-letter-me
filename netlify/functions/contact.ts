import type { Config, Context } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, email, message, captchaToken } = await req.json();

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ error: 'Bot detected' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!toEmail) {
      console.error('TO_EMAIL environment variable is not set.');
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }

    // Send email to site owner
    await resend.emails.send({
      from: 'Portfolio Contact <hi@rwcoder.com>',
      to: toEmail,
      subject: `New message from ${name}`,
      html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Vladimir Vaca <hi@rwcoder.com>',
      to: email,
      subject: 'Thank you for your message!',
      html: `<p>Hi ${name},</p><p>Thank you for getting in touch! I've received your message and I'm excited to connect with you. I'll review your message and get back to you soon.</p><p>In the meantime, feel free to connect with me on my social networks.</p><p>Best regards,<br>Vladimir Vaca</p>`,
    });

    return new Response(
      JSON.stringify({
        message: "Thank you for your message! I've received it and will get back to you shortly.",
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
};

export const config: Config = {
  path: '/api/contact',
};
