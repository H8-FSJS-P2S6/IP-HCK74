const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.gemini_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

class apiController {
  static async Gemini(req, res, next) {
    try {
      const prompt = "Give me interior design.";

      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      next();
    }
  }
}

module.exports = apiController;
