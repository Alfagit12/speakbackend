const router = require("express").Router();
const User = require("../models/User");

router.get("/:id/stats", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.json({ success: false });

  res.json({ success: true, stats: user.stats });
});

module.exports = router;
