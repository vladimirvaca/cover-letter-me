import type { Config, Context } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

// Utility to encode email subject for non-ASCII (emoji) support
function encodeSubject(subject: string): string {
  // If all ASCII, return as is
  if (/^[\x00-\x7F]*$/.test(subject)) return subject;
  // Otherwise, encode as MIME encoded-word (RFC 2047)
  const base64 = Buffer.from(subject, 'utf-8').toString('base64');
  return `=?UTF-8?B?${base64}?=`;
}

export default async (req: Request, _context: Context) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, email, message, captchaToken } = await req.json();

    // Validate required fields
    if (!name || !email || !message || !captchaToken) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error('RECAPTCHA_SECRET_KEY environment variable is not set.');
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    let recaptchaRes: Response;
    let recaptchaData: any;

    try {
      recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
      recaptchaData = await recaptchaRes.json();
    } catch (fetchError) {
      console.error('Error verifying reCAPTCHA:', fetchError);
      return new Response(
        JSON.stringify({ error: 'reCAPTCHA verification failed' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Log reCAPTCHA response for debugging
    console.log('reCAPTCHA response:', {
      success: recaptchaData.success,
      score: recaptchaData.score,
      action: recaptchaData.action,
      challenge_ts: recaptchaData.challenge_ts,
    });

    if (!recaptchaData.success) {
      console.warn('reCAPTCHA verification failed:', recaptchaData);
      return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Lower threshold to 0.3 for better user experience
    if (recaptchaData.score < 0.3) {
      console.warn(`reCAPTCHA score too low: ${recaptchaData.score}`);
      return new Response(JSON.stringify({ error: 'Failed spam detection' }), {
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
      from: 'CL Contact <hello@rwcoder.com>',
      to: toEmail,
      subject: encodeSubject(`New message from ${name}`),
      html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Vladimir Vaca <hello@rwcoder.com>',
      to: email,
      subject: encodeSubject('Thank you for your message!'),
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
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config: Config = {
  path: '/api/contact',
};
