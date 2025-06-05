const express = require("express");
const cors = require("cors");

const ai = require("./services/GenAI");
const createPrompt = require("./services/promptGen");
const limiter = require("./services/limiter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function stripMarkdownCodeFences(text) {
  return text.replace(/^```(\w+)?\n/, "").replace(/\n```$/, "");
}

app.post("/chat", limiter, async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Please input a prompt" });
  const prompt = createPrompt(message);
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    let rawText = response?.candidates[0]?.content?.parts[0]?.text;
    console.log("Raw AI response with code fences:", rawText);

    rawText = stripMarkdownCodeFences(rawText);

    let jsonData;
    try {
      jsonData = JSON.parse(rawText);
    } catch (parseErr) {
      console.error("Failed to parse AI response JSON:", rawText);
      return res.status(500).json({ error: "Invalid AI response format" });
    }

    console.log(jsonData);
    res.status(200).json(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
