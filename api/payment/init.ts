import type { VercelRequest, VercelResponse } from "@vercel/node";

const PAIEMENTPRO_INIT_URL =
  "https://www.paiementpro.net/webservice/onlinepayment/js/initialize/initialize.php";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(PAIEMENTPRO_INIT_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("PaiementPro proxy error:", err);
    return res.status(502).json({ success: false, error: "Proxy error" });
  }
}
