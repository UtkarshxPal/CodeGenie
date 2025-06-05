const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDpOkgAl91RbJ6XmVRToMWT0AQtI4KmjHY",
});

module.exports = ai;
