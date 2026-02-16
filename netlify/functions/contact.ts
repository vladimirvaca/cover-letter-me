import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  // 1. Only allow POST requests
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { name, message, captchaToken } = await req.json();

    // 2. Validate with Google reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(JSON.stringify({ error: "Bot detected" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    //Send an email
    console.log("New message from:", name, message);

    return new Response(JSON.stringify({ message: "Thanks for writing!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (_error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};

export const config: Config = {
  path: "/api/contact",
};

