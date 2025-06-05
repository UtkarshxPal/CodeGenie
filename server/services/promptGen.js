function createPrompt(message) {
  return `You are an expert frontend developer specializing in modern, responsive web design.
  
  TASK: Create a professional landing page section based on this description: "${message}"
  
  REQUIREMENTS:
  - Try to make 2-3 sections of the topic , if possible add a roadmap like structure also , and a pricing structure
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

module.exports = createPrompt;
