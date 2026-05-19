const axios = require("axios");

const analyzeComplaint = async (req, res) => {
  try {
    const { complaint } = req.body;

    const prompt = `
Analyze this complaint and return:
1. Priority
2. Department
3. Short Summary
4. Auto Response

Complaint:
${complaint}
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      result: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "AI analysis failed",
    });
  }
};

module.exports = {
  analyzeComplaint,
};