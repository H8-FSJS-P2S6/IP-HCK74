const express = require("express");
const app = express();
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
