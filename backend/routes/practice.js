const router = require("express").Router();
const User = require("../models/User")

const questions = {
  hobbies: "What are your hobbies?",
  routine: "Describe your daily routine.",
  travel: "Tell me about a trip you enjoyed.",
  food: "What is your favorite food?",
  family: "Tell me about your family.",
  work: "What do you do for work?"
};

router.get("/question/:topic", (req, res) => {
  res.json({ success: true, question: questions[req.params.topic] });
});

router.post("/analyze", async (req, res) => {
  const { userId } = req.body;

  if (userId) {
    const user = await User.findById(userId);
    user.stats.totalPoints += 10;
    user.stats.practicesCompleted += 1;
    await user.save();
  }

  res.json({
    success: true,
    feedback: {
      pronunciation_score: 80,
      grammar_score: 75,
      fluency_score: 78,
      vocabulary_score: 82,
      positive_points: ["Clear answer"],
      mistakes: ["Minor grammar issue"],
      suggestions: ["Speak slower"],
      uzbek_explanation: "Javob yaxshi, lekin grammatikani biroz to‘g‘rilang."
    }
  });
});

module.exports = router;
