const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

/* SIGNUP */
router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists)
    return res.json({ success: false, error: "Email mavjud" });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, phone, password: hash });

  res.json({ success: true, user });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.json({ success: false });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.json({ success: false });

  res.json({ success: true, user });
});

module.exports = router;
