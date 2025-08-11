
export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: { email: process.env.MAIL_FROM },
        to: [{ email: process.env.MAIL_TO }],
        subject: "New AidSwap Mailing List Signup",
        htmlContent: `<p>New signup: ${email}</p>`
      })
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
