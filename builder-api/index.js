const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

async function run(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error fetching response:", error);
    res.status(500).json({ message: "Sorry, something went wrong." });
  }
}

app.use(express.json());
app.use(cors());

app.post("/api/gemini", async (req, res) => {
  const prompt = req.body.prompt;
  try {
    const message = await run(prompt);
    res.json({ message });
  } catch (error) {
    console.error("Error fetching response:", error);
    res.status(500).json({ message: "Sorry, something went wrong." });
  }
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
