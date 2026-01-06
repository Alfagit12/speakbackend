const router = require("express").Router();
const User = require("../models/User");

const questions = {
  hobbies: "What are your hobbies?",
  travel: "Tell me about a trip you enjoyed."
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
      grammar_score: 80,
      uzbek_explanation: "Yaxshi javob, grammatikani biroz yaxshilang"
    }
  });
});

module.exports = router;
