import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PAIEMENTPRO_INIT_URL =
  "https://www.paiementpro.net/webservice/onlinepayment/js/initialize/initialize.php";

app.post("/api/payment/init", async (req, res) => {
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
    res.json(data);
  } catch (err) {
    console.error("PaiementPro proxy error:", err);
    res.status(502).json({ success: false, error: "Proxy error" });
  }
});

const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
