const express = require("express");
const cors = require("cors");
const https = require("https");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running bro 🚀");
});

app.get("/analyze", async (req, res) => {
  const url = req.query.url;
  const API_KEY = "AIzaSyArq_VR9OUnUO9u4EDm4BAPqRkuHCdDuiI";
  
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}`;

  https.get(apiUrl, (response) => {
    let data = "";
    response.on("data", (chunk) => { data += chunk; });
    response.on("end", () => {
      try {
        res.json(JSON.parse(data));
      } catch (e) {
        res.status(500).json({ error: "Parse error" });
      }
    });
  }).on("error", (err) => {
    res.status(500).json({ error: err.message });
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});