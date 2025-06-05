const express = require("express");
const cors = require("cors");

const app = express();
const rateLimit = require("express-rate-limit");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ai = require("./services/GenAI");

function stripMarkdownCodeFences(text) {
  return text.replace(/^```(\w+)?\n/, "").replace(/\n```$/, "");
}

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20, // 20 requests per minute
  message: { error: "Too many requests, please try again later" },
});

function createPrompt(message) {
  return `You are an expert frontend developer specializing in modern, responsive web design.

TASK: Create a professional landing page section based on this description: "${message}"

REQUIREMENTS:
- Modern, clean design with current web standards
- Fully responsive (mobile-first approach)
- Semantic HTML5 structure
- CSS Grid/Flexbox for layouts
- Smooth animations and hover effects
- Accessibility considerations (ARIA labels, contrast)
- Professional color schemes and typography

TECHNICAL SPECIFICATIONS:
- Use CSS custom properties for consistent theming
- Include responsive breakpoints: 768px, 1024px, 1200px
- Optimize for performance (avoid heavy animations)
- Cross-browser compatibility
- Touch-friendly interactive elements

OUTPUT FORMAT:
Return ONLY a valid JSON object with exactly these two properties:
{
  "html": "your_html_content_here",
  "css": "your_css_content_here"
}

CRITICAL: 
- NO markdown formatting, code fences, or explanations
- HTML should be semantic and accessible
- CSS should be production-ready and optimized
- Include subtle animations for better UX`;
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
